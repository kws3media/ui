<div
  class="item"
  style="padding:15px 20px"
  on:click|stopPropagation={() => rowClick()}>
  <div class="level is-mobile is-marginless ">
    <div class="level-left">
      <span class="name">
        Name: {name}
        {surname}
      </span>
    </div>
    <div class="level-right">
      <span>
        ID: <b>{id}</b>
      </span>
    </div>
  </div>
  <div class="level is-mobile is-marginless">
    <div class="level-left">
      <span>
        Username: <b>{username}</b>
      </span>
    </div>

    <div class="level-right">
      <span>
        Role: <b>{role}</b>
      </span>
    </div>
  </div>
  {#if password}
    <div class="level is-mobile">
      <div class="level-left">
        <span>
          Password: <b>{password}</b>
        </span>
      </div>
    </div>
  {/if}
</div>

<script>
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();
  export let name = "";
  export let surname = "";
  export let username = "";
  export let password = "";
  export let role = "";
  export let id = "";

  export let clickableRows;

  console.log($$props);

  function rowClick() {
    if (clickableRows) {
      fire("rowClick", {
        data: { id, name, surname, username, password, role },
      });
    }
  }
</script>
