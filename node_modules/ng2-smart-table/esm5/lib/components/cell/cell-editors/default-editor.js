import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
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
    return DefaultEditor;
}());
export { DefaultEditor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLbEQ7SUFBQTtRQUlZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM5QyxDQUFDO0lBTlU7UUFBUixLQUFLLEVBQUU7a0NBQU8sSUFBSTsrQ0FBQztJQUNYO1FBQVIsS0FBSyxFQUFFOztxREFBb0I7SUFFbEI7UUFBVCxNQUFNLEVBQUU7O3dEQUF5QztJQUN4QztRQUFULE1BQU0sRUFBRTs7bURBQW9DO0lBQ25DO1FBQVQsTUFBTSxFQUFFOztrREFBbUM7SUFOakMsYUFBYTtRQUh6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIEVkaXRvciB7XG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgb25TdG9wRWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25FZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3Ige1xuICBjZWxsOiBDZWxsO1xuICBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIG9uU3RvcEVkaXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBvbkVkaXRlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xufVxuIl19