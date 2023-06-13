import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { ShoppingCartContext } from '../../context/'

// Components
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'

function MyOrders() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80'>
                <h1>My Orders</h1>
            </div>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard totalPrice={order.totaPrice} totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders