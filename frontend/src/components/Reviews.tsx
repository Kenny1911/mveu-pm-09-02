import React, {useState} from 'react';

interface Review {
  name: string
  text: string
}

const reviews: Array<Review> = [
  {
    name: "Анна и Сергей Петровы",
    text: "Мы обратились в Архитектура Комфорта для строительства нашего первого дома, и остались в полном восторге! С самого начала команда проявила высокий уровень профессионализма и внимательности к нашим пожеланиям. Проект был разработан быстро и с учетом всех наших требований. Строительство прошло в срок, а качество работ превзошло наши ожидания. Теперь у нас есть уютный дом, в котором мы счастливо живем. Рекомендуем всем!",
  },
  {
    name: "Игорь Сидоров",
    text: "Хочу выразить благодарность Архитектура Комфорта за отличную работу! Я долго искал надежного подрядчика для строительства дачи, и, наконец, нашел. Команда профессионалов помогла мне на каждом этапе — от проектирования до отделки. Особенно понравился калькулятор стоимости, который позволил заранее понять, какие расходы нас ожидают. Все было сделано качественно и в срок. Обязательно буду рекомендовать вас своим друзьям!",
  },
  {
    name: "Елена Кузнецова",
    text: "С Архитектура Комфорта мы строили дом для нашей семьи. В целом, мы довольны результатом. Работы были выполнены качественно, и команда всегда была на связи, что очень важно. Единственное, что хотелось бы улучшить — это скорость выполнения некоторых этапов. Но в целом, мы получили именно тот дом, о котором мечтали. Спасибо за вашу работу!",
  },
]

const Reviews = () => {
  const [activeReview, setActiveReview] = useState<number>(0);

  const nextReview = () => {
    let index = activeReview + 1
    if (index >= reviews.length) {
      index = 0
    }

    setActiveReview(index)
  }

  const prevReview = () => {
    let index = activeReview -1
    if (index < 0) {
      index = reviews.length - 1
    }

    setActiveReview(index)
  }

  return (
    <div className="reviews">
      {(() => {
        return (
          <div className="review">
            <div><h4>{reviews[activeReview].name}</h4></div>
            <div>{reviews[activeReview].text}</div>
          </div>
        );
      })()}

      <div className="reviews__btns text-center">
        <button onClick={prevReview}>Предыдущий</button>
        <button onClick={nextReview}>Следующий</button>
      </div>
    </div>
  );
}

export default Reviews