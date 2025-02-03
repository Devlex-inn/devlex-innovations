import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-[url('/images/footer-bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
                <div className="Container">
                    <div className="grid gap-y-7 grid-cols-12">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <a href="/">
                                <img src="/public/images/Devlex logo (White).png" draggable="false" height={280} width={280} />
                            </a>
                            <p className="font-Nunito text-white opacity-80 mt-6 mb-8 w-10/12">

                                Devlex Innovation focuses on innovating{" "}
                                <br className="hidden xl:block" /> code to create impactful solutions and
                                <br className="hidden xl:block" /> shaping a smarter, more efficient<br className="hidden xl:block" /> future for all.
                            </p>
                            <div>
                                <a href="/about">
                                    <button className="primary-btn">
                                        Discover More
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
                        <div className="col-span-12 md:col-span-6 lg:col-span-2">
                            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[33px]">
                                Company
                            </h4>
                            <ul>
                                <li>
                                    <a href="/about">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            About Us
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/ourmission">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            Our Mission
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/faq">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            FAQ
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            Projects
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            Contact Us
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[33px]">
                                Our Services
                            </h4>
                            <ul>
                                <li>
                                    <a href="/web-development">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            Web Development
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/UIUX-design">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            UI/UX Design
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/app-development">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            App Development
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/digital-marketing">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            Digital Marketing
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-base text-PrimaryColor-0"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <path d="M8 12h8" />
                                                <path d="m12 16 4-4-4-4" />
                                            </svg>
                                            DevOps Services
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[30px]">
                                Newsletter
                            </h4>
                            <p className="font-Nunito text-white opacity-80 font-medium mb-[26px]">
                                Subscribe Our Latest Newsletter
                            </p>
                            <form action="#" method="post">
                                <label htmlFor="email" className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Your E-Mail*"
                                        required=""
                                        className="w-full h-[56px] font-Nunito outline-none focus:outline-none border border-BorderColor-0 bg-transparent px-6 py-2 text-white placeholder:text-white placeholder:opacity-50 mb-4"
                                    />
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="absolute top-1/2 -translate-y-1/2 right-6 text-white opacity-50 text-xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </label>
                                <button
                                    type="submit"
                                    className="h-[50px] rounded border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 px-[30px] py-2 text-white font-Nunito flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:bg-SecondaryColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-6 mt-[108px] border-t border-BorderColor-0">
                        <div>
                            <p className="font-Nunito text-white">
                                © {new Date().getFullYear()} Devlex. Designed By Devlex Innovations                            </p>
                        </div>

                        <div>
                            <ul className="flex gap-3">
                                <li>
                                    <Link className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"
                                        to="https://www.facebook.com/profile.php?id=61571477392466"
                                    >
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
                                    </Link>
                                </li>
                                <li>
                                    <Link className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"
                                        to="https://x.com/Devlex_inno"
                                    >
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
                                    </Link>
                                </li>
                                <li>
                                    <Link className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"
                                        to="https://www.linkedin.com/company/devlex-innovations/"
                                    >
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
                                    </Link>
                                </li>
                                <li>
                                    <Link className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"
                                        to="https://www.instagram.com/devlex.innovations/"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 27-27 27-14.9 0-27-12-27-27s12-27 27-27c14.9 0 27 12 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9C382.9 27.8 351.5 19.6 316.2 17.9 279.6 16 168.4 16 131.8 17.9 96.5 19.6 65.1 27.8 39 53.9 12.9 80.2 4.7 111.6 3 146.9c-1.9 36.6-1.9 147.8 0 184.4 1.7 35.3 9.9 66.7 36.2 92.9 26.2 26.2 57.6 34.4 92.9 36.2 36.6 1.9 147.8 1.9 184.4 0 35.3-1.7 66.7-9.9 92.9-36.2 26.2-26.2 34.4-57.6 36.2-92.9 1.9-36.6 1.9-147.8 0-184.4zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.1 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.1-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.1-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.1 9 132.3s2.6 102.9-9 132.3z" />
                                        </svg>


                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>)
}

export default Footer