export const Container = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section
      className="w-full py-8 md:py-15 px-5 md:px-[5%] lg:px-[8%] xl:px-[10%]"
      id={id}
    >
      {children}
    </section>
  );
};

export const ContainerFull = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section className="w-full py-8 md:py-15 px-5 md:px-[5%]" id={id}>
      {children}
    </section>
  );
};

export const Title = ({ children }: { children: string }) => {
  return (
    <h2 className="text-center uppercase text-3xl md:text-4xl font-bold text-[#0079bb] py-5">
      {children}
    </h2>
  );
};

export const GalleryGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col flex-wrap md:flex-row gap-5 my-5 md:my-10  items-center justify-center">
      {children}
    </div>
  );
};

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[280px] h-[420px] flex flex-col items-center justify-center bg-white border-4 border-[#0081cc] p-5 rounded-xl shadow-[0_15px_15px_#00000050] hover:scale-110 duration-500 ease-in-out hover:shadow-[0_20px_20px_#00000050] cursor-default">
      {children}
    </div>
  );
};
