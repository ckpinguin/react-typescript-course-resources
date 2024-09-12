import {
  type FormEvent,
  type ComponentPropsWithRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export type FormHandle = { clear: () => void };

type FormProps = ComponentPropsWithRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { children, onSave, ...rest },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  // Expose a method upwards via ref
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("Clearing form");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit} {...rest} ref={form}>
      {children}
    </form>
  );
});

export default Form;
