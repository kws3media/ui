<div class="main has-text-centered">

  <h1 class="title">
    Input Component
  </h1>

  <div class="columns">
    <div class="column" >
      <Input {...args} />
    </div>
    <div class="column" >

      <div class="field">
        <label class="label">Placeholder</label>
        <div class="control">
          <input type="text" class="input" bind:value={args.placeholder} />
        </div>
      </div>

      <div class="field">
        <label class="label">Label</label>
        <div class="control">
          <input type="text" class="input" bind:value={args.label} />
        </div>
      </div>

      <div class="field">
        <label class="label">Value</label>
        <div class="control">
          <input type="text" class="input" bind:value={args.value} />
        </div>
      </div>

      <div class="field">
        <label class="label">Error Message</label>
        <div class="control">
          <input type="text" class="input" bind:value={args.error} />
        </div>
      </div>

      <div class="field">
        <label class="label">Disabled</label>
        <div class="control">
          <input type="checkbox" class="" bind:checked={args.disabled} />
        </div>
      </div>


    </div>
  </div>

</div>



<!-- The title determines where your story goes in the story list -->
<Meta
  title="Input Component"
  component={Input}
  argTypes={args}
/>

<Template let:args>
  <Input {...args} />
</Template>

<Story
  name="TestStory"
  args={args}
/>

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Input from "./../helpers/Input.svelte";

  let args = {
    type : 'text',
    placeholder : '',
    value : '',
    label : '',
    error : '',
    disabled : false
  }
</script>