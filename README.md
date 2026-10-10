# FreshMart: responsive supermarket (Next.js App Router + React)

## Run it
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Features
- Product grid with aisle filters and live search
- Add / remove quantity steppers on every product
- Slide-out basket with line totals, delivery fee and free-delivery progress bar
- Mobile first: 2 columns on phones, 3 on tablets, 4 on desktop

## Structure
- `lib/config.js`: store name, currency, delivery rules
- `lib/products.js`: aisles and sample products (add `was` for a sale price)
- `components/CartProvider.js`: basket state (React context)
- `components/ProductGrid.js`, `QtyControl.js`, `CartDrawer.js`, `Header.js`
- `app/page.js`, `app/layout.js`, `app/globals.css`

Checkout is a placeholder button: connect it to your payment or order API.
