import React from 'react';

const Callback2 = () => {
  return (
    <form action="" className='callback-2'>
      <h2>Не нашли что искали?</h2>
      <p className='mb-4 mb-xl-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
      <input type="text" placeholder='Имя' className='mb-3'/>
      <input type="text" placeholder='+7 ___-___-__-__' className='mb-3'/>
      <p className='fs-075'>Нажимая кнопку “Отправить”, вы даете согласие на обработку персональных данных</p>
      <button type='submit' className='btn-2 mt-4 mt-x-5'>Отправить</button>
    </form>
  );
};

export default Callback2;