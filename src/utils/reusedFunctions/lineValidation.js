export const lineValidation = (needMatch, obj, arr) => {
    let validationCounter = 0
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            if (obj[arr[i]] !== "") {
                validationCounter++
            }
        }
    }
    return validationCounter === needMatch;
}