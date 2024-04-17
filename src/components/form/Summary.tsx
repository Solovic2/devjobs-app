import { FormData } from "../../types/form.types";
import { FormWrapper } from "./FormWrapper";

const Summary = (formData: FormData) => {
  let totalPrice =
    formData.planType === "monthly"
      ? parseInt(formData.planOption.monthlyPrice!)
      : parseInt(formData.planOption.yearlyPrice!);

  formData.addOnOptions?.forEach(
    (element) =>
      (totalPrice +=
        formData.planType === "monthly"
          ? parseInt(element.monthlyPrice!)
          : parseInt(element.yearlyPrice!))
  );
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks ok before confirming"
    >
      <div className="bg-off-white">
        <div className="flex justify-between p-3">
          <div>
            <div>
              {formData.planOption.title} ({formData.planType})
            </div>
            <p className="text-sm border-b w-fit text-main-gray cursor-pointer">
              Change
            </p>
          </div>
          <p>
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
        <p className="text-main-violet font-bold">
          {formData.planType === "monthly"
            ? `$${totalPrice}/mo`
            : `$${totalPrice}/yr`}
        </p>
      </div>
    </FormWrapper>
  );
};

export default Summary;
