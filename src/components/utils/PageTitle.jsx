import React from 'react';

const PageTitle = (props) => {
  return (
    <div className={(props.color === 'orange')?'page-title-2':'page-title'}>
      {
        (props.color === 'orange')
        ? <img src="imgs/img2.jpg" alt={props.title} />
        : <img src="imgs/img5.jpg" alt={props.title} />
      }
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