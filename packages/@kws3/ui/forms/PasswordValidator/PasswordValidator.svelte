<!--
  @component


  @param {string} [password=""] - Password for validating, Default: `""`
  @param {string} [style=""] - Inline CSS style for container, Default: `""`
  @param {boolean} [is_valid=false] - Variable used to check if password Validator returns true or false, Default: `false`
  @param {string} [class=""] - CSS classes for container, Default: `""`

-->
<div class="kws-password-validator {klass}" {style}>
  <ul class:expanded={!compact}>
    {#each result.items as opt}
      <li>
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
  .kws-password-validator {
    margin: 0;
    max-width: 100%;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin: 0 -0.25em 0 0;
    li {
      padding: 0;
      margin: 0 0.25em 0.25em 0.25em;
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
  import validate from "./validatePassword";
  import { Icon } from "@kws3/ui";

  /**
   * Minimum number of characters required
   */
  export let min = 8,
    /**
     * Whether a lower-case character is required
     */
    lower = true,
    /**
     * Whether a upper-case character is required
     */
    upper = true,
    /**
     * Whether a digit character is required
     */
    digit = true,
    /**
     * Whether a special character is required
     */
    special = true,
    /**
     * Array of custom rules defined as objects
     *
     * Object must contain:
     * `name`
     * `text`
     * `identifier`
     * `regex`
     * `negate (optional)`
     *
     */
    custom_rules = [],
    /**
     * Password for validating
     */
    password = "",
    /**
     * Inline CSS style for container
     */
    style = "",
    /**
     * Determines whether validator should display in compact mode or expanded mode
     */
    compact = true,
    /**
     * Variable used to check if password Validator returns true or false
     *
     * Should be used with `bind` from parent component
     */
    valid = false;

  /**
   * CSS classes for container
   */
  let klass = "";
  export { klass as class };

  const defaultMap = {
    lower: {
      name: "kws_pv_lowercase",
      active: true,
      text: "At least one lower-case letter",
      identifier: "a-z",
      regex: /[a-z]/,
    },
    upper: {
      name: "kws_pv_uppercase",
      active: true,
      text: "At least one upper-case letter",
      identifier: "A-Z",
      regex: /[A-Z]/,
    },
    digit: {
      name: "kws_pv_digits",
      active: true,
      text: "At least one number",
      identifier: "0-9",
      regex: /[0-9]/,
    },
    special: {
      name: "kws_pv_special",
      active: true,
      text: "At least one special character",
      identifier: "!#@",
      regex: /[^A-Za-z0-9]/,
    },
  };

  $: sanitizedOptions = [
    {
      name: "kws_pv_min_length",
      active: true,
      text: `At least ${min} characters`,
      identifier: `${min}+`,
      value: min,
    },
    lower ? defaultMap.lower : null,
    upper ? defaultMap.upper : null,
    digit ? defaultMap.digit : null,
    special ? defaultMap.special : null,
    ...getSanitizedCustomRules(custom_rules),
  ]
    .filter(Boolean)
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

  function getSanitizedCustomRules(cr) {
    return cr.map((el) => {
      el.active = true;
      return el;
    });
  }
</script>
