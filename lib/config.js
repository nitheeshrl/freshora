// Change these to match your store.
export const STORE_NAME = "Freshora";
export const CURRENCY = "₹";
export const FREE_DELIVERY_OVER = 499;
export const DELIVERY_FEE = 40;

export const money = (n) => `${CURRENCY}${n.toLocaleString("en-IN")}`;
