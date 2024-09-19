import { useState } from "react";
import productImg1 from "../../../assets/img/img (3).jpeg";
import productImg3 from "../../../assets/img/img (4).png";
import productImg2 from "../../../assets/img/img (6).png";
import productImg4 from "../../../assets/img/img (8).jpeg";
import ThumbnailCard from "./ThumbnailCard";

const ProductMedia = () => {
    const [activeImg, setActiveImg] = useState(0);
    const images = [productImg1, productImg2, productImg3, productImg4];

    return (
        <div className="flex flex-col xl:flex-row gap-8">
            <div className="order-2 xl:order-1 flex flex-row xl:flex-col gap-4 items-center justify-center">
                {/* previous icon button  */}
                <button
                    onClick={() =>
                        setActiveImg((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                        )
                    }
                    className="-rotate-90 xl:-rotate-0 p-3 rounded-full text-slate-500 hover:bg-slate-200 hover:text-black"
                >
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
                {images.map((img, index) => (
                    <ThumbnailCard
                        image={img}
                        index={index}
                        activeImg={activeImg}
                        setActiveImg={setActiveImg}
                        key={index}
                    />
                ))}
                {/* next icon button  */}
                <button
                    onClick={() =>
                        setActiveImg((prev) =>
                            prev === images.length - 1 ? 0 : prev + 1
                        )
                    }
                    className="-rotate-90 xl:-rotate-0 p-3 rounded-full text-slate-500 hover:bg-slate-200 hover:text-black"
                >
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
                <img src={images[activeImg]} alt="main image" />
            </div>
        </div>
    );
};
export default ProductMedia;
