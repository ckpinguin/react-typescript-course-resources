import { type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface BaseProps {
  textOnly?: boolean;
}

interface ButtonProps extends BaseProps, ComponentPropsWithoutRef<"button"> {
  to?: never;
}

interface ButtonLinkProps extends BaseProps, LinkProps {
  to: string;
}

// Predicate function
function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  const classes = `button ${props.textOnly ? "button--text-only" : ""}`;
  if (isRouterLink(props)) {
    const { children, textOnly, ...rest } = props;
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  // Destructuring after the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonProps` and `otherProps` will therefore only contain props that work on <button>
  const { children, textOnly, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
