import { ReactNode } from "react";

export type FormWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function FormWrapper({
  title,
  description,
  children,
}: FormWrapperProps) {
  return (
    <div className="max-h-[70vh] overflow-auto bg-white  dark:bg-secondary-dark  w-[90%] p-[5%] lg:p-10 rounded-xl">
      <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>
      <h4 className="mt-2 text-main-gray">{description}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}
