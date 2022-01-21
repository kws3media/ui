<li
  class="timeline-item is-{color}"
  class:is-past={item.is_past}
  on:click={setView}>
  <div class="timeline-marker">
    {#if icon && !image}
      <Icon {icon} />
    {/if}{#if image && !icon}
      <figure class="image is-32x32"><img src={image} alt="" /></figure>
    {/if}
  </div>
  <div class="timeline-content">
    <small class="meta meta-top is-block">
      {formatDate}
      {#if item.time && !is_tree}
        {formatTime}
      {/if}
    </small>

    {#if item.time && is_tree}
      <small class="meta is-block">
        {formatTime}
      </small>
    {/if}

    <span class="is-block description">
      {item.description ? item.description : ""}
    </span>

    <span class="is-block meta meta-bottom">
      {item.user ? item.user : ""}
    </span>
  </div>
  {#if item.avatar}
    <img class="timeline-image" src={item.avatar} alt="" />
  {/if}
</li>

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";
  const fire = createEventDispatcher();
  export let item = {},
    is_tree = false,
    formatDate = "",
    formatTime = "",
    color = "primary";

  export let icon = null;
  export let image = null;
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
