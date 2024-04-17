import { MouseEventHandler, useState } from "react";
import { PlanOption } from "../../pages/Form";
import { FormWrapper } from "./FormWrapper";

type SelectPlanProps = {
  updateFields: (fields: { planOption: PlanOption }) => void;
};

const selectPlanOptions: PlanOption[] = [
  {
    id: 1,
    img: "/src/assets/form/icon-arcade.svg",
    title: "Arcade",
    price: "$90/yr",
  },
  {
    id: 2,
    img: "/src/assets/form/icon-advanced.svg",
    title: "Advanced",
    price: "$120/yr",
  },
  {
    id: 3,
    img: "/src/assets/form/icon-pro.svg",
    title: "Pro",
    price: "$150/yr",
  },
];

const SelectPlan = ({ updateFields }: SelectPlanProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggle: MouseEventHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <ul className="mt-5 flex flex-col gap-3">
        {selectPlanOptions.map((selectObject: PlanOption) => (
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
              <p className="text-main-gray">{selectObject.price}</p>
              {isToggled && <p className="text-main-gray">2 months free</p>}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-7 mb-3 flex justify-center items-center gap-3 font-semibold">
        <p>Monthly</p>
        <button type="button" onClick={handleToggle}>
          Click Me
        </button>
        <p>Yearly</p>
      </div>
    </FormWrapper>
  );
};
export default SelectPlan;
