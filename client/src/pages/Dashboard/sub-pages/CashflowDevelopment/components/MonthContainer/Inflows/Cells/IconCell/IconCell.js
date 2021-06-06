
import { 
    TableCell, 
    makeStyles, 
} from '@material-ui/core'
import React from 'react'
import UndoIconButton from "./components/UndoIconButton"
import DeleteInflowIcon from "./components/DeleteInflowIcon"


const IconCell = (props) => {

    const { 
        iconShouldShow, 
        showInflowDeleteIcons 
    } = props.fromInflowRow


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
            {iconShouldShow && ( showInflowDeleteIcons ? 
                <DeleteInflowIcon { ...props } />
                :
                <UndoIconButton 
                    { ...props } 
                />
            )}
        </TableCell>
    )
}

export default IconCell
