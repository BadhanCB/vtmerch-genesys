import SectionLayout from "../../shared/SectionLayout/SectionLayout";
import BestSellingProductsList from "./BestSellingProductsList";
import BestSellingTitle from "./BestSellingTitle";

const BestSelling = () => {
    return (
        <SectionLayout className="bg-[#F6F5F5]">
            <BestSellingTitle />
            <BestSellingProductsList />
        </SectionLayout>
    );
};
export default BestSelling;
