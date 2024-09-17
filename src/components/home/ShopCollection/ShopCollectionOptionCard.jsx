const ShopCollectionOptionCard = ({ title, image, className }) => {
    return (
        <div className={`transition-all duration-700 ${className}`}>
            <h3>{title}</h3>
        </div>
    );
};
export default ShopCollectionOptionCard;
