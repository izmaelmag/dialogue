import { PhraseConfig } from '~/types';
import { configToText } from './configToText'
import { demo } from '~/mocks/demo'

describe('Config to test', () => {
  test('Creates text', () => {
    const expected = "The forest came alive with an ethereal glow as ancient spirits danced between the trees."
    const result = configToText(demo)

    expect(expected).toEqual(result)
  })
})