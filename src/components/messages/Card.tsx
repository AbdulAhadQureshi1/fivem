import React from "react";

interface CardProps {
  player: {
    id: string;
    image: string;
    name: string;
  };
  message: string;
}

const Card: React.FC<CardProps> = ({ player, message }) => {
  const msgTextColor = "text-[#D1D1D1]";
  return (
    <div className="border border-lightgreen border-opacity-45 rounded-lg py-2.5 px-3 font-noto font-bold space-y-0.5 bg-gradient-black">
      <div className="flex items-center gap-1.5">
        <img
          src={player.image}
          alt={player.name}
          className="w-4 h-4 rounded-full border border-lightgray"
        />
        <div className="border border-lightgray rounded-[4px] px-2">
          <p className="text-center text-lightergray -translate-y-[1px]">
            {player.id}
          </p>
        </div>
        <p className="font-heading font-italic">
          <span className="text-lightgreen">{player.name.split(" ")[0]}</span>{" "}
          <span className="text-white">{player.name.split(" ")[1]}</span>
        </p>
      </div>
      <p className={`${msgTextColor}`}>{message}</p>
    </div>
  );
};

export default Card;
