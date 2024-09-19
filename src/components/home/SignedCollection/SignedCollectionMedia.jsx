import { useEffect, useRef, useState } from "react";
import book2 from "../../../assets/img/Front.png";
import book1 from "../../../assets/img/img (1).png";

const SignedCollectionMedia = () => {
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
            className={`grid grid-cols-2 gap-6 xl:gap-8 2xl:gap-12 order-1 md:order-2 transition-all duration-700 ${
                isIntersecting
                    ? "translate-x-0 opacity-100"
                    : "translate-x-24 opacity-0"
            }`}
        >
            <div>
                <img
                    src={book1}
                    alt="book 1"
                    className="h-full w-full object-contain"
                />
            </div>
            <div>
                <img
                    src={book2}
                    alt="book 2"
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    );
};
export default SignedCollectionMedia;
