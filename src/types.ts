export type OptionValue = number | string | boolean;

export enum FXName {}

export type CommonConfigOptions = Record<string, OptionValue>;

export type FXConfig = {
  name: FXName;
  options: CommonConfigOptions;
};

export type PhraseChunk = {
  content: string;
  effects: Array<FXConfig>
};

export interface PhraseData {
  chunks: PhraseChunk[];
}
