import productImg1 from "../../../assets/img/img (1).jpeg";
import productImg2 from "../../../assets/img/img (5).jpeg";
import ProductCard from "../../shared/ProductCard/ProductCard";

const FutureLooksProducts = () => {
    return (
        <div className="col-start-1 col-end-13 lg:col-start-6 lg:col-end-13 2xl:col-start-6 2xl:col-end-13 grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
            <ProductCard
                title="FLB Shirt - Purple"
                price={43.59}
                offerPrice={34.95}
                productImg={productImg1}
                className="shadow-none p-0"
                imgClassName="shadow-lg mb-6"
            />
            <ProductCard
                title="FLB Shirt - Purple"
                price={34.95}
                productImg={productImg2}
                className="shadow-none p-0"
                imgClassName="shadow-lg mb-6"
            />
        </div>
    );
};
export default FutureLooksProducts;
