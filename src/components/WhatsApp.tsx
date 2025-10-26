import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppBtnProps {
  image?: string;
  name?: string;
  href?: { url: string; label: string }[];
  message?: string;
}

const WhatsAppBtn = ({ image, name, href = [], message }: WhatsAppBtnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed flex items-center justify-center p-3 rounded-full bg-green-500 text-white right-5 bottom-5 hover:scale-110 transition-transform cursor-pointer"
        title="Entre em contato pelo WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </button>

      {/* Container do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-5 w-[300px] min-h-[320] max-h-[400px] h-auto bg-white rounded-xl shadow-lg flex flex-col overflow-hidden"
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between bg-green-600 text-white px-3 py-2">
              <div className="flex items-center gap-2">
                <div className=" flex items-center justify-center rounded-full bg-white text-white ">
                  <img src={image} alt="Logo" className="h-10 w-auto" />
                </div>
                <span className="font-semibold">{name}</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            </div>

            {/* Corpo do chat */}
            <div className="flex-1 bg-gray-100 p-3 text-sm space-y-3 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow px-3 py-2 max-w-[80%]"
              >
                {message}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-2"
              >
                {href.map((url, index) => (
                  <li key={index}>
                    <a
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-500 text-white px-3 py-2 rounded-lg text-center hover:bg-green-600 transition cursor-pointer"
                    >
                      {url.label}
                    </a>
                  </li>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppBtn;
