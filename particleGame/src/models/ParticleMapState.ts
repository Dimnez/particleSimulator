import Particle, { DIRECTION } from './Particle';

export interface sorroundingParticleStates {
    above?: ParticleMapState,
    right?: ParticleMapState,
    below?: ParticleMapState,
    left?: ParticleMapState
}

export default class ParticleMapState {
    public particles: Array<Particle> = [];
    public neighbours?: sorroundingParticleStates;

    constructor() {

    }

    calc = () => {
        for (const particle in this.particles) {
            const particleObj = this.particles[particle];
            new Promise((resolve, reject) => {
                if (particleObj) {
                    particleObj.calc(this);
                }
                resolve(true);
            });
        }


    }

    get density() {
        var ret = 0;

        for (const particle in this.particles) {
            ret += this.particles[particle].density;
        }

        return ret;
    }

    calcCollisions() {

        for (const particle in this.particles) {
            for (const collisionParticle in this.particles) {
                if (collisionParticle != particle)
                    this.particles[particle].collision(this.particles[collisionParticle]);
            }
        }
    }

    moveParticle = (particle: Particle, direction: DIRECTION) => {
        const particleIndex = this.particles.indexOf(particle);

        this.particles = [];

        if (this.neighbours?.below) {
            if (this.neighbours?.below.particles.length > 0)
                this.neighbours?.below.particles[0].collision(particle);
        }
        if (this.neighbours?.above) {
            if (this.neighbours?.above.particles.length > 0)
                this.neighbours?.above.particles[0].collision(particle);
        }
        if (this.neighbours?.left) {
            if (this.neighbours?.left.particles.length > 0)
                this.neighbours?.left.particles[0].collision(particle);
        }
        if (this.neighbours?.right) {
            if (this.neighbours?.right.particles.length > 0)
                this.neighbours?.right.particles[0].collision(particle);
        }

        if (direction == DIRECTION.DOWN) {
            if (this.neighbours?.below) {
                this.neighbours.below.particles.push(particle);
                particle.parentMapState = this.neighbours.below;
            }
            else
                this.particles.push(particle);
        } else if (direction == DIRECTION.UP) {
            if (this.neighbours?.above) {
                this.neighbours.above.particles.push(particle);
                particle.parentMapState = this.neighbours.above;
            }
            else
                this.particles.push(particle);
        } else if (direction == DIRECTION.LEFT) {
            if (this.neighbours?.left) {
                this.neighbours.left.particles.push(particle);
                particle.parentMapState = this.neighbours.left;
            }
            else
                this.particles.push(particle);
        } else if (direction == DIRECTION.RIGHT) {
            if (this.neighbours?.right) {
                this.neighbours.right.particles.push(particle);
                particle.parentMapState = this.neighbours.right;
            }
            else
                this.particles.push(particle);
        }

    }
}