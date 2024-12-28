import React from 'react';
import map from './../img/map.png'

const Contacts = () => {
  return (
    <>
        <div className="contacts">
            <div>
                <p><b>Адрес:</b></p>
                <p>г. Москва, ул. Примерная д. 10</p>
                <p></p>
                <p><b>Телефон:</b></p>
                <p>8 (999) 177-17-17</p>
                <p></p>
                <p><b>Электронная почта:</b></p>
                <p>info@architecturecomfort.ru</p>
                <p></p>
                <p><b>Часы работы:</b></p>
                <p>Пн - Пт: 10:00 - 19:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
            </div>
            <div>
                <div className="map">
                    <img src={map} alt=""/>
                </div>
            </div>
        </div>

    </>
  );
}

export default Contacts