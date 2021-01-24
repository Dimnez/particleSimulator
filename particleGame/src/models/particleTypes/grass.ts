import Particle, { AGGREGATESTATE } from '../Particle';

export default class GrassParticle extends Particle {

    public name: string = "grass";
    public colors: Array<string> = ["#136d15", "#117c13", "#138510"];
    public density: number = 2;
    public conductivity: number = 130;
    public heatCapacity: number = 0.9;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.SOLID;

    constructor() {
        super();
        this.initialize();
    }

}