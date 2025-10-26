import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsApp";

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
      <Footer
        logo="/logo.png"
        nameCorp="Nexus"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        youtube="https://www.youtube.com"
      />
      <WhatsAppBtn
        image="/logo.png"
        name="Nexus"
        message="Olá! Seja bem vindo a Nexus! Como podemos ajudar você hoje?"
        href={[
          {
            url: "https://wa.me/+5561000000000?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+planos+de+internet+da+Nexus+por+favor.",
            label: "Contratar Agora",
          },
          {
            url: "https://wa.me/+5561000000000?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+suporte+técnico,+por+favor.",
            label: "Suporte Técnico",
          },
          {
            url: "https:www.instagram.com",
            label: "Ir para o Instagram",
          },
        ]}
      />
    </div>
  );
}

export default App;
