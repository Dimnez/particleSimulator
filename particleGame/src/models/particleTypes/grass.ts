import Particle, { AGGREGATESTATE } from '../Particle';

export default class GrassParticle extends Particle {

    public name: string = "grass";
    public colors: Array<string> = ["#136d15", "#117c13", "#138510"];
    public density: number = 2;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.SOLID;

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
        else
            this.aggregateState = AGGREGATESTATE.SOLID;

    }

}