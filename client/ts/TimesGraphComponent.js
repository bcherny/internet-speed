System.register(['angular2/core', './D3GraphComponent.ts', './TimesService.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, D3GraphComponent_ts_1, TimesService_ts_1;
    var TimesGraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (D3GraphComponent_ts_1_1) {
                D3GraphComponent_ts_1 = D3GraphComponent_ts_1_1;
            },
            function (TimesService_ts_1_1) {
                TimesService_ts_1 = TimesService_ts_1_1;
            }],
        execute: function() {
            TimesGraphComponent = (function () {
                function TimesGraphComponent(_timesService) {
                    this._timesService = _timesService;
                }
                TimesGraphComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // TODO: use Rx.interval
                    setInterval(function () {
                        _this._timesService.getTimes().subscribe(function (times) { return _this.times = times; });
                    }, 10 * 1000);
                };
                TimesGraphComponent = __decorate([
                    core_1.Component({
                        directives: [D3GraphComponent_ts_1.D3GraphComponent],
                        selector: 'times-graph',
                        template: "\n    <d3-graph [data]=\"times\"></d3-graph>\n  "
                    }), 
                    __metadata('design:paramtypes', [TimesService_ts_1.TimesService])
                ], TimesGraphComponent);
                return TimesGraphComponent;
            })();
            exports_1("TimesGraphComponent", TimesGraphComponent);
        }
    }
});
//# sourceMappingURL=TimesGraphComponent.js.map