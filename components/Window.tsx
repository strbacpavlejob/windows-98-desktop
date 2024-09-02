"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "98.css";

export default function Window({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <Draggable handle=".title-bar">
      <div
        className="window"
        style={{
          margin: "32px",
          zIndex: 10,
        }}
      >
        <ResizableBox
          width={300}
          height={200}
          minConstraints={[200, 100]}
          maxConstraints={[600, 400]}
          // resizeHandles={["s", "e"]}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" onClick={handleClose} />
            </div>
          </div>
          <div className="window-body">{children}</div>
        </ResizableBox>
      </div>
    </Draggable>
  );
}
