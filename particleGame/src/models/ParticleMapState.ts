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

    calc = (w : number, h : number) => {
        for (const particleObj of this.particles) {
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

        for (const particle of this.particles) {
            for (const collisionParticle of this.particles) {
                    particle.collision(collisionParticle);
            }
        }
    }

    moveParticle = (particle: Particle, direction: DIRECTION) => {
        const particleIndex = this.particles.indexOf(particle);

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

        this.particles.splice(particleIndex,1);

        if (direction == DIRECTION.DOWN) {
            if (this.neighbours?.below) {
                this.particles = this.particles.splice(particleIndex,1);
                this.neighbours.below.particles.push(particle);
                particle.parentMapState = this.neighbours.below;
            }
        } else if (direction == DIRECTION.UP) {
            if (this.neighbours?.above) {
                this.particles = this.particles.splice(particleIndex,1);
                this.neighbours.above.particles.push(particle);
                particle.parentMapState = this.neighbours.above;
            }
        } else if (direction == DIRECTION.LEFT) {
            if (this.neighbours?.left) {
                this.particles = this.particles.splice(particleIndex,1);
                this.neighbours.left.particles.push(particle);
                particle.parentMapState = this.neighbours.left;
            }
        } else if (direction == DIRECTION.RIGHT) {
            if (this.neighbours?.right) {
                this.particles = this.particles.splice(particleIndex,1);
                this.neighbours.right.particles.push(particle);
                particle.parentMapState = this.neighbours.right;
            }
        }

    }
}