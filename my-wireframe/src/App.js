import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';
import EmailPage from './pages/EmailPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [userName, setUserName] = useState(null);

  return (
      <div className="d-flex min-vh-100">
        <Sidebar />
        <div className='flex-grow-1'>
          <Header userName={userName} />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <main className="p-4">
                  <CardGrid />
                  <ChartSection />
                </main>
              </>
            } />
            <Route path="/contact" element={<EmailPage />} />
            <Route path="/signup" element={<SignUpPage onSignUp={setUserName} />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
}

export default App;
