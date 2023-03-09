import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircle } from "react-icons/io5";

const Callback3 = (props) => {
  const [showClbk3, setShowClbk3] = useState(false);

  const handleCloseClbk3 = () => setShowClbk3(false);
  const handleShowClbk3 = () => setShowClbk3(true);

  return (
    <>
      <button type='button' className={props.btnClassName} onClick={handleShowClbk3}>
        {props.btnText}
      </button>

      <Modal show={showClbk3} onHide={handleCloseClbk3}>
        <Modal.Body>
          <button type='button' className='close' onClick={handleCloseClbk3}>
            <IoCloseCircle/>
          </button>
          <form action="" className='callback-2'>
            <h2 className='pe-5'>Оставьте заявку на консультацию</h2>
            <p className='mb-4 mb-xl-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
            <input type="text" placeholder='Имя' className='mb-3'/>
            <input type="text" placeholder='+7 ___-___-__-__' className='mb-3'/>
            <p className='fs-075'>Нажимая кнопку “Отправить”, вы даете согласие на обработку персональных данных</p>
            <button type='submit' className='btn-2 mt-4 mt-x-5'>Отправить</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Callback3;