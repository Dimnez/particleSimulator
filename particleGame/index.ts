import GUI from './src/models/GUI';
import Catyen from '@catyen/catyen';
import { KeyboardKeys } from '@catyen/catyen/dist/Features/ControlsFeature';


const canvasEngine = new Catyen("#canvas", window);
const PENCIL_WIDTH = 1;
const PENCIL_HEIGHT = 1;
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


document.querySelectorAll("#btn-save-map").forEach((element) => {
    element.addEventListener("click", (e) => {
        try {
            gui.map.exportMap(e);
        }
        catch (Exception) {
            console.error(Exception);
        }
    })
})

document.querySelectorAll("#btn-load-map").forEach((element) => {
    element.addEventListener("click", (e) => {
        try {
            gui.map.loadMap();
        }
        catch (Exception) {
            console.error(Exception);
        }
    })
})


var global_position = { x: 0, y: 0, on_map_x: 0, on_map_y: 0 };

canvasEngine.loop.requestFrame(() => {
    gui.drawMap(global_position.x, global_position.y);

    const mousePosition = {
        x: canvasEngine.controls.mouseState.clientX - offsetX,
        y: canvasEngine.controls.mouseState.clientY - offsetY
    };

    if (canvasEngine.controls.isPressed(KeyboardKeys.DOWN)) {
        global_position.y -= 1;
        global_position.on_map_y += gui.TILE_SIZE;
    }
    if (canvasEngine.controls.isPressed(KeyboardKeys.UP)) {
        global_position.y++;
        global_position.on_map_y -= gui.TILE_SIZE;
    }
    if (canvasEngine.controls.isPressed(KeyboardKeys.RIGHT)) {
        global_position.x--;

        global_position.on_map_x += gui.TILE_SIZE;
    }
    if (canvasEngine.controls.isPressed(KeyboardKeys.LEFT)) {
        global_position.x++;
        global_position.on_map_x -= gui.TILE_SIZE;
    }



    if (canvasEngine.controls.isPressed(KeyboardKeys.ENTER)) {
        gui.map.generate();
    }

    if (canvasEngine.controls.isPressed(KeyboardKeys.SPACE)) {
        gui.physicsOn = !gui.physicsOn;
    }

    if (canvasEngine.controls.mouseState.mouseDown) {

        for (var pencil_w = -PENCIL_WIDTH; pencil_w < PENCIL_WIDTH; pencil_w++) {
            for (var pencil_h = -PENCIL_HEIGHT; pencil_h < PENCIL_HEIGHT; pencil_h++) {
                gui.addParticle(global_position.on_map_x + mousePosition.x + pencil_w, global_position.on_map_y + mousePosition.y + pencil_h, 0);
            }
        }

    }

});