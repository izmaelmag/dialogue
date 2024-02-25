import styles from "./styles.module.css";
import "dialogue/dist/styles.css";

export default function Home() {
  return (
    <>
      <div className={styles.bold}>
        {"Some long sentence".split("").map((char, index) => {
          return (
            <span key={index}>
              <span
                style={{ animationDelay: `-${index * 0.1}s` }}
                className="dg-shake-y"
              >
                <span
                  style={{ animationDelay: `-${index * 0.22}s` }}
                >
                  {char !== " " ? char : <span>&nbsp;</span>}
                </span>
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
}
