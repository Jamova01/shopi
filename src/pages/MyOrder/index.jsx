import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context'

// Components
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'

function MyOrder() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <Layout>
            MyOrder
            <div className='flex flex-col w-80 gap-4'>
                {
                    order?.slice(-1)[0].products.map(product => (
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