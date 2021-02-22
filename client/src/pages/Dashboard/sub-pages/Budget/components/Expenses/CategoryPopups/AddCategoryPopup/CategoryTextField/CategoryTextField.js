import TextfieldForm from "./TextfieldForm"
import React from 'react'
import Text from "./Text"

const CategoryTextfield = (props) => {
    return (
        <TextfieldForm {...props} >
            <Text {...props} />
        </TextfieldForm>
    )
}

export default CategoryTextfield
