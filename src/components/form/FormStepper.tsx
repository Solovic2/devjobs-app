import { formSteps } from "../../constants";

type FormStepperProps = {
  finishedSteps: boolean[];
  index: number;
  goTo: (index: number) => void;
};
const FormStepper = ({ finishedSteps, index, goTo }: FormStepperProps) => {
  const handleGoTo = (index: number) => {
    if (finishedSteps[index] || finishedSteps[index - 1]) {
      goTo(index);
    }
  };
  return (
    <div className="h-24 lg:h-full text-white flex lg:flex-col lg:gap-6 lg:p-16 lg:basis-1/3 lg:bg-form-sidebar bg-no-repeat bg-cover lg:bg-[length:auto_100%]">
      {formSteps.map((element) => (
        <div
          key={element.index}
          className="flex items-center gap-4 cursor-pointer "
        >
          <div
            className={`h-10 w-10 rounded-full border flex justify-center items-center hover:bg-white hover:text-main-violet ${
              index === element.index && "bg-white text-[#483EFF]"
            }`}
            onClick={() => handleGoTo(element.index)}
          >
            {element.index + 1}
          </div>
          <div className="flex flex-col">
            <p className="hidden lg:block text-main-gray text-sm">{`STEP ${
              element.index + 1
            }`}</p>
            <p className="hidden lg:block font-bold">{element.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FormStepper;
