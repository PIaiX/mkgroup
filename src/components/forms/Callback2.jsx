import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {SetConnect} from "../../services/order";
import {NotificationContext} from "../../layouts/Notification/Notification";

const Callback2 = () => {
    const [setStatusNotification] = useContext(NotificationContext);
    const {handleSubmit, register, formState:{errors}, getValues, setValue, reset} = useForm()
    const SubmitClick = (data) =>{
        SetConnect(data)
            .then(res=>{if(res){
                reset()
                setStatusNotification('good')
            }})
            .catch(e=>setStatusNotification('bad'))
    }

    return (
        <form onSubmit={handleSubmit(SubmitClick)} className='callback-2'>
            <h2>Не нашли что искали?</h2>
            <p className='mb-4 mb-xl-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
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
    );
};

export default Callback2;