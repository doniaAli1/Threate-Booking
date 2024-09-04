import './style/App.css';
import Footer from './shared/Footer';
import Header from './shared/Header';
import { Outlet } from 'react-router-dom';
import { Data } from './core/data/Movies';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('movieData', JSON.stringify(Data));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
