import { forwardRef, type ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  id: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} ref={ref} {...props} />
    </div>
  );
});

export default Input;
