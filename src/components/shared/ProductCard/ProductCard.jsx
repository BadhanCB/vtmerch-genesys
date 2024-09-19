const ProductCard = ({
    productImg,
    title,
    price,
    offerPrice,
    className,
    imgClassName,
}) => {
    return (
        <div
            className={`cursor-pointer bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-95 group transition duration-700 ${className}`}
        >
            <div
                className={`rounded-lg w-full aspect-square overflow-hidden ${imgClassName}`}
            >
                <img
                    src={productImg}
                    alt={title}
                    className="w-full h-auto object-cover group-hover:scale-125 transition duration-700"
                />
            </div>
            <div className="mt-8">
                <h3 className="text-base font-semibold capitalize mb-4">
                    {title}
                </h3>
                <div className="flex items-center gap-2">
                    {offerPrice && (
                        <p className="flex items-center text-2xl font-medium">
                            $ {offerPrice}
                        </p>
                    )}
                    <p
                        className={`flex items-center text-2xl font-medium ${
                            offerPrice && "line-through text-xl text-gray-400"
                        }`}
                    >
                        $ {price}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
