import { MouseEventHandler, useEffect, useMemo, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { PlanOption, SelectPlanProps } from "../../types/form.types";
import { planOptions } from "../../constants";

const SelectPlan = ({ updateFields }: SelectPlanProps) => {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");

  const handleToggle: MouseEventHandler = () => {
    setPlan((prev) => (prev === "monthly" ? "yearly" : "monthly"));
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
            className="border-2 rounded-md flex items-center gap-4 p-3"
            key={selectObject.id}
            onClick={() => updateFields({ planOption: selectObject })}
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
        <button type="button" onClick={handleToggle}>
          {plan}
        </button>
        <p>Yearly</p>
      </div>
    </FormWrapper>
  );
};
export default SelectPlan;
