System.register(['angular2/core', 'd3'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, d3;
    var D3GraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            D3GraphComponent = (function () {
                function D3GraphComponent(elementRef) {
                    // data;
                    this.state = {
                        data: [],
                        elementRef: null
                    };
                    this.state.elementRef = elementRef;
                }
                Object.defineProperty(D3GraphComponent.prototype, "data", {
                    get: function () {
                        return this.state.data;
                    },
                    set: function (data) {
                        if (!data) {
                            return;
                        }
                        this.state.data = data;
                        console.log('data', data);
                        var element = this.state.elementRef.nativeElement;
                        var CHART_HEGHT = element.offsetHeight;
                        var BAR_WIDTH = element.offsetWidth / data.length - 1;
                        var downs = data.map(function (a) { return a.speed_down; });
                        var x = d3.scale.linear()
                            .domain([0, downs.length])
                            .range([d3.min(downs), d3.max(downs)]);
                        var svg = d3.select(element)
                            .append('svg');
                        svg.selectAll('g')
                            .data(data)
                            .enter()
                            .append('rect')
                            .attr('y', function (d) { return CHART_HEGHT - x(d.speed_down); })
                            .attr('transform', function (_, i) { return ("translate(" + (i * BAR_WIDTH + i) + ", 0)"); })
                            .attr('height', function (d) { return ((100 * x(d.speed_down) / CHART_HEGHT - 20) + "%"); })
                            .attr('width', BAR_WIDTH);
                        svg.selectAll('g')
                            .data(data)
                            .enter()
                            .append('text')
                            .attr('x', function (_, i) { return i * BAR_WIDTH + i; })
                            .attr('y', function (d) { return CHART_HEGHT - x(d.speed_down) - 5; })
                            .text(function (d) { return d.speed_down; });
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], D3GraphComponent.prototype, "data", null);
                D3GraphComponent = __decorate([
                    core_1.Component({
                        selector: 'd3-graph',
                        template: ""
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], D3GraphComponent);
                return D3GraphComponent;
            })();
            exports_1("D3GraphComponent", D3GraphComponent);
        }
    }
});
//# sourceMappingURL=D3GraphComponent.js.map