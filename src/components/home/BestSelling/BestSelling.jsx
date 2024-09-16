import BestSellingProductsList from "./BestSellingProductsList";
import BestSellingTitle from "./BestSellingTitle";

const BestSelling = () => {
    return (
        <section className="px-4 sm:px-12 md:px-16 lg:px-24 xl:px-28 2xl:px-[9.25rem] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-[6.3125rem] bg-[#F6F5F5]">
            <BestSellingTitle />
            <BestSellingProductsList />
        </section>
    );
};
export default BestSelling;
