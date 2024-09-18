import { useRef } from "react";
import product1 from "../../../assets/img/img (9).png";
import BannerProductCard from "./BannerProductCard";

const BannerProductSlider = () => {
    const sliderRef = useRef(null);

    let isDraggin = false;
    let startX = 0;
    let startScrollLeft = 0;

    const dragStart = (e) => {
        if (!sliderRef.current) return;
        isDraggin = true;
        sliderRef.current.style.cursor = "grabbing";
        startX = e.pageX;
        startScrollLeft = sliderRef.current.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDraggin || !sliderRef.current) return;
        sliderRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragEnd = () => {
        if (!sliderRef.current) return;
        isDraggin = false;
        sliderRef.current.style.cursor = "pointer";
    };

    return (
        <div
            ref={sliderRef}
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragEnd}
            className="font-inter py-12 grid grid-cols-[repeat(1,_12rem)] md:grid-cols-[repeat(1,_16rem)] lg:grid-cols-[repeat(1,_19rem)] xl:grid-cols-[repeat(1,_21rem)] 2xl:grid-cols-[repeat(1,_357px)] auto-cols-[12rem] md:auto-cols-[16rem] lg:auto-cols-[19rem] xl:auto-cols-[21rem] 2xl:auto-cols-[357px] grid-flow-col overflow-x-auto hide-scrollbar gap-4 relative z-10 ml-8 md:ml-28 lg:ml-32 xl:ml-36 2xl:ml-44 cursor-pointer scroll-smooth snap-mandatory snap-x"
        >
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={43.59}
                offerPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={43.59}
                offerPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={43.59}
                offerPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={34.95}
            />
            <BannerProductCard
                product={product1}
                title="army green active short slave"
                originalPrice={43.59}
                offerPrice={34.95}
            />
        </div>
    );
};

export default BannerProductSlider;
