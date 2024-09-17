import SizeVariant from "./SizeVariant";

const ProductSizes = () => {
    return (
        <div className="font-inter flex items-center gap-3">
            <div className="text-xl font-medium">Size:</div>
            <div className="flex">
                <SizeVariant>s</SizeVariant>
                <SizeVariant>M</SizeVariant>
                <SizeVariant>L</SizeVariant>
                <SizeVariant>XL</SizeVariant>
                <SizeVariant>XXL</SizeVariant>
            </div>
        </div>
    );
};
export default ProductSizes;
