import FooterComponent from "../../components/Footer.tsx"
import NavbarComponent from "../../components/Navbar"
import DirectionButton from "./components/DirectionButton"
import FAQsComponent from "./components/FAQs"
import HeroComponent from "./components/Hero"
import HowItWorksTwo from "./components/HowItWorks"
import HowItWorksOne from "./components/HowItWorksOne"
import ImpactComponent from "./components/Impact"
import ProjectsComponent from "./components/Projects"
import WhyWeComponent from "./components/WhyWeSection"

const LandingPage = () => {
  return (
    <>
      {/* <div className="pt-10 w-screen flex justify-center"> */}
        <NavbarComponent />
      {/* </div> */}
      <HeroComponent />
      <ImpactComponent />
      <ProjectsComponent />
      <WhyWeComponent />
      <HowItWorksOne />
      <HowItWorksTwo />
      <FAQsComponent />
      <DirectionButton />
      <FooterComponent />
    </>
  )
}

export default LandingPage
