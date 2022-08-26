<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Data object</h2>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Search any name here</h2>
      <div><input type="text" bind:value={filter} class="input" /></div>
      <pre>{JSON.stringify(newData, null, 4)}</pre>
      <div />
    </div>
  </div>
</div>

<script>
  import { makeSearchEngine } from "@kws3/ui/search";
  let filter = "";
  let data = [
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "DDAA" },
    { id: 5, name: "EEBB" },
  ];
  let newData = [];

  let fuzzyOpts = {
    analyzeSubTerms: true,
    analyzeSubTermDepth: 10,
    highlighting: {
      after: "",
      before: "",
    },
  };
  let searchOptions = {
    search_key: "name",
    scoreThreshold: 5,
    fuzzyOpts,
  };

  const fuzzysearch = makeSearchEngine(searchOptions);

  $: filter, search();

  function search() {
    newData = fuzzysearch(filter, data);
  }
</script>
