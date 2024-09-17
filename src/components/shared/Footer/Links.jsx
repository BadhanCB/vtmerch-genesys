import ContactUs from "./ContactUs";
import CustomerServices from "./CustomerServices";
import Products from "./Products";
import SubscriptionOption from "./SubscriptionOption";

const Links = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28">
            <SubscriptionOption />
            <CustomerServices />
            <Products />
            <ContactUs />
        </div>
    );
};
export default Links;
