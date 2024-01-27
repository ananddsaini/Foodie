import "../components/item.css";
export default function Item({name,image,deliveryTime,avgRating,cusines,location}) {
    

    return (<div className="item">
        <img
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
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