import { FaArrowRight } from "react-icons/fa"

const SeeMoreCard = () => {
  return (
    <div className="flex flex-row bg-gradient-to-r from-[#323232] to-[#141414] px-[24px] py-[15px] justify-between items-center rounded-[24px] cursor-pointer shadow-xl">
      <h1 className="text-[28px] flex items-center mx-auto text-white">
        See More Questions <FaArrowRight className="ml-3" />
      </h1>
    </div>
  )
}

export default SeeMoreCard
