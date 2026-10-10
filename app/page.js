import ProductGrid from "../components/ProductGrid";
import { DELIVERY_FEE, FREE_DELIVERY_OVER, STORE_NAME, money } from "../lib/config";

const promises = [
  { title: "Picked this morning", text: "Fruit, vegetables and bread arrive the day they are picked or baked." },
  { title: "Delivered in 2 hours", text: "Choose a slot at checkout, or collect from the store in 30 minutes." },
  { title: "Fair delivery fees", text: `${money(DELIVERY_FEE)} per order, free above ${money(FREE_DELIVERY_OVER)}.` },
];

const stores = [
  { name: "Kanniya Kumari", hours: "7am to 11pm daily", note: "Full range, bakery and fish counter" },
    { name: "Nagercoil", hours: "24 hours", note: "Essentials and ready meals" },
  { name: "Thuckalay", hours: "8am to 10pm daily", note: "Fruit, veg, dairy and pantry" },
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container hero__inner">
          <h1>Fresh groceries at your door in two hours.</h1>
          <p className="hero__lead">
            Shop 4,000 everyday items from {STORE_NAME}. Free delivery on orders over {money(FREE_DELIVERY_OVER)}.
          </p>
          <a className="btn" href="#shop">Start shopping</a>
        </div>
      </section>

      <section id="shop" className="section">
        <div className="container">
          <h2>Shop the aisles</h2>
          <ProductGrid />
        </div>
      </section>

      <section id="how" className="section section--green">
        <div className="container">
          <h2>How delivery works</h2>
          <ul className="promises">
            {promises.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="stores" className="section">
        <div className="container">
          <h2>Find a store</h2>
          <ul className="stores">
            {stores.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.hours}</p>
                <p className="muted">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container">&copy; {new Date().getFullYear()} {STORE_NAME}</div>
      </footer>
    </main>
  );
}
