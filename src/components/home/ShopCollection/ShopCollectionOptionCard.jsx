// eslint-disable-next-line react/prop-types
const ShopCollectionOptionCard = ({ title, image, className }) => {
    return (
        <div
            className={`transition-all duration-700 relative overflow-hidden p-4 rounded-xl flex justify-center items-end ${className}`}
        >
            <h3
                className="relative z-10 text-lg xl:text-xl 2xl:text-3xl text-center font-semibold xl:font-bold uppercase"
                style={{ wordBreak: "break-word" }}
            >
                {title}
            </h3>
            <img
                src={image}
                alt={title}
                className="absolute top-0 left-0 h-full w-full object-cover z-[5]"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#7c7c7c] to-black opacity-40 z-[7]"></div>
        </div>
    );
};
export default ShopCollectionOptionCard;
