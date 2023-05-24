import React from 'react'
import { useGetNewsQuery } from '../store/cryptoNewsApi'



const News = ({simplified: unknown}) => {
  const { data } = useGetNewsQuery([20])
  console.log(data)

  return (
    <div>News</div>
  )
}

export default News