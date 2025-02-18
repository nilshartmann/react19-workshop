# Integrate the PostPreview component

1. As a "warm up" for our 2nd day, please integrate the PostPreview component in your `PostEditor`
   - The `PostPreview` component is already implemented, you only have to add it to your `PostEditor` and set the correct properties.
     - Please make sure, that the `Clear`-Button in `PostPreview` works
2. Can you enhance the `PostEditor` so that a user can open and close the `PostPreview`.
   - For that you could add another `button` or `checkbox` to your `PostEditor`
   - If that works, and you can open and hide the `PostPreview` from the `PostEditor` add a new "dummy" state with a number (`1`) to `PostPreview` and display the current number.
     - Note that this state does not provide and meaningful business value to our app, it's just to understand React behaviour
   - Add a button to `PostPreview`.
     - If someone clicks on the button the number should be increased
   - When you close/open the `PostPreview` using the button/checkbox in `PostEditor`, what happens to the "number state" in `PostPreview`?
     - What could you do to preserve the state, when `PostPreview` is closed and opened again?
3. If you are finished or don't want to continue with the excercise, plase raise your hand in Teams ✋
    - This time we will discuss possible solutions _after_ you have tried the excercise
   
# Reference

- "Lifting state up": https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
- "Preserving and resetting state": https://react.dev/learn/preserving-and-resetting-state