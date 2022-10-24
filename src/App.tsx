import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/Landing/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <LandingPage />
      <Home />
    </BrowserRouter>
  );
};

export default App;
