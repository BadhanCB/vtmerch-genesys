import { useEffect, useRef, useState } from "react";

const BestSellingTitle = () => {
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
        <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.375rem] uppercase font-semibold font-montserrat mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9 leading-tight transition-all duration-700 ${
                isIntersecting
                    ? "blur-0 opacity-100 scale-100"
                    : "blur-xl opacity-0 scale-[2]"
            }`}
        >
            Buy 1 get 1 free <br /> on{" "}
            <span className="stroke-text">best selling products</span>
        </h2>
    );
};
export default BestSellingTitle;
