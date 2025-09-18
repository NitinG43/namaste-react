import { RESTAURANT_CARD_IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData})=>{
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,sla
  } = resData?.info;
  return <div className="res-card">
<img
  className="res-logo"
  src={RESTAURANT_CARD_IMG_CDN_URL+cloudinaryImageId}
  alt="res-logo"
/>
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>Ratings: {avgRating}</h4>
    <h4>🚚 : {sla.slaString}</h4>
    
  </div>
}

export default RestaurantCard;