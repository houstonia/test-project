import { Footer, Header } from '@components';
import { Main } from '@pages';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import {  HashRouter, Outlet } from 'react-router-dom';

import store from './store/index';

function App() {
  return (
    <div className="app" style={{ paddingBottom: '80px' }}>
      <Provider store={store}>
        <HashRouter>
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
        </HashRouter>
      </Provider>
    </div>
  );
}
export default App;
