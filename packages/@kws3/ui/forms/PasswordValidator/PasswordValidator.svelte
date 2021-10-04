<!--
  @component


  @param {string} [password=""] - Password for validating, Default: `""`
  @param {string} [style=""] - Inline CSS style for container, Default: `""`
  @param {boolean} [is_valid=false] - Variable used to check if password Validator returns true or false, Default: `false`
  @param {string} [class=""] - CSS classes for container, Default: `""`

-->
<div class={klass} style="margin:0;max-width: 100%;{style}">
  <ul class:expanded>
    {#each result.items as opt (opt.name)}
      <li animate:flip={{ easing: sineOut }}>
        <span class="help expanded">
          <span
            class="tag is-small is-normal is-light pv-identifier {opt.passed
              ? 'is-success'
              : 'is-danger'}">{opt.identifier}</span>
          <span class="pv-text">{opt.text}</span>
          <Icon
            class="pv-icon"
            icon={opt.passed ? "check" : "ban"}
            color={opt.passed ? "success" : "danger"} />
        </span>
        <span class="summarized">
          <span
            data-tooltip={opt.text}
            data-tippy-hideOnClick="false"
            class="tag is-small is-normal is-light pv-identifier {opt.passed
              ? 'is-success'
              : 'is-danger'}">{opt.identifier}</span>
        </span>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      padding: 0;
      margin: 0;
      .tag.pv-identifier {
        font-weight: bold;
        cursor: pointer;
      }
      .expanded {
        display: none;
      }
      .summarized {
        display: flex;
      }
    }

    &.expanded {
      display: block;
      li {
        .tag.pv-identifier {
          min-width: 2.5rem;
        }
        .expanded {
          display: block;
        }
        .summarized {
          display: none;
        }
      }
    }
  }
</style>

<script>
  import { flip } from "svelte/animate";
  import { sineOut } from "svelte/easing";
  import validate from "./validatePassword";
  import { Icon } from "@kws3/ui";

  /**
   * Minimum number of characters required
   */
  export let min = 8,
    options = [
      {
        name: "lowercase",
        active: true,
        text: "At least one lower-case letter",
        identifier: "a-z",
        regex: /[a-z]/,
      },
      {
        name: "uppercase",
        active: true,
        text: "At least one upper-case letter",
        identifier: "A-Z",
        regex: /[A-Z]/,
      },
      {
        name: "digits",
        active: true,
        text: "At least one number",
        identifier: "0-9",
        regex: /[0-9]/,
      },
      {
        name: "special",
        active: true,
        text: "At least one special character",
        identifier: "!#@",
        regex: /[^A-Za-z0-9]/,
      },
    ],
    /**
     * Password for validating
     */
    password = "",
    /**
     * Inline CSS style for container
     */
    style = "",
    /**
     * Variable used to check if password Validator returns true or false
     */
    valid = false;

  /**
   * CSS classes for container
   */
  let klass = "";
  export { klass as class };

  $: expanded = password && !result.overall;

  $: sanitizedOptions = [
    {
      name: "kws_min_length",
      active: true,
      text: `At least ${min} characters`,
      identifier: `${min}+`,
      value: min,
    },
    ...options,
  ]
    .filter((el) => el.active)
    .map((el) => {
      el.passed = false;
      return el;
    });

  $: result = validate(password, sanitizedOptions);

  $: {
    if (result.overall) {
      valid = true;
    }
  }
</script>
