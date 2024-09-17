import ProductInfo from "./ProductInfo";
import ProductMedia from "./ProductMedia";

const ProductDetails = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductMedia />
            <ProductInfo />
        </div>
    );
};
export default ProductDetails;
