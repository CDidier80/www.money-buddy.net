import React from 'react'

const GradientWrapper = ({padding}) => {

    const styles = {
        padding: padding,
        borderRadius: "8px",
        backgroundColor: "#074141",
        overflow: "visible",
        boxShadow: `            
            2px 3px 1px -2px rgba(0,0,0,0.3), 
            2px 2px 2px 0px  rgba(0,0,0,0.22), 
            2px 1px 8px 0px rgba(0,0,0,0.18);`,
        backgroundImage: "linear-gradient(180deg, #0a6666, #a0720e)",
    }
    
    return  <div style={styles}></div>
}

export default GradientWrapper
