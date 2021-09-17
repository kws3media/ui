<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={push}
      >Create Toast</button>
  </div>
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={pushCustom}
      >Custom Component Toast</button>
  </div>
</div>

<ToastOutput />

<script>
  import { Toast as KwsToast, ToastOutput } from "@kws3/ui";
  import CustomToast from "./CustomToast.svelte";

  export let title = "Heading Toast",
    message = "I am a Toast...",
    duration = 3000,
    color = "primary",
    position = "bottom-right",
    is_dismissable = true,
    is_persistent = false,
    context = 1;

  let count = 1;

  const push = () => {
    KwsToast.push({
      title,
      duration,
      color,
      position,
      is_dismissable,
      is_persistent,
      context,
      message: count + " - " + message,
    });
    count++;
  };

  const pushCustom = () => {
    KwsToast.push({
      component: CustomToast,
      title,
      message: "I am a customized Toast...",
      is_persistent: true,
      is_dismissable: false,
      position,
      color,
      beforeClose: (props) => {
        //do something here before close
        console.log("before close");
      },
      afterClose: (props) => {
        //do something here after close
        console.log("after close");
      },
    });
  };
</script>
