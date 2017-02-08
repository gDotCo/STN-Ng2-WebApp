System.register(['@angular/platform-browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var platform_browser_1;
    var HammerConfig;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            HammerConfig = (function (_super) {
                __extends(HammerConfig, _super);
                function HammerConfig() {
                    _super.apply(this, arguments);
                }
                HammerConfig.prototype.buildHammer = function (element) {
                    var mc = new Hammer(element);
                    mc.get('pinch').set({ enable: true });
                    mc.get('rotate').set({ enable: true });
                    mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));
                    for (var eventName in this.overrides) {
                        mc.get(eventName).set(this.overrides[eventName]);
                    }
                    return mc;
                };
                return HammerConfig;
            }(platform_browser_1.HammerGestureConfig));
            exports_1("HammerConfig", HammerConfig);
        }
    }
});
//# sourceMappingURL=hammer.config.js.map