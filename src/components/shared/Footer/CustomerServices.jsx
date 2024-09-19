import { useEffect, useRef, useState } from "react";

const CustomerServices = () => {
    const ref = useRef(null);
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

        observer.observe(ref.current);
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${
                isIntersecting
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
            }`}
        >
            <h3 className="text-xl font-medium capitalize mb-6">
                customer services
            </h3>
            <ul className="flex flex-col gap-4">
                <li>
                    <a href="#" className="capitalize">
                        about us
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        search
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        privacy policy
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        contact us
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        Terms of service
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        refund policy
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        track order
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default CustomerServices;
