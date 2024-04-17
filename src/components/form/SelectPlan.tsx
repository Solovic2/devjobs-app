import { MouseEventHandler, useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { PlanOption, SelectPlanProps } from "../../types/form.types";
import { planOptions } from "../../constants";

const SelectPlan = ({ updateFields }: SelectPlanProps) => {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<PlanOption>(planOptions[0]);

  const handleToggle: MouseEventHandler = () => {
    setPlan((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const handleClick = (selectObject: PlanOption) => {
    updateFields({ planOption: selectObject });
    setSelectedPlan(selectObject);
  };

  useEffect(() => {
    updateFields({ planType: plan });
  }, [plan]);

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <ul className="mt-5 flex flex-col gap-3">
        {planOptions.map((selectObject: PlanOption) => (
          <li
            className={`border-2 rounded-md flex items-center gap-4 p-3 cursor-pointer ${
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
                {plan === "monthly"
                  ? `$${selectObject.monthlyPrice}/mo`
                  : `$${selectObject.yearlyPrice}/yr`}
              </p>
              {plan === "yearly" && (
                <p className="text-main-gray">2 months free</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-7 mb-3 flex justify-center items-center gap-3 font-semibold">
        <p>Monthly</p>
        <button
          type="button"
          className="relative cursor-pointer"
          onClick={handleToggle}
        >
          <div className="border-[1px] w-10 h-6 rounded-full bg-sky-900" />
          <div
            className={`absolute left-1 top-1 bg-white  w-4 h-4 rounded-full transition
            ${plan === "yearly" && "translate-x-[100%]"}`}
          ></div>
        </button>
        <p>Yearly</p>
      </div>
    </FormWrapper>
  );
};
export default SelectPlan;
