import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicInformation from './components/molecules/BasicInfo';
import FavouriteScreen from './components/molecules/favourite';
import HotNews from './components/molecules/HotNews';
import Language from './components/molecules/Language';
import MoviePage from './components/molecules/MoviePage/index';
import PaymenttEdit from './components/molecules/PaymenEdit';
import PaymentPage from './components/molecules/PaymentPage/index';
import PaymentReciept from './components/molecules/PaymentReciept';
import PurchasePage from './components/molecules/purchasePage';
// import ComingSoonPage from './components/pages/ComingSoon';
import HomePage from './components/pages/HomePage';
import LazyProfilePage from './components/pages/ProfilePage';
// import ProfilePage from './components/pages/ProfilePage';

import LazyComingSoon from './components/pages/ComingSoon';

function App() {
  return (
    <>
      <Router>
        <ToastContainer autoClose={500} draggable pauseOnHover={false} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<LazyProfilePage />}></Route>
          <Route path="info" element={<BasicInformation />} />
          <Route path="payment-edit" element={<PaymenttEdit />} />
          <Route path="coming-soon" element={<LazyComingSoon />} Route />
          <Route path="movie" element={<MoviePage />} Route />
          <Route path="purchase" element={<PurchasePage />} />
          <Route path="payment" element={<PaymentPage />} Route />
          <Route path="reciept" element={<PaymentReciept />} />
          <Route path="favourite" element={<FavouriteScreen />} />
          <Route path="language" element={<Language />} />
          <Route path="hot-news" element={<HotNews />} />

          <Route
            path="*"
            element={<div style={{ color: 'white' }}> No Route Found</div>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
