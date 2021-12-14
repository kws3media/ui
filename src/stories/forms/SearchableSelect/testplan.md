### SearchableSelect
### Legend: Numbered bullets are test instructions. Non-numbered bullets are expected results.

### ”empty string” is preselected on this, so will start by clearing that.

### Preparation
1. Use mouse to clear the input by clicking the “cross” at the end of the input.
2. Focus on the input.
 - The dropdown showing all options are displayed

### Testing search mismatch
1. Type “apl” into input.
 - The dropdown should read “No Matching Options”.

### Testing backspace and search matches
1. Type “(backspace)” twice, so that the form reads “a”.
 - The dropdown should display 6 of the results that have “a” in them.

### Testing direction keys to select and choose
1. Use direction keys to scroll to “xiaomi” and press “(return)”
 - “xiaomi” should be chosen in the input, and the dropdown should disappear.

### (Backspace) usage
1. Focus on the input.
2. Use “(backspace)” 6 times to delete “xiaomi” from the input.
3. Type “vi” in the input.
 - “Vivo” should be the only option displayed.
4. Use “(backspace)” twice to delete the typed “vi”.
 - The input will be empty, but “xiaomi” should still be selected in the dropdown and output.
5. Press “(backspace)” again, but don’t unfocus from the input.
 - Nothing is selected in the dropdown and the output is “null”.
6. Press “(return)”.
 - “Xiaomi” is selected again, is shown in the input field, and is also the output.

### Testing normal search and select
1. Use mouse to clear the input by clicking the “cross” at the end of the input.
2. Focus on the input.
3. Type “ht”
 - the only matching option of “htc” is shown in the dropdown.
4. Press “(return)”
 - “htc” is selected and is displayed in the input.

### Testing selecting using mouse
1. Use mouse to clear the input by clicking the “cross” at the end of the input.
2. Focus on the input.
3. Use mouse to select “sony”
 - “sony” should be selected and displayed in the input.
4. Focus on the input.
 - The dropdown should display.
5. Use mouse to select “samsung”.
 - “Samsung” should be selected and show in the input.
