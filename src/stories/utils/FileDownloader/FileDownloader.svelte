<div>
  <div class="columns mb-0">
    <div class="column is-6">
      <form enctype="multipart/form-data" on:submit={upload}>
        <div class="field is-grouped">
          <div class="control">
            <input id="image-file" type="file" class="input" />
          </div>
          <div class="control">
            <button type="submit" class="button is-info">Upload</button>
          </div>
        </div>
      </form>
    </div>
    <div class="column">
      {#if file}
        <div class="field is-grouped">
          <div class="control">
            <button
              type="button"
              class="button is-success is-pulled-right"
              on:click={() => {
                fileDownloader(file, file.name);
              }}>Download using `downloader`</button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<script>
  import { fileDownloader } from "@kws3/ui/utils";

  let file; //, formData;

  function upload(e) {
    file = document.getElementById("image-file").files[0];
    //formData = new FormData();
    e.preventDefault();
  }
</script>
