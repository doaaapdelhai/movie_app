import { useState } from "react"
import Titles from "../Titles"
import {   BsBookmarkStarFill,  BsCaretLeftFill,  BsCaretRightFill } from "react-icons/bs"
import {Swiper, SwiperSlide } from "swiper/react"
import { Movies } from "../../Data/MovieData"

// import "swiper/css"
// import "swiper/css/navigation"
import "swiper/css/autoplay"
import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import Rating from "../Stars"

function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames  = 
  " hover:bg-dry  transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white "; 

  return (
    <div className="my-16">

    <Titles title='Top Reted' Icon={BsBookmarkStarFill} />
    <div className="mt-10"> 

    <Swiper
     navigation={{nextEl , prevEl}}
    spaceBetween={40}
    slidesPerView={4}
    loop={true}
    speed={1000} 
     autoplay={true} 
     Autoplay={{ delay: 3000 }}>
       {
        Movies.map((movie , index)=>(
          <SwiperSlide key={index} >
         <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden "> 
          <img src={`../../${movie.titlaImage}`}  
           className="w-full h-full object-cover rounded-lg" /> 

           <div className="px-4 gap-6  hoveres text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">   

           <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white  " >
           <FaHeart/>
           </button>
           <Link  className="font-semibold text-xl trancuted line-clamp-2" 
            to={`/movie/${movie.name}`} > {movie.name}
             </Link>
             <div className="flex gap-2 text-star"> 
             <Rating value={movie.rate  } />
              </div>
           
           </div>

          </div>
          </SwiperSlide>
           ))
        }
      </Swiper>
      <div className=" w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>

 
     </div>
    </div>
  );
}

export default TopRated
 