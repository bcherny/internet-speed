System.register(['rxjs/Rx', 'angular2/platform/browser', './App'], function(exports_1) {
    var browser_1, App_1;
    return {
        setters:[
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(App_1.App);
        }
    }
});
//# sourceMappingURL=main.js.map