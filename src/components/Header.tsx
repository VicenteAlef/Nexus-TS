import { useState } from "react";
import { HashLink } from "react-router-hash-link";

interface HeaderProps {
  logo?: string;
  logoLink?: string;
  name?: string;
  links: { label: string; route: string }[];
}

const Header = ({ logo, name, links, logoLink }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="flex items-center justify-between px-3 lg:px-[10%] py-4 bg-[#00166a] text-white fixed z-10 w-full">
        {/* Logo */}
        <HashLink
          smooth
          to={`/${logoLink || ""}`}
          className="flex items-center"
          scroll={(el) => {
            const yOffset = -70;
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
        >
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto rounded-full bg-white"
            />
          )}
          <h1 className="ml-2 font-bold text-xl">{name}</h1>
        </HashLink>

        {/* Botão hamburguer (mobile) */}
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none"
        >
          {isOpen ? (
            // Ícone de "X"
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
          ) : (
            // Ícone de menu (três linhas)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4
        a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4
        a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </button>

        {/* Menu de navegação */}
        <nav
          className={`absolute top-full left-0 w-full bg-[#00165A] md:bg-[#00166a] z-50 lg:static lg:block lg:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row md:gap-6 p-4 md:p-0 font-bold">
            {links.map((link, index) => (
              <li key={index}>
                <HashLink
                  onClick={closeMenu}
                  className="block py-2 px-4 hover:bg-blue-950 rounded md:hover:bg-transparent md:hover:opacity-75"
                  to={`/${link.route}`}
                  smooth
                  scroll={(el) => {
                    const yOffset = -70;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="h-[70px]"></div>
    </>
  );
};

export default Header;
