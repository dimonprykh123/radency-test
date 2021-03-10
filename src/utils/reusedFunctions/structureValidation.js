export const structureValidation = (obj, structure) => {
    for (let key in obj) {
        if (!Object.keys(structure).includes(key)) {
            return false
        }
    }
    return true
}