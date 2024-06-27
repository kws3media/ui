<!--
  @component


  @param {string} [key=""] - A property you can send to uniquely identify an uploader.

It is returned back in the `getFile()` call from `file_chosen` event, Default: `""`
  @param {string} [message="Choose File..."] - Message displayed in uploader, Default: `"Choose File..."`
  @param {string} [info=""] - Information / help / subtitle displayed under the uploader, Default: `""`
  @param {ExtendedColorOptions} [info_color=grey] - Color of the information text, Default: `grey`
  @param {number} [max=5000000] - Maximum allowed size in bytes, Default: `5000000`
  @param {any} [allowed=*] - Allowed file types - accepts the string `"*"`, or an array of file type suffixes, Default: `*`
  @param {boolean} [disabled=false] - Disables the uploader, Default: `false`
  @param {SizeOptions} [size=] - Size of the File Input, Default: ``
  @param {ColorOptions} [color=] - Color of the File Input, Default: ``
  @param {string} [class=""] - CSS classes for the Uploader, Default: `""`

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
  class="kws-file-upload {klass} is-{color} is-{size} is-{_error
    ? 'danger'
    : ''} {disabled ? 'is-disabled' : ''} {_is_finished ? 'is-success' : ''}">
  <div
    class="file-upload-inner input is-{color} is-{size} is-{_error
      ? 'danger'
      : ''}">
    <div class="up-icon">
      {#if _is_uploading}
        <span class="loader" />
      {:else if _is_finished}
        <Icon size="" icon="check-circle" class="fa-lg" />
      {:else}
        <Icon size="" icon="upload" class="fa-lg" />
      {/if}
    </div>
    <div class="file-target">
      {#if _is_uploading}
        <div class="upload-progress">
          <div class="progress-inner">
            <div class="bar" style="width:{_progress}%" />
          </div>
        </div>
        <div class="progress-caption">{_progress}% - Uploading...</div>
      {:else if _is_finished}
        <div class="file-name">Upload complete!</div>
      {:else}
        <div class="file-name"><span>{_filename}</span></div>
      {/if}
    </div>
    <input
      bind:this={uploadInput}
      type="file"
      name="file"
      on:change={updateFile}
      disabled={disabled || _is_uploading || _is_finished} />
  </div>
  <div class="level is-mobile">
    {#if _error}
      <div class="level-item" style="max-width:100%">
        <span class="help is-{_error ? 'danger' : ''}">{_error_message}</span>
      </div>
    {:else}
      <div class="level-left">
        <div class="level-item">
          <span class="help">Max size: {maxFileSize}</span>
        </div>
      </div>
      <div class="level-item" style="max-width:100%">
        <span class="help has-text-{info_color}">{info}</span>
      </div>
      <div class="level-right">
        <span class="help">{fileTypes}</span>
      </div>
    {/if}
  </div>
</div>

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";

  /**
   *
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').ExtendedColorOptions} ExtendedColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */
  const fire = createEventDispatcher();

  /**
   * A property you can send to uniquely identify an uploader.
   *
   * It is returned back in the `getFile()` call from `file_chosen` event
   */
  export let key = "",
    /**
     * Message displayed in uploader
     */
    message = "Choose File...",
    /**
     * Information / help / subtitle displayed under the uploader
     */
    info = "",
    /**
     * Color of the information text
     * @type {ExtendedColorOptions}
     */
    info_color = "grey",
    /**
     * Maximum allowed size in bytes
     */
    max = 5000000,
    /**
     * Allowed file types - accepts the string `"*"`, or an array of file type suffixes
     * @type {any}
     */
    allowed = "*",
    /**
     * Disables the uploader
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
    color = "";

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
    _progress = Math.floor((_uploaded / _total) * 100);
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
      valid = true;

    formData = new FormData();

    _error = false;
    _error_message = "";

    try {
      file = el.files[0];
    } catch (e) {
      console.log(e);
    }

    if (val === "") {
      val = "No file selected";
    } else {
      if (file) {
        size = file.fileSize || file.size;
      } else {
        size = 0;
      }
      val = val.split(/[/\\]+/);
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

    _filename = val;

    if (valid) {
      _total = size;
      formData.append("userfile", file);
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

  onMount(() => {
    uploadField = uploadInput;
    _filename = message;
  });
</script>
