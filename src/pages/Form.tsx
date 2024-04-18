import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import AddOns from "../components/form/AddOns";
import SelectPlan from "../components/form/SelectPlan";
import Summary from "../components/form/Summary";
import YourInfo from "../components/form/YourInfo";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import FormStepper from "../components/form/FormStepper";
import { FormData } from "../types/form.types";
import { initialData } from "../constants";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState(initialData);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const navigate = useNavigate()

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <YourInfo
        name={data.name}
        email={data.email}
        phone={data.phone}
        updateFields={updateFields}
      />,
      <SelectPlan updateFields={updateFields} />,
      <AddOns planType={data.planType} updateFields={updateFields} />,
      <Summary {...data} />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStepIndex === steps.length - 1) {
      setIsSubmitted(true);
    } else {
      next();
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timeOutId = setTimeout(() => {
        navigate("/")
      },3000)
      return () => {
        clearTimeout(timeOutId)
      }
    }
  }, [isSubmitted])
  

  return (
    <div className="w-full h-[100dvh] bg-form-topBar lg:bg-none bg-no-repeat lg:p-5 flex flex-col lg:flex-row items-center lg:justify-center ">
      <FormStepper index={currentStepIndex} />
      {isSubmitted ? (
        <div className="h-full w-full flex flex-col items-center gap-5 bg-white rounded-xl  lg:basis-2/3">
          <div className=""><img src="/src/assets/form/icon-thank-you.svg" alt="" /></div>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We have fun using our platform. If you ever need support, please feel free to email us at support@devjobs.com.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col items-center justify-between lg:basis-2/3"
        >
          {step}
          <div
            className={
              isFirstStep
                ? "w-full p-4 font-semibold bg-white dark:bg-secondary-dark flex justify-end"
                : "w-full p-4 font-semibold bg-white dark:bg-secondary-dark flex justify-between"
            }
          >
            {!isFirstStep && (
              <button type="button" className="text-main-gray" onClick={back}>
                Go Back
              </button>
            )}
            <button
              type="submit"
              className="bg-sky-900 text-white py-2 px-3 rounded"
            >
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Form;
