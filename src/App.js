import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home } from './pages'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
