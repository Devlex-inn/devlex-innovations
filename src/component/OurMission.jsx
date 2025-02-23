import { Link} from 'react-router-dom';
const Ourmission = () => {
    return (
        <>
            <div>
                <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[300px] pt-5">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            Our Mission Vission &amp; Goal
                        </h1>
                        <div className="border-2 rounded border-BorderColor-0 mt-8 sm:mt-5 inline-block px-8 py-2">
                            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start">
                                <li>
                                    <Link to="/">
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
                                    </Link>
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
                                    <Link to="/mission_inner">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Our Mission Vission &amp; Goal
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="relative pt-20 pb-[120px] bg-[#f5f8ed] z-10">
                    <div className="Container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md mb-8 lg:mb-0">
                            <div>
                                <img src="/images/mission-1.png" draggable="false" />
                            </div>
                            <div className="ml-10 2xl:ml-20 mr-10">
                                <h2 className="font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8">
                                    Our Mission
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        At Devlex Innovations, we emphasize clarity and precision—because streamlined solutions drive success.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        We are committed IT experts delivering cutting-edge solutions, driven by innovation and excellence.                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        With a deep understanding of your business needs, our expert support team is always ready to ensure seamless IT operations.
                                    </p>
                                </div>
                                {/* <Link to="/">
                                    <button className="primary-btn4">Find Out More</button>
                                </Link> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md mb-8 lg:mb-0">
                            <div className="ml-10 mr-10 2xl:mr-20">
                                <h2 className="font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8">
                                    Our Vision
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        At Devlex Innovations, we embrace clarity and innovation to navigate the evolving digital landscape.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        As dedicated IT experts, we deliver cutting-edge solutions tailored to your business needs.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        With a commitment to excellence, our support team ensures seamless operations and sustained success.
                                    </p>
                                </div>
                                {/* <Link to="/">
                                    <button className="primary-btn4">Find Out More</button>
                                </Link> */}
                            </div>
                            <div>
                                <img src="/images/mission-2.png" draggable="false" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md">
                            <div>
                                <img src="/images/mission-1.png" draggable="false" />
                            </div>
                            <div className="ml-10 2xl:ml-20 mr-10">
                                <h2 className="font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8">
                                    Our Goal
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        At Devlex Innovations, we prioritize clarity and innovation to deliver impactful IT solutions.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        We are skilled professionals committed to driving business success through technology.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16">
                                    <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="font-Nunito text-TextColor2-0 flex-1">
                                        Our expert support team ensures seamless operations and continuous growth.
                                    </p>
                                </div>
                                {/* <Link to="/">
                                    <button className="primary-btn4">Find Out More</button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white relative z-10 before:absolute before:top-0 before:left-0 before:bg-PrimaryColor-0 before:w-full before:h-1/2 before:-z-10 py-[120px]">
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
                                        1+ Year Experience
                                    </h4>
                                    <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
                                        Software development, web, and IT solutions expertise
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
                                        Providing reliable tech solutions to drive business growth
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
                                        Innovative Solutions
                                    </h4>
                                    <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-1">
                                        Empowering businesses with advanced technology solutions
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
                                        Delivering reliable IT solutions for business growth                                    </p>
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
            </div>


        </>
    )
}

export default Ourmission;