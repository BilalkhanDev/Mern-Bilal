import React,{useState} from 'react';
import { Data } from './Data';
import Score from './Score';
const Quiz =() => {
     const [currentquestion,setcurrentquestion]= useState(0);
     //f
     const [score,setscore]= useState(0);
     const [clicked,setclicked]= useState(0);
     const [show,setshow]=useState(false);
     const Changequestion=()=>{
          Handleclick();
           if(currentquestion <Data.length-1){
               setcurrentquestion(currentquestion+1)
           }
           else{
                setshow(true);
           }
            }
            
  const Handleclick=()=>{

     if(clicked===Data[currentquestion].correctAnswer ){
          setscore(score+1)
          setclicked(0)
     }
     
     console.log(clicked)
  }
 
  const reset=()=>{
     setscore(0)
     setshow(false);
     setclicked(0)
     setcurrentquestion(0)
  }
  return (
<>
 {show? <Score score={score}  total={Data.length} reset={reset}/>: 
 //here we pass prpos values in score components to show the score
 
 <div className='d-flex align-items-center' style={{height:'80vh'}}>
 <div className="container">
      <h1 className='text-center'><img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_960_720.png" alt="" style={{height
 :'50px',width:'50px'}}/></h1>
   <h5 className='text-center'>{Data[currentquestion].question}</h5>
         {Data[currentquestion].options.map((option,i)=>{
             return(
                  <div className="d-flex d-inline">
                       <div className={`btn m-1 ${clicked===i+1?'active':''}`}key={i} onClick={()=>{setclicked(i+1)}} id='option' 
                       >{i+1} {option}</div>
                       
                  </div>
                  //here i in the identical  index for each optopn which starts from 0 
             )
        })}
         
       <h5 className='text-center'><button className='btn btn-outline-primary ' id='next-button' onClick={Changequestion}>Next</button></h5>
   

        
 </div>
   
 
 </div>



 
 } 

</>
  )
}

export default Quiz