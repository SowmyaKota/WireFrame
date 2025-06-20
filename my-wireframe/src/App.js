import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';
import EmailPage from './pages/EmailPage';
import SignUpPage from './pages/SignUpPage';
import ReportsPage from './pages/ReportsPage';
import NotificationsPage from './pages/NotificationsPage';

function App() {
  const [userName, setUserName] = useState(null);

  return (
    <div className="d-flex" style={{ backgroundColor: '#e6f2ff', minHeight: '100vh' }}>
      <div className='d-flex flex-grow-1'>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <Header userName={userName} />

        <div className="flex-grow-1">
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
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/notifications" element={<NotificationsPage/>}/>
          </Routes>
        </div>

        <Footer /> 
      </div>
      </div>
    </div>
  );
}

export default App;
