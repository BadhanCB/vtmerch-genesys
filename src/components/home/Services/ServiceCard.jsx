import { useEffect, useRef, useState } from "react";

const ServiceCard = ({ image, title, content, className }) => {
    const serviceRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const serviceObserver = new IntersectionObserver(
            (entries) => {
                setIsIntersecting(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    serviceObserver.unobserve(entries[0].target);
                }
            },
            { threshold: 0.3 }
        );

        serviceObserver.observe(serviceRef.current);
    }, []);

    return (
        <div
            ref={serviceRef}
            className={`flex flex-col gap-3 transition-all duration-700 ${className} ${
                isIntersecting
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
            }`}
        >
            <img src={image} alt={title} className="w-10 h-10" />
            <h3 className="text-2xl capitalize font-montserrat font-medium">
                {title}
            </h3>
            <p>{content}</p>
        </div>
    );
};
export default ServiceCard;
