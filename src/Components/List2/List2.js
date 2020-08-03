import * as React from "react";
import {
  List,
  arrayMove,
  arrayRemove
} from "baseui/dnd-list";

export default () => {
  const [items, setItems] = React.useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "A list of cool things",
    "Mick Jagger",
    "A crocodile with sunglasses"
  ]);
  return (
    <List
      items={items}
      onChange={({ oldIndex, newIndex }) =>
        setItems(
          newIndex === -1
            ? arrayRemove(items, oldIndex)
            : arrayMove(items, oldIndex, newIndex)
        )
      }
    />
  );
}