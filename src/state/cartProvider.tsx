import React, { createContext, useContext, useState } from 'react';
import { Product } from '@/interfaces/product.interface';

type CartItem = {
  product: Product;
  quantity: number;
};

type ShoppingCartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  getTotalPrice: () => number;
  removeOne: (itemId: string) => void;
  getQuantityById: (itemId: string) => number;
};

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalPrice: () => 0,
  getQuantityById: () => 0,
  removeOne: () => {},
});

export const useShoppingCart = () => useContext(ShoppingCartContext);

interface Props {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.product._id === item._id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return updatedCartItems;
      }

      return [...prevCartItems, { product: item, quantity: 1 }];
    });
  };

  const removeOne = (itemId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.product._id !== itemId)
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.product._id === itemId
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        if (updatedCartItems[existingItemIndex].quantity > 1) {
          updatedCartItems[existingItemIndex].quantity -= 1;
        } else {
          updatedCartItems.splice(existingItemIndex, 1);
        }
        return updatedCartItems;
      }

      return prevCartItems;
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const { product, quantity } = cartItem;
      const price = parseFloat(product.price);
      return total + price * quantity;
    }, 0);
  };

  const getQuantityById = (itemId: string) => {
    const cartItem = cartItems.find((item) => item.product._id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        removeOne,
        addToCart,
        removeFromCart,
        getTotalPrice,
        getQuantityById,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
