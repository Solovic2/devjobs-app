import { MouseEventHandler, useState } from "react";
import { PlanOption } from "../../pages/Form";

type SelectPlanProps = {
  updateFields: (fields: { planOption: PlanOption }) => void;
};

const selectPlanOptions: PlanOption[] = [
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

const SelectPlan = ({ updateFields }: SelectPlanProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggle: MouseEventHandler = () => {
    setIsToggled((prev) => !prev);
  };
  
  return (
    <>
      <ul>
        {selectPlanOptions.map((selectObject: PlanOption) => (
          <li
            key={selectObject.id}
            onClick={() => updateFields({ planOption: selectObject })}
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
