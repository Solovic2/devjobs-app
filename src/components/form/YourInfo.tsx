import { YourInfoProps } from "../../types/form.types";
import { FormWrapper } from "./FormWrapper";

const YourInfo = ({ name, email, phone, updateFields }: YourInfoProps) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number"
    >
      <div className="flex flex-col w-full mt-5">
        <label htmlFor="name" className="text font-semibold">
          Name
        </label>
        <input
          className="border-slate-200 border-2 rounded px-4 py-2 mt-2"
          placeholder="eg. Stephen King"
          autoFocus
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </div>
      <div className="flex flex-col w-full mt-4">
        <label htmlFor="email" className="text font-semibold">
          Email Address
        </label>
        <input
          className="border-slate-200 border-2 rounded px-4 py-2 mt-2"
          placeholder="eg. stephenking@gmail.com"
          required
          type="email"
          id="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="flex flex-col w-full mt-4 pb-2">
        <label htmlFor="phone" className="text font-semibold">
          Number
        </label>
        <input
          className="border-slate-200 border-2 rounded px-4 py-2 mt-2"
          placeholder="eg. +20 111 4277 131"
          required
          type="phone"
          id="phone"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
};
export default YourInfo;
