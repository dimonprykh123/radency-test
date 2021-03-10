import React from "react"
import styles from "./ErrorIndicator.module.css"
const ErrorIndicator = ({error}) =>{
    return(
        <div className={styles.container}>
            {error}
        </div>
    )
}

export default ErrorIndicator