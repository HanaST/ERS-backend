import { __decorate, __metadata } from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, OnDestroy, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
let CustomViewComponent = class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
};
CustomViewComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
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
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomViewComponent);
export { CustomViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBU2xELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTTlCLFlBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVTLHFCQUFxQjtRQUM3QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNuRix1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFUyxhQUFhO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVTLFFBQVE7UUFDaEIsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7U0FDdEMsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFBOztZQXJDK0Isd0JBQXdCOztBQUg3QztJQUFSLEtBQUssRUFBRTs4QkFBTyxJQUFJO2lEQUFDO0FBQ2tEO0lBQXJFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzswREFBb0I7QUFKOUUsbUJBQW1CO0lBTi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFOztHQUVUO0tBQ0YsQ0FBQztxQ0FPOEIsd0JBQXdCO0dBTjNDLG1CQUFtQixDQTJDL0I7U0EzQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcbmltcG9ydCB7IFZpZXdDZWxsIH0gZnJvbSAnLi92aWV3LWNlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdXN0b20tdmlldy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY1RhcmdldD48L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGN1c3RvbUNvbXBvbmVudDogYW55O1xuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBAVmlld0NoaWxkKCdkeW5hbWljVGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgZHluYW1pY1RhcmdldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY2VsbCAmJiAhdGhpcy5jdXN0b21Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tQ29tcG9uZW50KCk7XG4gICAgICB0aGlzLmNhbGxPbkNvbXBvbmVudEluaXQoKTtcbiAgICAgIHRoaXMucGF0Y2hJbnN0YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDdXN0b21Db21wb25lbnQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jZWxsLmdldENvbHVtbigpLnJlbmRlckNvbXBvbmVudCk7XG4gICAgdGhpcy5jdXN0b21Db21wb25lbnQgPSB0aGlzLmR5bmFtaWNUYXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbGxPbkNvbXBvbmVudEluaXQoKSB7XG4gICAgY29uc3Qgb25Db21wb25lbnRJbml0RnVuY3Rpb24gPSB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0T25Db21wb25lbnRJbml0RnVuY3Rpb24oKTtcbiAgICBvbkNvbXBvbmVudEluaXRGdW5jdGlvbiAmJiBvbkNvbXBvbmVudEluaXRGdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGF0Y2hJbnN0YW5jZSgpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLCB0aGlzLmdldFBhdGNoKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhdGNoKCk6IFZpZXdDZWxsIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSgpLFxuICAgICAgcm93RGF0YTogdGhpcy5jZWxsLmdldFJvdygpLmdldERhdGEoKVxuICAgIH1cbiAgfVxufVxuIl19