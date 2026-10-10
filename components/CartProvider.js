"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../lib/products";
import { DELIVERY_FEE, FREE_DELIVERY_OVER } from "../lib/config";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [qty, setQty] = useState({}); // { [productId]: quantity }
  const [open, setOpen] = useState(false);

  // Close the drawer with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const value = useMemo(() => {
    const lines = products
      .filter((p) => qty[p.id])
      .map((p) => ({ ...p, qty: qty[p.id], total: p.price * qty[p.id] }));
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.total, 0);
    const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;

    const change = (id, delta) =>
      setQty((q) => {
        const next = Math.max(0, (q[id] || 0) + delta);
        const { [id]: _removed, ...rest } = q;
        return next === 0 ? rest : { ...rest, [id]: next };
      });

    return {
      qty, lines, count, subtotal, delivery,
      total: subtotal + delivery,
      add: (id) => change(id, 1),
      remove: (id) => change(id, -1),
      clear: () => setQty({}),
      open, openCart: () => setOpen(true), closeCart: () => setOpen(false),
    };
  }, [qty, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
