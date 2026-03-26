export function isValidArray(array: null | unknown[]): boolean {
  if (!array) return false;

  return Array.isArray(array) && array.length > 0;
}
