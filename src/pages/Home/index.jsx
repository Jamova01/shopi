import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context'

// Components
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'

const Home = () => {
    const { items } = useContext(ShoppingCartContext)

    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map(product => (
                        <Card key={product.id} data={product} />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home