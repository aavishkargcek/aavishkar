import "./App.css";

import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./pages";
import Events from "./pages/Events";
import About from "./pages/About";
import Dhishan from "./pages/Dhishan";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />}></Route>
        <Route path="/dhishan" element={<Dhishan/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
