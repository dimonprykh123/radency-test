import React from "react"
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Table from "../Table/Table";
import styles from "./Main.module.css"
const Main = ({error, users}) => {

    return (
        <div className={styles.container}>
            {error && <ErrorIndicator error={error}/>}
            {users.length === 0 && !error && <div className={styles.txt}>None file uploaded</div>}
            {users.length > 0 && !error && <Table users={users}/>}
        </div>
    )

}

export default Main