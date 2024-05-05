import { FormEvent, useRef } from "react";
import sendIcon from "../../assets/icons/sendIcon.svg";
import playerPfp from "../../assets/images/playerPfp.png";
import { messageType } from "./types";

interface MsgInputProps {
  addMessage: (msg: messageType) => void;
}
const MessageInput: React.FC<MsgInputProps> = ({ addMessage }) => {
  const msgRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msgValue = msgRef.current?.value;
    if(msgValue === "") return;
    const new_msg = {
      player: {
        id: "xx",
        image: playerPfp,
        name: "Criminal Azzict",
      },
      message: msgValue || "",
    };
    addMessage(new_msg);
    msgRef.current!.value = "";
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <img
        src={sendIcon}
        alt="send"
        className="absolute top-1/2 -translate-y-1/2 left-2"
      />
      <input
        title="input"
        aria-label="input message"
        placeholder="Type here..."
        className="bg-gradient-black border border-black border-opacity-40 font-noto font-bold text-lightergray rounded-lg py-2.5 px-3 pl-8 w-full focus:outline-none focus:border-lightgreen focus:border-opacity-40"
        ref={msgRef}
      />
    </form>
  );
};

export default MessageInput;
