import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface SpeedometerProps {
  speed: number;
  maxSpeed: number;
  unit?: "MPH" | "KPH";
}
const Speedometer: React.FC<SpeedometerProps> = ({
  speed,
  maxSpeed = 100,
  unit = "MPH",
}) => {
  const getSpeed = (speed: number) => {
    if (speed > maxSpeed) {
      return maxSpeed;
    } else {
      speed = (speed / maxSpeed) * 100;
      return speed;
    }
  };

  return (
    <div className="fixed -bottom-10 right-5 w-96 h-96 flex items-center justify-center flex-col">
      <CircularProgressbar
        value={100}
        strokeWidth={2}
        circleRatio={0.75}
        className="w-[410px] h-[410px] absolute"
        styles={{
          root: {
            overflow: "visible",
          },
          path: {
            strokeWidth: 3,
            strokeLinecap: "square",
            stroke: "transparent",
            transform: "rotate(-135deg)",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "#000000",
            strokeOpacity: 0.5,
            strokeWidth: 3,
            strokeLinecap: "square",
            transform: "rotate(-135deg)",
            transformOrigin: "center center",
          },
        }}
      />
      <CircularProgressbarWithChildren
        value={getSpeed(speed)}
        strokeWidth={2}
        className={"w-96 h-96 custom"}
        circleRatio={0.75}
        styles={{
          root: {
            overflow: "visible",
          },
          path: {
            strokeWidth: 3,
            strokeLinecap: "square",
            stroke: "#FFFFFF",
            transform: "rotate(-135deg)",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "transparent",
            strokeWidth: 1,
            strokeLinecap: "square",
            transform: "rotate(-135deg)",
            transformOrigin: "center center",
          },
        }}
      />
      <div className="absolute">
        <CircularProgressbarWithChildren
          value={getSpeed(speed)}
          strokeWidth={2}
          className={""}
          circleRatio={0.6}
          styles={{
            path: {
              strokeWidth: 2,
              strokeLinecap: "square",
              stroke: "#D4D4D4",
              transform: "rotate(-135deg)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "#00000033",
              strokeWidth: 1,
              strokeLinecap: "square",
              transform: "rotate(-135deg)",
              transformOrigin: "center center",
            },
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="font-kanit text-7xl font-semibold text-white">
              {speed<maxSpeed?speed:maxSpeed}
            </p>
            <p className="text-[#DADADA] text-2xl font-noto font-semibold">
              {unit}
            </p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Speedometer;
