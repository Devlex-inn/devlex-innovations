const Service = () => {
    return (
        <>
            <div className="relative">
                <div className="fixed bottom-10 text-white right-6 z-50 bg-PrimaryColor-0 border-2 border-white rounded-full h-12 w-12 cursor-pointer animate-movebtn flex justify-center items-center hover:border-PrimaryColor-0 hover:bg-white hover:text-PrimaryColor-0 hover:animate-none">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 384 512"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                    </svg>
                </div>
            </div>
            <div>
                <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[500px] pt-20">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            Our Services
                        </h1>
                        <div className="border-2 rounded border-BorderColor-0 mt-8 sm:mt-5 inline-block px-8 py-2">
                            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start">
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
                                    <a href="/service">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Our Services
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="pt-28 pb-[120px] p relative z-10 bg-BodyBg-0">
                    <div className="Container">
                        <div className="text-center">
                            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                IT Support For Business
                            </h5>
                            <h1 className="font-Rajdhani font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
                                Ensuring Your Success Trusted <br />
                                IT Services Source
                            </h1>
                        </div>
                        <div className="mt-[88px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[68px]">
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon1.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Cloud Services
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon2.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                IT Management
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon4.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Software Renew
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon3.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Machine Learning
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon5.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Digital Marketing
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon6.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Web Development
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon6.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Cyber Security
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-xl bg-white group relative z-10 pt-[76px] text-center px-8 pb-7">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                                            <div className="size-[86px] rounded-full bg-BodyBg-0 border-2 border-white flex justify-center items-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 group-hover:before:-bottom-2">
                                                <img src="/images/service-icon6.png" draggable="false" />
                                            </div>
                                        </div>
                                        <a href="/service_details">
                                            <button className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0">
                                                Data Analytic
                                            </button>
                                        </a>
                                        <p className="font-Nunito text-TextColor2-0 pt-2 pb-6">
                                            Monotonectal grants to business visualize provid solution
                                            services business provid done
                                        </p>
                                        <a href="/service_details">
                                            <button className="font-Nunito text-white border border-PrimaryColor-0 rounded-full font-medium flex items-center justify-center gap-2 w-full py-2 transition-all duration-500 group-hover:text-HeadingColor-0 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-100 group-hover:before:scale-0">
                                                Learn More
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative bg-BodyBg-0 py-28 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:-z-10 before:bg-[url('/images/subscribe-bg.jpg')] before:bg-cover before:bg-no-repeat before:bg-center">
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
                        <section className="py-[90px] pb-[76px] rounded relative bg-white z-10 shadow-inner mt-[74px]">
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
                                        <p className="font-Nunito text-TextColor2-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
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
                                        <p className="font-Nunito text-TextColor2-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
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
                                        <p className="font-Nunito text-TextColor2-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                                            Opportunities before extensible market Dramatically pursue us
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Service;