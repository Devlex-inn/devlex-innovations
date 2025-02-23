import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CountUp from 'react-countup';
const formatNumber = (num, suffix) => {
  if (suffix === '%') {
    return num + '%';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  }
  return num + '+';
};
const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Executive',
    img: '/images/bussiness-man.png',
    date: '20 July, 2024',
    review:
      'Their exceptional IT services transformed our business operations efficiently. Highly recommend their expertise for innovative digital solutions.',
  },
  {
    name: 'Priya Sharma',
    role: 'Civil Engineer',
    img: '/images/girl.png',
    date: '20 July, 2024',
    review:
      'A reliable partner for all our design needs. Their professionalism, creativity, and attention to detail are truly unmatched and exceptional'
  },
  {
    name: 'Amit Verma',
    role: 'Corporate Counsel',
    img: '/images/profile.png',
    date: '20 July, 2024',
    review:
      'Their technical expertise helped us streamline operations and achieve seamless integrations across various platforms and technologies.',
  },
  {
    name: 'Neha Desai',
    role: 'Doctor',
    img: '/images/woman.png',
    date: '20 July, 2024',
    review:
      'An outstanding IT service provider that consistently delivers high-quality, efficient solutions for complex problems and technical challenges.',
  },
];


const projects = [
  {
    id: 1,
    number: '01',
    title: 'Tour And Travel Website',
    img: 'images/portfolio-1.png',
  },
  {
    id: 2,
    number: '02',
    title: 'Beauty & Personal Care',
    img: 'images/portfolio-2.png',
  },
  {
    id: 3,
    number: '03',
    title: 'Hope Foundation Website',
    img: 'images/portfolio-3.png',
  },
  {
    id: 4,
    number: '04',
    title: 'HostDec Hosting Website',
    img: 'images/portfolio-4.png',
  },
];

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="fixed bottom-10 text-white right-6 z-50 bg-PrimaryColor-0 border-2 border-white rounded-full h-12 w-12 cursor-pointer animate-movebtn flex justify-center items-center cborder-PrimaryColor-0 hover:bg-white hover:text-PrimaryColor-0 hover:animate-none">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 384 512"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"></path>
          </svg>
        </div>
      </div>
      <div>
        <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat h-[600px] sm:h-[600px] lg:h-[500px] xl:h-[600px] flex items-center relative z-10 overflow-hidden">
          <div className="Container">
            <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
              <div className="relative">
                {/* <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4">
                  IT SOLUTION AGENCY IN INDIA
                </h5> */}
                <h1 className="font-Rajdhani font-extrabold text-white text-[30px] leading-[36px] sm:text-[48px] sm:leading-[60px] md:text-[68x] lg:text-[45px] xl:text-[53px] xl:leading-[68px] 2xl:text-[60px] 2xl:leading-[79px]">
                  INNOVATING CODE FOR A
                  <br />
                  BETTER TOMORROW
                </h1>
                <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[46px] mt-1">
                  Delivering an advanced, tailored, and immersive user experience with
                  <br className="hidden 2xl:block" /> innovation and seamless interaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link to="/contact">
                    <button className="primary-btn">
                      Lets Talk
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.006 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.928 9.928 0 0 0-7.071-2.922zm5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313 1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z"></path>
                        <path d="m11.467 11.125-3.214 3.214 1.414 1.414 3.214-3.214 2.125 2.124V9H9.343z"></path>
                      </svg>
                    </button>
                  </Link> 
                  <Link to="/about">
                    <button className="primary-btn">Read More</button>
                  </Link> 
                </div>
              </div>
              <div className="sm:flex justify-center lg:justify-end -mb-[132px] lg:-mb-12 relative hidden">
                {/* <img
                  src={image}
                  draggable="false"
                  className=":w-[inherit]"
                /> */}
                {/* <img
                  src="images/hero-shape.png"
                  draggable="false"
                  className="absolute top-40 left-0 md:left-20 lg:left-0 xl:left-10 2xl:left-[7rem] animate-rotational hidden sm:block"
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="Container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-10 sm:-mt-[50px]">
              <div>
                <div className="text-center shadow-shade overflow-hidden group px-10 pt-[60px] pb-8 rounded-lg bg-[#f1f4f1] relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[url('/images/feature-box-shape.png')] before:bg-cover before:bg-center before:bg-no-repeat before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:before:top-0">
                  <div className="relative text-center z-10">
                    <img
                      src={"images/feature-icon1.png"}
                      draggable="false"
                      className="m-auto"
                    />
                    <img
                      src="images/feature-shape-1.png"
                      draggable="false"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 group-hover:opacity-0"
                    />
                    <img
                      src="images/feature-shape-2.png"
                      draggable="false"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="font-Rajdhani font-bold text-2xl sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-11 mb-2">
                    1+ Year Experience
                  </h4>
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-[18px]">
                    Gaining expertise to deliver impactful solutions and innovation
                  </p>
                  <Link
                    className="inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:w-8 before:h-[2px] before:-translate-x-1/2 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-4 group-hover:before:bg-white group-hover:before:-left-6 group-hover:before:-translate-x-0"
                    to="/service"
                  >
                    <button className="font-Nunito font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                      Read More
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="text-center shadow-shade overflow-hidden group px-10 pt-[60px] pb-8 rounded-lg bg-[#f1f4f1] relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[url('/images/feature-box-shape.png')] before:bg-cover before:bg-center before:bg-no-repeat before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:before:top-0">
                  <div className="relative text-center z-10">
                    <img
                      src="images/feature-icon2.png"
                      draggable="false"
                      className="m-auto"
                    />
                    <img
                      src="images/feature-shape-1.png"
                      draggable="false"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 group-hover:opacity-0"
                    />
                    <img
                      src="images/feature-shape-2.png"
                      draggable="false"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="font-Rajdhani font-bold text-2xl sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-11 mb-2">
                    Dedicated Members
                  </h4>
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-[18px]">
                    Passionately collaborate to achieve goals and drive collective success
                  </p>
                  <Link
                    className="inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:w-8 before:h-[2px] before:-translate-x-1/2 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-4 group-hover:before:bg-white group-hover:before:-left-6 group-hover:before:-translate-x-0"
                    to="/service"
                  >
                    <button className="font-Nunito font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                      Read More
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="text-center shadow-shade overflow-hidden group px-10 pt-[60px] pb-8 rounded-lg bg-[#f1f4f1] relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[url('/images/feature-box-shape.png')] before:bg-cover before:bg-center before:bg-no-repeat before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:before:top-0">
                  <div className="relative text-center z-10">
                    <img
                      src="images/feature-icon3.png"
                      draggable="false"
                      className="m-auto"
                    />
                    <img
                      src="images/feature-shape-1.png"
                      draggable="false"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 group-hover:opacity-0"
                    />
                    <img
                      src="images/feature-shape-2.png"
                      draggable="false"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="font-Rajdhani font-bold text-2xl sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-11 mb-2">
                    Valuable Supports
                  </h4>
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-[18px]">
                    Consistently empowering growth through reliable and strategic assistance
                  </p>
                  <Link
                    className="inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:w-8 before:h-[2px] before:-translate-x-1/2 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-4 group-hover:before:bg-white group-hover:before:-left-6 group-hover:before:-translate-x-0"
                    to="/service"
                  >
                    <button className="font-Nunito font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                      Read More
                    </button>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[120px] bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative">
          <div className="Container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
              <div className="relative z-10">
                <img src="images/about-thumb.png" draggable="false" />
                <div className="absolute top-0 left-0">
                  <div className="bg-PrimaryColor-0 pb-6 pt-5 flex flex-col justify-between overflow-hidden rounded-lg h-[117px] sm:h-[208px] lg:h-[180px] xl:h-[208px] w-[92px] sm:w-[170px] lg:w-[140px] xl:w-[170px] items-center text-center relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-0 sm:before:w-8 before:h-[2px] before:bg-white after:absolute after:-top-14 after:-left-[2px] after:w-0 sm:after:w-[174px] after:h-[170px] after:bg-[#1164ED] after:-z-10 after:rounded-full">
                    <span className="text-5xl sm:text-[56px] font-Rajdhani font-bold text-white">
                      1+
                    </span>
                    <h6 className="font-Rajdhani text-sm leading-4 sm:text-lg sm:leading-5 font-semibold text-white">
                      Years Of <br /> Experiences
                    </h6>
                  </div>
                </div>
                <img
                  src="images/about-shape.png"
                  draggable="false"
                  className="absolute bottom-6 right-10 -z-10 animate-movebtn hidden sm:block"
                />
              </div>
              <div className="relative">
                <h5 className="font-Rajdhani text-lg font-semibold #9C5EEE">
                  Comprehensive IT Solutions for Business Growth
                </h5>
                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
                  Empowering success with reliable,<br /> innovative IT solutions
                </h1>
                <p className="font-Nunito text-TextColor2-0 pb-9 border-b border-BorderColor2-0 relative before:absolute before:left-0 before:-bottom-[1px] before:w-[50px] before:h-[1px] before:bg-PrimaryColor-0 before:animate-dance4">

                  Revolutionizing the IT landscape with Devlex Innovations’ cutting-edge solutions and agile strategies. Seamlessly integrating advanced technologies to drive growth, efficiency, and long-term success.                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[5px] my-10">
                  <div className="flex gap-5 items-center">
                    <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                      <img src="images/about-icon1.png" draggable="false" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-Rajdhani font-semibold text-[19px] lg:text-base xl:text-xl text-HeadingColor-0">
                        End-To-End IT Services Support
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                      <img src="images/about-icon2.png" draggable="false" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-Rajdhani font-semibold text-[19px] lg:text-base xl:text-xl text-HeadingColor-0">
                        Expert &amp; Dedicated Team Members
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                      <img src="images/about-icon3.png" draggable="false" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-Rajdhani font-semibold text-[19px] lg:text-base xl:text-xl text-HeadingColor-0">
                        24/7 Tehcnical Support
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                      <img src="images/about-icon4.png" draggable="false" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-Rajdhani font-semibold text-[19px] lg:text-base xl:text-xl text-HeadingColor-0">
                        100% Customers Satisfaction
                      </h5>
                    </div>
                  </div>
                </div>
                <Link to="/about">
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
                      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                    </svg>
                  </button>
                </Link> 
                {/* <img
                  src="images/about-shape2.png"
                  draggable="false"
                  className="absolute -bottom-0 left-1/2 animate-swing hidden sm:block"
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-28 pb-[120px] bg-[url('/images/service-bg.png')] bg-cover bg-no-repeat bg-center">
          <div className="Container">
            <div className="text-center">
              <h5 className="font-Rajdhani text-lg font-semibold text-white">
                IT Sevices
              </h5>
              <h1 className="font-Rajdhani font-bold text-[20px] leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
                Ensuring Your Success Trusted <br />
                IT Services Source
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[54px]">
              <div>
                <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                  <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
                    <img
                      src="images/service-3.png"
                      draggable="false"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                    />
                  </div>
                  <div className="absolute top-8 right-0">
                    <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end #9C5EEE bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
                      01
                    </h5>
                  </div>
                  <Link to="/app-development">
                    <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
                      Web Development
                    </button>
                  </Link> 
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
                    Building responsive, user-friendly, scalable websites for enhanced online presence
                  </p>
                  <Link to="/app-development">
                    <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
                      <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Read More
                      </span>
                      <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                  <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
                    <img
                      src="images/service-1.png"
                      draggable="false"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                    />
                  </div>
                  <div className="absolute top-8 right-0">
                    <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end #9C5EEE bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
                      02
                    </h5>
                  </div>
                  <Link to="/UIUX-design">
                    <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
                      UI/UX Design
                    </button>
                  </Link> 
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
                    Creating intuitive, user-friendly designs for exceptional digital experiences
                  </p>
                  <Link to="/UIUX-design">
                    <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
                      <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Read More
                      </span>
                      <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                  <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
                    <img
                      src="images/service-5.png"
                      draggable="false"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                    />
                  </div>
                  <div className="absolute top-8 right-0">
                    <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end #9C5EEE bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
                      03
                    </h5>
                  </div>
                  <Link to="/app-development">
                    <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
                      App Development
                    </button>
                  </Link> 
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
                    Creating user-friendly, scalable, innovative, and secure mobile apps
                  </p>
                  <Link to="/app-development">
                    <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
                      <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Read More
                      </span>
                      <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                  <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
                    <img
                      src="images/service-4.png"
                      draggable="false"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                    />
                  </div>
                  <div className="absolute top-8 right-0">
                    <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end #9C5EEE bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
                      04
                    </h5>
                  </div>
                  <Link to="/digital-marketing">
                    <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
                      Digital Marketing
                    </button>
                  </Link> 
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
                    Digital marketing enhances brand visibility, engagement, and online growth
                  </p>
                  <Link to="/digital-marketing">
                    <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
                      <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Read More
                      </span>
                      <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                  <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
                    <img
                      src="images/service-2.png"
                      draggable="false"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                    />
                  </div>
                  <div className="absolute top-8 right-0">
                    <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end #9C5EEE bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
                      05
                    </h5>
                  </div>
                  <Link to="/video-editing">
                    <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
                      Video Editing
                    </button>
                  </Link> 
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
                    Video editing enhances creativity, storytelling, and visual content impact
                  </p>
                  <Link to="/video-editing">
                    <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
                      <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Read More
                      </span>
                      <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link> 
                </div>
              </div>
              <div>
                <div className="px-10 lg:px-7 2xl:px-10 pt-9 pb-[34px] rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                  <div className="relative pt-[6px] z-10 before:absolute before:top-0 before:-left-[6px] before:w-10 before:h-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-20 group-hover:before:bg-SecondaryColor-0 group-hover:before:opacity-30 before:rounded-full before:-z-10">
                    <img
                      src="images/service-6.png"
                      draggable="false"
                      className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
                    />
                  </div>
                  <div className="absolute top-8 right-0">
                    <h5 className="font-Rajdhani font-semibold text-[26px] w-[70px] h-[50px] pr-5 flex items-center rounded-l-full justify-end #9C5EEE bg-[#e6eefb] transition-all duration-500 group-hover:text-white group-hover:bg-SecondaryColor-0">
                      06
                    </h5>
                  </div>
                  <Link to="#">
                    <button className="font-Rajdhani font-bold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
                      DevOps Services
                    </button>
                  </Link> 
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-6">
                    DevOps services streamline development, improve collaboration, and ensure efficiency
                  </p>
                  <Link to="#">
                    <button className="font-Rajdhani font-medium text-white text-[19px] flex gap-2 items-center transition-all duration-500 -ml-[90px] group-hover:ml-0">
                      <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Read More
                      </span>
                      <span className="text-PrimaryColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center py-28 relative">
          <div className="Container">
            <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
              <div>
                <h5 className="font-Rajdhani text-lg font-semibold #9C5EEE">
                  Dedicated Team
                </h5>
                <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
                  Meet Our Dedicated Member <br />
                  For Any Enquery
                </h1>
              </div>
              <div className="flex lg:justify-end">
                <Link to="/team_inner">
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
                      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                    </svg>
                  </button>
                </Link> 
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-[52px]">
              <div>
                <div className="group relative">
                  <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                    <img
                      src="images/team-1.png"
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
                        <Link to="/">
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
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                            </svg>
                          </button>
                        </Link> 
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
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative">
                  <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                    <img
                      src="images/team-2.png"
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
                        <Link to="/">
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
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                            </svg>
                          </button>
                        </Link> 
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
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative">
                  <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                    <img
                      src="images/team-3.png"
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
                        <Link to="/">
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
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                    <button className="w-11 h-11 rounded-full transition-all duration-500 overflow-hidden bg-PrimaryColor-0 relative z-10 text-white flex justify-center items-center text-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fefefc] before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0">
                      <svg
                        className="relative z-20"
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
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="group relative">
                  <div className="relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
                    <img
                      src="images/team-4.png"
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
                        <Link to="/">
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
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                          </button>
                        </Link> 
                      </li>
                      <li>
                        <Link to="/">
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
                              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                            </svg>
                          </button>
                        </Link> 
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
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="portfolio relative z-10 py-28 bg-SecondaryColor-0 before:absolute before:top-0 before:left-0 before:h-[70%] before:w-full before:bg-[url('/images/portfolio-bg.jpg')] before:-z-10 before:bg-center before:bg-cover before:bg-no-repeat -mb-[1px]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h5 className="font-Rajdhani text-lg font-semibold text-[#9C5EEE]">Our Projects</h5>
              <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
                Excellence in Every Project Trusted  <br />Solutions for Success
              </h1>
            </div>
          </div>
          <div className="mt-[60px] px-4 md:px-10 lg:px-16 xl:px-24 2xl:mx-[100px]">

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={false}
              navigation={false}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              centeredSlides={true}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="pb-[90px]">
                    <div className="portfolio-box relative z-10 overflow-hidden group">
                      <div className="portfolio-img rounded-lg relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:h-full group-hover:before:top-0 before:z-10 group-hover:before:opacity-20">
                        <img src={project.img} draggable="false" className="w-full" />
                      </div>
                      <div className="portfolio-content relative z-10 py-3 xl:-mt-[70px] rounded-l-lg rounded-r-lg xl:rounded-l-none xl:rounded-r-md bg-white xl:w-10/12 2xl:w-9/12 border-l-[7px] pl-7 cborder-PrimaryColor-0 transition-all duration-500 group-hover:rounded-se-none">
                        <div className="flex items-center gap-6 lg:gap-4 xl:gap-6">
                          <h1 className="portfolio-icon font-Rajdhani font-bold text-5xl sm:text-[76px] xl:text-5xl 2xl:text-[76px] text-transparent transition-all duration-500 my-1">{project.number}</h1>
                          <Link to="/project_details">
                            <button className="portfolio-title font-Rajdhani font-semibold text-xl lg:text-lg xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 text-left transition-all duration-500 group-hover:#9C5EEE">
                              {project.title}
                            </button>
                          </Link> 
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="pb-10 relative bg-SecondaryColor-0 z-10 ">
          <div className="Container">
            <div className="text-center">
              <h5 className="font-Rajdhani text-lg font-semibold text-white">
                Working Process
              </h5>
              <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
                We Follow the Easy Working Steps
              </h1>
            </div>
            <div className="pb-16 mt-[60px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
                <div>
                  <div className="text-center group relative">
                    <div className="inline-block m-auto relative z-10 before:absolute before:-top-[13px] before:-left-[13px] before:w-[242px] before:h-[242px] before:border-[2px] before:border-dashed before:custom-border-PrimaryColor-0 before:rounded-full before:animate-rotate">
                      <img src="images/process-1.png" draggable="false" />
                      <img
                        src="images/porcess-shape1.png"
                        draggable="false"
                        className="absolute top-1/2 -translate-y-1/2 -right-[150px] 2xl:-right-[180px] hidden xl:block"
                      />
                      <h6 className="w-[48px] h-[48px] rounded-full bg-PrimaryColor-0 text-white font-Rajdhani font-medium text-[22px] flex justify-center items-center absolute top-0 left-0">
                        01
                      </h6>
                    </div>
                    <h5 className="font-Rajdhani font-semibold text-white text-2xl mt-9 mb-4">
                      Start A Project
                    </h5>
                    <p className="font-Nunito text-TextColor-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                      Start and execute successful projects with strategic planning, innovation, efficiency, and a results-driven approach                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-center group relative">
                    <div className="inline-block m-auto relative z-10 before:absolute before:-top-[13px] before:-left-[13px] before:w-[242px] before:h-[242px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
                      <img src="images/process-2.png" draggable="false" />
                      <img
                        src="images/porcess-shape2.png"
                        draggable="false"
                        className="absolute top-1/2 -translate-y-1/2 -right-[150px] 2xl:-right-[180px] hidden xl:block"
                      />
                      <h6 className="w-[48px] h-[48px] rounded-full bg-PrimaryColor-0 text-white font-Rajdhani font-medium text-[22px] flex justify-center items-center absolute top-0 left-0">
                        02
                      </h6>
                    </div>
                    <h5 className="font-Rajdhani font-semibold text-white text-2xl mt-9 mb-4">
                      Project Analysis
                    </h5>
                    <p className="font-Nunito text-TextColor-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                      Analyze projects strategically for efficiency, sustainability, and successful implementation for growth
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-center group relative">
                    <div className="inline-block m-auto relative z-10 before:absolute before:-top-[13px] before:-left-[13px] before:w-[242px] before:h-[242px] before:border-[2px] before:border-dashed before:border-PrimaryColor-0 before:rounded-full before:animate-rotate">
                      <img src="images/process-3.png" draggable="false" />
                      <img
                        draggable="false"
                        className="absolute top-1/2 -translate-y-1/2 -right-[150px] 2xl:-right-[180px] hidden xl:block"
                      />
                      <h6 className="w-[48px] h-[48px] rounded-full bg-PrimaryColor-0 text-white font-Rajdhani font-medium text-[22px] flex justify-center items-center absolute top-0 left-0">
                        03
                      </h6>
                    </div>
                    <h5 className="font-Rajdhani font-semibold text-white text-2xl mt-9 mb-4">
                      Deliver to Succes
                    </h5>
                    <p className="font-Nunito text-TextColor-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
                      Ensure successful delivery through strategic planning, innovation, efficiency, and sustainable growth solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="testimonial py-28 bg-[url(/images/testi-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden">
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
              <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  style={{
                    transitionDuration: "0ms",
                    transform: "translate3d(-3930px, 0px, 0px)",
                    transitionDelay: "0ms"
                  }}
                >
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={3}
                    style={{ width: 1280, marginRight: 30 }}
                  >
                    <div className="pt-[80px] md:pt-[150px]">
                      <div className="relative text-center">
                        <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                          Completely extend leveraged customer service rather than
                          performance based imperatives. magnetic relationships rather
                          than leveraged e-markets. Rapidiously transform timely niches
                          technology. Enthusiastically e-enable global e-markets for
                          cooperative e-business. Authoritatively deliver highly
                          efficient expertise
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
                          than leveraged e-markets. Rapidiously transform timely niches
                          technology. Enthusiastically e-enable global e-markets for
                          cooperative e-business. Authoritatively deliver highly
                          efficient expertise
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
                    className="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index={0}
                    style={{ width: 1280, marginRight: 30 }}
                  >
                    <div className="pt-[80px] md:pt-[150px]">
                      <div className="relative text-center">
                        <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                          Completely extend leveraged customer service rather than
                          performance based imperatives. magnetic relationships rather
                          than leveraged e-markets. Rapidiously transform timely niches
                          technology. Enthusiastically e-enable global e-markets for
                          cooperative e-business. Authoritatively deliver highly
                          efficient expertise
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
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={1}
                    style={{ width: 1280, marginRight: 30 }}
                  >
                    <div className="pt-[80px] md:pt-[150px]">
                      <div className="relative text-center">
                        <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                          Completely extend leveraged customer service rather than
                          performance based imperatives. magnetic relationships rather
                          than leveraged e-markets. Rapidiously transform timely niches
                          technology. Enthusiastically e-enable global e-markets for
                          cooperative e-business. Authoritatively deliver highly
                          efficient expertise
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
                    data-swiper-slide-index={2}
                    style={{ width: 1280, marginRight: 30 }}
                  >
                    <div className="pt-[80px] md:pt-[150px]">
                      <div className="relative text-center">
                        <p className="font-Nunito sm:text-xl sm:leading-9 text-HeadingColor-0 lg:w-[80%] xl:w-[78%] 2xl:w-[68%] m-auto">
                          Completely extend leveraged customer service rather than
                          performance based imperatives. magnetic relationships rather
                          than leveraged e-markets. Rapidiously transform timely niches
                          technology. Enthusiastically e-enable global e-markets for
                          cooperative e-business. Authoritatively deliver highly
                          efficient expertise
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
                  <span className="swiper-pagination-bullet pagination-bullet" />
                  <span className="swiper-pagination-bullet pagination-bullet swiper-pagination-bullet-active" />
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
        </section> */}

        <section className="pt-16 pb-16 bg-white relative z-10">
          <div className="Container">
            <div className="text-center">
              <h5 className="font-Rajdhani text-lg font-bold text-PrimaryColor-0 flex items-center justify-center gap-2">
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
                TESTIMONIAL
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
              </h5>
              <h1 className="font-Rajdhani font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-4 mb-4 pb-1">
                What Our Loving Clients Saying
              </h1>
            </div>
            <div className="mt-[30px]">

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={false}
                navigation={false}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                centeredSlides={true}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="pt-3">
                      <div className="px-4 sm:px-10 lg:px-5 xl:px-10 pt-8 pb-9 relative bg-[#f1f1f1] group rounded-md z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:rounded-md before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 transition-all duration-500">
                        <div className="flex flex-col md:items-center md:flex-row gap-5 md:gap-4 xl:gap-5 pb-8 border-b border-BorderColor2-0">
                          <div>
                            <img src={testimonial.img} draggable="false" alt={testimonial.name} />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl transition-all duration-500 group-hover:text-white">
                              {testimonial.name}
                            </h5>
                            <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-7">
                          <ul className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <li
                                key={i}
                                className="text-white size-[18px] bg-PrimaryColor-0 flex justify-center items-center text-xs"
                              >
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z" />
                                </svg>
                              </li>
                            ))}
                          </ul>
                          <p className="font-Nunito text-[15px] text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                            {testimonial.date}
                          </p>
                        </div>
                        <p className="font-Nunito text-[18px] text-TextColor2-0 transition-all duration-500 group-hover:text-white pt-8">
                          {testimonial.review}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>



        {/* <section className="bg-[url('/images/video-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[144px] pb-[150px]">
          <div className="Container">
            <div className="text-center">
              <h5 className="font-Rajdhani text-lg font-semibold #9C5EEE">
                Watch Now
              </h5>
              <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[32px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
                Our Best Working Process System <br />
                with Team Expert Leaders
              </h1>
              <div className="flex justify-center mt-10">
                <button className="h-[80px] w-[80px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 52v408l320-204L96 52z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-[50px] bg-[#f3f4f3] bg-cover bg-no-repeat bg-center">
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
                    <h4 className="font-Rajdhani font-semibold text-xl sm:text-[20px] lg:text-xl xl:text-[20px] 2xl:text-[22px] #9C5EEE transition-all duration-500 group-hover:text-white mt-[2px]">
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
                    <h4 className="font-Rajdhani font-semibold text-xl sm:text-[20px] lg:text-xl xl:text-[22px] 2xl:text-[22px] #9C5EEE transition-all duration-500 group-hover:text-white mt-[2px]">
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
                      <path d="M12 2C8.13 2 5 5.13 5 8.5c0 3.54 5 9.5 7 11.5 2-2 7-7.96 7-11.5C19 5.13 15.87 2 12 2zM12 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                    </svg>


                  </div>
                  <div className="flex-1">
                    <h6 className="font-Rajdhani font-semibold text-base text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                      Address
                    </h6>
                    <h4 className="font-Rajdhani font-semibold text-xl sm:text-[20px] lg:text-xl xl:text-[22px] 2xl:text-[22px] #9C5EEE transition-all duration-500 group-hover:text-white mt-[2px]">
                    Sector 51 Noida, UP 201307
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-[35px] pb-16 bg-[url('/images/counter-bg.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="Container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10 lg:grid-cols-4 items-center justify-center">
              {[
                { end: 50, label: 'HAPPY CUSTOMERS' },
                { end: 20, label: 'WORKS COMPLETED' },
                { end: 15, label: 'EXPERT MEMBERS' },
                { end: 99, suffix: '%', label: 'SATISFACTION RATES' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mt-3">
                    <span className="font-Rajdhani text-[50px] font-bold" style={{ color: '#84198e' }}>
                      <CountUp start={0} end={item.end} duration={3} formattingFn={(num) => formatNumber(num, item.suffix)} />
                    </span>
                  </div>
                  <p className="font-Nunito text-[15px] font-bold text-TextColor-0 uppercase" style={{ color: '#84198e' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* <section className="relative overflow-hidden py-28 bg-[url('/images/pricing-bg.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="Container">
            <div className="grid grid-cols-1 gap-10 lg:gap-16 xl:gap-24 2xl:gap-[140px] lg:grid-cols-2 items-center">
              <div className="w-full mx-auto">
                <h5 className="font-Rajdhani text-lg font-semibold #9C5EEE">
                  Pricing Plans
                </h5>
                <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[28px] lg:leading-[38px] xl:text-[32px] xl:leading-[42px] 2xl:text-[37px] 2xl:leading-[47px] text-white mt-[18px] mb-12">
                  Our Best Affordable Pricing Plan <br />
                  Choose Your Plans
                </h1>
                <div>
                  <div className="rounded-md overflow-hidden">
                    <h2>
                      <button
                        className="faq-button flex items-center justify-between w-full text-left hover:bg-PrimaryColor-0 transition-all duration-500 group border-t border-x border-x-transparent border-BorderColor-0"
                        aria-expanded="true"
                        aria-controls="accordion-text-faqs-0"
                      >
                        <span className="text-white font-semibold font-Rajdhani transition duration-400 group-hover:text-white text-base sm:text-lg md:text-2xl lg:text-base xl:text-2xl py-4 !text-white">
                          <span>How to increase products sales 2024?</span>
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          className="text-white bg-transparent -rotate-90 transition duration-400 group-hover:text-white  !text-white rotate-0"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-text-faqs-0"
                      role="region"
                      aria-labelledby="accordion-title-faqs-0"
                      className="grid  text-TextColor-0 bg-transparent overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack grid-rows-[1fr] opacity-100"
                    >
                      <div className="overflow-hidden">
                        <p className="pt-6 pb-11 text-sm sm:text-base !leading-[28px] font-Nunito">
                          Credibly conceptualize multifunctional human capital after
                          that awesome revenue superior scenarios. Collaboratively
                          myocardinate flexible social marketing working
                          technologies and robust services available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md overflow-hidden">
                    <h2>
                      <button
                        className="faq-button flex items-center justify-between w-full text-left hover:bg-PrimaryColor-0 transition-all duration-500 group border-t border-x border-x-transparent border-BorderColor-0"
                        aria-expanded="false"
                        aria-controls="accordion-text-faqs-1"
                      >
                        <span className="text-white font-semibold font-Rajdhani transition duration-400 group-hover:text-white text-base sm:text-lg md:text-2xl lg:text-base xl:text-2xl py-4 false">
                          <span>What kinds of web traffics?</span>
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          className="text-white bg-transparent -rotate-90 transition duration-400 group-hover:text-white false"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-text-faqs-1"
                      role="region"
                      aria-labelledby="accordion-title-faqs-1"
                      className="grid  text-TextColor-0 bg-transparent overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack grid-rows-[0fr] opacity-0"
                    >
                      <div className="overflow-hidden">
                        <p className="pt-6 pb-11 text-sm sm:text-base !leading-[28px] font-Nunito">
                          Credibly conceptualize multifunctional human capital after
                          that awesome revenue superior scenarios. Collaboratively
                          myocardinate flexible social marketing working
                          technologies and robust services available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md overflow-hidden">
                    <h2>
                      <button
                        className="faq-button flex items-center justify-between w-full text-left hover:bg-PrimaryColor-0 transition-all duration-500 group border-t border-x border-x-transparent border-BorderColor-0"
                        aria-expanded="false"
                        aria-controls="accordion-text-faqs-2"
                      >
                        <span className="text-white font-semibold font-Rajdhani transition duration-400 group-hover:text-white text-base sm:text-lg md:text-2xl lg:text-base xl:text-2xl py-4 false">
                          <span>How to generate organic audience?</span>
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          className="text-white bg-transparent -rotate-90 transition duration-400 group-hover:text-white false"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-text-faqs-2"
                      role="region"
                      aria-labelledby="accordion-title-faqs-2"
                      className="grid  text-TextColor-0 bg-transparent overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack grid-rows-[0fr] opacity-0"
                    >
                      <div className="overflow-hidden">
                        <p className="pt-6 pb-11 text-sm sm:text-base !leading-[28px] font-Nunito">
                          Credibly conceptualize multifunctional human capital after
                          that awesome revenue superior scenarios. Collaboratively
                          myocardinate flexible social marketing working
                          technologies and robust services available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md overflow-hidden">
                    <h2>
                      <button
                        className="faq-button flex items-center justify-between w-full text-left hover:bg-PrimaryColor-0 transition-all duration-500 group border-t border-x border-x-transparent border-BorderColor-0"
                        aria-expanded="false"
                        aria-controls="accordion-text-faqs-3"
                      >
                        <span className="text-white font-semibold font-Rajdhani transition duration-400 group-hover:text-white text-base sm:text-lg md:text-2xl lg:text-base xl:text-2xl py-4 false">
                          <span>Do you have any custom services?</span>
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          className="text-white bg-transparent -rotate-90 transition duration-400 group-hover:text-white false"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-text-faqs-3"
                      role="region"
                      aria-labelledby="accordion-title-faqs-3"
                      className="grid  text-TextColor-0 bg-transparent overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack grid-rows-[0fr] opacity-0"
                    >
                      <div className="overflow-hidden">
                        <p className="pt-6 pb-11 text-sm sm:text-base !leading-[28px] font-Nunito">
                          Credibly conceptualize multifunctional human capital after
                          that awesome revenue superior scenarios. Collaboratively
                          myocardinate flexible social marketing working
                          technologies and robust services available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pricing-box active group bg-white rounded-md px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500 mb-[50px]">
                  <h6 className="pricing-quality px-[22px] py-[5px] text-lg bg-PrimaryColor-0 rounded font-Rajdhani text-white font-medium transition-all duration-500 absolute -top-[19px] right-7">
                    Popular
                  </h6>
                  <div className="absolute top-6 sm:top-10 right-7 flex items-baseline gap-1">
                    <span className="pricing-price text-[40px] font-Rajdhani font-semibold text-HeadingColor-0 transition-all duration-500">
                      $99.
                    </span>
                    <h6 className="pricing-price font-Rajdhani font-semibold text-lg transition-all duration-500">
                      99
                    </h6>
                  </div>
                  <h6 className="pricing-limit font-Rajdhani font-semibold text-lg transition-all duration-500 mb-3">
                    FOR 1 YEARS
                  </h6>
                  <div className="flex gap-5">
                    <div className="pricing-icon w-[42px] h-[42px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center relative z-10 overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100 group-hover:#9C5EEE mt-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="pricing-title font-Rajdhani font-semibold mt-2 sm:mt-2 text-2xl sm:text-[28px] text-HeadingColor-0 transition-all duration-500 mb-1">
                        19 Days For Free
                      </h5>
                      <p className="pricing-desc font-Nunito text-TextColor2-0 transition-all duration-500 mb-[26px]">
                        Multifunctional human capital after awesome{" "}
                        <br className="hidden sm:block lg:hidden 2xl:block" />{" "}
                        superior scenarios my coordinate
                      </p>
                      <Link to="/">
                        <button className="pricing-btn font-Rajdhani font-medium text-lg text-HeadingColor-0 border border-PrimaryColor-0 rounded px-7 py-2 transition-all duration-500">
                          Purchaces
                        </button>
                      </Link> 
                    </div>
                  </div>
                </div>
                <div className="pricing-box group bg-white rounded-md px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500">
                  <h6 className="pricing-quality px-[22px] py-[5px] text-lg bg-PrimaryColor-0 rounded font-Rajdhani text-white font-medium transition-all duration-500 absolute -top-[19px] right-7">
                    Business
                  </h6>
                  <div className="absolute top-6 sm:top-10 right-7 flex items-baseline gap-1">
                    <span className="pricing-price text-[40px] font-Rajdhani font-semibold text-HeadingColor-0 transition-all duration-500">
                      $19.
                    </span>
                    <h6 className="pricing-price font-Rajdhani font-semibold text-lg transition-all duration-500">
                      99
                    </h6>
                  </div>
                  <h6 className="pricing-limit font-Rajdhani font-semibold text-lg transition-all duration-500 mb-3">
                    FOR 1 MONTH
                  </h6>
                  <div className="flex gap-5">
                    <div className="pricing-icon w-[42px] h-[42px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center relative z-10 overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100 group-hover:#9C5EEE mt-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="pricing-title font-Rajdhani font-semibold mt-2 sm:mt-2 text-2xl sm:text-[28px] text-HeadingColor-0 transition-all duration-500 mb-1">
                        09 Days For Free
                      </h5>
                      <p className="pricing-desc font-Nunito text-TextColor2-0 transition-all duration-500 mb-[26px]">
                        Multifunctional human capital after awesome{" "}
                        <br className="hidden sm:block lg:hidden 2xl:block" />{" "}
                        superior scenarios my coordinate
                      </p>
                      <Link to="/">
                        <button className="pricing-btn font-Rajdhani font-medium text-lg text-HeadingColor-0 border border-PrimaryColor-0 rounded px-7 py-2 transition-all duration-500">
                          Purchaces
                        </button>
                      </Link> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="py-28 bg-BodyBg-0">
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
                <div>
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
                        <Link to="/blog_details">
                          <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:#9C5EEE mt-2 mb-5">
                            Most Popular Chrome Extensionfor Business Promot
                          </button>
                        </Link> 
                        <Link className="inline-block" to="/blog_details">
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
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
                        <Link to="/blog_details">
                          <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:#9C5EEE mt-2 mb-5">
                            How to Secure your facebook Business Account
                          </button>
                        </Link> 
                        <Link className="inline-block" to="/blog_details">
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
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
                        <Link to="/blog_details">
                          <button className="font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:#9C5EEE mt-2 mb-5">
                            Better Context Menus With Safe Triangles
                          </button>
                        </Link> 
                        <Link className="inline-block" to="/blog_details">
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
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="bg-[url('/images/brand-bg.jpg')] bg-no-repeat bg-center bg-cover pt-[120px] pb-28">
          <div className="Container relative z-10">
            <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "252.5px", marginRight: 30 }}
                  data-swiper-slide-index={0}
                >
                  <div>
                    <img
                      src="images/brand-1.png"
                      draggable="false"
                      className="m-auto"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "252.5px", marginRight: 30 }}
                  data-swiper-slide-index={1}
                >
                  <div>
                    <img
                      src="images/brand-2.png"
                      draggable="false"
                      className="m-auto"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "252.5px", marginRight: 30 }}
                  data-swiper-slide-index={2}
                >
                  <div>
                    <img
                      src="images/brand-3.png"
                      draggable="false"
                      className="m-auto"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "252.5px", marginRight: 30 }}
                  data-swiper-slide-index={3}
                >
                  <div>
                    <img
                      src="images/brand-4.png"
                      draggable="false"
                      className="m-auto"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "252.5px", marginRight: 30 }}
                  data-swiper-slide-index={4}
                >
                  <div>
                    <img
                      src="images/brand-5.png"
                      draggable="false"
                      className="m-auto"
                    />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "252.5px", marginRight: 30 }}
                  data-swiper-slide-index={5}
                >
                  <div>
                    <img
                      src="images/brand-1.png"
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

  );
}
export default Home;