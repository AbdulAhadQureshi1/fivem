import React from "react";
import speedometerImg from "../../assets/images/speedometer.svg";

interface SpeedometerProps {
  speed: number;
  unit?: "MPH" | "KPH";
}
const Speedometer: React.FC<SpeedometerProps> = ({ speed, unit = "MPH" }) => {
  return (
    <div className="fixed -bottom-10 right-5 w-96 h-96 flex items-center justify-center flex-col">
      <img src={speedometerImg} alt="speedometer" className="absolute inset-0 w-full h-full" />
      <p className="font-kanit text-6xl font-semibold text-white">{speed}</p>
      <p className="text-[#DADADA] font-noto font-semibold">{unit}</p>
    </div>
  );
};

export default Speedometer;
