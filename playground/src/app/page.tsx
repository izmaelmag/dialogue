import styles from "./styles.module.css";
import "dialogue/dist/styles.css";

const phrase =
  "In the shadowy depths of the ancient forest, a lone wanderer discovered the hidden entrance to the forgotten dungeon. With a heart pounding in anticipation and a flicker of magic in their eyes, they stepped forward, ready to face the unknown challenges ahead. The air was thick with the scent of mystery and danger, a silent whisper of the epic tales that were about to unfold.";

export default function Home() {
  return (
    <>
      <div className={styles.bold} style={{ width: '400px'}}>
        {phrase.split(" ").map((char, index) => {
          return (
            <>
              <span key={index}>
                <span
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className="dg-swing"
                >
                  <span className="dg-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
                    {char !== " " ? char : <span>&nbsp;</span>}
                  </span>
                </span>
              </span>
              <span>&nbsp;</span>
            </>
          );
        })}
      </div>
    </>
  );
}
