<!--
  @component
  

  @param {undefined} [pkg=undefined] - Pkg property, Default: `undefined`

-->
<div class="field is-grouped">
  <div class="control">
    <span class="tags has-addons">
      <span class="tag is-grey">Package</span>
      <span class="tag is-success">{pkg.name}</span>
    </span>
  </div>
  <div class="control">
    <span class="tags has-addons">
      <span class="tag is-grey">Version</span>
      <span class="tag is-success">{pkg.version}</span>
    </span>
  </div>
</div>

<script>
  export let pkg = { name: "unknown", version: "0.0.0" };
</script>
