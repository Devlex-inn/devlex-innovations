import { useState } from "react";

const faqs = [
    {
        question: "Project Horizon Redevelopment?",
        answer:
            "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
    },
    {
        question: "What is your professional passion?",
        answer:
            "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
    },
    {
        question: "Service Horizon Business low?",
        answer:
            "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
    },
    {
        question: "Business Solution Redevelopment?",
        answer:
            "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
    },
    {
        question: "Do you have any custom services?",
        answer:
            "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
    },
];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0); 

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div>
                <div className="bg-[url('/images/faq-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[300px] pt-5">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            FAQ
                        </h1>
                        <div className="border-2 rounded border-BorderColor-0 mt-8 sm:mt-5 inline-block px-8 py-2">
                            <ul className="flex sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start">
                                <li>
                                    <a href="/">
                                        <button className="font-Rajdhani font-medium text-lg text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z" />
                                                <path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
                                            </svg>
                                            Home
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <div className="text-white hidden sm:block">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <a href="/faq_inner">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            FAQ
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="relative overflow-hidden py-28 bg-BodyBg-0">
                    <div className="Container">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
                            <div className="relative faq-section">
                                <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                    IT Support For Business
                                </h5>
                                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4">
                                    Ensuring Your Success Trusted <br />
                                    IT Services Source
                                </h1>
                                <p className="font-Nunito text-TextColor2-0 pt-1 pb-10">
                                    Business tailored it design, management &amp; support services needs
                                    to be business agency elit, sed do eiusmod tempor proved.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-3 mb-10">
                                    <div>
                                        <img src="/images/faqs-1.jpg" draggable="false" />
                                    </div>
                                    <div>
                                        <img src="/images/faqs-2.jpg" draggable="false" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div>
                                        <img src="/images/faqs-icon-s.png" draggable="false" />
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        Business tailored it design, management &amp; support services
                                        busines agency elit sed do eiusmod tempor proved business task
                                        state of the art infrastructures for you.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full mx-auto">
                                <div>
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="mb-5 rounded-md overflow-hidden">
                                            <h2>
                                                <button
                                                    onClick={() => toggleFAQ(index)}
                                                    className={`faq-button2 rounded-md flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-7 xl:pr-6 py-4 w-full text-left font-semibold hover:bg-PrimaryColor-0 font-Nunito transition-all duration-500 group border border-BorderColor2-0 ${openIndex === index ? "bg-PrimaryColor-0 text-white" : "bg-white"
                                                        }`}
                                                    aria-expanded={openIndex === index}
                                                    aria-controls={`accordion-text-faqs-${index}`}
                                                >
                                                    <span className={` group-hover:text-white  transition !leading-5 duration-400 text-base sm:text-lg flex items-center gap-4 ${openIndex === index ? "text-white" : "text-HeadingColor-0"
                                                        }`}>
                                                        <img src="/images/faqs-icon1.png" draggable="false" className="size-[30px] transition-all duration-500" />
                                                        <span>{faq.question}</span>
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 448 512"
                                                        className={`transition group-hover:text-white duration-400 ${openIndex === index ? "rotate-180 text-white" : "text-HeadingColor-0"}`}
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                                    </svg>
                                                </button>
                                            </h2>
                                            <div
                                                id={`accordion-text-faqs-${index}`}
                                                role="region"
                                                aria-labelledby={`accordion-title-faqs-${index}`}
                                                className={`grid font-Nunito font-light leading-[26px] text-TextColor2-0 px-4 md:px-7 lg:px-6 xl:px-7 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 py-4 bg-custom" : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="pb-4 pt-4 text-sm sm:text-base font-Nunito" style={{color:'black'}}>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="relative bg-BodyBg-0 pt-28 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:-z-10 before:bg-[url('/images/subscribe-bg.jpg')] before:bg-cover before:bg-no-repeat before:bg-center">
                    <div className="Container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-4">
                                    Get Latest Update from Toptech <br />
                                    Stay Connect with Us
                                </h1>
                            </div>
                            <div className="flex lg:justify-end">
                                <form action="#" className="inline-block relative">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email1"
                                        placeholder="Enter Your E-Mail*"
                                        className="w-[288px] sm:w-[402px] h-[66px] py-2 px-6 rounded bg-transparent border border-white text-white font-Nunito placeholder:text-white"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-[6px] top-1/2 -translate-y-1/2 font-Nunito text-HeadingColor-0 h-[54px] w-[122px] rounded bg-white flex justify-center items-center"
                                    >
                                        Subcribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <section className="py-[90px] pb-[76px] rounded relative  bg-white z-10 shadow-inner mt-[74px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
                                <div>
                                    <div className="text-center group relative">
                                        <div className="inline-block m-auto relative">
                                            <div className="w-20 h-20 rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:-top-[10px] before:-left-[10px] before:w-[100px] before:h-[100px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
                                                <img src="/images/process2-1.png" draggable="false" />
                                            </div>
                                        </div>
                                        <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mt-9 mb-4">
                                            Account Register
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 w-11/12 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                                            Opportunities before extensible market Dramatically pursue us
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center group relative">
                                        <div className="inline-block m-auto relative">
                                            <div className="w-20 h-20 rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:-top-[10px] before:-left-[10px] before:w-[100px] before:h-[100px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
                                                <img src="/images/process2-2.png" draggable="false" />
                                            </div>
                                        </div>
                                        <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mt-9 mb-4">
                                            Add New Card
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 w-11/12 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                                            Opportunities before extensible market Dramatically pursue us
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center group relative">
                                        <div className="inline-block m-auto relative">
                                            <div className="w-20 h-20 rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:-top-[10px] before:-left-[10px] before:w-[100px] before:h-[100px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
                                                <img src="/images/process2-3.png" draggable="false" />
                                            </div>
                                        </div>
                                        <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl mt-9 mb-4">
                                            Varyfied Account
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 w-11/12 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                                            Opportunities before extensible market Dramatically pursue us
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section> */}
                {/* <div className="bg-[url('/images/brand-bg.jpg')] pt-[120px] pb-28 mt-[120px]">
                    <div className="Container relative z-10">
                        <div className="swiper swiper-initialized swiper-horizontal">
                            <div className="swiper-wrapper">
                                <div
                                    className="swiper-slide swiper-slide-active"
                                    style={{ width: 232, marginRight: 30 }}
                                    data-swiper-slide-index={0}
                                >
                                    <div>
                                        <img
                                            src="/images/brand-1.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-next"
                                    style={{ width: 232, marginRight: 30 }}
                                    data-swiper-slide-index={1}
                                >
                                    <div>
                                        <img
                                            src="/images/brand-2.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide"
                                    style={{ width: 232, marginRight: 30 }}
                                    data-swiper-slide-index={2}
                                >
                                    <div>
                                        <img
                                            src="/images/brand-3.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide"
                                    style={{ width: 232, marginRight: 30 }}
                                    data-swiper-slide-index={3}
                                >
                                    <div>
                                        <img
                                            src="/images/brand-4.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide"
                                    style={{ width: 232, marginRight: 30 }}
                                    data-swiper-slide-index={4}
                                >
                                    <div>
                                        <img
                                            src="/images/brand-5.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide"
                                    data-swiper-slide-index={5}
                                    style={{ width: 232, marginRight: 30 }}
                                >
                                    <div>
                                        <img
                                            src="/images/brand-1.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Faq


