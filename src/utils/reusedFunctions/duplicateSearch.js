export const duplicateSearch = (data) => {
    const newData = []

    for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < data.length; j++) {
            if (i !== j) {
                if (data[i]["full name"].toLowerCase() === data[j]["full name"].toLowerCase()) {
                    data[i].duplicateWith = j + 1
                    data[i].duplicateLine = "full name"
                    break
                }
                if (data[i]["phone"].toLowerCase() === data[j]["phone"].toLowerCase()) {
                    data[i].duplicateWith = j + 1
                    data[i].duplicateLine = "phone"
                    break
                }
                if (data[i]["email"].toLowerCase() === data[j]["email"].toLowerCase()) {
                    data[i].duplicateWith = j + 1
                    data[i].duplicateLine = "email"
                    break
                }
            }
        }
        newData.push(data[i])
    }

    return newData
}