import { useEffect, useRef, useState } from "react";

const AboutTitle = () => {
    const titleRef = useRef();
    const [isIntersectingtitle, setIsIntersectingtitle] = useState(false);

    useEffect(() => {
        const titleObserver = new IntersectionObserver(
            (entries) => {
                setIsIntersectingtitle(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    titleObserver.unobserve(entries[0].target);
                }
            },
            { threshold: 0.5 }
        );

        titleObserver.observe(titleRef.current);
    }, []);

    return (
        <h2
            ref={titleRef}
            className={`text-5xl md:text-7xl lg:text-8xl xl:text-[8.75rem] font-act-of-rejection text-center text-white relative z-10 translate-y-1/2 transition-all duration-1000 ${
                isIntersectingtitle
                    ? "blur-0 opacity-100 scale-100"
                    : "blur-xl opacity-0 scale-0"
            }`}
        >
            what we believe
        </h2>
    );
};
export default AboutTitle;
