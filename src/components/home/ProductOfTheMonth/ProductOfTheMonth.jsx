import ProductDetails from "./ProductDetails";

const ProductOfTheMonth = () => {
    return (
        <section className="bg-[#F6F5F5] font-montserrat px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-[16.4375rem] py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-[6.25rem]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.375rem] text-center font-semibold uppercase mb-12">
                Product Of{" "}
                <span className="stroke-text text-[#F6F5F5]">The Month</span>
            </h2>
            <ProductDetails />
        </section>
    );
};
export default ProductOfTheMonth;
