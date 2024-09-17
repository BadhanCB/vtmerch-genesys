import ProductDetails from "./ProductDetails";

const ProductOfTheMonth = () => {
    return (
        <section className="bg-[#F6F5F5] font-montserrat px-[16.4375rem] py-[6.25rem]">
            <h2 className="text-6xl 2xl:text-[4.375rem] text-center font-semibold uppercase mb-12">
                Product Of{" "}
                <span className="stroke-text text-[#F6F5F5]">The Month</span>
            </h2>
            <ProductDetails />
        </section>
    );
};
export default ProductOfTheMonth;
