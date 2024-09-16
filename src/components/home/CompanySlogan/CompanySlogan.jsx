import quoteIcon from "../../../assets/icon/quotes.svg";
import avater from "../../../assets/img/img (5).png";

const CompanySlogan = () => {
    return (
        <section className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[5.625rem] py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12 bg-gradient-to-r from-[#EC3339] to-[#BB1117] relative">
            <img
                src={quoteIcon}
                alt="quote icon"
                className="w-16 md:w-28 lg:w-36 xl:w-44 2xl:w-[13.8125rem] h-16 md:h-28 lg:h-36 xl:h-44 2xl:h-[13.8125rem] relative -bottom-8 md:-bottom-10 lg:-bottom-12 xl:-bottom-16 2xl:-bottom-20 z-10"
            />

            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-montserrat font-bold leading-relaxed text-white uppercase relative z-20 w-full md:w-5/6 lg:w-3/4 xl:w-4/6 2xl:w-7/12">
                our mission is to enlighten, entertain and empower current and
                future leaders around the world.
            </h2>

            <div className="md:h-[calc(100%_+_100px)] relative md:absolute -bottom-4 md:bottom-0 md:right-12 md:z-[5]">
                <img
                    src={avater}
                    alt="avater"
                    className="h-full w-auto object-contain object-bottom"
                />
            </div>
        </section>
    );
};
export default CompanySlogan;
