<!--
  @component


  @param {string} [column=""] - Column property, Default: `""`
  @param {object} [row={}] - Row property, Default: `{}`
  @param {object} [transforms={}] - Transforms property, Default: `{}`
  @param {object} [classNames={}] - ClassNames property, Default: `{}`
  @param {object} [styles={}] - Styles property, Default: `{}`

-->

<td class={classNames(column, row)} style={styles(column, row)}
  >{@html transforms(column, row)}</td>

<script>
  export let column = "",
    row = {},
    transforms = {},
    classNames = {},
    styles = {};
</script>
