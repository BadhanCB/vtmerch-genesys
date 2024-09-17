import emailImg from "../../../assets/icon/email 1.svg";
import fbImg from "../../../assets/icon/facebook (4).svg";
import instaImg from "../../../assets/icon/instagram-logo (1).svg";
import linkedinImg from "../../../assets/icon/linkedin (3).svg";
import phoneImg from "../../../assets/icon/telephone (2) 1.svg";
import twImg from "../../../assets/icon/twitter (4).svg";

const ContactUs = () => {
    return (
        <div>
            <h3 className="text-xl font-medium capitalize mb-6">Contact us</h3>
            <div className="flex flex-col gap-4">
                <p>
                    Available between <time dateTime="08:00">8AM</time> to{" "}
                    <time dateTime="20:00">8PM</time>. Ready to answer your
                    questions.
                </p>
                <address className="flex gap-3">
                    <img
                        src={phoneImg}
                        alt="phone icon"
                        className="w-[1.125rem]"
                    />
                    <a href="tel:+8801773848167">01773848167</a>
                </address>
                <address className="flex gap-3">
                    <img
                        src={emailImg}
                        alt="email icon"
                        className="w-[1.125rem]"
                    />
                    <a href="mailto:badhan.cb@gmail.com">badhan.cb@gmail.com</a>
                </address>
                <ul className="flex gap-3">
                    <li>
                        <a href="">
                            <img
                                src={fbImg}
                                alt="facebook"
                                className="w-5 h-5"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src={twImg}
                                alt="twitter"
                                className="w-5 h-5"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src={linkedinImg}
                                alt="linkedin"
                                className="w-5 h-5"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src={instaImg}
                                alt="instagram"
                                className="w-5 h-5"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ContactUs;
