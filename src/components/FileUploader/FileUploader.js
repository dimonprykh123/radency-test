import React, {useRef} from 'react'
import {CSVReader} from 'react-papaparse'
import styles from "./FileUploader.module.css"
import {transformByStructure} from "../../utils/transformer";

const FileUploader = ({setUsers, setError}) => {

    const buttonRef = useRef()

    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }

    const handleOnDrop = (data) => {
        setError(null)
        const mustHaveLines = ["full name","phone","email"]
        transformByStructure(data,setError,setUsers,...mustHaveLines)
    }

    const handleOnError = (err, file, inputElem, reason) => {
       setError(err)
    }

    return (
        <CSVReader
            ref={buttonRef}
            onDrop={handleOnDrop}
            onError={handleOnError}
            noDrag
            style={{
                progressBar:{
                    backgroundColor:"white"
                }
            }}
        >
            {
                () => (
                    <div className={styles.btnContainer}>
                        <button
                            type='button'
                            onClick={handleOpenDialog}
                            className={styles.btn}
                        >
                            Import users
                        </button>
                    </div>
                )
            }
        </CSVReader>
    )

}

export default FileUploader