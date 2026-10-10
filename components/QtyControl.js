"use client";

import { useCart } from "./CartProvider";

export default function QtyControl({ product }) {
  const { qty, add, remove } = useCart();
  const n = qty[product.id] || 0;

  if (n === 0) {
    return (
      <button className="btn btn--small" onClick={() => add(product.id)}>
        Add
      </button>
    );
  }

  return (
    <div className="qty" role="group" aria-label={`Quantity of ${product.name}`}>
      <button onClick={() => remove(product.id)} aria-label={`Remove one ${product.name}`}>−</button>
      <span aria-live="polite">{n}</span>
      <button onClick={() => add(product.id)} aria-label={`Add one ${product.name}`}>+</button>
    </div>
  );
}
