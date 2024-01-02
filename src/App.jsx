import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Starred from './pages/Starred'
import NotFound from './pages/NotFound';
import MainLayouts from './components/MainLayouts';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayouts/>}>
            <Route path='/' element={<Home />} />
            <Route path='/starred' element={<Starred />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
