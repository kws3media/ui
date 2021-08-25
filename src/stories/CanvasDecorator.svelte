<slot />

<style global>
  /*body {
    color: #fff !important;
  }*/
</style>

<script>
  let dark = false;
  var myParam = location.search.split("globals=")[1];
  if (myParam.includes("333333")) {
    dark = true;
  }
</script>
