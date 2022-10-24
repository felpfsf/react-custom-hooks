import './App.css'
import Search from './components/Search'
import useFetch from './components/hooks/useFetch'

function App() {
  const URL_POSTS = 'http://jsonplaceholder.typicode.com/posts?_limit=10'
  const URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos?_limit=20'

  const { data, loading, error } = useFetch(URL_PHOTOS)




  return (
    <div className="App">
      {/* <div>
        {!loading ? <p>{loading}</p> : 'not loading'}
        {!error ? <p>{error}</p> : null}
        {data &&
          <div className='grid'>
            {data.data.map(item => (
              <div key={item.id}>
                <img src={item.thumbnailUrl} alt={item.title} />
              </div>
            ))}
          </div>
        }
      </div> */}

      <Search />
    </div>
  )
}

export default App
