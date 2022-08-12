<Panel title="Input data" collapsible collapsed>
  <div slot="toolbar">
    <button
      type="button"
      class="button is-success is-pulled-right"
      on:click={() => {
        fileDownloader(JSON.stringify(brands, null, 2), "mobile-brands.json");
      }}>
      <Icon icon="download" /><span>Export</span></button>
  </div>
  <pre>{JSON.stringify(brands, null, 1)}</pre>
</Panel>

<script>
  //@ts-nocheck
  import { fileDownloader } from "@kws3/ui/utils";
  import { brands } from "./data.js";
  import { Panel, Icon } from "@kws3/ui";
</script>
