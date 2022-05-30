import React from "react";
import corner from "./corner.png";

export const Corner = React.memo(() => {
  return (
    <img
      src={corner}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        height: "35vh",
        zIndex: 1,
      }}
      alt="corner"
    />
  );
});
