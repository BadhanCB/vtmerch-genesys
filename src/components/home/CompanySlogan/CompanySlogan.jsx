import quoteIcon from "../../../assets/icon/quotes.svg";
import avater from "../../../assets/img/img (5).png";

const CompanySlogan = () => {
    return (
        <section className="px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-[9.375rem] py-12 md:py-14 lg:py-32 xl:py-44 2xl:py-[12.75rem] bg-gradient-to-r from-[#EC3339] to-[#BB1117] relative">
            {/* Quote icon */}
            <img
                src={quoteIcon}
                alt="quote icon"
                className="w-12 md:w-16 lg:w-32 xl:w-40 2xl:w-[13.8125rem] h-12 md:h-16 lg:h-32 xl:h-40 2xl:h-[13.8125rem] absolute top-4 left-6 md:top-4 md:left-10 lg:top-8 lg:left-16 xl:top-16 xl:left-24 2xl:top-[3.45rem] 2xl:left-[6rem] z-10"
            />

            {/* Company Slogan */}
            <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-5xl/[4rem] font-montserrat font-bold text-white uppercase w-full md:w-9/12 lg:w-8/12 xl:w-3/5 2xl:w-7/12">
                our mission is to enlighten, entertain and empower current and
                future leaders around the world.
            </p>

            {/* Avater Image */}
            <div className="h-40 md:h-[calc(100%_+_100px)] md:w-3/12 lg:w-4/12 xl:w-2/5 relative md:absolute -bottom-12 md:bottom-0 md:right-12 md:z-[5]">
                <img
                    src={avater}
                    alt="avater"
                    className="h-full w-auto object-contain object-right-bottom mx-auto"
                />
            </div>
        </section>
    );
};
export default CompanySlogan;
