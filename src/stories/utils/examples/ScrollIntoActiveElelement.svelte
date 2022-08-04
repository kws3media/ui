<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Object</h2>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">
        <button
          class="button is-primary is-small"
          type="button"
          on:click={setActive}>Scroll to active Element</button>
      </h2>
      <div>
        <ul
          bind:this={dropdown}
          class="options"
          style="height: 125px;overflow: scroll;border: 1px solid #CCC;padding: 5px;background: #f6f6f7;">
          {#each data as details}
            <li class={details.id === 6 ? "active" : ""}>
              {details.id}
              {details.name}
            </li>
          {/each}
        </ul>
      </div>
      <div />
    </div>
  </div>
</div>

<style>
  .active {
    background-color: #ff0000;
    color: #fff;
  }
</style>

<script>
  import { scrollIntoActiveElelement } from "@kws3/ui";
  let dropdown = "";
  let data = [
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "DDAA" },
    { id: 5, name: "EEBB" },
    { id: 6, name: "Active" },
    { id: 7, name: "BBB" },
    { id: 8, name: "CCC" },
    { id: 9, name: "DDAA" },
    { id: 10, name: "EEBB" },
  ];

  function setActive() {
    let activeElem = dropdown.querySelector(".active");
    scrollIntoActiveElelement(dropdown, activeElem);
  }
</script>
