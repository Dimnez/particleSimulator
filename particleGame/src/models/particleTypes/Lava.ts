import { ParsedTsconfig } from 'typescript';
import Particle, { AGGREGATESTATE } from '../Particle';
import Stone from './Stone';
export default class LavaParticle extends Particle {

    public name: string = "lava";
    public colors: Array<string> = ["#ff2500", "#ff6600", "#f2f217", "#f2f217", "#ea5c0f"];
    public density: number = 1;
    public conductivity: number = 130;
    public temperature: number = 1000;
    public heatCapacity: number = 0.9;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.LIQUID;

    constructor() {
        super();
        this.initialize();
    }

    collision = (element: Particle) => {
        if (element.name == "water") {
            let stone = new Stone();
            this.parentMapState?.particles.push(stone);
            let _index = this.parentMapState?.particles.indexOf(this);
            this.parentMapState?.particles.slice(_index);
        }
    }

}