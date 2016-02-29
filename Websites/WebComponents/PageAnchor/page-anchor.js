var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Websites;
(function (Websites) {
    var WebComponents;
    (function (WebComponents) {
        var PageAnchor = (function (_super) {
            __extends(PageAnchor, _super);
            function PageAnchor() {
                _super.apply(this, arguments);
            }
            PageAnchor.prototype._pageChanged = function (page, isAttached) {
                if (!isAttached)
                    return;
                this.textContent = page.label;
            };
            PageAnchor.prototype._computeHref = function (page) {
                return page != null ? "#" + page.name : "#";
            };
            PageAnchor.prototype._tap = function () {
                var panel = this.findParent(function (p) { return p.tagName === "PAPER-DRAWER-PANEL"; });
                if (panel != null)
                    panel.closeDrawer();
            };
            PageAnchor = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    extends: "a",
                    properties: {
                        page: Object,
                        href: {
                            type: String,
                            reflectToAttribute: true,
                            computed: "_computeHref(page)"
                        }
                    },
                    observers: [
                        "_pageChanged(page, isAttached)"
                    ],
                    listeners: {
                        "tap": "_tap"
                    }
                })
            ], PageAnchor);
            return PageAnchor;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.PageAnchor = PageAnchor;
    })(WebComponents = Websites.WebComponents || (Websites.WebComponents = {}));
})(Websites || (Websites = {}));
