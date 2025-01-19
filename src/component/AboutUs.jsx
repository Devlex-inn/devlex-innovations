const About = () => {
    return (
        <>
            <div>
                <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[200px] sm:h-[530px] pt-0 sm:pt-10">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            About Us
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
                                    <a href="/about">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            About Us
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="bg-[url(/images/about-images-bg.png)] bg-cover pt-10 lg:pt-[222px] 2xl:pt-[270px] relative">
                    <img
                        src="/images/feature-image.png"
                        draggable="false"
                        className="absolute right-0 -top-[50%] xl:-top-[68%] 2xl:-top-[72%] hidden lg:w-[60%] 2xl:w-[inherit] lg:block"
                    />
                    <div className="relative z-10 -mb-[118px]">
                        <div className="Container">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
                                <div>
                                    <div className="text-center border border-BorderColor2-0 transition-all duration-500 hover:border-SecondaryColor-0 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-[38px] pb-8 rounded-lg bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
                                        <div className="relative text-center z-10">
                                            <img
                                                src="/images/feature-icon-1.png"
                                                draggable="false"
                                                className="m-auto transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                            />
                                        </div>
                                        <h4 className="font-Rajdhani font-semibold text-2xl sm:text-[22px] lg:text-xl 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-8 mb-2">
                                            22+ Year Experience
                                        </h4>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
                                            Completely fashion reliable more products grow business
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center border border-BorderColor2-0 transition-all duration-500 hover:border-SecondaryColor-0 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-[38px] pb-8 rounded-lg bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
                                        <div className="relative text-center z-10">
                                            <img
                                                src="/images/feature-icon-2.png"
                                                draggable="false"
                                                className="m-auto transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                            />
                                        </div>
                                        <h4 className="font-Rajdhani font-semibold text-2xl sm:text-[22px] lg:text-xl 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-8 mb-2">
                                            Dedicated Members
                                        </h4>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
                                            Completely fashion reliable more products grow business
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center border border-BorderColor2-0 transition-all duration-500 hover:border-SecondaryColor-0 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-[38px] pb-8 rounded-lg bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
                                        <div className="relative text-center z-10">
                                            <img
                                                src="/images/feature-icon-3.png"
                                                draggable="false"
                                                className="m-auto transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                            />
                                        </div>
                                        <h4 className="font-Rajdhani font-semibold text-2xl sm:text-[22px] lg:text-xl 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-8 mb-2">
                                            Valuable Supports
                                        </h4>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
                                            Completely fashion reliable more products grow business
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center border border-BorderColor2-0 transition-all duration-500 hover:border-SecondaryColor-0 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-[38px] pb-8 rounded-lg bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
                                        <div className="relative text-center z-10">
                                            <img
                                                src="/images/feature-icon-4.png"
                                                draggable="false"
                                                className="m-auto transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                            />
                                        </div>
                                        <h4 className="font-Rajdhani font-semibold text-2xl sm:text-[22px] lg:text-xl 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-8 mb-2">
                                            Valuable Supports
                                        </h4>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
                                            Completely fashion reliable more products grow business
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[238px] pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative">
                    <div className="Container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
                            <div className="relative z-10">
                                <img
                                    src="/images/about-inner-thumb2.png"
                                    draggable="false"
                                    className="md:w-full 2xl:-ml-[38px] 2xl:max-w-[inherit]"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
                                    <div className="bg-PrimaryColor-0 border-[6px] border-white pb-6 pt-5 flex flex-col justify-center overflow-hidden rounded-full h-[117px] sm:h-[214px] lg:h-[180px] xl:h-[214px] w-[92px] sm:w-[214px] lg:w-[180px] xl:w-[214px] items-center text-center relative z-10">
                                        <img src="/images/about-counter-icon.png" draggable="false" />
                                        <span className="text-3xl sm:text-[45px] font-Rajdhani font-bold text-white mt-2 mb-2">
                                            283k+
                                        </span>
                                        <h6 className="font-Rajdhani font-semibold text-white">
                                            Complete Projects
                                        </h6>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 sm:flex gap-5 items-center animate-dance3 hidden bg-SecondaryColor-0 px-12 py-[18px] rounded-lg">
                                    <div>
                                        <img src="/images/about-award-icon.png" width={62} height={52} draggable="false" />
                                    </div>
                                    <div>
                                        <h5 className="font-Rajdhani font-semibold text-xl leading-8 text-white">
                                            Award Wining
                                        </h5>
                                        <h5 className="font-Rajdhani font-semibold text-xl leading-8 text-white border-t">
                                            Best Services
                                        </h5>
                                    </div>
                                </div>

                                <img
                                    src="/images/about-inner-shape.png"
                                    draggable="false"
                                    className="absolute bottom-10 left-24 -z-10 animate-movebtn hidden sm:block"
                                />
                            </div>
                            <div className="relative">
                                <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                    IT Support For Business
                                </h5>
                                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4">
                                    Ensuring Your Success Trusted <br />
                                    IT Services Source
                                </h1>
                                <p className="font-Nunito text-TextColor2-0 pb-8">
                                    Monotonectally synergize granular markets and front markets.
                                    Collaboratively visualize strategic infomediaries after multimedia
                                    based models. Synergistically task state of the art infrastructures
                                    for
                                </p>
                                <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 items-center mb-8">
                                    <ul>
                                        <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                                            <span className="text-PrimaryColor-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    height={24}
                                                    width={24}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                                                </svg>
                                            </span>
                                            Company and Research
                                        </li>
                                        <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                                            <span className="text-PrimaryColor-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    height={24}
                                                    width={24}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                                                </svg>
                                            </span>
                                            Business and research
                                        </li>
                                    </ul>
                                    <div className="flex items-center gap-6 lg:gap-2 xl:gap-6">
                                        <span
                                            className="text-xl sm:text-[22px] font-Rajdhani flex items-center justify-center font-semibold text-PrimaryColor-0 size-[65px] rounded-full border-2 border-PrimaryColor-0"
                                        >
                                            45%
                                        </span>
                                        <div>
                                            <h4 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl text-HeadingColor-0">
                                                Solution Business
                                            </h4>
                                            <p className="font-Nunito text-lg text-TextColor2-0">
                                                Level is high
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 px-7 py-6 bg-[#eff6fe] rounded-md">
                                    <div>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            className="text-PrimaryColor-0"
                                            height={32}
                                            width={32}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z" />
                                        </svg>
                                    </div>
                                    <p className="italic font-Nunito text-lg text-TextColor2-0">
                                        If you are accused of committing a crime, you will the very best
                                        criminal defense attorneys.
                                    </p>
                                </div>
                                <a className="mt-9 inline-block" href="/about">
                                    <button className="primary-btn">
                                        More About
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            height={20}
                                            width={20}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12.006 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.928 9.928 0 0 0-7.071-2.922zm5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313 1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z" />
                                            <path d="m11.467 11.125-3.214 3.214 1.414 1.414 3.214-3.214 2.125 2.124V9H9.343z" />
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" pt-28 bg-SecondaryColor-0">
                    <div className="Container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 items-center justify-center">
                            <div>
                                <div className="sm:text-center relative z-10">
                                    <div className="flex flex-col sm:flex-row gap-7 items-start sm:items-center">
                                        <div className="relative before:absolute before:-bottom-5 before:left-0 before:w-full before:h-[1px] before:bg-PrimaryColor-0 ">
                                            <span className="font-Rajdhani text-[70px] leading-10 text-white font-bold">
                                                22+
                                            </span>
                                        </div>
                                        <div className="!block text-left">
                                            <p className="font-Rajdhani text-[22px] text-white font-semibold uppercase">
                                                Years Experience
                                            </p>
                                            <p className="font-Nunito text-TextColor-0 pt-2">
                                                Profesionaly optimize Design team feature main issue don.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sm:text-center relative z-10">
                                    <div className="flex flex-col sm:flex-row gap-7 items-start sm:items-center">
                                        <div className="relative before:absolute before:-bottom-5 before:left-0 before:w-full before:h-[1px] before:bg-PrimaryColor-0 ">
                                            <span className="font-Rajdhani text-[70px] leading-10 text-white font-bold">
                                                86%
                                            </span>
                                        </div>
                                        <div className="!block text-left">
                                            <p className="font-Rajdhani text-[22px] text-white font-semibold uppercase">
                                                Client Satisfaction
                                            </p>
                                            <p className="font-Nunito text-TextColor-0 pt-2">
                                                Profesionaly optimize Design team feature main issue don.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sm:text-center relative z-10">
                                    <div className="flex flex-col sm:flex-row gap-7 items-start sm:items-center">
                                        <div className="relative before:absolute before:-bottom-5 before:left-0 before:w-full before:h-[1px] before:bg-PrimaryColor-0 ">
                                            <span className="font-Rajdhani text-[70px] leading-10 text-white font-bold">
                                                25+
                                            </span>
                                        </div>
                                        <div className="!block text-left">
                                            <p className="font-Rajdhani text-[22px] text-white font-semibold uppercase">
                                                Awards Wining
                                            </p>
                                            <p className="font-Nunito text-TextColor-0 pt-2">
                                                Profesionaly optimize Design team feature main issue don.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-28 pb-[120px] bg-SecondaryColor-0 relative z-10">
                    <div className="Container">
                        <div className="grid gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h5 className="font-Rajdhani text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 256 256"
                                        height={14}
                                        width={14}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z" />
                                    </svg>
                                    OUT TOPTECH SERVICES
                                </h5>
                                <h1 className="font-Rajdhani font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-4 mb-4">
                                    Let’s Discover Our Service
                                    <br /> Features Charter.
                                </h1>
                            </div>
                            <div className="flex lg:justify-end">
                                <a href="/contact">
                                    <button className="primary-btn4">Make An Appointment</button>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[34px]">
                            <div>
                                <div className="px-[30px] lg:px-7 xl:px-[30px] pt-9 pb-[34px] rounded-lg bg-transparent group overflow-hidden border border-BorderColor-0 transition-all duration-500 hover:border-PrimaryColor-0 relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0">
                                    <div className="relative pb-8 z-10">
                                        <img
                                            src="/images/service7.png"
                                            draggable="false"
                                            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                        />
                                    </div>
                                    <a href="/service_details">
                                        <button className="font-Rajdhani text-left font-semibold text-[22px] sm:text-2xl lg:text-xl xl:text-2xl pb-4 text-white">
                                            Business Planning
                                        </button>
                                    </a>
                                    <p className="font-Nunito text-TextColor-0 transition-all duration-500 group-hover:text-white pb-7">
                                        Morem area are psum dolor com sitteme odern sectet aweur chat
                                        adipiscing always.
                                    </p>
                                    <a href="/service_details">
                                        <button className="header-btn !bg-[#ffffff1a] !border-none !px-7 !rounded-full uppercase font-Rajdhani !flex gap-2 items-center group-hover:before:w-full group-hover:before:left-0">
                                            Read More
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="px-[30px] lg:px-7 xl:px-[30px] pt-9 pb-[34px] rounded-lg bg-transparent group overflow-hidden border border-BorderColor-0 transition-all duration-500 hover:border-PrimaryColor-0 relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0">
                                    <div className="relative pb-8 z-10">
                                        <img
                                            src="/images/service8.png"
                                            draggable="false"
                                            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                        />
                                    </div>
                                    <a href="/service_details">
                                        <button className="font-Rajdhani text-left font-semibold text-[22px] sm:text-2xl lg:text-xl xl:text-2xl pb-4 text-white">
                                            Problem-Solving
                                        </button>
                                    </a>
                                    <p className="font-Nunito text-TextColor-0 transition-all duration-500 group-hover:text-white pb-7">
                                        Morem area are psum dolor com sitteme odern sectet aweur chat
                                        adipiscing always.
                                    </p>
                                    <a href="/service_details">
                                        <button className="header-btn !bg-[#ffffff1a] !border-none !px-7 !rounded-full uppercase font-Rajdhani !flex gap-2 items-center group-hover:before:w-full group-hover:before:left-0">
                                            Read More
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="px-[30px] lg:px-7 xl:px-[30px] pt-9 pb-[34px] rounded-lg bg-transparent group overflow-hidden border border-BorderColor-0 transition-all duration-500 hover:border-PrimaryColor-0 relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0">
                                    <div className="relative pb-8 z-10">
                                        <img
                                            src="/images/service9.png"
                                            draggable="false"
                                            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                        />
                                    </div>
                                    <a href="/service_details">
                                        <button className="font-Rajdhani text-left font-semibold text-[22px] sm:text-2xl lg:text-xl xl:text-2xl pb-4 text-white">
                                            Project Reporting
                                        </button>
                                    </a>
                                    <p className="font-Nunito text-TextColor-0 transition-all duration-500 group-hover:text-white pb-7">
                                        Morem area are psum dolor com sitteme odern sectet aweur chat
                                        adipiscing always.
                                    </p>
                                    <a href="/service_details">
                                        <button className="header-btn !bg-[#ffffff1a] !border-none !px-7 !rounded-full uppercase font-Rajdhani !flex gap-2 items-center group-hover:before:w-full group-hover:before:left-0">
                                            Read More
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="px-[30px] lg:px-7 xl:px-[30px] pt-9 pb-[34px] rounded-lg bg-transparent group overflow-hidden border border-BorderColor-0 transition-all duration-500 hover:border-PrimaryColor-0 relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0">
                                    <div className="relative pb-8 z-10">
                                        <img
                                            src="/images/service10.png"
                                            draggable="false"
                                            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                                        />
                                    </div>
                                    <a href="/service_details">
                                        <button className="font-Rajdhani text-left font-semibold text-[22px] sm:text-2xl lg:text-xl xl:text-2xl pb-4 text-white">
                                            Professional Team
                                        </button>
                                    </a>
                                    <p className="font-Nunito text-TextColor-0 transition-all duration-500 group-hover:text-white pb-7">
                                        Morem area are psum dolor com sitteme odern sectet aweur chat
                                        adipiscing always.
                                    </p>
                                    <a href="/service_details">
                                        <button className="header-btn !bg-[#ffffff1a] !border-none !px-7 !rounded-full uppercase font-Rajdhani !flex gap-2 items-center group-hover:before:w-full group-hover:before:left-0">
                                            Read More
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/* <section className="pt-[86px] pb-28 bg-[url('/images/counter-bg.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="Container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-4 items-center justify-center">
                            <div>
                                <div className="text-center">
                                    <div className="mt-3">
                                        <span className="font-Rajdhani text-[56px] text-bleack
                                         font-bold">
                                            10K+
                                        </span>
                                    </div>
                                    <p className="font-Nunito text-[15px] text-TextColor-0 uppercase">
                                        HAPPY CUSTOMERS
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="text-center">
                                    <div className="mt-3">
                                        <span className="font-Rajdhani text-[56px] text-white font-bold">
                                            20K+
                                        </span>
                                    </div>
                                    <p className="font-Nunito text-[15px] text-TextColor-0 uppercase">
                                        WORKS COMPLETED
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="text-center">
                                    <div className="mt-3">
                                        <span className="font-Rajdhani text-[56px] text-white font-bold">
                                            99
                                        </span>
                                    </div>
                                    <p className="font-Nunito text-[15px] text-TextColor-0 uppercase">
                                        EXPERT MEMBERS
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="text-center">
                                    <div className="mt-3">
                                        <span className="font-Rajdhani text-[56px] text-white font-bold">
                                            100%
                                        </span>
                                    </div>
                                    <p className="font-Nunito text-[15px] text-TextColor-0 uppercase">
                                        SATISFACTION RATES
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="testimonial py-28 bg-[url(/images/testi-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden">
                    <div className="Container">
                        <div className="text-center">
                            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                Testimonial
                            </h5>
                            <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0e mt-[18px]">
                                Customer’s Awesome Feedback <br />
                                About Our Services
                            </h1>
                        </div>
                        <div className="mt-[46px]">
                            <div className="swiper swiper-initialized swiper-horizontal">
                                <div className="swiper-wrapper">
                                    <div
                                        className="swiper-slide swiper-slide-active"
                                        style={{ width: 1280, marginRight: 30 }}
                                        data-swiper-slide-index={0}
                                    >
                                        <div className="pt-[80px] md:pt-[150px]">
                                            <div className="relative text-center">
                                                <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                                                    Completely extend leveraged customer service rather than
                                                    performance based imperatives. magnetic relationships rather
                                                    than leveraged e-markets. Rapidiously transform timely
                                                    niches technology. Enthusiastically e-enable global
                                                    e-markets for cooperative e-business. Authoritatively
                                                    deliver highly efficient expertise
                                                </p>
                                                <ul className="flex gap-[6px] items-center justify-center mb-7 mt-6">
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                                <h5 className="font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-2xl pt-7 mb-1 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
                                                    Anjelina Watson
                                                </h5>
                                                <p className="font-Nunito text-TextColor2-0">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-next"
                                        style={{ width: 1280, marginRight: 30 }}
                                        data-swiper-slide-index={1}
                                    >
                                        <div className="pt-[80px] md:pt-[150px]">
                                            <div className="relative text-center">
                                                <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                                                    Completely extend leveraged customer service rather than
                                                    performance based imperatives. magnetic relationships rather
                                                    than leveraged e-markets. Rapidiously transform timely
                                                    niches technology. Enthusiastically e-enable global
                                                    e-markets for cooperative e-business. Authoritatively
                                                    deliver highly efficient expertise
                                                </p>
                                                <ul className="flex gap-[6px] items-center justify-center mb-7 mt-6">
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                                <h5 className="font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-2xl pt-7 mb-1 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
                                                    Anjelina Watson
                                                </h5>
                                                <p className="font-Nunito text-TextColor2-0">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: 1280, marginRight: 30 }}
                                        data-swiper-slide-index={2}
                                    >
                                        <div className="pt-[80px] md:pt-[150px]">
                                            <div className="relative text-center">
                                                <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                                                    Completely extend leveraged customer service rather than
                                                    performance based imperatives. magnetic relationships rather
                                                    than leveraged e-markets. Rapidiously transform timely
                                                    niches technology. Enthusiastically e-enable global
                                                    e-markets for cooperative e-business. Authoritatively
                                                    deliver highly efficient expertise
                                                </p>
                                                <ul className="flex gap-[6px] items-center justify-center mb-7 mt-6">
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                                <h5 className="font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-2xl pt-7 mb-1 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
                                                    Anjelina Watson
                                                </h5>
                                                <p className="font-Nunito text-TextColor2-0">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        style={{ width: 1280, marginRight: 30 }}
                                        data-swiper-slide-index={3}
                                    >
                                        <div className="pt-[80px] md:pt-[150px]">
                                            <div className="relative text-center">
                                                <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                                                    Completely extend leveraged customer service rather than
                                                    performance based imperatives. magnetic relationships rather
                                                    than leveraged e-markets. Rapidiously transform timely
                                                    niches technology. Enthusiastically e-enable global
                                                    e-markets for cooperative e-business. Authoritatively
                                                    deliver highly efficient expertise
                                                </p>
                                                <ul className="flex gap-[6px] items-center justify-center mb-7 mt-6">
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                                <h5 className="font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-2xl pt-7 mb-1 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
                                                    Anjelina Watson
                                                </h5>
                                                <p className="font-Nunito text-TextColor2-0">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        data-swiper-slide-index={4}
                                        style={{ width: 1280, marginRight: 30 }}
                                    >
                                        <div className="pt-[80px] md:pt-[150px]">
                                            <div className="relative text-center">
                                                <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                                                    Completely extend leveraged customer service rather than
                                                    performance based imperatives. magnetic relationships rather
                                                    than leveraged e-markets. Rapidiously transform timely
                                                    niches technology. Enthusiastically e-enable global
                                                    e-markets for cooperative e-business. Authoritatively
                                                    deliver highly efficient expertise
                                                </p>
                                                <ul className="flex gap-[6px] items-center justify-center mb-7 mt-6">
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                    <li className="text-[#ffb50a] text-xl">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                                <h5 className="font-Rajdhani font-semibold inline-block text-HeadingColor-0 text-2xl pt-7 mb-1 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
                                                    Anjelina Watson
                                                </h5>
                                                <p className="font-Nunito text-TextColor2-0">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                    <span className="swiper-pagination-bullet pagination-bullet swiper-pagination-bullet-active" />
                                    <span className="swiper-pagination-bullet pagination-bullet" />
                                    <span className="swiper-pagination-bullet pagination-bullet" />
                                    <span className="swiper-pagination-bullet pagination-bullet" />
                                    <span className="swiper-pagination-bullet pagination-bullet" />
                                </div>
                                <div className="flex justify-between w-full absolute px-0 top-[80%] md:top-[60%] lg:top-1/2">
                                    <button className="w-[60px] h-[60px] rounded-full overflow-hidden relative bg-white flex items-center text-2xl text-PrimaryColor-0 hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z" />
                                        </svg>
                                    </button>
                                    <button className="w-[60px] h-[60px] rounded-full overflow-hidden relative bg-white flex items-center text-2xl text-PrimaryColor-0 hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="bg-[url('/images/brand-bg.jpg')] bg-no-repeat bg-center bg-cover pt-[120px] pb-28">
                    <div className="Container relative z-10">
                        <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
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
                <section className="py-20">
                    <div className="Container">
                        <div className="text-center">
                            <h5 className="font-Rajdhani text-lg font-semibold #9C5EEE">
                                Latest Blog
                            </h5>
                            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
                                Latest Inshights From Our Blog
                            </h1>
                        </div>
                        <div className="mt-[46px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                                <div className="bg-[#f1f1]">
                                    <div className="group p-5 transition-all duration-500 bg-white rounded-md">
                                        <div className="relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
                                            <img
                                                src="images/blog1.png"
                                                className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
                                            />
                                        </div>
                                        <div className="rounded-md relative z-20 flex justify-center bg-white transition-all duration-500 sm:px-3 lg:px-3 2xl:px-3 pt-7">
                                            <div>
                                                <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 mb-2">
                                                    <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
                                                        <span className="#9C5EEE">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 448 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                                            </svg>
                                                        </span>
                                                        24 Mar, 2024
                                                    </p>
                                                    <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
                                                        <span className="#9C5EEE text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 256 256"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
                                                            </svg>
                                                        </span>
                                                        Admin
                                                    </p>
                                                </div>
                                                <a href="/blog_details">
                                                    <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:#9C5EEE mt-2 mb-5">
                                                        Most Popular Chrome Extensionfor Business Promot
                                                    </button>
                                                </a>
                                                <a className="inline-block" href="/blog_details">
                                                    <button className="flex items-center gap-2 text-HeadingColor-0 text-lg font-Rajdhani font-medium transition-all duration-500 group-hover:#9C5EEE">
                                                        Read More
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#f1f1]">
                                    <div className="group p-5 transition-all duration-500 bg-white rounded-md">
                                        <div className="relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
                                            <img
                                                src="images/blog2.png"
                                                className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
                                            />
                                        </div>
                                        <div className="rounded-md relative z-20 flex justify-center bg-white transition-all duration-500 sm:px-3 lg:px-3 2xl:px-3 pt-7">
                                            <div>
                                                <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 mb-2">
                                                    <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
                                                        <span className="#9C5EEE">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 448 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                                            </svg>
                                                        </span>
                                                        24 Mar, 2024
                                                    </p>
                                                    <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
                                                        <span className="#9C5EEE text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 256 256"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
                                                            </svg>
                                                        </span>
                                                        Admin
                                                    </p>
                                                </div>
                                                <a href="/blog_details">
                                                    <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:#9C5EEE mt-2 mb-5">
                                                        How to Secure your facebook Business Account
                                                    </button>
                                                </a>
                                                <a className="inline-block" href="/blog_details">
                                                    <button className="flex items-center gap-2 text-HeadingColor-0 text-lg font-Rajdhani font-medium transition-all duration-500 group-hover:#9C5EEE">
                                                        Read More
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#f1f1]">
                                    <div className="group p-5 transition-all duration-500 bg-white rounded-md">
                                        <div className="relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
                                            <img
                                                src="images/blog3.png"
                                                className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
                                            />
                                        </div>
                                        <div className="rounded-md relative z-20 flex justify-center bg-white transition-all duration-500 sm:px-3 lg:px-3 2xl:px-3 pt-7">
                                            <div>
                                                <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 mb-2">
                                                    <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
                                                        <span className="#9C5EEE">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 448 512"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                                            </svg>
                                                        </span>
                                                        24 Mar, 2024
                                                    </p>
                                                    <p className="font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]">
                                                        <span className="#9C5EEE text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 256 256"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
                                                            </svg>
                                                        </span>
                                                        Admin
                                                    </p>
                                                </div>
                                                <a href="/blog_details">
                                                    <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:#9C5EEE mt-2 mb-5">
                                                        Better Context Menus With Safe Triangles
                                                    </button>
                                                </a>
                                                <a className="inline-block" href="/blog_details">
                                                    <button className="flex items-center gap-2 text-HeadingColor-0 text-lg font-Rajdhani font-medium transition-all duration-500 group-hover:#9C5EEE">
                                                        Read More
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center py-28 relative">
                    <div className="Container">
                        <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                    Dedicated Team
                                </h5>
                                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
                                    Meet Our Dedicated Member <br />
                                    For Any Enquery
                                </h1>
                            </div>
                            <div className="flex lg:justify-end">
                                <a href="/team_inner">
                                    <button className="primary-btn">
                                        All Member
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            height={22}
                                            width={22}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-[52px]">
                            <div>
                                <div className="group relative">
                                    <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                                        <img
                                            src="/images/team-1.png"
                                            className="w-full xl:w-[inherit] m-auto"
                                        />
                                    </div>
                                    <div className="bg-white relative transition-all duration-500 [clip-path:polygon(0_0,_100%_0%,_100%_100%,_50%_84%,_0_100%)] rounded-md text-center pt-[22px] pb-10 rounded-b-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/team-shape.png')] before:bg-no-repeat before:bg-cover before:-z-10 before:rounded-md group-hover:bg-PrimaryColor-0 group-hover:-mt-9">
                                        <h5 className="font-Rajdhani font-semibold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
                                            Connie Diaz
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                                            CEO &amp; Founder
                                        </p>
                                        <ul className="flex gap-4 justify-center mb-[6px]  transition-all duration-500 group-hover:mb-7 group-hover:mt-[14px]">
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 320 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 448 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 384 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                        <button className="w-11 h-11 rounded-full transition-all duration-500 overflow-hidden bg-PrimaryColor-0 relative z-10 text-white flex justify-center items-center text-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fefefc] before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx={128}
                                                    cy={256}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={112}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={400}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <path
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    d="m169.83 279.53 172.34 96.94m0-240.94-172.34 96.94"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group relative">
                                    <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                                        <img
                                            src="/images/team-2.png"
                                            className="w-full xl:w-[inherit] m-auto"
                                        />
                                    </div>
                                    <div className="bg-white relative transition-all duration-500 [clip-path:polygon(0_0,_100%_0%,_100%_100%,_50%_84%,_0_100%)] rounded-md text-center pt-[22px] pb-10 rounded-b-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/team-shape.png')] before:bg-no-repeat before:bg-cover before:-z-10 before:rounded-md group-hover:bg-PrimaryColor-0 group-hover:-mt-9">
                                        <h5 className="font-Rajdhani font-semibold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
                                            James E. Huey
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                                            Co Founder
                                        </p>
                                        <ul className="flex gap-4 justify-center mb-[6px]  transition-all duration-500 group-hover:mb-7 group-hover:mt-[14px]">
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 320 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 448 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 384 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                        <button className="w-11 h-11 rounded-full transition-all duration-500 overflow-hidden bg-PrimaryColor-0 relative z-10 text-white flex justify-center items-center text-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fefefc] before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx={128}
                                                    cy={256}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={112}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={400}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <path
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    d="m169.83 279.53 172.34 96.94m0-240.94-172.34 96.94"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group relative">
                                    <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                                        <img
                                            src="/images/team-3.png"
                                            className="w-full xl:w-[inherit] m-auto"
                                        />
                                    </div>
                                    <div className="bg-white relative transition-all duration-500 [clip-path:polygon(0_0,_100%_0%,_100%_100%,_50%_84%,_0_100%)] rounded-md text-center pt-[22px] pb-10 rounded-b-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/team-shape.png')] before:bg-no-repeat before:bg-cover before:-z-10 before:rounded-md group-hover:bg-PrimaryColor-0 group-hover:-mt-9">
                                        <h5 className="font-Rajdhani font-semibold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
                                            Jone D. Alexon
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                                            IT Expert
                                        </p>
                                        <ul className="flex gap-4 justify-center mb-[6px]  transition-all duration-500 group-hover:mb-7 group-hover:mt-[14px]">
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 320 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 448 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 384 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                        <button className="w-11 h-11 rounded-full transition-all duration-500 overflow-hidden bg-PrimaryColor-0 relative z-10 text-white flex justify-center items-center text-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fefefc] before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx={128}
                                                    cy={256}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={112}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={400}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <path
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    d="m169.83 279.53 172.34 96.94m0-240.94-172.34 96.94"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group relative">
                                    <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                                        <img
                                            src="/images/team-4.png"
                                            className="w-full xl:w-[inherit] m-auto"
                                        />
                                    </div>
                                    <div className="bg-white relative transition-all duration-500 [clip-path:polygon(0_0,_100%_0%,_100%_100%,_50%_84%,_0_100%)] rounded-md text-center pt-[22px] pb-10 rounded-b-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/team-shape.png')] before:bg-no-repeat before:bg-cover before:-z-10 before:rounded-md group-hover:bg-PrimaryColor-0 group-hover:-mt-9">
                                        <h5 className="font-Rajdhani font-semibold text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
                                            June D. Vargas
                                        </h5>
                                        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                                            Hr. Maneger
                                        </p>
                                        <ul className="flex gap-4 justify-center mb-[6px]  transition-all duration-500 group-hover:mb-7 group-hover:mt-[14px]">
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 320 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 448 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <button className="text-base text-white transition-all duration-500 hover:text-white">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 384 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                        <button className="w-11 h-11 rounded-full transition-all duration-500 overflow-hidden bg-PrimaryColor-0 relative z-10 text-white flex justify-center items-center text-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fefefc] before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx={128}
                                                    cy={256}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={112}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <circle
                                                    cx={384}
                                                    cy={400}
                                                    r={48}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                />
                                                <path
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                    d="m169.83 279.53 172.34 96.94m0-240.94-172.34 96.94"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
export default About;