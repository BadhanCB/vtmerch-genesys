import supportImg from "../../../assets/icon/customer-support 1.svg";
import shippingImg from "../../../assets/icon/delivery.svg";
import returnImg from "../../../assets/icon/exchange.svg";
import paymentImg from "../../../assets/icon/verified.svg";
import SectionLayout from "../../shared/SectionLayout/SectionLayout";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <SectionLayout className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            <ServiceCard
                title="shipping"
                content="The attention to detail is evident in every aspect of this backpack."
                image={shippingImg}
            />
            <ServiceCard
                title="return"
                content="The attention to detail is evident in every aspect of this backpack."
                image={returnImg}
            />
            <ServiceCard
                title="support"
                content="The attention to detail is evident in every aspect of this backpack."
                image={supportImg}
            />
            <ServiceCard
                title="payment"
                content="The attention to detail is evident in every aspect of this backpack."
                image={paymentImg}
            />
        </SectionLayout>
    );
};
export default Services;
