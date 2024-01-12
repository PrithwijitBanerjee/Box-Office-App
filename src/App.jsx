import {Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Starred from './pages/Starred'
import NotFound from './pages/NotFound';
import MainLayouts from './components/MainLayouts';
import ShowDetail from './components/shows/ShowDetail';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GlobalStyles from './styled_css/GlobalStyles';
// Create a client
const queryClient = new QueryClient(); // globally declared...

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles>
          <HashRouter>
            <Routes>
              <Route path='/' element={<MainLayouts />}>
                <Route path='/' element={<Home />} />
                <Route path='starred' element={<Starred />} />
                <Route path='*' element={<NotFound />} />
              </Route>
              <Route path='/show/:showId' element={<ShowDetail />} />
            </Routes>
          </HashRouter>
        </GlobalStyles>
      </QueryClientProvider>
    </>
  );
}

export default App;
