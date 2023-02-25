import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import Hero from './Components/Page/Hero';
import Cartoon from './Components/Page/Cartoon';
import Movie from './Components/Page/Movie';

function App() {
  const [count, setCount] = useState(0)
 function inc(){

 }
  return (
    <div>
      
   <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/about' element={<About/>}  />
    <Route path='/hero' element={<Hero/>}  />
    <Route path='/cartoon' element={<Cartoon/>}  />
    <Route path='/movie' element={<Movie/>}  />
    
   </Routes>
    </div>
  )
}

export default App
