System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<sideNav></sideNav><navbar></navbar><router-outlet></router-outlet>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*


 SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    avatars = [
        {
            name: 'kristy',
            image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
            visible: true
        },
        {
            name: 'matthew',
            image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
            visible: false
        },
        {
            name: 'chris',
            image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
            visible: false
        },
        {
            name: 'jenny',
            image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
            visible: false
        }
    ];

    swipe(currentIndex: number, action: number = this.SWIPE_ACTION.RIGHT) {
        console.log(currentIndex);
        if (currentIndex > this.avatars.length || currentIndex < 0) return;

        let nextIndex = 0;
        
        // next
        if (action === this.SWIPE_ACTION.RIGHT) {
            const isLast = currentIndex === this.avatars.length - 1;
            nextIndex = isLast ? 0 : currentIndex + 1;
        }

        // previous
        if (action === this.SWIPE_ACTION.LEFT) {
            const isFirst = currentIndex === 0;
            nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
        }

        // toggle avatar visibility
        this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
    }
*/ 
//# sourceMappingURL=app.component.js.map