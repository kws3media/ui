<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Date using JS date function</h2>
      <pre>{date}</pre>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Date using `createDate`</h2>
      <pre>{cDate}</pre>
    </div>
  </div>
</div>

<script>
  import { createDate } from "@kws3/ui/utils";
  // eslint-disable-next-line @kws3/svelte3/no-date-string-arg
  let date = new Date("2022-01-01");
  let cDate = createDate("2022-01-01");
</script>
