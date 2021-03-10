import React from "react"
import styles from "./Item.module.css"
import {
    ageValidator,
    emailValidator, experienceValidator, expirationDateValidator,
    hasChildrenValidator, licenseNumberValidator,
    licenseStatesValidator, phoneValidator,
    yearlyIncomeValidator
} from "../../utils/validation";

const Item = ({el, idx}) => {

    const validPhone = phoneValidator(el["phone"])
    const validEmail = emailValidator(el["email"])
    const validAge = ageValidator(el["age"])
    const validExperience = experienceValidator(el["experience"],el["age"])
    const validYI = yearlyIncomeValidator(el["yearly income"])
    const validHC = hasChildrenValidator(el["has children"])
    const validLS = licenseStatesValidator(el["license states"])
    const validED = expirationDateValidator(el["expiration date"])
    const validLN = licenseNumberValidator(el["license number"])

    return (
        <>
            <td>{idx + 1}</td>
            {el.duplicateLine !== "full name" && <td>{el["full name"]}</td> || <td className={styles.mistake}>{el["full name"]}</td>}
            {el.duplicateLine !== "phone" && validPhone && <td>{el["phone"]}</td> ||<td className={styles.mistake}>{el["phone"]}</td>}
            {el.duplicateLine !== "email" && validEmail && <td>{el["email"]}</td> || <td className={styles.mistake}>{el["email"]}</td> }
            {validAge && <td>{el["age"]}</td> || <td className={styles.mistake}>{el["age"]}</td>}
            {validExperience && <td>{el["experience"]}</td> || <td className={styles.mistake}>{el["experience"]}</td>}
            {validYI.status && <td>{validYI.value}</td> || <td className={styles.mistake}>{validYI.value}</td>}
            {validHC.status && <td>{validHC.value}</td> || <td className={styles.mistake}>{validHC.value}</td>}
            {validLS.status && <td>{validLS.value}</td> || <td className={styles.mistake}>{validLS.value}</td>}
            {validED.status && <td>{validED.value}</td> || <td className={styles.mistake}>{validED.value}</td>}
            {validLN && <td>{el["license number"]}</td> || <td className={styles.mistake}>{el["license number"]}</td>}
            <td>{el["duplicateWith"]}</td>
        </>
    )
}

export default Item