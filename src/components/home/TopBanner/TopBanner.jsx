import BannerProductSlider from "./BannerProductSlider";
import BannerSlogan from "./BannerSlogan";

const TopBanner = () => {
    return (
        <section className="bg-[#EA2127] px-36 pt-96 pb-8 relative z-20">
            <BannerSlogan />

            <BannerProductSlider />
        </section>
    );
};
export default TopBanner;
