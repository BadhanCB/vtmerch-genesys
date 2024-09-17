import RegularButton from "../../shared/RegularButton/RegularButton";

const ShopCollectionHeader = () => {
    return (
        <div className="bg-red-400 col-span-6 row-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold uppercase w-1/2 mb-12">
                Shop{" "}
                <span className="stroke-text stroke-text-white text-[#191818]">
                    Collection
                </span>
            </h2>
            <RegularButton className="bg-slate-300">
                shop now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 md:size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </RegularButton>
        </div>
    );
};
export default ShopCollectionHeader;
