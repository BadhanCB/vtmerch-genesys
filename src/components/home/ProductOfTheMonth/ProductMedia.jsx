import productImg1 from "../../../assets/img/img (3).jpeg";
import productImg3 from "../../../assets/img/img (4).png";
import productImg2 from "../../../assets/img/img (6).png";
import productImg4 from "../../../assets/img/img (8).jpeg";
import ThumbnailCard from "./ThumbnailCard";

const ProductMedia = () => {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col gap-4 items-center justify-center">
                {/* arrow up icon button  */}
                <button>
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
                {/* arrow down icon button  */}
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
            </div>
            <div className="w-full h-fit bg-white rounded-3xl overflow-hidden">
                <img src={productImg1} alt="main image" />
            </div>
        </div>
    );
};
export default ProductMedia;
