import { type ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}

interface WarningBoxProps {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  // Only here we know, that mode is "warning" and we can access the severity property
  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
