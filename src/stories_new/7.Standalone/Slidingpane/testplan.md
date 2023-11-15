### SlidingPane

### testing the sliding function
1. click the step '2' circle on the top of the sliding pane.
 - the pane should slide to reveal next panel.
2. click the 'right arrow' button on the bottom of the sliding pane.
 - the pane should slide to reveal next panel.
3. click the button labelled '1' in the bottom of the sliding pane.
 - the pane should slide back to the first panel.
4. check for any error messages in the console.

### testing the "height change" property
1. change the property "track_height" to "false".
2. click the step '2' circle on the top of the sliding pane.
 - the pane should slide to reveal the next panel, but part of the panel should be cut off because it is taller than the first panel.

### testing the "v_center" and "h_center" properties.
1. change the property "track_height" to "true".
2. change the property "h_center" to "false".
 - the 4 "divs" inside the panel should get aligned to the left.
3. change the property "v_center" to "false".
 - the 4 "divs" inside the panel should form a column with 2nd div under the first, and so on.
