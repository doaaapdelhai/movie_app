
function Head({title}) {
  return (
    <div className="w-full bg-deepGray lg:h-64 h-40  relative overflow-hidden rounded-md">
      <img 
      src="/src/imgs/bg1.jpg" 
      className="w-full h-full object-cover" 
      alt="" 
      />
            
            <div className="absolute lg:top-24 top-16  w-full flex-colo" >
             
            <h1 className="text-2x1 lg:text-h1  text-center font-bold ">{title && title}</h1>

               </div>



    </div>
  )
}

export default Head