// export const staticStyles = {
//     iconContainer: {
//         width: "150px",
//         display: "flex",
//         marginTop: "20px", 
//         justifyContent: "space-evenly"
//     },
//     svg: {
//         fontSize: "17px"
//     }
// }

export const staticStyles = {
    iconContainer: {
        width: "100%",
        display: "flex",
        marginTop: "20px", 
        justifyContent: "space-evenly"
    },

    svg: {
        fontSize: "17px"
    },
    emptySpacer: {
        width: "263px"
    },
    fabWrapper: {
        width: "263px"
    }

}

export const staticFab = {
    minHeight: "0", 
    minHeight: "0",
    maxWidth: "30px",
    maxHeight: "30px",
}

export const fabDisabledStyle = {
    backgroundColor: "#c5c5c5c4",
    '&:hover': {
        backgroundColor: "#c5c5c5c4",
    },
} 

export const fabEnabledStyle = {
    backgroundImage: "linear-gradient(180deg, #099c9c9c, #c48b118f)",
    '&:hover': {
        // backgroundColor: cyan[200],
        backgroundImage: "linear-gradient(180deg, #099c9c, #c48b11)",
    },
}