import resList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";
import {useState} from "react";


const Body = ()=>{
  // local state variables - super powerful variables

  
  const [listofRestaurant  , setlistofRestaurant ] = useState(resList)

  //normal state variables
  //  let resList = [];
  // 
    return(
      <div className="body">
      <div className="search">
      <input type="text"/>
      <input type="submit"/>
      
      </div>
      <div className="filter">
      <button type="button" className="filter-btn" 
      onClick={()=>{
        // filter logic is
        const filter_resList =  listofRestaurant.filter((res) =>
           res.data.avgRating > 4
        )
        console.log(filter_resList) 
        setlistofRestaurant(filter_resList)
     
        }
        }>Top Rated Restaurant </button>
      
      
      </div>
      <div className="res-Container">
      {
        listofRestaurant.map((restaurant) => (
        <RestaurantCards key={restaurant.data.id} resData={restaurant} /> 
        )) }
      </div>
      </div>
    )
  };
  export default Body;