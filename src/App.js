import { Route, Routes } from 'react-router-dom'
import { Login, Navbar } from './components'
import {
  AddLiquor,
  Home,
  Inventory,
  ManageInventories,
  MyProducts,
} from './pages'

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
          <Route path='/inventory/:id' element={<Inventory />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
