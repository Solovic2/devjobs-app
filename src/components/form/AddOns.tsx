import { ChangeEventHandler, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { AddOnsOption } from "../../types/form.types";
import { AddOnsOptions } from "../../constants";

type AddOnOption = {
  addOnOptions: AddOnsOption[] | undefined;
};
type PlanType = {
  planType: "monthly" | "yearly";
};
export type AddOnsProps = PlanType & {
  updateFields: (fields: Partial<AddOnOption>) => void;
};

const AddOns = ({ planType, updateFields }: AddOnsProps) => {
  const [selectedItems, setSelectedItems] = useState<AddOnsOption[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, checked } = e.target;
    const objectParsed: AddOnsOption = JSON.parse(value);
    const updatedItems = [...selectedItems, objectParsed];
    if (checked) {
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems((selectedItem) =>
        selectedItem.filter(
          (element: AddOnsOption) => element.id !== objectParsed.id
        )
      );
    }
    updateFields({ addOnOptions: updatedItems });
  };

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
            className={`mt-5 flex gap-5 p-4 lg:p-5 w-full  border cursor-pointer rounded-md select-none ${
              isChecked && "border-main-violet"
            }`}
          >
            <input
              className="accent-main-violet w-5 cursor-pointer"
              type="checkbox"
              value={JSON.stringify(addOnsObject)}
              id={`${addOnsObject.id}-${addOnsObject.title}`}
              onChange={handleChange}
            />
            <label
              htmlFor={`${addOnsObject.id}-${addOnsObject.title}`}
              className="w-full flex justify-between items-center cursor-pointer"
            >
              <div className="flex flex-col justify-center">
                <h2 className=" font-bold">{addOnsObject.title}</h2>
                <p className="mt-1 text-main-gray text-sm">
                  {addOnsObject.description}
                </p>
              </div>
              <p className="text-main-violet  font-bold">
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
