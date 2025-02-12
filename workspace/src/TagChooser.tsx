import { useState } from "react";

export default function TagChooser() {
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
      <h2>TODO: title aus Properties einsetzen</h2>
      <div className={"TagChooser__tags"}>
        {/*

// TODO: Iterate over the "availableTags" list using the map function,
//       which is passed as a property to the TagChooser component,
//       and create a checkbox for each tag.
//         availableTags.map(t => ...)
//
//       - At the top level, a <label> should be rendered
//         - You need to set the key property (e.g., to the current tag)
//         - The label element should have two children (<label><input ...>TAG_NAME</label>):
//           - 1. An input field with the following properties:
//               - 'type="checkbox"'
//               - 'checked': must be true if the current tag (t) is present
//                 in the list of selected tags ('selectedTags')
//               - 'onChange': should call the function 'handleSelectTag'
//                 with the current tag (t)
//           - 2. The name of the current tag


        */}
      </div>
    </div>
  );
}
