import { useEffect } from "react";

const RestaurantMenu=()=>
{ 
 useEffect(()=>{
getRestaurantInfo();

  },

 
 
 [])
 async function getRestaurantInfo (){
    const json= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7496577&lng=76.7484436&restaurantId=340853&catalog_qa=undefined&submit")
    const resData= await json.json();
    console.log("This is it:",resData);


 }

    return(
    <div>
 </div>
)}

export default RestaurantMenu;