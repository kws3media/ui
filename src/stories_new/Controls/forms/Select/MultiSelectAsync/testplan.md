### MultiSelect
### We will use the pre-populated values for testing

### Focus response
1. Focus on Multi-select.
 - Result: A dropdown showing all selectable items should appear.

### Testing search function
1. Test: Type “no”.
 - Result: The dropdown should display “nokia” only.
2. Use backspace key to clear input.
 - Result: The input should be cleared.

### Testing selecting from results
1. Type “son” “(return key)”, followed by “hua” “(return key)”.
 - Result: “Sony” and ”Huawei” should be showing in the Multi-select’s input and be selected in the Dropdown list.

### Testing unselect using backspace key and mouse
1. With "Sony" and "Huawei" still selected, Press “(backspace key)”.
 - Result: “Huawei'' should be unselected from Dropdown and removed from the Multi-select’s input.
2. Press the “cross” next to “Sony” inside the Multi-select.
 - Result: This should clear "Sony" and leave the input empty and nothing selected in the dropdown.

### Testing clearing using Escape key
1. Focus on Multi-select. Type “bl” “(return key)“, then type “nok” “escape key”.
 - Result: The Dropdown should be showing, and only “blackberry” is selected, and the input is ready to accept new selection to be typed.

### Testing selecting using mouse and direction keys.
1. At this stage the dropdown should be showing. Use arrow keys to choose “LG” by using the enter key.
2. Use the mouse to choose “oppo” using mouse click.
 - Result: Now “blackberry”, ”LG”, ”oppo” are selected in Multi-select and dropdown.

### Testing the cross button at the end of the input field
1. Now “blackberry”, ”LG”, ”oppo” are selected. Use mouse to click the “cross” button at the end of the input field.
Result: Searchable-select should be fully cleared.
