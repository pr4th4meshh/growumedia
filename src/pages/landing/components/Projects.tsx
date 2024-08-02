import { useState } from "react"
import ButtonComponent from "../../../components/Button"
import { HeadingMonument } from "../../../components/Heading"
import { PROJECT_TABS } from "../../../constants"
import { Link } from "react-router-dom"

const ProjectsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(PROJECT_TABS[0].id)
  return (
    <div className="h-full bg-[#E7E6E6] py-[36px]">
      <div className="flex flex-col container-sm mx-4 md:mx-28">
        <HeadingMonument
          title="Our Projects"
          fontSize="text-[48px] text-center pb-[36px]"
        />

        {/* LINKS AND TABS TO SWITCH BETWEEN DISPLAY COMPONENTS */}
        <div className="md:flex md:flex-wrap grid grid-cols-3 gap-[20px]">
          {PROJECT_TABS.map((tab) => (
            <ButtonComponent
              title={tab.label}
              key={tab.id}
              className={`rounded-full transition ease-in ${
                selectedTab === tab.id
                  ? "text-[#ffffff] md:px-[64px] md:py-[24px]"
                  : "text-[#696687] md:py-[42px] md:px-[64px]"
              }`}
              {...(selectedTab !== tab.id && { backgroundWhite: true })}
              onClick={() => setSelectedTab(tab.id)}
            />
          ))}
        </div>

        {/* PROJECTS SHOWCASE DISPLAY */}
        <div className="grid md:grid-cols-3 gap-8 py-[48px]">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <Link to={`/project_${index + 1}`}>
                <img
                  src="https://via.placeholder.com/600x600"
                  alt={`Project ${index}`}
                  key={index}
                  className="h-[258px] w-full rounded-sm cursor-pointer object-cover"
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent
