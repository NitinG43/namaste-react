import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantList = ()=>{
    const [listOfRestaurants, setListOfRestaurants]= useState([]);


    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch(API_URL);
            const json = await data.json();
            const reses =json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[];
            setListOfRestaurants(reses);
        }
        fetchData();

    },[]);

    




    return listOfRestaurants;

} 


export default useRestaurantList;