import product1 from "../../../assets/img/img (9).png";
import BannerProductCard from "./BannerProductCard";

const BannerProductSlider = () => {
    return (
        <div className="font-inter grid grid-cols-4 gap-4 relative z-10">
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
                offerPrice={43.59}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
                offerPrice={43.59}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
                offerPrice={43.59}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
                offerPrice={43.59}
            />
        </div>
    );
};
export default BannerProductSlider;
