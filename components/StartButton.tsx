import Image from "next/image";
import React from "react";

export default function StartButton() {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        width: "45px",
        height: "14px",
      }}
    >
      <img
        src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
        alt="Start"
        width={16}
        height={16}
        style={{
          marginRight: "5px",
        }}
      />
      Start
    </button>
  );
}
