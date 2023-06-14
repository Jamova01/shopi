import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        setSearchByTitle } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-4'>My order</h2>
                <div
                    className='p-2'
                    onClick={closeCheckoutSideMenu}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </div>
            <div className='flex flex-col overflow-y-scroll gap-4 px-6 flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>$ {totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full py-3 text-white bg-black rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu