import { HashLink } from "react-router-hash-link";
import Carousel from "../components/Carousel";
import { Card, Container, GalleryGrid, Title } from "../components/Commons";

const Home = () => {
  return (
    <>
      <Carousel>
        <div
          id="home"
          className="flex items-center justify-center w-full h-[680px] bg-[url('/assets/image1alt.png')] sm:bg-[url('/assets/image1.png')] bg-cover bg-center sm:bg-right  text-white font-bold"
        >
          <div className="flex items-center justify-start sm:justify-center relative sm:right-30 w-[90%] lg:w-full h-full font-bold flex flex-col text-shadow-lg gap-2 uppercase mt-40 sm:mt-0">
            <div className="text-center text-5xl lg:text-8xl">
              Planos a partir de
            </div>
            <HashLink
              smooth
              to="/#plans"
              className="text-4xl lg:text-8xl py-2 px-5 border-5 border-blue-700 rounded-full text-blue-700 bg-white shadow-xl sm:mt-10 hover:scale-110 duration-500 ease-in-out cursor-pointer"
            >
              R$89,90
            </HashLink>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-[680px] bg-[url('/assets/image2alt.png')] sm:bg-[url('/assets/image2.png')] bg-cover bg-center sm:bg-[position:34%] lg:bg-center h-[680px]  text-white text-6xl font-bold relative">
          <div className="flex flex-col items-center sm:justify-center w-[200px] lg:w-full h-full font-bold lg:m-auto gap-2 mt-50 sm:mt-0">
            <div className="text-6xl lg:text-[90px] uppercase text-shadow-lg absolute sm:right-1 lg:right-[25%] flex flex-col items-center">
              Baixe o App
              <HashLink
                smooth
                to="/#app"
                className="text-blue-600/80 border-4 border-blue-600/10 py-2 px-8 bg-white rounded-full  mt-5 sm:mt-10 shadow-xl hover:scale-110 duration-500 ease-in-out text-2xl flex gap-5 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
                Baixar
              </HashLink>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-[680px] bg-[url('/assets/image3alt.png')] sm:bg-[url('/assets/image3.png')] bg-cover bg-center  text-white text-6xl font-bold">
          <div className="w-full h-[100%] flex justify-around items-start pt-20 sm:pt-5">
            <img
              src="/assets/hbo.png"
              alt=""
              className="w-[150px] lg:w-[15%] xl:w-[20%] hover:scale-110 duration-500 ease-in-out"
            />
            <img
              src="/assets/watch.png"
              alt=""
              className="w-[150px] lg:w-[15%] xl:w-[20%] hover:scale-110 duration-500 ease-in-out"
            />
          </div>
        </div>
      </Carousel>
      <Container id="plans">
        <Title>Conheça nossos Planos</Title>
        <GalleryGrid>
          <Card>
            <div className="text-6xl text-center uppercase font-bold text-blue-700 mb-10">
              400 Mega
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              R$ 109,90
            </div>
            <div className="text-center text-5xl font-bold text-blue-700">
              R$ 89,90*
            </div>
            <div className="text-[11px] mt-5 text-blue-950">
              *Desconto de pontualidade
            </div>
          </Card>
          <Card>
            <div className="text-6xl text-center uppercase font-bold text-blue-700 mb-5">
              600 Mega
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              R$ 129,90
            </div>
            <div className="text-center text-4xl font-bold text-blue-700">
              R$ 109,90*
            </div>
            <div className="text-[11px] mt-5 text-blue-950">
              *Desconto de pontualidade
            </div>
            <div className="w-[150px] h-[3px] bg-blue-100 my-5"></div>
            <div className="text-2xl text-blue-950">Benefícios:</div>
            <ul className="text-sm list-disc">
              <li>Watch TV</li>
            </ul>
          </Card>
          <Card>
            <div className="text-6xl text-center uppercase font-bold text-blue-700 mb-5">
              1 Giga
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              R$ 179,90
            </div>
            <div className="text-center text-4xl font-bold text-blue-700">
              R$ 159,90*
            </div>
            <div className="text-[11px] mt-5 text-blue-950">
              *Desconto de pontualidade
            </div>
            <div className="w-[150px] h-[3px] bg-blue-100 my-5"></div>
            <div className="text-3xl text-blue-950">Benefícios:</div>
            <ul className="text-sm list-disc">
              <li>Roteador Mesh</li>
              <li>Watch TV</li>
              <li>HBO MAX</li>
              <li>Wifi 6</li>
            </ul>
          </Card>
          <Card>
            <div className="text-4xl text-center uppercase font-bold text-blue-700 mb-2">
              1 Giga Premium
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              R$ 249,90
            </div>
            <div className="text-center text-4xl font-bold text-blue-700">
              R$ 229,90*
            </div>
            <div className="text-[11px] mt-1 text-blue-950">
              *Desconto de pontualidade
            </div>
            <div className="w-[150px] h-[3px] bg-blue-100 my-2"></div>
            <div className="text-3xl text-blue-950">Benefícios:</div>
            <ul className="text-sm list-disc">
              <li>Roteador Mesh</li>
              <li>Fonte Nobreak</li>
              <li>HBO MAX</li>
              <li>Watch TV</li>
              <li>Wifi 6</li>
            </ul>
          </Card>
        </GalleryGrid>
      </Container>
    </>
  );
};

export default Home;
