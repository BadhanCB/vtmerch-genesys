import quoteIcon from "../../../assets/icon/quotes.svg";
import avater from "../../../assets/img/img (5).png";

const CompanySlogan = () => {
    return (
        <section className="px-20 2xl:px-[5.625rem] py-12 bg-gradient-to-r from-[#EC3339] to-[#BB1117] relative">
            <img
                src={quoteIcon}
                alt="quote icon"
                className="w-52 h-52 2xl:w-[13.8125rem] 2xl:h-[13.8125rem] relative -bottom-20 z-10"
            />

            <h2 className="text-5xl font-montserrat font-bold leading-relaxed relative z-20 w-3/4">
                our mission is to enlighten, entertain and empower current and
                future leaders around the world.
            </h2>

            <div className="h-[40rem] absolute bottom-0 right-0">
                <img
                    src={avater}
                    alt="avater"
                    className="h-full w-auto object-contain"
                />
            </div>
        </section>
    );
};
export default CompanySlogan;
