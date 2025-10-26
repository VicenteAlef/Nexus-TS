import { useState } from "react";

interface FlipCardProps {
  title: string;
  face: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard = ({ title, face, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-w-[200px] max-w-[600px] h-[600px] perspective m-4">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Frente */}
        <div className="absolute w-full h-full backface-hidden  bg-[#0081cc] shadow-lg rounded-2xl p-4 flex flex-col justify-center items-center">
          <h2 className="text-center uppercase text-2xl md:text-3xl font-bold text-white mt-5">
            {title}
          </h2>
          <div className="flex-1 flex items-center justify-center">{face}</div>
          <button
            onClick={() => setFlipped(true)}
            className="w-30 mt-4 px-4 py-2 bg-blue-400 text-white font-bold rounded-xl hover:bg-blue-300 transition mb-10 cursor-pointer"
          >
            Saiba mais
          </button>
        </div>

        {/* Verso */}
        <div
          className="absolute w-full h-full backface-hidden bg-[#0081cc] shadow-lg rounded-2xl p-2 transform rotate-y-180 flex items-center justify-center cursor-pointer"
          onClick={() => setFlipped(false)}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
