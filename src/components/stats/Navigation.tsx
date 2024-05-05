import healthIcon from "../../assets/icons/health.svg";
import shieldIcon from "../../assets/icons/shield.svg";
import foodIcon from "../../assets/icons/food.svg";
import waterIcon from "../../assets/icons/water.svg";
import energyIcon from "../../assets/icons/energy.svg";
import React from "react";

const icons = [
  { icon: healthIcon, text: "Health" },
  { icon: shieldIcon, text: "Shield" },
  { icon: energyIcon, text: "Energy" },
  { icon: foodIcon, text: "Food" },
  { icon: waterIcon, text: "Water" },
];

interface NavIconProps {
  index: number;
  active: number;
  setActive: (index: number) => void;
  icon: {
    icon: string;
    text: string;
  };
}
const NavIcon: React.FC<NavIconProps> = ({ index, active, setActive, icon }) => {
  const isActive = index === active;
  const activeOuterStyles = isActive ? "border-white":"border-[#CACACA]"
  const activeInnerStyles = isActive ? "bg-lightgreen":"custom-bg"
  const activeInner2Styles = isActive ? "custom-shadow-active":"custom-shadow"
  return (
    <button className={`w-10 h-10 2xl:w-14 2xl:h-14 border bg-white bg-opacity-15 backdrop-blur-xl rounded-xl p-1 ${activeOuterStyles}`} onClick={()=>setActive(index)}>
      <div className={`rounded-lg w-full h-full p-[3px] ${activeInnerStyles}`}>
          <div className={`w-full h-full bg-[#616161] flex justify-center items-center rounded-md ${activeInner2Styles}`}>
            <img key={index} src={icon.icon} alt="icon" className="w-4 h-4 2xl:w-6 2xl:h-6" />
          </div>
      </div>
    </button>
  );
}

interface NavigationProps {
  active: number;
  setActive: (index: number) => void;
}
const Navigation: React.FC<NavigationProps> = ({ active, setActive }) => {
  return (
    <div className="flex gap-1 2xl:gap-2">
      {icons.map((icon, index) => (
        <NavIcon index={index} icon={icon} active={active} setActive={setActive} />
      ))}
    </div>
  );
};

export default Navigation;
