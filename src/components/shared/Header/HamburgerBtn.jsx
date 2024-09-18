// eslint-disable-next-line react/prop-types
const HamburgerBtn = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <button
            className="group relative z-50 grid gap-[8px]"
            onClick={() => setIsOpenMenu((prev) => !prev)}
        >
            {/* width of the bar = hamburger height x square root of two (1.41421356237)
             *   translate y value = bar width / 2
             */}
            <div
                className={`h-[3.33px] bg-white rounded-sm origin-[left_center] group-hover:rotate-45 group-hover:w-[36.7554104861px] group-hover:-translate-y-[1.665px] group-hover:bg-yellow-400 transition duration-700 ${
                    isOpenMenu
                        ? "rotate-45 w-[36.7554104861px] -translate-y-[1.665px]"
                        : "rotate-0 w-[40px] -translate-y-0"
                }`}
            ></div>
            <div
                className={`w-[40px] h-[3.33px] bg-white rounded-sm group-hover:opacity-0 group-hover:-translate-x-6 group-hover:bg-yellow-400 transition duration-700 ${
                    isOpenMenu
                        ? "opacity-0 -translate-x-6"
                        : "opacity-1 -translate-x-0"
                }`}
            ></div>
            <div
                className={`h-[3.33px] bg-white rounded-sm origin-[left_center] group-hover:-rotate-45 group-hover:w-[36.7554104861px] group-hover:translate-y-[1.665px] group-hover:bg-yellow-400 transition duration-700 ${
                    isOpenMenu
                        ? "-rotate-45 w-[36.7554104861px] translate-y-[1.665px]"
                        : "-rotate-0 w-[40px] translate-y-0"
                }`}
            ></div>
        </button>
    );
};
export default HamburgerBtn;
