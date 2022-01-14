import React from 'react';

const ImageCard = ({ title, date, description, source }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='image' src={source} />
      <div>
        <h2>{title}</h2>
        <h5>{date}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;