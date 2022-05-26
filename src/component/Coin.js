
import axios from 'axios'
import  { useEffect, useState } from 'react'
import './Coin.css'
import ResultCoin from './ResultCoin'


const Coin = () => {
    const [search, setSearch]= useState('')
    const [displays, setDisplays]= useState([])

   const handleChange=(e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    useEffect(()=>{
        axios.get( 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
        .then(res=>{
            setDisplays(res.data)
            console.log(res.data)  
        })
        .catch(error=>console.log(error))

    },[])

    const filterDisplays= displays.filter(display=>
      display.name.toLowerCase().includes(search.toLowerCase())
      )
      console.log(filterDisplays)


  return (
    <div className='coin-app'>
      <div className='coin-search'>
      <h1>Coin</h1>
        <input type="text" className='coin-input' placeholder='search your coin' value={search} onChange={handleChange} />
        <div>
          {filterDisplays.map(display=>{
            return(
              
            <ResultCoin

            key={display.id}
            name={display.name}
            symbol={display.symbol}
            marketcap={display.market_cap}
            price={display.current_price}
          
            />
              
             
            
            )}
            )}
        </div>
        </div>
        </div>
  )
}

export default Coin
