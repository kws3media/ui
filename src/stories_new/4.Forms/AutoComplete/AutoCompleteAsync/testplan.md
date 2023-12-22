### AutoComplete (Async)
### We will use the pre-populated values for testing

### Focus response
1. Focus on AutoComplete.
 - Result: No dropdown should be visible until user types and found matches.

### Testing search function
1. Test: Type "tony".
 - Result: The dropdown should display "tony stark"".
2. Test: Press "Enter".
 - Result: The dropdown should disappear and input value should be "tony roger".
3. Type " roger" again (with pre space).
 - Result: The dropdown should display "tony stark", "steve rogers".
4. Empty input then type "drax".
  - Result: The dropdown should display "drax".
5. Press "Enter".
  - Result: The dropdown should disappear and input value should be "drax".
### Testing selecting from results by 'Enter' key
1. Type "t".
  - Press Arrow Up 3 times
 - Result: "Thor" should be selected.
### Testing selecting from results by Mouse Click
1. Type "s".
  - Press Arrow Down 4 imes
 - Result: "Captain Midlands" should be selected.

### Testing dont clear input when user loses focus on it
1. Type "s" and click outside the input.
  - Result: The input value should be "s"