System.register(['@angular/core', '@angular/platform-browser', './app.component', './Navbar/navbar.component', './SideNav/sideNav.component', './Courses/courses.component', './ChooseCasino/chooseCasino.component', './BoardingPass/boardingPass.component', './Dine/dine.component', './app-routing.module'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, navbar_component_1, sideNav_component_1, courses_component_1, chooseCasino_component_1, boardingPass_component_1, dine_component_1, app_routing_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (sideNav_component_1_1) {
                sideNav_component_1 = sideNav_component_1_1;
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
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_module_1.AppRoutingModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            navbar_component_1.NavbarComponent,
                            sideNav_component_1.SideNavComponent,
                            courses_component_1.CoursesComponent,
                            chooseCasino_component_1.ChooseCasinoComponent,
                            boardingPass_component_1.BoardingPassComponent,
                            dine_component_1.DineComponent
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map