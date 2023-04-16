import resList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterdata(searchText, listofRestaurant) {
  const filterdata = listofRestaurant.filter((listofRestaurant) =>
    listofRestaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  console.log(filterdata);
  return filterdata;
}
function sortList(value, list) {
  if (value == "lowtohigh") {
    return list.sort((a, b) => a.data.costForTwo - b.data.costForTwo);
  } else {
    return list.sort((a, b) => b.data.costForTwo - a.data.costForTwo);
  }
}
const Body = () => {
  const [searchText, setsearchText] = useState();
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filterlistofRestaurant, setfilterlistofRestaurant] = useState([]);
  
  useEffect(() => {
    //API call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0429188&lng=76.3168317&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    //Optional Chaining  -> ?
    let allrestaurants = json?.data?.cards[2]?.data?.data?.cards;
    setlistofRestaurant(allrestaurants);
    setfilterlistofRestaurant(allrestaurants);

  }


  return (listofRestaurant.length == 0) ? <Shimmer/> : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button className="input-btn"
          onClick={() => {
            //need to filter the data
            const data = filterdata(searchText, listofRestaurant);
            //update the state - restaurant
            setfilterlistofRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            // filter logic is
            const filter_resList = filterlistofRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filter_resList);
            setfilterlistofRestaurant(filter_resList);
          }}
        >
          Top Rated Restaurant{" "}
        </button>
      </div>
      <div>
        <select
          onChange={(e) => {
            setSortState(e.target.value);
          }}
        >
          <option value="null">sorting</option>
          <option value="lowtohigh">Price :Low to High</option>
          <option value="hightolow">Price : High to Low</option>
        </select>
      </div>

      <div className="res-Container">
        {filterlistofRestaurant?.length ? filterlistofRestaurant?.map((restaurant) => (
          <RestaurantCards key={restaurant.data.id} resData={restaurant} />
        )) : <div>Data Not Found!!!</div>}
      </div>
    </div>
  );
};
export default Body;
