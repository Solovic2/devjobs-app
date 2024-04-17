import { ComponentProps, ReactNode, useContext } from "react";
import { CheckboxContext } from "../../context/CheckboxGroupContext";
type CheckboxProps = {
  value: string;
};
const Checkbox = ({ children, ...props }: { children: ReactNode }) => {
  const { value, onChange } = useContext(CheckboxContext);
  return (
    <label>
      <input
        type="Checkbox"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  );
};

export default Checkbox;
