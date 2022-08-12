<div class="columns">
  <div class="column">
    <Message
      color="grey"
      inner_style="border-width:0"
      style="margin: -1rem -1.3rem -0.8rem;">
      <div id="stepsHolder">
        <ul class="steps has-content-centered is-horizontal">
          <!-- eslint-disable-next-line no-unused-vars -->
          {#each steps as step, idx}
            <li
              class="steps-segment {active_index === idx ? 'is-active' : ''}"
              on:click={() => activateStep(idx)}
              style="cursor:pointer;">
              <span class="steps-marker">{idx + 1}</span>
              <div class="steps-content">
                <p>{steps[active_index].name}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </Message>
  </div>
</div>

<div class="columns">
  <div class="column">
    <SlidingPaneSet style="height:{pane_height}px">
      <SlidingPane
        active={steps[active_index].key === "step_one"}
        {v_center}
        {h_center}
        {track_height}
        class={klass}
        {style}
        on:heightChange={heightChange}>
        <div class="sp-item">Div 1</div>
        <div class="sp-item">Div 2</div>
        <div class="sp-item">Div 3</div>
        <div class="sp-item">Div 4</div>
        <!--<Message color="primary">
          <p class="title is-3">1st step</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Message>-->
      </SlidingPane>

      <SlidingPane
        active={steps[active_index].key === "step_two"}
        {v_center}
        {h_center}
        {track_height}
        class={klass}
        {style}
        on:heightChange={heightChange}>
        <Message color="success">
          <p class="title is-3">Ah, You wont believe that is 2nd step</p>
          <p><img src="https://picsum.photos/200/300" alt="" /></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Message>
      </SlidingPane>

      <SlidingPane
        active={steps[active_index].key === "step_three"}
        {v_center}
        {h_center}
        {track_height}
        class={klass}
        {style}
        on:heightChange={heightChange}>
        <Message color="warning">
          <p class="title is-3">Oh, noo, You reached at 3rd step</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Message>
      </SlidingPane>
    </SlidingPaneSet>
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="buttons is-centered">
      <button
        type="button"
        class="button is-info is-small"
        on:click={() => changeStep(-1)}>
        <Icon icon="arrow-left" />
      </button>
      <button
        type="button"
        class="button is-success is-small"
        on:click={() => changeStep(+1)}>
        <Icon icon="arrow-right" />
      </button>
    </div>
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="buttons is-centered">
      <button
        type="button"
        class="button is-warning is-small is-rounded"
        on:click={() => activateStep(0)}>1</button>
      <button
        type="button"
        class="button is-warning is-small is-rounded"
        on:click={() => activateStep(1)}>2</button>
      <button
        type="button"
        class="button is-warning is-small is-rounded"
        on:click={() => activateStep(2)}>3</button>
    </div>
  </div>
</div>

<style>
  .sp-item {
    background-color: DodgerBlue;
    color: white;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
  }
</style>

<script>
  //@ts-nocheck
  import { SlidingPane, SlidingPaneSet, Icon, Message } from "@kws3/ui";
  export let pane_height = 150,
    style = "",
    v_center = true,
    h_center = true,
    track_height = false,
    steps = [
      { key: "step_one", name: "Step One" },
      { key: "step_two", name: "Step Two" },
      { key: "step_three", name: "Step Three" },
    ],
    active_index = 0;

  export function changeStep(i) {
    let max = steps.length;
    let _index = Math.max(0, Math.min(active_index + i, max - 1));
    active_index = _index;
  }

  let klass = "";
  export { klass as class };

  function heightChange(event) {
    pane_height = event.detail.height;
  }

  function activateStep(index) {
    active_index = index;
  }
</script>
