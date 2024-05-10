import Navigation from "./Navigation"
import healthIcon from "../../assets/icons/health.svg";
import shieldIcon from "../../assets/icons/shield.svg";
import energyIcon from "../../assets/icons/energy.svg";
// import Bar from "./Bar";


const icons = [
  { icon: healthIcon, text: "Health", progress: 100 },
  { icon: shieldIcon, text: "Shield", progress: 75 },
  { icon: energyIcon, text: "Energy", progress: 25 },
];

const Stats = () => {
  
  return (
    <div className="fixed bottom-5 left-5 space-y-2">
      {/* <Bar progress={10*active+(Math.random()*50)} /> */}
      <Navigation icons={icons} />
    </div>
  )
}

export default Stats
