import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

function Rating({value}) {
  return (
    <>
    <span> 
    {
        value >= 1 ?(
            <FaStar/>

        ) :  value =>  0.5 ? (

        <FaStarHalfAlt/>
        ):(

        <FaRegStar/>
        )}
    
     </span>






     <span> 
    {
        value >= 2 ?(
            <FaStar/>

        ) :  value =>  1.5 ? (

        <FaStarHalfAlt/>
        ):(

        <FaRegStar/>
        )}
    
     </span>
     <span> 
    {
        value >= 3 ?(
            <FaStar/>

        ) :  value => 2 ? (

        <FaStarHalfAlt/>
        ):(

        <FaRegStar/>
        )}
    
     </span>
     <span> 
    {
        value >= 4 ?(
            <FaStar/>

        ) :  value => 1.4 ? (

        <FaStarHalfAlt/>
        ):(

        <FaRegStar/>
        )}
    
     </span>
      
     <span> 
    {
        value >= 5 ?(
            <FaStar/>

        ) :  value => 2.3 ? (

        <FaStarHalfAlt/>
        ):(

        <FaRegStar/>
        )}
    
     </span>
      
    </>
  )
}

export default Rating
