import { useMediaQuery } from '@material-ui/core'

export default function useMediaQueries() {
    const mq1 = useMediaQuery('(min-width:1800px)')
    const mq2 = useMediaQuery('(min-width:1400px)')
    const mq3 = useMediaQuery('(min-width:1100px)')
    const mq4 = useMediaQuery('(min-width:887px)' )
    const mq5 = useMediaQuery('(min-width:800px)' )
    const mq6 = useMediaQuery('(min-width:622px)' )
    const mq7 = useMediaQuery('(min-width:515px)' )

    return { mq1, mq2, mq3, mq4, mq5, mq6, mq7 }
}