import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSlider from "./pages/mountain/HeroSlider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Frontend Website */}
            <Route path="/" element={<HeroSlider />} />
            {/* <Route path="/superhero" element={<SuperHero />} /> */}

          {/* Admin Panel */}
          {/* <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
