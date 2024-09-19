import { useEffect, useRef, useState } from "react";

const BrandName = ({ isScrolled }) => {
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
        <h1
            ref={brandNameRef}
            className={`brand-name inline-block text-white uppercase font-extrabold font-montserrat tracking-widest transition-all duration-700 ${
                isScrolled
                    ? "text-2xl md:text-5xl lg:text-6xl xl:text-[2.75rem] 2xl:text-6xl"
                    : "text-3xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[7rem]"
            }`}
        >
            vtmerch
        </h1>
    );
};
export default BrandName;
