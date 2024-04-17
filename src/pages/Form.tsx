import { useState } from "react";
import AddOns from "../components/form/AddOns";
import SelectPlan from "../components/form/SelectPlan";
import Summary from "../components/form/Summary";
import YourInfo from "../components/form/YourInfo";
import { useMultistepForm } from "../hooks/useMultistepForm";
import FormStepper from "../components/form/FormStepper";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <YourInfo {...data} updateFields={updateFields} />,
      <SelectPlan {...data} updateFields={updateFields} />,
      <AddOns {...data} updateFields={updateFields} />,
      <Summary {...data} updateFields={updateFields} />,
    ]);

  return (
    <div>
      <form action="">
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
