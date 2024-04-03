### ActionSheet

### Basic function
1. Click the actionsheet button.
 - The action sheet pops up, and the rest of the page goes dark
2. Click the "close action sheet" button.
 - The actionsheet closes.
3. Click the action sheet button.
4. Click the "cross" button in the top right of the actionsheet.
 - The actionsheet closes.
5. Click the action sheet button.
6. Click on the darkened empty space outside the actionsheet.
 - The actionsheet closes.

### Testing property "close_on_click_outside"
1. Change the property "close_on_click_outside" to "false".
2. Click the actionsheet button.
 - The action sheet pops up, and the rest of the page goes dark
3. Click on the darkened empty space outside the actionsheet.
 - The actionsheet does NOT close.

### Testing property "closable"
1. Click the "cross" button in the top right of the actionsheet.
2. Change the property "closable" to "false".
3. Click the actionsheet button.
 - The action sheet pops up, and the rest of the page goes dark
 - There is no "cross" button in the top right of the actionsheet.
4. Click the "close action sheet" button.
 - The actionsheet closes.
5. Change the property "close_on_click_outside" to "true".
6. Click the actionsheet button.
 - The action sheet pops up, and the rest of the page goes dark
7. Click on the darkened empty space outside the actionsheet.
 - The actionsheet does NOT close.
8. Close the actionsheet by clicking the "close action sheet" button.