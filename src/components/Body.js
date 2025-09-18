import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer"
const Body = ()=>{

  //State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurants, setFilteredRestaurants]= useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data = await fetch(
      API_URL
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    const reses =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
    setListOfRestaurants(reses);
    setFilteredRestaurants(reses);
  };
  // Condifional Rendering
  return listOfRestaurants.length===0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
          }} />
          <button onClick={
            ()=>{
              //Filter The restaurents & update the UI
              const filterRestaurants =listOfRestaurants.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filterRestaurants);
            }
          }>Search</button>
        </div>
        <button 
         className="filter-btn" 
         onClick={()=>{
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4.5);
          setListOfRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
         {filteredRestaurants.map((restaurant)=>{
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
         })}
      </div>
    </div>
  );
}


export default Body;