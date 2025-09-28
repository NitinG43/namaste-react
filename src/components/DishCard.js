import React from 'react'
import { RESTAURANT_CARD_IMG_CDN_URL } from '../utils/constants';

const DishCard = ({dish}) => {
  const {name, description, imageId, price, defaultPrice, ratings }= dish.info;
  return (
    <div className='dish-card'>
      <div className='dish-info'>
        <h3 className='dish-name'>{name}</h3>
        {description && <p className='dish-description'>{description}</p>}
        <p className='dish-price'>₹{(price||defaultPrice)/100}/-</p>
        {ratings?.aggregatedRating?.rating && (
          <p className='dis-rating'>
            ⭐{ratings.aggregatedRating.rating}(
              {ratings.aggregatedRating.ratingCountV2}
            )
          </p>
        )}
      </div>

      <div className='dish-image-container'>
        {imageId && (
          <img 
            src={RESTAURANT_CARD_IMG_CDN_URL+imageId}
            alt={name}
            className='dish-image'
          />

        )}
        <button className='add-btn'>ADD +</button>
      </div>

      
    </div>
  )
};

export default DishCard
