# Improve the PostEditor

- File: src/PostEditor.tsx

# Tasks

* Create the textarea field for the 'body' field of a blog post
    * Add an `textarea` field for the 'body'-field
    * Create a new state empty state for the 'body', using `useState`
* Update the 'Clear' button
  * If that button gets clicked, both fields (title and body) should be cleared
* Add a 'Save' button
    * Create a button with the label "Save"
    * If the button gets clicked, the input from the text fields should be logged to console
    * The button should only be `enabled` when both fields (title and body) are filled. 

# Material

* React textarea component: https://react.dev/reference/react-dom/components/textarea
* HTML textarea: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea