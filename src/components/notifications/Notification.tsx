import React from "react";
import { notificationType } from "./types";

const Notification: React.FC<notificationType> = ({ message, variant }) => {
  const noticolor =
    variant === "success"
      ? "text-lightgreen bg-[#00821D66] bg-opacity-40"
      : "text-lightred bg-[#82000066] bg-opacity-40";

  return (
    <div className="space-y-2">
      <div
        className={`${noticolor} font-heading font-italic text-sm py-1 text-center capitalize rounded-md max-w-28`}
      >
        {variant}
      </div>
      <p className="font-kanit text-white leading-[17px] tracking-wider">
        {message}
      </p>
    </div>
  );
};

export default Notification;
