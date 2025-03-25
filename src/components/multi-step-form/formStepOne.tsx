import { UseFormRegister } from "react-hook-form";
import { MultiStepFormInputs } from "./form";

function FormStepOne({
  register,
}: {
  register: UseFormRegister<MultiStepFormInputs>;
}) {
  return (
    <div className="text-left">
      <label className="block text-lg text-[#202224]" htmlFor="fullname">
        Full name
      </label>
      <input
        type="text"
        id="fullname"
        placeholder="Full name"
        autoComplete="name"
        {...register("fullname", { required: true })}
      />
      <label className="block text-lg text-[#202224]" htmlFor="phoneNumber">
        Phone number
      </label>
      <input
        type="text"
        id="phoneNumber"
        placeholder="Phone number"
        autoComplete="mobile tel-country-code"
        {...register("phoneNumber", { required: true })}
      />
      <label className="block text-lg text-[#202224]" htmlFor="Username">
        Username
      </label>
      <input
        type="text"
        id="Username"
        placeholder="Username"
        autoComplete="username"
        {...register("userName", { required: true })}
      />
      <label className="block text-lg text-[#202224]" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <label className="block text-lg text-[#202224]" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        autoComplete="new-password"
        {...register("password", { required: true })}
      />
      <label className="block text-lg text-[#202224]" htmlFor="confirmPassword">
        Confirm password
      </label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
        autoComplete="new-password"
        {...register("confirmPassword", { required: true })}
      />
    </div>
  );
}

export { FormStepOne };
