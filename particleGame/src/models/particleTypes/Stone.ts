import Particle, { AGGREGATESTATE } from '../Particle';

export default class StoneParticle extends Particle {

    public name: string = "stone";
    public colors: Array<string> = ["rgba(100,100,90)", "rgba(90,90,90)", "rgba(100,100,100)"];
    public density: number = 10;
    public conductivity: number = 130;
    public heatCapacity: number = 0.9;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.SOLID;

    constructor() {
        super();
        this.initialize();
    }

}