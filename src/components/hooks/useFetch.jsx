import { useEffect, useState } from "react"
import axios from 'axios'


const useFetch = (url) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    setLoading('Loading')
    axios.get(url)
      .then(setData)
      .catch(err => {
        setLoading(false)
        setError('An error has occurred...' + err)
      })
      .finally(setLoading(false))
  }, [url])

  return { data, loading, error }
}

export default useFetch