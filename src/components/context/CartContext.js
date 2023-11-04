import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item,quantity}])
        }else{
            setCart((prev) => prev.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem)
            )
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalCartItem = cart.length
    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0);
    const totalQuantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

    return(
        <CartContext.Provider value={{ cart,addItem,removeItem,clearCart,totalQuantity,totalPrice,totalCartItem}}>
            {children}
        </CartContext.Provider>
    )
}