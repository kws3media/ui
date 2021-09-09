<Message
  color="grey"
  inner_style="border-width:0"
  style="margin: -1rem -1.3rem -0.8rem;">
  <div id="stepsHolder">
    <ul class="steps has-content-centered is-horizontal">
      {#each steps as step, idx}
        <li class="steps-segment {active_index == idx ? 'is-active' : ''}">
          <span class="steps-marker">{idx + 1}</span>
          <div class="steps-content">
            <p>{steps[active_index].name}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</Message>
<div style="height:100%;width:800px;">
  <SlidingPaneSet style="height:{pane_height}px">
    <SlidingPane
      active={steps[active_index].key == "step_one"}
      v_center={true}
      h_center={true}
      track_height>
      <div class="buttons">
        <button class="button is-info">Info</button>
        <button class="button is-success">Success</button>
        <button class="button is-warning">Warning</button>
        <button class="button is-danger">Danger</button>
      </div>
    </SlidingPane>

    <SlidingPane
      active={steps[active_index].key == "step_two"}
      v_center={true}
      h_center={true}
      track_height>
      <Message>
        <p class="title is-3">Ah, You wont believe that is 2nd step</p>
      </Message>
    </SlidingPane>

    <SlidingPane
      active={steps[active_index].key == "step_three"}
      v_center={true}
      h_center={true}
      track_height>
      <Message color="warning">
        <p class="title is-3">Oh, noo, You reached at 3rd step</p>
      </Message>
    </SlidingPane>
  </SlidingPaneSet>
</div>
<div class="columns">
  <div class="column">
    <div class="buttons is-centered">
      <button class="button is-info" on:click={() => changeStep(-1)}>
        <Icon icon="arrow-left" />
      </button>
      <button class="button is-success" on:click={() => changeStep(+1)}>
        <Icon icon="arrow-right" />
      </button>
    </div>
  </div>
</div>

<script>
  import { SlidingPane, SlidingPaneSet, Icon, Message } from "@kws3/ui";

  export let pane_height = 150,
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
</script>
