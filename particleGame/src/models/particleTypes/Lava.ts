import { ParsedTsconfig } from 'typescript';
import Particle, { AGGREGATESTATE } from '../Particle';
import Stone from './Stone';
export default class LavaParticle extends Particle {

    public name: string = "lava";
    public colors: Array<string> = ["#ff2500", "#ff6600", "#f2f217", "#f2f217", "#ea5c0f"];
    public density: number = 1;
    public conductivity: number = 130;
    public temperature: number = 1200;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.LIQUID;

    constructor() {
        super();
        this.initialize();
    }


    outerCircumstancesPerCycle = () => {
        if (this.temperature > 700) {
            this.aggregateState = AGGREGATESTATE.LIQUID;
        }
        else if (this.temperature <= 700) {
            this.aggregateState = AGGREGATESTATE.SOLID;
            this.replaceWith(new Stone());
        }
    }


}