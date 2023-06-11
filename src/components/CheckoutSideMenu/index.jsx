import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts } = useContext(ShoppingCartContext)

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
            <div className='flex flex-col overflow-y-scroll gap-4 px-6'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>

        </aside>
    )
}

export default CheckoutSideMenu