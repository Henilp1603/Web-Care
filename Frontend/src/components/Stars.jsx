import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Stars({stars}) {
  const ratingStar=Array.from({length:5},(elem,index)=>{
    let number=index+0.5;

    return(
      <span key={index} >
        {
          stars >= index+1?(
           <FontAwesomeIcon icon="fa-solid fa-star" />

          ): stars >= number ?(
        <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />

          ):(
        <FontAwesomeIcon icon="fa-regular fa-star" />

          )
        }
      </span>
    )
  })
  return (
    <div>
     {ratingStar}
    </div>
  )
}

export default Stars
