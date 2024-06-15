import styles from "./fooditem.module.css"

export default function FoodItem(props){
    const { food, setFoodId } = props
    return (
        <div className={styles.itemContainer}>
            <img src={food.image}  />
           <div className={styles.itemContent}>
           <p className={styles.itemName}>{food.title}</p>
           </div>
           <div className={styles.buttonContainer}>
            <button className={styles.itemButton} onClick={()=>setFoodId(food.id)}>View Recipe</button>
           </div>
        </div>
    )
}