import { ReactNode } from "react"

const CarouselComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="carousel-container overflow-hidden py-14">
      <div className="carousel-track flex animate-scroll">{children}</div>
    </div>
  )
}

export default CarouselComponent
