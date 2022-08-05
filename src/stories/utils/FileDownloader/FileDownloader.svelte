<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <div class="columns mb-0">
        <div class="column">
          <h2 class="subtitle is-5">Data</h2>
        </div>
        <div class="column">
          <button
            type="button"
            class="button is-primary is-pulled-right is-small"
            on:click={() => {
              fileDownloader(JSON.stringify(obj), "users.xlsx");
            }}>Export as CSV</button>
        </div>
      </div>
      <pre>{JSON.stringify(obj, null, 1)}</pre>
    </div>
  </div>
</div>

<script>
  import { fileDownloader } from "@kws3/ui/utils";

  let obj = [
    {
      "Column 1": "1-1",
      "Column 2": "1-2",
      "Column 3": "1-3",
      "Column 4": "1-4",
    },
    {
      "Column 1": "2-1",
      "Column 2": "2-2",
      "Column 3": "2-3",
      "Column 4": "2-4",
    },
  ];
</script>
