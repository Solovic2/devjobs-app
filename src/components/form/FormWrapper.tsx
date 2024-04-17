import { ReactNode } from "react";

type FormWrapperProps = {
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
    <div className="bg-white dark:bg-secondary-dark w-[90%] p-[5%] rounded-xl">
      <h2 className="text-2xl font-bold">{title}</h2>
      <h4 className="mt-2 text-main-gray">{description}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}
