import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
var TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                CellModule,
            ],
            declarations: __spread(TBODY_COMPONENTS),
            exports: __spread(TBODY_COMPONENTS),
        })
    ], TBodyModule);
    return TBodyModule;
}());
export { TBodyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzVCLENBQUM7QUFlRjtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBYnZCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsVUFBVTthQUNYO1lBQ0QsWUFBWSxXQUNQLGdCQUFnQixDQUNwQjtZQUNELE9BQU8sV0FDRixnQkFBZ0IsQ0FDcEI7U0FDRixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQSxBQUE1QixJQUE0QjtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDZWxsTW9kdWxlIH0gZnJvbSAnLi4vY2VsbC9jZWxsLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudCB9IGZyb20gJy4vdGJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5Q3JlYXRlQ2FuY2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jcmVhdGUtY2FuY2VsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYm9keUVkaXREZWxldGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2VkaXQtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYm9keUN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY3VzdG9tLmNvbXBvbmVudCc7XG5cbmNvbnN0IFRCT0RZX0NPTVBPTkVOVFMgPSBbXG4gIFRib2R5Q3JlYXRlQ2FuY2VsQ29tcG9uZW50LFxuICBUYm9keUVkaXREZWxldGVDb21wb25lbnQsXG4gIFRib2R5Q3VzdG9tQ29tcG9uZW50LFxuICBOZzJTbWFydFRhYmxlVGJvZHlDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ2VsbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uVEJPRFlfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlRCT0RZX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRCb2R5TW9kdWxlIHsgfVxuIl19