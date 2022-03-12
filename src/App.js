import NavBar from "./components/NavBarComponent";
import "./App.css";
import Hero from "./components/HeroComponent";
import PickYourPlan from "./components/PickYourPlanComponent";
import HowItWorks from "./components/HowItWorksComponent";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <PickYourPlan />
      <HowItWorks />
    </div>
  );
}

export default App;
