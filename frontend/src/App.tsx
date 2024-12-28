import React, { useState } from 'react';
import './App.css';
import Home from './views/Home';
import Calc from './views/Calc';
import Service from './views/Service';
import About from './views/About';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [page, setPage] = useState<string>(Home.name)

  const showPage = (): React.JSX.Element => {
    switch (page) {
      case Home.name: return <Home setPage={setPage} />
      case Calc.name: return <Calc />
      case Service.name: return <Service />
      case About.name: return <About />
      case Contacts.name: return <Contacts />
      default: return <NotFound/>
    }
  }

  return (
    <>
      <Header setPage={setPage}/>
      {showPage()}
      <Footer/>
    </>
  );
}

export default App;
