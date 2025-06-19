import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';

function App() {
  return (
      <div className='d-flex'>
        <Sidebar/>
        <div className='flex-grow-1'>
          <Header/>
          <HeroSection/>
          <main className='p-4'>
            <CardGrid/>
            <ChartSection/>
          </main>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
