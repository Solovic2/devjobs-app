import { MouseEventHandler, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { PlanOption } from "../../types/form.types";
import { planOptions } from "../../constants";

type Plan = {
  planOption: PlanOption;
  planType: "monthly" | "yearly";
};
export type SelectPlanProps = {
  updateFields: (fields: Partial<Plan>) => void;
};

const SelectPlan = ({ updateFields }: SelectPlanProps) => {
  const [planType, setPlanType] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<PlanOption>(planOptions[0]);

  const handleToggle: MouseEventHandler = () => {
    setPlanType((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const handleClick = (selectObject: PlanOption) => {
    updateFields({ planOption: selectObject });
    setSelectedPlan(selectObject);
    updateFields({ planType: planType });
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <ul className="mt-5 flex flex-col lg:flex-row lg:w-full lg:justify-between gap-3 lg:gap-5">
        {planOptions.map((selectObject: PlanOption) => (
          <li
            className={`border-2 lg:w-1/3 rounded-md flex lg:flex-col items-center lg:items-start gap-4 lg:gap-12 p-3 lg:p-5 select-none cursor-pointer ${
              selectedPlan.title === selectObject.title && "border-main-violet"
            } `}
            key={selectObject.id}
            onClick={() => handleClick(selectObject)}
          >
            <div className="">
              <img src={selectObject.img} alt={selectObject.title} />
            </div>
            <div className="">
              <h2 className="font-bold">{selectObject.title}</h2>
              <p className="text-main-gray">
                {planType === "monthly"
                  ? `$${selectObject.monthlyPrice}/mo`
                  : `$${selectObject.yearlyPrice}/yr`}
              </p>
              <p className='text-main-gray h-5'>{planType === "yearly" && '2 months free'}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-7 lg:mt-12 mb-3 flex justify-center items-center gap-3 font-semibold">
        <p>Monthly</p>
        <button
          type="button"
          className="relative cursor-pointer"
          onClick={handleToggle}
        >
          <div className="border-[1px] w-10 h-6 rounded-full bg-sky-900" />
          <div
            className={`absolute left-1 top-1 bg-white  w-4 h-4 rounded-full transition
            ${planType === "yearly" && "translate-x-[100%]"}`}
          ></div>
        </button>
        <p>Yearly</p>
      </div>
    </FormWrapper>
  );
};
export default SelectPlan;
