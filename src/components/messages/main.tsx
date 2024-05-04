import Card from "./Card";
import playerPfp from "../../assets/images/playerPfp.png";
import sendIcon from "../../assets/icons/sendIcon.svg";
import { FormEvent, useRef, useState } from "react";


const Messages = () => {

  const [messages, setMessages] = useState([
    {
      player: {
        id: "xx",
        image: playerPfp,
        name: "Criminal Azzict",
      },
      message: "i got hotdogs for sale by grove if anyone wanna pullup",
    },
    {
      player: {
        id: "xx",
        image: playerPfp,
        name: "Criminal Azzict",
      },
      message: "i got hotdogs for sale by grove if anyone wanna pullup",
    },
    {
      player: {
        id: "xx",
        image: playerPfp,
        name: "Criminal Azzict",
      },
      message: "i got hotdogs for sale by grove if anyone wanna pullup",
    },
  ]);
  
  const msgRef = useRef<HTMLInputElement>(null);
  
  const addMessage = (e: FormEvent) => {
    e.preventDefault();
    const new_msg = {
      player: {
        id: "xx",
        image: playerPfp,
        name: "Criminal Azzict",
      },
      message: msgRef.current?.value || "",
    };
    setMessages([...messages, new_msg]);
    msgRef.current!.value = "";
  }

  const displayedMessages = messages.slice(-5);

  return (
    <div className="space-y-2 w-[325px]">
      {displayedMessages.map((message, index) => (
        <Card key={index} {...message} />
      ))}
      <form className="relative" onSubmit={addMessage}>
        <img src={sendIcon} alt="send" className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          title="input"
          aria-label="input message"
          placeholder="Type here..."
          className="bg-gradient-black border border-black border-opacity-40 font-noto font-bold text-[10px] text-lightergray rounded-lg py-2.5 px-3 pl-8 w-full focus:outline-none focus:border-lightgreen"
          ref={msgRef}
        />
      </form>
    </div>
  );
};

export default Messages;
