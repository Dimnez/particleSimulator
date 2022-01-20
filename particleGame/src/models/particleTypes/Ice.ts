import Particle, { AGGREGATESTATE } from '../Particle';
import WaterParticle from './Water';

export default class IceParticle extends Particle {

    public name: string = "ice";
    public colors: Array<string> = ["rgba(255,255,255,0.5)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.8)"];
    public temperature: number = -4;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.SOLID;

    constructor() {
        super();
        this.initialize();
    }

    outerCircumstancesPerCycle = () => {

      
        if (this.temperature >= 100) {
            this.aggregateState = AGGREGATESTATE.GASEOUS;
        }
        else if (this.temperature >= 0 && this.temperature < 100) {
            this.aggregateState = AGGREGATESTATE.LIQUID;


        }
        else if (this.temperature < 0) {

            this.aggregateState = AGGREGATESTATE.SOLID;

        }
    }

}