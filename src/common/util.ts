export const copyToClipboard = (url: string) => {
  navigator.clipboard.writeText(url);
};