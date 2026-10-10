"use client";

import { useCart } from "./CartProvider";
import { STORE_NAME } from "../lib/config";
import { BsArchiveFill } from "react-icons/bs";

export default function Header() {
  const { count, openCart } = useCart();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">{STORE_NAME}</a>

        <nav className="nav" aria-label="Main">
          <a href="#shop">Shop</a>
          <a href="#how">Delivery</a>
          <a href="#stores">Stores</a>
        </nav>

        <button className="cart-btn" onClick={openCart} aria-label={`Open basket, ${count} items`}>
          <span aria-hidden="true">
            <BsArchiveFill />
          </span>
          <span className="cart-btn__label">Basket</span>
          <span className="badge">{count}</span>
        </button>
      </div>
    </header>
  );
}
