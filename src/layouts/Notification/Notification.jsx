import React, {useEffect, useState} from 'react';
import './style.css'

export const NotificationContext = React.createContext(null);

const Notification = ({children}) => {
    const [notification, setNotification] = useState()
    const [statusNotification, setStatusNotification] = useState(null)
    useEffect(()=>{
        if (notification?.isShow)
            setTimeout(()=>setNotification({}), 2000)
        else
            setStatusNotification(null)
    }, [notification])

    useEffect(()=>{
        if(statusNotification){
            if(statusNotification=='good')
                setNotification({isShow:true, typeAlert:'good', message:'Успешно отправлено'})
            if(statusNotification=='bad')
                setNotification({isShow:true, typeAlert:'bad', message:'Ошибка соединения'})
        }
    }, [statusNotification])

    return (
        <>
            <div className={`${notification?.isShow ? 'alert' : ''} ${notification?.typeAlert ? notification?.typeAlert : ''}`}>
                <div>
                    {notification?.message}
                </div>
            </div>
            <NotificationContext.Provider value={[setStatusNotification]}>
                {children}
            </NotificationContext.Provider>
        </>
    )
};

export default Notification;