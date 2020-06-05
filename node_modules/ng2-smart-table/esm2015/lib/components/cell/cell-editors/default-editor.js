import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
let DefaultEditor = class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Cell)
], DefaultEditor.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultEditor.prototype, "inputClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onStopEditing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onEdited", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onClick", void 0);
DefaultEditor = __decorate([
    Component({
        template: ''
    })
], DefaultEditor);
export { DefaultEditor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLbEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUExQjtRQUlZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM5QyxDQUFDO0NBQUEsQ0FBQTtBQU5VO0lBQVIsS0FBSyxFQUFFOzhCQUFPLElBQUk7MkNBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTs7aURBQW9CO0FBRWxCO0lBQVQsTUFBTSxFQUFFOztvREFBeUM7QUFDeEM7SUFBVCxNQUFNLEVBQUU7OytDQUFvQztBQUNuQztJQUFULE1BQU0sRUFBRTs7OENBQW1DO0FBTmpDLGFBQWE7SUFIekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1csYUFBYSxDQU96QjtTQVBZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgRWRpdG9yIHtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvblN0b3BFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvciB7XG4gIGNlbGw6IENlbGw7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgb25TdG9wRWRpdGluZzogRXZlbnRFbWl0dGVyPGFueT47XG4gIG9uRWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XG59XG4iXX0=