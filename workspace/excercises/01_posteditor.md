# Implement the first iteration of our PostEditor component

- File: src/PostEditor.tsx

# Tasks 

* Create the input field
  * Add an `input` field (`type='text'`) for the 'title'-field
  * Create a new state empty state, using `useState`
  * The state should be synchronized with the content of the `input`element
  * If that works, please check browser console and make sure there are no errors
    * (Ignore the warning from React Router)
* Add a clear button
  * Create a button "Clear"
  * If the button gets clicked, the `input` field should be cleared

# Material

* React documentation: https://react.dev/

* React
  * JSX syntax: https://react.dev/learn/writing-markup-with-jsx
  * useState Hook: https://react.dev/reference/react/useState
  * input component: https://react.dev/reference/react-dom/components/input
  * input-field with state: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
* HTML 
  * input Element:  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  * text input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
  * button Element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
  * click event: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

# Developer Tools

* You can install browser extensions for React
  * Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
  * Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
* (Note they are _not_ neccessary for our workshop)