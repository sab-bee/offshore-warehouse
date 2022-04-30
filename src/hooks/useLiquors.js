import axios from 'axios'
import { useEffect, useState } from 'react'

export function useLiquors(param) {
  const [liquors, setLiquors] = useState([])
  useEffect(() => {
    const url = `http://localhost:5000/api/liquors?amount=${param}`
    axios.get(url).then((res) => {
      setLiquors(res.data)
    })
  }, [param])

  return { liquors, setLiquors }
}

// https://pacific-oasis-60084.herokuapp.com
