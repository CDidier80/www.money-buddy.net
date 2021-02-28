import { useMediaQuery } from '@material-ui/core'


const nssr = {noSsr: true}

export const useIncomeQueries = () => {

    const maxWidth390px = useMediaQuery('(max-width: 390px)', nssr)
    const maxWidth725px = useMediaQuery('(max-width: 725px)', nssr)
    const maxWidth480px = useMediaQuery('(max-width: 480px)', nssr)
    const maxWidth460px = useMediaQuery('(max-width: 460px)', nssr)
    const maxWidth410px = useMediaQuery('(max-width: 410px)', nssr)

    const queriesObject = {
        maxWidth725px,
        maxWidth480px,
        maxWidth460px,
        maxWidth410px,
        maxWidth390px,
    }
    
    const queriesArray = [
        ["maxWidth725px", maxWidth725px],
        ["maxWidth480px", maxWidth480px],
        ["maxWidth460px", maxWidth460px],
        ["maxWidth410px", maxWidth410px],
        ["maxWidth390px", maxWidth390px],
    ]

    return queriesObject
}