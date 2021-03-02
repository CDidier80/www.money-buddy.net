const Particle = function({
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
}) {
    // canvas properties
    this.context = context
    this.particleCanvas = particleCanvas
    this.setParticleGroup = setParticleGroup

    // initial position & velocity
    this.xPosition = xBasePosition * (Math.random() * 10)
    this.yPosition = yBasePosition
    this.xVelocity = (Math.random() * 2 / 3) - (Math.random() * 3 / 3)
    this.yVelocity = -(Math.random() * 5 / 3)

    // particle animation duration
    this.index = index
    this.particleAge = 0
    this.particleDeathAge = 200

    // particle physics
    this.particleSize = particleSize
    this.particleDensity = particleDensity
    this.gravity = gravity

    // particle color 
    this.red = 0
    this.green = 255
    this.blue = 255
    this.alpha = 1

    // add particle to particle group
    setParticleIndex(index + 1)
    setParticleGroup()
    particleGroup[index] = this

    this.moveParticle = () => {
        // Move particle upwards
        // gravity causes deceleration 
        this.xPosition += this.xVelocity
        this.yPosition += this.yVelocity
        this.yVelocity += this.gravity
    }

    this.ageParticle = () => {
        this.particleAge++
        this.red += 2
        this.alpha -= 0.005
        // particle dies when it reaches max age
        this.particleAge >= this.particleDeathAge && delete this.particleGroup[this.index]
    }

    this.canvasActions = () => {
        this.context.clearRect(
            0, 0, 
            this.particleCanvas.width, 
            this.particleCanvas.height
        )
        this.context.beginPath()
        // Draws a circle of radius 20 at coordinates 100,100 on ParticleCanvas
        this.context.arc(
            this.xBasePosition, 
            this.yBasePosition, 
            this.particleSize, 
            0, 
            Math.PI*2, 
            true
        )
        this.context.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha}`
        this.context.closePath()
        this.context.fill()
    }

    this.draw = () => {
        this.moveParticle()
        this.ageParticle()
        this.canvasActions()
      }
}


export default Particle 








//   const animateDust = () => {
//     context.clearRect(0, 0, ParticleCanvas.windexth, ParticleCanvas.height);

//     // Draw the particles
//     for (var i = 0; i < canvasSettings.density; i++) {
//       if (Math.random() > 0.97) {
//         // Introducing a random chance of creating a particle
//         // corresponding to an chance of 1 per second,
//         // per "density" value
//         new Particle();
//       }
//     }

//     for (var i in particles) {
//       particles[i].draw();
//     }
//     window.requestAnimationFrame(animateDust);  
// }