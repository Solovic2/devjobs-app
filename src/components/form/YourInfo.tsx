import { FormWrapper } from "./FormWrapper";

type YourInfoData = {
  name: string;
  email: string;
  phone: string;
};

export type YourInfoProps = YourInfoData & {
  updateFields: (fields: Partial<YourInfoData>) => void;
};

const YourInfo = ({ name, email, phone, updateFields }: YourInfoProps) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number"
    >
      <div className="flex flex-col w-full mt-5 ">
        <label
          htmlFor="name"
          className="text font-semibold after:content-['_*'] after:text-red-800"
        >
          Name
        </label>
        <input
          className="border-slate-200 border-2 rounded px-4 py-2 mt-2  dark:text-sky-900 outline-none"
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
        <label
          htmlFor="email"
          className="text font-semibold after:content-['_*'] after:text-red-800"
        >
          Email Address
        </label>
        <input
          className="border-slate-200 border-2 rounded px-4 py-2 mt-2 dark:text-sky-900 outline-none"
          placeholder="eg. stephenking@gmail.com"
          required
          type="email"
          id="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="flex flex-col w-full mt-4 pb-2">
        <label
          htmlFor="phone"
          className="text font-semibold after:content-['_*'] after:text-red-800"
        >
          Number
        </label>
        <input
          className="border-slate-200 border-2 rounded px-4 py-2 mt-2 dark:text-sky-900 outline-none"
          placeholder="eg. 0 111 4277 131"
          required
          type="tel"
          id="phone"
          pattern="0[0-9]{3}[0-9]{3}[0-9]{4}"
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Please Write Valid Phone Number eg. 0 111 4277 131"
            )
          }
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
};
export default YourInfo;
