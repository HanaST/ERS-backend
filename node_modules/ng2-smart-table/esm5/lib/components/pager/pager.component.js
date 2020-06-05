import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this.page = _this.source.getPaging().page;
                _this.perPage = _this.source.getPaging().perPage;
                _this.currentPerPage = _this.perPage;
                _this.count = _this.source.count();
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(dataChanges);
                _this.initPages();
            });
        }
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page: page });
        return false;
    };
    PagerComponent.prototype.next = function () {
        return this.paginate(this.getPage() + 1);
    };
    PagerComponent.prototype.prev = function () {
        return this.paginate(this.getPage() - 1);
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    PagerComponent.prototype.onChangePerPage = function (event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", DataSource)
    ], PagerComponent.prototype, "source", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PagerComponent.prototype, "perPageSelect", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PagerComponent.prototype, "changePage", void 0);
    PagerComponent = __decorate([
        Component({
            selector: 'ng2-smart-table-pager',
            template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            styles: [".ng2-smart-pagination{display:-webkit-inline-box;display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
        })
    ], PagerComponent);
    return PagerComponent;
}());
export { PagerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUE0RC9EO0lBQUE7UUFHVyxrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUV6QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU1yQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBOEc5QixDQUFDO0lBekdDLG9DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFrQkM7UUFqQkMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXO2dCQUNsRSxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxLQUFJLENB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SDFCO0lBQUQscUJBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXpIWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtcGFnZXInLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgKm5nSWY9XCJzaG91bGRTaG93KClcIiBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uLW5hdlwiPlxuICAgICAgPHVsIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24gcGFnaW5hdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IDF9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IDEgPyBmYWxzZSA6IHBhZ2luYXRlKDEpXCIgYXJpYS1sYWJlbD1cIkZpcnN0XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Rmlyc3Q8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IDF9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGluayBwYWdlLWxpbmstcHJldlwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IDEgPyBmYWxzZSA6IHByZXYoKVwiIGFyaWEtbGFiZWw9XCJQcmV2XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbHQ7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldjwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogZ2V0UGFnZSgpID09IHBhZ2V9XCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgZ2V0UGFnZXMoKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIlxuICAgICAgICAgICpuZ0lmPVwiZ2V0UGFnZSgpID09IHBhZ2VcIj57eyBwYWdlIH19IDxzcGFuIGNsYXNzPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwicGFnaW5hdGUocGFnZSlcIiAqbmdJZj1cImdldFBhZ2UoKSAhPSBwYWdlXCI+e3sgcGFnZSB9fTwvYT5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSBnZXRMYXN0KCl9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGluayBwYWdlLWxpbmstbmV4dFwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogbmV4dCgpXCIgYXJpYS1sYWJlbD1cIk5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpfVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIiBocmVmPVwiI1wiXG4gICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSBnZXRMYXN0KCkgPyBmYWxzZSA6IHBhZ2luYXRlKGdldExhc3QoKSlcIiBhcmlhLWxhYmVsPVwiTGFzdFwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxhc3Q8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICBcbiAgICA8bmF2ICpuZ0lmPVwicGVyUGFnZVNlbGVjdCAmJiBwZXJQYWdlU2VsZWN0Lmxlbmd0aCA+IDBcIiBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uLXBlci1wYWdlXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicGVyLXBhZ2VcIj5cbiAgICAgICAgUGVyIFBhZ2U6XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2hhbmdlUGVyUGFnZSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50UGVyUGFnZVwiIGlkPVwicGVyLXBhZ2VcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwZXJQYWdlU2VsZWN0XCIgW3ZhbHVlXT1cIml0ZW1cIj57eyBpdGVtIH19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L25hdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgcGVyUGFnZVNlbGVjdDogYW55W10gPSBbXTtcblxuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGN1cnJlbnRQZXJQYWdlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHBhZ2VzOiBBcnJheTxhbnk+O1xuICBwcm90ZWN0ZWQgcGFnZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY291bnQ6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBwZXJQYWdlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlO1xuICAgICAgICB0aGlzLnBlclBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5zb3VyY2UuY291bnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNQYWdlT3V0T2ZCb3VuY2UoKSkge1xuICAgICAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UoLS10aGlzLnBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUGFnZUNoYW5nZShkYXRhQ2hhbmdlcyk7XG4gICAgICAgIHRoaXMuaW5pdFBhZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2UgY2hhbmdlIHRoZSBwYWdlIGhlcmUgZGVwZW5kaW5nIG9uIHRoZSBhY3Rpb24gcGVyZm9ybWVkIGFnYWluc3QgZGF0YSBzb3VyY2VcbiAgICogaWYgYSBuZXcgZWxlbWVudCB3YXMgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGUgLSB0aGVuIGNoYW5nZSB0aGUgcGFnZSB0byB0aGUgbGFzdFxuICAgKiBpZiBhIG5ldyBlbGVtZW50IHdhcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0YWJsZSAtIHRoZW4gdG8gdGhlIGZpcnN0IHBhZ2VcbiAgICogQHBhcmFtIGNoYW5nZXNcbiAgICovXG4gIHByb2Nlc3NQYWdlQ2hhbmdlKGNoYW5nZXM6IGFueSkge1xuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ3ByZXBlbmQnKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKDEpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdhcHBlbmQnKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHRoaXMuZ2V0TGFzdCgpKTtcbiAgICB9XG4gIH1cblxuICBzaG91bGRTaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5jb3VudCgpID4gdGhpcy5wZXJQYWdlO1xuICB9XG5cbiAgcGFnaW5hdGUocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnZShwYWdlKTtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHsgcGFnZSB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpICsgMSk7XG4gIH1cblxuICBwcmV2KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpIC0gMSk7XG4gIH1cblxuICBnZXRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGdldFBhZ2VzKCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VzO1xuICB9XG5cbiAgZ2V0TGFzdCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5jb3VudCAvIHRoaXMucGVyUGFnZSk7XG4gIH1cblxuICBpc1BhZ2VPdXRPZkJvdW5jZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSkgPj0gKHRoaXMuY291bnQgKyB0aGlzLnBlclBhZ2UpICYmIHRoaXMucGFnZSA+IDE7XG4gIH1cblxuICBpbml0UGFnZXMoKSB7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IHRoaXMuZ2V0TGFzdCgpO1xuICAgIGxldCBzaG93UGFnZXNDb3VudCA9IDQ7XG4gICAgc2hvd1BhZ2VzQ291bnQgPSBwYWdlc0NvdW50IDwgc2hvd1BhZ2VzQ291bnQgPyBwYWdlc0NvdW50IDogc2hvd1BhZ2VzQ291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvdygpKSB7XG5cbiAgICAgIGxldCBtaWRkbGVPbmUgPSBNYXRoLmNlaWwoc2hvd1BhZ2VzQ291bnQgLyAyKTtcbiAgICAgIG1pZGRsZU9uZSA9IHRoaXMucGFnZSA+PSBtaWRkbGVPbmUgPyB0aGlzLnBhZ2UgOiBtaWRkbGVPbmU7XG5cbiAgICAgIGxldCBsYXN0T25lID0gbWlkZGxlT25lICsgTWF0aC5mbG9vcihzaG93UGFnZXNDb3VudCAvIDIpO1xuICAgICAgbGFzdE9uZSA9IGxhc3RPbmUgPj0gcGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBsYXN0T25lO1xuXG4gICAgICBjb25zdCBmaXJzdE9uZSA9IGxhc3RPbmUgLSBzaG93UGFnZXNDb3VudCArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdE9uZTsgaSA8PSBsYXN0T25lOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlUGVyUGFnZShldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBlclBhZ2UpIHtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRQZXJQYWdlID09PSAnc3RyaW5nJyAmJiB0aGlzLmN1cnJlbnRQZXJQYWdlLnRvTG93ZXJDYXNlKCkgPT09ICdhbGwnKSB7XG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZSA9IHRoaXMuY3VycmVudFBlclBhZ2UgKiAxO1xuICAgICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRQYWdlcygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=