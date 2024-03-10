import { useState, useEffect } from "react";
import "../components/home.css";
import Item from "./Item";
import Shimmer from "./Shimmer";

import { filterSearch } from "../utils/helper";



export default function Home() {

    const [SearchInput, setSearchInput] = useState("");
    const [Restaurant, setRestaurant] = useState();

    // phle function ke andar ek async fucntion bna kr api call kr rhe hain
    //function ke andar setRestaurant(state variable) -
    //ka use krke data ko restaurant ke andar rkh rhe hain 
    // using useEffect hm us function ko call kr rhe hain
    async function getDataFromAPI() {

        
        const menuData =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7642332&lng=76.7649497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const MainData = await menuData.json();
        const restaurants_Info = MainData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurant(restaurants_Info);
        console.log("this is menudata: ",restaurants_Info)
       
       
        
     //console.log("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+imageId);

    }
    useEffect(function () {
        getDataFromAPI();
        console.log("use effect bolteee");
    }, [])
    return Restaurant?.length === 0 ? (<Shimmer />) : (
        <div className="home">
            <input
                className="search_input"
                value={SearchInput}
                type="text"
                onChange={ (e)=> {setSearchInput(e.target.value);
                    console.log("This is value of SearchInput", SearchInput);
            }}>
            </input>
            <button
                className="search_btn"
                onClick={function () {
                    const filteredData2 = filterSearch(SearchInput, Restaurant);
                    setRestaurant(filteredData2);}}>
            Search</button>

            <div className="item_list">
                {Restaurant?.map(function (List) {
                    return (<Item
                        image={List.info?.cloudinaryImageId}
                        name={List.info?.name}
                        avgRating={List.info?.avgRatingString}
                        deliveryTime={List.info?.sla?.slaString}
                        cusines={List.info?.cuisines.map(function (cusine_value) {
                            return (cusine_value + ", ");
                        })}
                        location={List.info?.areaName}

                    />)

                })}
            </div>





        </div>

    )



}