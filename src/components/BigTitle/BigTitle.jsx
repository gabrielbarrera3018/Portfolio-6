import React from "react";

export const BigTitle = (prop) => {
  const style = {
    position: "fixed",
    top: prop.top,
    right: prop.right,
    bottom: prop.bottom,
    left: prop.left,
    fontSize: "calc(5rem + 5vw)",
    color: prop.color,
    fontFamily: "Karla",
    fontWeight: "800",
  };
  return (
    <>
      <h1 style={style}>{prop.text}</h1>
    </>
  );
};
