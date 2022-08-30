<div class="columns">
  <div class="column" style="width: 400px;">
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event, false)}
      on:file_uploaded={() => onFileUploaded()}
      on:file_upload_error={() => onFileUploadError()}
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      class={klass}
      {color}
      {size}
      {info_color}
      {multiple}
      {accept}
      inner_style="min-height: 2.5rem;">
      <div slot="default" let:filename let:uploading let:progress let:finished>
        <div class="up-icon">
          {#if uploading}
            <span class="loader" />
          {:else if finished}
            <Icon size="" icon="check-circle" class="fa-lg" />
          {:else}
            <Icon size="" icon="upload" class="fa-lg" />
          {/if}
        </div>
        <div class="file">
          {#if uploading}
            <div class="upload-progress">
              <div class="progress-inner">
                <div class="bar" style="width:{progress}%" />
              </div>
            </div>
            <div class="progress-caption">{progress}% - Uploading...</div>
          {:else if finished}
            <div class="filename">Upload complete!</div>
          {:else}
            <div class="filename"><span>{filename}</span></div>
          {/if}
        </div>
      </div>
    </KwsFileUpload>
    <p class="is-block mt-2 has-text-success">This will succeed.</p>
  </div>

  <div class="column" style="width: 400px;">
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event, true)}
      on:file_uploaded={() => onFileUploaded()}
      on:file_upload_error={() => onFileUploadError()}
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      class={klass}
      {color}
      {size}
      {info_color}
      {multiple}
      {accept}
      inner_style="min-height:10rem">
      <div
        class="file has-name is-boxed"
        slot="default"
        let:filename
        let:uploading
        let:progress
        let:finished
        let:error
        let:fileTypes
        let:maxFileSize
        let:error_message>
        <label class="file-label" for="">
          <div class="file-cta">
            <div>
              <span>
                {#if uploading}
                  <span class="loader" style="display:inline-block" />
                {:else if finished}
                  <Icon size="small" icon="check-circle" />
                {:else}
                  <Icon size="small" icon="plus" />
                {/if}
              </span>
              {#if uploading}
                <span class="progress-caption has-text-centered">
                  {progress ? progress + "% - " : ""} Uploading...
                </span>
              {:else if finished}
                <span class="filename">Upload complete!</span>
              {:else}
                <span class="filename"><span>{filename}</span></span>
              {/if}
            </div>
            {#if uploading}
              <div class="upload-progress">
                <div class="progress-inner">
                  <div class="bar" style="width:{progress}%;" />
                </div>
              </div>
            {/if}
          </div>
          <span class="file-name">
            <div class="level mt-2">
              {#if error}
                <div
                  class="level-item"
                  style="max-width:100%;white-space: break-spaces;">
                  <span class="help is-{error ? 'danger' : ''}"
                    >{error_message}</span>
                </div>
              {:else}
                <div class="level-item">
                  <span class="help">
                    {!multiple ? "Max size:" + maxFileSize : ""}
                  </span>
                </div>
              {/if}
            </div>

            {#if !error}
              <div class="control" style="max-width:100%">
                <span class="help has-text-centered">{fileTypes}</span>
              </div>
            {/if}

            {#if info}
              <div class="control" style="max-width:100%">
                <span class="help has-text-{info_color}">{info}</span>
              </div>
            {/if}
          </span>
          <div class="drop-on-me">Drop files here to upload</div>
        </label>
      </div>
    </KwsFileUpload>

    <p class="is-block mt-2 has-text-danger">This will fail.</p>
  </div>
</div>

{#if image}
  <div class="columns">
    <div class="column">
      <div class="is-text-centered">
        <figure class="image is-128x128" style="margin: 0 auto 20px auto">
          <img src={image || ""} alt="" />
        </figure>
      </div>
    </div>
  </div>
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  import { FileUpload as KwsFileUpload, Icon } from "@kws3/ui";

  const fire = createEventDispatcher();

  export let key = "",
    message = "Choose File...",
    info = "",
    max = 5000000,
    allowed = "*",
    disabled = false,
    size = "",
    color = "",
    info_color = "grey",
    multiple = false,
    accept = "*";

  let klass = "";
  export { klass as class };

  let image = "";

  function onFileChosen(event, error_state = false) {
    //refire handled event for sotrybook to pick up in actions
    fire("file_chosen");

    let { getFile, progress, uploaded, error } = event.detail;
    var file = getFile();
    console.log(file);
    var size = file.size;
    let progrss = 0;
    progress(progrss);

    let inter_val = setInterval(() => {
      if (progrss > size) {
        if (error_state) {
          error("Error on Upload");
          image = "";
        } else {
          uploaded();
          var reader = new FileReader();
          reader.readAsDataURL(file.file.get("userfile"));
          reader.onload = () => {
            image = String(reader.result);
          };
        }
        progrss = 0;
        clearInterval(inter_val);
        return;
      }
      progrss += ~~(size / 100);
      progress(progrss);
    }, 50);
  }

  function onFileUploaded() {
    console.log("File uploaded successfully");
  }
  function onFileUploadError() {
    console.log("File uploaded successfully");
  }
</script>
