(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular2-disqus/lib/disqus-thread.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular2-disqus/lib/disqus-thread.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var DisqusThreadComponent = (function () {
    function DisqusThreadComponent() {
    }
    DisqusThreadComponent.prototype.ngOnChanges = function (changes) {
        var pageIdentifier = (changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) ? changes['pageIdentifier'].currentValue : this.pageIdentifier;
        var pageUrl = (changes['pageUrl'] && changes['pageUrl'].currentValue) ? changes['pageUrl'].currentValue : this.pageUrl;
        var pageTitle = (changes['pageTitle'] && changes['pageTitle'].currentValue) ? changes['pageTitle'].currentValue : this.pageTitle;
        var pageCategoryId = (changes['pageCategoryId'] && changes['pageCategoryId'].currentValue) ? changes['pageCategoryId'].currentValue : this.pageCategoryId;
        var pageLanguage = (changes['pageLanguage'] && changes['pageLanguage'].currentValue) ? changes['pageLanguage'].currentValue : this.pageLanguage;
        if (pageIdentifier && pageUrl) {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = pageIdentifier;
                    this.page.url = pageUrl;
                    this.page.title = pageTitle;
                    this.page.category_id = pageCategoryId;
                    this.language = pageLanguage;
                }
            });
        }
    };
    return DisqusThreadComponent;
}());
DisqusThreadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'disqus-thread',
                template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
            },] },
];
/** @nocollapse */
DisqusThreadComponent.ctorParameters = function () { return []; };
DisqusThreadComponent.propDecorators = {
    'pageIdentifier': [{ type: core_1.Input, args: ['page-identifier',] },],
    'pageUrl': [{ type: core_1.Input, args: ['page-url',] },],
    'pageTitle': [{ type: core_1.Input, args: ['page-title',] },],
    'pageCategoryId': [{ type: core_1.Input, args: ['page-category-id',] },],
    'pageLanguage': [{ type: core_1.Input, args: ['page-language',] },],
};
exports.DisqusThreadComponent = DisqusThreadComponent;
//# sourceMappingURL=disqus-thread.component.js.map

/***/ }),

