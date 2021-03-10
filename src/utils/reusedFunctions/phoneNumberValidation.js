export const phoneNumberValidation = (data) => {
    const newData = []

    for (let i = 0; i < data.length; i++) {
        if (data[i].phone.length < 12) {
            if (data[i].phone.length === 11 && data[i].phone[0] === "1") {
                data[i].phone = "+" + data[i].phone
            }
            if (data[i].phone.length === 11 && data[i].phone[0] === "+") {
                data[i].phone = "+1" + data[i].phone.slice(1)
            }
            if (data[i].phone.length <= 10 && data[i].phone[0] !== "+") {
                data[i].phone = "+1" + data[i].phone
            }
        }
        newData.push(data[i])
    }

    return newData
}