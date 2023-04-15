import resList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";

function filterdata(searchText, listofRestaurant) {
  let UppersearchText =
    searchText.charAt(0).toUpperCase() + searchText.slice(1);
  const filterdata = listofRestaurant.filter((listofRestaurant) =>
    listofRestaurant.data.name.includes(UppersearchText)
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
const Body2 = () => {
  const [searchText, setsearchText] = useState();
  const [listofRestaurant, setlistofRestaurant] = useState(null);
  const [sortState, setSortState] = useState(null);
  console.log(sortState);
  console.log(listofRestaurant);
  useEffect(() => {
    setlistofRestaurant(resList);
  }, []);
  useEffect(() => {
    console.log("I am Calling");
    if (sortState == "lowtohigh") {
      console.log("i am low to high");
      setlistofRestaurant(
        resList.sort((a, b) => a.data.costForTwo - b.data.costForTwo)
      );
    }
    if (sortState == "hightolow") {
      console.log("i am high to low");
      setlistofRestaurant(
        resList.sort((a, b) => b.data.costForTwo - a.data.costForTwo)
      );
    } else {
      setlistofRestaurant(resList);
    }
  }, [sortState]);
  if (!listofRestaurant) {
    return;
  }

  return (
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
        <button
          onClick={() => {
            //need to filter the data
            const data = filterdata(searchText, listofRestaurant);
            //update the state - restaurant
            setlistofRestaurant(data);
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
            const filter_resList = listofRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filter_resList);
            setlistofRestaurant(filter_resList);
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
        {listofRestaurant?.map((restaurant) => (
          <RestaurantCards key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body2;
