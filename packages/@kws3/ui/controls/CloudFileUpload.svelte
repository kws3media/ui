<div
  class="kws-cloud-file-uploader {klass} {_is_dragging ? 'is-dragging' : ''}"
  on:dragenter={dragenter}
  on:dragleave={dragleave}
  on:drop={drop}>
  <form bind:this={formElement} on:submit|preventDefault={handleSubmit}>
    <slot>
      <div class="file has-name is-fullwidth is-{size} is-{color} {klass}">
        <label class="file-label" for="">
          <span class="file-cta">
            <span class="icon">
              <Icon icon="plus" size="small" />
            </span>
            <span class="f-label"> {label} </span>
          </span>
          <span class="file-name">
            <div>
              <span class="help">
                Max size: {maxFileSize}
              </span>
            </div>

            <div style="max-width:100%;white-space:normal">
              <span class="help has-text-centered">{fileTypes}</span>
            </div>
          </span>
        </label>
      </div>
    </slot>
    <div class="drop-on-me">{drag_msg}</div>
    <input
      class="file-input"
      bind:this={uploadElement}
      multiple
      type="file"
      name="file"
      {accept}
      on:change={updateState} />
  </form>
</div>

{#if failedValidation.length}
  <ul>
    {#each failedValidation as file}
      <slot name="failed" {file}>
        <li class="my-2">
          <span class="has-text-danger"
            ><code>{file.name}</code> Not uploaded.</span
          ><br />
          <small class="has-text-grey">{file.error_message}</small>
        </li>
      </slot>
    {/each}
  </ul>
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  import { readable } from "svelte/store";
  import { Icon } from "@kws3/ui";

  const fire = createEventDispatcher();

  /**
   * @type {function}
   */
  export let preparer,
    /**
     * @type {function}
     */
    acknowledger,
    /**
     * @type {string}
     */
    queue = "a-random-queue-name",
    /**
     * @type {string}
     */
    size = "",
    /**
     * @type {string}
     */
    color = "info",
    /**
     * @type {string}
     */
    label = "Upload Files",
    /**
     * @type {string}
     */
    drag_msg = "Drop files here to upload",
    /**
     * @type {Number}
     */
    max = 500000,
    /**
     * @type {string}
     */
    allowed = "*",
    /**
     * @type {string}
     */
    accept = "*";

  let klass = "";
  export { klass as class };

  let formElement, uploadElement, fileTypes, maxFileSize;
  let failedValidation = [];

  $: {
    fileTypes =
      allowed !== "*" && Array.isArray(allowed) && allowed.length
        ? allowed.join(", ")
        : "";
    maxFileSize = formatFileSize(max);
  }

  const handleSubmit = () => {};

  const updateState = () => {
    try {
      let files = uploadElement.files;
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

    filter(files).forEach((file) => {
      const queueItem = readable(null, (set) => {
        /**
         * @type {Object}
         */
        const statusObject = {
          status: "preparing",
          loaded: 0,
          total: file.size,
          progress: 0,
          original_name: file.name,
          url: "",
          ack_payload: {},
        };
        set(statusObject);

        preparer({ file: file.name })
          .then((r) => {
            //console.log(r.response);

            const endpoint = r.response;

            const { url } = endpoint;

            statusObject.url = url.split("?")[0];
            set(statusObject);

            fire("upload", { endpoint });
            // Net.raw(
            //   {
            //     url: url,
            //     method: "PUT",
            //     body: file.blob,
            //     onprogress: (e) => {
            //       statusObject.status = "uploading";
            //       statusObject.loaded = e.loaded;
            //       statusObject.total = e.total;
            //       statusObject.progress = Math.round(
            //         (e.loaded / e.total) * 100
            //       );
            //       set(statusObject);
            //     },
            //     headers: {
            //       "x-amz-acl": acl,
            //     },
            //   },
            //   true
            // )
            //   .then(() => {
            //     statusObject.status = "completing";
            //     set(statusObject);

            //     acknowledger({
            //       bucket,
            //       folder,
            //       name,
            //       original_name,
            //       driver,
            //     })
            //       .then((r) => {
            //         statusObject.ack_payload = r.response;
            //         statusObject.status = "uploaded";
            //         set(statusObject);
            //       })
            //       .catch((r) => {
            //         console.log(r);
            //         statusObject.status = "failed";
            //         set(statusObject);
            //       });
            //   })
            //   .catch((r) => {
            //     console.log(r);
            //     statusObject.status = "failed";
            //     set(statusObject);
            //   });
          })
          .catch((r) => {
            console.log(r);
            statusObject.status = "failed";
            set(statusObject);
          });
      });
      //uploadQueue.create(queue, queueItem);
      fire("uploadQueue", { queue, queueItem });
    });

    formElement.reset();
  }

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
