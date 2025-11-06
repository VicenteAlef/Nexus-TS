import { HashLink } from "react-router-hash-link";
import Carousel from "../components/Carousel";
import {
  Card,
  Container,
  ContainerFull,
  GalleryGrid,
  Title,
} from "../components/Commons";
import FlipCard from "../components/FlipCard";

const Home = () => {
  return (
    <>
      <Carousel>
        <div
          id="home"
          className="flex items-center justify-center w-full h-[580px] lg:h-[500px] 2xl:h-[700px] bg-[url('/assets/image1alt.png')] sm:bg-[url('/assets/image1.png')] bg-cover bg-center sm:bg-right  text-white font-bold"
        >
          <div className="flex items-center justify-start sm:justify-center relative sm:right-30 w-[90%] lg:w-full h-full font-bold flex flex-col text-shadow-lg gap-2 uppercase mt-40 mt-0">
            <div className="text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl">
              Planos a partir de
            </div>
            <HashLink
              smooth
              to="/#plans"
              className="text-4xl lg:text-6xl 2xl:text-8xl py-2 px-5 border-5 border-[#0079bb] rounded-full text-[#0079bb] bg-white shadow-xl sm:mt-10 hover:scale-110 duration-500 ease-in-out cursor-pointer"
            >
              R$79,90
            </HashLink>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-[580px] lg:h-[500px] 2xl:h-[700px] bg-[url('/assets/image2alt.png')] sm:bg-[url('/assets/image2.png')] bg-cover bg-center sm:bg-[position:34%] lg:bg-center text-white text-6xl font-bold relative">
          <div className="flex flex-col items-center sm:justify-center w-[200px] lg:w-full h-full font-bold lg:m-auto gap-2 mt-50 sm:mt-0">
            <div className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl uppercase text-shadow-lg absolute sm:right-1 lg:right-[25%] flex flex-col items-center">
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

        <div className="flex items-center justify-center w-full h-[580px] lg:h-[500px] 2xl:h-[700px] bg-[url('/assets/image3alt.png')] sm:bg-[url('/assets/image3.png')] bg-cover bg-center  text-white text-6xl font-bold">
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
      <ContainerFull id="plans">
        <Title>Conheça nossos Planos</Title>
        <GalleryGrid>
          <Card>
            <div className="text-6xl text-center uppercase font-bold text-[#0081cc] mb-10">
              500 Mega
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              De R$ 99,90 por:
            </div>
            <div className="text-center text-5xl font-bold text-[#0079bb]">
              R$ 79,90*
            </div>
            <div className="text-[11px] mt-5 text-blue-950">
              *Desconto de pontualidade
            </div>
          </Card>
          <Card>
            <div className="text-6xl text-center uppercase font-bold text-[#0081cc] mb-5">
              700 Mega
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              De R$ 129,90 por:
            </div>
            <div className="text-center text-4xl font-bold text-[#0079bb]">
              R$ 109,90*
            </div>
            <div className="text-[11px] mt-5 text-blue-950">
              *Desconto de pontualidade
            </div>
            <div className="w-[150px] h-[3px] bg-blue-100 my-3"></div>
            <div className="text-2xl text-blue-950">Beneficios:</div>
            <ul className="text-sm list-disc">
              <li>Watch TV</li>
              <li>HBO Max</li>
              <li>Wifi 6</li>
            </ul>
          </Card>
          <Card>
            <div className="text-6xl text-center uppercase font-bold text-[#0081cc] mb-5">
              1 Giga
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              De R$ 179,90 por:
            </div>
            <div className="text-center text-4xl font-bold text-[#0079bb]">
              R$ 159,90*
            </div>
            <div className="text-[11px] mt-5 text-blue-950">
              *Desconto de pontualidade
            </div>
            <div className="w-[150px] h-[3px] bg-blue-100 my-5"></div>
            <div className="text-3xl text-blue-950">Beneficios:</div>
            <ul className="text-sm list-disc">
              <li>Roteador Mesh</li>
              <li>Watch TV</li>
              <li>HBO MAX</li>
              <li>Wifi 6</li>
            </ul>
          </Card>
          <Card>
            <div className="text-4xl text-center uppercase font-bold text-[#0081cc] mb-2">
              1 Giga Premium
            </div>
            <div className="text-center text-2xl text-gray-600 font-bold">
              De R$ 249,90 por:
            </div>
            <div className="text-center text-4xl font-bold text-[#0079bb]">
              R$ 229,90*
            </div>
            <div className="text-[11px] mt-1 text-blue-950">
              *Desconto de pontualidade
            </div>
            <div className="w-[150px] h-[3px] bg-blue-100 my-2"></div>
            <div className="text-3xl text-blue-950">Beneficios:</div>
            <ul className="text-sm list-disc">
              <li>Roteador Mesh</li>
              <li>Font Nobreak</li>
              <li>Ping Optimizer</li>
              <li>YouTube Premium</li>
              <li>HBO MAX</li>
              <li>Watch TV</li>
              <li>Wifi 6</li>
            </ul>
          </Card>
        </GalleryGrid>
      </ContainerFull>
      <Container id="turbo">
        <Title>Turbine sua conexão!</Title>
        <div className="w-full grid lg:grid-cols-2 md:px-[15%] pt-10 pb-20">
          <FlipCard
            title={"Amplie sua rede com Wifi Mesh"}
            face={
              <div className="flex flex-col items-center justify-center gap-10">
                <img src="./assets/F6600P-1.png" alt="" />
              </div>
            }
            back={
              <div className="flex flex-col text-white sm:px-20 gap-2">
                <h3 className=" text-2xl md:text-3xl font-bold mb-2">
                  Descubra os Benefícios da Rede Wi-Fi Mesh
                </h3>
                <p>
                  Você já se frustrou com o sinal fraco de internet em certos
                  cômodos da sua casa? Com a tecnologia{" "}
                  <strong>Wi-Fi Mesh</strong>, esse problema fica no passado!
                </p>
                <p>
                  Diferente dos roteadores tradicionais, que distribuem o sinal
                  a partir de um único ponto, o sistema Mesh utiliza vários
                  dispositivos interligados que trabalham juntos para espalhar o
                  sinal por todos os ambientes. Isso garante cobertura completa,
                  conexão estável e velocidade consistente em todos os cantos da
                  sua casa ou empresa.
                </p>
                <div className="w-full flex justify-center">
                  <a
                    href="https://wa.me/5561000000000?text=Ol%C3%A1%2C+gostaria+de+contratar+o+roteador+Mesh."
                    target="_blank"
                    className="mt-5 px-4 py-2 bg-blue-400 text-white font-bold rounded-xl hover:bg-blue-300 transition cursor-pointer"
                  >
                    Contratar Mesh
                  </a>
                </div>
              </div>
            }
          />
          <FlipCard
            title={"Amplie sua rede com Wifi Mesh"}
            face={
              <div className="h-full flex flex-col items-center justify-center gap-10">
                <img
                  src="./assets/nobreak.png"
                  alt=""
                  className="w-50 sm:w-85"
                />
              </div>
            }
            back={
              <div className="flex flex-col text-white sm:px-20 gap-2">
                <h3 className=" text-2xl md:text-3xl font-bold mb-2">
                  Tenha conexão mesmo sem energia
                </h3>
                <p>
                  No mundo de hoje, sua casa e seu trabalho dependem de uma
                  conexão constante. Então, por que deixá-la vulnerável ao
                  primeiro sinal de instabilidade elétrica? Eleve o nível da sua
                  infraestrutura doméstica com a <strong>fonte nobreak</strong>.
                </p>
                <p>
                  Esqueça os nobreaks grandes e barulhentos. Este é um sistema
                  de energia ininterrupta (UPS) em miniatura, projetado
                  especificamente para manter o coração da sua rede — seu
                  roteador e modem — pulsando durante quedas de energia. Garanta
                  um ecossistema digital resiliente, onde sua conexão não é um
                  ponto de falha, mas sim uma certeza.
                </p>
                <div className="w-full flex justify-center">
                  <a
                    href="https://wa.me/5561000000000?text=Ol%C3%A1%2C+gostaria+de+contratar+a+fonte+Nobreak."
                    target="_blank"
                    className="mt-5 px-4 py-2 bg-blue-400 text-white font-bold rounded-xl hover:bg-blue-300 transition cursor-pointer"
                  >
                    Contratar Fonte Nobreak
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
