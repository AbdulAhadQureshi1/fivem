import React from "react";

interface NavIconProps {
  isActive: boolean;
  icon: {
    icon: string;
    text: string;
    progress: number;
  };
}
const NavIcon: React.FC<NavIconProps> = ({ isActive, icon }) => {
  const activeOuterStyles = isActive ? "border-white" : "border-[#CACACA]";
  const activeInner2Styles = isActive
    ? "custom-shadow-active"
    : "custom-shadow";

  const customStyle = {
    background: `linear-gradient(45deg, ${isActive ? "#4DFF74" : "#ffffff"} ${icon.progress}%, rgba(0,0,0,0.7) 0%)`,
  };

  return (
    <button
      className={`w-10 h-10 2xl:w-14 2xl:h-14 border bg-white bg-opacity-15 backdrop-blur-xl rounded-xl p-1 ${activeOuterStyles}`}
    >
      <div className={`rounded-lg w-full h-full p-[3px]`} style={customStyle}>
        <div
          className={`w-full h-full bg-[#616161] flex justify-center items-center rounded-md ${activeInner2Styles}`}
        >
          <img src={icon.icon} alt="icon" className="w-4 h-4 2xl:w-6 2xl:h-6" />
        </div>
      </div>
    </button>
  );
};

interface NavigationInterface {
  icons: {
    icon: string;
    text: string;
    progress: number;
  }[];
}

const Navigation: React.FC<NavigationInterface> = ({ icons }) => {
  return (
    <div className="flex gap-1 2xl:gap-2">
      {icons.map((icon, index) => (
        <NavIcon key={index} icon={icon} isActive={index === 0} />
      ))}
    </div>
  );
};

export default Navigation;

// REMOVED CODE: (KEEPING IT IN CASE WE NEED IT LATER)
// import foodIcon from "../../assets/icons/food.svg";
// import waterIcon from "../../assets/icons/water.svg";
// { icon: foodIcon, text: "Food" },
// { icon: waterIcon, text: "Water" },
