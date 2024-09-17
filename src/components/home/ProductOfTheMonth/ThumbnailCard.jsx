const ThumbnailCard = ({ image }) => {
    return (
        <div className="w-[6.25rem] h-[6.25rem] rounded-lg bg-white overflow-hidden">
            <img
                src={image}
                alt="thumbnail image"
                className="w-full h-full object-cover"
            />
        </div>
    );
};
export default ThumbnailCard;
