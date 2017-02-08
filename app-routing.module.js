System.register(['@angular/core', '@angular/router', './app.component', './Courses/courses.component', './ChooseCasino/chooseCasino.component', './BoardingPass/boardingPass.component', './Dine/dine.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_component_1, courses_component_1, chooseCasino_component_1, boardingPass_component_1, dine_component_1;
    var routes, AppRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (chooseCasino_component_1_1) {
                chooseCasino_component_1 = chooseCasino_component_1_1;
            },
            function (boardingPass_component_1_1) {
                boardingPass_component_1 = boardingPass_component_1_1;
            },
            function (dine_component_1_1) {
                dine_component_1 = dine_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'home', component: app_component_1.AppComponent },
                { path: 'cc', component: chooseCasino_component_1.ChooseCasinoComponent },
                { path: 'courses', component: courses_component_1.CoursesComponent },
                { path: 'BoardingPass', component: boardingPass_component_1.BoardingPassComponent },
                { path: 'Dine', component: dine_component_1.DineComponent }
            ];
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forRoot(routes)],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppRoutingModule);
                return AppRoutingModule;
            }());
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    }
});
//# sourceMappingURL=app-routing.module.js.map