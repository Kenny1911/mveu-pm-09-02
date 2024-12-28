import React, {useState} from 'react';
import ContactsComponent from "../components/Contacts";
import {api} from "../service/services";

const Contacts = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

  const sendQuestion = async () => {
    try {
      await api.sendContactForm({fullName, email, question})
      alert('Ваш вопрос отправлен');
    } catch (e) {
      alert('Ошибка!');
    }
  }

  return (
      <>
        <div className="section bg-grey">
          <div className="container">
            <h1 className="text-center">Связаться с нами</h1>

            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              sendQuestion()
            }}>
              <div className="form-row">
                <label htmlFor="">ФИО*</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}/>
              </div>

              <div className="form-row">
                <label htmlFor="">Email*</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-row">
                <label htmlFor="">Вопрос*</label>
                <textarea required value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
              </div>
              <div className="form-row">
                <button className="btn">Отправить</button>
              </div>
            </form>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <h2>Наши контакты</h2>

            <ContactsComponent/>
          </div>
        </div>
      </>
  );
}

export default Contacts