"use client";

import { useState } from "react";
import { categories, products } from "../lib/products";
import { money } from "../lib/config";
import QtyControl from "./QtyControl";

export default function ProductGrid() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      (!q || p.name.toLowerCase().includes(q))
  );

  return (
    <>
      <div className="toolbar">
        <label className="search">
          <span className="sr-only">Search products</span>
          <input
            type="search"
            placeholder="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <div className="chips" role="group" aria-label="Filter by aisle">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`chip ${category === c.id ? "chip--on" : ""}`}
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="empty">Nothing matches &ldquo;{query}&rdquo;. Try a different word or choose All.</p>
      ) : (
        <ul className="grid">
          {visible.map((p) => (
            <li key={p.id} className="card">
              {p.was && (
                <span className="tag">Save {Math.round(((p.was - p.price) / p.was) * 100)}%</span>
              )}
              <div className="card__icon" aria-hidden="true">{p.icon}</div>
              <h3>{p.name}</h3>
              <p className="card__unit">{p.unit}</p>
              <div className="card__foot">
                <div>
                  <span className="price">{money(p.price)}</span>
                  {p.was && <s className="was">{money(p.was)}</s>}
                </div>
                <QtyControl product={p} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
