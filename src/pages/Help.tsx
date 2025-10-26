import { useState } from "react";
import Accordion from "../components/Accordion";
import { type AccordionItemProps } from "../components/AccordionItem";

import {
  faqsItemsSuporte,
  faqsItemsFinanceiro,
  faqsItemsJuridico,
} from "../utils/faqs";
import FadeIn from "../components/FadeIn";

type TabKey = "suporte" | "financeiro" | "juridico";

const faqData: Record<TabKey, AccordionItemProps[]> = {
  suporte: faqsItemsSuporte,
  financeiro: faqsItemsFinanceiro,
  juridico: faqsItemsJuridico,
};

const Help = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("suporte");

  const getTabClass = (tabName: TabKey) => {
    const baseClass =
      "py-2 px-6 font-medium rounded-t-lg focus:outline-none cursor-pointer";
    if (activeTab === tabName) {
      return `${baseClass} text-blue-600 border-b-2 border-blue-600`;
    }
    return `${baseClass} text-gray-500 hover:text-gray-700 hover:border-gray-300`;
  };

  const currentItems = faqData[activeTab];

  return (
    <>
      <FadeIn>
        <div
          className="flex flex-col items-center py-10 px-3 min-h-[80vh]"
          id="help"
        >
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Perguntas Frequentes
          </h1>

          {/* Abas */}
          <div className="flex justify-center w-full max-w-2xl mb-6 border-b border-gray-200">
            <button
              className={getTabClass("suporte")}
              onClick={() => setActiveTab("suporte")}
            >
              Suporte
            </button>
            <button
              className={getTabClass("financeiro")}
              onClick={() => setActiveTab("financeiro")}
            >
              Financeiro
            </button>
            <button
              className={getTabClass("juridico")}
              onClick={() => setActiveTab("juridico")}
            >
              Contrato
            </button>
          </div>

          {/* Conteúdo */}
          <div className="w-full max-w-2xl">
            {currentItems.length > 0 ? (
              <Accordion items={currentItems} />
            ) : (
              <p className="text-center text-gray-500">
                Nenhuma pergunta frequente nesta categoria no momento.
              </p>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Help;
