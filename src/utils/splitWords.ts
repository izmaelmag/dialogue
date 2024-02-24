type Settings = {
  separator: string;
};

const defaults: Settings = {
  separator: " ",
};

export const splitWords = (sentence: string, settings: Settings = defaults) => {
  return sentence.trim().split(settings.separator);
};
