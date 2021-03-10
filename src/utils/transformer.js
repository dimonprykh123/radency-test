import {duplicateSearch} from "./reusedFunctions/duplicateSearch";
import {phoneNumberValidation} from "./reusedFunctions/phoneNumberValidation";
import {lineValidation} from "./reusedFunctions/lineValidation";
import {structureValidation} from "./reusedFunctions/structureValidation";
import {structureCreator} from "./reusedFunctions/structureCreator";
import {sizeIndicator} from "./reusedFunctions/sizeIndicator";
import structure from "./structure";


export const transformByStructure = (data, errorCallback, uploadCallback, ...args) => {

    const users = []
    const objStructure = structureCreator(data)
    const format = structureValidation(objStructure,structure)
    const size = sizeIndicator(data)

    if(!format){
        errorCallback("File format is not correct")
        return
    }

    for (let i = 1; i < size; i++) {
        const obj = Object.assign({}, objStructure)
        let j = 0

        for (let key in obj) {
            obj[key] = data[i].data[j].trim()
            j++
        }
        const validation = lineValidation(3, obj, args)
        if (!validation) {
            errorCallback("File format is not correct")
            break
        }
        users.push(obj)
    }

    const afterPhoneValidator = phoneNumberValidation(users)
    const afterDuplicateValidator = duplicateSearch(afterPhoneValidator)
    uploadCallback(afterDuplicateValidator)
}

