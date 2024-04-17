import { FormData } from "../../pages/Form";

const Summary = (formData: FormData) => {
  return <div>{formData.name}</div>;
};

export default Summary;
