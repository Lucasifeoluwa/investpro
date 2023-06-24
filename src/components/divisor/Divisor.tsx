import React from "react";
import VerticalDottedLines from "../dashedlines/VerticalDottedLines";
import "./divisor.scss";

interface DivisorProps {
  lineCount: number;
  lineSpacing: number;
  lineColor: string;
  strokeLength: number;
  value: string;
}

const Divisor: React.FC<DivisorProps> = ({
  lineColor,
  lineCount,
  lineSpacing,
  strokeLength,
  value,
}) => {
  return (
    <div className="divisor">
      {/* Example usage with longer strokes */}
      <VerticalDottedLines
        lineCount={lineCount}
        lineSpacing={lineSpacing}
        lineColor={lineColor}
        strokeLength={strokeLength} // Adjust the stroke length as desired
        strokeWidth={10}
      />
      <div className="number">
        <div className="value">{value}</div>
      </div>

      <VerticalDottedLines
        lineCount={lineCount}
        lineSpacing={lineSpacing}
        lineColor={lineColor}
        strokeLength={strokeLength} // Adjust the stroke length as desired
        strokeWidth={10}
      />
    </div>
  );
};
export default Divisor;
