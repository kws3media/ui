export default UndoManager;
declare class UndoManager {
    commands: any[];
    index: number;
    isExecuting: boolean;
    callback: any;
    execute(command: any, action: any): UndoManager;
    add(command: any): UndoManager;
    setCallback(callbackFunc: any): void;
    undo(): UndoManager;
    redo(): UndoManager;
    clear(): void;
    hasUndo(): boolean;
    hasRedo(): boolean;
    getCommands(): any[];
}
//# sourceMappingURL=UndoManager.d.ts.map