type Settings = {
  separator: string;
  mode: "word" | "char";
};

const defaults: Settings = {
  separator: " ",
  mode: "word",
};

export const split = (
  text: string,
  { separator, mode }: Settings = defaults
): string[] => {
  if (mode === "word") {
    return text.trim().split(separator);
  }

  return text.trim().split("");
};
