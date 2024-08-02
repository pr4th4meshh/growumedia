import { HeadingMonument } from "../../../components/Heading"
import PricingCard from "./PricingCard"

const HowItWorksTwo = () => {
  return (
    <div className="h-full pt-[36px]">
      <div className="container mx-auto">
        <HeadingMonument
          title="How it works ?"
          fontSize="text-[48px] text-center pb-[36px]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:mx-0 mx-3 ">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div className={`flex ${index % 2===0 ? "justify-end" : "justify-start"}`}>
            <PricingCard key={index} {...(index === 3 && {backgroundBlack: true})} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksTwo
