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

    const { formWrapper, grid, paperRoot, paper } = props.classes

    return (
        <div className={formWrapper} >
            <Grid 
                className={grid}
                container  
            >
                <Grid 
                    className={paperRoot}
                    component={Paper} 
                    square 
                >
                    <div className={paper} >
                        { props.children }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormWrapper
