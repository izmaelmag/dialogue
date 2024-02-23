import { type PhraseConfig } from "~/types";
import { configToText } from "../utils/configToText";
import { Word } from ".";

type Props = {
  config: PhraseConfig;
};

export const Phrase = ({ config }: Props) => {
  const text = configToText(config);

  return <Word config={{ delay: 0.03 }}>{text}</Word>;
};
