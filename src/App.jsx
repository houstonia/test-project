import { Footer, Header } from '@components';
import { Main } from '@pages';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="app" style={{paddingBottom:'80px'}}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Outlet />
                  <Footer />
                </>
              }
            >
              <Route index element={<Main />} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
}
export default App;
