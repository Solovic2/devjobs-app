import { FormData } from "../../pages/Form";
import { FormWrapper } from "./FormWrapper";

const Summary = (formData: FormData) => {
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks ok before confirming"
    >
      {formData.name}
    </FormWrapper>
  );
};

export default Summary;
