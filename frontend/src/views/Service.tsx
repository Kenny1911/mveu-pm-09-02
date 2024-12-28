import React from 'react';
import Calc from './../components/Calc'
import ServiceGallery from './../components/ServiceGallery'
import service1 from "./../img/service-1.jpg"
import service2 from "./../img/service-2.jpg"
import service3 from "./../img/service-3.jpg"
import service4 from "./../img/service-4.jpg"

const Service = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="text-center">Наши услуги</h1>

          <div className="service">
            <div className="service__title">Строительство домов под ключ</div>
            <div className="service__img--left">
              <img src={service1} alt=""/>
            </div>
            <div className="service__description">
              <p>Мы предлагаем полный цикл услуг по строительству жилых домов, включая:</p>
              <ul>
                <li><b>Фундамент:</b> Проектирование и возведение различных типов фундаментов (ленточный, плитный,
                  столбчатый) в зависимости от особенностей участка и типа строения.
                </li>
                <li><b>Стены:</b> Строительство стен из различных материалов (кирпич, газобетон, дерево) с учетом
                  тепло-
                  и звукоизоляции.
                </li>
                <li><b>Крыша:</b> Монтаж кровли, включая выбор материалов (металлочерепица, черепица, профнастил) и
                  конструктивных решений (скатная, плоская).
                </li>
                <li><b>ФундОтделкаамент:</b> Внутренняя и внешняя отделка, включая штукатурку, покраску, укладку
                  плитки
                  и другие работы.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-grey">
        <div className="container">
          <div className="service">
            <div className="service__title">Проектирование</div>
            <div className="service__img--right">
              <img src={service2} alt=""/>
            </div>
            <div className="service__description">
              <p>Наша команда профессиональных архитекторов и дизайнеров предлагает услуги по проектированию:</p>
              <ul>
                <li><b>Индивидуальные проекты:</b> Разработка уникальных проектов домов с учетом пожеланий клиента и
                  особенностей участка.
                </li>
                <li><b>Готовые проекты:</b> Предоставление готовых проектов, которые можно адаптировать под ваши
                  нужды.
                </li>
                <li><b>Ландшафтный дизайн:</b> Проектирование благоустройства территории вокруг дома, включая
                  озеленение, дорожки, освещение и другие элементы.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="service">
            <div className="service__title">Отделка и ремонт</div>
            <div className="service__img--left">
              <img src={service3} alt=""/>
            </div>
            <div className="service__description">
              <p>Мы предлагаем услуги по отделке и ремонту как новых, так и существующих объектов:</p>
              <ul>
                <li><b>Внутренняя отделка:</b> Штукатурка, покраска, укладка плитки, установка потолков и
                  перегородок, а также монтаж сантехники и электрики.
                </li>
                <li><b>Внешняя отделка:</b> Фасадные работы, включая утепление, облицовку, покраску и другие виды
                  отделки.
                </li>
                <li><b>Капитальный и косметический ремонт:</b> Полный спектр услуг по ремонту, включая замену
                  коммуникаций, перепланировку и обновление интерьеров.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-grey">
        <div className="container">
          <div className="service">
            <div className="service__title">Консультации и поддержка</div>
            <div className="service__img--right">
              <img src={service4} alt=""/>
            </div>
            <div className="service__description">
              <p>Мы предоставляем профессиональные консультации по всем вопросам, связанным со строительством и
                проектированием:</p>
              <ul>
                <li><b>Оценка стоимости:</b> Помощь в расчете стоимости строительства и отделки, а также составление
                  сметы.
                </li>
                <li><b>Выбор материалов:</b> Консультации по выбору строительных и отделочных материалов, их
                  характеристикам и стоимости.
                </li>
                <li><b>Сопровождение проекта:</b> Поддержка на всех этапах строительства, включая контроль качества
                  работ и соблюдение сроков.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="text-center">Рассчитать стоимость</h2>
          <p className="text-center">Мы разработали удобный онлайн-калькулятор, который позволяет вам самостоятельно рассчитать стоимость
            строительства вашего дома, исходя из выбранных параметров и опций</p>
          <Calc/>
        </div>
      </div>

      <div className="section bg-grey">
        <div className="container">
          <h2 className="text-center">Наши работы</h2>
          <ServiceGallery/>
        </div>
      </div>

    </>
  );
}

export default Service