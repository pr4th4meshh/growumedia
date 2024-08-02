import { FaArrowRight } from "react-icons/fa"
import ButtonComponent from "../../../components/Button"
import { HeadingBulgatti, HeadingMonument } from "../../../components/Heading"
import { RESULTS_DISPLAY } from "../../../constants"
import CarouselComponent from "../../../components/Carousel"

import CompanyOne from "../../../assets/images/GoodInside.png"
import CompanyTwo from "../../../assets/images/WalkerAndGroup.png"
import CompanyThree from "../../../assets/images/1440.png"

const companyLogos = [
  { src: CompanyOne, alt: "Company 1" },
  { src: CompanyTwo, alt: "Company 2" },
  { src: CompanyThree, alt: "Company 3" },
  { src: CompanyOne, alt: "Company 1" },
  { src: CompanyTwo, alt: "Company 2" },
  { src: CompanyThree, alt: "Company 3" },
]

const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center self-stretch h-full pt-[150px]">
      {/* MAIN HERO */}
      <div className="flex flex-col items-center justify-center pt-20">
        <HeadingBulgatti title="Not Just Another" fontSize="text-[64px] md:text-[84px]" className="text-center" />
        <h1 className="text-4xl md:text-6xl">Video Editing Agency</h1>
        <h1 className="text-xl md:text-[24px] text-[#6B6A6A] text-center pt-6 px-4 md:px-0 ">
          {" "}
          We Help You To Start A New Or Grow Your Existing Podcast That Unlocks{" "}
          <br />
          Opportunities &{" "}
          <span className="font-bold text-black">
            Leads, Expands Impact And Increases Revenue.
          </span>
        </h1>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col md:flex-row gap-[20px] py-[38px]">
        <ButtonComponent title="View Plans and Pricing" backgroundWhite />
        <ButtonComponent title="Our Projects" showRightArrow />
      </div>

      {/* RESULTS DISPLAY */}
      <div className="flex flex-col container mx-auto">
        <HeadingMonument
          title="Our Results "
          fontSize="text-[28px]"
          className="text-center pb-[16px] pt-[30px]"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-14 md:gap-20 px-5 md:px-0">
          {RESULTS_DISPLAY.map((item) => (
            <span className=" font-bold text-[18px] md:text-[24px] flex flex-row justify-center items-center border-t border-[#E0DFDF] p-5">
              {" "}
              <FaArrowRight className="text-[#FFCC00] font-light mr-[10px] md:mr-[16px]" />{" "}
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* COMPANIES / BRANDS CAROUSEL */}
      <CarouselComponent>
        {companyLogos.concat(companyLogos).map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={logo.src} alt={logo.alt} className="h-20" />
          </div>
        ))}
      </CarouselComponent>
    </div>
  )
}

export default HeroComponent
