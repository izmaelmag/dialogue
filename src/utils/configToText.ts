import { PhraseConfig } from "~/types";

export const configToText = (config: PhraseConfig): string => {
  return config.parts.map((part) => part.text).join('');
};
