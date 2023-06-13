import React, {useReducer, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useLoading from "../hooks/useLoading";
import {GetAnswers, GetQuiz} from "../services/quiz";
import Loader from "./Loader";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {useForm} from "react-hook-form";

const Quiz = () => {
    const [page, setPage] = useState(0);
    const [answers, setAnswers] = useState()
    const [quiz] = useLoading([GetQuiz])
    const [onSelect, setOnSelect] = useState()
    const pagesCount = answers?.length

    const [questionIds, setQuestionIds] = useReducer((state, newState)=>([...state, newState]), [])
    const [answerIds, setAnswerIds] = useReducer((state, newState)=>([...state, newState]), [])
    const {handleSubmit, register} = useForm()

    const getAnswers = () => {
        GetAnswers().then(res => {
            if (res) setAnswers(res)
        })
    }

    const OnSubmit = (data) =>{
        console.log(data)
    }

    console.log(questionIds)
    console.log(answerIds)
    const OnNext = () =>{
        if(onSelect){
            setPage(page + 1)
            setAnswerIds(onSelect)
            setQuestionIds(answers[page]?.id)
            setOnSelect(undefined)
        }
    }


    if (quiz == 'loading')
        return <Loader/>
    return (
        <form className='quiz' onSubmit={handleSubmit(OnSubmit)}>
            {
                !answers ?
                    <Row className='gx-3 gx-sm-4 gx-lg-5'>
                        <Col xs={8} md={6}>
                            <div className="h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h2 className='mb-3 mb-sm-4 mb-lg-5'>{quiz?.title}</h2>
                                    <div className='mb-3 mb-sm-4 mb-lg-5'
                                         dangerouslySetInnerHTML={{__html: quiz?.description}}/>
                                    <button type='button' className='btn-2' onClick={getAnswers}>
                                        Начать
                                    </button>
                                </div>
                                <p className='fs-075'>{quiz?.subtitle}</p>
                            </div>
                        </Col>
                        <Col xs={4} md={6}>
                            <img src={checkPhotoPath(quiz?.image)} alt={quiz?.title} className='img'/>
                        </Col>
                    </Row>
                    : <>
                        <Row className='gx-3 gx-sm-4 gx-lg-5'>
                            <Col xs={8} md={6}>
                                <h2>{answers[page]?.title}</h2>
                            </Col>
                            <Col xs={4} md={6}>
                                <div><span className='d-none d-sm-inline'>Вопрос </span>{page + 1} из {pagesCount + 1}
                                </div>
                                <div className='markers'>
                                    {
                                        [...answers, {}]?.map((item, index) => {
                                            return <span key={index} className={(index === page) ? 'active' : ''}></span>
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                        {page != answers?.length ?

                            <Row className='gx-3 gx-sm-4 gx-lg-5'>
                                {answers[page]?.answers[0]?.image ?
                                    <>{answers[page]?.answers?.map((element, index)=>
                                        <Col key={index}>
                                            <label className='figure' onClick={()=>setOnSelect(element?.id)}>
                                                <input type="radio" name={'radio' + page}/>
                                                <div className='figure-img'
                                                     style={{backgroundImage: `url('${checkPhotoPath(element?.image)}')`}}></div>
                                                <h5 className='text'>{element?.text}</h5>
                                            </label>
                                        </Col>

                                    )}
                                        <Col xs={12}>
                                            <button type='button' className='btn-2 mt-3'
                                                    onClick={OnNext}>Далее
                                            </button>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col xs={8} md={6}>
                                            <div className="h-100 d-flex flex-column justify-content-between">
                                                <div>
                                                    <ul>
                                                        {
                                                            answers[page]?.answers?.map((element, index) =>
                                                                <li key={index}>
                                                                    <label className='pill' onClick={()=>setOnSelect(element?.id)}>
                                                                        <input type="radio" name={'radio' + page}/>
                                                                        <span>{index + 1}. {element.text}</span>
                                                                    </label>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                <button type='button' className='btn-2 mt-3'
                                                        onClick={OnNext}>Далее
                                                </button>
                                            </div>
                                        </Col>
                                        <Col xs={4} md={6}>
                                            <img src={checkPhotoPath(answers[page]?.image)} className='img'/>
                                        </Col>
                                    </>
                                }
                            </Row>
                            :
                            <Row className='gx-3 gx-sm-4 gx-lg-5'>
                                <Col xs={8} md={6}>
                                    <div className="h-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <input type="text" placeholder='Имя' className='mb-3'/>
                                            <input type="tel" placeholder='Телефон' className='mb-3'/>
                                            <textarea rows="4" placeholder='Комментарий'></textarea>
                                        </div>
                                        <button type='submit' className='btn-2 mt-3'>Завершить</button>
                                    </div>
                                </Col>
                                <Col xs={4} md={6}>
                                    <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
                                </Col>
                            </Row>
                        }
                    </>}
        </form>
    );
};

export default Quiz;