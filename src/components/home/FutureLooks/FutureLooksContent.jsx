import { useEffect, useRef, useState } from "react";

const FutureLooksContent = () => {
    const titleRef = useRef();
    const subTitleRef = useRef();
    const [isIntersectingtitle, setIsIntersectingtitle] = useState(false);
    const [isIntersectingSubtitle, setIsIntersectingSubtitle] = useState(false);

    useEffect(() => {
        const titleObserver = new IntersectionObserver(
            (entries) => {
                setIsIntersectingtitle(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    titleObserver.unobserve(entries[0].target);
                }
            },
            { threshold: 0.3 }
        );

        const subTitleObserver = new IntersectionObserver(
            (entries) => {
                setIsIntersectingSubtitle(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    subTitleObserver.unobserve(entries[0].target);
                }
            },
            { threshold: 0.3 }
        );

        titleObserver.observe(titleRef.current);
        subTitleObserver.observe(subTitleRef.current);
    }, []);

    return (
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3 mb-12 flex flex-col justify-center">
            <h2
                ref={titleRef}
                className={`text-6xl md:text-7xl lg:text-[5rem] xl:text-8xl 2xl:text-[6.25rem] font-normal font-act-of-rejection uppercase leading-[1.2] mb-8 transition-all duration-700 ${
                    isIntersectingtitle
                        ? "blur-0 opacity-100 scale-100"
                        : "blur-xl opacity-0 scale-0"
                }`}
            >
                future looks bright
            </h2>
            <h3
                ref={subTitleRef}
                className={`text-4xl md:text-[2.5rem] lg:text-[2.3rem] xl:text-[3rem] 2xl:text-[3.125rem] font-montserrat-italic font-bold uppercase leading-[1.2] transition-all duration-700 ${
                    isIntersectingSubtitle
                        ? "blur-0 opacity-100 scale-100"
                        : "blur-xl opacity-0 scale-[2]"
                }`}
            >
                <span className="font-semibold text-[#7F1BCD]">purple</span>{" "}
                <span className="text-[#272312] font-[275]">&</span>
                <br />
                <span className="text-[#E0A408]">gold</span>{" "}
                <span className="stroke-text text-white">series</span>
            </h3>
        </div>
    );
};
export default FutureLooksContent;
