<li class="is-{color}" class:is-past={item.is_past} on:click={setView}>
  {#if item.image}
    <img class="avatar" src={item.image} alt="" />
  {/if}

  <small class="date is-block">
    {formatDate}
    {#if item.time && !is_tree}
      {formatTime}
    {/if}
  </small>

  {#if item.time && is_tree}
    <small class="time is-block">
      {formatTime}
    </small>
  {/if}

  <span class="is-block description">
    {item.description}
  </span>

  <span class="is-block user">
    {item.title}
  </span>
</li>

<script>
  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let item = {},
    is_tree = false,
    formatDate = "",
    formatTime = "",
    color = "primary";
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  onMount(() => {
    //Date Format
    if (!is_tree && item && item.date) {
      formatDate = item.date;
    }
    if (is_tree && item && item.date) {
      var date = new Date(item.date),
        day = date.getDate(),
        day = ("0" + day).slice(-2),
        month = date.getMonth();
      formatDate = months[month] + " " + day;
    }

    //Time Format
    if (!is_tree && item && item.time) {
      formatTime = item.time;
    }
    if (is_tree && item && item.time) {
      var [hour, min] = item.time.split(":");
      let _hour = hour % 12 ? hour % 12 : 12,
        _min = ("0" + min).slice(-2),
        meridiem = hour >= 12 ? "PM" : "AM";

      formatTime = `${_hour}:${_min} ${meridiem}`;
    }
  });

  function setView() {
    if (is_tree) {
      fire("viewItem", item.id);
    }
  }
</script>
