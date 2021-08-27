<form action="" on:submit|preventDefault={success}>
  <div><slot /></div>
</form>

<script>
  export let success_tracker = {
      saving: false,
      saved: false,
      error: false,
    },
    failed_tracker = {
      saving: false,
      saved: false,
      error: false,
    };

  export function success() {
    success_tracker = {
      saving: true,
      saved: false,
      error: false,
    };

    setTimeout(() => {
      success_tracker = {
        saving: false,
        saved: true,
        error: false,
      };
      setTimeout(() => {
        success_tracker.saved = false;
      }, 2000);
    }, 1000);
  }

  export function failed() {
    failed_tracker = {
      saving: true,
      saved: false,
      error: false,
    };

    setTimeout(() => {
      failed_tracker = {
        saving: false,
        saved: false,
        error: true,
      };
      setTimeout(() => {
        failed_tracker.error = false;
      }, 2000);
    }, 1000);
  }
</script>
