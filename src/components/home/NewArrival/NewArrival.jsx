import product1 from "../../../assets/img/img (4).jpeg";
import product2 from "../../../assets/img/img (6).jpeg";
import ProductCard from "../../shared/ProductCard/ProductCard";
import SectionLayout from "../../shared/SectionLayout/SectionLayout";

const NewArrival = () => {
    return (
        <SectionLayout className="bg-[#F6F5F5]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-montserrat font-semibold uppercase mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
                new arrival
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                <ProductCard
                    title="army green short sleeve"
                    price={43.59}
                    offerPrice={34.95}
                    productImg={product1}
                />
                <ProductCard
                    title="army green short sleeve"
                    price={43.59}
                    offerPrice={34.95}
                    productImg={product2}
                />
                <ProductCard
                    title="army green short sleeve"
                    price={43.59}
                    offerPrice={34.95}
                    productImg={product2}
                />
                <ProductCard
                    title="army green short sleeve"
                    price={43.59}
                    offerPrice={34.95}
                    productImg={product1}
                />
            </div>
        </SectionLayout>
    );
};
export default NewArrival;
