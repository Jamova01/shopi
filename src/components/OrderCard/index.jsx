import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import { useContext } from 'react'

const OrderCard = (props) => {
    const { title, imageUrl, price } = props
    const { closeCheckoutSideMenu } = useContext(ShoppingCartContext)

    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={closeCheckoutSideMenu}
                />
            </div>
        </div>
    )
}

export default OrderCard