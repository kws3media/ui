<div>
  <div class="columns is-multiline">
    <div class="column">
      <h2 class="subtitle is-5">Today's Day w/o ordinal</h2>
      <pre>{day}</pre>
    </div>
    <div class="column">
      <h2 class="subtitle is-5">Today's Day with ordinal</h2>
      <pre>{ordinal_day}</pre>
    </div>
  </div>
</div>

<script>
  import { dateToOrdinal } from "@kws3/ui/utils";
  // eslint-disable-next-line @kws3/svelte3/no-date-string-arg
  let date_value = new Date();
  let day = date_value.getDate();
  let ordinal_day = dateToOrdinal(day);
</script>
