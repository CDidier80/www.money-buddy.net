import {
    Grid,
    Paper,
} from '@material-ui/core/'
import React, {FC, ReactElement} from 'react'


interface JSXClasses {
    [jsxClassName: string]: string
}

interface Props {
    classes: JSXClasses
}


const FormWrapper: FC<Props> = (props): ReactElement => {

    const { classes, children } = props

    return (
        <div className={classes.formWrapper} >
        <Grid 
            className={classes.grid}
            container  
        >
            <Grid 
                className={classes.paperRoot}
                component={Paper} 
                square 
            >
                <div   className={classes.paper} >
                    {children}
                </div>
            </Grid>
        </Grid>
    </div>
    )
}

export default FormWrapper
