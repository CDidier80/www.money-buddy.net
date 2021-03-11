import AddDeleteButtonGroup from "../../../../../../../../TopLevelComponents/AddDeleteButtons/AddDelButtonGroup"
import React from 'react'


const ButtonsAddDelete = (props) => {

    /*  props */

    const {
        addCategory,
        setDeleteIcons,
        showDeleteIcons
    } = props.fromExpenseAccordion

    const deleteButtonProps = {
        deleteHandler: setDeleteIcons,
        deleteText: showDeleteIcons ? "Cancel Delete" : "Delete Category"
    }

    const addButtonProps = {
        addHandler: addCategory,
        addText: "Add Category"
    }

    const otherProps = {
        variant: "secondary",
        iconDisplayed: showDeleteIcons
    }

    return (
        <AddDeleteButtonGroup 
            {...deleteButtonProps}
            {...addButtonProps}
            {...otherProps}
            {...props}
        />
    )
}

export default ButtonsAddDelete


