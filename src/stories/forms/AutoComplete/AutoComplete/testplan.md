### AutoComplete
### We will use the pre-populated values for testing

### Focus response
1. Focus on AutoComplete.
 - Result: No dropdown should be visible until user types and found matches.

### Testing search function
1. Test: Type “tony” (with space) and "roger".
 - Result: The dropdown should display “tony stark” and "steve rogers".
2. Test: Press “Enter”.
 - Result: The dropdown should disappear and input value should be “tony roger".
3. Type “banner” again (with pre space).
 - Result: The dropdown should display “tony stark”, "steve rogers" and "bruce banner".
4. Empty input then type “drax”.
  - Result: The dropdown should display “drax”.
5. Press “Enter”.
  - Result: The dropdown should disappear and input value should be “drax”.
