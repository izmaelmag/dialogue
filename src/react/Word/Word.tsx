import { CSSProperties, ReactNode } from "react";
import { type WordConfig } from "~/types";

const defaultConfig: WordConfig = {
  delay: 0.1,
};

type Props = {
  config?: WordConfig;
  children: ReactNode;
};

export const Word = ({ config = defaultConfig, children }: Props) => {
  const { delay } = config;

  const letters = children?.toString().split("");

  return (
    <div>
      {letters?.map((letter, index) => {
        if (letter === ' ') return <span>{' '}</span>
        
        return (
          <span
            key={index}
            className="dg-wiggle"
            style={{ animationDelay: `${delay * index}s` }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};
