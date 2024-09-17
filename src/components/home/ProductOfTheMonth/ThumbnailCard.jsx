const ThumbnailCard = ({ image }) => {
    return (
        <div className="w-12 md:w-16 xl:w-20 2xl:w-[6.25rem] h-12 md:h-16 xl:h-20 2xl:h-[6.25rem] rounded-lg bg-white overflow-hidden">
            <img
                src={image}
                alt="thumbnail image"
                className="w-full h-full object-cover"
            />
        </div>
    );
};
export default ThumbnailCard;
