import ParticleMap from './ParticleMap';
import Particle from './Particle';
import Catyen from '@catyen/catyen';
import Water from './particleTypes/Water';
import Stone from './particleTypes/Stone';
import Lava from './particleTypes/Lava';
import Grass from './particleTypes/Grass';
import Border from './particleTypes/WorldBorder';
import Ice from './particleTypes/Ice';

export default class GUI {

    public map: ParticleMap = new ParticleMap();
    public TILE_SIZE: number = 5;
    public context2D?: Catyen;
    public currentTool: number = 1;
    public tools: Array<number> = [0, 1, 2, 3, 4, 5, 6];
    public physicsOn: boolean = true;

    constructor(context2D: Catyen) {
        this.context2D = context2D;
    }

    create<T>(c: { new(): T; }): T {
        return new c();
    }

    calcTimer = () => {

        if (this.physicsOn)
           new Promise((resolve,reject)=>{this.map.calc();resolve(true)});
    }

    initialize = () => {
        setInterval(this.calcTimer, 5);
    }

    addParticle = (x: number, y: number, particleType: number) => {
        this.map.addParticle(
            Math.round(x / this.TILE_SIZE),
            Math.round(y / this.TILE_SIZE),
            this.createParticleOfTool(this.currentTool));
    }

    createParticleOfTool(tool: number): Particle {
        switch (tool) {
            case 0: return new Water();
            case 1: return new Water();
            case 2: return new Stone();
            case 3: return new Lava();
            case 4: return new Grass();
            case 5: return new Border();
            case 6: return new Ice();
            default: return new Water();
        }

    }

    changeTool(tool: number) {
        this.currentTool = tool;

        console.log("change tool to", tool);
    }

 

    drawMap = (gx:number,gy:number) => {
        this.context2D?.draw.clear("#A4BAB7");

        this.map.forEachParticle((x: number, y: number, element: Particle) => { if (element) { element.calculatedInCycle = false; } this.drawParticle(gx+x, gy+y, element); });

    }

    drawParticle = (x: number, y: number, particle: Particle) => {
        if (!this.context2D)
            throw new Error("context2D should be set");

      
        this.context2D.draw.fillRect(x * this.TILE_SIZE, y * this.TILE_SIZE, this.TILE_SIZE, this.TILE_SIZE, particle.primaryColor);
    
        /* if(particle instanceof Water)
        {
            this.context2D.draw.print(x * this.TILE_SIZE,y * this.TILE_SIZE,particle.temperature.toString(),"black");
        }  */

          
    }


}