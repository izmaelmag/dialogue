import styles from "./styles.module.css";
import { split } from "@izmaelmag/dialogue/dist/utils/split";
import "@izmaelmag/dialogue/dist/styles.css";

const phrase =
  "In the shadowy depths of the ancient forest, a lone wanderer discovered the hidden entrance to the forgotten dungeon. With a heart pounding in anticipation and a flicker of magic in their eyes, they stepped forward, ready to face the unknown challenges ahead. The air was thick with the scent of mystery and danger, a silent whisper of the epic tales that were about to unfold.";

const words = split(phrase, {
  mode: "word",
  separator: " ",
});

export default function Home() {
  return (
    <>
      <div style={{ width: "400px", display: "flex", flexWrap: "wrap" }}>
        {words.map((word, index) => {
          const wordKey = `word-${index}`;
          const chars = split(word, { mode: "char", separator: "" });

          return (
            <div
              key={wordKey}
              style={{
                wordBreak: "keep-all",
                marginRight: `0.5ch`,
                animationDelay: `${index * 0.02}s`,
              }}
              className="dg-pulse"
            >
            <div
              key={wordKey}
              style={{
                wordBreak: "keep-all",
                marginRight: `0.5ch`,
                animationDelay: `${index * 0.02}s`,
              }}
              className="dg-fadeIn"
            >
              {chars.map((char, charIndex) => {
                const charKey = `${wordKey}/char-${charIndex}`;

                return (
                  <span key={charKey} style={{ letterSpacing: "-2px" }}>
                    {char !== " " ? char : <span>&nbsp;</span>}
                  </span>
                );
              })}
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
