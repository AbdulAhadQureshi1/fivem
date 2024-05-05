import React from "react";

interface ProgressBarProps {
  progress: number;
}
const Bar: React.FC<ProgressBarProps> = ({ progress = 0 }) => {
  // Handle invalid progress values
  const clampedProgress = Math.max(0, Math.min(progress, 100));

  const progressStyle = {
    width: `${clampedProgress}%`,
  };

  return (
    <div className="h-2 overflow-hidden rounded-sm bg-lightgreen bg-opacity-20 border border-lightgreen">
      <div
        className="h-full rounded-sm bg-lightgreen"
        style={progressStyle}
      />
    </div>
  );
};

export default Bar;
