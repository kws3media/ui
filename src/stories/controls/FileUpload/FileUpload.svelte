<div class="columns">
  <div class="column">
    <FileUpload
      on:file_chosen={(event) => onFileChosen(event)}
      on:file_uploaded
      on:file_upload_error
      {allowed}
      {disabled}
      {message}
      {key}
      {info}
      {max}
      {classes} />
  </div>
</div>

<script>
  import { FileUpload } from "@kws3/ui";
  export let key = "",
    message = "Choose File...",
    info = "",
    max = 5000000,
    allowed = "*",
    classes = "",
    disabled = false;

  function onFileChosen(event) {
    event.preventDefault();
    let { getFile, progress, uploaded, error } = event.detail;
    var file = getFile();
    var size = file.size;
    progress(0);
    setTimeout(() => {
      uploaded();
    }, 1000);
  }
</script>
