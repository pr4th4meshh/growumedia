import { ReactNode } from "react"
import { FaArrowRight } from "react-icons/fa"

interface ButtonProps {
  title: string | ReactNode
  className?: string
  backgroundWhite?: boolean
  showRightArrow?: boolean
  onClick?: () => void
}

const ButtonComponent = ({
  title,
  className,
  backgroundWhite,
  showRightArrow,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`flex flex-row items-center justify-center cursor-pointer rounded-[32px] whitespace-nowrap font-normal h-[64px] px-8 ${
        backgroundWhite
          ? "bg-[#F0EFEF] text-black border border-solid border-[#E0DFDF]"
          : "bg-gradient-to-t from-black to-[#2a2a2a] text-white"
      }  ${className}`}
      onClick={onClick}
    >
      {title} {showRightArrow && <FaArrowRight className="ml-2 font-light" />}
    </button>
  )
}

export default ButtonComponent
