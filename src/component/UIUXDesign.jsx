import { Link} from 'react-router-dom';

const UiUxDesign = () => {
    return (
        <>
            <div>
                <div className="bg-[url('/images/designing-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[600px] pt-20">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            UI/UX Design
                        </h1>
                        <div className="border-2 rounded border-BorderColor-0 mt-8 sm:mt-5 inline-block px-8 py-2">
                            <ul className="flex sm:flex-row gap-2 sm:gap-4 sm:items-center justify-start">
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
                                    <Link to="/service_details">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Service Details
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="py-[120px] bg-white">
                    <div className="Container">
                        <div className="grid grid-cols-3 gap-[50px]">
                            <div className="col-span-3 lg:col-span-2">
                                <img
                                    src="/images/service-details.jpg"
                                    draggable="false"
                                    className="w-full"
                                />
                                <h2 className="font-Rajdhani font-bold text-2xl sm:text-4xl text-HeadingColor-0 mt-8">
                                    UI/UX Design Services
                                </h2>
                                <p className="font-Nunito text-TextColor2-0 mt-6">
                                    At Devlex Innovations, we craft intuitive and engaging digital experiences that seamlessly blend aesthetics with functionality. Our user-centric approach ensures smooth navigation, accessibility, and responsiveness, enhancing overall user engagement.
                                </p>
                                <p className="font-Nunito text-TextColor2-0 mt-7 mb-11">
                                    We leverage modern design trends, innovative prototyping, and performance-driven strategies to create visually compelling interfaces that prioritize usability. By integrating cutting-edge technologies and design principles, we deliver scalable and interactive UI/UX solutions that align with your business goals. Elevate your digital presence with our expertly designed, future-ready interfaces.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                                        <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                                            <img
                                                src="/images/services-details-icon-1.png"
                                                draggable="false"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                                                UI/UX Excellence
                                            </h6>
                                            <p className="font-Nunito text-TextColor2-0 mt-3">
                                                Crafting intuitive, user-centric designs for seamless digital experiences
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                                        <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                                            <img
                                                src="/images/services-details-icon-2.png"
                                                draggable="false"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                                                UI/UX Innovation
                                            </h6>
                                            <p className="font-Nunito text-TextColor2-0 mt-3">
                                                Designing engaging, accessible interfaces with brand consistency in mind
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-PrimaryColor-0 px-[42px] rounded-md py-7 flex flex-col sm:flex-row sm:items-center gap-8 mt-[62px]">
                                    <div className=" pr-8 sm:border-r-2">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            className="text-white"
                                            height={50}
                                            width={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-Nunito italic text-lg sm:text-[22px] leading-8 text-white">
                                            Strategically delivering tailored solutions to enhance efficiency and growth
                                        </p>
                                    </div>
                                </div>
                                <h2 className="font-Rajdhani font-bold text-2xl sm:text-3xl text-HeadingColor-0 mt-[54px]">
                                    Key Benefits
                                </h2>
                                <p className="font-Nunito text-TextColor2-0 mt-6">
                                    Unlock innovative solutions designed to enhance efficiency, scalability, and user experience. Leverage cutting-edge strategies and advanced technologies to drive sustainable growth, improve operational performance, and maximize business success.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-9">
                                    <div className="text-center group">
                                        <div className="overflow-hidden rounded">
                                            <img
                                                src="/images/services-details-benifis-thumb-1.png"
                                                draggable="false"
                                                className="transition-all duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="bg-white shadow-cases rounded inline-block pt-7 pl-4 sm:pl-8 pb-7 w-4/5 -mt-5 relative z-10">
                                            <h4 className="font-Rajdhani text-HeadingColor-0 font-semibold text-[22px] lg:text-xl xl:text-[22px] text-left mb-3">
                                                Analysis And Planning.
                                            </h4>
                                            <ul>
                                                <li className="flex items-center gap-2 text-TextColor2-0 text-left font-Nunito mb-2 lg:text-sm xl:text-base">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 text-xl"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
                                                    </svg>
                                                    Leveraging advanced tools
                                                </li>
                                                <li className="flex items-center gap-2 text-TextColor2-0 text-left font-Nunito lg:text-sm xl:text-base">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 text-xl"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
                                                    </svg>
                                                    Expertise for strategic excellence
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center group">
                                        <div className="overflow-hidden rounded">
                                            <img
                                                src="/images/services-details-benifis-thumb-2.png"
                                                draggable="false"
                                                className="transition-all duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="bg-white shadow-cases rounded inline-block pt-7 pl-4 sm:pl-8 pb-7 w-4/5 -mt-5 relative z-10">
                                            <h4 className="font-Rajdhani text-HeadingColor-0 font-semibold text-[22px] lg:text-xl xl:text-[22px] text-left mb-3">
                                                Design &amp; Development.
                                            </h4>
                                            <ul>
                                                <li className="flex items-center gap-2 text-TextColor2-0 text-left font-Nunito mb-2 lg:text-sm xl:text-base">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 text-xl"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
                                                    </svg>
                                                    Innovative solutions
                                                </li>
                                                <li className="flex items-center gap-2 text-TextColor2-0 text-left font-Nunito lg:text-sm xl:text-base">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 text-xl"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
                                                    </svg>
                                                    Advanced technology and expertise
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 lg:col-span-1">
                                <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                                    <h4 className="font-Rajdhani font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                                        Categories
                                    </h4>
                                    <ul className="mt-8">
                                        <li>
                                            <Link to="/web-development">
                                                <button className="w-full font-Nunito text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-PrimaryColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 576 512"
                                                            className="text-white transition-all duration-500 group-hover:text-white"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                                                        </svg>
                                                        Web Development
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/UIUX-design">
                                                <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 576 512"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                                                        </svg>
                                                        UI/UX Design
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/app-development">
                                                <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 576 512"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                                                        </svg>
                                                        App Development
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/digital-marketing">
                                                <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 576 512"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                                                        </svg>
                                                        Digital Marketing
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/video-editing">
                                                <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 576 512"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                                                        </svg>
                                                        Video Editing
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/devops-services">
                                                <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 576 512"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z" />
                                                        </svg>
                                                        DevOps Services
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                                    <h4 className="font-Rajdhani font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                                        Downloads
                                    </h4>
                                    <ul className="mt-8">
                                        <li>
                                            <Link to="/">
                                                <button className="w-full font-Nunito bg-SecondaryColor-0 text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-HoverColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 16 16"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height={20}
                                                            width={20}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                            <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
                                                        </svg>
                                                        Service Report
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        className="text-white"
                                                        height={24}
                                                        width={24}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <button className="w-full font-Nunito bg-SecondaryColor-0 text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-HoverColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                                                    <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 16 16"
                                                            className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
                                                            height={20}
                                                            width={20}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                            <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
                                                        </svg>
                                                        Service Lists
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        className="text-white"
                                                        height={24}
                                                        width={24}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rounded-lg px-9 overflow-hidden bg-[url('/images/sidber-contact.png')] bg-cover bg-no-repeat bg-center py-[50px]">
                                    <img src="/images/widget-icon.png" draggable="false" />
                                    <h6 className="font-Nunito font-medium text-lg text-white mt-5 mb-2">
                                        Call Us Anytime
                                    </h6>
                                    <Link to="/">
                                        <button className="font-Nunito font-semibold text-2xl text-white">
                                            +91- 6306011968
                                        </button>
                                    </Link>
                                    <Link to="/">
                                        <button className="font-Nunito text-white flex gap-2 items-center mt-4 mb-[52px]">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 24 24"
                                                className="text-xl text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                            info.devlexinnovations.com
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="font-Nunito text-white flex gap-2 items-center bg-PrimaryColor-0 w-full h-[58px] rounded-md justify-center z-10 relative before:absolute before:top-0 before:right-0 before:scale-0 before:-z-10 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                                            Contact Us
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 448 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default UiUxDesign;