//REACT
import MainHeader from './components/MainHeader/MainHeader'
import MainNav from './components/MainNav/MainNav'
import { Outlet } from "react-router-dom"
// CSS
import './App.css'

function App() {

  return (

    <div className='App'>
        <div className='top-main'>
          <MainHeader/>
          <MainNav/>
        </div>
        <Outlet/>
    </div>

  )
}

export default App
