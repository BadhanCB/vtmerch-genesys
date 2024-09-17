import BuyOptions from "./BuyOptions";
import ProductDescription from "./ProductDescription";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductSizes from "./ProductSizes";
import ShareOptions from "./ShareOptions";
import ViewDetails from "./ViewDetails";

const ProductInfo = () => {
    return (
        <div className="flex flex-col gap-8">
            <ProductName />

            <ProductDescription />

            <ProductPrice />

            <ProductSizes />

            <ProductQuantity />

            <BuyOptions />

            <ShareOptions />

            <ViewDetails />
        </div>
    );
};
export default ProductInfo;
