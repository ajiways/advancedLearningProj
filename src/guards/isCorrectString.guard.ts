export const isCorrectString = (value: unknown): value is string =>
  typeof String(value) === "string" && String(value).length > 0;
