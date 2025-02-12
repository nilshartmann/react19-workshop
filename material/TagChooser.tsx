// @ts-nocheck
import { useState } from "react";

// -----------------------------------------------------------------------------------------------
// TODO: Make the TagChooser a controlled component:
// -----------------------------------------------------------------------------------------------
//  - If you use this file as a basis:
//     - make sure to remove the first line from the file ("// @ts-nocheck") to enable
//       TS type checking
//
//  - The state (selectedTags) must be moved to the PostEditor component
//     - You can keep the useState call from the TagChooser unchanged and move it to the
//       PostEditor component
//
//  - You need two new properties:
//     - selectedTags (array of strings), containing the currently selected tags
//       (controlled and passed down from the PostEditor)
//     - onSelectionChange: a function that takes a string array of the (newly) selected tags
//
//  - In 'handleSelectTag', you no longer need to set the state (since it no longer exists),
//    but instead call the callback function onSelectionChange
//
//  - You then need to adjust the PostEditor:
//     - It must have a new state (the moved tag state from the TagChooser)
//     - The PostEditor must pass down the two new properties: 'selectedTags' and 'onSelectionChange'
//     - When the 'Clear' button is pressed in the PostEditor, the tag list should be emptied
//       (set to an empty array)

type TagChooserProps = {
  title?: string;
  availableTags: string[];
};

export default function TagChooser({ availableTags, title = "Tags" }: TagChooserProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  function handleSelectTag(tag: string) {
    // If the clicked tag is already in the list of selected tags,
    // it must be removed from the list,
    // if it is not yet present, it must be added to the list.

    const newSelection = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : selectedTags.concat(tag);

    setSelectedTags(newSelection);
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className={"TagChooser__tags"}>
        {availableTags.map(t => (
          <label key={t}>
            <input
              type="checkbox"
              checked={selectedTags.includes(t)}
              onChange={() => handleSelectTag(t)}
            />
            {t}
          </label>
        ))}
      </div>
    </div>
  );
}
