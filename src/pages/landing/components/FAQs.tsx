import ButtonComponent from "../../../components/Button"
import { HeadingMonument } from "../../../components/Heading"
import FAQcard from "./FAQcard"
import SeeMoreCard from "./SeeMoreCard"

const FAQsComponent = () => {
  return (
    <div className="h-full py-[36px] md:px-0 px-4">
      <div className="container mx-auto">
        <HeadingMonument
          title="Faq's"
          fontSize="text-[48px] text-[#3F3E3D]"
          className="text-center pb-9"
        />

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {Array(11)
            .fill(null)
            .map((_, index) => (
              <FAQcard key={index} />
            ))}
          <SeeMoreCard />
        </div>

            {/* HAVE A QUESTION COMPONENT */}
        <div className="flex flex-col md:flex-row justify-between p-[16px] md:p-[32px] bg-white items-center rounded-[24px] mt-[36px]">
          <h1 className="font-semibold text-[21px] text-[#131211]">Have a question about pricing?</h1>
          <div className="flex md:mt-0 mt-5">
            <ButtonComponent title="Book a call" className="text-[14px] h-[44px]" />
            <ButtonComponent title="Email us" className="text-[14px] text-[#131211] bg-white ml-3 h-[44px]" backgroundWhite />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQsComponent
