export const resize = (url, modificator) => {
  const parts = url.split('.');
  const newParts = [parts[parts.length - 3], (parts[parts.length - 2] + modificator), parts[parts.length - 1]];

  return newParts.join('.');
}