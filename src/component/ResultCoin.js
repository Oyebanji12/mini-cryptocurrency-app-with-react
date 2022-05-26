import React from 'react'

const ResultCoin = ({name,price,marketcap,symbol}) => {
  return (
    <div>
        
        <div> <hr />
            <h2>name:{name}</h2>
            <h2>price:{price}</h2>
            <h2>mkt cap:{marketcap}</h2>
            <h2>symbol:{symbol}</h2>
        </div>



    </div>
  )
}

export default ResultCoin