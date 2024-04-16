export type TTopic = {
  ruTopic: string;
  enTopic: string;
};

export type TVerbForm = {
  word: string;
  vocalization: string;
  translation: string;
  transcription: string;
};

export type TWord = {
  word: string;
  vocalization: string;
  translation: string;
  transcription: string;
  ruTopic: Array<string> | string;
  enTopic: Array<string> | string;
  num?: number;
  enTranslation?: string;
  infinitive?: TVerbForm;
  present?: Array<TVerbForm>;
  number?: number;
};

export type TNumWord = {
  transcription: string;
  num: number;
  meaning: string;
};
