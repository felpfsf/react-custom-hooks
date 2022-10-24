import React, { useMemo, useRef, useState } from 'react'

const Search = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

  const inputRef = useRef()


  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, items])

  const handleSubmit = e => {
    e.preventDefault()
    const value = inputRef.current.value
    if (value === '') return
    setItems(prev => {
      return [...prev, value]
    })
    inputRef.current.value = ''
  }


  return (
    <div>
      Search:
      <input type={'search'} value={query} onChange={e => setQuery(e.target.value)} />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        Add: <input ref={inputRef} type={'text'} />
        <button>Add Item</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default Search