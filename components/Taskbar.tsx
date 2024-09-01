"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

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
      <button
        style={{
          backgroundColor: "#c3c3c3",
          border: "1px solid #fff",
          boxShadow: "1px 1px 0 #000 inset",
          fontSize: "14px",
          padding: "4px 8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: "#000",
        }}
      >
        <Image
          src="/images/windows98-start.png"
          alt="Start"
          width={16}
          height={16}
          style={{
            marginRight: "5px",
          }}
        />
        Start
      </button>
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
