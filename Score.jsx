import React from 'react'

const Score = (props) => {
 
  return (
    <>
    <div className="d-flex align-items-center"  style={{height:'100vh'}}>
    <div className="container">
        <h3 className='text-center text-primary '>
       
            {props.score >=4 ? 'You are passed 💕 ':'Oops! try Again  🧼 '}
          
        </h3>
        <h2 className='text-center'>
        Your score is {props.score} 
        </h2>
        <h3 className='text-center text-primary'>     
            total :{props.total}</h3>
            <button className='btn btn-primary' onClick={props.reset} >Reset</button>
    </div>
    </div>
    </>
  )
}

export default Score