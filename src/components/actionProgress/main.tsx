import React, { useState, useEffect } from "react";

interface ActionProgressProps {
  name: string;
  duration: number;
}

const ActionProgress: React.FC<ActionProgressProps> = ({
  name,
  duration,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime: number;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progressPercentage = (elapsedTime / (duration * 1000)) * 100;
      setProgress(Math.min(progressPercentage, 100));

      if (progressPercentage < 100) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);

    return () => {
      // Clean up animation if component unmounts
      setProgress(0);
    };
  }, [duration]);

  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 space-y-2">
      <div className="py-1 bg-black bg-opacity-40 backdrop-blur-lg w-[156px] mx-auto rounded-[4px]">
        <p className="text-white font-heading font-italic text-sm text-center">{name}</p>
      </div>
      <div className="h-3 rounded-full overflow-hidden bg-black bg-opacity-20 border border-black border-opacity-30 backdrop-blur-lg w-[400px]">
        <div
          className="h-full rounded-sm bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-[#D1D1D1] font-noto font-bold text-center !mt-1">
        {Math.round(progress)}%
      </p>
    </div>
  );
};

export default ActionProgress;
