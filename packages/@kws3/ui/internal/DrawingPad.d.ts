export class DrawingPad {
    /**
     * DrawingPad constructor
     * @param {{CANVAS:HTMLCanvasElement, fire:(string, object)=>void}} app
     * @param {DrawingPadOptions} opts - Parameter description.
     */
    constructor(app: {
        CANVAS: HTMLCanvasElement;
        fire: (string: any, object: any) => void;
    }, opts: DrawingPadOptions);
    app: {
        CANVAS: HTMLCanvasElement;
        fire: (string: any, object: any) => void;
    };
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    drawing: boolean;
    currentPos: {
        x: number;
        y: number;
    };
    lastPos: {
        x: number;
        y: number;
    };
    scaleFactor: number;
    drawingType: string;
    penColor: string;
    penWidth: number;
    eraserWidth: number;
    readonly: boolean;
    image: string;
    tools: import("@kws3/ui/types").DrawingTools;
    undoManager: UndoManager;
    prevState: ImageData;
    START: any;
    MOVE: any;
    END: any;
    RENDER: any;
    prevent(e: any): void;
    getPosition(e: any): {
        x: number;
        y: number;
    };
    render(): void;
    draw(): void;
    move(e: any): void;
    end(e: any): void;
    start(e: any): void;
    addHistory(): void;
    resetHistory(): void;
    getImageData(): ImageData;
    setImageData(data: any): void;
    setImage(imgSrc: any, callBackFn: any): void;
    fire(type: any): void;
    canUndo(): boolean;
    canRedo(): boolean;
    init(): void;
    is_readonly: boolean;
    imageDataUrl: string;
    syncImage(imgData: any): void;
    addEvent(): void;
    removeEvent(): void;
    undo(): void;
    redo(): void;
    reset(): void;
    setScaleFactor(f: any): void;
    setTool(toolType: any): void;
    setColor(color: any): void;
}
export namespace Pen {
    const name: string;
    const icon: string;
    function draw(instance: any): void;
}
export namespace Eraser {
    const name_1: string;
    export { name_1 as name };
    const icon_1: string;
    export { icon_1 as icon };
    export function draw_1(instance: any): void;
    export { draw_1 as draw };
}
export type DrawingPadOptions = import('@kws3/ui/types').DrawingPadOptions;
import UndoManager from "./UndoManager";
//# sourceMappingURL=DrawingPad.d.ts.map