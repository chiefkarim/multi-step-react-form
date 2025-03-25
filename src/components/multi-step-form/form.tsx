import { useForm } from "react-hook-form";
import { FormStepOne } from "./formStepOne";
import "@src/styles/multi-step-form.css";

export type MultiStepFormInputs = {
  fullname: string;
  phoneNumber: number;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
  privacyPolicy: boolean;
};

function MultiStepFormForm() {
  const { register } = useForm<MultiStepFormInputs>();
  //we can also use the useformcontext inside each form step if the component was deeply nested
  return <>{<FormStepOne register={register} />}</>;
}
export { MultiStepFormForm };
