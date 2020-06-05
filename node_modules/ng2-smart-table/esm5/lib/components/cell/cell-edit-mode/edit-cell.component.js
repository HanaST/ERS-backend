import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var EditCellComponent = /** @class */ (function () {
    function EditCellComponent() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    EditCellComponent.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    __decorate([
        Input(),
        __metadata("design:type", Cell)
    ], EditCellComponent.prototype, "cell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EditCellComponent.prototype, "inputClass", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EditCellComponent.prototype, "edited", void 0);
    EditCellComponent = __decorate([
        Component({
            selector: 'table-cell-edit-mode',
            template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
        })
    ], EditCellComponent);
    return EditCellComponent;
}());
export { EditCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFtQmxEO0lBQUE7UUFHVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBVTdDLENBQUM7SUFSQyxvQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0UsQ0FBQztJQVpRO1FBQVIsS0FBSyxFQUFFO2tDQUFPLElBQUk7bURBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTs7eURBQXlCO0lBRXZCO1FBQVQsTUFBTSxFQUFFOztxREFBa0M7SUFMaEMsaUJBQWlCO1FBakI3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSx3bUJBYVA7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLWVkaXQtbW9kZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJnZXRFZGl0b3JUeXBlKClcIj5cbiAgICAgICAgPHRhYmxlLWNlbGwtY3VzdG9tLWVkaXRvciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgICAgICA8L3RhYmxlLWNlbGwtY3VzdG9tLWVkaXRvcj5cbiAgICAgICAgPHRhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3IgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgICAgICA8L3RhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3I+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0Q2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRWRpdGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICB0aGlzLmVkaXRlZC5uZXh0KGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFZGl0b3JUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci50eXBlO1xuICB9XG59XG4iXX0=