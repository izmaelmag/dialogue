import { ReactNode } from "react";
import { type WordConfig } from "~/types";

const defaultConfig: WordConfig = {
  delay: 0.1,
};

type Props = {
  config?: WordConfig;
  children: ReactNode;
};

export const Word = ({ config = defaultConfig, children }: Props) => {
  return <div>{children}</div>;
};
