import { useEffect, useRef, useState } from "react";
import RegularButton from "../../shared/RegularButton/RegularButton";

const ShopCollectionHeader = () => {
    const titleRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsIntersecting(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(titleRef.current);
    }, []);

    return (
        <div className="col-span-12 row-span-2 md:col-span-8 lg:col-span-6 md:row-span-3 lg:row-span-4">
            <h2
                ref={titleRef}
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold uppercase md:w-1/2 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 transition-all duration-700 ${
                    isIntersecting
                        ? "blur-0 opacity-100 scale-100"
                        : "blur-xl opacity-0 scale-[2]"
                }`}
            >
                Shop{" "}
                <span className="stroke-text stroke-text-white text-[#191818]">
                    Collection
                </span>
            </h2>
            <RegularButton className="bg-slate-300 group overflow-hidden">
                shop now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 md:size-6 group-hover:slide-right"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </RegularButton>
        </div>
    );
};
export default ShopCollectionHeader;
