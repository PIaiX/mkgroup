import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Quiz = () => {
  const [page, setPage] = useState(0);
  const pagesCount = 7;

  return (
    <form className='quiz'>
      {
        (page === 0) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <h2 className='mb-5'>Заголовок для квиза</h2>
                <p className='mb-5'>Ответьте на Х вопросов и получите скидку на монтаж металлоконструкций </p>
                <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Начать</button>
              </div>
              <p className='fs-075'>*Примечание об акции  периоде ее действия</p>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
      {
        (page > 0) &&
        <Row className='gx-5'>
          <Col md={6}>
            <h2>Текст {page} вопроса для квиза?</h2>
          </Col>
          <Col md={6}>
            <div>Вопрос {page} из {pagesCount}</div>
            <div className='markers'>
              {
                [1, 2, 3, 4, 5, 6, 7].map( item => {
                  return <span key={item} className={(item === page)?'active':''}></span>
                })
              }
            </div>
          </Col>
        </Row>
      }
      {
        (page === 1) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <ul>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>1. Вариант ответа номер один</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>2. Вариант ответа номер два</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>3. Вариант ответа номер три</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>4. Другое</span>
                    </label>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Далее</button>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
      {
        (page === 2) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <ul>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>1. Вариант ответа номер один</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>2. Вариант ответа номер два</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>3. Вариант ответа номер три</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>4. Другое</span>
                    </label>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Далее</button>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
      {
        (page === 3) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <ul>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>1. Вариант ответа номер один</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>2. Вариант ответа номер два</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>3. Вариант ответа номер три</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>4. Другое</span>
                    </label>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Далее</button>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
      {
        (page === 4) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <ul>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>1. Вариант ответа номер один</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>2. Вариант ответа номер два</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>3. Вариант ответа номер три</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>4. Другое</span>
                    </label>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Далее</button>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
      {
        (page === 5) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <ul>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>1. Вариант ответа номер один</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>2. Вариант ответа номер два</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>3. Вариант ответа номер три</span>
                    </label>
                  </li>
                  <li>
                    <label className='pill'>
                      <input type="radio" name={'radio'+page}/>
                      <span>4. Другое</span>
                    </label>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Далее</button>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
      {
        (page === 6) &&
        <Row md={4} className='gx-5'>
          <Col>
            <label className='figure'>
              <input type="radio" name={'radio'+page} />
              <div className='figure-img' style={{'--img': "url('imgs/img4.jpg')"}}></div>
              <h5 className='text'>Вариант ответа</h5>
            </label>
          </Col>
          <Col>
            <label className='figure'>
              <input type="radio" name={'radio'+page} />
              <div className='figure-img' style={{'--img': "url('imgs/img4.jpg')"}}></div>
              <h5 className='text'>Вариант ответа</h5>
            </label>
          </Col>
          <Col>
            <label className='figure'>
              <input type="radio" name={'radio'+page} />
              <div className='figure-img' style={{'--img': "url('imgs/img4.jpg')"}}></div>
              <h5 className='text'>Вариант ответа</h5>
            </label>
          </Col>
          <Col>
            <label className='figure'>
              <input type="radio" name={'radio'+page} />
              <div className='figure-img' style={{'--img': "url('imgs/img4.jpg')"}}></div>
              <h5 className='text'>Вариант ответа</h5>
            </label>
          </Col>
          <Col xs={12}>
            <button type='button' className='btn-2' onClick={()=>setPage(page+1)}>Далее</button>
          </Col>
        </Row>
      }
      {
        (page === 7) &&
        <Row className='gx-5'>
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <input type="text" placeholder='Имя' className='mb-3'/>
                <input type="tel" placeholder='Телефон' className='mb-3'/>
                <textarea rows="4" placeholder='Комментарий'></textarea>
              </div>
              <button type='submit' className='btn-2'>Завершить</button>
            </div>
          </Col>
          <Col md={6}>
            <img src="imgs/img4.jpg" alt="металлоконструкции" className='img'/>
          </Col>
        </Row>
      }
    </form>
  );
};

export default Quiz;