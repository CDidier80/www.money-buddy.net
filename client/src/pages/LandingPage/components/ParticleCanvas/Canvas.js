import React, { useRef, useEffect, useState } from 'react'
import Particle from "./particleClass"

const Canvas = (props) => {

    console.log('rerender')
    const canvasRef = useRef(null)

    const [particleGroup, setParticleGroup] = useState({})
    const [index, setParticleIndex] = useState(0)
    const [particleDensity, setParticleDensity] = useState(20)
    const [particleSize, setParticleSize] = useState(2)
    const [xBasePosition, setXBasePosition] = useState("")
    const [yBasePosition, setYBasePosition] = useState("")
    const [gravity, setGravity] = useState(-0.01)


    useEffect(() => {
            const particleCanvas = canvasRef.current
            const context = particleCanvas.getContext('2d')
            setXBasePosition(particleCanvas.width / 2)
            setYBasePosition(particleCanvas.height / 2)
            const particleClassArgs = {
                setParticleIndex,
                setParticleGroup,
                particleDensity,
                particleCanvas,
                particleGroup,
                xBasePosition,
                yBasePosition,
                particleSize,
                gravity,
                context, 
                index
            }

            context.fillStyle = 'rgba(0,0,0,.4)'
            // console.log(particleCanvas)
            console.log(typeof animateParticles)
            requestAnimationFrame(animateParticles)
            return () => cancelAnimationFrame(animateParticles)
    }, [])


    const animateParticles = (huh) => {
        const {
            context,
            particleGroup, 
            particleCanvas, 
            particleDensity,
        } = huh

        context.clearRect(0, 0, particleCanvas.width, particleCanvas.height)
        for (let i = 0; i < particleDensity; i++) {
            Math.random() > 0.97 && new Particle(huh)
        }

        for (let i in particleGroup) {
            particleGroup[i].draw();
        }

        requestAnimationFrame(animateParticles)
    }




    const canvasStyle = {
        backgroundColor: "rgba(0,0,0,0)",
        bottom: 0, left: 0, right: 0,
        position: "absolute", 
        height: "30vh", 
        width: "100vw",
    }




    return (
            
            <canvas 
                style={canvasStyle}
                ref={canvasRef} 
                {...props}
            >
            </canvas>
        )
}

export default Canvas