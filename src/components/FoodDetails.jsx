import { useEffect, useState } from "react"
import RecipeDetails from "./RecipeDetails"

export default function FoodDetails(props){
    const { foodId } = props
    const [ recipe, setRecipe] = useState({})
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const APIKEY = '068f9bf56c71414cb7d8e5dfd75bd5cc'

    useEffect(()=>{
        const getRecipeDetails = async ()=>{
            try{
                const res = await fetch(`${URL}?apiKey=${APIKEY}`)
                const data = await res.json()
                setRecipe(data)
            }catch{
                
            }
        }
        getRecipeDetails()

    },[foodId])
    return (
        <div>
            {
                Object.keys(recipe).length !== 0 ? <RecipeDetails recipe={recipe}/> : null
            }
        </div>
    )
}