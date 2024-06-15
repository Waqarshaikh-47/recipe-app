import { useState } from "react"
import FoodItem from "./FoodItem"

export default function FoodList(props){
    const { foodData, setFoodId } = props
    return (
        <div>
            {foodData.map((food,foodIndex)=>{
                return <FoodItem food={food} setFoodId={setFoodId} key={food.id}/>
            })}
        </div>
    )
}