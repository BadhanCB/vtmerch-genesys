import productImg1 from "../../../assets/img/img (3).jpeg";
import productImg3 from "../../../assets/img/img (4).png";
import productImg2 from "../../../assets/img/img (6).png";
import productImg4 from "../../../assets/img/img (8).jpeg";
import ThumbnailCard from "./ThumbnailCard";

const ProductMedia = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            <div className="order-2 xl:order-1 flex flex-row xl:flex-col gap-4 items-center justify-center">
                {/* previous icon button  */}
                <button className="-rotate-90 xl:-rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                        />
                    </svg>
                </button>
                {/* thumbnail images */}
                <ThumbnailCard image={productImg1} />
                <ThumbnailCard image={productImg2} />
                <ThumbnailCard image={productImg3} />
                <ThumbnailCard image={productImg4} />
                {/* next icon button  */}
                <button className="-rotate-90 xl:-rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                        />
                    </svg>
                </button>
            </div>
            <div className="order-1 xl:order-2 w-fit h-fit bg-white rounded-3xl overflow-hidden my-auto">
                <img src={productImg1} alt="main image" />
            </div>
        </div>
    );
};
export default ProductMedia;
