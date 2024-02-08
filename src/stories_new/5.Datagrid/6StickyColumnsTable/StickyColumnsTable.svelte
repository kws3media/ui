<div style="width:900px;margin: 0 auto">
  <StickyColumnsTable {inner_class} {outer_class} {width}>
    <table class="table kws-grid-view is-striped is-bordered">
      <thead>
        <tr>
          <th class="is-sticky-column is-narrow" style="left: 0">Name</th>
          <th class="is-sticky-column is-narrow" style="left:70px">Name</th>
          <th class="is-sticky-column is-narrow" style="left:140px">Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {#each { length: 10 } as _}
          <tr>
            <td class="is-sticky-column is-narrow" style="left: 0">Sticky</td>
            <td class="is-sticky-column is-narrow" style="left:70px">Sticky</td>
            <td class="is-sticky-column is-narrow" style="left:140px"
              >Sticky</td>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </StickyColumnsTable>
</div>

<script>
  import { StickyColumnsTableWrapper as StickyColumnsTable } from "@kws3/ui";

  export let inner_class = "",
    outer_class = "",
    width = "100%";
</script>
