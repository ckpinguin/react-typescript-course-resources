import { type ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: never;
}

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  href?: string;
}

// Predicate function
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
