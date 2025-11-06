import AccordionItem from "./AccordionItem";

interface AccordionProps {
  items: {
    question: string;
    answer: string | React.ReactNode;
    label?: string;
    url?: string;
  }[];
}

const Accordion = ({ items }: AccordionProps) => {
  if (!items || items.length === 0) {
    return <p>Nenhum item para exibir.</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          label={item.label}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Accordion;
