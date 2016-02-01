System.register(['angular2/core', 'angular2/http', './TimesGraphComponent', './TimesService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, TimesGraphComponent_1, TimesService_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (TimesGraphComponent_1_1) {
                TimesGraphComponent_1 = TimesGraphComponent_1_1;
            },
            function (TimesService_1_1) {
                TimesService_1 = TimesService_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    // Declaring the variable for binding with initial value
                    this.yourName = '';
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'internet-speed',
                        template: "\n    <times-graph></times-graph>\n  ",
                        directives: [
                            TimesGraphComponent_1.TimesGraphComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            TimesService_1.TimesService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=App.js.map