import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from "react";

// Cannot use an interface in with polymorphic
/* interface ContainerProps<T extends ElementType>
  extends ComponentPropsWithoutRef<T> {
  as: T;
  children: ReactNode; // JSX code (or text)
} */

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...rest
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...rest}>{children}</Component>;
}