/***/ "./node_modules/angular2-disqus/lib/disqus-thread.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular2-disqus/lib/disqus-thread.component.ngfactory.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./disqus-thread.component */ "./node_modules/angular2-disqus/lib/disqus-thread.component.js");
var styles_DisqusThreadComponent = [];
var RenderType_DisqusThreadComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_DisqusThreadComponent, data: {} });
exports.RenderType_DisqusThreadComponent = RenderType_DisqusThreadComponent;
function View_DisqusThreadComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["id", "disqus_thread"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "a", [["class", "dsq-brlink"], ["href", "http://disqus.com"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["comments powered by "])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "span", [["class", "logo-disqus"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Disqus"]))], null, null); }
exports.View_DisqusThreadComponent_0 = View_DisqusThreadComponent_0;
function View_DisqusThreadComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "disqus-thread", [], null, null, null, View_DisqusThreadComponent_0, RenderType_DisqusThreadComponent)), i0.ɵdid(1, 573440, null, 0, i1.DisqusThreadComponent, [], null, null)], null, null); }
exports.View_DisqusThreadComponent_Host_0 = View_DisqusThreadComponent_Host_0;
var DisqusThreadComponentNgFactory = i0.ɵccf("disqus-thread", i1.DisqusThreadComponent, View_DisqusThreadComponent_Host_0, { pageIdentifier: "page-identifier", pageUrl: "page-url", pageTitle: "page-title", pageCategoryId: "page-category-id", pageLanguage: "page-language" }, {}, []);
exports.DisqusThreadComponentNgFactory = DisqusThreadComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.css.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/about/about.component.sass.shim.ngstyle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/about/about.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/about/about.component.ngfactory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./about.component.sass.shim.ngstyle */ "./src/app/about/about.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var i3 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_AboutComponent = [i0.styles];
var RenderType_AboutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AboutComponent, data: {} });
exports.RenderType_AboutComponent = RenderType_AboutComponent;
function View_AboutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" about works!\n"]))], null, null); }
exports.View_AboutComponent_0 = View_AboutComponent_0;
function View_AboutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), i1.ɵdid(1, 114688, null, 0, i2.AboutComponent, [i3.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AboutComponent_Host_0 = View_AboutComponent_Host_0;
var AboutComponentNgFactory = i1.ɵccf("app-about", i2.AboutComponent, View_AboutComponent_Host_0, {}, {}, []);
exports.AboutComponentNgFactory = AboutComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(meta) {
        this.meta = meta;
        this.updateMetaTags();
    }
    AboutComponent.prototype.updateMetaTags = function () {
        console.log('ahaha');
        this.meta.updateTag({ property: 'og:title', content: 'About Title' });
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var about_component_1 = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var contacts_component_1 = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
var topics_resolver_1 = __webpack_require__(/*! ./services/topics-resolver/topics-resolver */ "./src/app/services/topics-resolver/topics-resolver.ts");
var topics_component_1 = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
var topic_page_component_1 = __webpack_require__(/*! ./topic-page/topic-page.component */ "./src/app/topic-page/topic-page.component.ts");
var routes = [
    { path: '', component: topics_component_1.TopicsComponent, resolve: { topics: topics_resolver_1.TopicsResolver }, pathMatch: 'full' },
    { path: 'topics', component: topics_component_1.TopicsComponent, resolve: { topics: topics_resolver_1.TopicsResolver } },
    { path: 'topics/:topicId', component: topic_page_component_1.TopicPageComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.sass.shim.ngstyle */ "./src/app/app.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./sidebar/sidebar.component.ngfactory */ "./src/app/sidebar/sidebar.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "hidden-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "app-sidebar", [], null, null, null, i2.View_SidebarComponent_0, i2.RenderType_SidebarComponent)), i1.ɵdid(2, 114688, null, 0, i3.SidebarComponent, [], null, null), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "main-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(5, 212992, null, 0, i4.RouterOutlet, [i4.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 5, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i5.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i5.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.sass.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.sass.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".sb-group[_ngcontent-%COMP%], .sb-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: flex-start; }\n.sb-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap; }\n.sb-button[_ngcontent-%COMP%] {\n  margin: 0.3125em; }\n\n.sb-wrapper[_ngcontent-%COMP%] {\n  font-size: inherit;\n  cursor: pointer;\n  position: relative;\n  outline: 0;\n  min-width: 4.125em;\n  height: 2.5em;\n  border: none;\n  border-radius: 1px;\n  padding: 0;\n  line-height: 2.571em;\n  background-color: transparent; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    width: 100%;\n    height: 100%; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    width: 100%; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    padding: 0 0.7em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    flex: 1;\n    height: 100%;\n    white-space: nowrap; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    font-size: 1.2em;\n    min-width: 2em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n    padding: 0 0.7em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    font-weight: bold; }\n\n.sb-show-text[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  width: 2em; }\n\n.sb-show-count[_ngcontent-%COMP%] {\n  min-width: 5.333em; }\n\nexpand-button[_ngcontent-%COMP%] {\n  display: inherit; }\n\n\n\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: var(--button-color) !important; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-facebook[_ngcontent-%COMP%] {\n    background-color: #4267B2; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-twitter[_ngcontent-%COMP%] {\n    background-color: #00acee; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-google[_ngcontent-%COMP%] {\n    background-color: #db4437; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-stumble[_ngcontent-%COMP%] {\n    background-color: #eb4924; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-linkedin[_ngcontent-%COMP%] {\n    background-color: #006fa6; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-pinterest[_ngcontent-%COMP%] {\n    background-color: #bd081c; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-reddit[_ngcontent-%COMP%] {\n    background-color: #ff4006; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-tumblr[_ngcontent-%COMP%] {\n    background-color: #36465d; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-whatsapp[_ngcontent-%COMP%] {\n    background-color: #25d366; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-messenger[_ngcontent-%COMP%] {\n    background-color: #0080FF; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-telegram[_ngcontent-%COMP%] {\n    background-color: #0088cc; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-xing[_ngcontent-%COMP%] {\n    background-color: #006567; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-sms[_ngcontent-%COMP%] {\n    background-color: #20c16c; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-email[_ngcontent-%COMP%] {\n    background-color: #FF961C; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-vk[_ngcontent-%COMP%] {\n    background-color: #4C75A3; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-copy[_ngcontent-%COMP%] {\n    background-color: #607D8B; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-print[_ngcontent-%COMP%] {\n    background-color: #765AA2; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-expand[_ngcontent-%COMP%] {\n    background-color: #FF6651; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-icon.sb-show-text[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    -webkit-filter: none;\n            filter: none;\n    padding-right: 1em;\n    padding-left: 0; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-icon.sb-show-count[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    padding-right: 1em;\n    padding-left: 0; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-text.sb-show-count[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    padding-right: 0.5em; }\n.main-container[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  width: 80%; }\n@media (max-width: 768px) {\n    .main-container[_ngcontent-%COMP%] {\n      margin-left: 0;\n      width: 100%; } }\n@media (max-width: 768px) {\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ./topics/topics.component.ngfactory */ "./src/app/topics/topics.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./topic-page/topic-page.component.ngfactory */ "./src/app/topic-page/topic-page.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./about/about.component.ngfactory */ "./src/app/about/about.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./contacts/contacts.component.ngfactory */ "./src/app/contacts/contacts.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i8 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i10 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i11 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i12 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i13 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i14 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i15 = __webpack_require__(/*! @ngx-share/core */ "@ngx-share/core");
var i16 = __webpack_require__(/*! ./services/topics/topics.service */ "./src/app/services/topics/topics.service.ts");
var i17 = __webpack_require__(/*! ./services/topics-resolver/topics-resolver */ "./src/app/services/topics-resolver/topics-resolver.ts");
var i18 = __webpack_require__(/*! ./services/topic-page-resolver/topic-page-resolver */ "./src/app/services/topic-page-resolver/topic-page-resolver.ts");
var i19 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i20 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i21 = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
var i22 = __webpack_require__(/*! ./topic-page/topic-page.component */ "./src/app/topic-page/topic-page.component.ts");
var i23 = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var i24 = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
var i25 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i26 = __webpack_require__(/*! angular2-disqus */ "angular2-disqus");
var i27 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.TopicsComponentNgFactory, i4.TopicPageComponentNgFactory, i5.AboutComponentNgFactory, i6.ContactsComponentNgFactory, i7.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i8.NgLocalization, i8.NgLocaleLocalization, [i0.LOCALE_ID, [2, i8.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i9.DomSanitizer, i9.ɵangular_packages_platform_browser_platform_browser_e, [i8.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i9.DomSanitizer]), i0.ɵmpd(4608, i9.HAMMER_GESTURE_CONFIG, i9.HammerGestureConfig, []), i0.ɵmpd(5120, i9.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i9.ɵDomEventsPlugin(p0_0, p0_1), new i9.ɵKeyEventsPlugin(p1_0), new i9.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i8.DOCUMENT, i0.NgZone, i8.DOCUMENT, i8.DOCUMENT, i9.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i9.EventManager, i9.EventManager, [i9.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i9.ɵDomSharedStylesHost, i9.ɵDomSharedStylesHost, [i8.DOCUMENT]), i0.ɵmpd(4608, i9.ɵDomRendererFactory2, i9.ɵDomRendererFactory2, [i9.EventManager, i9.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i10.ɵangular_packages_platform_server_platform_server_c, i10.ɵangular_packages_platform_server_platform_server_c, [i9.DOCUMENT, [2, i9.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i9.ɵSharedStylesHost, null, [i10.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i10.ɵServerRendererFactory2, i10.ɵServerRendererFactory2, [i0.NgZone, i9.DOCUMENT, i9.ɵSharedStylesHost]), i0.ɵmpd(4608, i11.AnimationDriver, i11.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i11.ɵAnimationStyleNormalizer, i12.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i11.ɵAnimationEngine, i12.ɵangular_packages_platform_browser_animations_animations_a, [i11.AnimationDriver, i11.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i10.ɵangular_packages_platform_server_platform_server_a, [i10.ɵServerRendererFactory2, i11.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i9.Meta, i9.Meta, [i8.DOCUMENT]), i0.ɵmpd(4608, i9.Title, i9.Title, [i8.DOCUMENT]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵangular_packages_router_router_f, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵangular_packages_router_router_i, [i13.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i14.HttpXsrfTokenExtractor, i14.ɵangular_packages_common_http_http_h, [i8.DOCUMENT, i0.PLATFORM_ID, i14.ɵangular_packages_common_http_http_f]), i0.ɵmpd(4608, i14.ɵangular_packages_common_http_http_i, i14.ɵangular_packages_common_http_http_i, [i14.HttpXsrfTokenExtractor, i14.ɵangular_packages_common_http_http_g]), i0.ɵmpd(5120, i14.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i14.ɵangular_packages_common_http_http_i]), i0.ɵmpd(4608, i14.XhrFactory, i10.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i14.HttpXhrBackend, i14.HttpXhrBackend, [i14.XhrFactory]), i0.ɵmpd(6144, i14.HttpBackend, null, [i14.HttpXhrBackend]), i0.ɵmpd(5120, i14.HttpHandler, i10.ɵangular_packages_platform_server_platform_server_g, [i14.HttpBackend, [2, i14.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i14.HttpClient, i14.HttpClient, [i14.HttpHandler]), i0.ɵmpd(4608, i14.ɵangular_packages_common_http_http_e, i14.ɵangular_packages_common_http_http_e, []), i0.ɵmpd(4608, i9.TransferState, i9.TransferState, []), i0.ɵmpd(5120, i15.ShareButtons, i15.ShareButtonsFactory, [i15.CONFIG]), i0.ɵmpd(4608, i16.TopicsService, i16.TopicsService, [i14.HttpClient]), i0.ɵmpd(4608, i17.TopicsResolver, i17.TopicsResolver, [i16.TopicsService, i0.PLATFORM_ID, i9.TransferState]), i0.ɵmpd(4608, i18.TopicPageResolver, i18.TopicPageResolver, [i16.TopicsService, i0.PLATFORM_ID, i9.TransferState]), i0.ɵmpd(4608, i19.BrowserXhr, i10.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i19.ResponseOptions, i19.BaseResponseOptions, []), i0.ɵmpd(4608, i19.XSRFStrategy, i10.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i19.XHRBackend, i19.XHRBackend, [i19.BrowserXhr, i19.ResponseOptions, i19.XSRFStrategy]), i0.ɵmpd(4608, i19.RequestOptions, i19.BaseRequestOptions, []), i0.ɵmpd(5120, i19.Http, i10.ɵangular_packages_platform_server_platform_server_f, [i19.XHRBackend, i19.RequestOptions]), i0.ɵmpd(4608, i20.AnimationBuilder, i12.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i9.DOCUMENT]), i0.ɵmpd(5120, i10.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i10.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i9.DOCUMENT, i0.APP_ID, i9.TransferState]), i0.ɵmpd(1073742336, i8.CommonModule, i8.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i9.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i13.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i13.ɵangular_packages_router_router_g, i13.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "serverApp", []), i0.ɵmpd(2048, i9.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i9.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i13.ɵangular_packages_router_router_h(p1_0), i9.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i13.ɵangular_packages_router_router_g, i9.ɵTRANSITION_ID, i8.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i9.BrowserModule, i9.BrowserModule, [[3, i9.BrowserModule]]), i0.ɵmpd(1024, i13.ɵangular_packages_router_router_a, i13.ɵangular_packages_router_router_d, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i8.LocationStrategy, i13.ɵangular_packages_router_router_c, [i8.PlatformLocation, [2, i8.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i8.Location, i8.Location, [i8.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i13.ROUTES, function () { return [[{ path: "", component: i21.TopicsComponent, resolve: { topics: i17.TopicsResolver }, pathMatch: "full" }, { path: "topics", component: i21.TopicsComponent, resolve: { topics: i17.TopicsResolver } }, { path: "topics/:topicId", component: i22.TopicPageComponent }, { path: "about", component: i23.AboutComponent }, { path: "contacts", component: i24.ContactsComponent }]]; }, []), i0.ɵmpd(1024, i13.Router, i13.ɵangular_packages_router_router_e, [i0.ApplicationRef, i13.UrlSerializer, i13.ChildrenOutletContexts, i8.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy], [2, i13.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i13.RouterModule, i13.RouterModule, [[2, i13.ɵangular_packages_router_router_a], [2, i13.Router]]), i0.ɵmpd(1073742336, i25.AppRoutingModule, i25.AppRoutingModule, []), i0.ɵmpd(1073742336, i14.HttpClientXsrfModule, i14.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i14.HttpClientModule, i14.HttpClientModule, []), i0.ɵmpd(1073742336, i9.BrowserTransferStateModule, i9.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i26.DisqusModule, i26.DisqusModule, []), i0.ɵmpd(1073742336, i15.ShareModule, i15.ShareModule, []), i0.ɵmpd(1073742336, i27.AppModule, i27.AppModule, []), i0.ɵmpd(1073742336, i19.HttpModule, i19.HttpModule, []), i0.ɵmpd(1073742336, i12.NoopAnimationsModule, i12.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i10.ServerModule, i10.ServerModule, []), i0.ɵmpd(1073742336, i10.ServerTransferStateModule, i10.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i14.ɵangular_packages_common_http_http_f, "XSRF-TOKEN", []), i0.ɵmpd(256, i14.ɵangular_packages_common_http_http_g, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i15.CONFIG, undefined, []), i0.ɵmpd(256, i12.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/contacts/contacts.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contacts.component.sass.shim.ngstyle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/contacts/contacts.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/contacts/contacts.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contacts.component.sass.shim.ngstyle */ "./src/app/contacts/contacts.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./contacts.component */ "./src/app/contacts/contacts.component.ts");
var i3 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_ContactsComponent = [i0.styles];
var RenderType_ContactsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactsComponent, data: {} });
exports.RenderType_ContactsComponent = RenderType_ContactsComponent;
function View_ContactsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" contacts works!\n"]))], null, null); }
exports.View_ContactsComponent_0 = View_ContactsComponent_0;
function View_ContactsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contacts", [], null, null, null, View_ContactsComponent_0, RenderType_ContactsComponent)), i1.ɵdid(1, 114688, null, 0, i2.ContactsComponent, [i3.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactsComponent_Host_0 = View_ContactsComponent_Host_0;
var ContactsComponentNgFactory = i1.ɵccf("app-contacts", i2.ContactsComponent, View_ContactsComponent_Host_0, {}, {}, []);
exports.ContactsComponentNgFactory = ContactsComponentNgFactory;


/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(meta) {
        this.meta = meta;
        this.updateMetaTags();
    }
    ContactsComponent.prototype.updateMetaTags = function () {
        console.log('ahaha con');
        this.meta.updateTag({ property: 'og:title', content: 'Contacts Title' });
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;


/***/ }),

/***/ "./src/app/services/topic-page-resolver/topic-page-resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/topic-page-resolver/topic-page-resolver.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var topics_service_1 = __webpack_require__(/*! ../topics/topics.service */ "./src/app/services/topics/topics.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/internal/operators */ "rxjs/internal/operators");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../topics/topics.service */ "./src/app/services/topics/topics.service.ts");
var i2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var TopicPageResolver = /** @class */ (function () {
    function TopicPageResolver(topicsService, platformId, transferState) {
        this.topicsService = topicsService;
        this.platformId = platformId;
        this.transferState = transferState;
    }
    TopicPageResolver.prototype.resolve = function (route, state) {
        var _this = this;
        console.log(route.params);
        var topicId = route.params['topicId'];
        var TOPIC_KEY = platform_browser_1.makeStateKey('course-' + topicId);
        if (this.transferState.hasKey(TOPIC_KEY)) {
            var topic = this.transferState.get(TOPIC_KEY, null);
            this.transferState.remove(TOPIC_KEY);
            return rxjs_1.of(topic);
        }
        else {
            return this.topicsService.getTopic(topicId)
                .pipe(operators_1.tap(function (topic) {
                console.log(topic);
                if (common_1.isPlatformServer(_this.platformId)) {
                    _this.transferState.set(TOPIC_KEY, topic);
                }
            }));
        }
    };
    TopicPageResolver.ngInjectableDef = i0.defineInjectable({ factory: function TopicPageResolver_Factory() { return new TopicPageResolver(i0.inject(i1.TopicsService), i0.inject(i0.PLATFORM_ID), i0.inject(i2.TransferState)); }, token: TopicPageResolver, providedIn: "root" });
    return TopicPageResolver;
}());
exports.TopicPageResolver = TopicPageResolver;


/***/ }),

/***/ "./src/app/services/topics-resolver/topics-resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/topics-resolver/topics-resolver.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var topics_service_1 = __webpack_require__(/*! ../topics/topics.service */ "./src/app/services/topics/topics.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var TopicsResolver = /** @class */ (function () {
    function TopicsResolver(topicsService, platformId, transferState) {
        this.topicsService = topicsService;
        this.platformId = platformId;
        this.transferState = transferState;
    }
    TopicsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var COURSE_KEY = platform_browser_1.makeStateKey('topics');
        if (this.transferState.hasKey(COURSE_KEY)) {
            var topics = this.transferState.get(COURSE_KEY, null);
            this.transferState.remove(COURSE_KEY);
            return rxjs_1.of(topics);
        }
        else {
            return this.topicsService.getTopics()
                .pipe(operators_1.first(), operators_1.tap(function (topics) {
                if (common_1.isPlatformServer(_this.platformId)) {
                    _this.transferState.set(COURSE_KEY, topics);
                }
            }));
        }
    };
    return TopicsResolver;
}());
exports.TopicsResolver = TopicsResolver;


/***/ }),

/***/ "./src/app/services/topics/topics.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/topics/topics.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var apiUrl = environment_1.environment.apiBase;
var TopicsService = /** @class */ (function () {
    function TopicsService(http) {
        this.http = http;
    }
    TopicsService.prototype.getTopics = function () {
        return this.http.get(apiUrl + '/api/v1/topics');
    };
    TopicsService.prototype.getTopic = function (topicId) {
        return this.http.get(apiUrl + '/api/v1/topics/' + topicId);
    };
    TopicsService.prototype.createTopic = function (data) {
        return this.http.post(apiUrl + '/api/v1/topics', data, httpOptions);
    };
    return TopicsService;
}());
exports.TopicsService = TopicsService;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./sidebar.component.sass.shim.ngstyle */ "./src/app/sidebar/sidebar.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var styles_SidebarComponent = [i0.styles];
var RenderType_SidebarComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SidebarComponent, data: {} });
exports.RenderType_SidebarComponent = RenderType_SidebarComponent;
function View_SidebarComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 19, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 18, "div", [["class", "sidebar d-none d-sm-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "div", [["class", "logo-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(5, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(6, 1), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [["alt", "Logo"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 11, "div", [["class", "sidebar-list text-left"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 10, "div", [["class", "info-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(11, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(12, 1), (_l()(), i1.ɵeld(13, 0, null, null, 1, "div", [["class", "div-container animation"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u041E \u043D\u0430\u0441 "])), (_l()(), i1.ɵeld(15, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(16, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(17, 1), (_l()(), i1.ɵeld(18, 0, null, null, 1, "div", [["class", "div-container"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B "]))], function (_ck, _v) { var currVal_2 = _ck(_v, 6, 0, "/topics"); _ck(_v, 5, 0, currVal_2); var currVal_6 = _ck(_v, 12, 0, "/about/"); _ck(_v, 11, 0, currVal_6); var currVal_9 = _ck(_v, 17, 0, "/contacts"); _ck(_v, 16, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 5).target; var currVal_1 = i1.ɵnov(_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _co.logo, ""); _ck(_v, 7, 0, currVal_3); var currVal_4 = i1.ɵnov(_v, 11).target; var currVal_5 = i1.ɵnov(_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_7 = i1.ɵnov(_v, 16).target; var currVal_8 = i1.ɵnov(_v, 16).href; _ck(_v, 15, 0, currVal_7, currVal_8); }); }
exports.View_SidebarComponent_0 = View_SidebarComponent_0;
function View_SidebarComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-sidebar", [], null, null, null, View_SidebarComponent_0, RenderType_SidebarComponent)), i1.ɵdid(1, 114688, null, 0, i4.SidebarComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SidebarComponent_Host_0 = View_SidebarComponent_Host_0;
var SidebarComponentNgFactory = i1.ɵccf("app-sidebar", i4.SidebarComponent, View_SidebarComponent_Host_0, {}, {}, []);
exports.SidebarComponentNgFactory = SidebarComponentNgFactory;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.sass.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.sass.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 20%;\n  background: #eef2f3; }\n\n.logo-image[_ngcontent-%COMP%] {\n  margin: 5%;\n  background: white;\n  border-radius: 50%; }\n\n.logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 5%;\n    width: 90%; }\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black; }\n\na[_ngcontent-%COMP%]:hover {\n    color: snow; }\n\n.about-us[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px; }\n\n@media (min-width: 768px) {\n    .about-us[_ngcontent-%COMP%] {\n      background: black; } }\n\n.about-us[_ngcontent-%COMP%]:hover {\n    color: black; }\n\n.contacts[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px; }\n\n@media (min-width: 768px) {\n    .contacts[_ngcontent-%COMP%] {\n      background: black; } }\n\n.contacts[_ngcontent-%COMP%]:hover {\n    color: black; }\n\n.join-us[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px; }\n\n@media (min-width: 768px) {\n    .join-us[_ngcontent-%COMP%] {\n      background: black; } }\n\n.join-us[_ngcontent-%COMP%]:hover {\n    color: black; }\n\n.about-us[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%] {\n  transition: 0.3s; }\n\n.about-us[_ngcontent-%COMP%]:hover, .contacts[_ngcontent-%COMP%]:hover, .join-us[_ngcontent-%COMP%]:hover {\n    background: white;\n    transition: 0.3s;\n    cursor: pointer; }\n\n@media (min-width: 1650px) {\n    .about-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%] {\n      font-size: 35px; } }\n\n@media (min-width: 1400px) and (max-width: 1650px) {\n    .about-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%] {\n      font-size: 25px; } }\n\n@media (min-width: 960px) and (max-width: 1400px) {\n    .about-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%] {\n      font-size: 20px; } }\n\n@media (min-width: 720px) and (max-width: 960px) {\n    .about-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   .sidebar-item-text[_ngcontent-%COMP%] {\n      font-size: 15px; } }\n\n.about-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: block; }\n\n@media (min-width: 1650px) {\n      .about-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 90px; } }\n\n@media (min-width: 1400px) and (max-width: 1650px) {\n      .about-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 70px; } }\n\n@media (min-width: 960px) and (max-width: 1400px) {\n      .about-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 45px; } }\n\n@media (min-width: 720px) and (max-width: 960px) {\n      .about-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .join-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 30px; } }\n\n.square-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.square-box[_ngcontent-%COMP%]:before {\n    content: \"\";\n    display: block;\n    padding-top: 100%; }\n\n.square-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.square-content[_ngcontent-%COMP%]   .square-content-essence[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    height: 100%; }\n\n.square-content[_ngcontent-%COMP%]   .center-content[_ngcontent-%COMP%] {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle; }\n\n.info-container[_ngcontent-%COMP%] {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 20px;\n  text-align: left;\n  color: #665091;\n  transition: 0.3s; }\n\n.info-container[_ngcontent-%COMP%]   .div-container[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 15px;\n    transition: 0.3s; }\n\n.info-container[_ngcontent-%COMP%]   .div-container[_ngcontent-%COMP%]:hover {\n      transition: 0.3s;\n      color: white;\n      padding-right: 5px;\n      background: #42275a;\n      cursor: pointer; }\n\n@media (max-width: 992px) {\n  .sidebar-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 8px 20px; }\n    .sidebar-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n      padding-left: 24px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.logo = '../../assets/images/logo1.png';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/topic-page/topic-page.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/topic-page/topic-page.component.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./topic-page.component.sass.shim.ngstyle */ "./src/app/topic-page/topic-page.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @ngx-share/core */ "@ngx-share/core");
var i3 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i4 = __webpack_require__(/*! ../topic/topic.component.ngfactory */ "./src/app/topic/topic.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../topic/topic.component */ "./src/app/topic/topic.component.ts");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! ../../../node_modules/angular2-disqus/lib/disqus-thread.component.ngfactory */ "./node_modules/angular2-disqus/lib/disqus-thread.component.ngfactory.js");
var i8 = __webpack_require__(/*! angular2-disqus/lib/disqus-thread.component */ "angular2-disqus/lib/disqus-thread.component");
var i9 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i10 = __webpack_require__(/*! ./topic-page.component */ "./src/app/topic-page/topic-page.component.ts");
var i11 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i12 = __webpack_require__(/*! ../services/topics/topics.service */ "./src/app/services/topics/topics.service.ts");
var styles_TopicPageComponent = [i0.styles];
var RenderType_TopicPageComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopicPageComponent, data: {} });
exports.RenderType_TopicPageComponent = RenderType_TopicPageComponent;
function View_TopicPageComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "div", [["class", "topic-background col-sm-12"]], [[4, "background-image", null]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "div", [["class", "topic-page-title col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "topic-extra-info col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "i", [["class", "far fa-clock"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, [" ", " \u043C\u0438\u043D. "])), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "topic-page-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""])), (_l()(), i1.ɵeld(10, 0, null, null, 2, "div", [["class", "topic-page-date col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), i1.ɵppd(12, 1), (_l()(), i1.ɵeld(13, 0, null, null, 8, "div", [["class", "col-sm-12 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "div", [["class", "share-us"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u041F\u043E\u0434\u0435\u043B\u0438\u0441\u044C"])), (_l()(), i1.ɵeld(16, 0, null, null, 2, "button", [["class", "share-button"], ["shareButton", "facebook"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 17).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(17, 540672, null, 0, i2.ShareButtonDirective, [i2.ShareButtons, i3.HttpClient, i1.Renderer2, i1.ChangeDetectorRef, i1.ElementRef, i1.PLATFORM_ID], { shareButton: [0, "shareButton"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 0, "i", [["class", "fab fa-facebook icon-share facebook"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "button", [["class", "share-button"], ["shareButton", "telegram"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 540672, null, 0, i2.ShareButtonDirective, [i2.ShareButtons, i3.HttpClient, i1.Renderer2, i1.ChangeDetectorRef, i1.ElementRef, i1.PLATFORM_ID], { shareButton: [0, "shareButton"] }, null), (_l()(), i1.ɵeld(21, 0, null, null, 0, "i", [["class", "fab fa-telegram icon-share telegram"]], null, null, null, null, null))], function (_ck, _v) { var currVal_5 = "facebook"; _ck(_v, 17, 0, currVal_5); var currVal_6 = "telegram"; _ck(_v, 20, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("url(" + _co.topic.cover.url) + ")"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.topic.title; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.topic.minutes_to_read; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.topic.text; _ck(_v, 9, 0, currVal_3); var currVal_4 = i1.ɵunv(_v, 11, 0, _ck(_v, 12, 0, i1.ɵnov(_v.parent, 0), _co.topic.created_at)); _ck(_v, 11, 0, currVal_4); }); }
function View_TopicPageComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "col-sm-12 col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "hidden-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigate(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(5, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "trending-small d-md-none"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigate(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(8, null, [" ", " "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "topics/", _v.context.$implicit.id, ""); _ck(_v, 3, 0, currVal_0); var currVal_2 = i1.ɵinlineInterpolate(1, "topics/", _v.context.$implicit.id, ""); _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_3); }); }
function View_TopicPageComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "row no-margin"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "col-sm-12 trending-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u0422\u044B \u043D\u0430\u0432\u0435\u0440\u043D\u044F\u043A\u0430 \u0441\u043B\u043E\u0432\u0438\u0448\u044C \u0441\u043E\u0431\u0430\u0447\u0438\u0439 \u043A\u0430\u0439\u0444 \u043E\u0442:"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopicPageComponent_3)), i1.ɵdid(4, 802816, null, 0, i6.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.topic.trending_topics; _ck(_v, 4, 0, currVal_0); }, null); }
function View_TopicPageComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i6.DatePipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "container col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopicPageComponent_1)), i1.ɵdid(3, 16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TopicPageComponent_2)), i1.ɵdid(5, 16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "container col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "disqus-thread", [], null, null, null, i7.View_DisqusThreadComponent_0, i7.RenderType_DisqusThreadComponent)), i1.ɵdid(8, 573440, null, 0, i8.DisqusThreadComponent, [], { pageIdentifier: [0, "pageIdentifier"], pageUrl: [1, "pageUrl"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 4, "div", [["class", "d-md-none back-button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(11, 671744, null, 0, i9.RouterLinkWithHref, [i9.Router, i9.ActivatedRoute, i6.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(12, 1), (_l()(), i1.ɵeld(13, 0, null, null, 0, "i", [["class", "fas fa-arrow-left"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.topic; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.topic; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.pageIdentifier; var currVal_3 = _co.pageUrl; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_6 = _ck(_v, 12, 0, "/"); _ck(_v, 11, 0, currVal_6); }, function (_ck, _v) { var currVal_4 = i1.ɵnov(_v, 11).target; var currVal_5 = i1.ɵnov(_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); }); }
exports.View_TopicPageComponent_0 = View_TopicPageComponent_0;
function View_TopicPageComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-topic-page", [], null, null, null, View_TopicPageComponent_0, RenderType_TopicPageComponent)), i1.ɵdid(1, 114688, null, 0, i10.TopicPageComponent, [i9.ActivatedRoute, i11.Meta, i12.TopicsService, i11.TransferState, i9.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopicPageComponent_Host_0 = View_TopicPageComponent_Host_0;
var TopicPageComponentNgFactory = i1.ɵccf("app-topic-page", i10.TopicPageComponent, View_TopicPageComponent_Host_0, {}, {}, []);
exports.TopicPageComponentNgFactory = TopicPageComponentNgFactory;


/***/ }),

/***/ "./src/app/topic-page/topic-page.component.sass.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/topic-page/topic-page.component.sass.shim.ngstyle.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".sb-group[_ngcontent-%COMP%], .sb-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: flex-start; }\n.sb-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap; }\n.sb-button[_ngcontent-%COMP%] {\n  margin: 0.3125em; }\n\n.sb-wrapper[_ngcontent-%COMP%] {\n  font-size: inherit;\n  cursor: pointer;\n  position: relative;\n  outline: 0;\n  min-width: 4.125em;\n  height: 2.5em;\n  border: none;\n  border-radius: 1px;\n  padding: 0;\n  line-height: 2.571em;\n  background-color: transparent; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    width: 100%;\n    height: 100%; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    width: 100%; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    padding: 0 0.7em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    flex: 1;\n    height: 100%;\n    white-space: nowrap; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    font-size: 1.2em;\n    min-width: 2em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n    padding: 0 0.7em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    font-weight: bold; }\n\n.sb-show-text[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  width: 2em; }\n\n.sb-show-count[_ngcontent-%COMP%] {\n  min-width: 5.333em; }\n\nexpand-button[_ngcontent-%COMP%] {\n  display: inherit; }\n\n\n\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: var(--button-color) !important; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-facebook[_ngcontent-%COMP%] {\n    background-color: #4267B2; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-twitter[_ngcontent-%COMP%] {\n    background-color: #00acee; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-google[_ngcontent-%COMP%] {\n    background-color: #db4437; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-stumble[_ngcontent-%COMP%] {\n    background-color: #eb4924; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-linkedin[_ngcontent-%COMP%] {\n    background-color: #006fa6; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-pinterest[_ngcontent-%COMP%] {\n    background-color: #bd081c; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-reddit[_ngcontent-%COMP%] {\n    background-color: #ff4006; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-tumblr[_ngcontent-%COMP%] {\n    background-color: #36465d; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-whatsapp[_ngcontent-%COMP%] {\n    background-color: #25d366; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-messenger[_ngcontent-%COMP%] {\n    background-color: #0080FF; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-telegram[_ngcontent-%COMP%] {\n    background-color: #0088cc; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-xing[_ngcontent-%COMP%] {\n    background-color: #006567; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-sms[_ngcontent-%COMP%] {\n    background-color: #20c16c; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-email[_ngcontent-%COMP%] {\n    background-color: #FF961C; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-vk[_ngcontent-%COMP%] {\n    background-color: #4C75A3; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-copy[_ngcontent-%COMP%] {\n    background-color: #607D8B; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-print[_ngcontent-%COMP%] {\n    background-color: #765AA2; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-expand[_ngcontent-%COMP%] {\n    background-color: #FF6651; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-icon.sb-show-text[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    -webkit-filter: none;\n            filter: none;\n    padding-right: 1em;\n    padding-left: 0; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-icon.sb-show-count[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    padding-right: 1em;\n    padding-left: 0; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-text.sb-show-count[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    padding-right: 0.5em; }\n.main-container[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  width: 80%; }\n@media (max-width: 768px) {\n    .main-container[_ngcontent-%COMP%] {\n      margin-left: 0;\n      width: 100%; } }\n@media (max-width: 768px) {\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none; } }\n.topic-background[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  height: 400px; }\n.topic-page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n  padding-top: 30px;\n  padding-bottom: 20px; }\n.topic-extra-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  padding-bottom: 30px; }\n.topic-page-text[_ngcontent-%COMP%] {\n  padding: 0 100px;\n  text-align: justify; }\n@media (max-width: 768px) {\n    .topic-page-text[_ngcontent-%COMP%] {\n      padding: 0 15px; } }\n.topic-page-author[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 10px 115px 10px 0;\n  font-style: italic; }\n@media (max-width: 768px) {\n    .topic-page-author[_ngcontent-%COMP%] {\n      padding: 10px 15px; } }\n.topic-page-date[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 30px 100px 10px 0;\n  font-style: italic; }\n@media (max-width: 768px) {\n    .topic-page-date[_ngcontent-%COMP%] {\n      padding: 10px 15px; } }\n.back-button[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  background: linear-gradient(90deg, #42275a, #734b6d);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  transition: 0.3s;\n  opacity: 0.5; }\n.back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white; }\n.back-button[_ngcontent-%COMP%]:hover {\n    margin-right: 10px;\n    opacity: 1;\n    transition: 0.3s; }\n.share-button[_ngcontent-%COMP%] {\n  margin: 10px;\n  background: rgba(0, 0, 0, 0);\n  border: none;\n  padding: 0;\n  transition: 0.3s; }\n.share-button[_ngcontent-%COMP%]:hover {\n    transition: 0.3s; }\n.share-button[_ngcontent-%COMP%]:focus {\n    outline: 0; }\n.share-button[_ngcontent-%COMP%]   .icon-share[_ngcontent-%COMP%] {\n    font-size: 75px;\n    transition: 0.3s; }\n.share-button[_ngcontent-%COMP%]   .icon-share[_ngcontent-%COMP%]:hover {\n      transition: 0.3s;\n      cursor: pointer; }\n.share-button[_ngcontent-%COMP%]   .icon-share.facebook[_ngcontent-%COMP%] {\n    color: #3b5998; }\n.share-button[_ngcontent-%COMP%]   .icon-share.facebook[_ngcontent-%COMP%]:hover {\n      color: #8b9dc3; }\n.share-button[_ngcontent-%COMP%]   .icon-share.telegram[_ngcontent-%COMP%] {\n    color: #0088cc; }\n.share-button[_ngcontent-%COMP%]   .icon-share.telegram[_ngcontent-%COMP%]:hover {\n      color: #0088cc;\n      opacity: 0.75; }\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0; }\n.trending-title[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-weight: bold; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/topic-page/topic-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/topic-page/topic-page.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var topics_service_1 = __webpack_require__(/*! ../services/topics/topics.service */ "./src/app/services/topics/topics.service.ts");
var TopicPageComponent = /** @class */ (function () {
    function TopicPageComponent(activatedRoute, meta, topicsService, transferState, router) {
        this.activatedRoute = activatedRoute;
        this.meta = meta;
        this.topicsService = topicsService;
        this.transferState = transferState;
        this.router = router;
        // console.log(this.activatedRoute.snapshot.data);
        // this.topic = this.activatedRoute.snapshot.data['topic'];
    }
    TopicPageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTopic()];
                    case 1:
                        _a.sent();
                        this.setDisqus();
                        this.updateTags();
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicPageComponent.prototype.getTopic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.id = this.activatedRoute.snapshot.params['topicId'];
                        _a = this;
                        return [4 /*yield*/, this.topicsService.getTopic(this.id).toPromise()];
                    case 1:
                        _a.topic = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicPageComponent.prototype.setDisqus = function () {
        this.pageIdentifier = this.topic.id;
        this.pageUrl = 'http://violet-monkey.herokuapp.com/topics/' + this.topic.id;
    };
    TopicPageComponent.prototype.updateTags = function () {
        console.log(this.topic);
        this.meta.updateTag({ property: 'og:title', content: this.topic.title });
        this.meta.updateTag({ property: 'og:description', content: this.topic.text });
        this.meta.updateTag({ property: 'og:image', content: this.topic.cover.url });
    };
    TopicPageComponent.prototype.navigate = function (topic) {
        this.router.navigateByUrl('topics/' + topic.id);
    };
    return TopicPageComponent;
}());
exports.TopicPageComponent = TopicPageComponent;


/***/ }),

/***/ "./src/app/topic/topic.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/topic/topic.component.ngfactory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./topic.component.sass.shim.ngstyle */ "./src/app/topic/topic.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./topic.component */ "./src/app/topic/topic.component.ts");
var styles_TopicComponent = [i0.styles];
var RenderType_TopicComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopicComponent, data: {} });
exports.RenderType_TopicComponent = RenderType_TopicComponent;
function View_TopicComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DatePipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 15, "div", [["class", "card topic-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "div", [["class", "topic-image"]], [[4, "background-image", null]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 13, "div", [["class", "card-img-overlay"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "h4", [["class", "topic-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""])), (_l()(), i1.ɵeld(6, 0, null, null, 10, "div", [["class", "topic-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-bar-chart-o"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fas fa-calendar"]], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, [" ", " "])), i1.ɵppd(13, 2), (_l()(), i1.ɵeld(14, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 0, "i", [["class", "far fa-clock"]], null, null, null, null, null)), (_l()(), i1.ɵted(16, null, [" ", " \u043C\u0438\u043D. "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("url(" + _co.topic.cover.url) + ")"); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.topic.title; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.topic.visits; _ck(_v, 9, 0, currVal_2); var currVal_3 = i1.ɵunv(_v, 12, 0, _ck(_v, 13, 0, i1.ɵnov(_v, 0), _co.topic.created_at, "dd.MM.yy hh:mm")); _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.topic.minutes_to_read; _ck(_v, 16, 0, currVal_4); }); }
exports.View_TopicComponent_0 = View_TopicComponent_0;
function View_TopicComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-topic", [], null, null, null, View_TopicComponent_0, RenderType_TopicComponent)), i1.ɵdid(1, 114688, null, 0, i3.TopicComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopicComponent_Host_0 = View_TopicComponent_Host_0;
var TopicComponentNgFactory = i1.ɵccf("app-topic", i3.TopicComponent, View_TopicComponent_Host_0, { topic: "topic" }, {}, []);
exports.TopicComponentNgFactory = TopicComponentNgFactory;


/***/ }),

/***/ "./src/app/topic/topic.component.sass.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/topic/topic.component.sass.shim.ngstyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".first-letter[_ngcontent-%COMP%]:first-letter {\n  font-size: 50px; }\n\n.topic-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 15px; }\n\n.topic-cover-small[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 15px; }\n\n.topic-card[_ngcontent-%COMP%] {\n  position: relative;\n  color: snow;\n  overflow: hidden;\n  text-shadow: 2px 2px 2px black;\n  transition: 0.3s; }\n\n.topic-card[_ngcontent-%COMP%]   .topic-info[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    transition: 0.3s;\n    position: absolute;\n    bottom: -50px; }\n\n.topic-card[_ngcontent-%COMP%]   .topic-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      padding-right: 15px; }\n\n.topic-card[_ngcontent-%COMP%]:hover   .topic-title[_ngcontent-%COMP%] {\n    transition: 0.3s;\n    bottom: 50px; }\n\n.topic-card[_ngcontent-%COMP%]:hover   .topic-info[_ngcontent-%COMP%] {\n    transition: 0.3s;\n    bottom: 20px; }\n\n.topic-title[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  position: absolute;\n  bottom: 15px;\n  left: 15px;\n  font-size: 24px;\n  padding: 0 15px; }\n\n.topic-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 300px; }\n\n.topic-image-small[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 150px; }\n\n.category-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.75); }\n\n.category-container[_ngcontent-%COMP%]   .card-category[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 0;\n    padding-left: 15px;\n    padding-right: 15px; }\n\n@media (max-width: 767px) {\n  .topic-title[_ngcontent-%COMP%] {\n    bottom: 50px; }\n  .topic-card[_ngcontent-%COMP%]   .topic-info[_ngcontent-%COMP%] {\n    bottom: 20px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/topic/topic.component.ts":
/*!******************************************!*\
  !*** ./src/app/topic/topic.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var TopicComponent = /** @class */ (function () {
    function TopicComponent() {
    }
    TopicComponent.prototype.ngOnInit = function () {
    };
    return TopicComponent;
}());
exports.TopicComponent = TopicComponent;


/***/ }),

/***/ "./src/app/topics/topics.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/topics/topics.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./topics.component.sass.shim.ngstyle */ "./src/app/topics/topics.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../topic/topic.component.ngfactory */ "./src/app/topic/topic.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../topic/topic.component */ "./src/app/topic/topic.component.ts");
var i6 = __webpack_require__(/*! ./topics.component */ "./src/app/topics/topics.component.ts");
var styles_TopicsComponent = [i0.styles];
var RenderType_TopicsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopicsComponent, data: {} });
exports.RenderType_TopicsComponent = RenderType_TopicsComponent;
function View_TopicsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(3, 2), (_l()(), i1.ɵeld(4, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(5, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null)], function (_ck, _v) { var currVal_3 = _ck(_v, 3, 0, "/topics", _v.context.$implicit.id); _ck(_v, 2, 0, currVal_3); var currVal_4 = _v.context.$implicit; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "col-sm-12 col-md-", _co.grid, " topic-test-card"); _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵnov(_v, 2).target; var currVal_2 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_1, currVal_2); }); }
function View_TopicsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 60, "div", [["class", "feed-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 8, "div", [["class", "row d-sm-none text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 7, "div", [["class", "col-sm-12 small-quote"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 6, "div", [["class", "phrase"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "div", [["class", "line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "essence"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\"\u042F \u043F\u043E \u0443\u0442\u0440\u0430\u043C \u0435\u0434\u0438\u043D\u043E\u0440\u043E\u0433, \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u043E\u0433 \u0432 \u0440\u0430\u0439\u043E\u043D\u0435 \u043D\u043E\u0433.\""])), (_l()(), i1.ɵeld(7, 0, null, null, 0, "div", [["class", "line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "author"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u0414\u0436\u0435\u0439\u0441\u043E\u043D \u0421\u0442\u044D\u0442\u0445\u0435\u043C"])), (_l()(), i1.ɵeld(10, 0, null, null, 50, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-12 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(14, 2), (_l()(), i1.ɵeld(15, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(16, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(17, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-6 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(19, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(20, 2), (_l()(), i1.ɵeld(21, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(22, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(23, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-3 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(25, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(26, 2), (_l()(), i1.ɵeld(27, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(28, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(29, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-3 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(31, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(32, 2), (_l()(), i1.ɵeld(33, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(34, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(35, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-4 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(37, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(38, 2), (_l()(), i1.ɵeld(39, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(40, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(41, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-4 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 43).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(43, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(44, 2), (_l()(), i1.ɵeld(45, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(46, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(47, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-4 topic-test-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(49, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(50, 2), (_l()(), i1.ɵeld(51, 0, null, null, 1, "app-topic", [], null, null, null, i4.View_TopicComponent_0, i4.RenderType_TopicComponent)), i1.ɵdid(52, 114688, null, 0, i5.TopicComponent, [], { topic: [0, "topic"] }, null), (_l()(), i1.ɵeld(53, 0, null, null, 4, "div", [["class", "join-us-email"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" // \u041A\u043E\u0440\u043E\u0447\u0435, \u0413\u043B\u0435\u0431, \u0442\u0443\u0442 \u043D\u0443\u0436\u043D\u0430 \u0444\u0440\u0430\u0437\u0430 \u043F\u043E \u0442\u0438\u043F\u0443 \"\u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435\u0441\u044C, \u0433\u043E\u0432\u043D\u043E\u0435\u0434\u044B\" \u043D\u0443 \u0442\u044B \u043F\u043E\u043D\u044F\u043B, \u043E\u043A?? "])), (_l()(), i1.ɵeld(55, 0, null, null, 2, "div", [["class", "join-us-socials"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 0, "i", [["class", "fab fa-facebook icon-share facebook"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 0, "i", [["class", "fab fa-telegram icon-share telegram"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_TopicsComponent_1)), i1.ɵdid(59, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i1.ɵpid(0, i3.SlicePipe, [])], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 14, 0, "/topics", _co.topics[0].id); _ck(_v, 13, 0, currVal_2); var currVal_3 = _co.topics[0]; _ck(_v, 16, 0, currVal_3); var currVal_6 = _ck(_v, 20, 0, "/topics", _co.topics[1].id); _ck(_v, 19, 0, currVal_6); var currVal_7 = _co.topics[1]; _ck(_v, 22, 0, currVal_7); var currVal_10 = _ck(_v, 26, 0, "/topics", _co.topics[2].id); _ck(_v, 25, 0, currVal_10); var currVal_11 = _co.topics[2]; _ck(_v, 28, 0, currVal_11); var currVal_14 = _ck(_v, 32, 0, "/topics", _co.topics[3].id); _ck(_v, 31, 0, currVal_14); var currVal_15 = _co.topics[3]; _ck(_v, 34, 0, currVal_15); var currVal_18 = _ck(_v, 38, 0, "/topics", _co.topics[4].id); _ck(_v, 37, 0, currVal_18); var currVal_19 = _co.topics[4]; _ck(_v, 40, 0, currVal_19); var currVal_22 = _ck(_v, 44, 0, "/topics", _co.topics[5].id); _ck(_v, 43, 0, currVal_22); var currVal_23 = _co.topics[5]; _ck(_v, 46, 0, currVal_23); var currVal_26 = _ck(_v, 50, 0, "/topics", _co.topics[6].id); _ck(_v, 49, 0, currVal_26); var currVal_27 = _co.topics[6]; _ck(_v, 52, 0, currVal_27); var currVal_28 = i1.ɵunv(_v, 59, 0, i1.ɵnov(_v, 60).transform(_co.topics, 6)); _ck(_v, 59, 0, currVal_28); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 13).target; var currVal_1 = i1.ɵnov(_v, 13).href; _ck(_v, 12, 0, currVal_0, currVal_1); var currVal_4 = i1.ɵnov(_v, 19).target; var currVal_5 = i1.ɵnov(_v, 19).href; _ck(_v, 18, 0, currVal_4, currVal_5); var currVal_8 = i1.ɵnov(_v, 25).target; var currVal_9 = i1.ɵnov(_v, 25).href; _ck(_v, 24, 0, currVal_8, currVal_9); var currVal_12 = i1.ɵnov(_v, 31).target; var currVal_13 = i1.ɵnov(_v, 31).href; _ck(_v, 30, 0, currVal_12, currVal_13); var currVal_16 = i1.ɵnov(_v, 37).target; var currVal_17 = i1.ɵnov(_v, 37).href; _ck(_v, 36, 0, currVal_16, currVal_17); var currVal_20 = i1.ɵnov(_v, 43).target; var currVal_21 = i1.ɵnov(_v, 43).href; _ck(_v, 42, 0, currVal_20, currVal_21); var currVal_24 = i1.ɵnov(_v, 49).target; var currVal_25 = i1.ɵnov(_v, 49).href; _ck(_v, 48, 0, currVal_24, currVal_25); }); }
exports.View_TopicsComponent_0 = View_TopicsComponent_0;
function View_TopicsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-topics", [], null, null, null, View_TopicsComponent_0, RenderType_TopicsComponent)), i1.ɵdid(1, 114688, null, 0, i6.TopicsComponent, [i2.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopicsComponent_Host_0 = View_TopicsComponent_Host_0;
var TopicsComponentNgFactory = i1.ɵccf("app-topics", i6.TopicsComponent, View_TopicsComponent_Host_0, {}, {}, []);
exports.TopicsComponentNgFactory = TopicsComponentNgFactory;


/***/ }),

/***/ "./src/app/topics/topics.component.sass.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/topics/topics.component.sass.shim.ngstyle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".sb-group[_ngcontent-%COMP%], .sb-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: flex-start; }\n.sb-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap; }\n.sb-button[_ngcontent-%COMP%] {\n  margin: 0.3125em; }\n\n.sb-wrapper[_ngcontent-%COMP%] {\n  font-size: inherit;\n  cursor: pointer;\n  position: relative;\n  outline: 0;\n  min-width: 4.125em;\n  height: 2.5em;\n  border: none;\n  border-radius: 1px;\n  padding: 0;\n  line-height: 2.571em;\n  background-color: transparent; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    width: 100%;\n    height: 100%; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    width: 100%; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    padding: 0 0.7em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    flex: 1;\n    height: 100%;\n    white-space: nowrap; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    font-size: 1.2em;\n    min-width: 2em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n    padding: 0 0.7em; }\n.sb-wrapper[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], .sb-wrapper[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    font-weight: bold; }\n\n.sb-show-text[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  width: 2em; }\n\n.sb-show-count[_ngcontent-%COMP%] {\n  min-width: 5.333em; }\n\nexpand-button[_ngcontent-%COMP%] {\n  display: inherit; }\n\n\n\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: var(--button-color) !important; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-facebook[_ngcontent-%COMP%] {\n    background-color: #4267B2; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-twitter[_ngcontent-%COMP%] {\n    background-color: #00acee; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-google[_ngcontent-%COMP%] {\n    background-color: #db4437; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-stumble[_ngcontent-%COMP%] {\n    background-color: #eb4924; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-linkedin[_ngcontent-%COMP%] {\n    background-color: #006fa6; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-pinterest[_ngcontent-%COMP%] {\n    background-color: #bd081c; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-reddit[_ngcontent-%COMP%] {\n    background-color: #ff4006; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-tumblr[_ngcontent-%COMP%] {\n    background-color: #36465d; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-whatsapp[_ngcontent-%COMP%] {\n    background-color: #25d366; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-messenger[_ngcontent-%COMP%] {\n    background-color: #0080FF; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-telegram[_ngcontent-%COMP%] {\n    background-color: #0088cc; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-xing[_ngcontent-%COMP%] {\n    background-color: #006567; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-sms[_ngcontent-%COMP%] {\n    background-color: #20c16c; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-email[_ngcontent-%COMP%] {\n    background-color: #FF961C; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-vk[_ngcontent-%COMP%] {\n    background-color: #4C75A3; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-copy[_ngcontent-%COMP%] {\n    background-color: #607D8B; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-print[_ngcontent-%COMP%] {\n    background-color: #765AA2; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-expand[_ngcontent-%COMP%] {\n    background-color: #FF6651; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-icon.sb-show-text[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    -webkit-filter: none;\n            filter: none;\n    padding-right: 1em;\n    padding-left: 0; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-icon.sb-show-count[_ngcontent-%COMP%]   .sb-count[_ngcontent-%COMP%] {\n    padding-right: 1em;\n    padding-left: 0; }\n.sb-default[_ngcontent-%COMP%]   .sb-wrapper.sb-show-text.sb-show-count[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n    padding-right: 0.5em; }\n.main-container[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  width: 80%; }\n@media (max-width: 768px) {\n    .main-container[_ngcontent-%COMP%] {\n      margin-left: 0;\n      width: 100%; } }\n@media (max-width: 768px) {\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none; } }\n.feed-container[_ngcontent-%COMP%] {\n  margin: 0 75px; }\n.topic-test-card[_ngcontent-%COMP%] {\n  padding: 15px; }\n.join-us-email[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #42275a;\n  padding: 10px;\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  margin: 5px 15px; }\n.join-us-socials[_ngcontent-%COMP%] {\n  font-size: 50px; }\n.join-us-socials[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: 10px; }\n.quote[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-left: 10px solid #35035C;\n  width: 100%;\n  background: linear-gradient(90deg, #42275a, #734b6d);\n  color: white; }\n.quote[_ngcontent-%COMP%]   .phrase[_ngcontent-%COMP%] {\n    padding: 10px; }\n.quote[_ngcontent-%COMP%]   .essence[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 10px; }\n.quote[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n    text-align: right; }\n.small-quote[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #42275a, #734b6d);\n  margin: 0 15px;\n  color: white; }\n.small-quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    height: 150px; }\n.small-quote[_ngcontent-%COMP%]   .phrase[_ngcontent-%COMP%] {\n    padding: 10px 0; }\n.small-quote[_ngcontent-%COMP%]   .quote-day[_ngcontent-%COMP%] {\n    padding: 10px 0; }\n.line[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  margin: 5px 0; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/topics/topics.component.ts":
/*!********************************************!*\
  !*** ./src/app/topics/topics.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.lengthAcc = 0;
        this.lengths = [];
        this.topics = this.activatedRoute.snapshot.data['topics'];
        console.log(this.topics);
    }
    Object.defineProperty(TopicsComponent.prototype, "grid", {
        get: function () {
            var length;
            if (this.lengthAcc < 2) {
                length = Math.round(Math.random() * (5 - 3) + 3);
                this.lengths.push(length);
                this.lengthAcc++;
            }
            else {
                length = 12 - this.lengths.reduce(function (a, b) { return a + b; }, 0);
                this.lengths = [];
                this.lengthAcc = 0;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    TopicsComponent.prototype.ngOnInit = function () {
    };
    return TopicsComponent;
}());
exports.TopicsComponent = TopicsComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiBase: 'http://localhost:3000',
    token_auth_config: {
        apiBase: 'https://violet-monkey-api.herokuapp.com',
        signInPath: 'api/auth/sign_in',
        signOutPath: 'api/auth/sign_out',
        registerAccountPath: 'api/auth/sign_up',
        validateTokenPath: 'api/auth/validate_token',
        globalOptions: {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zaitsev/ssr/purple-ssr/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ngx-share/core":
/*!**********************************!*\
  !*** external "@ngx-share/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-share/core");

/***/ }),

/***/ "angular2-disqus":
/*!**********************************!*\
  !*** external "angular2-disqus" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angular2-disqus");

/***/ }),

/***/ "angular2-disqus/lib/disqus-thread.component":
/*!**************************************************************!*\
  !*** external "angular2-disqus/lib/disqus-thread.component" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angular2-disqus/lib/disqus-thread.component");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/internal/operators":
/*!******************************************!*\
  !*** external "rxjs/internal/operators" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/internal/operators");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map
