import ParticleMap from './ParticleMap';
import ParticleMapState from './ParticleMapState';
export enum AGGREGATESTATE {
    SOLID,
    LIQUID,
    GASEOUS
}

export enum DIRECTION {
    UP,
    UPRIGHT,
    RIGHT,
    RIGHTDOWN,
    DOWN,
    DOWNLEFT,
    LEFT,
    LEFTUP
}


export default class Particle {
    public name: string = "unknown";
    public calculatedInCycle: boolean = false;
    public colors: Array<string> = ["white"];
    public primaryColor: string = "";
    public density: number = 1;
    public temperature: number = 20;
    public weight: number = 100;
    public acceleration: number = 0;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.SOLID;
    public parentMap?: ParticleMap;
    public parentMapState?: ParticleMapState;
    public conductivity: number = 50;
    public heatCapacity: number = 0.01;
    public angle: number = 0;
    public brightness: number = 0;
    public spawner: boolean = true;
    constructor() {
        this.initialize();
    }

    replaceWith = (particle: Particle) => {
        if (this.parentMapState) {
            this.parentMapState.particles = this.parentMapState.particles.splice(this.parentMapState.particles.indexOf(this));
            this.parentMapState.particles.push(particle);
        }
    }

    initialize = () => {

        let randomPick = Math.round(Math.random() * this.colors.length);
        this.primaryColor = this.colors[randomPick];
    }

    calc = (ParticleMapState: ParticleMapState) => {
        if (!this.calculatedInCycle) {
            this.move(ParticleMapState.moveParticle);
            this.outerCircumstancesPerCycle();
            this.calculatedInCycle = true;
        }
    }

    collision = (particle: Particle) => {
        if (particle.temperature > this.temperature)
            this.temperature += this.heatCapacity * particle.temperature * (Math.floor(2));
        else if (this.temperature > particle.temperature)
            this.temperature -= this.heatCapacity * particle.temperature * (Math.floor(2));
    }

    moveOutOrRandom = (handler: Function) => {

        if (this.parentMapState?.neighbours?.above?.particles.length == 0) {
            handler(DIRECTION.UP);
        }
        else if (this.parentMapState?.neighbours?.below?.particles.length == 0) {
            handler(DIRECTION.DOWN);
        }
        else if (this.parentMapState?.neighbours?.right?.particles.length == 0) {
            handler(DIRECTION.RIGHT);
        }
        else if (this.parentMapState?.neighbours?.left?.particles.length == 0) {
            handler(DIRECTION.LEFT);
        }
        else {
            handler(DIRECTION.UP);
        }
    }

    move = (handler: Function) => {

        if (this.parentMapState && this.parentMapState.density > this.density) {
            this.moveOutOrRandom(handler);
            return;
        }

        if (this.aggregateState === AGGREGATESTATE.GASEOUS) {
            handler(this, DIRECTION.UP);
        }
        else if (this.aggregateState === AGGREGATESTATE.SOLID) {
            if (this.weight > 0
                && this.parentMapState?.neighbours?.below
                && this.parentMapState?.neighbours?.below?.density < this.density
            )
                handler(this, DIRECTION.DOWN);
            else if (this.weight < 0)
                handler(this, DIRECTION.UP);
        }
        else if (this.aggregateState === AGGREGATESTATE.LIQUID) {
            if (this.parentMapState?.density! > this.density
                && this.parentMapState?.neighbours?.above?.density == 0) {
                handler(this, DIRECTION.UP);
                return;
            }

            if (this.weight > 0
                && this.parentMapState?.neighbours?.below
                && this.parentMapState?.neighbours?.below?.density <= this.density / 2
            ) {
                handler(this, DIRECTION.DOWN);
            }
            else if (this.parentMapState?.neighbours?.below?.density! >= this.density / 2 &&
                this.parentMapState?.neighbours?.left?.density! <= this.density) {

                if (Math.floor(Math.random() * 3) == 1 && this.parentMapState?.neighbours?.left?.density! == 0)
                    handler(this, DIRECTION.LEFT);
                else if (Math.floor(Math.random() * 2) == 0 && this.parentMapState?.neighbours?.right?.density! == 0)
                    handler(this, DIRECTION.RIGHT);
            }

        }
    }

    outerCircumstancesPerCycle = () => {

    }



}