import { type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  to?: never;
  textOnly?: boolean;
}

interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  to: string;
  textOnly?: boolean;
}

// Predicate function
function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  const classes = `button ${props.textOnly ? "button--text-only" : ""}`;

  if (isLinkProps(props)) {
    return <Link className={classes} {...props}></Link>;
  }

  return <button className={classes} {...props}></button>;
}
