// eslint-disable-next-line react/prop-types
const HamburgerBtn = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <button
            className="group relative z-50"
            onClick={() => setIsOpenMenu((prev) => !prev)}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-10 h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-10"
            >
                <g clipPath="url(#clip0_0_53)">
                    <path
                        d="M38.3333 21.6322H1.66667C0.746663 21.6322 0 20.8855 0 19.9655C0 19.0455 0.746663 18.2988 1.66667 18.2988H38.3333C39.2533 18.2988 40 19.0455 40 19.9655C40 20.8855 39.2533 21.6322 38.3333 21.6322Z"
                        className={`group-hover:fill-slate-200 fill-white transition-all duration-700 ${
                            isOpenMenu
                                ? "translate-x-5 opacity-0"
                                : "translate-x-0 opacity-1"
                        }`}
                    />
                    <path
                        d="M38.3333 8.85409H1.66667C0.746663 8.85409 0 8.10742 0 7.18742C0 6.26742 0.746663 5.52075 1.66667 5.52075H38.3333C39.2533 5.52075 40 6.26742 40 7.18742C40 8.10742 39.2533 8.85409 38.3333 8.85409Z"
                        className={`group-hover:fill-slate-200 fill-white transition-all duration-700 origin-[center_left] ${
                            isOpenMenu ? "rotate-[33deg]" : "rotate-0"
                        }`}
                    />
                    <path
                        d="M38.3333 34.4095H1.66667C0.746663 34.4095 0 33.6628 0 32.7428C0 31.8228 0.746663 31.0762 1.66667 31.0762H38.3333C39.2533 31.0762 40 31.8228 40 32.7428C40 33.6628 39.2533 34.4095 38.3333 34.4095Z"
                        className={`group-hover:fill-slate-200 fill-white transition-all duration-700 origin-[center_left] ${
                            isOpenMenu ? "-rotate-[33deg]" : "rotate-0"
                        }`}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_0_53">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    );
};
export default HamburgerBtn;
