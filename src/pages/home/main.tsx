import ActionProgress from "../../components/actionProgress/main";
import Messages from "../../components/messages/main";
import Notifications from "../../components/notifications/main";
import { notificationType } from "../../components/notifications/types";
import Speedometer from "../../components/speedometer/main";
import Stats from "../../components/stats/main";

interface HomeProps {
  className?: string;
}

const notifications: notificationType[] = [
  {
    variant: "success",
    message: "You've withdrawn all the money from your account",
  },
  {
    variant: "failure",
    message: "You've withdrawn all the money from your account",
  },
];

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={className}>
      <Messages />
      <Notifications notifications={notifications} />
      <Stats />
      <ActionProgress name="Opening Crate" progress={32} />
      <Speedometer speed={48} />
    </div>
  );
};

export default Home;
