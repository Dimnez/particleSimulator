import Particle, { AGGREGATESTATE } from '../Particle';
import Lava from './Lava';

export default class StoneParticle extends Particle {

    public name: string = "stone";
    public colors: Array<string> = ["rgba(100,100,90)", "rgba(90,90,90)", "rgba(100,100,100)"];
    public density: number = 8;
    public conductivity: number = 130;
    public aggregateState: AGGREGATESTATE = AGGREGATESTATE.SOLID;

    constructor() {
        super();
        this.initialize();
    }

    outerCircumstancesPerCycle = () =>
    {
        if(this.temperature > 700)
        {
            this.aggregateState = AGGREGATESTATE.LIQUID;
            //this.replaceWith(new Lava());
        }
        else if(this.temperature <= 700)
        {
            this.aggregateState = AGGREGATESTATE.SOLID;
        }
    }

}