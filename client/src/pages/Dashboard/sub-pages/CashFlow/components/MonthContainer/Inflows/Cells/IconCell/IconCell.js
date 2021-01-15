import React from 'react'
import DeleteInflowIcon from "./components/DeleteInflowIcon"
import UndoIconButton from "./components/UndoIconButton"

import { 
    makeStyles, 
    TableCell, 
} from '@material-ui/core'


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
                <DeleteInflowIcon {...props} />
                :
                <UndoIconButton 
                    {...props} 
                />
            )}
        </TableCell>
    )
}

export default IconCell
