import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../public/images/GrowUMediaLogo.png"
import { NAVBAR_ITEMS_LIST } from "../../constants"
import ButtonComponent from "../Button"
import { HeadingMonument } from "../Heading"
import { FaBars, FaTimes } from "react-icons/fa"

const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`w-full fixed z-[999] bg-transparent md:bg-white shadow-none md:shadow-md mt-5 md:mt-10 flex justify-center`}>
      <div className="flex flex-row justify-between items-center p-5 bg-white shadow-md rounded-[48px] fixed z-[999] container mx-auto">
      <div className="flex flex-row justify-center items-center">
          <img src={Logo} alt="GrowUMedia Logo" />
          <HeadingMonument
            title="GrowuMedia"
            fontSize="text-[24px]"
            className="ml-3"
          />
        </div>

        <div className="hidden md:flex flex-row justify-center items-center gap-5">
          {NAVBAR_ITEMS_LIST.map((item) => (
            <Link
              key={item.label}
              to={`/${item.label}`}
              className="text-[18px] font-medium text-[#131211]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/booking" className="hidden md:block">
          <ButtonComponent title="Book an Intro" showRightArrow />
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden flex flex-col items-center bg-white w-full py-5 mt-[130px] mx-10 rounded-lg`}>
          {NAVBAR_ITEMS_LIST.map((item) => (
            <Link
              key={item.label}
              to={`/${item.label}`}
              className="text-[18px] font-medium text-[#131211] mb-2"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/booking" onClick={toggleMobileMenu}>
            <ButtonComponent title="Book an Intro" showRightArrow />
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavbarComponent