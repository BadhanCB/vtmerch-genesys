import americanExImg from "../../../assets/icon/american-express (1) 1.svg";
import amexImg from "../../../assets/icon/amex 1.svg";
import aplImg from "../../../assets/icon/apple-pay 1.svg";
import dinarsImg from "../../../assets/icon/diners-club 1.svg";
import paypalImg from "../../../assets/icon/paypal 1.svg";
import visaImg from "../../../assets/icon/visa 1.svg";
import visa2Img from "../../../assets/icon/visa 2.svg";

const CopyrightInfo = () => {
    return (
        <section className="px-4 sm:px-12 md:px-16 lg:px-24 xl:px-28 2xl:px-[9.25rem] py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 2xl:py-12 flex flex-wrap justify-center lg:justify-between items-center gap-6 text-center">
            <p>© 2024 Valuetainment Store. All rights reserved.</p>
            <ul className="flex gap-3">
                <li>
                    <a href="#">
                        <img src={visaImg} alt="visa" className="h-5 w-auto" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={aplImg}
                            alt="apple pay"
                            className="h-5 w-auto"
                        />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={dinarsImg}
                            alt="dinars table"
                            className="h-5 w-auto"
                        />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={visa2Img} alt="visa" className="h-5 w-auto" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={amexImg}
                            alt="amex pay"
                            className="h-5 w-auto"
                        />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={paypalImg}
                            alt="paypal"
                            className="h-5 w-auto"
                        />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={americanExImg}
                            alt="american express"
                            className="h-5 w-auto"
                        />
                    </a>
                </li>
            </ul>
        </section>
    );
};
export default CopyrightInfo;
