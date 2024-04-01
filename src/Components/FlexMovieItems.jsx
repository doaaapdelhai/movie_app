import { CgTime } from "react-icons/cg"
import { FaRegCalendarAlt } from "react-icons/fa"

function FlexMovieItems({movie}) {
  return (
    <>
      <div className="flex items-center gap-2">
      <span className="text-sm font-medium"> {movie.category}  </span>
       </div>
       <div className="flex items-center gap-2">
       <FaRegCalendarAlt className="text-subMain w-3 h-3"/>
       <span className="text-sm font-medium">{movie.year} </span>
        </div><br/>
        <div className="flex items-center gap-2">
    
        <CgTime className="text-subMain w-3 h-3"/>
        <span className="text-sm font-medium">{movie.time}  </span>
    
          </div>
        
          
    </>
  )
}

export default FlexMovieItems
