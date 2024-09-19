import ContactUs from "./ContactUs";
import CustomerServices from "./CustomerServices";
import Products from "./Products";
import SubscriptionOption from "./SubscriptionOption";

const Links = () => {
    return (
        <div className="grid grid-cols-12 lg:gap-20 xl:gap-24 2xl:gap-[7.125rem]">
            <SubscriptionOption />
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-[7.125rem] xl:justify-items-center">
                <CustomerServices />
                <Products />
                <ContactUs />
            </div>
        </div>
    );
};
export default Links;
