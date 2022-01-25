export const isCorrectNumber = (value: unknown): value is number =>
  typeof Number(value) === "number" && Number(value) > 0;
