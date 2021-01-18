import React from 'react'
import DeleteOutflowIcon from "./components/DeleteOutlowIcon"
import UndoIconButton from "./components/UndoIconButton"

import { 
    makeStyles, 
    TableCell, 
} from '@material-ui/core'


const IconCell = (props) => {

    const {
        iconShouldShow, 
        showOutflowDeleteIcons
    } = props.fromOutflowRow

    const useStyles = makeStyles({
        iconCell: {
            maxWidth: "36px",
            padding: "0px"
        },
    })

    const classes = useStyles()

    return (
        <TableCell 
            size="small" 
            className={classes.iconCell}
            style={{width: "30px"}}
        >
            {iconShouldShow && ( showOutflowDeleteIcons ? 
                <DeleteOutflowIcon {...props} />
                :
                <UndoIconButton 
                    {...props} 
                />
            )}
        </TableCell>
    )
}

export default IconCell
