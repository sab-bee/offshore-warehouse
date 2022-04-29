import axios from 'axios'
import { useEffect, useState } from 'react'

export function useLiquors() {
  const [liquors, setLiquors] = useState([])
  useEffect(() => {
    axios
      .get('https://pacific-oasis-60084.herokuapp.com/api/liquors')
      .then((res) => setLiquors(res.data))
  }, [])
  
  return { liquors }
}
