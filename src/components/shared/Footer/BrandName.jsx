import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/logo/valuetainment_red.svg";
const BrandName = () => {
    const brandNameRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsIntersecting(entries[0].isIntersecting);

                if (entries[0].isIntersecting) {
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(brandNameRef.current);

        const splitText = brandNameRef.current.textContent.split("");
        brandNameRef.current.textContent = "";

        for (let i = 0; i < splitText.length; i++) {
            brandNameRef.current.innerHTML +=
                "<span>" + splitText[i] + "</span>";
        }

        if (isIntersecting) {
            let char = 0;
            const onTick = () => {
                const span =
                    brandNameRef.current.querySelectorAll("span")[char];
                span.classList.add("fade");
                char++;
                if (char === splitText.length) {
                    clearInterval(timer);
                    timer = null;
                }
            };

            let timer = setInterval(onTick, 50);
        }
    }, [isIntersecting]);

    return (
        <div className="flex items-center gap-3">
            <img
                src={logo}
                alt="Brand logo"
                className={`w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28 transition-opacity duration-1000 ${
                    isIntersecting ? "opacity-100" : "opacity-0"
                }`}
            />
            <h1
                ref={brandNameRef}
                className="brand-name inline-block uppercase font-extrabold font-montserrat tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[6.25rem]"
            >
                vtmerch
            </h1>
        </div>
    );
};
export default BrandName;
