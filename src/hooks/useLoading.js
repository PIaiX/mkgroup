import React, {useEffect, useState} from 'react';

const useLoading = ([func]) => {
    const [items, setItems] = useState('loading')

    useEffect(()=>{
        setItems('loading')
        func()
            .then(res=>{if(res)setItems(res)})
            .catch(e=>setItems(null))
    }, [])

    return [items]
};

export default useLoading;