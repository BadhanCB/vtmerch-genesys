import logo from "../../../assets/logo/valuetainment.svg";
import HamburgerBtn from "./HamburgerBtn";

const Header = () => {
    return (
        <header className="px-2 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-2 md:py-4 lg:py-6 xl:py-8 2xl:py-10 fixed w-full z-50">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Brand logo"
                        className="w-6 md:w-12 lg:w-14 xl:w-16 2xl:w-20"
                    />
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white uppercase font-extrabold font-montserrat tracking-widest">
                        vtmerch
                    </h1>
                </div>
                <HamburgerBtn />
            </nav>
        </header>
    );
};
export default Header;
