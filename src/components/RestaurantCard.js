import { RESTAURANT_CARD_IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData})=>{
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,sla
  } = resData?.info;
  return <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
<img
  className="res-logo rounded-lg"
  src={RESTAURANT_CARD_IMG_CDN_URL+cloudinaryImageId}
  alt="res-logo"
/>
    <h3 className="font-bold py-4 text-lg">{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>Ratings: {avgRating}</h4>
    <h4>🚚 : {sla.slaString}</h4>
    
  </div>
}

export default RestaurantCard;