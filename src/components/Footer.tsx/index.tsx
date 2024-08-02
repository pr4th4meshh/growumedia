import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import ButtonComponent from "../Button"
import { FOOTER_LINKS } from "../../constants"
import CarouselComponent from "../Carousel"

const OFFERINGS = [
  { id: 1, title: "Thumbnail" },
  { id: 2, title: "Video Edit" },
  { id: 3, title: "Podcast" },
  { id: 4, title: "Pricing" },
  { id: 5, title: "Promotion" },
  { id: 6, title: "Reels / TikTok" },
]

const FooterComponent = () => {
  return (
    <div className="h-full bg-white py-[48px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly">
        {/* LEFT PART OF THE FOOTER */}
        <div className="flex-col w-full">
          <h1 className="text-[36px] text-center md:text-start md:text-[42px] font-medium text-[#131313] leading-[56px]">
            Have a project in mind? <br />
            Let us work together{" "}
          </h1>
          <ButtonComponent
            title="Book an Intro Call"
            showRightArrow
            className="my-[20px] hidden md:flex"
          />
          <div className="flex flex-row md:justify-start justify-center md:py-0 py-[36px]">
            <FaLinkedin className="h-[30px] w-[30px] text-[#818181] mr-4" />
            <FaTwitter className="h-[30px] w-[30px] text-[#818181] mr-4" />
            <FaInstagram className="h-[30px] w-[30px] text-[#818181] mr-4" />
            <FaFacebook className="h-[30px] w-[30px] text-[#818181] mr-4" />
            <FaYoutube className="h-[30px] w-[30px] text-[#818181]" />
          </div>
        </div>

        {/* RIGHT PART OF THE FOOTER */}
        <div className="flex flex-row w-full justify-evenly">
          {FOOTER_LINKS.map((footer) => (
            <div className="flex flex-col text-[14px] md:text-[16px]" key={footer.id}>
              <h1 className="text-gray-400 pb-[17px]">{footer.linkTitle}</h1>
              <span className="gap-y-2 md:gap-y-3 text-[#667085] flex flex-col">
                {footer.links.map((link) => (
                  <span>{link.linkContent}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* OFFERINGS CAROUSEL */}
      <CarouselComponent>
        <div className="flex flex-row py-[16px] md:py-[22px]">
          {OFFERINGS.concat(OFFERINGS).map((offering, index) => (
            <h1
              key={index}
              className={`text-[64px] md:text-[90px] leading-[67px] font-semibold mx-[50px] ${
                offering.id % 2 === 0
                  ? "text-white text-outline"
                  : "text-[#2E2E2E]"
              } `}
              data-text={offering.title}
            >
              {offering.title}
            </h1>
          ))}
        </div>
      </CarouselComponent>

      {/* DEVELOPMENT REGARDS */}
      <h1 className="text-center text-[18px] text-[#98A2B3]">
        © 2024 Growumedia. All rights reserved.
      </h1>
    </div>
  )
}

export default FooterComponent
