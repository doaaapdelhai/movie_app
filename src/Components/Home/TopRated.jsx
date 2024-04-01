import { useState } from "react"
import Titles from "../Titles"
import {   BsBookmarkStarFill } from "react-icons/bs"
// import {Swiper, SwiperSlide } from "swiper/react"
// import { Movies } from "../../Data/MovieData"


function TopRated() {
  const [nextEl, setnextEl] = useState(null)
  const [PrveEl, setPrveEl] = useState(null)
  return (
    <div className="my-16">

    <Titles title='Top Reted' Icon={BsBookmarkStarFill} />
    <h1>doaa</h1>
    <div className="mt-10"> 
    


 
     </div>
    </div>
  );
}

export default TopRated
