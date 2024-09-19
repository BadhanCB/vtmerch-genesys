import { useEffect, useRef, useState } from "react";

const TableRowData = ({ text, className }) => {
    const splitText = text.split(" ");
    const firstWord = splitText[0];
    let restWords = "";

    for (let i = 1; i < splitText.length; i++) {
        if (splitText[i] !== "") {
            restWords += " " + splitText[i];
        }
    }

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
        <tr
            ref={elementRef}
            className={`border-b-[0.5px] border-white/50 group overflow-hidden transition-all duration-1000 ${className} ${
                isIntersecting
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
            }`}
        >
            <td
                className={`font-medium text-white opacity-80 pt-8 md:pt-12 group-first-of-type:lg:pt-20 pb-6 group-first-of-type:pb-11`}
            >
                <span className="font-montserrat text-[2rem]">{firstWord}</span>{" "}
                {restWords}
            </td>
        </tr>
    );
};
export default TableRowData;
