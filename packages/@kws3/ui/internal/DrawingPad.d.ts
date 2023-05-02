export class DrawingPad {
    constructor(app: any, opts: any);
    app: any;
    canvas: any;
    context: any;
    drawing: boolean;
    currentPos: {
        x: number;
        y: number;
    };
    lastPos: {
        x: number;
        y: number;
    };
    scaleFactor: any;
    drawingType: string;
    penColor: any;
    penWidth: any;
    eraserWidth: any;
    readonly: any;
    image: any;
    tools: any;
    undoManager: UndoManager;
    prevState: any;
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
    getImageData(): any;
    setImageData(data: any): void;
    setImage(imgSrc: any, callBackFn: any): void;
    fire(type: any): void;
    canUndo(): boolean;
    canRedo(): boolean;
    init(): void;
    is_readonly: any;
    imageDataUrl: any;
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
import UndoManager from "./UndoManager";
//# sourceMappingURL=DrawingPad.d.ts.map