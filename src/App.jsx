import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Album from './components/Album'
import Quiz from './components/Quiz'
import Motion from './components/Motion'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Motion children={<Home />} />} />
        <Route path='/quiz' element={<Motion children={<Quiz />} />} />
        <Route path='/album' element={<Motion children={<Album />} />} />
      </Routes>
    </>
  )
}

export default App
