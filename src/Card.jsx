import React from 'react'
import { count } from './store'

const Card = ()=> {
    return (
      <>
        <div className="p-2">
          <button className='btn btn-default' onClick={() => count.value++}>
            count is {count.value}
          </button>
        </div>
      </>
    )
}

export default Card
