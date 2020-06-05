import { __decorate, __metadata } from "tslib";
import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DefaultFilter.prototype, "query", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DefaultFilter.prototype, "inputClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Column)
    ], DefaultFilter.prototype, "column", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DefaultFilter.prototype, "filter", void 0);
    DefaultFilter = __decorate([
        Component({
            template: ''
        })
    ], DefaultFilter);
    return DefaultFilter;
}());
export { DefaultFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt0RDtJQUFBO1FBRUUsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUtWLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBV2hELENBQUM7SUFUQyxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWJRO1FBQVIsS0FBSyxFQUFFOztnREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOztxREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7a0NBQVMsTUFBTTtpREFBQztJQUNkO1FBQVQsTUFBTSxFQUFFOztpREFBcUM7SUFQbkMsYUFBYTtRQUh6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIEZpbHRlciwgT25EZXN0cm95IHtcblxuICBkZWxheTogbnVtYmVyID0gMzAwO1xuICBjaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIHF1ZXJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXIuZW1pdCh0aGlzLnF1ZXJ5KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XG5cbiAgZGVsYXk/OiBudW1iZXI7XG4gIGNoYW5nZXNTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgY29sdW1uOiBDb2x1bW47XG4gIGZpbHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz47XG59XG4iXX0=