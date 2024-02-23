import { Word, Phrase, demo } from "@izmaelmag/dialogue/dist/react";
import { WordConfig } from "@izmaelmag/dialogue";
import "@izmaelmag/dialogue/dist/styles.css";

const config: WordConfig = {
  delay: 0.05,
};

export default function Home() {
  return (
    <>
      <h1>Playground</h1>
      <Phrase config={demo} />
    </>
  );
}
