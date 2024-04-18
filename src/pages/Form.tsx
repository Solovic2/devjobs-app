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
  const navigate = useNavigate();

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultiStepForm([
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
        navigate("/");
      }, 3000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isSubmitted]);

  return (
    <div className="w-full max-w-[1200px] lg:bg-white lg:dark:bg-secondary-dark lg:mx-auto h-[100dvh] bg-form-topBar lg:bg-none bg-no-repeat bg-contain lg:p-5 flex flex-col lg:flex-row items-center lg:justify-center ">
      <FormStepper goTo={goTo} index={currentStepIndex} />
      {isSubmitted ? (
        <div className="flex flex-col items-center gap-5 mx-5 px-4 lg:px-20 py-16 text-center bg-white  dark:bg-secondary-dark rounded-xl  lg:basis-2/3">
          <div className="w-16">
            <img src="/assets/form/icon-thank-you.svg" alt="Thank you!" />
          </div>
          <h1 className="text-2xl font-bold">Thank you!</h1>
          <p className="text-main-gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@devjobs.com.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          id="form"
          className="relative w-full lg:px-14 lg:py-8 flex flex-col items-center lg:basis-2/3 text-sky-900 dark:text-white"
        >
          {step}
          <div
            className={`w-full p-4 lg:p-0 lg:px-20 absolute bottom-0 font-semibold bg-white dark:bg-secondary-dark flex ${
              isFirstStep ? "justify-end" : "justify-between"
            }`}
          >
            {!isFirstStep && (
              <button type="button" className="text-main-gray" onClick={back}>
                Go Back
              </button>
            )}
            <button
              type="submit"
              className="bg-sky-900 dark:bg-white text-white dark:text-main-dark py-2 px-3 rounded"
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
