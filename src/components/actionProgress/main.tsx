import React from "react";

interface ActionProgressProps {
  name: string;
  progress: number;
}
const ActionProgress: React.FC<ActionProgressProps> = ({ name, progress }) => {
  const clampedProgress = Math.max(0, Math.min(progress, 100));

  const progressStyle = {
    width: `${clampedProgress}%`,
  };

  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 space-y-2">
      <div className="py-1 bg-black bg-opacity-40 backdrop-blur-lg w-[156px] mx-auto rounded-[4px]">
        <p className="text-white font-heading font-italic text-sm text-center">{name}</p>
      </div>
      <div className="h-3 rounded-full overflow-hidden bg-black bg-opacity-20 border border-black border-opacity-30 backdrop-blur-lg w-[400px]">
        <div
          className="h-full rounded-sm bg-white"
          style={progressStyle}
        />
      </div>
      <p className="text-[#D1D1D1] font-noto font-bold text-center !mt-1">
        {progress}%
      </p>
    </div>
  );
};

export default ActionProgress;
