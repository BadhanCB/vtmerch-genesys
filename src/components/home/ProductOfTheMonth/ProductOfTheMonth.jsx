import ProductDetails from "./ProductDetails";
import SectionTitle from "./SectionTitle";

const ProductOfTheMonth = () => {
    return (
        <section className="bg-[#F6F5F5] font-montserrat px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-[16.4375rem] py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-[6.25rem]">
            <SectionTitle />
            <ProductDetails />
        </section>
    );
};
export default ProductOfTheMonth;
