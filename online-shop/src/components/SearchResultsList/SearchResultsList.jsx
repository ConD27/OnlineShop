import SearchResult from '../SearchResult/SearchResult'
import './searchResultsList.css'

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SearchResult key={id} result={result} />
      })}
    </div>
  )
}

export default SearchResultsList
