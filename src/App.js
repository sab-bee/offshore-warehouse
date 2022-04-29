import { Route, Routes } from 'react-router-dom'
import { Login, Navbar } from './components'
import { AddProduct, Home } from './pages'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/addProduct' element={<AddProduct />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
