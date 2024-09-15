import BestSellingProductsList from "./BestSellingProductsList";
import BestSellingTitle from "./BestSellingTitle";

const BestSelling = () => {
    return (
        <section className="px-[9.25rem] py-[6.3125rem] bg-gray-100">
            <BestSellingTitle />
            <BestSellingProductsList />
        </section>
    );
};
export default BestSelling;
