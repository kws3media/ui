<KwsTimeline {klass} {data} />

<script>
  import { Timeline as KwsTimeline } from "@kws3/ui";
  export let data = [
    {
      user: "User 1",
      description: "Test",
    },
    {
      user: "User 2",
      description: "Test 2",
    },
  ];

  let klass = "is-primary";
  export { klass as class };
</script>
