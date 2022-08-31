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
</div>

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

<script>
  import { createEventDispatcher } from "svelte";
  import { FileUpload as KwsFileUpload, Icon } from "@kws3/ui";

  const fire = createEventDispatcher();

  export let key = "",
    message = "Choose Files...",
    info = "",
    max = 5000000,
    allowed = "*",
    disabled = false,
    /**
     * @type {import('@kws3/ui/types').SizeOptions}
     */
    size = "",
    /**
     * @type {import('@kws3/ui/types').ColorOptions}
     */
    color = "",
    /**
     * @type {import('@kws3/ui/types').ColorOptions | 'grey'}
     */
    info_color = "primary",
    /**
     * Whether to upload multiple or single file(s).
     * @type {boolean}
     */
    multiple = true,
    accept = "*";

  let klass = "";
  export { klass as class };

  let images = [];

  function onFileChosen(event, error_state = false) {
    //refire handled event for sotrybook to pick up in actions
    fire("file_chosen");

    let { getFile, progress, uploaded, error } = event.detail;
    var file = getFile();
    var size = file.size;
    let progrss = 0;
    progress(progrss);

    let user_images = [];
    let inter_val = setInterval(() => {
      if (progrss > size) {
        if (error_state) {
          error("Error on Upload");
          images = [];
        } else {
          uploaded();
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
