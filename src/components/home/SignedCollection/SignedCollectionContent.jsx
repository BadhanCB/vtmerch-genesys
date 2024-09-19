import { useEffect, useRef, useState } from "react";
import signeturePic from "../../../assets/img/pat-signature White 1.png";
import RegularButton from "../../shared/RegularButton/RegularButton";

const SignedCollectionContent = () => {
    const elementRef = useRef(null);
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

        observer.observe(elementRef.current);
    }, []);

    return (
        <div
            ref={elementRef}
            className="font-montserrat uppercase order-2 md:order-1"
        >
            <h2
                className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-medium mb leading-[1.5] mb-2 lg:mb-3 xl:mb-4 transition-all duration-700 ${
                    isIntersecting
                        ? "-translate-y-0 opacity-100"
                        : "-translate-y-12 opacity-0"
                }`}
            >
                patrick bet-david{"'"}s
            </h2>
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] mb-8 transition-all duration-1000 ${
                    isIntersecting
                        ? "-translate-y-0 opacity-100"
                        : "-translate-x-12 opacity-0"
                }`}
            >
                signed <br /> collection
            </h2>
            <RegularButton className="group overflow-hidden">
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
            <img
                src={signeturePic}
                alt="signeture pic"
                className={`mt-10 transition-all duration-1000 ${
                    isIntersecting
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                }`}
            />
        </div>
    );
};
export default SignedCollectionContent;
