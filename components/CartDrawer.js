"use client";

import { useCart } from "./CartProvider";
import { DELIVERY_FEE, FREE_DELIVERY_OVER, money } from "../lib/config";
import QtyControl from "./QtyControl";

export default function CartDrawer() {
  const { open, closeCart, lines, subtotal, delivery, total, clear } = useCart();
  const remaining = Math.max(0, FREE_DELIVERY_OVER - subtotal);
  const progress = Math.min(100, (subtotal / FREE_DELIVERY_OVER) * 100);

  return (
    <>
      <div className={`overlay ${open ? "overlay--on" : ""}`} onClick={closeCart} />
      <aside
        className={`drawer ${open ? "drawer--open" : ""}`}
        aria-label="Basket"
        aria-hidden={!open}
        inert={!open ? "" : undefined}
      >
        <div className="drawer__head">
          <h2>Your basket</h2>
          <button className="icon-btn" onClick={closeCart} aria-label="Close basket">✕</button>
        </div>

        {lines.length === 0 ? (
          <p className="drawer__empty">Your basket is empty. Add something from the aisles.</p>
        ) : (
          <>
            <div className="ship">
              <p>
                {remaining === 0
                  ? "You get free delivery."
                  : `Add ${money(remaining)} more for free delivery.`}
              </p>
              <div className="bar"><span style={{ width: `${progress}%` }} /></div>
            </div>

            <ul className="lines">
              {lines.map((l) => (
                <li key={l.id}>
                  <span className="lines__icon" aria-hidden="true">{l.icon}</span>
                  <div className="lines__info">
                    <strong>{l.name}</strong>
                    <small>{l.unit} · {money(l.price)}</small>
                  </div>
                  <QtyControl product={l} />
                  <span className="lines__total">{money(l.total)}</span>
                </li>
              ))}
            </ul>

            <dl className="sum">
              <div><dt>Subtotal</dt><dd>{money(subtotal)}</dd></div>
              <div><dt>Delivery</dt><dd>{delivery === 0 ? "Free" : money(DELIVERY_FEE)}</dd></div>
              <div className="sum__total"><dt>Total</dt><dd>{money(total)}</dd></div>
            </dl>

            <div className="drawer__actions">
              <button className="btn btn--block">Checkout</button>
              <button className="link-btn" onClick={clear}>Empty basket</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
