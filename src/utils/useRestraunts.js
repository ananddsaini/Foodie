import {useState,useEffect} from "react";
import { RESTAURANT_LIST } from "./constants";


const useRestraunts=()=>{
    const [restaurantList,setRestaurantList]=useState();


    useEffect(function () {
        getRestaurantList();
        
        console.log("use effect bolteee");
    }, [])   

const getRestaurantList = async () =>{

        
    const restaurantListData= await fetch(RESTAURANT_LIST) ;
    const MainData = await restaurantListData.json();
    const restaurantsListfromAPI = MainData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurantsListfromAPI);
    
}


return restaurantList;


}

export default useRestraunts;

// phle function ke andar ek async fucntion bna kr api call kr rhe hain
//function ke andar setRestaurant(state variable) -
//ka use krke data ko restaurant ke andar rkh rhe hain 
// using useEffect hm us function ko call kr rhe hain

 