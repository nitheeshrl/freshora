import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { CartProvider } from "../components/CartProvider";
import Header from "../components/Header";
import CartDrawer from "../components/CartDrawer";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  metadataBase: new URL("https://freshora.com"),
  title: "Freshora: groceries delivered in 2 hours",
  description: "Fresh produce, dairy, bakery and pantry staples from your neighbourhood supermarket.",
  icons: {
    icon: "/img/logo.png",  
    apple: "/img/logo.png",  
  },
  // ... openGraph setup
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <CartProvider>
          <Header />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
