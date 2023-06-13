import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { ShoppingCartContext } from '../../context'

// Components
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'

// Icons
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-5'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80 gap-4'>
                {
                    order?.slice(-1)[0]?.products?.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder