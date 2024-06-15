import styles from "./innercontainer.module.css"

export default function Container({ children }){
    return (
        <div className={styles.innerContainer}>
            {children}
        </div>
    )
}