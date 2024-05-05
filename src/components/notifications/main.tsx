import React from "react";
import Notification from "./Notification";
import { notificationType } from "./types";

interface NotificationProps {
    notifications: notificationType[]
}

const Notifications: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="flex flex-col gap-4 fixed left-50 top-1/2 -translate-y-1/2 max-w-[304px] max-h-[500px] overflow-y-auto hide-scrollbar">
      {
        notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))
      }
    </div>
  );
};

export default Notifications;
