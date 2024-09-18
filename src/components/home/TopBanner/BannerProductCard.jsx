// eslint-disable-next-line react/prop-types
const BannerProductCard = ({ product, title, originalPrice, offerPrice }) => {
    return (
        <div className="snap-center select-none hover:bg-orange-400/50 hover:shadow-xl rounded-xl hover:p-4 group transition duration-700">
            <div className="w-full h-auto rounded-xl overflow-hidden transition duration-700">
                <img
                    src={product}
                    alt={title}
                    className="w-full h-full object-contain object-center group-hover:scale-125 transition duration-700"
                    draggable={false}
                />
            </div>
            <div className="text-white mt-3">
                <h3 className="text-base capitalize">{title}</h3>
                {/* price area */}
                <div className="flex gap-4">
                    {/* show offer Price, if avilable */}
                    {offerPrice && (
                        <p className="flex gap-[0.1rem] items-center text-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="w-5 h-5"
                            >
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                            </svg>
                            {offerPrice}
                        </p>
                    )}
                    {/* Original Price */}
                    <p
                        className={`flex gap-[0.1rem] items-center ${
                            offerPrice ? "line-through text-lg" : "text-xl"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="w-5 h-5"
                        >
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                        </svg>
                        {originalPrice}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default BannerProductCard;
