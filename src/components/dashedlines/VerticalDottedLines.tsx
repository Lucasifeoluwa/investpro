import React from "react";

interface VerticalDottedLinesProps {
  lineCount: number;
  lineSpacing: number;
  lineColor: string;
  strokeLength: number;
  strokeWidth: number;
}

const VerticalDottedLines: React.FC<VerticalDottedLinesProps> = ({
  lineCount,
  lineSpacing,
  lineColor,
  strokeLength,
  strokeWidth,
}) => {
  const lines = [];

  for (let i = 0; i < lineCount; i++) {
    const x = 0;
    const y1 = i * lineSpacing;
    const y2 = y1 + strokeLength;

    lines.push(
      <line
        key={i}
        x1={x}
        y1={y1}
        x2={x}
        y2={y2}
        stroke={lineColor}
        strokeDasharray={`${strokeLength}, ${lineSpacing - strokeLength}`}
        strokeWidth={strokeWidth}
      />
    );
  }

  return (
    <svg
      width="2.5"
      height={220}
      style={{ display: "flex", alignSelf: "center" }}
    >
      {lines}
    </svg>
  );
};

export default VerticalDottedLines;
