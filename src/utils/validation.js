import {createDate} from "./reusedFunctions/createDate";

export const emailValidator = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    return reg.test(email)
}


export const phoneValidator = (phone) => {
    return phone.length === 12
}


export const ageValidator = (age) => {
    return isFinite(age) && age >= 21
}


export const experienceValidator = (experience, age) => {
    return experience >= 0 && experience < age
}


export const yearlyIncomeValidator = (yearInc) => {
    if (isFinite(yearInc) && yearInc !== "") {
        const num = (Math.round(yearInc * 100) / 100).toFixed(2)
        return {status: true, value: num}
    }
    return {status: false, value: yearInc}
}


export const hasChildrenValidator = (hasChildren) => {
    if (hasChildren.toLowerCase() === "true" || hasChildren.toLowerCase() === "false") {
        return {status: true, value: hasChildren.toUpperCase()}
    }
    if (hasChildren === "") {
        return {status: true, value: "FALSE"}
    }
    return {status: false, value: hasChildren}
}


export const licenseStatesValidator = (licenseState) => {
    if (licenseState.includes(".") || licenseState.includes(",") || licenseState.trim().includes(" ")) {
        return {status: false, value: licenseState}
    }
    const mass = licenseState.split("|")
    for (let i = 0; i < mass.length; i++) {
        if (mass[i].length > 2) {
            mass[i] = mass[i].slice(0, 2).toUpperCase().trim()
        }
    }
    const res = mass.join(", ")
    return {status: true, value: res}
}


export const expirationDateValidator = (expirationDate) => {
    const today = new Date().getTime()
    const mdyReg = /\d{2}-\d{2}-\d{4}/
    const ymdReg = /\d{4}-\d{2}-\d{2}/
    if (ymdReg.test(expirationDate)) {
        const nums = expirationDate.split("-")
        const year = parseInt(nums[0], 10)
        const month = parseInt(nums[1], 10) - 1
        const day = parseInt(nums[2], 10)
        const date = new Date(year, month, day).getTime()
        if (today < date && month <= 12 && month > 0 && day <= 31 && day > 0) {
            const newDate = createDate(date, "YYYY:MM:DD")
            return {status: true, value: newDate}
        }else{
            return {status:false,value:expirationDate}
        }

    } else if (mdyReg.test(expirationDate)) {
        const nums = expirationDate.split("-")
        const year = parseInt(nums[2], 10)
        const month = parseInt(nums[0], 10) - 1
        const day = parseInt(nums[1], 10)
        const date = new Date(year, month, day).getTime()

        if (today < date && month <= 12 && month > 0 && day <= 31 && day > 0) {
            const newDate = createDate(date, "MM:DD:YYYY")
            return {status: true, value: newDate}
        }else{
            return {status:false,value:expirationDate}
        }

    } else {
        return {status: false, value: expirationDate}
    }
}


export const licenseNumberValidator = (licenseNumber) => {
    const reg = /\w{6}/
    return reg.test(licenseNumber) && licenseNumber.length === 6
}