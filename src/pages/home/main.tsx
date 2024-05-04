import Messages from "../../components/messages/main";

interface HomeProps {
  className?: string;
}
const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={className}>
      <Messages />
    </div>
  );
};

export default Home;
