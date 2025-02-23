import { Link} from 'react-router-dom';

const Whychoose = () => {
    return (
        <>
            <div>
                <div className="bg-[url('/images/chooseUs-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[300px] pt-5">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            Why Choose Us
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
                                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/why_choose">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Why Choose Us
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="pt-28 pb-[120px] p relative z-10  bg-[url(/images/choose-us-bg.jpg)]">
                    <div className="Container">
                        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-24 lg:items-center mb-[100px]">
                            <div>
                                <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                    IT Support For Business
                                </h5>
                                <h1 className="font-Rajdhani font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
                                    The Devlex Innovations Promise
                                </h1>
                                <p className="font-Nunito text-TextColor2-0 mt-3 mb-7">
                                    At Devlex Innovations, we empower businesses with cutting-edge technology solutions. Our expertise in IT services ensures seamless operations, enhanced security, and optimized performance to help your business thrive in the digital age.
                                </p>
                                <ul>
                                    <li className="flex items-center gap-3 font-Nunito text-lg text-HeadingColor-0">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="text-PrimaryColor-0"
                                            height={9}
                                            width={9}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                                        </svg>
                                        Cutting-edge technology & tailored IT strategies.
                                    </li>
                                    <li className="flex items-center gap-3 font-Nunito text-lg text-HeadingColor-0 mt-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="text-PrimaryColor-0"
                                            height={9}
                                            width={9}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                                        </svg>
                                        Reliable IT support & proactive solutions.
                                    </li>
                                    <li className="flex items-center gap-3 font-Nunito text-lg text-HeadingColor-0 mt-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="text-PrimaryColor-0"
                                            height={9}
                                            width={9}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                                        </svg>
                                        Enhanced efficiency & seamless experience.
                                    </li>
                                    <li className="flex items-center gap-3 font-Nunito text-lg text-HeadingColor-0 mt-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="text-PrimaryColor-0"
                                            height={9}
                                            width={9}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                                        </svg>
                                        Web, mobile, and software solutions tailored to your needs.
                                    </li>
                                    <li className="flex items-center gap-3 font-Nunito text-lg text-HeadingColor-0 mt-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="text-PrimaryColor-0"
                                            height={9}
                                            width={9}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                                        </svg>
                                        Scalable and future-ready IT solutions for business growth.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src="/images/choose-us-thumb.png" draggable="false" />
                            </div>
                        </div>
                        <div className="grid custom-border grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] pt-[100px] border-t border-PrimaryColor-0">
                            <div>
                                <div className="relative z-10 text-center">
                                    <div>
                                        <img
                                            src="/images/choose-us-icon-1.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                    <h5 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 mt-6">
                                        Data Security
                                    </h5>
                                    <p className="font-Nunito text-TextColor2-0 pt-4">
                                        Ensure robust security with cutting-edge solutions, safeguarding data and business integrity.                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="relative z-10 text-center">
                                    <div>
                                        <img
                                            src="/images/choose-us-icon-2.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                    <h5 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 mt-6">
                                        IT Services
                                    </h5>
                                    <p className="font-Nunito text-TextColor2-0 pt-4">
                                        Providing innovative solutions to enhance security, efficiency, scalability, and business success.                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="relative z-10 text-center">
                                    <div>
                                        <img
                                            src="/images/choose-us-icon-3.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                    <h5 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 mt-6">
                                        Supports
                                    </h5>
                                    <p className="font-Nunito text-TextColor2-0 pt-4">
                                        Providing reliable solutions to ensure seamless operations, security, and efficiency.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="relative z-10 text-center">
                                    <div>
                                        <img
                                            src="/images/choose-us-icon-4.png"
                                            draggable="false"
                                            className="m-auto"
                                        />
                                    </div>
                                    <h5 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 mt-6">
                                        Peoples
                                    </h5>
                                    <p className="font-Nunito text-TextColor2-0 pt-4">
                                        Empowering teams with technology, collaboration, innovation, security, growth, efficiency, and success.
                                    </p>
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
                                    Get the Latest Insights & Updates from Devlex Innovations
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
                        <section className="py-[90px] pb-[76px] rounded relative bg-[url('/images/process-bg.jpg')] bg-cover bg-center bg-no-repeat z-10 mt-[74px]">
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
                                        Join our platform to access cutting-edge IT solutions and services
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
                                        Secure and flexible payment options for hassle-free transactions
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
                                        Enhance security and gain full access to premium IT services
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

export default Whychoose;