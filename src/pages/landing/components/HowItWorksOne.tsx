import leftArrow from "../../../assets/images/Left Arrow.png"
import rightArrow from "../../../assets/images/RightArrow.png"
import { HeadingMonument } from "../../../components/Heading"

// MOCK STEPS DATA
const steps = [
  {
    number: "1",
    title: "It starts with strategy.",
    description:
      "When you sign up we’ll ask you some onboarding questions and do a kickoff call to understand your goals.",
  },
  {
    number: "2",
    title: "It starts with strategy.",
    description:
      "When you sign up we’ll ask you some onboarding questions and do a kickoff call to understand your goals.",
  },
  {
    number: "3",
    title: "It starts with strategy.",
    description:
      "When you sign up we’ll ask you some onboarding questions and do a kickoff call to understand your goals.",
  },
  {
    number: "4",
    title: "It starts with strategy.",
    description:
      "When you sign up we’ll ask you some onboarding questions and do a kickoff call to understand your goals.",
  },
  {
    number: "5",
    title: "It starts with strategy.",
    description:
      "When you sign up we’ll ask you some onboarding questions and do a kickoff call to understand your goals.",
  },
]

const HowItWorksOne = () => {
  return (
    <div className="pt-[36px] h-full bg-[#E7E6E6]">
      <HeadingMonument
        title="How it works?"
        fontSize="text-[48px]"
        className="text-center pb-9"
      />
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-0 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center ${
                index % 2 === 0
                  ? "justify-start py-[20px] md:pb-[150px]"
                  : "justify-end py-[20px] md:pt-[150px]"
              }`}
            >
              {/* STEPS WITH NUMBER AND DESCRIPTION */}
              <div
                className={`flex flex-row ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center ${
                  index % 2 === 0 ? "text-start" : "text-end"
                } md:space-x-5 md:px-0 px-4`}
              >
                <div
                  className={`flex-shrink-0 bg-white rounded-full h-[75px] md:h-[150px] w-[75px] md:w-[150px] flex items-center justify-center shadow-xl ${
                    index % 2 !== 0 && "ml-5"
                  }`}
                >
                  <HeadingMonument
                    title={`${step.number}.`}
                    fontSize="text-[24px] md:text-[48px]"
                  />
                </div>
                <div
                  className={`ml-5 ${index % 2 === 0 ? "" : "lg:ml-0 lg:mr-5"}`}
                >
                  <h3 className="text-[24px] md:text-[34px] font-extrabold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#788790] text-[14px] md:text-[20px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* ARROW POINTING TOWARDS NEXT STEP */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "right-[25%] pt-6" : "left-[25%] pt-10"
                  } top-${index * 25 + 12} lg:block hidden`}
                >
                  <img
                    src={index % 2 === 0 ? rightArrow : leftArrow}
                    alt={`Arrow ${index % 2 === 0 ? "Right" : "Left"}`}
                    className="w-[240px] h-[135px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksOne
