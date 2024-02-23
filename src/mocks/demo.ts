import { PhraseConfig } from "~/types";

export const demo: PhraseConfig = {
  intro: {
    fx: ["fadeIn", "fadeIn"],

    staggering: {
      type: "letter",
      delay: 200,
    },
  },

  parts: [
    {
      text: "The forest came alive with an ",
    },

    {
      text: "ethereal glow ",
      fx: [],
    },

    {
      text: "as ",
    },

    {
      text: "ancient spirits ",
      fx: [],
    },

    {
      text: "danced between the trees.",
      fx: [],
    },
  ],
};