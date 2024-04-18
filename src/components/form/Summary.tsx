import { useMemo, useState } from "react";
import { AddOnsOption, FormData } from "../../types/form.types";
import { FormWrapper } from "./FormWrapper";

const Summary = (formData: FormData) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const planPrices = (element: AddOnsOption): number => {
    return formData.planType === "monthly"
      ? parseInt(element.monthlyPrice!)
      : parseInt(element.yearlyPrice!);
  };
  useMemo(
    () =>
      formData.planType === "monthly"
        ? setTotalPrice(parseInt(formData.planOption.monthlyPrice!))
        : setTotalPrice(parseInt(formData.planOption.yearlyPrice!)),
    [formData.planType]
  );
  useMemo(
    () =>
      formData.addOnOptions?.forEach((element) =>
        setTotalPrice((prev: number) => (prev += planPrices(element)))
      ),
    [formData.addOnOptions?.length]
  );

  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks ok before confirming"
    >
      <div className="bg-off-white dark:bg-main-dark lg:mt-14">
        <div className="flex justify-between p-3">
          <div>
            <div className="font-bold">
              {formData.planOption.title} ({formData.planType})
            </div>
          </div>
          <p className="font-bold">
            {formData.planType === "monthly"
              ? `$${formData.planOption.monthlyPrice}/mo`
              : `$${formData.planOption.yearlyPrice}/yr`}
          </p>
        </div>
        <hr />
        <div>
          {formData.addOnOptions?.map((element) => (
            <div className="flex justify-between p-3 " key={element.id}>
              <div className="text-main-gray">{element.title}</div>
              <p>
                {" "}
                {formData.planType === "monthly"
                  ? `$${element.monthlyPrice}/mo`
                  : `$${element.yearlyPrice}/yr`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-3">
        <p className="text-main-gray">
          Total (per {formData.planType ? "month" : "year"})
        </p>
        <p className="text-main-violet font-bold text-xl">
          {formData.planType === "monthly"
            ? `$${totalPrice}/mo`
            : `$${totalPrice}/yr`}
        </p>
      </div>
    </FormWrapper>
  );
};

export default Summary;
