const Contact = () => {
    return (
        <>
            <div>
                <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[500px] pt-20">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            Contact Us
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
                                    <a href="/contact">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Contact Us
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="py-28 relative bg-[url(/images/about-bg.jpg)] z-10 ">
                    <div className="Container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
                            <div>
                                <div className="group px-5 sm:px-[30px] md:px-5 xl:px-[30px] py-6 rounded-md flex items-center gap-2 sm:gap-5 lg:gap-2 2xl:gap-5 border border-PrimaryColor-0 bg-white relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                                    <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-Rajdhani font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
                                            Call Us Anytime
                                        </h5>
                                        <p className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-2xl md:text-xl xl:text-2xl transition-all duration-500 group-hover:text-white">
                                            +123 (4547) 563
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group px-5 sm:px-[30px] md:px-5 xl:px-[30px] py-6 rounded-md flex items-center gap-2 sm:gap-5 lg:gap-2 2xl:gap-5 border border-PrimaryColor-0 bg-white relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                                    <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
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
                                            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-Rajdhani font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
                                            Send E-Mail
                                        </h5>
                                        <p className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-2xl md:text-xl xl:text-2xl transition-all duration-500 group-hover:text-white">
                                            info@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group px-5 sm:px-[30px] md:px-5 xl:px-[30px] py-6 rounded-md flex items-center gap-2 sm:gap-5 lg:gap-2 2xl:gap-5 border border-PrimaryColor-0 bg-white relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                                    <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                                            <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-Rajdhani font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
                                            Opening Hours
                                        </h5>
                                        <p className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-2xl md:text-xl xl:text-2xl transition-all duration-500 group-hover:text-white">
                                            Fri - Mon (9.00 - 5.00)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="Container py-28 bg-BodyBg-0 border-t-4 border-PrimaryColor-0">
                    <div className="grid grid-cols-2 lg:grid-cols-3 lg:items-center gap-10 lg:gap-0">
                        <div className="col-span-2 lg:col-span-1 rounded-md overflow-hidden inline-block">
                            <img
                                src="/images/contact-form-img.png"
                                className="w-full"
                                draggable="false"
                            />
                            <div className="bg-PrimaryColor-0 pl-9 pt-7 pb-9">
                                <h4 className="font-Rajdhani font-semibold text-xl sm:text-[28px] leading-[34px] text-white">
                                    Feel Free to Contact &amp; Hire Us for Your Solution
                                </h4>
                                <h6 className="font-Rajdhani font-semibold text-xl text-white mt-6 mb-5">
                                    Follow US :
                                </h6>
                                <ul className="flex items-center gap-3">
                                    <li>
                                        <a href="/">
                                            <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
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
                                            <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
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
                                            <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
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
                                            <button className="size-10 flex justify-center items-center border border-dashed transition-all duration-500 hover:border-solid hover:border-SecondaryColor-0 rounded-full overflow-hidden relative bg-transparent text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
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
                        </div>
                        <div className="col-span-2 lg:pl-[120px]">
                            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                Have Any Consultation....?
                            </h5>
                            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-12">
                                Get In Touch Your Nearest Local <br />
                                Business Sales Executive
                            </h1>
                            <form action="#" method="post" className="flex flex-col gap-7">
                                <div className="flex flex-col md:flex-row gap-7">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name*"
                                        required=""
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        placeholder="Your Number"
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-7">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your E-Mail*"
                                        required=""
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Your Address"
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Write A Message..."
                                    className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
                                    defaultValue={""}
                                />
                                <div className="inline-block mt-3">
                                    <button
                                        type="submit"
                                        className="primary-btn2 !bg-SecondaryColor-0 hover:!border-PrimaryColor-0 !border-SecondaryColor-0 before:!bg-PrimaryColor-0"
                                    >
                                        Submit Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867283.0267128727!2d34.232606549050644!3d31.8841932044305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sbd!4v1715597594739!5m2!1sen!2sbd"
                            width="100%"
                            height={552}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg w-full"
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact