import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full  min-h-screen bg-gray-50 grid grid-col-1 grid-rows-[auto_1fr_auto]">
      <Header
        name="Nexus"
        logo="/logo.png"
        logoLink="#home"
        links={[
          { label: "Home", route: "#home" },
          { label: "Plans", route: "#plans" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
