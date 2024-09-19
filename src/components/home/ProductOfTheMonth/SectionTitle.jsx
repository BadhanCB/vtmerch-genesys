import { useEffect, useRef, useState } from "react";

const SectionTitle = () => {
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
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.375rem] text-center font-semibold uppercase mb-12 transition-all duration-700 ${
                isIntersecting
                    ? "blur-0 opacity-100 scale-100"
                    : "blur-xl opacity-0 scale-[2]"
            }`}
        >
            Product Of{" "}
            <span className="stroke-text text-[#F6F5F5]">The Month</span>
        </h2>
    );
};
export default SectionTitle;
