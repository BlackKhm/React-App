import logo from './logo.svg';
import './App.css';

import Navbar from '../src/Navbar'

import Home from '../src/Pages/Home'
import About from '../src/Pages/About'

import Contact from '../src/Pages/Contact'


function App() {
    console.log(window.location.pathname)
    let component;
    switch (window.location.pathname) {
      case '/':
        component = <Home />
        break;
      case '/about':
        component = <About />
          break;
      case '/contact':
        component = <Contact />
          break;
      default:
        break;
    }

  return <>
    <Navbar />
      <div className='container'>
        {component}
      </div>
  </>
}

export default App;
