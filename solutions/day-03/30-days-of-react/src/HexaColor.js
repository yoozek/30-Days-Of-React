import React from "react";

const getColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const styles = {
  width: "100%",
  textAlign: "center"
};

export const HexaColor = () => {
  const color = getColor();
  styles.backgroundColor = color;

  return <div style={styles}>{color}</div>;
};
