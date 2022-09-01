<div class="columns">
  <div class="column" style="width: 400px;">
    <h4 class="title is-size-5 is-primary has-text-centered">Default design</h4>
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
      inner_style="min-height: 2.5rem;" />
    <p class="is-block mt-2 is-size-7 has-text-centered has-text-success">
      This will succeed.
    </p>
  </div>

  <div class="column" style="width: 400px;">
    <h4 class="title is-size-5 is-primary has-text-centered">
      Custom design-1
    </h4>
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event, false)}
      on:file_uploaded={() => onFileUploaded()}
      on:file_upload_error={() => onFileUploadError()}
      {allowed}
      {disabled}
      message="Browse/drop file..."
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
        <div
          class="progress {!uploading ? 'cs is-primary' : ''}"
          style={finished ? "background:green;color:#FFF" : ""}>
          {#if uploading}
            <div class="bar" style="width:{progress}%">
              <p class="percent">{progress}%</p>
            </div>
          {:else if finished}
            <div>
              Finished <Icon size="small" icon="check-circle" />
            </div>
          {:else}
            <div>
              {filename}
              <Icon size="small" icon="file" family="gg" />
            </div>
          {/if}
        </div>
      </div>
    </KwsFileUpload>
    <p class="is-block mt-2 is-size-7 has-text-centered has-text-success">
      This will succeed.
    </p>
  </div>

  <div class="column" style="width: 400px;">
    <h4 class="title is-size-5 is-primary has-text-centered">
      Custom design-2
    </h4>
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event, true)}
      on:file_uploaded={() => onFileUploaded()}
      on:file_upload_error={() => onFileUploadError()}
      {allowed}
      {disabled}
      message="Browse/Drop file(s)"
      {key}
      {info}
      {max}
      class={klass}
      {color}
      {size}
      {info_color}
      {multiple}
      {accept}
      inner_style="min-height:8rem">
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
        let:error_message
        style="margin-left: 5rem;margin-right: 2rem;border:none">
        <div style="width: 100%;">
          <div class="file-cta" style="width: 100%;">
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
                <div
                  class="filename has-text-centered is-size-7"
                  style="display:block;margin-top:0.5rem">
                  {filename}
                </div>
              {/if}
            </div>
          </div>
          <span class="file-name" style="height: 54%;">
            <div class="level mt-5">
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
        </div>
      </div>
    </KwsFileUpload>

    <p class="is-block mt-2 is-size-7 has-text-centered has-text-danger">
      This will fail.
    </p>
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

{#if images && images.length}
  <div class="columns is-multiline">
    {#each images as image}
      <div class="column">
        <div class="is-text-centered">
          <figure class="image is-128x128" style="margin: 0 auto 20px auto">
            <img src={image || ""} alt="" />
          </figure>
        </div>
      </div>
    {/each}
  </div>
{/if}

<div class="columns">
  <div class="column">
    <CloudFileUploadDecorator />
  </div>
</div>

<style>
  .drop-on-me {
    font-size: 0.8rem;
  }
  .progress {
    margin: 20px auto;
    padding: 0;
    width: 90%;
    height: 30px;
    overflow: hidden;
    background: #e5e5e5;
    border-radius: 5rem;
  }

  .bar {
    position: relative;
    float: left;
    min-width: 1%;
    height: 100%;
    background: cornflowerblue;
  }

  .percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-family: tahoma, arial, helvetica;
    font-size: 12px;
    color: white;
  }

  .cs {
    text-align: center;
    padding: 0.2rem;
    font-size: 0.8rem;
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";
  import { FileUpload as KwsFileUpload, Icon } from "@kws3/ui";
  import CloudFileUploadDecorator from "./CloudFileUploadDecorator.svelte";

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
  let images = [];

  function onFileChosen(event, error_state = false) {
    //refire handled event for sotrybook to pick up in actions
    fire("file_chosen");
    images = [];
    image = "";
    let { getFile, progress, uploaded, error } = event.detail;
    var file = getFile();
    console.log(file);
    var size = file.size;
    let progrss = 0;
    progress(progrss);
    let user_images = [];
    let inter_val = setInterval(() => {
      if (progrss > size) {
        if (error_state) {
          error("Error on Upload");
          image = "";
        } else {
          uploaded();
          if (multiple) {
            user_images = file.file.getAll("userfile[]");
            if (user_images && user_images.length) {
              user_images.forEach((image, index) => {
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = () => {
                  images[index] = String(reader.result);
                };
              });
            }
          } else {
            var reader = new FileReader();
            reader.readAsDataURL(file.file.get("userfile"));
            reader.onload = () => {
              image = String(reader.result);
            };
          }
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
