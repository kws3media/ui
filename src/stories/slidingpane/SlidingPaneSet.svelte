<div class="columns">
  <div class="column">
    <KwsSlidingPaneSet {style} class={klass} {vertical}>
      <SlidingPane active={steps[active_index].key === "step_one"}>
        <Message color="primary">
          <p class="title is-3">One</p>
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
      <SlidingPane active={steps[active_index].key === "step_two"}>
        <Message color="danger">
          <p class="title is-3">Two</p>
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
    </KwsSlidingPaneSet>
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

<script>
  import {
    SlidingPaneSet as KwsSlidingPaneSet,
    SlidingPane,
    Message,
    Icon,
  } from "@kws3/ui";

  export let style = "height:210px",
    vertical = false;

  let klass = "";
  export { klass as class };

  let steps = [
      { key: "step_one", name: "One" },
      { key: "step_two", name: "Two" },
    ],
    active_index = 0;

  export function changeStep(i) {
    let max = steps.length;
    let _index = Math.max(0, Math.min(active_index + i, max - 1));
    active_index = _index;
  }
</script>
