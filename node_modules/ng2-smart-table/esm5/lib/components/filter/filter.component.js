import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
var FilterComponent = /** @class */ (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.query = '';
        return _this;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent = __decorate([
        Component({
            selector: 'ng2-smart-table-filter',
            template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
        })
    ], FilterComponent);
    return FilterComponent;
}(FilterDefault));
export { FilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF5QmpEO0lBQXFDLG1DQUFhO0lBQWxEO1FBQUEscUVBMEJDO1FBekJDLFdBQUssR0FBVyxFQUFFLENBQUM7O0lBeUJyQixDQUFDO0lBdEJDLHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFxQkM7UUFwQkMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXO2dCQUNsRSxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdkUsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBRWhCLGtGQUFrRjtvQkFDbEYsc0dBQXNHO2lCQUN2RztxQkFBTSxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTt3QkFDeEMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFOzRCQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUF6QlUsZUFBZTtRQXRCM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUVsQyxRQUFRLEVBQUUsdTBCQWlCUDs7U0FDSixDQUFDO09BQ1csZUFBZSxDQTBCM0I7SUFBRCxzQkFBQztDQUFBLEFBMUJELENBQXFDLGFBQWEsR0EwQmpEO1NBMUJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyRGVmYXVsdCB9IGZyb20gJy4vZmlsdGVyLWRlZmF1bHQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1maWx0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtZmlsdGVyXCIgKm5nSWY9XCJjb2x1bW4uaXNGaWx0ZXJhYmxlXCIgW25nU3dpdGNoXT1cImNvbHVtbi5nZXRGaWx0ZXJUeXBlKClcIj5cbiAgICAgICAgPGN1c3RvbS10YWJsZS1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgICAgPC9jdXN0b20tdGFibGUtZmlsdGVyPlxuICAgICAgICA8ZGVmYXVsdC10YWJsZS1maWx0ZXIgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgIDwvZGVmYXVsdC10YWJsZS1maWx0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBGaWx0ZXJEZWZhdWx0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcXVlcnk6IHN0cmluZyA9ICcnO1xuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckNvbmYgPSB0aGlzLnNvdXJjZS5nZXRGaWx0ZXIoKTtcbiAgICAgICAgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XG5cbiAgICAgICAgICAvLyBhZGQgYSBjaGVjayBmb3IgZXhpc3RpbmcgZmlsdGVycyBhbiBzZXQgdGhlIHF1ZXJ5IGlmIG9uZSBleGlzdHMgZm9yIHRoaXMgY29sdW1uXG4gICAgICAgICAgLy8gdGhpcyBjb3ZlcnMgaW5zdGFuY2VzIHdoZXJlIHRoZSBmaWx0ZXIgaXMgc2V0IGJ5IHVzZXIgY29kZSB3aGlsZSBtYWludGFpbmluZyBleGlzdGluZyBmdW5jdGlvbmFsaXR5XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyQ29uZiAmJiBmaWx0ZXJDb25mLmZpbHRlcnMgJiYgZmlsdGVyQ29uZi5maWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmaWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoazogYW55LCB2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChrLmZpZWxkID09IHRoaXMuY29sdW1uLmlkKSB7XG4gICAgICAgICAgICAgIHRoaXMucXVlcnkgPSBrLnNlYXJjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=