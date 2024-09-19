import { useState } from "react";
import logo from "../../../assets/logo/valuetainment.svg";
import HamburgerBtn from "./HamburgerBtn";
import NavLinks from "./NavLinks";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    let lastScrollY = window.scrollY;

    const changeNavbarBG = () => {
        if (window.scrollY >= 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (window.scrollY >= 500) {
            lastScrollY < window.scrollY
                ? setIsScrolledDown(true)
                : setIsScrolledDown(false);

            lastScrollY = window.scrollY;
        } else {
            setIsScrolledDown(false);
        }
    };

    window.addEventListener("scroll", changeNavbarBG);

    return (
        <header
            className={`fixed w-full z-30 transition-all duration-1000 ease-in px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-[3.875rem] ${
                isScrolledDown ? "-top-full" : "-top-0"
            } ${
                isScrolled
                    ? "bg-[#EA2127] shadow-lg py-3 lg:py-4 xl:py-6 2xl:py-8"
                    : "bg-transparent py-4 lg:py-6 xl:py-8 2xl:py-10"
            }`}
        >
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                    <img
                        src={logo}
                        alt="Brand logo"
                        className={`transition-all duration-700 ${
                            isScrolled
                                ? "w-6 md:w-5 lg:w-6 xl:w-8 2xl:w-12"
                                : "w-8 md:w-12 lg:w-14 xl:w-16 2xl:w-20"
                        }`}
                    />
                    <h1
                        className={`text-white uppercase font-extrabold font-montserrat tracking-widest transition-all duration-700 ${
                            isScrolled
                                ? "text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] 2xl:text-6xl"
                                : "text-3xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[7rem]"
                        }`}
                    >
                        vtmerch
                    </h1>
                </div>
                <NavLinks
                    isOpenMenu={isOpenMenu}
                    setIsOpenMenu={setIsOpenMenu}
                />

                <HamburgerBtn
                    isOpenMenu={isOpenMenu}
                    setIsOpenMenu={setIsOpenMenu}
                />
            </nav>
        </header>
    );
};
export default Header;
