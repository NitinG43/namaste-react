import React from 'react';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import DishCard from './dishCard';

function RestaurantMenu() {
    const [resInfo, setResInfo]= useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(
            MENU_API
            +resId
            +"&catalog_qa=undefined&submitAction=ENTER"

        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo===null)return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
    } = resInfo?.cards[2]?.card?.card?.info || [];

    const {
    itemCards
    } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| [];

    console.log(itemCards);
  return(
    <div className='menu'>
        <h1 className='menu-title'>{name}</h1>
        <p className='menu-subtitle'>{cuisines.join(", ")+"- "+costForTwoMessage}</p>

        <h2 className='menu-heading'>Menu</h2>
        <div className='dish-list'>
            {itemCards.map(item =>(
                <DishCard key={item.card.info.id} dish={item.card} />
            ))}
        </div>
        
      
    </div>
  );
}

export default RestaurantMenu;






{/* <ul>
            {
                itemCards?.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - RS.{(item.card.info.price || item.card.info.defaultPrice) / 100
}/-
                </li>)
            }
        </ul> */}
