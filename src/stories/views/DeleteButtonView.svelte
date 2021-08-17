<Layout
  title="DeleteButton"
  subtitle="Delete Button with built-in confirmation."
  {pkg}
>

  <h2 class="title is-4">Example</h2>
  <p>Use <strong>Knobs</strong> to check out all available options on this component</p>
  <div class="columns">
    <div class="column">
      <div class="columns">
        <div class="column">
          <DeleteButton
          {text}
          {icon}
          {doing_icon}
          {done_icon}
          {doing_text}
          {done_text}
          {color}
          {size}
          {icon_only}
          {disabled}
          on:erase={eraseDo}
        />
          <span class="help">This will succeed.</span>
        </div>
        <div class="column">
          <DeleteButton
            {text}
            {icon}
            {doing_icon}
            {done_icon}
            {doing_text}
            {done_text}
            {color}
            {size}
            {icon_only}
            {disabled}
            on:erase={(e) => eraseDo(e, false)}
          />
          <span class="help">This will fail.</span>
        </div>
      </div>

      <p>Fires a <code>erase</code> event when confirmation is passed.</p>
      <p>Fires a <code>erased</code> event after visual state has been reset following an action.</p>

      <Message color="info">
        Also takes a <code>context</code> property. This can let you differentiate between components when a page contains multiple instances of this component.
      </Message>
    </div>
    <div class="column">
      <Code>{ `<DeleteButton
  text="Delete"
  color="${color}"
  size="${size}"
  icon_only="{${icon_only}}"
  disabled="{${disabled}}"
/>`}</Code>

      <Message color="primary" style="margin-top:10px">
        <p>In addition to the above options, the component also accepts the following properties:</p>
        <ul>
          <code>icon</code>,
          <code>text</code>,
          <code>doing_icon</code>,
          <code>doing_text</code>,
          <code>done_icon</code>,
          <code>done_text</code>
        </ul>
      </Message>

    </div>
  </div>

  <hr>

  <h2 class="title is-4">Usage Example</h2>
  <Code>
  {
  `<DeleteButton on:do on:done />;
  <script>
    import { DeleteButton } from '@kws3/buttons';
  </script>`
  }
  </Code>


</Layout>


<script>
  import Layout from '../layouts/Layout.svelte';
  import Code from '../helpers/Code.svelte';
  import { DeleteButton } from '@kws3/buttons';
  import { Message } from '@kws3/helpers';
  import pkg from '@kws3/buttons/package.json';
  import { onMount } from "svelte";

  function somePromise(context){
    return new Promise((fulfil, reject) => {
      setTimeout(() => {
        context == 'pass' ? fulfil() : reject();
      }, 2000);
    })
  }

  export let color = "primary",
    disabled = false,
    size="",
    icon_only = false,
    text = "Delete",
    icon = "minus-circle",
    doing_icon = "hourglass",
    done_icon = "check",
    doing_text = "Doing",
    done_text = "Deleted";


    function eraseDo(event, success = true){
      let {doing, done, error} = event.detail;
      doing();
      setTimeout(() => {
        if(success){
          done();
        } else {
          error();
        }
      }, 2000)
    }



</script>