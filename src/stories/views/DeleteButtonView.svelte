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


<script>
  import { DeleteButton } from '@kws3/buttons';

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