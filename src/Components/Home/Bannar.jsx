import {Swiper, SwiperSlide } from "swiper/react"
import { Movies } from "../../Data/MovieData"
import FlexMovieItems from "../FlexMovieItems"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"

function Bannar() {
  return (
    <div className="relative w-full">
    <Swiper 
    direction="horizontal"
    spaceBetween={50}
    slidesPerView={1}
    loop={true}
    speed={1000}
    autoplay={{delay:4000 , disableOnInteraction: true}}
    className="w-full xl:h-96 bg-dry lg:h-64 h-48" > 
      { Movies.slice(0,3).map((movie , index)=>(
             <SwiperSlide  key={index} className="relative rounded overflow-hidden"> 
             <img src={`../../${movie.image}`} alt={movie.name} /> 
            <div className="absolute linear-bg xl:pl-52 sm:p1-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl  font-bold">
            {movie.name}
             </h1>
             <div className="flex gap-5  items-center text-dryGray ">
                <FlexMovieItems movie={movie}/>
             </div>
             <div className="flex gap-5 items-center">
             <Link 
             to={`/movie/${movie.name}`} className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'>
              Watch 
              </Link>   
              <button className="bg-white hover:text-subMain transitions text-white  px-4 py-3 rounded text-sm bg-opacity-30"> 
              <FaHeart/>
               </button>
              </div>
            </div>
            </SwiperSlide> 
           )) }       
     </Swiper>  
    </div> 
  )
}

export default Bannar
