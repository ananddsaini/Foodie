import "../components/item.css";
import { IMAGE_CDN_URL } from "../utils/constants";
export default function Item({name,image,deliveryTime,avgRating,cusines,location}) {
    

    return (<div className="item">
        <img
            src={IMAGE_CDN_URL
                + image}
            alt="img not found" />
<div className="RestaurantDescription">
        <h4> {name} </h4>
        <span>{avgRating}•</span> <span>{deliveryTime} </span>
        <p>{cusines} </p>
        <h4>{location} </h4>
       
        </div>    



    </div>



    )



}