import React from 'react';
import ImageCard from './ImageCard';

const ImageCardList = ({ images }) => {
  return (
    <div>
      {
        images.map((image, i) => {
          return (
            <ImageCard
              key={i}
              id={i}
              title={images[i].title}
              date={images[i].date}
              description={images[i].explanation}
              source={images[i].url}
            />
          );
        })
      }
    </div>
  );
}

export default ImageCardList;