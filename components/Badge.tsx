import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}
