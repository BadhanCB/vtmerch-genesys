import { useEffect, useRef, useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductMedia from "./ProductMedia";

const ProductDetails = () => {
    const productDetailsRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const productDetailsObserver = new IntersectionObserver(
            (entries) => {
                setIsIntersecting(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    productDetailsObserver.unobserve(entries[0].target);
                }
            },
            { threshold: 0.35 }
        );

        productDetailsObserver.observe(productDetailsRef.current);
    }, []);

    return (
        <div
            ref={productDetailsRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
                isIntersecting
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
            }`}
        >
            <ProductMedia />
            <ProductInfo />
        </div>
    );
};
export default ProductDetails;
