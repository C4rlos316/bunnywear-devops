"use client";

import { useState, useCallback, createContext, useContext } from "react";
import Navbar from "./Navbar";
import CartSidebar from "./CartSidebar";

export const CartContext = createContext({ onAddToCart: () => {}, onUpdateQty: () => {} });

export function useCart() {
  return useContext(CartContext);
}

export default function ClientLayout({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        const maxStock = typeof product.stock === "number" ? product.stock : Infinity;
        if (existing.qty >= maxStock) return prev;
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const handleUpdateQty = useCallback((productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => i.id === productId ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ onAddToCart: handleAddToCart, onUpdateQty: handleUpdateQty }}>
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
      />
      {children}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
      />
    </CartContext.Provider>
  );
}
