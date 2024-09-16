// eslint-disable-next-line react/prop-types
const NavLinks = ({ isOpenMenu }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-full bg-[#af1b20] text-white transition-all duration-700 z-40 ${
                isOpenMenu ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <ul className="h-full w-full flex flex-col justify-center items-center gap-10 text-3xl uppercase font-act-of-rejection font-extrabold">
                <li>
                    <a
                        href="#"
                        className="hover:tracking-[0.5em] transition-all"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:tracking-[0.5em] transition-all"
                    >
                        Shop
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:tracking-[0.5em] transition-all"
                    >
                        Colections
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:tracking-[0.5em] transition-all"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:tracking-[0.5em] transition-all"
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default NavLinks;
