import React from "react";
import GridItem from "./GridItem";
const Grid = ({ items, onItemRemove }) => {
  return (
    <div
      style={{
        display: "inline-grid",
        paddingTop: "10px",
        width: "50%",
        gridTemplateColumns: "1fr 1fr 1fr"
      }}
    >
      {items.map(item => (
        <GridItem key={item.id} item={item} onItemRemove={onItemRemove} />
      ))}
    </div>
  );
};

export default Grid;
