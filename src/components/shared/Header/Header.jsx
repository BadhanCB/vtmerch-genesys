import { useState } from "react";
import logo from "../../../assets/logo/valuetainment.svg";
import HamburgerBtn from "./HamburgerBtn";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const changeNavbarBG = () => {
        if (window.scrollY >= 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", changeNavbarBG);

    return (
        <header
            className={`px-2 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-2 md:py-4 lg:py-6 xl:py-8 2xl:py-10 fixed w-full z-50 transition-all duration-700 ${
                isScrolled ? "bg-[#EA2127] shadow-lg" : "bg-transparent"
            }`}
        >
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Brand logo"
                        className={`transition-all duration-700 ${
                            isScrolled
                                ? "w-4 md:w-5 lg:w-6 xl:w-8 2xl:w-12"
                                : "w-6 md:w-12 lg:w-14 xl:w-16 2xl:w-20"
                        }`}
                    />
                    <h1
                        className={`text-white uppercase font-extrabold font-montserrat tracking-widest transition-all duration-700 ${
                            isScrolled
                                ? "text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                                : "text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                        }`}
                    >
                        vtmerch
                    </h1>
                </div>
                <HamburgerBtn />
            </nav>
        </header>
    );
};
export default Header;
