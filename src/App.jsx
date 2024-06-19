import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div id="root">
      <div className='wrapper'>
        <NavTabs />
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
