import SectionLayout from "../../shared/SectionLayout/SectionLayout";
import FutureLooksContent from "./FutureLooksContent";
import FutureLooksProducts from "./FutureLooksProducts";

const FutureLooks = () => {
    return (
        <SectionLayout className="grid grid-cols-12 content-center">
            <FutureLooksContent />
            <FutureLooksProducts />
        </SectionLayout>
    );
};
export default FutureLooks;
