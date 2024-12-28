import React, {SetStateAction} from 'react';
import Home from './../views/Home';
import Calc from './../views/Calc';
import Service from './../views/Service';
import About from './../views/About';
import Contacts from './../views/Contacts';
import logo from './../img/logo.png'

interface HeaderArgs {
  setPage: React.Dispatch<SetStateAction<string>>,
}

const Header = ({setPage}: HeaderArgs) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
          <div className="header__logo">
            <img src={logo} alt="" onClick={() => setPage(Home.name)}/>
          </div>
          <div className="header__main-menu">
            <ul>
              <li onClick={() => setPage(Home.name)}>Главная</li>
              <li onClick={() => setPage(Calc.name)}>Калькулятор</li>
              <li onClick={() => setPage(Service.name)}>Услуги</li>
              <li onClick={() => setPage(About.name)}>О нас</li>
              <li onClick={() => setPage(Contacts.name)}>Контакты</li>
            </ul>
          </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header