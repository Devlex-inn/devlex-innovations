import { Link } from 'react-router-dom';
import {useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5011/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setFormData({ name: "", email: "", phone: "", address: "", message: "" });
            } else {
                console.error("Error")
            }
        } catch (error) {
            console.error("Failed to send message");
        }
    };

    return (
        <>
            <div>
                <div className="bg-[url('/images/contact-banner-bg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start h-[400px] sm:h-[500px] pt-20">
                    <div className="Container">
                        <h1 className="font-Rajdhani font-bold text-4xl sm:text-[44px] md:text-[55px] text-white capitalize">
                            Contact Us
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
                                    <Link to="/contact">
                                        <button className="font-Rajdhani font-medium text-lg capitalize text-white">
                                            Contact Us
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="py-[50px] relative bg-[url(/images/contact-bottom-bg.jpg)] bg-cover bg-no-repeat bg-center">
                    <div className="Container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
                            <div>
                                <div className="group flex items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 lg:p-4 xl:p-6 border border-PrimaryColor-0 rounded overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
                                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-2xl border-2 border-PrimaryColor-0 #9C5EEE transition-all duration-500 group-hover:border-white group-hover:text-white">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h6 className="font-Rajdhani font-semibold text-base text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                                            Call Us Anytime
                                        </h6>
                                        <h4 className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-[20px] lg:text-xl xl:text-[20px] 2xl:text-[22px] #9C5EEE transition-all duration-500 group-hover:text-white mt-[2px]">
                                            +91- 6306011968
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group flex items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 lg:p-4 xl:p-6 border border-PrimaryColor-0 rounded overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
                                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-2xl border-2 border-PrimaryColor-0 #9C5EEE transition-all duration-500 group-hover:border-white group-hover:text-white">
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
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h6 className="font-Rajdhani font-semibold text-base text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                                            Send E-Mail
                                        </h6>
                                        <h4 className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-[20px] lg:text-xl xl:text-[22px] 2xl:text-[22px] #9C5EEE transition-all duration-500 group-hover:text-white mt-[2px]">
                                            info.devlexinnovations.com
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group flex items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 lg:p-4 xl:p-6 border border-PrimaryColor-0 rounded overflow-hidden relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
                                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-2xl border-2 border-PrimaryColor-0 #9C5EEE transition-all duration-500 group-hover:border-white group-hover:text-white">
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
                                            <circle cx={12} cy={12} r={10} />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h6 className="font-Rajdhani font-semibold text-base text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                                            Address
                                        </h6>
                                        <h4 className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-[20px] lg:text-xl xl:text-[22px] 2xl:text-[22px] #9C5EEE transition-all duration-500 group-hover:text-white mt-[2px]">
                                            Sector 51 Noida, UP 201307
                                        </h4>
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
                                    Contact us for expert solutions tailored to your needs
                                </h4>
                                <h6 className="font-Rajdhani font-semibold text-xl text-white mt-6 mb-5">
                                    Follow US :
                                </h6>
                                <ul className="flex items-center gap-3">
                                    <li>
                                        <Link to="https://www.facebook.com/profile.php?id=61571477392466">
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
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://x.com/Devlex_inno">
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
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/company/devlex-innovations/">
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
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/devlex.innovations/">
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
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 27-27 27-14.9 0-27-12-27-27s12-27 27-27c14.9 0 27 12 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9C382.9 27.8 351.5 19.6 316.2 17.9 279.6 16 168.4 16 131.8 17.9 96.5 19.6 65.1 27.8 39 53.9 12.9 80.2 4.7 111.6 3 146.9c-1.9 36.6-1.9 147.8 0 184.4 1.7 35.3 9.9 66.7 36.2 92.9 26.2 26.2 57.6 34.4 92.9 36.2 36.6 1.9 147.8 1.9 184.4 0 35.3-1.7 66.7-9.9 92.9-36.2 26.2-26.2 34.4-57.6 36.2-92.9 1.9-36.6 1.9-147.8 0-184.4zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.1 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.1-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.1-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.1 9 132.3s2.6 102.9-9 132.3z" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2 lg:pl-[120px]">
                            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                                Looking for reliable IT solutions?
                            </h5>
                            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-12">
                                Connect with our experts for expert IT solutions and support
                            </h1>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                                <div className="flex flex-col md:flex-row gap-7">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-7">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Your Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
                                    defaultValue={""}
                                />
                                <div className="inline-block mt-3">
                                    <button
                                        type="submit"
                                        className="primary-btn2 !bg-SecondaryColor-0 hover:border-PrimaryColor-0 !border-SecondaryColor-0 before:!bg-PrimaryColor-0"
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.536362183569!2d77.37419780113298!3d28.580772955481475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce588a1e1ddc3%3A0xe9f13ebb9f213f98!2sD-19%2C%20Block%20D%2C%20Sector%2051%2C%20Noida%2C%20Uttar%20Pradesh%20201307!5e0!3m2!1sen!2sin!4v1739033844785!5m2!1sen!2sin"
                            width="100%"
                            height={400}
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

