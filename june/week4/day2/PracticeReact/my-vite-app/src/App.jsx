import React from 'react';
import Navbar from './pages/Navbar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <ContactUs />
    </div>
  );
};

export default App;