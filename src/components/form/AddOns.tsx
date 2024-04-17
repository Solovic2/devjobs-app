import {
  ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useState,
} from "react";
import { CheckboxGroup } from "../../context/CheckboxGroupContext";
import Checkbox from "./Checkbox";

export type AddOnsData = {
  addOnsOption: AddOnsOption[];
};
type AddOnsProps = AddOnsData & {
  updateFields: (fields: Partial<AddOnsData>) => void;
};
export type AddOnsOption = {
  id: number;
  isChecked: boolean;
  title: string;
  description: string;
  price: string;
};
const AddOnsOptions: AddOnsOption[] = [
  {
    id: 0,
    isChecked: false,
    title: "Online Service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    id: 1,
    isChecked: false,
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    id: 2,
    isChecked: false,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: "+$2/mo",
  },
];
const AddOns = ({ addOnsOption, updateFields }: AddOnsProps) => {
  const [selectedItems, setselectedItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const handleChecked = (e, id) => {
    setCheckedItems({
      ...checkedItems,
      [id]: e.target.checked,
    });
  };

  return (
    <>
      <ul>
        {AddOnsOptions.map((addOnsObject) => (
          <li key={addOnsObject.id}>
            <input
              type="checkbox"
              value={addOnsObject.id}
              onChange={(e) => handleChecked(e, addOnsObject.id)}
            />
            <h2>{addOnsObject.title}</h2>
            <p>{addOnsObject.description}</p>
            <p>{addOnsObject.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default AddOns;
