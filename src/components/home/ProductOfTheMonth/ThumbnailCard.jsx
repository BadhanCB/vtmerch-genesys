const ThumbnailCard = ({ image, index, activeImg, setActiveImg }) => {
    return (
        <div
            onClick={() => setActiveImg(index)}
            className={`w-12 md:w-16 xl:w-20 2xl:w-[6.25rem] h-12 md:h-16 xl:h-20 2xl:h-[6.25rem] rounded-lg bg-white overflow-hidden cursor-pointer hover:border-2 hover:border-slate-800 ${
                index === activeImg && "border-2 border-slate-800"
            }`}
        >
            <img
                src={image}
                alt="thumbnail image"
                className="w-full h-full object-cover"
            />
        </div>
    );
};
export default ThumbnailCard;
