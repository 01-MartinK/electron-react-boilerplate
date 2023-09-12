import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.scss';

import Store from './pages/Store';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </Router>
  );
}
