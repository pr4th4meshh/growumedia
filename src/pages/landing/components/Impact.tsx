import { HeadingMonument } from "../../../components/Heading"
import ImpactDisplayImage from "../../../assets/images/ImpactDisplay.png"

const ImpactComponent = () => {
  return (
    <div className="container-sm mx-4 md:mx-20 h-full">
      <div className="flex flex-col">
        <HeadingMonument title="Our Impact" fontSize="text-[48px] text-center pb-[36px]" />
        <img src={ImpactDisplayImage} className="h-[300px] md:h-[900px]" alt="Impact_Display_Image" />
      </div>
    </div>
  )
}

export default ImpactComponent