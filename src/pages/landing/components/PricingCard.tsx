import ButtonComponent from "../../../components/Button"
import AvatarImage from "../../../assets/images/JonShermanAvatar.png"
import { FaFire } from "react-icons/fa"

interface PricingCardProps {
  backgroundBlack?: boolean
}

const PricingCard = ({ backgroundBlack }: PricingCardProps) => {
  return (
    <div
      className={`h-auto max-w-[530px] ${
        backgroundBlack ? "bg-[#131211]" : "bg-white"
      } rounded-[24px] p-3`}
    >
      <div className="">
        {/* UPPER PART OF THE CARD */}

        <div
          className={`border border-solid ${
            backgroundBlack ? "bg-[#363636] border-none" : "bg-white border-[#E0DFDF]"
          } rounded-[24px] p-[15px] md:p-[21px]`}
        >
          <div className="flex flex-col p-[21px] mb-[24px] md:mb-[60px]">
            <h1
              className={`font-medium text-[28px] pb-[19px] ${
                backgroundBlack ? "text-white" : "text-[#131211]"
              }`}
            >
              Premium
            </h1>
            <p
              className={`text-[14px] md:text-[16px] ${
                backgroundBlack ? "text-white" : "text-[#788790]"
              }`}
            >
              A Competitive Repurposing Solution: For new or expanding podcasts,
              unlock higher content discovery, engagement, and audience growth
              today.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col">
              <h1
                className={`font-semibold text-[32px] ${
                  backgroundBlack ? "text-white" : "text-[#131211]"
                }`}
              >
                $ 6,000 /mo
              </h1>
              <ButtonComponent
                title="Book an Intro Call"
                showRightArrow
                className="h-[44px]"
                backgroundWhite={backgroundBlack}
              />
            </div>

            <div
              className={`border border-solid border-[#E0DFDF] w-full md:mt-0 mt-4 md:w-auto h-min py-[9px] px-[13px] rounded-[10px] ${
                backgroundBlack ? "text-white" : "text-[#131211]"
              }`}
            >
              <div className="flex flex-row justify-between pb-[8px]">
                <div className="flex flex-row">
                  <img
                    src={AvatarImage}
                    className="h-[24px] w-[24px] rounded-full mr-3"
                    alt="Pricing_Card_Avatar_Image"
                  />
                  <span className="text-[12px] ">Sahil Bloom</span>
                </div>
                <FaFire className="h-[16px] w-[16px]" />
              </div>
              <h1 className="text-[12px] italic ">
                "That new brand is absolutely fire."
              </h1>
            </div>
          </div>
        </div>

        {/* LOWER PART OF THE CARD */}
        <div className="flex flex-wrap text-[14px] text-[#788790] pt-[20px] px-5 gap-[10px]">
          <h1>30 repurposed short videos a month</h1>
          <h1>Thumbnails for all assets</h1>
          <h1>8 repurposed medium-length youtube videos</h1>
          <h1>Cinematic teaser trailer for each episode</h1>
          <h1>All posted on YT, IG, FB, TT & LI</h1>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
