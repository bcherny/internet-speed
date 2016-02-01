System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var TimesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TimesService = (function () {
                function TimesService(http) {
                    this.http = http;
                }
                TimesService.prototype.pollForTimes = function () {
                    Observable_1.Observable
                        .interval(60 * 1000)
                        .flatMapLatest(this.getTimes);
                };
                TimesService.prototype.getTimes = function () {
                    return this.http
                        .get('/times')
                        .map(function (_) { return _.json().data.sort(function (a, b) { return a.date < b.date; }); })
                        .catch(this.error);
                };
                TimesService.prototype.error = function (e) {
                    console.error(e);
                    return Observable_1.Observable.throw(e);
                };
                TimesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TimesService);
                return TimesService;
            })();
            exports_1("TimesService", TimesService);
        }
    }
});
//# sourceMappingURL=TimesService.js.map