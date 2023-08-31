import React, { ReactNode, useState } from "react";
import "./tooltip.css";

type Props = {
  children: ReactNode;
  content?: string;
  direction: "top" | "left" | "right" | "bottom";
  shift?: string; // in px
};
const Tooltip: React.FC<Props> = ({ children, content, direction, shift }) => {
  return (
    <span className="Tooltip-Wrapper">
      {/* Wrapping */}
      {children}
      {content && (
        <span
          className={`Tooltip-Tip ${direction || "top"}`}
          style={{ left: shift }}
        >
          {/* Content */}
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
