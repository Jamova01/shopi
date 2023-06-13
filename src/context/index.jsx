import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartPrivider = ({ children }) => {
    // Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Checkout side menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <ShoppingCartContext.Provider value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}
