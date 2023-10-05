export default UndoManager;
declare class UndoManager {
    commands: any[];
    index: number;
    isExecuting: boolean;
    callback: any;
    execute(command: any, action: any): this;
    add(command: any): this;
    setCallback(callbackFunc: any): void;
    undo(): this;
    redo(): this;
    clear(): void;
    hasUndo(): boolean;
    hasRedo(): boolean;
    getCommands(): any[];
}
//# sourceMappingURL=UndoManager.d.ts.map