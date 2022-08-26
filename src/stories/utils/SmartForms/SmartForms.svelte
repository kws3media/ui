<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column">
      <form on:submit|preventDefault|stopPropagation={save}>
        <div class="field">
          <div class="control">
            <label for="" class="label">Email</label>
            <input
              class="input {$errors.email ? 'is-danger' : ''}"
              type="text"
              bind:value={$data.email} />
          </div>
        </div>

        <div class="field">
          <p class="control">
            <label for="" class="label">Password</label>
            <input
              class="input {$errors.password ? 'is-danger' : ''}"
              type="password"
              bind:value={$data.password} />
          </p>
        </div>

        <div class="field">
          <p class="control">
            <button
              type="submit"
              class="button is-primary is-pulled-right"
              disabled={!$isValid}>Login</button>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  import { makeForms, notEmpty, withMsg } from "@kws3/ui/form";

  /**
   * Form Object
   * @type {Object}
   */
  let form;
  /**
   * FormData
   * @type {Object}
   */
  let data;
  /**
   * Form Field Errors
   * @type {Object}
   */
  let errors;
  /**
   * Form field Validity
   * @type {Object}
   */
  let isValid;
  /**
   * Form Field is touched/untouched
   * @type {Object}
   */
  let isTouched;
  /**
   * Form
   * @type {Object}
   */
  let validators = {
    email: withMsg("Email should not be empty", notEmpty),
    password: withMsg("Password should not be empty", notEmpty),
  };

  $: load();

  function load() {
    form = makeForms({
      data: {
        email: "",
        password: "",
      },
      validators,
    });
    data = form.formData;
    errors = form.errors;
    isValid = form.isValid;
    isTouched = form.isTouched;
  }

  function save() {
    if (!isTouched) {
      form.update(data);
    }
  }
</script>
