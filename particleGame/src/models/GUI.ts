import ParticleMap from './ParticleMap';
import Particle from './Particle';
import CanvasElement from '../../../CanvasElements/src/CanvasElements';
import Water from './particleTypes/Water';
import Stone from './particleTypes/Stone';
import Lava from './particleTypes/Lava';
import Grass from './particleTypes/grass';
export default class GUI {

    public map: ParticleMap = new ParticleMap();
    public TILE_SIZE: number = 10;
    public context2D?: CanvasElement;
    public currentTool: number = 1;
    public tools: Array<number> = [0, 1, 2, 3, 4, 5, 6];

    constructor(context2D: CanvasElement) {
        this.context2D = context2D;
    }

    create<T>(c: { new(): T; }): T {
        return new c();
    }

    calcTimer = () => {

    }

    initialize = () => {
        setInterval(this.calcTimer, 100);
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
            default: return new Water();
        }

    }

    changeTool(tool: number) {
        this.currentTool = tool;

        console.log("change tool to", tool);
    }

    drawMap = () => {
        this.context2D?.draw.clear("black");

        this.map.forEachParticle((x: number, y: number, element: Particle) => { if (element) { element.calculatedInCycle = false; } });
        this.map.forEachParticle(this.drawParticle);
        this.map.calc();
    }

    drawParticle = (x: number, y: number, particle: Particle) => {
        if (!this.context2D)
            throw new Error("context2D should be set");


        this.context2D.draw.fillRect(x * this.TILE_SIZE, y * this.TILE_SIZE, this.TILE_SIZE, this.TILE_SIZE, particle.primaryColor);
    }


}