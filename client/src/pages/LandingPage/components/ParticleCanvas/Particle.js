import React, {useState} from 'react'

const Particle = props => {

    const {
        particleCanvas, 
        xBasePosition,
        yBasePosition,
        particleGroup, 
        index, 
        context, 
    }= props

    const [xPosition, setXPosition] = useState("")
    const [yPosition, setYPosition] = useState("")
    const [xVelocity, ] = useState(Math.random() * 2 / 3) - (Math.random() * 3 / 3)
    const [yVelocity, setYVelocity] = useState(Math.random() * 5 / 3)
    const [id, setId] = useState("")
    const [particleAge, setParticleAge] = useState(0)
    const [particleDeathAge, setParticleDeathAge] = useState(200)

    useEffect(() => {
        onParticleBirth()
        draw()
    }, [input])




    const onParticleBirth = () => {

    }


    const setMotion = () => {
        setXPosition(xPosition + xVelocity)
        setYPosition(yPosition + yVelocity)
        setYVelocity(yVelocity + gravity)
        setParticleAge(particleAge + 1)
        if (particleAge >= particleDeathAge) {
            let groupCopy = [...particleGroup]
            delete groupCopy[index]
        }
    }

    const draw = (context) => {
        context.clearRect(
            canvasSettings.leftWall, 
            canvasSettings.groundLevel, 
            ParticleCanvas.width, 
            ParticleCanvas.height
        )
        context.beginPath()
        // Draws a circle of radius 20 at coordinates 100,100 on ParticleCanvas
        context.arc(
            xBasePosition, 
            yBasePosition, 
            particleSize, 
            0, 
            Math.PI*2, 
            true
        )
        context.closePath()
        context.fill()
    }

    return null
}

export default Particle
