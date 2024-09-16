const ServiceCard = ({ image, title, content }) => {
    return (
        <div className="flex flex-col gap-3">
            <img src={image} alt={title} className="w-10 h-10" />
            <h3 className="text-2xl capitalize font-montserrat font-medium">
                {title}
            </h3>
            <p>{content}</p>
        </div>
    );
};
export default ServiceCard;
