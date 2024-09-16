import signeturePic from "../../../assets/img/pat-signature White 1.png";

const SignedCollectionContent = () => {
    return (
        <div className="font-montserrat uppercase order-2 md:order-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-medium mb leading-[1.5] mb-2 lg:mb-3 xl:mb-4">
                patrick bet-david{"'"}s
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] mb-8">
                signed <br /> collection
            </h2>
            <button className="font-inter bg-white text-black text-sm md:text-base uppercase px-4 md:px-8 py-2 md:py-4 rounded-lg md:rounded-xl flex justify-center items-center gap-2 lg:gap-3 xl:gap-4">
                shop now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 md:size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </button>
            <img src={signeturePic} alt="signeture pic" className="mt-10" />
        </div>
    );
};
export default SignedCollectionContent;
