import { formSteps } from "../../constants";

const FormStepper = ({index}: {index: number}) => {
  return (
    <div className="h-24 lg:h-full text-white flex flex-col gap-6 lg:p-16 lg:basis-1/3 lg:bg-form-sidebar lg:bg-no-repeat lg:bg-[length:100%_100%]">
      {formSteps.map((element) => (
        <div className=" flex items-center gap-4">
        <div className={`h-10 w-10 rounded-full border flex justify-center items-center ${index === element.index && 'bg-white text-[#483EFF]'}`}>{element.index+1}</div>
        <div className="">
          <p className="text-main-gray text-sm">{`STEP ${element.index+1}`}</p>
          <p className="font-bold">{element.title}</p>
        </div>
      </div>
      ))}
    </div>
  );
};
export default FormStepper;
