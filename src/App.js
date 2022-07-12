import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicInformation from './components/molecules/BasicInfo';
import Language from './components/molecules/Language';
import MoviePage from './components/molecules/MoviePage/index';
import PaymenttEdit from './components/molecules/PaymenEdit';
import PaymentPage from './components/molecules/PaymentPage/index';
import PaymentReciept from './components/molecules/PaymentReciept';
import PurchasePage from './components/molecules/purchasePage';
import ComingSoonPage from './components/pages/ComingSoon';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="info" element={<BasicInformation />} />
          <Route path="payment-edit" element={<PaymenttEdit />} />
          <Route path="coming-soon" element={<ComingSoonPage />} Route />
          <Route path="movie" element={<MoviePage />} Route />
          <Route path="purchase" element={<PurchasePage />} />
          <Route path="payment" element={<PaymentPage />} Route />
          <Route path="reciept" element={<PaymentReciept />} />
          <Route path="language" element={<Language />} />

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
