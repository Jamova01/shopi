import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const ProductDetail = () => {
    const {
        isProductDetailOpen,
        closeProductDetail,
        productToShow } = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-4'>Detail</h2>
                <div
                    className='p-2'
                    onClick={closeProductDetail}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </div>
            <figure className='p-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={productToShow?.images}
                    alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>$ {productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-md'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail