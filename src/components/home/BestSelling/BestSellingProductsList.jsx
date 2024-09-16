import product1 from "../../../assets/img/img (10).jpeg";
import product2 from "../../../assets/img/img (7).jpeg";
import ProductCard from "../../shared/ProductCard/ProductCard";

const BestSellingProductsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3 xl:gap-4">
            <ProductCard
                productImg={product1}
                title="army green active short sleeve"
                price="37.21"
                offerPrice="27.21"
            />
            <ProductCard
                productImg={product2}
                title="army green active short sleeve"
                price="37.21"
            />
            <ProductCard
                productImg={product2}
                title="army green active short sleeve"
                price="37.21"
                offerPrice="25.21"
            />
            <ProductCard
                productImg={product1}
                title="army green active short sleeve"
                price="37.21"
            />
        </div>
    );
};
export default BestSellingProductsList;
