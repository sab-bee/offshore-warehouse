import { Route, Routes } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Footer, Login, Navbar } from './components'
import {
  AddLiquor,
  Home,
  Inventory,
  ManageInventories,
  MyLiquors,
  NotFound,
  Register,
  User,
} from './pages'
import { RequireAuth } from './RequireAuth/RequireAuth'

function App() {
  return (
    <div className='flex flex-col min-h-[110vh]'>
      <div className='App'>
        <Navbar></Navbar>
        <ToastContainer
          transition={Slide}
          position='bottom-center'
        ></ToastContainer>
        <Routes>
          <Route path='/' element={<Home />}></Route>

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

          <Route path='/user' element={<User />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
