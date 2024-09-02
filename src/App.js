import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import FuelProducerAuthPage from './fuelProducerPages/authPage/AuthPage';
import PoultryAuthPage from './poultryPages/authPage/AuthPage';
import ConsumersAuthPage from './consumerPages/authPage/AuthPage';
import ConsumerMainPage from './consumerPages/mainPage/MainPage';
import FuelProducersMainPage from './fuelProducerPages/mainPage/MainPage';
import PoultryMainPage from './poultryPages/mainPage/MainPage';
import Vyuuha from './vyuuha-page/Vyuuha';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Vyuuha />} />
          <Route path="/aviammo" element={<LandingPage />} />
          <Route path="/poultry-auth" element={<PoultryAuthPage />} />
          <Route path="/fuel-producers-auth" element={<FuelProducerAuthPage />} />
          <Route path="/consumers-auth" element={<ConsumersAuthPage />} />
          <Route path="/consumers-main" element={<ConsumerMainPage />} />
          <Route path="/fuel-producers-main" element={<FuelProducersMainPage />} />
          <Route path="/poultry-farmers-main" element={<PoultryMainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
