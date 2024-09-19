import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const ShopCollectionOptionCard = ({ title, image, className }) => {
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
            className={`transition-all duration-700 relative overflow-hidden p-4 rounded-xl flex justify-center items-end cursor-pointer group ${className} ${
                isIntersecting ? "scale-y-100" : "scale-y-0"
            }`}
        >
            <h3
                className={`relative z-10 text-lg xl:text-xl 2xl:text-3xl text-center font-semibold xl:font-bold uppercase group-hover:font-light transition-all duration-700 ${
                    isIntersecting ? "delay-700 opacity-100" : "opacity-0"
                }`}
                style={{ wordBreak: "break-word" }}
            >
                {title}
            </h3>
            <img
                src={image}
                alt={title}
                className="absolute top-0 left-0 h-full w-full object-cover object-center z-[5] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#7c7c7c] to-black opacity-25 z-[7]"></div>
        </div>
    );
};
export default ShopCollectionOptionCard;
