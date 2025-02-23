
import { Link} from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <div>
                <div className="bg-[url('/images/breadcrumb-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[300px] pt-5">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            Blog
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
                                    <Link to="/blog">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Blog
                                        </button>
                                    </Link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="pt-[80px]">
                    <div className="Container">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                            <div className="col-span-2 lg:col-span-1">
                                <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder="Search here..."
                                        required=""
                                        className="w-full h-[56px] p-6 rounded font-Nunito"
                                    />
                                    <button
                                        type="submit"
                                        className=" text-xl text-white rounded h-[56px] w-[56px] bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
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
                                            <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
                                        </svg>
                                    </button>
                                </div>
                                {/* <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                                    <h4 className="font-Rajdhani font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                                        Categories
                                    </h4>
                                    <ul className="mt-8">
                                        <li>
                                            <Link to="/service_details">
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
                                                        Web Development
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
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
                                            <Link to="/service_details2">
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
                                                        className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
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
                                            <Link to="/service_details3">
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
                                                        IT Solution
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
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
                                            <Link to="/service_details4">
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
                                                        className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
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
                                            <Link to="/service_details5">
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
                                                        Web Design
                                                    </span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
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
                                            <Link to="/service_details6">
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
                                                        className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white"
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
                                </div> */}
                                <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                                    <h4 className="font-Rajdhani font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                                        Popular Post
                                    </h4>
                                    <Link to="/blog-details">
                                        <button className="group flex gap-4 mb-6">
                                            <div className="rounded overflow-hidden">
                                                <img draggable="false" src="/images/recent-post-1.png" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                                                    Digital Marketing Strategy Action P…
                                                </h6>
                                                <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                                                    01 Jan, 2024
                                                </p>
                                            </div>
                                        </button>
                                    </Link> 
                                    <Link to="/blog_details">
                                        <button className="group flex gap-4 my-6">
                                            <div className="rounded overflow-hidden">
                                                <img draggable="false" src="/images/recent-post-2.png" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                                                    6 Things You Must Know Before Hirin…
                                                </h6>
                                                <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                                                    16 Jan, 2024
                                                </p>
                                            </div>
                                        </button>
                                    </Link> 
                                    <Link to="/blog_details">
                                        <button className="group flex gap-4 my-6">
                                            <div className="rounded overflow-hidden">
                                                <img draggable="false" src="/images/recent-post-2.png" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                                                    6 Things You Must Know Before Hirin…
                                                </h6>
                                                <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                                                    16 Jan, 2024
                                                </p>
                                            </div>
                                        </button>
                                    </Link> 
                                    <Link to="/blog_details">
                                        <button className="group flex gap-4 my-6">
                                            <div className="rounded overflow-hidden">
                                                <img draggable="false" src="/images/recent-post-2.png" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                                                    6 Things You Must Know Before Hirin…
                                                </h6>
                                                <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                                                    16 Jan, 2024
                                                </p>
                                            </div>
                                        </button>
                                    </Link> 
                                    
                                    <Link to="/blog_details">
                                        <button className="group flex gap-4 my-6">
                                            <div className="rounded overflow-hidden">
                                                <img draggable="false" src="/images/recent-post-3.png" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h6 className="font-Rajdhani font-semibold sm:text-lg lg:text-base xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                                                    IT Solution And IT Related Services
                                                </h6>
                                                <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                                                    27 Jan, 2024
                                                </p>
                                            </div>
                                        </button>
                                    </Link> 
                                </div>
                                <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                                    <h4 className="font-Rajdhani font-bold text-left text-[28px] text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                                        Tags
                                    </h4>
                                    <ul className="inline-block">
                                        <li className="inline-block mr-[10px] mb-[10px]">
                                            <Link to="/">
                                                <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                                                    Cyber Security
                                                </button>
                                            </Link> 
                                        </li>
                                        <li className="inline-block mr-[10px] mb-[10px]">
                                            <Link to="/">
                                                <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                                                    Learning
                                                </button>
                                            </Link> 
                                        </li>
                                        <li className="inline-block mr-[10px] mb-[10px]">
                                            <Link to="/">
                                                <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                                                    Web Drvelopment
                                                </button>
                                            </Link> 
                                        </li>
                                        <li className="inline-block mr-[10px] mb-[10px]">
                                            <Link to="/">
                                                <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                                                    IT Solution
                                                </button>
                                            </Link> 
                                        </li>
                                        <li className="inline-block mr-[10px] mb-[10px]">
                                            <Link to="/">
                                                <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                                                    Marketing
                                                </button>
                                            </Link> 
                                        </li>
                                        <li className="inline-block mr-[10px] mb-[10px]">
                                            <Link to="/">
                                                <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                                                    Technology
                                                </button>
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="border-l border-b border-BorderColor2-0 rounded-md">
                                    <div className="relative overflow-hidden rounded-md">
                                        <img
                                            draggable="false"
                                            src="/images/blog-details.jpg"
                                            className="w-full"
                                        />
                                        <div className="absolute top-0 left-0">
                                            <h6 className="font-Nunito text-white pl-7 pr-12 py-2 overflow-hidden bg-PrimaryColor-0 relative z-10 before:absolute before:-right-4 before:top-1 before:w-8 before:h-8 before:!rotate-45 before:bg-SecondaryColor-0">
                                                Cyber Security
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="px-4 sm:px-8 ml-8 bg-white shadow-cases rounded-b-md rounded-ss-md -mt-[50px] relative z-10">
                                        <div className="flex items-center justify-between gap-5 pt-9 pb-7 border-b-2  relative before:absolute before:left-0 before:-bottom-[2px] before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:animate-dance5">
                                            <h6 className="flex items-center gap-2 font-Rajdhani text-[17px] text-PrimaryColor-0 font-medium">
                                                Admin : Mera
                                            </h6>
                                            <h6 className="flex items-center font-Rajdhani text-[17px] text-TextColor2-0 font-medium">
                                                Comments (04)
                                            </h6>
                                        </div>
                                        <Link to="/blog_details/blog_details">
                                            <button className="font-Rajdhani font-bold text-left text-lg sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-7 mb-5">
                                                Solution This Business For is Marketing Blog
                                            </button>
                                        </Link> 
                                        <p className="font-Nunito text-TextColor2-0 pb-9">
                                            Alternative innovation to ethical network environmental whiteboard
                                            pursue compelling results for methods empowerment. Dramatically
                                            architect go forward opportunities transition mission top critical
                                            supply chains after enterprise
                                        </p>
                                    </div>{" "}
                                    <div className="px-4 sm:px-8">
                                        <div className="flex flex-col bg-[#f3f4f8] sm:flex-row gap-7 px-4 sm:px-11 py-4 sm:py-10 rounded-md mt-12">
                                            <div className="text-6xl text-PrimaryColor-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-Nunito text-HeadingColor-0 sm:text-lg italic">
                                                    “Competently architect intermandated deliverables client with
                                                    niches continually underwhelm build cross-media growth
                                                    strategies without robust.”
                                                </p>
                                                <h6 className="font-Nunito text-HeadingColor-0 pl-16 mt-4 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-14 before:h-[1px] before:bg-PrimaryColor-0">
                                                    CEO &amp; Founder
                                                </h6>
                                            </div>
                                        </div>
                                        <Link to="/blog_details">
                                            <button className="font-Rajdhani font-bold text-left text-lg sm:text-[28px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-14 mb-4">
                                                Our Begin Now To Beingonl
                                            </button>
                                        </Link> 
                                        <p className="font-Nunito text-TextColor2-0">
                                            Dramatically matrix cross-media vortals wireless deliverables.
                                            Phosfluorescently underwhelm market driven e-services and 24/365
                                            infrastructures. Intrinsicly incentivize resource.
                                        </p>
                                        <ul className="flex flex-col gap-[14px] mt-7">
                                            <li className="flex gap-3 items-center font-Nunito font-light text-TextColor2-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    className="text-PrimaryColor-0"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                Innovate wireless market
                                            </li>
                                            <li className="flex gap-3 items-center font-Nunito font-light text-TextColor2-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    className="text-PrimaryColor-0"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                Productivate resource sucking
                                            </li>
                                            <li className="flex gap-3 items-center font-Nunito font-light text-TextColor2-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    className="text-PrimaryColor-0"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                Proactively unleash oriented communities
                                            </li>
                                            <li className="flex gap-3 items-center font-Nunito font-light text-TextColor2-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    className="text-PrimaryColor-0"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                Credibly develop progressive archi
                                            </li>
                                            <li className="flex gap-3 items-center font-Nunito font-light text-TextColor2-0">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    className="text-PrimaryColor-0"
                                                    height={20}
                                                    width={20}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                Phosfluorescently to customer
                                            </li>
                                        </ul>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                                            <div>
                                                <img
                                                    draggable="false"
                                                    src="/images/blog-details-benifis-thumb-1.png"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    draggable="false"
                                                    src="/images/blog-details-benifis-thumb-2.png"
                                                />
                                            </div>
                                        </div>
                                        <Link to="/blog_details">
                                            <button className="font-Rajdhani font-bold text-left text-lg sm:text-[28px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-10 mb-4">
                                                Tree Plantation for Human
                                            </button>
                                        </Link> 
                                        <p className="font-Nunito font-light text-TextColor2-0">
                                            Dramatically matrix cross-media vortals wireless deliverables.
                                            Phosfluorescently underwhelm market driven e-services and 24/365
                                            infrastructures. Intrinsicly incentivize resource.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-t border-BorderColor1-0 mt-9 py-5 px-4 md:px-8 border-r border-BorderColor2-0">
                                        <div className="font-Nunito text-lg font-medium flex flex-col sm:flex-row gap-2">
                                            <Link to="/">
                                                <button className="font-Nunito px-5 py-2 text-HeadingColor-0 text-sm rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white">
                                                    Digital Marketing
                                                </button>
                                            </Link> 
                                            <Link to="/">
                                                <button className="font-Nunito px-5 py-2 text-HeadingColor-0 text-sm rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white">
                                                    Development
                                                </button>
                                            </Link> 
                                        </div>
                                        <div>
                                            <ul className="flex justify-center items-center gap-2">
                                                <li>
                                                    <Link to="/">
                                                        <button className="text-white w-9 h-9 rounded-full bg-[#1673ea] flex justify-center items-center">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 320 512"
                                                                height={13}
                                                                width={13}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                            </svg>
                                                        </button>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <button className="text-white w-9 h-9 rounded-full bg-[#38ceff] flex justify-center items-center">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 512 512"
                                                                height={13}
                                                                width={13}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                            </svg>
                                                        </button>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <button className="text-white w-9 h-9 rounded-full bg-[#0b4ab1] flex justify-center items-center">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 448 512"
                                                                height={13}
                                                                width={13}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                                            </svg>
                                                        </button>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <button className="text-white w-9 h-9 rounded-full bg-[#e92928] flex justify-center items-center">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 384 512"
                                                                height={13}
                                                                width={13}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                                            </svg>
                                                        </button>
                                                    </Link> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[50px]">
                        <li>
                            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                                01
                            </button>
                        </li>
                        <li>
                            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                                02
                            </button>
                        </li>
                        <li>
                            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                                03
                            </button>
                        </li>
                        <li>
                            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 320 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Blog