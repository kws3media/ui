<!--
  @component


  @param {string} [key=""] - A property you can send to uniquely identify an uploader.

It is returned back in the `getFile()` call from `file_chosen` event, Default: `""`
  @param {string} [message="Choose File..."] - Message displayed in uploader, Default: `"Choose File..."`
  @param {string} [info=""] - Information / help / subtitle displayed under the uploader, Default: `""`
  @param {''|'grey'|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [info_color="grey"] - Color of the information text, Default: `"grey"`
  @param {number} [max=5000000] - Maximum allowed size in bytes, Default: `5000000`
  @param {string | array} [allowed=*] - Allowed file types - accepts the string `"*"`, or an array of file type suffixes, Default: `*`
  @param {boolean} [disabled=false] - Disables the uploader, Default: `false`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the File Input, Default: `""`
  @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the File Input, Default: `""`
  @param {string} [class=""] - CSS classes for the Uploader, Default: `""`
  @param {boolean} [multiple=false] - Disables the multiple file uploader, Default: `false`
  @param {function} [preparer()] - Cloud Upload preparer
  @param {function} [acknowledger()] - Cloud Upload acknowledger
  @param {string} [inner_style=""] - CSS style for the Uploader, Default: `""`
  @param {boolean} [is_cloud_upload=false] - Specifies Cloud Upload or normal upload, Default: `false`
  @param {string} [queue="a-random-queue-name"] - Queue name for cloud Uploader, Default: `"a-random-queue-name"`
  @param {string | array} [images] - Images uploaded
  @param {string} [notification_position = "bottom-left"] - Notification position speifier, Default: `"bottom-left"`

  ### Events
  - `file_uploaded` - Triggered when upload completes
  - `file_upload_error` - Triggered when an error occurs on upload.
Returns error message in `event.detail`
  - `file_chosen` - Triggered when file is chosen by user.
The following functions are returned in `event.detail`:

- `getFile()`: Returns information about the chosen file
- `progress()`: Function to call for updating progress, send file uploaded bytes as parameter
- `uploaded()`: Function to call when upload completes
- `error()`: Function to call on upload error, send error message as parameter

-->
<div
  on:dragenter={dragenter}
  on:dragleave={dragleave}
  on:drop={drop}
  class="kws-file-upload {klass} is-{color} is-{size}
    is-{_error ? 'danger' : ''} {disabled ? 'is-disabled' : ''}
    {_is_finished ? 'is-success' : ''} {_is_dragging ? 'is-dragging' : ''}">
  <div class="file-upload-inner" style={inner_style}>
    <!--
        Slot containing uploader design
    -->
    <slot
      filename={_filename}
      uploading={_is_uploading}
      progress={_progress}
      finished={_is_finished}
      error={_error}
      {fileTypes}
      {maxFileSize}
      {info}
      {info_color}
      error_message={_error_message}
      {failedValidation}>
      <div class="up-icon">
        {#if _is_uploading}
          <span class="loader" />
        {:else if _is_finished}
          <Icon size="" icon="check-circle" class="fa-lg" />
        {:else}
          <Icon size="" icon="upload" class="fa-lg" />
        {/if}
      </div>
      <div class="file">
        {#if _is_uploading}
          <div class="upload-progress">
            <div class="progress-inner">
              <div class="bar" style="width:{_progress}%" />
            </div>
          </div>
          <div class="progress-caption">{_progress}% - Uploading...</div>
        {:else if _is_finished}
          <div class="filename">Upload complete!</div>
        {:else}
          <div class="filename"><span>{_filename}</span></div>
        {/if}
      </div>
    </slot>
    {#if is_cloud_upload}
      <input
        class="file-input"
        bind:this={uploadInput}
        multiple
        type="file"
        name="file"
        {accept}
        on:change={updateState} />
    {:else}
      <input
        bind:this={uploadInput}
        type="file"
        name="file"
        on:change={updateFile}
        {multiple}
        {accept}
        disabled={disabled || _is_uploading || _is_finished} />
    {/if}
  </div>
</div>

<script>
  import { Icon, Notifications } from "@kws3/ui";
  import { debounce } from "@kws3/ui/utils";
  import { createEventDispatcher, onMount } from "svelte";
  import { readable } from "svelte/store";
  import Net from "./services/net";
  import {
    activeUploadsCount,
    totalUploadProgress,
    uploadQueue,
  } from "./services/uploadQueueStore";
  import UploadNotification from "./uploader/UploadNotification.svelte";

  /**
   *
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */
  const fire = createEventDispatcher();

  /**
   * A property you can send to uniquely identify an uploader.
   *
   * It is returned back in the `getFile()` call from `file_chosen` event
   * @type {string}
   */
  export let key = "",
    /**
     * Message displayed in uploader
     * @type {string}
     */
    message = "Choose File...",
    /**
     * Information / help / subtitle displayed under the uploader
     * @type {string}
     */
    info = "",
    /**
     * Color of the information text
     * @type {ColorOptions | 'grey'}
     */
    info_color = "grey",
    /**
     * Maximum allowed size in bytes
     * @type {Number}
     */
    max = 5000000,
    /**
     * Allowed file types - accepts the string `"*"`, or an array of file type suffixes
     * @type {string | array}
     */
    allowed = "*",
    /**
     * Disables the uploader
     * @type {boolean}
     */
    disabled = false,
    /**
     * Size of the File Input
     * @type {SizeOptions}
     */
    size = "",
    /**
     * Color of the File Input
     * @type {ColorOptions}
     */
    color = "",
    /**
     * Whether to upload multiple or single file(s).
     * @type {boolean}
     */
    multiple = false,
    /**
     * String of accepted file types
     * @type {string}
     */
    accept = "*",
    /**
     * CSS styles
     * @type {string}
     */
    inner_style = "",
    /**
     * Specifies Cloud Upload or normal upload.
     * @type {boolean}
     */
    is_cloud_upload = false,
    /**
     * Cloud Upload preparer.
     * @type {function}
     */
    preparer,
    /**
     * Cloud Upload acknowledger.
     * @type {function}
     */
    acknowledger,
    /**
     * Upload queue name
     * @type {string}
     */
    queue = "a-random-queue-name",
    /**
     * Images uploaded
     * @type {string | array}
     */
    images,
    /**
     * Notification position speifier
     * @type {string}
     */
    notification_position = "bottom-left";

  /**
   * CSS classes for the Uploader
   */
  let klass = "";
  export { klass as class };

  let _filename = "No file selected",
    _error = false,
    _error_message = "",
    _is_uploading = false,
    _is_finished = false,
    _total = 0,
    _uploaded = 0,
    uploadInput,
    uploadField,
    formData;

  let fileTypes, _progress, maxFileSize;
  let failedValidation = [];

  $: $uploadQueue, $activeUploadsCount, watchUploads();

  let persistentNotificationIsOpen = false;

  const watchUploads = () => {
    if ($activeUploadsCount > 0 && !persistentNotificationIsOpen) {
      Notifications.create({
        component: UploadNotification,
        color: "primary",
        light: true,
        persistent: true,
        position: notification_position,
        afterClose: () => {
          uploaded();
          persistentNotificationIsOpen = false;
          uploadQueue.clearCompleted();
        },
      });
      persistentNotificationIsOpen = true;
    }
  };

  function formatFileSize(n) {
    if (n === undefined || /\D/.test(n)) {
      return "N/A";
    }
    if (n > 1073741824) {
      return Math.round(n / 1073741824) + " GB";
    }
    if (n > 1048576) {
      return Math.round(n / 1048576) + " MB";
    }
    if (n > 1024) {
      return Math.round(n / 1024) + " KB";
    }
    return n + " b";
  }

  $: {
    fileTypes =
      allowed !== "*" && Array.isArray(allowed) && allowed.length
        ? allowed.join(", ")
        : "";

    if (is_cloud_upload) {
      _progress = $totalUploadProgress.progress || 0;
    } else {
      _progress = Math.floor((_uploaded / _total) * 100);
    }

    maxFileSize = formatFileSize(max);
  }

  function getFile() {
    return {
      name,
      key,
      size: _total,
      file: formData,
    };
  }

  function progress(uploaded_amount) {
    (_is_uploading = true), (_uploaded = uploaded_amount);
  }

  function uploaded() {
    _is_uploading = false;
    _is_finished = true;

    setTimeout(() => {
      _is_finished = false;
      _total = 0;
      _uploaded = 0;
      _filename = message;
      formData = null;
      uploadField.value = "";
      uploadField.files = null;
      /**
       * Triggered when upload completes
       */
      fire("file_uploaded");
    }, 3000);
  }
  function error(msg) {
    _is_uploading = false;
    _error = true;
    _error_message = msg;
    _filename = message;
    formData = null;
    uploadField.value = "";
    uploadField.files = null;

    /**
     * Triggered when an error occurs on upload.
     * Returns error message in `event.detail`
     */
    fire("file_upload_error", { _error_message });
  }

  function updateFile() {
    if (!uploadField) {
      uploadField = uploadInput;
    }

    let el = uploadField,
      val = el.value,
      maxSize = max,
      ext = "",
      size = 0,
      file = null,
      valid = true,
      allowedExtensions = true;

    formData = new FormData();

    _error = false;
    _error_message = "";

    try {
      file = el.files[0];
      if (multiple) {
        file = el.files;
        allowedExtensions = checkAnyNotAllowed(file);
      }
    } catch (e) {
      console.log(e);
    }

    if (val === "") {
      val = "No file selected";
    } else {
      if (file) {
        if (multiple) {
          size = [...file].reduce((acc, cur) => acc + cur.size, 0);
        } else {
          size = file.fileSize || file.size;
        }
      } else {
        size = 0;
      }
      // eslint-disable-next-line no-useless-escape
      val = val.split(/[\/\\]+/);
      val = val[val.length - 1];
      ext = val.split(/\./);
      ext = ext[ext.length - 1];
      ext = ext.toLowerCase();
      if (size === 0) {
        valid = false;
        val = "No file selected";
      }

      //check if file extension is allowed
      if (allowed !== "*") {
        if (typeof allowed.length != "undefined") {
          if (allowed.indexOf(ext) === -1) {
            valid = false;
            (_error = true),
              (_error_message =
                "Files of type " +
                ext +
                " are not allowed.\n Allowed file types: " +
                fileTypes),
              (el.value = "");
            val = "No file selected";
          }
        }
      }

      //check if file size exceeds
      if (maxSize > 0) {
        if (size > maxSize) {
          valid = false;
          (_error = true),
            (_error_message =
              "File size is too large. Maximum allowed file size is " +
              formatFileSize(maxSize)),
            (el.value = "");
          val = "No file selected";
        }
      }
    }

    if (!allowedExtensions) {
      valid = false;
      _error = true;
      _error_message =
        "Invalid file types found.\nAllowed file types: " + fileTypes;
      val = "No file selected";
    }

    _filename = val;

    if (valid) {
      _total = size;

      if (multiple) {
        for (let index = 0; index < file.length; index++) {
          var rs = file[index];
          formData.append("userfile[]", rs);
        }
      } else {
        formData.append("userfile", file);
      }
      /**
       * Triggered when file is chosen by user.
       * The following functions are returned in `event.detail`:
       *
       *  - `getFile()`: Returns information about the chosen file
       *  - `progress()`: Function to call for updating progress, send file uploaded bytes as parameter
       *  - `uploaded()`: Function to call when upload completes
       *  - `error()`: Function to call on upload error, send error message as parameter
       */

      fire("file_chosen", { getFile, progress, uploaded, error });
    }
  }

  function checkAnyNotAllowed(files) {
    let res = true,
      ext = "";
    for (let i = 0; i < files.length; i++) {
      let val = files[i].name;
      // eslint-disable-next-line no-useless-escape
      val = val.split(/[\/\\]+/);
      val = val[val.length - 1];
      ext = val.split(/\./);
      ext = ext[ext.length - 1];
      ext = ext.toLowerCase();

      if (allowed !== "*") {
        if (typeof allowed.length != "undefined") {
          if (allowed.indexOf(ext) === -1) {
            res = false;
            break;
          }
        }
      }
    }
    return res;
  }

  let _is_dragging = false;
  const dragenter = () => {
    _is_dragging = true;
  };
  const dragleave = () => {
    _is_dragging = false;
  };
  const drop = () => {
    _is_dragging = false;
  };

  $: $uploadQueue[queue], debouncedHandleUploadCompletions();

  const debouncedHandleUploadCompletions = debounce(
    handleUploadCompletions,
    500
  );

  function handleUploadCompletions() {
    if (!$uploadQueue[queue]) return;
    $uploadQueue[queue].forEach((item) => {
      if (item.state.status === "uploaded") {
        if (!images) {
          images = [];
        }
        images = [item.state.ack_payload, ...images];
        uploadQueue.removeItem(queue, item.__unique_id);
      }
    });
  }

  onMount(() => {
    uploadField = uploadInput;
    _filename = message;
  });

  const updateState = () => {
    try {
      let files = uploadInput.files;
      const formattedFiles = [...files].map((f) => {
        return {
          name: f.name,
          size: f.fileSize || f.size,
          type: f.type,
          blob: f,
        };
      });

      file_chosen(formattedFiles);
    } catch (e) {
      console.log(e);
    }
  };

  function filter(files) {
    //use this function to filter filetypes and file max allowable sizes
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      let validateType = fileTypesValidation(file, allowed);
      if (!validateType.allowed) {
        file.stamp = +new Date();
        file.error = true;
        file.error_message = validateType.msg;
        failedValidation.push(file);
        files.splice(i, 1);
        i--;
      }

      let validateSize = fileSizeValidation(file, max);

      if (!validateSize.allowed) {
        file.stamp = +new Date();
        file.error = true;
        file.error_message = validateSize.msg;
        failedValidation.push(file);
        files.splice(i, 1);
        i--;
      }
    }
    return files;
  }

  function file_chosen(files) {
    //reset failedValidation list
    failedValidation = [];
    _is_uploading = true;
    filter(files).forEach((file) => {
      const queueItem = readable(null, (set) => {
        const statusObject = {
          status: "preparing",
          loaded: 0,
          total: file.size,
          progress: 0,
          original_name: file.name,
          url: "",
          ack_payload: {},
        };
        // @ts-ignore
        set(statusObject);

        preparer({ file: file.name })
          .then((r) => {
            //console.log(r.response);

            const endpoint = r.response;

            const { url, acl, bucket, folder, name, original_name, driver } =
              endpoint;

            statusObject.url = url.split("?")[0];
            // @ts-ignore
            //set(statusObject);

            Net.raw(
              {
                url: url,
                method: "PUT",
                body: file.blob,
                onprogress: (e) => {
                  statusObject.status = "uploading";
                  statusObject.loaded = e.loaded;
                  statusObject.total = e.total;
                  _uploaded = e.loaded;
                  _total = e.total;
                  _progress = Math.round((_uploaded / _total) * 100);
                  console.log(_progress);
                  statusObject.progress = _progress;
                  // @ts-ignore
                  //set(statusObject);
                },
                headers: {
                  "x-amz-acl": acl,
                },
              },
              true
            )
              .then(() => {
                _is_uploading = true;
                statusObject.status = "completing";
                // @ts-ignore
                set(statusObject);

                acknowledger({
                  bucket,
                  folder,
                  name,
                  original_name,
                  driver,
                })
                  .then((r) => {
                    statusObject.ack_payload = r.response;
                    statusObject.status = "uploaded";
                    _is_uploading = false;
                    _is_finished = true;
                    // @ts-ignore
                    set(statusObject);
                  })
                  .catch((r) => {
                    console.log(r);
                    statusObject.status = "failed";
                    // @ts-ignore
                    set(statusObject);
                  });
              })
              .catch((r) => {
                console.log(r);
                statusObject.status = "failed";
                // @ts-ignore
                set(statusObject);
              });
          })
          .catch((r) => {
            console.log(r);
            statusObject.status = "failed";
            // @ts-ignore
            set(statusObject);
          });
      });
      uploadQueue.create(queue, queueItem);
    });
  }

  function fileSizeValidation(file, max) {
    let _allowed = true;
    let msg = "";

    if (max > 0) {
      if (file.size > max) {
        _allowed = false;
        msg =
          "File size is too large. Maximum allowed file size is " +
          formatFileSize(max);
      }
    }
    return { allowed: _allowed, msg: msg };
  }
  function fileTypesValidation(file, allowed) {
    if (allowed === "*") {
      return {
        allowed: true,
        msg: "",
      };
    }
    let _allowed = true;
    let msg = "";

    // eslint-disable-next-line no-useless-escape
    var ext = file.name.toLowerCase().match(/\.([^\.]+)$/)[1];
    if (typeof allowed.length != "undefined") {
      if (allowed.indexOf(ext) === -1) {
        _allowed = false;
        msg =
          "Files of type " +
          ext +
          " are not allowed.\n Allowed file types: " +
          allowed.join(", ");
      }
    }
    return { allowed: _allowed, msg: msg };
  }
</script>
