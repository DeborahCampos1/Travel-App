import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAllPlaces from "./Components/DisplayAllPlaces";
import Home from "./Components/Home"
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<DisplayAllPlaces />} />
      </Routes>
    </Router>
  );
}

export default App;
