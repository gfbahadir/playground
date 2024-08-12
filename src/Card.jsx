import React from 'react'
import { getCount, addCount, count } from './store'

const Card = ()=> {
    console.log("rerender card");
    return (
      <>
        <div className="card">
          <button onClick={() => addCount()}>
            count is {count.value}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </>
    )
}

export default Card
