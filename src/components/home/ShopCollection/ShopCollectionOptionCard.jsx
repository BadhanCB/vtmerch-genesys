// eslint-disable-next-line react/prop-types
const ShopCollectionOptionCard = ({ title, image, className }) => {
    return (
        <div
            className={`transition-all duration-700 relative overflow-hidden p-4 rounded-xl flex justify-center items-end cursor-pointer group ${className}`}
        >
            <h3
                className="relative z-10 text-lg xl:text-xl 2xl:text-3xl text-center font-semibold xl:font-bold uppercase group-hover:font-light transition-all duration-700"
                style={{ wordBreak: "break-word" }}
            >
                {title}
            </h3>
            <img
                src={image}
                alt={title}
                className="absolute top-0 left-0 h-full w-full object-cover object-center z-[5] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#7c7c7c] to-black opacity-25 z-[7]"></div>
        </div>
    );
};
export default ShopCollectionOptionCard;
