import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import AddOns from "../components/form/AddOns";
import SelectPlan from "../components/form/SelectPlan";
import Summary from "../components/form/Summary";
import YourInfo from "../components/form/YourInfo";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import FormStepper from "../components/form/FormStepper";
import { AddOnsOption, FormData, PlanOption } from "../types/form.types";
import { initialData, planOptions } from "../constants";
import { useNavigate } from "react-router-dom";
import Layout from "../components/ui/Layout";

const Form = () => {
  const [data, setData] = useState(initialData);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [planType, setPlanType] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<PlanOption>(planOptions[0]);
  const [selectedItems, setSelectedItems] = useState<AddOnsOption[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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
    <SelectPlan
      planType={planType}
      setPlanType={setPlanType}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
      updateFields={updateFields}
    />,
    <AddOns
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      planType={data.planType}
      updateFields={updateFields}
    />,
    <Summary
      totalPrice={totalPrice}
      setTotalPrice={setTotalPrice}
      formData={data}
    />,
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
      // Set Finished Steps
      data.finishedSteps[currentStepIndex] = true;
      const finishedSteps = data.finishedSteps[currentStepIndex];
      const updateFinishedSteps = data.finishedSteps.map((item, index) => {
        if (index === currentStepIndex) {
          return finishedSteps;
        } else {
          return item;
        }
      });
      updateFields({
        finishedSteps: updateFinishedSteps,
      });
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
    <Layout>
      <div className="h-[93dvh] md:h-[87dvh] w-full max-w-[1200px] -mt-20 lg:mt-0 lg:bg-white rounded-xl lg:dark:bg-secondary-dark lg:mx-auto  lg:bg-none bg-no-repeat bg-contain lg:p-5 flex flex-col lg:flex-row items-center lg:justify-center ">
        <FormStepper
          goTo={goTo}
          finishedSteps={data.finishedSteps}
          index={currentStepIndex}
        />
        {isSubmitted ? (
          <div className="flex flex-col items-center gap-5 mx-5 px-4 lg:px-20 py-16 text-center bg-white  dark:bg-secondary-dark rounded-xl  lg:basis-2/3">
            <div className="w-16">
              <img src="/assets/form/icon-thank-you.svg" alt="Thank you!" />
            </div>
            <h1 className="text-2xl font-bold">Thank you!</h1>
            <p className="text-main-gray">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@devjobs.com.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative w-full h-[90dvh] md:h-[82dvh] lg:px-14 lg:py-8 flex flex-col items-center lg:basis-2/3 text-sky-900 dark:text-white"
          >
            {step}
            <div
              className={`w-full p-4 lg:p-0 lg:px-20 absolute bottom-0 font-semibold flex ${
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
    </Layout>
  );
};
export default Form;
