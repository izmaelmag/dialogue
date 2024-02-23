import { PhraseConfig } from '~/types';
import { configToText } from './configToText'

const phraseData: PhraseConfig = {
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

describe('Config to test', () => {
  test('Creates text', () => {
    const expected = "The forest came alive with an ethereal glow as ancient spirits danced between the trees."
    const result = configToText(phraseData)

    expect(expected).toEqual(result)
  })
})