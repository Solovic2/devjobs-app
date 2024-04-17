import { FormEvent, FormEventHandler, useState } from "react";
import AddOns from "../components/form/AddOns";
import SelectPlan from "../components/form/SelectPlan";
import Summary from "../components/form/Summary";
import YourInfo from "../components/form/YourInfo";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import FormStepper from "../components/form/FormStepper";

export type PlanOption = {
  id: number;
  img: string;
  title: string;
  price: string;
};

export type AddOnsOption = {
  id: number;
  isChecked: boolean;
  title: string;
  description: string;
  price: string;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  planOption: PlanOption;
  addOnOptions: AddOnsOption[] | undefined;
  summary: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  planOption: {
    id: 1,
    img: "",
    title: "Arcade",
    price: "$90/yr",
  },
  addOnOptions: undefined,
  summary: "",
};

const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    console.log(fields);

    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <YourInfo {...data} updateFields={updateFields} />,
      <SelectPlan {...data} updateFields={updateFields} />,
      <AddOns {...data} updateFields={updateFields} />,
      <Summary {...data} />,
    ]);

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStepIndex === steps.length - 1) {
      // submit
      console.log(data);
    } else {
      next();
    }
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col md:flex-row items-center md:justify-center">
      <FormStepper />
      <form onSubmit={handleSubmit} className="h-full flex flex-col items-center justify-between">
        {step}
        <div className={isFirstStep ? "w-full p-4 font-semibold bg-white dark:bg-secondary-dark flex justify-end" : "w-full p-4 font-semibold bg-white dark:bg-secondary-dark flex justify-between"}>
          {!isFirstStep && (
            <button type="button" className="text-main-gray" onClick={back}>
              Go Back
            </button>
          )}
          <button type="submit" className='bg-sky-900 text-white py-2 px-3 rounded'>{isLastStep ? "Confirm" : "Next Step"}</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
