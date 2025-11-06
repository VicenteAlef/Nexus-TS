import { useState } from "react";

export interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  label?: string;
  url?: string;
}

const AccordionItem = ({
  question,
  answer,
  label,
  url,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:cursor-pointer focus:outline-none"
      >
        <span>{question}</span>
        {/* Ícone de seta que gira com a transição */}
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Conteúdo da resposta com animação de altura */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <div className="text-gray-600 ml-2 mb-5">{answer}</div>
        {label && url && (
          <a
            className="text-sm text-blue-700 ml-2 underline"
            href={url}
            target="_blank"
            rel="noopener noreferrer" // Boa prática de segurança para target="_blank"
          >
            {label}
          </a>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
