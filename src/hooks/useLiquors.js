import axios from 'axios'
import { useEffect, useState } from 'react'

export function useLiquors(param) {
  const [liquors, setLiquors] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const url = `https://pacific-oasis-60084.herokuapp.com/api/liquors?amount=${param}`
    axios.get(url).then((res) => {
      setLoading(false)
      setLiquors(res.data)
    })
  }, [param])

  return { liquors, setLiquors, loading }
}

// https://pacific-oasis-60084.herokuapp.com
