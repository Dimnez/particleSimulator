import Particle, { DIRECTION } from './Particle';
import ParticleMapState, { sorroundingParticleStates } from './ParticleMapState';
import GrassParticle from './particleTypes/Grass';
import LavaParticle from './particleTypes/Lava';
import StoneParticle from './particleTypes/Stone';
import WaterParticle from './particleTypes/Water';
import WorldBorderParticle from './particleTypes/WorldBorder';
export interface physicalCircumstances {
    temperature: number;
    gravity: number;
    windDirection: DIRECTION,
}

export default class ParticleMap {

    public dataSource: Array<Array<ParticleMapState>> = [[]];
    public CHUNK_SIZE: number = 4;
    public width: number = 420;
    public height: number = 120;
    public physics: physicalCircumstances = {
        temperature: 20,
        gravity: 0,
        windDirection: DIRECTION.RIGHT
    };

    constructor() {
        this.generate();
    }

    get chunks() {
        return Math.round((this.width / this.CHUNK_SIZE) * (this.height / this.CHUNK_SIZE))
    }

    addParticle(x: number, y: number, particle: Particle) {
        if (x >= 0
            && x < this.width - 1
            && y >= 0
            && y < this.height - 1) {

            particle.parentMapState = this.dataSource[y][x];
            this.dataSource[y][x].particles.push(particle);
            particle.parentMapState.calc(x, y);
        }
    }

    createParticle() {

    }

    loadMap() {
        var unserializedMap: Array<number[]> = [];

        var mapData = JSON.parse(localStorage.getItem('map')!);

        for (var h = 0; h < this.height; h++) {

            for (var w = 0; w < this.width; w++) {

                //this.dataSource[h][w] = new ParticleMapState();

                switch (mapData[h][w]) {
                    case 0: this.dataSource[h][w].particles.push(new WaterParticle()); break;
                    case 1: this.dataSource[h][w].particles.push(new WaterParticle()); break;
                    case 2: this.dataSource[h][w].particles.push(new StoneParticle()); break;
                    case 3: this.dataSource[h][w].particles.push(new LavaParticle()); break;
                    case 4: this.dataSource[h][w].particles.push(new GrassParticle()); break;
                    case 5: this.dataSource[h][w].particles.push(new WorldBorderParticle()); break;
                }

                if (this.dataSource[h][w].particles.length > 0)
                    this.dataSource[h][w].particles[0].parentMapState = this.dataSource[h][w];

            }
        }
    }


    exportMap(e: any) {
        var unserializedMap: Array<number[]> = [];

        for (var h = 0; h < this.height; h++) {

            unserializedMap[h] = [];

            for (var w = 0; w < this.width; w++) {

                if (this.dataSource[h][w].particles.length == 0) {
                    unserializedMap[h][w] = -1;
                }
                else {
                    switch (this.dataSource[h][w].particles[0].name) {
                        case "water": unserializedMap[h][w] = 0; break;
                        case "water": unserializedMap[h][w] = 1; break;
                        case "stone": unserializedMap[h][w] = 2; break;
                        case "lava": unserializedMap[h][w] = 3; break;
                        case "grass": unserializedMap[h][w] = 4; break;
                        case "border": unserializedMap[h][w] = 5; break;
                    }
                }
            }


            localStorage.setItem("map", JSON.stringify(unserializedMap))
        }
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
                handler(this.dataSource[h][w], w, h);
    }

    forEachParticleinChunk = (chunk: number, handler: Function) => {

        const tiles_width = Math.round(this.width / this.CHUNK_SIZE);
        const tiles_height = Math.round(this.height / this.CHUNK_SIZE);
        const col = chunk > tiles_width ? chunk % tiles_width : chunk;
        const row = Math.round(tiles_height / chunk);

        var chunk_x = col; // = 100 % 100
        var chunk_y = row;

        for (var h = chunk_y * this.CHUNK_SIZE; h < (chunk_y * this.CHUNK_SIZE) + this.CHUNK_SIZE; h++)
            for (var w = (chunk_x * this.CHUNK_SIZE); w < (chunk_x * this.CHUNK_SIZE) + this.CHUNK_SIZE; w++)
                if (h >= 0 && w >= 0 && h < this.height && w < this.width)
                    handler(this.dataSource[h][w], w, h);
    }

    forEachParticle = (handler: Function) => {
        for (var h = 0; h < this.height; h++)
            for (var w = 0; w < this.width; w++) {
                for (var particle of this.dataSource[h][w].particles)
                    if (h >= 0 && w >= 0 && h < this.height && w < this.width)
                        handler(w, h, particle);
            }
    }

    calc = () => {

        var currentChunk = Math.round(Math.floor(Math.random() * this.chunks));

        this.forEachParticleMapState((particleState: ParticleMapState, w: number, h: number) => {

            particleState.calc(w, h);
/* 
            const spawners = [];//particleState.particles.filter(ps => ps.spawner);

            for (const spawner of spawners) {

                const newParticle = { ...spawner };
                newParticle.spawner = false;



                this.addParticle((w - 2) + Math.floor(Math.random() * 2), h + Math.floor(Math.random() * 2), newParticle);
                newParticle.calc(particleState);
            } */

        });
    }


}