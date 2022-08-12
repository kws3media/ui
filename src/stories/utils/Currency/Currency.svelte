<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Normal Currency Value</h2>
      <pre>{cValue}</pre>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Currency value using `currency`</h2>
      <pre>{formatted_currency}</pre>
    </div>
  </div>
</div>

<script>
  //@ts-nocheck
  import { currency } from "@kws3/ui/utils";
  // eslint-disable-next-line @kws3/svelte3/no-date-string-arg
  let cValue = 300;
  let formatted_currency = currency(cValue);
</script>
