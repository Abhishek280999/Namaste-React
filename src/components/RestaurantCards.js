import { useEffect } from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props)=>{
  // console.log('hi')
    const {resData} = props
    console.log(resData)
    const {cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    } = resData?.data
    // useEffect(()=>{

    // },[props])
  return(
    <div className="res-Card">
    <img className="res-log" alt="res-logo" src={CDN_URL
    + cloudinaryImageId} />
    <h3>{name}</h3>
    <h4>{cuisines.join(', ')}</h4>
    <h4>{avgRating} <i class="fa fa-star" aria-hidden="true"></i></h4>
    <h4> ₹ {costForTwo/100} FOR TWO</h4>
    <h4> {deliveryTime} minutes</h4>
  
  
    </div>
  ) 
  };
  export default RestaurantCards;