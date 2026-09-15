export interface PricingOptions {
  /** Number of seats on the plan. */
  seats: number;
}

export const MAX_SEATS = 10;

export function calculatePrice({ seats }: PricingOptions): number {
  if (seats > MAX_SEATS) throw new Error("Too many seats");
  return seats * 12;
}
