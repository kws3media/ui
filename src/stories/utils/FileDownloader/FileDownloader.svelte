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
              fileDownloader(JSON.stringify(obj), "users.csv");
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
      title: "Mr",
      name: "User 1",
      addr1: "Address 2",
      city: "City",
    },
    {
      title: "Mr",
      name: "User 2",
      addr1: "Address 2",
      city: "City",
    },
  ];
</script>
