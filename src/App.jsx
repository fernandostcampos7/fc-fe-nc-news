import { useState } from 'react'
import {Route, Routes} from 'react-router-dom;'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header/>
      <Route path='/' element={<Homepage/>}/>

    </div>
    <Footer/>

  )
}

export default App
