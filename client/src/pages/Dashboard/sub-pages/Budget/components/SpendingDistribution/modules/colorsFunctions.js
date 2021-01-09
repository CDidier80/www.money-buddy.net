/**
 * @param {String} color hex color
 * @param {Integer} percent -100 to 100 value that lightens or darkens a color
 */

export const lightenOrDarken = (color, percent) => {

    try {
        let R = parseInt(color.substring(1,3), 16)
        let G = parseInt(color.substring(3,5), 16)
        let B = parseInt(color.substring(5,7), 16)
    
        R = parseInt(R * (100 + percent) / 100)
        G = parseInt(G * (100 + percent) / 100)
        B = parseInt(B * (100 + percent) / 100)
    
        R = ( R < 255 ) ? R:255  
        G = ( G < 255 ) ? G:255  
        B = ( B < 255 ) ? B:255
    
        let RR = ((R.toString(16).length==1) ? "0" + R.toString(16) : R.toString(16) );
        let GG = ((G.toString(16).length==1) ? "0" + G.toString(16) : G.toString(16) );
        let BB = ((B.toString(16).length==1) ? "0" + B.toString(16) : B.toString(16) );
    
        return "#"+RR+GG+BB;
        
    } catch (error) {
        console.log("TRY{}CATCH{} ERROR --> paletteFromTwoColors(): ", error)
    }
}


/**
 * @param {Array} hex1 array where each element is a 0-255 rgb integer value
 * @param {Array} hex2 array where each element is a 0-255 rgb integer value
 */
export const paletteFromTwoColors = (hex1, hex2, numOfColors) => {
    // console.log("function reached")
    // console.log(lightenOrDarken)
    try {
        let palette = [
            hex1, 
            hex2,
        ]
        let colorOneTurn = true
        let light = true
        let lightCounter = 0
        let percentCounter = 0
        let percent = 33
    
        for (let i = 0; i <= numOfColors-3; i++) {
            let color = colorOneTurn ? hex1 : hex2
            let newPaletteColor = lightenOrDarken(color, (light ? percent : -percent))
            palette.push(newPaletteColor)
            lightCounter += 1
            percentCounter += 1

            if (lightCounter === 2) {
                light = !light
                lightCounter = 0
            }
    
            if (percentCounter === 4) {
                percent += 33
                percentCounter = 0
            }
    
            colorOneTurn = !colorOneTurn
        }
        
        return palette
    } catch (error) {
        console.log("TRY{}CATCH{} ERROR --> paletteFromTwoColors(): ", error)
    }
}