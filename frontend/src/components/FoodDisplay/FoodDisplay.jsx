import React, { useContext } from "react";
import "./FoodDisplay.css"
import { food_list } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/CreateContext";
import FoodItem from "../FoodItem/FoodItem";



function FoodDisplay(){
    const {food_list} = useContext(StoreContext)
    return(
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index)=>{
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
