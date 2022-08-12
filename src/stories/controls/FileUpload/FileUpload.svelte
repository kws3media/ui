<div class="columns">
  <div class="column" style="width: 400px;">
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event)}
      on:file_uploaded={(event) => onFileUploaded(event)}
      on:file_upload_error={(event) => onFileUploadError(event)}
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
      on:file_uploaded={(event) => onFileUploaded(event)}
      on:file_upload_error={(event) => onFileUploadError(event)}
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      {classes}
      class={klass}
      {color}
      {size}
      {info_color} />
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
  //@ts-nocheck
  import { createEventDispatcher } from "svelte";
  import { FileUpload as KwsFileUpload } from "@kws3/ui";

  const fire = createEventDispatcher();

  export let key = "",
    message = "Choose File...",
    info = "",
    max = 5000000,
    allowed = "*",
    classes = "",
    disabled = false,
    size = "",
    color = "",
    info_color = "grey";

  let klass = "";
  export { klass as class };

  let image = "";

  function onFileChosen(event, error_state = false) {
    //refire handled event for sotrybook to pick up in actions
    fire("file_chosen");

    let { getFile, progress, uploaded, error } = event.detail;
    var file = getFile();
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
            image = reader.result;
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
