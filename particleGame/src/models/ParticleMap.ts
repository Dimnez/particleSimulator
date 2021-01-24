import Particle, { DIRECTION } from './Particle';
import ParticleMapState, { sorroundingParticleStates } from './ParticleMapState';
import WorldBorderParticle from './particleTypes/WorldBorder';
export interface physicalCircumstances {
    temperature: number;
    gravity: number;
    windDirection: DIRECTION,
}

export default class ParticleMap {

    public dataSource: Array<Array<ParticleMapState>> = [[]];
    public width: number = 120;
    public height: number = 60;
    public physics: physicalCircumstances = {
        temperature: 20,
        gravity: 0,
        windDirection: DIRECTION.RIGHT
    };

    constructor() {
        this.generate();
    }

    addParticle(x: number, y: number, particle: Particle) {
        if (x >= 0
            && x <= this.width
            && y >= 0
            && y <= this.height) {
            particle.parentMapState = this.dataSource[y][x];
            this.dataSource[y][x].particles.push(particle);
        }
    }

    createParticle() {

    }

    //generates a clean map
    generate = () => {
        for (var h = 0; h < this.height; h++) {
            this.dataSource[h] = [];
            for (var w = 0; w < this.width; w++) {
                this.dataSource[h][w] = new ParticleMapState();

                if (h == 0 || w == 0 || w == this.width - 1 || h == this.height - 1) {
                    this.dataSource[h][w].particles.push(new WorldBorderParticle());
                }


            }
        }
        this.setNeigbours();
    }

    setNeigbours = () => {
        for (var h = 0; h < this.height; h++) {
            for (var w = 0; w < this.width; w++) {
                this.dataSource[h][w].neighbours = {
                    above: h > 0 ? this.dataSource[h - 1][w] : undefined,
                    below: h < this.height - 1 ? this.dataSource[h + 1][w] : undefined,
                    right: w > 0 ? this.dataSource[h][w + 1] : undefined,
                    left: w < this.width - 1 ? this.dataSource[h][w - 1] : undefined
                };
            }
        }
    }

    forEachParticleMapState = (handler: Function) => {
        for (var h = this.height - 1; h > 0; h--)
            for (var w = 0; w < this.width - 1; w++)
                handler(this.dataSource[h][w]);
    }

    forEachParticle = (handler: Function) => {
        for (var h = 0; h < this.height; h++)
            for (var w = 0; w < this.width; w++) {
                for (var particle in this.dataSource[h][w].particles)
                    handler(w, h, this.dataSource[h][w].particles[particle]);
            }
    }

    calc = () => {
        this.forEachParticleMapState((particleState: ParticleMapState) => {
            particleState.calc();
        });
    }


}