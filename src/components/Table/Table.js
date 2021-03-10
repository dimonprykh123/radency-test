import React from "react"
import Item from "../Item/Item";
import styles from "./Table.module.css"
const Table = ({users}) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Age</th>
                <th>Experience</th>
                <th>Yearly income</th>
                <th>Has children</th>
                <th>License states</th>
                <th>Expiration date</th>
                <th>License number</th>
                <th>Duplicate with</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((el,idx)=>{
                    return(
                        <tr key={idx}>
                            <Item el={el} idx={idx}/>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table