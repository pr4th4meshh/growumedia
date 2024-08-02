import { HeadingMonument } from "../../../components/Heading"
import { WHY_WE_DATA } from "../../../constants"
import WhyWeImage from "../../../assets/images/WhyWeImage.png"
import TestimonialCard from "./TestimonialCard"
import CarouselComponent from "../../../components/Carousel"
import AvatarImage from "../../../assets/images/JonShermanAvatar.png"

const templateTestimonial = {
  name: "Jon Sherman",
  position: "Founder at Practical Golf",
  message: `Every team member you hire is rigorously trained to deliver work
  of the highest quality while following your team's process.`,
  avatar: AvatarImage,
}

const TestimonialCardData = Array.from({ length: 10 }, () => ({
  ...templateTestimonial,
}))

const WhyWeComponent = () => {
  return (
    <div className="pt-[36px] h-full">
      <div className="container mx-auto">
        <HeadingMonument
          title="Why We?"
          fontSize="text-[48px] text-[#3F3E3D]"
          className="text-center pb-9"
        />

        {/* SPECIALITY HIGHLIGHTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT PART */}
          <div className="flex flex-col gap-[24px] md:gap-[48px] pr-0 md:pr-[35px] md:mx-0 mx-4">
            {WHY_WE_DATA.map((highlight) => (
              <div className="flex flex-col flex-1" key={highlight.id}>
                <h1 className="text-[36px] font-extrabold pb-6 text-center md:text-start ">
                  {highlight.heading}
                </h1>
                <p className="text-[18px] md:text-[24px] text-[#788790] text-center md:text-start">
                  {highlight.paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT PART */}
          <div className="flex">
            <img
              src={WhyWeImage}
              className="md:flex hidden object-contain"
              alt="Why_We_Image"
            />
          </div>
        </div>
      </div>

      {/* CLIENT TESTIMONIALS */}
      <CarouselComponent>
      <div className="pt-[48px] md:pt-[96px]">
        <div className="flex flex-row space-x-[16px]">
          {TestimonialCardData.concat(TestimonialCardData).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              username={testimonial.name}
              position={testimonial.position}
              message={testimonial.message}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
      </CarouselComponent>
    </div>
  )
}

export default WhyWeComponent
