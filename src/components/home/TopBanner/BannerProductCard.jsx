// eslint-disable-next-line react/prop-types
const BannerProductCard = ({ product, title, originalPrice, offerPrice }) => {
    return (
        <div className="snap-center select-none rounded-xl group transition duration-700">
            <div className="w-full aspect-square rounded-xl hover:shadow-xl overflow-hidden transition duration-700">
                <img
                    src={product}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-125 transition duration-700"
                    draggable={false}
                />
            </div>
            <div className="text-white mt-3">
                <h3 className="text-base font-medium capitalize mb-2">
                    {title}
                </h3>
                {/* price area */}
                <div className="flex gap-4">
                    {/* show offer Price, if avilable */}
                    {offerPrice && (
                        <p className="flex gap-[0.1rem] items-center text-xl font-medium">
                            $ {offerPrice}
                        </p>
                    )}
                    {/* Original Price */}
                    <p
                        className={`flex gap-[0.1rem] items-center font-medium ${
                            offerPrice ? "line-through text-lg" : "text-xl"
                        }`}
                    >
                        $ {originalPrice}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default BannerProductCard;
