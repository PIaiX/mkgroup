import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircle } from "react-icons/io5";

const ImgModal = (props) => {
  const [imgModalShow, setImgModalShow] = useState(false);

  return (
    <>
      <img 
        src={props.url} 
        alt={props.title} 
        className={props.className} 
        onClick={() => setImgModalShow(true)}
      />
      <Modal
        className='img-modal'
        size="xl"
        show={imgModalShow}
        onHide={() => setImgModalShow(false)}
      >
        <Modal.Body>
          <button type='button' className='close' onClick={() => setImgModalShow(false)}>
            <IoCloseCircle/>
          </button>
          <img 
            src={props.url} 
            alt={props.title} 
            className={'img-fluid'} 
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImgModal;