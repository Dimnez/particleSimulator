import Particle, { AGGREGATESTATE } from '../Particle';

export default class WaterParticle extends Particle {

    public name: string = "water";
    public colors: Array<string> = ["#0f5e9c", "#2389da", "#1ca3ec", "#5abcd8"];
    public density: number = 1;
    public conductivity: number = 130;
    public heatCapacity: number = 0.9;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.LIQUID;

    constructor() {
        super();
        this.initialize();
    }

    outerCircumstancesPerCycle = () => {

        if (this.aggregateState === AGGREGATESTATE.GASEOUS) {
            this.weight = -1;
        }
        if (this.temperature > 100) {
            this.aggregateState = AGGREGATESTATE.GASEOUS;
            this.primaryColor = "rgba(255,255,255,0.5)"
        }
        else if (this.temperature < 100) {
            this.aggregateState = AGGREGATESTATE.LIQUID;

        }
        else if (this.temperature < 0) {

            this.aggregateState = AGGREGATESTATE.SOLID;

        }
    }

}