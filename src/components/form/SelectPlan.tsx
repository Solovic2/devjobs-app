import { MouseEventHandler, useState } from "react";
import { CheckboxGroup } from "../../context/CheckboxGroupContext";
import Checkbox from "./Checkbox";

export type SelectPlanData = {
  planOption: selectPlanOption;
};
type SelectPlanProps = SelectPlanData & {
  updateFields: (fields: Partial<SelectPlanData>) => void;
};
export type selectPlanOption = {
  id: number;
  img: string;
  title: string;
  price: string;
};

const selectPlanOptions: selectPlanOption[] = [
  {
    id: 1,
    img: "",
    title: "Arcade",
    price: "$90/yr",
  },
  {
    id: 2,
    img: "",
    title: "Advanced",
    price: "$120/yr",
  },
  {
    id: 3,
    img: "",
    title: "Pro",
    price: "$150/yr",
  },
];

const SelectPlan = ({ planOption, updateFields }: SelectPlanProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggle: MouseEventHandler = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <>
      <ul>
        {selectPlanOptions.map((selectObject: selectPlanOption) => (
          <li
            key={selectObject.id}
            onClick={(e) => updateFields({ planOption: selectObject })}
          >
            <img src={selectObject.img} alt={selectObject.title} />
            <h2>{selectObject.title}</h2>
            <p>{selectObject.price}</p>
            {isToggled && <p>2 months free</p>}
          </li>
        ))}
      </ul>
      <div>
        <p>Monthly</p>
        <button type="button" onClick={handleToggle}>
          Click Me
        </button>
        <p>Yearly</p>
      </div>
    </>
  );
};
export default SelectPlan;
