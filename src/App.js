import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="bg-pink-100 h-100vh">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
