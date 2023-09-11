import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';



const Loading = lazy(() => import('./Components/Loading'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Amenities = lazy(() => import('./Pages/Amenities'));
const Projects = lazy(() => import('./Pages/Projects'));
const Villas = lazy(() => import('./Pages/Villas'));
const Services = lazy(() => import('./Pages/Services'));
const Faqs = lazy(() => import('./Pages/Faq'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><Loading/></div>}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Amenities" element={<Amenities/>} />
            <Route path="/Faq" element={<Faqs/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Villas" element={<Villas/>} />

          </Routes>
          {/* <Footer/> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default App;
