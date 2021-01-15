import React from 'react'
import DeleteInflowIcon from "./components/DeleteInflowIcon"
import UndoIconButton from "./components/DeleteInflowIcon"

import { 
    makeStyles, 
    TableCell, 
} from '@material-ui/core'


const IconCell = (props) => {

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
            {iconShouldShow && ( showIncomeDeleteIcons ? 
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
