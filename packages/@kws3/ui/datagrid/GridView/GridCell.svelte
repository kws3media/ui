
<script>
  export let column = '',
        row = {},
        transforms = {},
        classNames = {},
        styles = {};

</script>

<td class="{classNames(column, row)}" style="{styles(column, row)}">{@html transforms(column, row)}</td>
