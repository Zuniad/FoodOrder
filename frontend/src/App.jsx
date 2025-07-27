import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
 import AllReservations from './pages/AllReservations';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
       <Route path="/reservations" element={<AllReservations />} />

      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;

