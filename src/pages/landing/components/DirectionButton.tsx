import { Link } from "react-router-dom"
import UpArrow from "../../../assets/images/UpArrow.png"
import { HeadingMonument } from "../../../components/Heading"

const DirectionButton = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-[70px] md:py-[130px] flex flex-col justify-center items-center">
       <Link to={`/direction`} >
       <button className="h-[230px] w-[230px] bg-gradient-to-r from-[#323232] to-[#141414] rounded-full text-white flex justify-center items-center">
          <img src={UpArrow} className="w-[110px] h-[133px] animate-pulse" />
        </button>
       </Link>
        {/* <h1 className="font-bold text-[30px]">DIRECTION BUTTON TO GO TO NEXT SLIDE HIT THE RIGHT </h1> */}
       <div className="flex flex-col py-[36px] text-center">
       <HeadingMonument
          title={`DIRECTION BUTTON TO GO TO`}
          fontSize="text-[24px] md:text-[30px]"
          className="animate-pulse"
        />
        <HeadingMonument
          title={` NEXT SLIDE HIT THE RIGHT`}
          fontSize="text-[24px] md:text-[30px]"
          className="animate-pulse"
        />
       </div>
      </div>
    </div>
  )
}

export default DirectionButton
