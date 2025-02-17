# Add a TagChooser to our PostEditor

- File: src/PostEditor.tsx
- File: src/TagChooser.tsx

# Tasks

* **Complete the TagChooser component**
  - Define a TypeScript type `TagChooserProps` for the props of the TagChooser with the following content:
    - title as an optional string
    - availableTags as an array of strings
  - Extend the signature of the `TagChooser` to include the props object 
    - Use the `TagChooserProps` type you created
  - Use the "title" from the properties for the `h2` element
    - If no title is provided, use a default title (e.g., "Tags")
* **Implement the list for displaying and selecting tags**
  * Each tag should have a input element with `type=checkbox` so it can be selected and unselected.
  * Remember that each item in a list, needs a unique `key` property
  * You need to interact with the already defined `selectedTags` state when a tag is clicked
  * for more information see "todo" in the `TagChooser.tsx` file 
* **Integrate your `TagChooser` into your `PostEditor`**
  - Add the `TagChooser` below the input fields and pass in a list of example tags
    as a string array, e.g., "React", "JavaScript", "Tutorial"

# Material

* React
  * Checkbox example: https://react.dev/reference/react-dom/components/input#displaying-inputs-of-different-types 
  * Rendering Lists: https://react.dev/learn/rendering-lists
  * `key`-Property in lists: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
* HTML
  * `checked` property: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checked 