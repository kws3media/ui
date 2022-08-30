<div class="columns">
  <div class="column" style="width: 400px;">
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event, false)}
      on:file_uploaded={() => onFileUploaded()}
      on:file_upload_error={() => onFileUploadError()}
      {multiple}
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      class={klass}
      {color}
      {size}
      {info_color} />
    <p class="is-block mt-2 has-text-success">This will succeed.</p>
  </div>

  <div class="column" style="width: 400px;">
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event, true)}
      on:file_uploaded={() => onFileUploaded()}
      on:file_upload_error={() => onFileUploadError()}
      {multiple}
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      class={klass}
      {color}
      {size}
      {info_color} />
    <p class="is-block mt-2 has-text-danger">This will fail.</p>
  </div>
</div>

{#if images && images.length}
  <div class="columns">
    <div class="column">
      {#each images as image}
        <div class="is-text-centered">
          <figure class="image is-128x128" style="margin: 0 auto 20px auto">
            <img src={image || ""} alt="" />
          </figure>
        </div>
      {/each}
    </div>
  </div>
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  import { FileUpload as KwsFileUpload } from "@kws3/ui";

  const fire = createEventDispatcher();

  export let key = "",
    message = "Choose File...",
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
    multiple = true;

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
            user_images.forEach((image) => {
              const reader = new FileReader();
              reader.readAsDataURL(image);
              reader.onload = () => {
                let image_url = String(reader.result);
                images.push(image_url);
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
    console.log(images);
    console.log("File uploaded successfully");
  }
  function onFileUploadError() {
    console.log("File uploaded successfully");
  }
</script>
