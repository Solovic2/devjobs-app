import { useState } from "react";

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
  const [selectedItems, setSelectedItems] = useState([]);

  useMemo(() => updateFields({ addOnsOption: selectedItems }), [selectedItems]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, checked } = e.target;
    const objectParsed: AddOnsOption = JSON.parse(value);
    if (checked) {
      setSelectedItems([...selectedItems, objectParsed]);
    } else {
      setSelectedItems((selectedItem) =>
        selectedItem.filter(
          (element: AddOnsOption) => element.id !== objectParsed.id
        )
      );
    }
  };

  return (
    <>
      <p>{JSON.stringify(selectedItems)}</p>
      {AddOnsOptions.map((addOnsObject) => (
        <div key={addOnsObject.id}>
          <input
            type="checkbox"
            value={JSON.stringify(addOnsObject)}
            id={`${addOnsObject.id}-${addOnsObject.title}`}
            onChange={handleChange}
          />
          <label htmlFor={`${addOnsObject.id}-${addOnsObject.title}`}>
            <h2>{addOnsObject.title}</h2>
            <p>{addOnsObject.description}</p>
            <p>{addOnsObject.price}</p>
          </label>
        </div>
      ))}
    </>
  );
};
export default AddOns;
