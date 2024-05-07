import Messages from "../../components/messages/main";
import Stats from "../../components/stats/main";
// import ActionProgress from "../../components/actionProgress/main";
// import Speedometer from "../../components/speedometer/main";

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={className}>
      <Messages />
      <Stats />
      {/* <Speedometer speed={200} maxSpeed={200} />
      <ActionProgress name="Opening Crate" duration={60} /> */}
    </div>
  );
};

export default Home;


// HOW TO CALL CALL NOTIFICATIONS:

// import Notifications from "../../components/notifications/main";
// import { notificationType } from "../../components/notifications/types";

// const notifications: notificationType[] = [
//   {
//     variant: "success",
//     message: "You've withdrawn all the money from your account",
//   },
//   {
//     variant: "failure",
//     message: "You've withdrawn all the money from your account",
//   },
// ];

/* <Notifications notifications={notifications} /> */