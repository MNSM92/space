import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Moon from "./Moon";
import Crew from "./Crew";
import Vehicle from "./Vehicle";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moon" element={<Moon />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/Vehicle" element={<Vehicle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
