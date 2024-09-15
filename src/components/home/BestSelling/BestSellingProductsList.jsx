import product1 from "../../../assets/img/img (10).jpeg";
import product2 from "../../../assets/img/img (7).jpeg";
import BestSellingProductCard from "./BestSellingProductCard";

const BestSellingProductsList = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <BestSellingProductCard
                productImg={product1}
                title="army green active short sleeve"
                price="37.21"
                offerPrice="27.21"
            />
            <BestSellingProductCard
                productImg={product2}
                title="army green active short sleeve"
                price="37.21"
            />
            <BestSellingProductCard
                productImg={product2}
                title="army green active short sleeve"
                price="37.21"
                offerPrice="25.21"
            />
            <BestSellingProductCard
                productImg={product1}
                title="army green active short sleeve"
                price="37.21"
            />
        </div>
    );
};
export default BestSellingProductsList;
