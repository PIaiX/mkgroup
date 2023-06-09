import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircle } from "react-icons/io5";
import {useForm} from "react-hook-form";
import {SetConnect} from "../../services/order";
import {NotificationContext} from "../../layouts/Notification/Notification";

const Callback3 = (props) => {
  const [setStatusNotification] = useContext(NotificationContext);
  const [showClbk3, setShowClbk3] = useState(false);

  const handleCloseClbk3 = () => setShowClbk3(false);
  const handleShowClbk3 = () => setShowClbk3(true);

  const {handleSubmit, register, formState:{errors}, getValues, setValue, reset} = useForm()
  const SubmitClick = (data) =>{
    SetConnect(data)
        .then(res=>{if(res){
          setShowClbk3(false)
          setStatusNotification('good')
          reset()
        }})
        .catch(e=>setStatusNotification('bad'))
  }

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
          <form onSubmit={handleSubmit(SubmitClick)} className='callback-2'>
            <h2 className='pe-5'>Оставьте заявку на консультацию</h2>
            <p className='mb-4 mb-xl-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
            <input
                {...register('lastName', {required:true, minLength:{value:2}})}
                style={errors?.lastName?{border:'2px solid red'}:null}
                type="text" placeholder='Имя' className='mb-3'
            />
            <input
                type="text" placeholder='+7 ___-___-__-__' className='mb-3'
                onFocus={() => {
                  if (!getValues('phone')) setValue('phone', '+7')
                }}
                style={errors?.phone && {border: '2px solid red'}}
                {...register("phone", {
                  required: true,
                  minLength:{value:12},
                  onChange: ({target: {value}}) => setValue('phone', `+7${value?.slice(2, 12)}`)
                })}
            />
            <p className='fs-075'>Нажимая кнопку “Отправить”, вы даете согласие на обработку персональных данных</p>
            <button type='submit' className='btn-2 mt-4 mt-x-5'>Отправить</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Callback3;