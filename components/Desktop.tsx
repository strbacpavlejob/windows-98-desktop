import React from "react";
import Taskbar from "./Taskbar";

export default function Desktop() {
  return (
    <div
      style={{
        backgroundColor: "#008080",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "24px",
        fontFamily: "Tahoma, Arial, sans-serif",
      }}
    >
      <Taskbar />
    </div>
  );
}
