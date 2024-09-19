const SizeVariant = ({ productSize, setProductSize, size }) => {
    const isSelected = productSize === size.toLowerCase();

    return (
        <div
            onClick={() => setProductSize(size.toLowerCase())}
            className={`px-2 md:px-3 lg:px-4 py-1 md:py-2 border-[0.5px] border-[#27231280]/50 uppercase cursor-pointer hover:bg-yellow-300 ${
                isSelected
                    ? "bg-slate-800 text-slate-50"
                    : "bg-transparent text-black"
            }`}
        >
            {size}
        </div>
    );
};
export default SizeVariant;
