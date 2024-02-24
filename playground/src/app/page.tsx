import "dialogue/dist/styles.css";

export default function Home() {
  return (
    <>
      <div className="dg-shake">
        {"Some long sentence".split("").map((char, index) => {
          return (
            <span
              style={{ animationDelay: `${index * 0.02}s` }}
              className="dg-fadeIn"
              key={index}
            >
              <span
                style={{ animationDelay: `-${index * 0.0333}s` }}
                className="dg-shake"
              >
                {char !== ' ' ? char : <span>&nbsp;</span>}
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
}
