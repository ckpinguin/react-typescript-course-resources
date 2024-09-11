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
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
