export const sizeIndicator = (data) =>{
    let size = data.length
    if (data[data.length - 1].data.length === 1) {
        size = data.length - 1
    }
    return size
}