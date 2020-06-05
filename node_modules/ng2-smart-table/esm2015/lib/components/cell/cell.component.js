import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
let CellComponent = class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], CellComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], CellComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], CellComponent.prototype, "editConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], CellComponent.prototype, "createConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isNew", void 0);
__decorate([
    Input(),
    __metadata("design:type", Cell)
], CellComponent.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CellComponent.prototype, "edited", void 0);
CellComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-cell',
        template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `
    })
], CellComponent);
export { CellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTdDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFBMUI7UUFRVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFTN0MsQ0FBQztJQVBDLFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7Q0FDRixDQUFBO0FBbkJVO0lBQVIsS0FBSyxFQUFFOzhCQUFPLElBQUk7MkNBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTs4QkFBTSxHQUFHOzBDQUFDO0FBQ1Q7SUFBUixLQUFLLEVBQUU7OEJBQWMsWUFBWTtrREFBTTtBQUMvQjtJQUFSLEtBQUssRUFBRTs4QkFBZ0IsWUFBWTtvREFBTTtBQUNqQztJQUFSLEtBQUssRUFBRTs7NENBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OEJBQU8sSUFBSTsyQ0FBQztBQUNYO0lBQVIsS0FBSyxFQUFFOztpREFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7OzJDQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7a0RBQThCO0FBRTVCO0lBQVQsTUFBTSxFQUFFOzs2Q0FBa0M7QUFaaEMsYUFBYTtJQVZ6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7S0FDRixDQUFDO0dBQ1csYUFBYSxDQXFCekI7U0FyQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGFibGUtY2VsbC12aWV3LW1vZGUgKm5nSWY9XCIhaXNJbkVkaXRpbmdcIiBbY2VsbF09XCJjZWxsXCI+PC90YWJsZS1jZWxsLXZpZXctbW9kZT5cbiAgICA8dGFibGUtY2VsbC1lZGl0LW1vZGUgKm5nSWY9XCJpc0luRWRpdGluZ1wiIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCI+XG4gICAgPC90YWJsZS1jZWxsLWVkaXQtbW9kZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgY3JlYXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGlzTmV3OiBib29sZWFuO1xuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2lubGluZSc7XG4gIEBJbnB1dCgpIGlzSW5FZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRWRpdGVkKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgdGhpcy5ncmlkLmNyZWF0ZSh0aGlzLmdyaWQuZ2V0TmV3Um93KCksIHRoaXMuY3JlYXRlQ29uZmlybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==