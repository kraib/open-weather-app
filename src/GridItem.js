import React from "react";
const GridItem = ({ item, onItemRemove }) => {
  return (
    <div
      key={item.id}
      style={{
        border: "1px solid",
        position: "relative",
        width: "200px",
        height: "200px"
      }}
    >
      <button
        onClick={() => onItemRemove(item.id)}
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        X
      </button>
      <span>{item.main}</span>
    </div>
  );
};

export default GridItem;
