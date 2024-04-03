<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Original Object</h2>
      <pre>{JSON.stringify(obj)}</pre>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Cloned Object</h2>
      <pre>{JSON.stringify(clone)}</pre>
    </div>
  </div>
</div>

<script>
  import { cloneObject } from "@kws3/ui/utils";
  let obj = {
    title: "Mr",
    name: "User",
    address: {
      addr1: "Address 1",
      city: "City",
    },
  };

  $: clone = cloneObject(obj);
</script>
