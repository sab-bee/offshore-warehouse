import { Route, Routes } from 'react-router-dom'
import { Login, Navbar } from './components'
import {
  AddLiquor,
  Home,
  Inventory,
  ManageInventories,
  MyLiquors,
  NotFound,
} from './pages'
import { RequireAuth } from './RequireAuth/RequireAuth'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addProduct' element={<AddLiquor />}></Route>
        <Route
          path='/manageInventories'
          element={<ManageInventories />}
        ></Route>
        <Route path='/myLiquors' element={<MyLiquors />}></Route>
        <Route
          path='/inventory/:id'
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
