import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'

const Statistics = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://pacific-oasis-60084.herokuapp.com/api/statistics')
      .then((res) => setData(res.data))
  }, [])

  return (
    <div className='my-12'>
      <h2 className='text-center font-semibold text-4xl text-gray-700 mb-12'>
        Yearly Statistics
      </h2>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 15,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='reveneue'
            stackId='1'
            stroke='#110b86'
            fill='#7e78f7'
          />
          <Area
            type='monotone'
            dataKey='invest'
            stackId='2'
            stroke='#8a0e0e'
            fill='#f78090'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Statistics
