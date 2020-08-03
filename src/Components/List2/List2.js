// List component found at: https://baseweb.design/components/dnd-list/

import * as React from "react";
import { List, arrayMove, arrayRemove } from "baseui/dnd-list";

export default () => {
  const [items, setItems] = React.useState([
    "Pumas",
    "Ruth Bader Ginsburg",
    "Dwayne 'The Rock' Johnson",
    "Mick Jagger",
    "A crocodile with sunglasses",
  ]);
  return (
    <>
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
      {JSON.stringify(items)}
    </>
  );
};
