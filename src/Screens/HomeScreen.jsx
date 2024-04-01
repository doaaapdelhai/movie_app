import Bannar from '../Components/Home/Bannar'
import Promos from '../Components/Home/Promos'
import PupularMovies from '../Components/Home/PupularMovies'
import TopRated from '../Components/Home/TopRated'
import Layout from '../Layout/Layout'
function HomeScreen() {
  return (
    <Layout>
    <div className='container mx-auto min-h-screen px-2 bm-6'>
    <Bannar/>
    <PupularMovies/>
    <Promos/>
    <TopRated/>

    
    </div>
    
     </Layout>
  )
}

export default HomeScreen
