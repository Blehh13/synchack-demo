# Pricing Service

Calculates subscription pricing.

## Usage

```ts
import { calculatePrice } from "./src/pricing";

// Standard monthly pricing ($12/seat)
calculatePrice({ seats: 5 }); // 60

// Bulk discount pricing ($9/seat for 20+ seats)
calculatePrice({ seats: 20 }); // 180

// Annual billing (10x monthly price)
calculatePrice({ seats: 5, annual: true }); // 600
```

## Pricing & Limits

- **Maximum Seats:** A plan may have at most **50 seats**.
- **Standard Tier:** **$12 per seat, per month** for 1–19 seats.
- **Bulk Discount Tier:** **$9 per seat, per month** for 20+ seats.
- **Annual Billing:** Set `annual: true` to bill annually. Annual pricing is calculated as **10x the monthly price**.