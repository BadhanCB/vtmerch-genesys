import { useState } from "react";
import SizeVariant from "./SizeVariant";

const ProductSizes = () => {
    const [productSize, setProductSize] = useState("");

    return (
        <div className="font-inter flex items-center gap-3">
            <div className="text-lg lg:text-xl xl:text-2xl font-medium">
                Size:
            </div>
            <div className="flex">
                <SizeVariant
                    productSize={productSize}
                    setProductSize={setProductSize}
                    size="s"
                />
                <SizeVariant
                    productSize={productSize}
                    setProductSize={setProductSize}
                    size="m"
                />
                <SizeVariant
                    productSize={productSize}
                    setProductSize={setProductSize}
                    size="l"
                />
                <SizeVariant
                    productSize={productSize}
                    setProductSize={setProductSize}
                    size="xl"
                />
                <SizeVariant
                    productSize={productSize}
                    setProductSize={setProductSize}
                    size="xxl"
                />
            </div>
        </div>
    );
};
export default ProductSizes;
