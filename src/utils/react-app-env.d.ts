declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.mp3';
declare module '*.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}
