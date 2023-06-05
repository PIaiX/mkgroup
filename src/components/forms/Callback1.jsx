import React from 'react';
import {useForm} from "react-hook-form";
import {SetConnect} from "../../services/order";

const Callback1 = () => {

    const {handleSubmit, register, formState:{errors}, getValues, setValue} = useForm()
    const SubmitClick = (data) =>{
        SetConnect(data).then(res=>{if(res){
            setValue('lastName', '')
            setValue('phone', '')
        }})
    }

    return (
        <form onSubmit={handleSubmit(SubmitClick)} className={'callback mb-5'}>
            <h2>Не нашли что искали?</h2>
            <p className='mb-4 mb-md-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
            <div className="d-sm-flex mb-4">
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
                <button type='submit' className='btn-2'>Отправить</button>
            </div>
            <p className="fs-07">Нажимая кнопку “Отправить”, вы даете согласие на обработку персональных данных</p>
        </form>
    );
};

export default Callback1;