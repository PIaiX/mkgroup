import React from 'react';

const PageTitle = (props) => {
  return (
    <div className='page-title'>
      <img src="imgs/img5.jpg" alt={props.title} />
      <div className="text">
        <h1>{props.title}</h1>
        {
          (props.text) &&
          <p>{props.text}</p>
        }
      </div>
    </div>
  );
};

export default PageTitle;