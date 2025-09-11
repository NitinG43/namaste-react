import RestaurantCard from "./RestaurantCard";
import RESTAURANT_LIST from "../utils/mockData";
import { useState } from "react";
const Body = ()=>{

  //State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(  
                  RESTAURANT_LIST
                );
  return (
    <div className="body">
      <div className="filter">
        <button 
         className="filter-btn" 
         onClick={()=>{
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4);
          setListOfRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
         {listOfRestaurants.map((restaurant)=>{
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
         })}
      </div>
    </div>
  );
}


export default Body;