import NavBar from "./components/NavBarComponent";
import "./App.css";
import Hero from "./components/HeroComponent";
import PickYourPlan from "./components/PickYourPlanComponent";
import HowItWorks from "./components/HowItWorksComponent";
import SocialPost from "./components/SocialComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <PickYourPlan />
      <HowItWorks />
      <SocialPost />
      <Footer />
    </div>
  );
}

export default App;
