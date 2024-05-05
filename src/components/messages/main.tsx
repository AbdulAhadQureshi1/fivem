import Card from "./Card";
import playerPfp from "../../assets/images/playerPfp.png";
import { useState } from "react";
import { messageType } from "./types";
import MessageInput from "./MessageInput";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      player: {
        id: "xx",
        image: playerPfp,
        name: "Criminal Azzict",
      },
      message: "i got hotdogs for sale by grove if anyone wanna pullup",
    }
  ]);

  const addMessage = (new_msg: messageType) => {
    setMessages([...messages, new_msg]);
  }

  return (
    <div className="space-y-2 w-[325px] 2xl:w-[400px] text-[10px] 2xl:text-[14px]">
      <div className="max-h-[278px] overflow-y-auto space-y-2 hide-scrollbar">
        {messages.map((message, index) => (
          <Card key={index} {...message} />
        ))}
      </div>
      <MessageInput addMessage={addMessage} />
    </div>
  );
};

export default Messages;
