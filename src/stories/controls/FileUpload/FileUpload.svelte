<div class="columns">
  <div class="column" style="width: 400px;">
    {#if image}
      <div class="is-text-centered">
        <figure class="image is-128x128" style="margin: 0 auto 20px auto">
          <img src={image || ""} alt="" />
        </figure>
      </div>
    {/if}
    <KwsFileUpload
      on:file_chosen={(event) => onFileChosen(event)}
      on:file_uploaded
      on:file_upload_error
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      class={klass} />
    <p class="is-block mt-2 has-text-success">This will succeed.</p>
  </div>

  <div class="column" style="width: 400px;">
    <KwsFileUpload
      on:file_chosen={(event) => onFileError(event)}
      on:file_uploaded
      on:file_upload_error
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      {classes}
      class={klass} />
    <p class="is-block mt-2 has-text-danger">This will fail.</p>
  </div>
</div>

<script>
  import { FileUpload as KwsFileUpload } from "@kws3/ui";
  export let key = "",
    message = "Choose File...",
    info = "",
    max = 5000000,
    allowed = "*",
    classes = "",
    disabled = false;

  let klass = "";
  export { klass as class };

  let image = "";
  let error_state = false;

  function onFileChosen(event) {
    event.preventDefault();
    let { getFile, progress, uploaded } = event.detail;
    var file = getFile();
    var size = file.size;
    let progrss = 0;
    progress(progrss);

    let inter_val = setInterval(() => {
      if (progrss > size) {
        if (error_state) {
          error("Error on Upload");
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

  function onFileError(event) {
    event.preventDefault();
    let { getFile, progress, error } = event.detail;
    var file = getFile();
    var size = file.size;
    progress(0);
    setTimeout(() => {
      error("Error on upload");
    }, 1000);
  }
</script>
