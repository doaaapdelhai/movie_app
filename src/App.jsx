import { Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import AboutUs from "./Screens/AboutUs"
import NotFound from "./Screens/NotFound"
import './App.css'
import ContactUs from "./Screens/ContactUs"

function App() {

  return (
    <div>
      <Routes> 
      <Route path="/" element={<HomeScreen/>}  />
      <Route path="/about-us" element={<AboutUs/>}  />
      <Route path="/contact-us" element={<ContactUs/>}  />
      <Route path="*" element={<NotFound/>}  />
      
      </Routes>
    </div>
  )
}

export default App
