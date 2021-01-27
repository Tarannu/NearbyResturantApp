import React from 'react';
import "./Restaurant.css";

const Restaurant = (props) => {
    return(
        <div className="Restaurant">
            <div className="NameAndThumbnail">
                <p>{props.restaurant.name}</p>
                { props.restaurant.thumb ? <img src={props.restaurant.thumb} alt={props.restaurant.name}/> : null}
            </div>  
            <div className="RestaurantLocation">
                <p>{props.restaurant.location.address}</p>
                {/* <p>{props.restaurant.location}</p> */}
            </div>
            <p>Rating:&emsp;{props.restaurant.user_rating.aggregate_rating}</p>
        </div>
    )
}

export default Restaurant;

// restaurant_name={restaurant.name}
//         thumbnail={restaurant.thumb}
//         location={restaurant.location}
//         user_rating={restaurant.rating}/>