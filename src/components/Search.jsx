import { useState, useEffect } from "react"
import styles from "./search.module.css"
const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const APIKEY = '068f9bf56c71414cb7d8e5dfd75bd5cc'
export default function Search(props){
    const { foodData, setFoodData } = props
    const [query, setQuery] = useState('pizza')

    useEffect(()=>{
        async function fetchData(){
            try{
                const res = await fetch(`${URL}?query=${query}&apiKey=${APIKEY}`)
                const data = await res.json()
                setFoodData(data.results)
            }catch(error){
                console.log('error',error)
            }
        }
        fetchData()
    },[query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} onChange={(event)=>setQuery(event.target.value)} value={query} type="text" />
        </div>
    )
}