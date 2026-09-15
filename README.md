# Pricing Service

Calculates subscription pricing.

## Usage

```ts
import { calculatePrice } from "./src/pricing";

calculatePrice({ seats: 5 }); // 60
```

## Limits

A plan may have at most **10 seats**. Pricing is **$12 per seat, per month**.
There is no discount tier.
