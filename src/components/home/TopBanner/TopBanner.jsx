import BannerProductSlider from "./BannerProductSlider";
import BannerSlogan from "./BannerSlogan";

const TopBanner = () => {
    return (
        <section className="bg-[#EA2127] pt-32 md:pt-56 lg:pt-64 xl:pt-80 2xl:pt-96 pb-16 relative z-20">
            <BannerSlogan />

            <BannerProductSlider />
        </section>
    );
};
export default TopBanner;
