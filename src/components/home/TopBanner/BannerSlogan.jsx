import { useEffect, useRef, useState } from "react";

const BannerSlogan = () => {
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
        <h2
            ref={elementRef}
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8.75rem] text-nowrap font-extrabold uppercase font-act-of-rejection text-white opacity-40 absolute top-24 md:top-44 lg:top-52 xl:top-64 2xl:top-72 mx-4 sm:mx-8 md:mx-24 lg:mx-28 xl:mx-32 2xl:mx-36 transition-all duration-700 ${
                isIntersecting
                    ? "translate-x-0 opacity-100"
                    : "translate-x-1/2 opacity-0"
            }`}
        >
            Future Looks Brights!
        </h2>
    );
};
export default BannerSlogan;
