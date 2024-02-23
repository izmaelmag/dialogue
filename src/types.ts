export type WordConfig = {
  delay: number;
};

type FX = string

type Part = {
  text: string,
  fx?: FX[]
}

export interface PhraseConfig {
  intro: {
    fx: FX[];
  
    staggering: {
      type: "letter" | "word";
      delay: number;
    };
  };

  parts: Part[]
}
