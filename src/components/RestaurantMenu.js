import { useEffect } from "react";

const RestaurantMenu=()=>
{ 
 useEffect(()=>{
getRestaurantInfo();

  },

 
 
 [])
 async function getRestaurantInfo (){
    const json= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7642332&lng=76.7649497&restaurantId=63036&catalog_qa=undefined&submitAction=ENTER")
    const resData= await json.json();
    console.log("This is it:",resData);


 }

    return(
    <div>
 </div>
)}

export default RestaurantMenu;