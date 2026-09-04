import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteConfigProvider } from './context/SiteConfigContext';
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';

export default function App() {
  return (
    <BrowserRouter>
      <SiteConfigProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetail />} />
        </Routes>
      </SiteConfigProvider>
    </BrowserRouter>
  );
}
