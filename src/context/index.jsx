import { createContext } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartPrivider = ({ children }) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}
