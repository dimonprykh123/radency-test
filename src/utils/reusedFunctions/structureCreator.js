export const structureCreator = (data) =>{
    const objStructure = {}
    for (let i = 0; i < data[0].data.length; i++) {
        objStructure[data[0].data[i].trim().toLowerCase()] = ""
    }
    return objStructure
}