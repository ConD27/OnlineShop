import { useState } from 'react'
import { getAllItemsService } from '../../services/itemServices'

import { FaSearch } from 'react-icons/fa'
import './searchBar.css'

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')

  const fetchData = async (value) => {
    try {
      const response = await getAllItemsService()
      if (response.status === 200) {
        const results = response.data.filter((product) => {
          return (
            value &&
            product &&
            product.product_name &&
            product.product_name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      }
    } catch (error) {
      console.error()
    }
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='¿Qué es lo que busca?'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
