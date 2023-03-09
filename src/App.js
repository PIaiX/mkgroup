import React, {useEffect} from 'react';
import AppRouter from './routes/AppRouter';
import {getCategories} from "./services/AdsService";
import {useDispatch} from "react-redux";
import {SetCategories} from './store/reducers/categories'
function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    getCategories().then(res=>res && dispatch(SetCategories(res)))
  }, [])

  return (
    <AppRouter/>
  );
}

export default App;