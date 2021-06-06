import React from 'react'

const ParticleGroup = (props) => {

    const { particleGroup } = props

    return (
        <>
            {particleGroup.map((particle, index) => {
                <Particle
                    index={index}
                    { ...props }
                />
            })}
        </>
    )
}

export default ParticleGroup
