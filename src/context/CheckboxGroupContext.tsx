import { ChangeEventHandler, ReactNode, createContext } from "react";

export const CheckboxContext = createContext({
  value: "",
  onChange: () => {},
});

export const CheckboxGroup = ({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
}) => {
  return (
    <CheckboxContext.Provider value={{ value, onChange }}>
      {children}
    </CheckboxContext.Provider>
  );
};
