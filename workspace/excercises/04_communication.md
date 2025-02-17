# Make the TagChooser a controlled component:

# Files

- src/PostEditor.tsx
- src/TagChooser.tsx

# Tasks

- The state (`selectedTags`) must be moved to the PostEditor component
    - You can keep the useState call from the TagChooser unchanged and move it to the
      PostEditor component
- You need two new properties for the `TagChooser`:
    - `selectedTags` (array of strings), containing the currently selected tags
      (controlled and passed down from the PostEditor)
    - `onSelectionChange`: a function that takes a string array of the (newly) selected tags

- In 'handleSelectTag', you no longer need to set the state (since it no longer exists),
  but instead call the callback function `onSelectionChange` received by the properties

- You then need to adjust the PostEditor:
    - It must have a new state (the moved `selectedTags` state from the TagChooser)
    - The PostEditor must pass down the two new properties: 'selectedTags' and 'onSelectionChange'
    - When the 'Clear' button is pressed in the PostEditor, the tag list should be emptied (set to an empty array)
    - When the 'Save' button is pressed, the list of selected tags should be logged on the console