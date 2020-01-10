export const clamp = (num: number, clamp: number, higher: number): number =>
  higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp);

export const isBetween = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export const formatPrice = (num: number) =>
  num ? num.toFixed(2).replace(/\.00$/, "") : "0";
