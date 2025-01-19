import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="w-full transition-all duration-300 bg-transparent relative z-[99999]">
                <header className="bg-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:-left-[5%] before:w-[55%] before:h-full before:skew-x-[26deg] before:bg-PrimaryColor-0 before:-z-10 overflow-hidden md:block">
                    <div className="Container flex items-center justify-between h-[50px]">
                        <div className="flex items-center gap-10">
                            <p className="font-Nunito text-white sm:flex hidden items-center gap-1">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="text-xl relative bottom-[2px] text-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Location_On">
                                        <g>
                                            <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
                                            <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
                                        </g>
                                    </g>
                                </svg>
                                Delhi NCR
                            </p>
                            <a
                                className="font-Nunito text-white md:flex items-center gap-2 hidden"
                                href="mailto:devlexinnovations@gmail.com"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="text-white"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                    />
                                </svg>
                                devlexinnovations@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-16">
                            <div className="lg:flex items-center gap-2 hidden">
                                {/* <span className="flex items-center gap-3 text-white">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="none"
                                            strokeWidth={2}
                                            d="M21,13 C21,17.971 16.971,22 12,22 C7.029,22 3,17.971 3,13 C3,8.029 7.029,4 12,4 C16.971,4 21,8.029 21,13 L21,13 Z M5.5,19.5 L2,23 L5.5,19.5 Z M18.5,19.5 L22,23 L18.5,19.5 Z M9,4 C8.29078014,2.90780142 6.88179669,2 5,2 C2.90070922,2 1,3.90070922 1,6 C1,7.88179669 1.90780142,9.29078014 3,10 M21,10 C22.0921986,9.29078014 23,7.88179669 23,6 C23,3.90070922 21.0992908,2 19,2 C17.1182033,2 15.7092199,2.90780142 15,4 M12,8 L12,13 L15,16"
                                        />
                                    </svg>
                                </span>
                                <p className="font-Nunito font-medium text-white">
                                    9.10 am - 5.30 pm
                                </p> */}
                            </div>
                            <ul className="flex gap-3 items-center">
                                <li>
                                    <a
                                        className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                                        href="https://www.facebook.com/profile.php?id=61571477392466"
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
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                                        href="https://x.com/Devlex_inno"
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
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                                        href="https://www.linkedin.com/company/devlex-innovations/"
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
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="transition-all duration-500 text-white hover:text-PrimaryColor-0"
                                        href="https://www.instagram.com/devlex.innovations/"
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
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </header>
                <header
                    className="header-section bg-white"
                    data-aos="zoom-in"
                    data-aos-duration={1000}
                >
                    <div className="Container">
                        <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
                            <div className=" w-48 lg:w-52">
                                <a href="/">
                                    <img
                                        draggable="false"
                                        src="/public/images/Devlex logo (Black).png"
                                        className="hidden lg:block"
                                        alt="website_logo"
                                    />
                                </a>
                            </div>
                            <div className="w-full lg:hidden flex justify-between h-[70px] items-center p-3">
                                <div className="w-28">
                                    <a href="/">
                                        <img
                                            draggable="false"
                                            src="/public/images/Devlex logo (Black).png"
                                            className="block lg:hidden "
                                            alt="constre_website_logo"
                                        />
                                    </a>
                                </div>
                                <button className="lg:hidden block focus:outline-none ">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 448 512"
                                        className="w-5 h-5 text-HeadingColor-0"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex gap-6 items-center">
                                <ul className="hidden lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-Nunito font-medium sm:text-base text-HeadingColor-0 transition-all duration-500">
                                    <li className="relative group">
                                        <Link
                                            aria-current="page"
                                            className="text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative active font-bold"
                                            to={"/"}
                                        >
                                            Home
                                        </Link>


                                    </li>

                                    <li className="relative group">
                                        <Link
                                            className='text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative font-bold'
                                            to="/about"
                                        >
                                            About


                                        </Link>

                                    </li>
                                    <li className="relative group">
                                        <Link
                                            aria-current="page"
                                            className='text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative active font-bold'
                                            to={"/service"}
                                        >
                                            <span className="flex items-center">
                                                Service
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    className="ml-1"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                                </svg>
                                            </span>
                                        </Link>

                                        <div className="absolute pt-5 lg:pt-8 z-20 hidden group-hover:block">
                                            <ul className="shadow-lg rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">

                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/servicedetails"}>
                                                            Web Development
                                                        </Link>
                                                    </li>
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/servicedetails"}>
                                                            UI/UX Design
                                                        </Link>
                                                    </li>
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/servicedetails"}>
                                                            App Development
                                                        </Link>
                                                    </li>
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/servicedetails"}>
                                                            Digital Marketing
                                                        </Link>
                                                    </li>
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/servicedetails"}>
                                                            Video Editing
                                                        </Link>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <Link
                                            aria-current="page"
                                            className="text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative active font-bold"
                                            href="/"
                                        >
                                            <span className="flex items-center">
                                                Pages
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    className="ml-1"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                                </svg>
                                            </span>
                                        </Link>

                                        <div className="absolute pt-5 lg:pt-8 z-20 hidden group-hover:block">
                                            <ul className="shadow-lg rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/whychoose"}>Why Choose Us</Link>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/mission_inner">Our Mission</a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/project">Projects</a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <Link className="py-2 block" to={"/faq"}>FAQ</Link>
                                                    </li>
                                                </div>
                                                {/* <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/team_inner">Team Member</a>
                                                    </li>
                                                </div> */}
                                                {/* <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/team_details">Team Details</a>
                                                    </li>
                                                </div> */}

                                                {/* <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/project_details">Project Details</a>
                                                    </li>
                                                </div> */}
                                                {/* <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/pricing_inner">Pricing Plan</a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/location">Our Location</a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/career">Careers</a>
                                                    </li>
                                                </div> */}

                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li className="relative group">
                                        <a
                                            aria-current="page"
                                            className='({isActive:i,isPending:o})=>o?"pending":i?"active":"" text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative  active'
                                            href="/"
                                        >
                                            <span className="flex items-center">
                                                Blog
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    className="ml-1"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                                </svg>
                                            </span>
                                        </a>
                                        <div className="absolute pt-5 lg:pt-8 z-20">
                                            <a
                                                aria-current="page"
                                                className='({isActive:i,isPending:o})=>o?"pending":i?"active":"" text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative  active'
                                                href="/"
                                            />
                                            <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[240px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                                                <a
                                                    aria-current="page"
                                                    className='({isActive:i,isPending:o})=>o?"pending":i?"active":"" text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative  active'
                                                    href="/"
                                                />
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <a
                                                        aria-current="page"
                                                        className='({isActive:i,isPending:o})=>o?"pending":i?"active":"" text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative  active'
                                                        href="/"
                                                    />
                                                    <li className="hover:ml-3 duration-300">
                                                        <a
                                                            aria-current="page"
                                                            className='({isActive:i,isPending:o})=>o?"pending":i?"active":"" text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative  active'
                                                            href="/"
                                                        />
                                                        <a className="py-2 block" href="/blog_grid">
                                                            Blog Grid
                                                        </a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/blog_left_sidebar">
                                                            Blog Left Sidebar
                                                        </a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/blog_right_sidebar">
                                                            Blog Right Sidebar
                                                        </a>
                                                    </li>
                                                </div>
                                                <div className="px-5 group hover:bg-PrimaryColor-0">
                                                    <li className="hover:ml-3 duration-300">
                                                        <a className="py-2 block" href="/blog_details">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li className="relative group">
                                        <Link
                                            className='({isActive:i,isPending:o})=>o?"pending":i?"active":"" text-HeadingColor-0 text-left lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 font-bold'
                                            to={"/contact"}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <div className="hidden lg:flex items-center">
                                    {/* <button>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="text-2xl ml-2 mr-10 text-HeadingColor-0"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
                                        </svg>
                                    </button> */}
                                    <a className="header-btn" href="/contact">
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </nav >

        </>
    );
}

export default Header;