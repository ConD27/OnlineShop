import { useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/itemServices'
import ImageComponent from '@/components/ImageComponent.jsx/ImageComponent'

const Home = () => {
  const [itemsData, setItemsData] = useState()
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.error()
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {itemsData && itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <ImageComponent className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} notFoundSrc={placeholderImage} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <a href='#' className='btn btn-primary'>Comprar</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
