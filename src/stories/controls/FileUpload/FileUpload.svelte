<div class="columns">
  <div class="column" style="width: 400px;">
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

  function onFileChosen(event) {
    event.preventDefault();
    let { getFile, progress, uploaded } = event.detail;
    var file = getFile();
    var size = file.size;
    progress(0);
    setTimeout(() => {
      uploaded();
    }, 1000);
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
