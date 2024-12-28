import React, {SetStateAction} from 'react';
import Calc from './Calc'
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import banner1 from './../img/banner-1.webp';
import banner2 from './../img/banner-2.jpg';
import banner3 from './../img/banner-3.jpg';

interface HomeArgs {
  setPage: React.Dispatch<SetStateAction<string>>,
}

const Home = ({setPage}: HomeArgs) => {

    return (
      <>
        <div className="banner">
          <img src={banner1} alt=""/>
          <img src={banner2} alt=""/>
          <img src={banner3} alt=""/>
        </div>

        <div className="section">
          <div className="container">
            <h1 className="text-center">О нас</h1>
            <p>
              Архитектура Комфорта — это надежный партнер в сфере строительства домов, который предлагает полный спектр услуг по проектированию и возведению жилых и коммерческих объектов. Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и навыками в области строительства, архитектуры и дизайна. Мы стремимся к высокому качеству работы и индивидуальному подходу к каждому клиенту, что позволяет нам успешно реализовывать проекты любой сложности.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="text-center">
              <button className="btn" onClick={() => setPage(Calc.name)}>Рассчитать стоимость</button>
            </div>
          </div>
        </div>

        <div className="section bg-grey">
          <div className="container">
            <h2 className="text-center">Отзывы</h2>
            <Reviews/>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <h2 className="text-center">Наши контакты</h2>
            <Contacts/>
          </div>
        </div>
      </>
    );
}

export default Home