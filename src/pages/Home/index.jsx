import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context'

// Components
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'

const Home = () => {
    const {
        items,
        setSearchByTitle,
        searchByTitle,
        filteredItems } = useContext(ShoppingCartContext)

    const rederView = () => {
        if (searchByTitle?.length > 0) {
            if (filteredItems?.length > 0) {
                return (
                    filteredItems?.map(product => (
                        <Card key={product.id} data={product} />
                    ))
                )
            } else {
                return (
                    <div>We don&apos;t have anything</div>
                )
            }
        } else {
            return (
                items?.map(product => (
                    <Card key={product.id} data={product} />
                ))
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>

            <input
                type='text'
                name=''
                id=''
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => setSearchByTitle(event.target.value)} />

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    rederView()
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home