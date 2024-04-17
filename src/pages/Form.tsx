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
    <div>
      <form onSubmit={handleSubmit}>
        <FormStepper />
        {step}
        <div>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Go Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Confirm" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
