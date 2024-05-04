import bgImg from "./assets/images/bg.png";
import Home from "./pages/home/main";

function App() {
  return (
    <>
      <img
        src={bgImg}
        alt="bg"
        className="absolute w-svw h-svh object-cover object-center -z-10"
      />
      <main className="px-6 py-7">
        <Home />
      </main>
    </>
  );
}

export default App;
