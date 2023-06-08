import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Layout from '../../components/Layout'

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

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

        </Layout>
    )
}

export default Home