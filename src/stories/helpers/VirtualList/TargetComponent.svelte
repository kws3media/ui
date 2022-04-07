<div
  class="item"
  style="padding:15px 20px"
  on:click={() => {
    console.log("clicked item", item);
  }}>
  <div class="level is-mobile is-marginless ">
    <div class="level-left">
      <span class="name">
        Name: {item.name}
        {item.surname}
      </span>
    </div>
    <div class="level-right">
      <span>
        ID: <b>{index}</b>
      </span>
    </div>
  </div>
  <div class="level is-mobile is-marginless">
    <div class="level-left">
      <span>
        Username: <b>{item.username}</b>
      </span>
    </div>

    <div class="level-right">
      <span>
        Role: <b>{item.role}</b>
      </span>
    </div>
  </div>
  {#if item.password}
    <div class="level is-mobile">
      <div class="level-left">
        <span>
          Password: <b>{item.password}</b>
        </span>
      </div>
    </div>
  {/if}
</div>

<script>
  export let item, index;

  $: {
    console.log(item);
  }
</script>
