"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import StartButton from "./StartButton";

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function Taskbar() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "40px",
        backgroundColor: "#c3c3c3",
        borderTop: "2px solid #fff",
        borderBottom: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      {/* Start Button */}
      <StartButton />
      {/* System Clock */}
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          backgroundColor: "#C0C0C0",
          padding: "0 10px",
        }}
      >
        {time}
      </div>
    </div>
  );
}
