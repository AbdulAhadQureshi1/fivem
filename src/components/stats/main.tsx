import { useState } from "react";
import Navigation from "./Navigation"
import Bar from "./Bar";


const Stats = () => {
  
  const [active, setActive] = useState(0);
  
  return (
    <div className="fixed bottom-5 left-5 space-y-2">
      <Bar progress={20} />
      <Navigation active={active} setActive={setActive} />
    </div>
  )
}

export default Stats
