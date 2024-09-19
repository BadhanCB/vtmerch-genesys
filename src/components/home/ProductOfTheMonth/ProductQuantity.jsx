import { useState } from "react";

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        e.target.value >= 1 ? setQuantity(e.target.value) : setQuantity(1);
    };

    return (
        <div className="font-inter">
            <div className="text-lg lg:text-xl xl:text-2xl font-medium mb-2 lg:mb-4">
                Quantity:
            </div>
            <div className="flex">
                <button
                    onClick={() =>
                        setQuantity((prev) => (prev <= 1 ? prev : prev - 1))
                    }
                    className="px-2 md:px-3 lg:px-4 py-1 md:py-2 border-[0.5px] border-[#27231280]/50 uppercase flex items-center cursor-pointer hover:bg-teal-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleChange}
                    className="px-2 md:px-3 lg:px-4 py-1 md:py-2 border-[0.5px] border-[#27231280]/50 uppercase bg-transparent w-14 text-center hide-number-arrow"
                />
                <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-2 md:px-3 lg:px-4 py-1 md:py-2 border-[0.5px] border-[#27231280]/50 uppercase flex items-center cursor-pointer hover:bg-teal-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                    >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
export default ProductQuantity;
