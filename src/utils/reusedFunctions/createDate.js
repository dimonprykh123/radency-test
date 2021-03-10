export const createDate = (date,format) =>{
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = (newDate.getUTCMonth()+1).toString().padStart(2,"0")
    const day = newDate.getUTCMonth().toString().padStart(2,"0")
    if(format === "YYYY:MM:DD")
        return `${year}-${month}-${day}`
    if(format === "MM:DD:YYYY")
        return `${month}-${day}-${year}`
}