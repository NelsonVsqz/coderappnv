import { createContext, useState } from "react";


export const CartContext = createContext({
cart:[]
})

export const CartProvider = ({children}) =>{

const [cart , setCart ] = useState([])

console.log(cart)

const addItem = (item,quantity)=>{
    if(!isInCart(item.id)){
    setCart(prev => [...prev ,{ ...item,quantity }])
    } else {
        console.error("El producto ya fue agregado")
    }
}

const removeItem = (itemId)=>{

const cartUpdated = cart.filter(prod => prod.id !== itemId )
setCart(cartUpdated)
} 

const clearCart = () =>{
setCart([])
}

const isInCart = (itemId)=>{
return cart.some(prod => prod.id === itemId)
}

const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  const getQuantityById = (itemId)=>{
    let product = cart.find( elemento => elemento.id === itemId)
    return product?.quantity
  }
  
  const getPriceById = (itemId) => {
    let product = cart.find( elemento => elemento.id === itemId)
    return product?.quantity * product?.price
  };

return (    
 <CartContext.Provider value={{cart,addItem,removeItem,clearCart,getTotalPrice,getTotalQuantity,getQuantityById,getPriceById}}>
    {children}
 </CartContext.Provider>    
)
}