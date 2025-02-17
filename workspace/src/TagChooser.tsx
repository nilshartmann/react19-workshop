import { useState } from "react";

// Properties
// <TagChooser title="Choose your tags." availableTags={AVAILABLE_TAGS} />

// props = {
//  title: "Choose your tags.",
//  availableTags: AVAILABLE_TAGS
// }

type TagChooserProps = {
  title?: string;
  availableTags: string[];
};

export default function TagChooser({ title = "Tag Chooser", availableTags }: TagChooserProps) {
  // export default function TagChooser(props: TagChooserProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // title.toUpperCase();

  function handleSelectTag(tag: string) {
    // If the clicked tag is already in the list of selected tags,
    // it must be removed from the list,
    // if it is not yet present, it must be added to the list.

    const newSelection = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : selectedTags.concat(tag);

    setSelectedTags(newSelection);
  }

  // // === = = = equals  tripple equal operator
  // // == = = equals     double equal operator (with implicit type conversion)
  // // =  assignment
  //
  // // #0
  // let first_0;
  // if (title === undefined) {
  //   first_0 = "..."
  // } else {
  //   first_0 = title.substring(0, 3);
  // }
  // // #1
  // const firstThreeCharsFromTitle_1 = title === undefined ? "..." : title.substring(0, 3);
  // // #2
  // const firstThreeCharsFromTitle_2 = title?.substring(0, 3);
  // // #3
  // const firstThreeCharsFromTitle_3 = title ?? "..."

  // STATEMENT
  const result = availableTags.map(a => a.toUpperCase());

  // STATEMENT
  function createList() {
    // STATEMENT
    for (let i = 0; i < availableTags.length; i++) {
      //
    }
  }

  // EXPRESSIONS
  // ""
  // a ? "..." : ""
  // function invocation

  // const styles = {
  //   backgroundColor: "red",
  //   padding: "5px"
  // };

  return (
    <div>
      <h2
        style={{
          padding: "5px"
        }}
      >
        {title}
      </h2>
      <div className={"TagChooser__tags"}>
        {availableTags.map(a => {
          return (
            <label key={a}>
              {a}
              <input
                type={"checkbox"}
                onChange={() => handleSelectTag(a)}
                checked={selectedTags.includes(a)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
