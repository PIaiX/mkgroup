import React from 'react';

const Callback1 = () => {
  return (
    <form action="" className='callback mb-5'>
      <h2>Не нашли что искали?</h2>
      <p className='mb-4 mb-md-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
      <div className="d-sm-flex mb-4">
        <input type="text" placeholder='Имя'/>
        <input type="text" placeholder='Номер телефона'/>
        <button type='submit' className='btn-2'>Отправить</button>
      </div>
      <p className="fs-07">Нажимая кнопку “Отправить”, вы даете согласие на обработку персональных данных</p>
    </form>
  );
};

export default Callback1;