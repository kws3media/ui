<div class="control is-expanded">
  <span
    class="is-block filename {item.status === 'failed'
      ? 'has-text-danger'
      : ''}">{item.original_name}</span>
  <progress
    class="info is-small"
    style="width:100%"
    max="100"
    value={item.progress || 0} />
</div>

<script>
  export let item = {};
</script>
