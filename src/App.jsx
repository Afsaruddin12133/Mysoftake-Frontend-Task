import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSlider from "./pages/mountain/HeroSlider";
import SuperHeroLanding from "./pages/superhero/SuperHeroLanding";
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Frontend Website */}
            <Route path="/" element={<HeroSlider />} />
            <Route path="/superhero" element={<SuperHeroLanding />} />

          {/* Admin Panel */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
