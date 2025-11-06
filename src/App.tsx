import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsApp";
import Help from "./pages/Help";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  return (
    <div className="w-full  min-h-screen bg-gray-50 grid grid-col-1 grid-rows-[auto_1fr_auto]">
      <Header
        name="Nexus"
        logo="/logo.png"
        logoLink="#home"
        links={[
          { label: "Home", route: "#home" },
          { label: "Planos", route: "#plans" },
          { label: "Turbine sua conexão", route: "#turbo" },
          { label: "Suporte", route: "help#help" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
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
      <Modal title="Aviso!" labelButton={"Condordo"}>
        {/* O conteúdo dentro do Modal é passado como 'children'. */}
        <p className="text-base leading-relaxed text-gray-600">
          <strong>Atenção:</strong> Este é um site de demonstração desenvolvido
          exclusivamente para fins de portfólio.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          Todas as informações, produtos e dados são puramente demonstativos
          e/ou fictícios. Nenhuma compra, cadastro ou interação realizada aqui
          terá efeito no mundo real.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          OBS: Ainda em desenvolvimento.
        </p>
      </Modal>
    </div>
  );
}

export default App;
