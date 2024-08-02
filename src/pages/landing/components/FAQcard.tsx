import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQcard = () => {
  const [collapseAnswer, setCollapseAnswer] = useState(false);

  return (
    <div>
      <div
        className="flex flex-row bg-white p-[32px] justify-between items-center rounded-[24px] cursor-pointer"
        onClick={() => setCollapseAnswer(!collapseAnswer)}
      >
        <h1 className="font-semibold text-[15px] text-[#131211]">
          What sort of podcasts do you work with?
        </h1>
        <span>
          {collapseAnswer ? (
            <FaMinus className="text-[11px]" />
          ) : (
            <FaPlus className="text-[11px]" />
          )}
        </span>
      </div>

      <div
        className={`transition-all ease-in-out duration-500 ${
          collapseAnswer ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-row bg-[#363636] text-white p-[32px] justify-between items-center rounded-[24px] mt-4 mx-10">
          DUMMY ANSWER HERE
        </div>
      </div>
    </div>
  );
};

export default FAQcard;