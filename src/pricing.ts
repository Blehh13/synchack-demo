export interface PricingOptions {
  /** Number of seats on the plan. */
  seats: number;
  /** Billed annually instead of monthly. */
  annual?: boolean;
}

export const MAX_SEATS = 50;
export const BULK_DISCOUNT_THRESHOLD = 20;

export function calculatePrice({ seats, annual = false }: PricingOptions): number {
  if (seats > MAX_SEATS) throw new Error("Too many seats");
  const rate = seats >= BULK_DISCOUNT_THRESHOLD ? 9 : 12;
  const monthly = seats * rate;
  return annual ? monthly * 10 : monthly;
}
