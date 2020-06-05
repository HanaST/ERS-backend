import { __decorate, __metadata } from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, OnDestroy, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    };
    CustomViewComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Cell)
    ], CustomViewComponent.prototype, "cell", void 0);
    __decorate([
        ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
        __metadata("design:type", Object)
    ], CustomViewComponent.prototype, "dynamicTarget", void 0);
    CustomViewComponent = __decorate([
        Component({
            selector: 'custom-view-component',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], CustomViewComponent);
    return CustomViewComponent;
}());
export { CustomViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBU2xEO0lBTUUsNkJBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQ3RELENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVTLG1EQUFxQixHQUEvQjtRQUNFLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRVMsaURBQW1CLEdBQTdCO1FBQ0UsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbkYsdUJBQXVCLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRVMsMkNBQWEsR0FBdkI7UUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFUyxzQ0FBUSxHQUFsQjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO1NBQ3RDLENBQUE7SUFDSCxDQUFDOztnQkFwQzZCLHdCQUF3Qjs7SUFIN0M7UUFBUixLQUFLLEVBQUU7a0NBQU8sSUFBSTtxREFBQztJQUNrRDtRQUFyRSxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OERBQW9CO0lBSjlFLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxzREFFVDtTQUNGLENBQUM7eUNBTzhCLHdCQUF3QjtPQU4zQyxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuaW1wb3J0IHsgVmlld0NlbGwgfSBmcm9tICcuL3ZpZXctY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbS12aWV3LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkeW5hbWljVGFyZ2V0PjwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY3VzdG9tQ29tcG9uZW50OiBhbnk7XG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jcmVhdGVDdXN0b21Db21wb25lbnQoKTtcbiAgICAgIHRoaXMuY2FsbE9uQ29tcG9uZW50SW5pdCgpO1xuICAgICAgdGhpcy5wYXRjaEluc3RhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkucmVuZGVyQ29tcG9uZW50KTtcbiAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9uQ29tcG9uZW50SW5pdCgpIHtcbiAgICBjb25zdCBvbkNvbXBvbmVudEluaXRGdW5jdGlvbiA9IHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRPbkNvbXBvbmVudEluaXRGdW5jdGlvbigpO1xuICAgIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uICYmIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXRjaEluc3RhbmNlKCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UsIHRoaXMuZ2V0UGF0Y2goKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGF0Y2goKTogVmlld0NlbGwge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKCksXG4gICAgICByb3dEYXRhOiB0aGlzLmNlbGwuZ2V0Um93KCkuZ2V0RGF0YSgpXG4gICAgfVxuICB9XG59XG4iXX0=