import { Route, Routes } from 'react-router-dom'
import { Login, Navbar } from './components'
import { AddLiquor, Home, ManageInventories, MyProducts } from './pages'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/addProduct' element={<AddLiquor />}></Route>
          <Route
            path='/manageInventories'
            element={<ManageInventories />}
          ></Route>
          <Route path='/myProducts' element={<MyProducts />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
