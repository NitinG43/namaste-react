import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
const Body = ()=>{

  //State Variable - super powerful variable
  const[filteredRestaurants, setFilteredRestaurants]= useState([]);
  const [searchText, setSearchText] = useState("");
  const listOfRestaurants = useRestaurantList();
  useEffect(()=>{
    setFilteredRestaurants(listOfRestaurants);
  },[listOfRestaurants])


  // Check if internet is on or not
  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus=== false)return <h1>you're offline 😞. Please turn on the internet🙂</h1>




  // Condifional Rendering
  return listOfRestaurants.length===0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input 
          type="text" 
          className="search-box border border-solid border-black" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
          }} />
          <button 
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={
            ()=>{
              //Filter The restaurents & update the UI
              const filterRestaurants =listOfRestaurants.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filterRestaurants);
            }
          }>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button 
         className="filter-btn flex px-4 py-2 bg-red-100 rounded-lg" 
         onClick={()=>{
          const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4.5);
          setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap bg-red-200 hover:">
         {filteredRestaurants.map((restaurant)=>{
          return <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id }> <RestaurantCard  resData={restaurant} /></Link>
         })}
      </div>
    </div>
  );
}


export default Body;