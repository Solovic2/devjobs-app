import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { AddOnsOption } from "../../pages/Form";
import { FormWrapper } from "./FormWrapper";

type AddOnsProps = { planType: "monthly" | "yearly" } & {
  updateFields: (
    fields: Partial<{
      addOnOptions: AddOnsOption[] | undefined;
    }>
  ) => void;
};
const AddOnsOptions: AddOnsOption[] = [
  {
    id: 0,
    isChecked: false,
    title: "Online Service",
    description: "Access to multiplayer games",
    monthlyPrice: "1",
    yearlyPrice: "10",
  },
  {
    id: 1,
    isChecked: false,
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
  {
    id: 2,
    isChecked: false,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
];
const AddOns = ({ planType, updateFields }: AddOnsProps) => {
  const [selectedItems, setSelectedItems] = useState<AddOnsOption[]>([]);

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

  useEffect(
    () => updateFields({ addOnOptions: selectedItems }),
    [selectedItems]
  );
  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
    >
      {AddOnsOptions.map((addOnsObject) => {
        const isChecked = selectedItems.find(
          (element) => element.id === addOnsObject.id
        );
        return (
          <div
            key={addOnsObject.id}
            className={`mt-5 flex gap-5 p-2 w-full  border cursor-pointer rounded-md ${
              isChecked && "border-main-violet"
            }`}
          >
            <input
              className="accent-main-violet w-4"
              type="checkbox"
              value={JSON.stringify(addOnsObject)}
              id={`${addOnsObject.id}-${addOnsObject.title}`}
              onChange={handleChange}
            />
            <label
              htmlFor={`${addOnsObject.id}-${addOnsObject.title}`}
              className="w-full flex justify-between items-center "
            >
              <div className="flex flex-col justify-center">
                <h2 className="text-sm font-bold">{addOnsObject.title}</h2>
                <p className="mt-1 text-main-gray text-xs">
                  {addOnsObject.description}
                </p>
              </div>
              <p className="text-main-violet text-xs font-bold">
                {planType === "monthly"
                  ? `$${addOnsObject.monthlyPrice}/mo`
                  : `$${addOnsObject.yearlyPrice}/yr`}
              </p>
            </label>
          </div>
        );
      })}
    </FormWrapper>
  );
};
export default AddOns;
