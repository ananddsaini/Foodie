import { useState, useEffect } from "react";
import "../components/home.css";
import Item from "./Item";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "../utils/constants";

import { filterSearch } from "../utils/helper";
 import useRestaurants from "../utils/useRestraunts";



export default function Home() {

    const [SearchInput, setSearchInput] = useState("");
    const [Restaurant, setRestaurant] = useState();

    const RestaurantListFromAPI =useRestaurants();
    
    console.log(RestaurantListFromAPI);

    
 
    return  Restaurant?.length===0?(<Shimmer />) 
    
    : (
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
                    setRestaurant(filteredData2); }}> 
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