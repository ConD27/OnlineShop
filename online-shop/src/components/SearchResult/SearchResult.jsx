import './searchResult.css'

const SearchResult = ({ result }) => {
  return (
    <div className='search-result'>{result.product_name}</div>
  )
}

export default SearchResult
