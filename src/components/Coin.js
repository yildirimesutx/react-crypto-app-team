import React from 'react'
import Main from './Main'

const Coin = () => {



const getCoin = ()=>{

  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res=>console.log(res))
}




















  return (
    <div>Coin

      <Main/>
  </div>
  )
}

export default Coin