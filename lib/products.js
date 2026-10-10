export const categories = [
  { id: "all", label: "All" },
  { id: "produce", label: "Fruit & veg" },
  { id: "dairy", label: "Dairy & eggs" },
  { id: "bakery", label: "Bakery" },
  { id: "meat", label: "Meat & fish" },
  { id: "pantry", label: "Pantry" },
  { id: "drinks", label: "Drinks" },
];

// `was` is the pre-discount price. Remove it for items that are not on sale.
export const products = [

  { id: 1, name: "Local Bananas", unit: "1 kg", price: 55, was: 60, category: "produce", icon: "🍌" },
  { id: 2, name: "Tomatoes", unit: "1 kg", price: 35, was: 40, category: "produce", icon: "🍅" },
  { id: 3, name: "Spinach / Keerai", unit: "1 bunch", price: 15, was: 20, category: "produce", icon: "🥬" },
  { id: 4, name: "Apples", unit: "1 kg", price: 160, was: 180, category: "produce", icon: "🍎" },

  { id: 5, name: "Full Cream Milk", unit: "1 L", price: 68, was: 68, category: "dairy", icon: "🥛" },
  { id: 6, name: "Eggs", unit: "Tray of 12", price: 80, was: 84, category: "dairy", icon: "🥚" },
  { id: 7, name: "Cheddar Cheese", unit: "200 g", price: 135, was: 135, category: "dairy", icon: "🧀" },

  { id: 8, name: "Sourdough Loaf", unit: "400 g", price: 150, was: 150, category: "bakery", icon: "🍞" },
  { id: 9, name: "Butter Croissants", unit: "Pack of 4", price: 160, was: 160, category: "bakery", icon: "🥐" },

  { id: 10, name: "Chicken Breast", unit: "500 g", price: 150, was: 165, category: "meat", icon: "🍗" },
  { id: 11, name: "Rohu Fish Fillet", unit: "500 g", price: 160, was: 180, category: "meat", icon: "🐟" },

  { id: 12, name: "Basmati Rice", unit: "5 kg", price: 400, was: 450, category: "pantry", icon: "🍚" },
  { id: 13, name: "Olive Oil", unit: "500 ml", price: 350, was: 390, category: "pantry", icon: "🫒" },
  { id: 14, name: "Penne Pasta", unit: "500 g", price: 80, was: 95, category: "pantry", icon: "🍝" },

  { id: 15, name: "Orange Juice", unit: "1 L", price: 100, was: 110, category: "drinks", icon: "🍊" },
  { id: 16, name: "Filter Coffee Powder", unit: "250 g", price: 160, was: 180, category: "drinks", icon: "☕" },

  { id: 17, name: "Coconut", unit: "1 piece", price: 30, was: 35, category: "produce", icon: "🥥" },
  { id: 18, name: "Curry Leaves", unit: "1 bunch", price: 10, was: 12, category: "produce", icon: "🌿" },
  { id: 19, name: "Big Onions", unit: "1 kg", price: 35, was: 40, category: "produce", icon: "🧅" },
  { id: 20, name: "Potatoes", unit: "1 kg", price: 30, was: 35, category: "produce", icon: "🥔" },
  { id: 21, name: "Green Chillies", unit: "250 g", price: 15, was: 20, category: "produce", icon: "🌶️" },
  { id: 22, name: "Drumstick", unit: "250 g", price: 20, was: 25, category: "produce", icon: "🥒" },

  { id: 23, name: "Idli Rice", unit: "1 kg", price: 55, was: 60, category: "pantry", icon: "🍚" },
  { id: 24, name: "Ponni Boiled Rice", unit: "5 kg", price: 300, was: 325, category: "pantry", icon: "🍚" },
  { id: 25, name: "Coconut Oil", unit: "1 L", price: 280, was: 300, category: "pantry", icon: "🫙" },
  { id: 26, name: "Filter Coffee Powder", unit: "100 g", price: 60, was: 70, category: "drinks", icon: "☕" }

];
