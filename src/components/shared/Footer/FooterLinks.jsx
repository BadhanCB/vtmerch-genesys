import SectionLayout from "../SectionLayout/SectionLayout";
import BrandName from "./BrandName";
import Divider from "./Divider";
import Links from "./Links";

const FooterLinks = () => {
    return (
        <SectionLayout>
            <BrandName />
            <Divider />
            <Links />
        </SectionLayout>
    );
};
export default FooterLinks;
