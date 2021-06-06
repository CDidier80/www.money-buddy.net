import { 
    TableCell, 
    makeStyles, 
} from '@material-ui/core'
import React from 'react'
import DeleteOutflowIcon from "./components/DeleteOutlowIcon"
import UndoIconButton from "./components/UndoIconButton"


const IconCell = props => {

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
            style={{width: "30px"}}
            className={classes.iconCell}
        >
            {iconShouldShow && ( showOutflowDeleteIcons ? 
                <DeleteOutflowIcon { ...props } />
                :
                <UndoIconButton { ...props } />
            )}
        </TableCell>
    )
}

export default IconCell
