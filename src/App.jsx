// Bringing in the required import from 'react-router-dom'
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <>
      <NavTabs />
      <main className="main">
      <div>
      <form name='contact v1' method='POST' data-netlify='true' onSubmit='submit'> 
   
    <input type="hidden" name="form-name" value='contact v1' />
   
    <div>
      <label>First Name <br />
        <input type="text" name='first-name' />
      </label>
    </div>

    <div>
      <label htmlFor='email'>Email</label> <br /> 
      <input id='email' type="email" name="email" />
    </div>

    <div>
      <label>Messages <br />
      <textarea name="messages" rows='7'></textarea>
    
      </label>
    </div>

    <button type='submit'>Submit The Results</button>
    

      </form>
    </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
