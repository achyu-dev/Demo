import { ReactNode } from 'react';

export default function GradientText({ children }: { children: ReactNode }) {
  return <span className="gradient-text animate-gradient bg-[length:200%_200%]">{children}</span>;
}
