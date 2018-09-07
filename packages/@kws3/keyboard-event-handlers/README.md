# Keyboard Event Handlers

Keyboard event handlers for Svelte App.

## Installation

```bash
npm install --save-dev @kws3/keyboard-event-handlers
```

## Usage

```html

<input on:enter='addTodo()' bind:value='newTodo'>
<code>Press enter to add item</code>

<ul>
  {#each todos as todo}
    <li>{todo}</li>
  {/each}
</ul>



<script>

  import {enter} from '@kws3/keyboard-event-handlers';

  export default {
    data: function () {
      return {
        newTodo: '',
        todos: ['add some more todos']
      };
    },
    events: {
      enter
    },
    methods: {
      addTodo(e){
        let { newTodo, todos } = this.get();
        todos.push(newTodo);
        this.set({todos});
      }
    }
  };
</script>
```


## Available events


* enter
* tab
* escape
* space
* leftarrow
* rightarrow
* downarrow
* uparrow
* backspace
* del


## Custom key events

```js
  import { makeKeyDefinition } from '@kws3/keyboard-event-handlers';
  var someKey = makeKeyDefinition(keycode)

```