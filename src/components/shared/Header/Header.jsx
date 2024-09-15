import logo from "../../../assets/logo/valuetainment.svg";
import HamburgerBtn from "./HamburgerBtn";

const Header = () => {
    return (
        <header className="px-16 py-10 fixed w-full z-50">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Brand logo" className="w-28" />
                    <h1 className="text-8xl text-white uppercase font-extrabold font-montserrat tracking-widest">
                        vtmerch
                    </h1>
                </div>
                <HamburgerBtn />
            </nav>
        </header>
    );
};
export default Header;
