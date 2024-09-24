import "./App.css";
import Home from "./pages/Home";
import bgImage from "@/assets/background.jpg";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;
