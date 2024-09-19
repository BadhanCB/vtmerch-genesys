import { useEffect, useRef, useState } from "react";
import image from "../../../assets/img/img (10).png";

const AboutMedia = () => {
    const elementRef = useRef();
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
            className={`h-full w-full overflow-hidden rounded-xl transition-all duration-1000 relative z-[5] ${
                isIntersecting ? "scale-y-100" : "scale-y-0"
            }`}
        >
            <img
                src={image}
                alt="about our image"
                className="h-full w-full object-cover object-center"
            />
        </div>
    );
};
export default AboutMedia;
