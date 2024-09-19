import { useEffect, useRef, useState } from "react";

const Products = () => {
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
            <h3 className="text-xl font-medium capitalize mb-6">products</h3>
            <ul className="flex flex-col gap-4">
                <li>
                    <a href="#" className="capitalize">
                        featured products
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        bestseller
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        latest product
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        all collections
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        all products
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default Products;
