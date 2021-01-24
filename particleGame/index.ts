import GUI from './src/models/GUI';
import CanvasElement from '../CanvasElements/src/CanvasElements';
import { KeyboardKeys } from '../CanvasElements/src/Features/CEControlsFeature';

const canvasEngine = new CanvasElement("#canvas", window);

const gui = new GUI(canvasEngine);

gui.initialize();
canvasEngine.initialize();

const canvasDiv: HTMLCanvasElement = canvasEngine.draw.configuration.htmlCanvasElement;

if (!canvasDiv)
    throw new Error("Canvas Element (#canvas) does not exist.");

var offsetX = canvasDiv.offsetLeft;
var offsetY = canvasDiv.offsetTop;

document.querySelectorAll(".tool-changer").forEach((element) => {
    element.addEventListener("click", (e) => {
        var obj = e.target as HTMLButtonElement;
        gui.changeTool(parseInt(obj.getAttribute("data-tool")!));
    })
})

canvasEngine.loop.requestFrame(() => {
    gui.drawMap();

    const mousePosition = {
        x: canvasEngine.controls.mouseState.clientX - offsetX,
        y: canvasEngine.controls.mouseState.clientY - offsetY
    };

    //console.log(canvasEngine.controls.mouseState.clientX);


    if (canvasEngine.controls.isPressed(KeyboardKeys.ENTER)) {
        gui.map.generate();
    }

    if (canvasEngine.controls.isPressed(KeyboardKeys.SPACE)) {
        gui.physicsOn = true;
        console.log("physics on!");
    }
    else {
        gui.physicsOn = false;
    }

    if (canvasEngine.controls.mouseState.mouseDown) {
        gui.addParticle(mousePosition.x, mousePosition.y, 0);
        gui.addParticle(mousePosition.x + 1, mousePosition.y, 0);
        gui.addParticle(mousePosition.x + 1, mousePosition.y + 1, 0);
        gui.addParticle(mousePosition.x - 1, mousePosition.y - 1, 0);
        gui.addParticle(mousePosition.x, mousePosition.y + 1, 0);
    }

});