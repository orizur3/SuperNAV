(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n.node {\r\n  cursor: pointer;\r\n}\r\n\r\n.node circle {\r\n    fill: #fff;\r\n    stroke: steelblue;\r\n    stroke-width: 1.5px;\r\n  }\r\n\r\n.node text {\r\n    font: 10px sans-serif;\r\n  }\r\n\r\n.link {\r\n  fill: none;\r\n  stroke: #ccc;\r\n  stroke-width: 1.5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxzQ0FBc0M7Q0FDdkM7O0FBT0Q7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUM7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtHQUNyQjs7QUFFRDtJQUNFLHNCQUFzQjtHQUN2Qjs7QUFFSDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubm9kZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gIC5ub2RlIGNpcmNsZSB7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG4gICAgc3Ryb2tlOiBzdGVlbGJsdWU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5vZGUgdGV4dCB7XHJcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuLmxpbmsge1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiAjY2NjO1xyXG4gIHN0cm9rZS13aWR0aDogMS41cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<!-- Sidebar/menu -->\r\n<nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n  <div class=\"w3-container w3-display-container w3-padding-16\">\r\n    <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n  </div>\r\n  <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n  <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n  <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n  <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n  <button (click)=\"onAbout()\" class=\"w3-bar-item w3-button w3-padding\">About us</button>\r\n\r\n</nav>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(router) {
        this.router = router;
        this.user = false;
        this.flare = {
            "name": "flare",
            "children": [
                {
                    "name": "analytics",
                    "children": [
                        {
                            "name": "cluster",
                            "children": [
                                { "name": "AgglomerativeCluster", "size": 3938 },
                                { "name": "CommunityStructure", "size": 3812 },
                                { "name": "HierarchicalCluster", "size": 6714 },
                                { "name": "MergeEdge", "size": 743 }
                            ]
                        },
                        {
                            "name": "graph",
                            "children": [
                                { "name": "BetweennessCentrality", "size": 3534 },
                                { "name": "LinkDistance", "size": 5731 },
                                { "name": "MaxFlowMinCut", "size": 7840 },
                                { "name": "ShortestPaths", "size": 5914 },
                                { "name": "SpanningTree", "size": 3416 }
                            ]
                        },
                        {
                            "name": "optimization",
                            "children": [
                                { "name": "AspectRatioBanker", "size": 7074 }
                            ]
                        }
                    ]
                },
                {
                    "name": "animate",
                    "children": [
                        { "name": "Easing", "size": 17010 },
                        { "name": "FunctionSequence", "size": 5842 },
                        {
                            "name": "interpolate",
                            "children": [
                                { "name": "ArrayInterpolator", "size": 1983 },
                                { "name": "ColorInterpolator", "size": 2047 },
                                { "name": "DateInterpolator", "size": 1375 },
                                { "name": "Interpolator", "size": 8746 },
                                { "name": "MatrixInterpolator", "size": 2202 },
                                { "name": "NumberInterpolator", "size": 1382 },
                                { "name": "ObjectInterpolator", "size": 1629 },
                                { "name": "PointInterpolator", "size": 1675 },
                                { "name": "RectangleInterpolator", "size": 2042 }
                            ]
                        },
                        { "name": "ISchedulable", "size": 1041 },
                        { "name": "Parallel", "size": 5176 },
                        { "name": "Pause", "size": 449 },
                        { "name": "Scheduler", "size": 5593 },
                        { "name": "Sequence", "size": 5534 },
                        { "name": "Transition", "size": 9201 },
                        { "name": "Transitioner", "size": 19975 },
                        { "name": "TransitionEvent", "size": 1116 },
                        { "name": "Tween", "size": 6006 }
                    ]
                },
                {
                    "name": "data",
                    "children": [
                        {
                            "name": "converters",
                            "children": [
                                { "name": "Converters", "size": 721 },
                                { "name": "DelimitedTextConverter", "size": 4294 },
                                { "name": "GraphMLConverter", "size": 9800 },
                                { "name": "IDataConverter", "size": 1314 },
                                { "name": "JSONConverter", "size": 2220 }
                            ]
                        },
                        { "name": "DataField", "size": 1759 },
                        { "name": "DataSchema", "size": 2165 },
                        { "name": "DataSet", "size": 586 },
                        { "name": "DataSource", "size": 3331 },
                        { "name": "DataTable", "size": 772 },
                        { "name": "DataUtil", "size": 3322 }
                    ]
                },
                {
                    "name": "display",
                    "children": [
                        { "name": "DirtySprite", "size": 8833 },
                        { "name": "LineSprite", "size": 1732 },
                        { "name": "RectSprite", "size": 3623 },
                        { "name": "TextSprite", "size": 10066 }
                    ]
                },
                {
                    "name": "flex",
                    "children": [
                        { "name": "FlareVis", "size": 4116 }
                    ]
                },
                {
                    "name": "physics",
                    "children": [
                        { "name": "DragForce", "size": 1082 },
                        { "name": "GravityForce", "size": 1336 },
                        { "name": "IForce", "size": 319 },
                        { "name": "NBodyForce", "size": 10498 },
                        { "name": "Particle", "size": 2822 },
                        { "name": "Simulation", "size": 9983 },
                        { "name": "Spring", "size": 2213 },
                        { "name": "SpringForce", "size": 1681 }
                    ]
                },
                {
                    "name": "query",
                    "children": [
                        { "name": "AggregateExpression", "size": 1616 },
                        { "name": "And", "size": 1027 },
                        { "name": "Arithmetic", "size": 3891 },
                        { "name": "Average", "size": 891 },
                        { "name": "BinaryExpression", "size": 2893 },
                        { "name": "Comparison", "size": 5103 },
                        { "name": "CompositeExpression", "size": 3677 },
                        { "name": "Count", "size": 781 },
                        { "name": "DateUtil", "size": 4141 },
                        { "name": "Distinct", "size": 933 },
                        { "name": "Expression", "size": 5130 },
                        { "name": "ExpressionIterator", "size": 3617 },
                        { "name": "Fn", "size": 3240 },
                        { "name": "If", "size": 2732 },
                        { "name": "IsA", "size": 2039 },
                        { "name": "Literal", "size": 1214 },
                        { "name": "Match", "size": 3748 },
                        { "name": "Maximum", "size": 843 },
                        {
                            "name": "methods",
                            "children": [
                                { "name": "add", "size": 593 },
                                { "name": "and", "size": 330 },
                                { "name": "average", "size": 287 },
                                { "name": "count", "size": 277 },
                                { "name": "distinct", "size": 292 },
                                { "name": "div", "size": 595 },
                                { "name": "eq", "size": 594 },
                                { "name": "fn", "size": 460 },
                                { "name": "gt", "size": 603 },
                                { "name": "gte", "size": 625 },
                                { "name": "iff", "size": 748 },
                                { "name": "isa", "size": 461 },
                                { "name": "lt", "size": 597 },
                                { "name": "lte", "size": 619 },
                                { "name": "max", "size": 283 },
                                { "name": "min", "size": 283 },
                                { "name": "mod", "size": 591 },
                                { "name": "mul", "size": 603 },
                                { "name": "neq", "size": 599 },
                                { "name": "not", "size": 386 },
                                { "name": "or", "size": 323 },
                                { "name": "orderby", "size": 307 },
                                { "name": "range", "size": 772 },
                                { "name": "select", "size": 296 },
                                { "name": "stddev", "size": 363 },
                                { "name": "sub", "size": 600 },
                                { "name": "sum", "size": 280 },
                                { "name": "update", "size": 307 },
                                { "name": "variance", "size": 335 },
                                { "name": "where", "size": 299 },
                                { "name": "xor", "size": 354 },
                                { "name": "_", "size": 264 }
                            ]
                        },
                        { "name": "Minimum", "size": 843 },
                        { "name": "Not", "size": 1554 },
                        { "name": "Or", "size": 970 },
                        { "name": "Query", "size": 13896 },
                        { "name": "Range", "size": 1594 },
                        { "name": "StringUtil", "size": 4130 },
                        { "name": "Sum", "size": 791 },
                        { "name": "Variable", "size": 1124 },
                        { "name": "Variance", "size": 1876 },
                        { "name": "Xor", "size": 1101 }
                    ]
                },
                {
                    "name": "scale",
                    "children": [
                        { "name": "IScaleMap", "size": 2105 },
                        { "name": "LinearScale", "size": 1316 },
                        { "name": "LogScale", "size": 3151 },
                        { "name": "OrdinalScale", "size": 3770 },
                        { "name": "QuantileScale", "size": 2435 },
                        { "name": "QuantitativeScale", "size": 4839 },
                        { "name": "RootScale", "size": 1756 },
                        { "name": "Scale", "size": 4268 },
                        { "name": "ScaleType", "size": 1821 },
                        { "name": "TimeScale", "size": 5833 }
                    ]
                },
                {
                    "name": "util",
                    "children": [
                        { "name": "Arrays", "size": 8258 },
                        { "name": "Colors", "size": 10001 },
                        { "name": "Dates", "size": 8217 },
                        { "name": "Displays", "size": 12555 },
                        { "name": "Filter", "size": 2324 },
                        { "name": "Geometry", "size": 10993 },
                        {
                            "name": "heap",
                            "children": [
                                { "name": "FibonacciHeap", "size": 9354 },
                                { "name": "HeapNode", "size": 1233 }
                            ]
                        },
                        { "name": "IEvaluable", "size": 335 },
                        { "name": "IPredicate", "size": 383 },
                        { "name": "IValueProxy", "size": 874 },
                        {
                            "name": "math",
                            "children": [
                                { "name": "DenseMatrix", "size": 3165 },
                                { "name": "IMatrix", "size": 2815 },
                                { "name": "SparseMatrix", "size": 3366 }
                            ]
                        },
                        { "name": "Maths", "size": 17705 },
                        { "name": "Orientation", "size": 1486 },
                        {
                            "name": "palette",
                            "children": [
                                { "name": "ColorPalette", "size": 6367 },
                                { "name": "Palette", "size": 1229 },
                                { "name": "ShapePalette", "size": 2059 },
                                { "name": "SizePalette", "size": 2291 }
                            ]
                        },
                        { "name": "Property", "size": 5559 },
                        { "name": "Shapes", "size": 19118 },
                        { "name": "Sort", "size": 6887 },
                        { "name": "Stats", "size": 6557 },
                        { "name": "Strings", "size": 22026 }
                    ]
                },
                {
                    "name": "vis",
                    "children": [
                        {
                            "name": "axis",
                            "children": [
                                { "name": "Axes", "size": 1302 },
                                { "name": "Axis", "size": 24593 },
                                { "name": "AxisGridLine", "size": 652 },
                                { "name": "AxisLabel", "size": 636 },
                                { "name": "CartesianAxes", "size": 6703 }
                            ]
                        },
                        {
                            "name": "controls",
                            "children": [
                                { "name": "AnchorControl", "size": 2138 },
                                { "name": "ClickControl", "size": 3824 },
                                { "name": "Control", "size": 1353 },
                                { "name": "ControlList", "size": 4665 },
                                { "name": "DragControl", "size": 2649 },
                                { "name": "ExpandControl", "size": 2832 },
                                { "name": "HoverControl", "size": 4896 },
                                { "name": "IControl", "size": 763 },
                                { "name": "PanZoomControl", "size": 5222 },
                                { "name": "SelectionControl", "size": 7862 },
                                { "name": "TooltipControl", "size": 8435 }
                            ]
                        },
                        {
                            "name": "data",
                            "children": [
                                { "name": "Data", "size": 20544 },
                                { "name": "DataList", "size": 19788 },
                                { "name": "DataSprite", "size": 10349 },
                                { "name": "EdgeSprite", "size": 3301 },
                                { "name": "NodeSprite", "size": 19382 },
                                {
                                    "name": "render",
                                    "children": [
                                        { "name": "ArrowType", "size": 698 },
                                        { "name": "EdgeRenderer", "size": 5569 },
                                        { "name": "IRenderer", "size": 353 },
                                        { "name": "ShapeRenderer", "size": 2247 }
                                    ]
                                },
                                { "name": "ScaleBinding", "size": 11275 },
                                { "name": "Tree", "size": 7147 },
                                { "name": "TreeBuilder", "size": 9930 }
                            ]
                        },
                        {
                            "name": "events",
                            "children": [
                                { "name": "DataEvent", "size": 2313 },
                                { "name": "SelectionEvent", "size": 1880 },
                                { "name": "TooltipEvent", "size": 1701 },
                                { "name": "VisualizationEvent", "size": 1117 }
                            ]
                        },
                        {
                            "name": "legend",
                            "children": [
                                { "name": "Legend", "size": 20859 },
                                { "name": "LegendItem", "size": 4614 },
                                { "name": "LegendRange", "size": 10530 }
                            ]
                        },
                        {
                            "name": "operator",
                            "children": [
                                {
                                    "name": "distortion",
                                    "children": [
                                        { "name": "BifocalDistortion", "size": 4461 },
                                        { "name": "Distortion", "size": 6314 },
                                        { "name": "FisheyeDistortion", "size": 3444 }
                                    ]
                                },
                                {
                                    "name": "encoder",
                                    "children": [
                                        { "name": "ColorEncoder", "size": 3179 },
                                        { "name": "Encoder", "size": 4060 },
                                        { "name": "PropertyEncoder", "size": 4138 },
                                        { "name": "ShapeEncoder", "size": 1690 },
                                        { "name": "SizeEncoder", "size": 1830 }
                                    ]
                                },
                                {
                                    "name": "filter",
                                    "children": [
                                        { "name": "FisheyeTreeFilter", "size": 5219 },
                                        { "name": "GraphDistanceFilter", "size": 3165 },
                                        { "name": "VisibilityFilter", "size": 3509 }
                                    ]
                                },
                                { "name": "IOperator", "size": 1286 },
                                {
                                    "name": "label",
                                    "children": [
                                        { "name": "Labeler", "size": 9956 },
                                        { "name": "RadialLabeler", "size": 3899 },
                                        { "name": "StackedAreaLabeler", "size": 3202 }
                                    ]
                                },
                                {
                                    "name": "layout",
                                    "children": [
                                        { "name": "AxisLayout", "size": 6725 },
                                        { "name": "BundledEdgeRouter", "size": 3727 },
                                        { "name": "CircleLayout", "size": 9317 },
                                        { "name": "CirclePackingLayout", "size": 12003 },
                                        { "name": "DendrogramLayout", "size": 4853 },
                                        { "name": "ForceDirectedLayout", "size": 8411 },
                                        { "name": "IcicleTreeLayout", "size": 4864 },
                                        { "name": "IndentedTreeLayout", "size": 3174 },
                                        { "name": "Layout", "size": 7881 },
                                        { "name": "NodeLinkTreeLayout", "size": 12870 },
                                        { "name": "PieLayout", "size": 2728 },
                                        { "name": "RadialTreeLayout", "size": 12348 },
                                        { "name": "RandomLayout", "size": 870 },
                                        { "name": "StackedAreaLayout", "size": 9121 },
                                        { "name": "TreeMapLayout", "size": 9191 }
                                    ]
                                },
                                { "name": "Operator", "size": 2490 },
                                { "name": "OperatorList", "size": 5248 },
                                { "name": "OperatorSequence", "size": 4190 },
                                { "name": "OperatorSwitch", "size": 2581 },
                                { "name": "SortOperator", "size": 2023 }
                            ]
                        },
                        { "name": "Visualization", "size": 16540 }
                    ]
                }
            ]
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.user = true;
    };
    AboutComponent.prototype.onHome = function () {
        if (localStorage.getItem('token') != null)
            this.router.navigate(['/signin-homepage']);
        else
            this.router.navigate(['/home-page']);
    };
    AboutComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    AboutComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    AboutComponent.prototype.onAbout = function () {
        this.router.navigate(['/about']);
    };
    AboutComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/sign-in/sign-in.component */ "./src/app/users/sign-in/sign-in.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _sign_in_home_page_sign_in_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in-home-page/sign-in-home-page.component */ "./src/app/sign-in-home-page/sign-in-home-page.component.ts");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/pie/pie.component.ts");
/* harmony import */ var _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./our-products/our-products.component */ "./src/app/our-products/our-products.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-cart-edit/shopping-cart-edit.component */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.ts");
/* harmony import */ var _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./big-spenders/big-spenders.component */ "./src/app/big-spenders/big-spenders.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _details_order_details_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./details-order/details-order.component */ "./src/app/details-order/details-order.component.ts");

















var routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'home-page', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'login', component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'sign', component: _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'sn-home-page', component: _sign_in_home_page_sign_in_home_page_component__WEBPACK_IMPORTED_MODULE_7__["SignInHomePageComponent"] },
    { path: 'app-pie', component: _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"] },
    { path: 'app-our-products', component: _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_9__["OurProductsComponent"] },
    { path: 'app-product-create', component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_10__["ProductCreateComponent"] },
    { path: 'app-product-edit/:product._id/:product.name/:product.price/:product.quantity/:product.category', component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProductEditComponent"] },
    { path: 'app-shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartComponent"] },
    { path: 'app-shopping-cart-edit/:shopping._id/:shopping.name/:shopping.price/:shopping.quantity/:shopping.category', component: _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingCartEditComponent"] },
    { path: 'app-big-spenders', component: _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_14__["BigSpendersComponent"] },
    { path: 'app-orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_15__["OrdersComponent"] },
    { path: 'app-details-order/:order.cart', component: _details_order_details_order_component__WEBPACK_IMPORTED_MODULE_16__["DetailsOrderComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servises/user.service */ "./src/app/servises/user.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, socket, userService) {
        this.router = router;
        this.socket = socket;
        this.userService = userService;
        this.socket.emit('connection', { name: "mulmul" });
    }
    //lat: number = 31.970131;
    //lng: number = 34.772044;
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.userService.checkRole(localStorage.getItem('token'));
        }
        this.router.navigate([]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _servises_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _product_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/shopping-list/shopping-list.component */ "./src/app/product/shopping-list/shopping-list.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/sign-in/sign-in.component */ "./src/app/users/sign-in/sign-in.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _sign_in_home_page_sign_in_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sign-in-home-page/sign-in-home-page.component */ "./src/app/sign-in-home-page/sign-in-home-page.component.ts");
/* harmony import */ var angular_d3_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-d3-charts */ "./node_modules/angular-d3-charts/main.js");
/* harmony import */ var angular_d3_charts__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular_d3_charts__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/pie/pie.component.ts");
/* harmony import */ var _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./our-products/our-products.component */ "./src/app/our-products/our-products.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shopping-cart-edit/shopping-cart-edit.component */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.ts");
/* harmony import */ var _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./big-spenders/big-spenders.component */ "./src/app/big-spenders/big-spenders.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _details_order_details_order_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./details-order/details-order.component */ "./src/app/details-order/details-order.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");





























var socketIoConfig = { url: 'http://localhost:3000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _product_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _users_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _sign_in_home_page_sign_in_home_page_component__WEBPACK_IMPORTED_MODULE_15__["SignInHomePageComponent"],
                angular_d3_charts__WEBPACK_IMPORTED_MODULE_16__["DoughnutChartComponent"],
                angular_d3_charts__WEBPACK_IMPORTED_MODULE_16__["PieChartComponent"],
                angular_d3_charts__WEBPACK_IMPORTED_MODULE_16__["BarChartComponent"],
                _pie_pie_component__WEBPACK_IMPORTED_MODULE_17__["PieComponent"],
                _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_18__["OurProductsComponent"],
                _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_19__["ProductCreateComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProductEditComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_21__["ShoppingCartComponent"],
                _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_22__["ShoppingCartEditComponent"],
                _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_23__["BigSpendersComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_24__["OrdersComponent"],
                _details_order_details_order_component__WEBPACK_IMPORTED_MODULE_25__["DetailsOrderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_26__["SocketIoModule"].forRoot(socketIoConfig),
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD-x2XCvFbeRPUUIx1yoER2DIJ088GkaWc'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/big-spenders/big-spenders.component.css":
/*!*********************************************************!*\
  !*** ./src/app/big-spenders/big-spenders.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlnLXNwZW5kZXJzL2JpZy1zcGVuZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL2JpZy1zcGVuZGVycy9iaWctc3BlbmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/big-spenders/big-spenders.component.html":
/*!**********************************************************!*\
  !*** ./src/app/big-spenders/big-spenders.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"w3-container\">\r\n  <table class=\"w3-table w3-striped\">\r\n    <tr>\r\n      <th><h4><b>City</b></h4></th>\r\n      <th><h4><b>How Many Orders</b></h4></th>\r\n    </tr>\r\n    <tr *ngFor=\"let big of bigSpenders\">\r\n      <th>{{big.city}}</th>\r\n      <th>{{big.result}}</th>\r\n    </tr>\r\n  </table>\r\n</div>\r\n&nbsp;&nbsp;&nbsp;<button (click)=\"onHome()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Back To Home</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/big-spenders/big-spenders.component.ts":
/*!********************************************************!*\
  !*** ./src/app/big-spenders/big-spenders.component.ts ***!
  \********************************************************/
/*! exports provided: BigSpendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigSpendersComponent", function() { return BigSpendersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BigSpendersComponent = /** @class */ (function () {
    function BigSpendersComponent(ShoppingCart, router) {
        this.ShoppingCart = ShoppingCart;
        this.router = router;
        this.bigSpenders = [];
    }
    BigSpendersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShoppingCart.bigSpender();
        setTimeout(function () {
            _this.bigSpendersSub = _this.ShoppingCart.getbigSpendersUpdateListener().subscribe(function (result) {
                _this.bigSpenders = result;
            });
        }, 500);
    };
    BigSpendersComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    BigSpendersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-big-spenders',
            template: __webpack_require__(/*! ./big-spenders.component.html */ "./src/app/big-spenders/big-spenders.component.html"),
            styles: [__webpack_require__(/*! ./big-spenders.component.css */ "./src/app/big-spenders/big-spenders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BigSpendersComponent);
    return BigSpendersComponent;
}());



/***/ }),

/***/ "./src/app/details-order/details-order.component.css":
/*!***********************************************************!*\
  !*** ./src/app/details-order/details-order.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtb3JkZXIvZGV0YWlscy1vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details-order/details-order.component.html":
/*!************************************************************!*\
  !*** ./src/app/details-order/details-order.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\r\n  <table class=\"w3-table w3-striped\">\r\n    <tr>\r\n      <th><h4><b>Product Name</b></h4></th>\r\n      <th><h4><b>Price</b></h4></th>\r\n      <th><h4><b>Quantity</b></h4></th>\r\n      <th><h4><b>Full Price</b></h4></th>\r\n    </tr>\r\n    <tr *ngFor=\"let product of detailsProducts\">\r\n      <th>{{product.name}}</th>\r\n      <th>{{product.price}}</th>\r\n      <th>{{product.quantity}}</th>\r\n      <th>{{product.quantity*product.price}}</th>\r\n    </tr>\r\n  </table>\r\n  <button (click)=\"onOrders()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Back To Orders</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/details-order/details-order.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/details-order/details-order.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailsOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsOrderComponent", function() { return DetailsOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DetailsOrderComponent = /** @class */ (function () {
    function DetailsOrderComponent(_route, router) {
        this._route = _route;
        this.router = router;
        this.detailsProducts = [];
    }
    DetailsOrderComponent.prototype.ngOnInit = function () {
        this.detailsProducts = this._route.snapshot.params['order.cart'];
    };
    DetailsOrderComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    DetailsOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-order',
            template: __webpack_require__(/*! ./details-order.component.html */ "./src/app/details-order/details-order.component.html"),
            styles: [__webpack_require__(/*! ./details-order.component.css */ "./src/app/details-order/details-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsOrderComponent);
    return DetailsOrderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n<button (click)=\"onGuest()\">Sign in</button>\r\n<button (click)=\"onLogin()\">Log in</button>\r\n<hr />\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onGuest = function () {
        this.router.navigate(['/shopping-list']);
    };
    HeaderComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.w3-sidebar  {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\ni.am {\r\npadding:10px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDOztBQUNEO0FBQ0EsYUFBYTs7Q0FFWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi53My1zaWRlYmFyICB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5pLmFtIHtcclxucGFkZGluZzoxMHB4O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://d3js.org/d3.v5.min.js\"></script>\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button *ngIf=\"user==true\" (click)=\"onShoppingList()\" class=\"w3-bar-item w3-button w3-padding\">Our Shopping List</button>\r\n    <button *ngIf=\"user==true\" (click)=\"onOrders()\" class=\"w3-bar-item w3-button w3-padding\">Our Orders</button>\r\n\r\n\r\n  </nav>\r\n\r\n  <!-- Top menu on small screens -->\r\n  <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n    <div class=\"w3-bar-item w3-padding-24 w3-wide\">LOGO</div>\r\n    <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></a>\r\n  </header>\r\n\r\n  <!-- Overlay effect when opening sidebar on small screens -->\r\n  <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n\r\n  <!-- !PAGE CONTENT! -->\r\n  <div class=\"w3-main\" style=\"margin-left:250px\">\r\n\r\n    <!-- Push down content on small screens -->\r\n    <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n    <!-- Top header\r\n  <header class=\"w3-container w3-xlarge\">\r\n    <p class=\"w3-left\">Jeans</p>\r\n    <p class=\"w3-right\">\r\n      <i class=\"fa fa-shopping-cart w3-margin-right\"></i>\r\n      <i class=\"fa fa-search\"></i>\r\n    </p>\r\n  </header>\r\n  -->\r\n    <!-- Image header\r\n  <div class=\"w3-display-container w3-container\">\r\n    <img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:50%\">\r\n  </div>\r\n      -->\r\n\r\n    <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n      <button (click)=\"onPie()\" class=\"w3-bar-item w3-button w3-padding\">Our Profitable</button>\r\n      <button (click)=\"onSpenderPie()\" class=\"w3-bar-item w3-button w3-padding\">Our Big Spenders</button>\r\n    </div>\r\n    <!-- Product grid -->\r\n    <div class=\"w3-row w3-grayscale\">\r\n      <div *ngFor=\"let product of topProducts\" class=\"w3-col l3 s6\">\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{product.name}}<br><b>{{product.price}}$</b></p>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n\r\n    </div>\r\n\r\n    <!-- Footer -->\r\n    <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n      <div class=\"w3-row-padding\">\r\n        <div *ngIf=\"user==false\" class=\"w3-col s4\">\r\n\r\n          <h4>Sign In</h4>\r\n          <p>Questions? Go ahead.</p>\r\n          <form action=\"/action_page.php\" target=\"_blank\">\r\n            <p><input #username class=\"w3-input w3-border\" type=\"text\" placeholder=\"UserName\" name=\"UserName\" required></p>\r\n            <p><input #email class=\"w3-input w3-border\" type=\"text\" placeholder=\"Email\" name=\"Email\" required></p>\r\n            <p><input #password class=\"w3-input w3-border\" type=\"password\" placeholder=\"Password\" name=\"Message\" required></p>\r\n            <p><input #passwordconf class=\"w3-input w3-border\" type=\"password\" placeholder=\"PasswordConf\" name=\"Message\" required></p>\r\n            <button (click)=\"ngHomeSignIn(username,email,password,passwordconf)\" type=\"submit\" class=\"w3-button w3-block w3-black\">SignIn</button>\r\n          </form>\r\n        </div>\r\n        <div *ngIf=\"user==true\" class=\"w3-col s4\">\r\n          <h4>Hello {{username}}</h4>\r\n        </div>\r\n        <!-- google maps come here -->\r\n        <div #gmap class=\"w3-col s4\">\r\n          <!--<h4></h4>\r\n  -->\r\n          <style>\r\n            /* Set the size of the div element that contains the map */\r\n            #map {\r\n              height: 400px; /* The height is 400 pixels */\r\n              width: 100%; /* The width is the width of the web page */\r\n            }\r\n          </style>\r\n          <!--  <h4>Our Braches</h4>\r\n    <!--The div element for the map -->\r\n          <!--Load the API from the specified URL\r\n  * The async attribute allows the browser to render the page while the API loads\r\n  * The key parameter will contain your own API key (which is not needed for this tutorial)\r\n  * The callback parameter executes the initMap() function\r\n  -->\r\n          <agm-map  [latitude]=\"31.970131\" [longitude]=\"34.772044\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\r\n          </agm-map>\r\n</div>\r\n        <div class=\"w3-col s4 w3-justify\">\r\n          <h4>Store</h4>\r\n          <p><i class=\"fa fa-fw fa-map-marker\"></i> SuperNav</p>\r\n          <p><i class=\"fa fa-fw fa-phone\"></i> 03-123123123</p>\r\n          <p><i class=\"fa fa-fw fa-envelope\"></i> sn@supernav.com</p>\r\n          <h4>We accept</h4>\r\n          <p><i class=\"fa fa-fw fa-cc-amex\"></i> PayPal</p>\r\n          <p><i class=\"fa fa-fw fa-credit-card\"></i> Credit Card</p>\r\n          <br>\r\n          <i class=\"fa fa-facebook-official w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-instagram w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-snapchat w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-pinterest-p w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-twitter w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-linkedin w3-hover-opacity w3-large\"></i>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </footer>\r\n\r\n\r\n    <!-- End page content -->\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");





var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, producrService, userService) {
        this.router = router;
        this.producrService = producrService;
        this.userService = userService;
        this.topProducts = [];
        this.lat = 0;
        this.long = 0;
        this.user = false;
        this.admin = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token') != null) {
            this.user = true;
            this.userService.checkRole(localStorage.getItem('token'));
            this.userService.getCordinates(localStorage.getItem('token'));
            this.adminSub = this.userService.getUserRoleListener().subscribe(function (admin) {
                _this.admin = admin;
            });
        }
        this.username = localStorage.getItem('name');
        this.producrService.topSales();
        this.productSub = this.producrService.getProductUpdateListener().subscribe(function (productData) {
            _this.topProducts = productData;
        });
        setTimeout(function () {
            _this.cordinateSub = _this.userService.getCordinateUpdateListener().subscribe(function (productData) {
                _this.lat = productData[0];
                _this.long = productData[1];
            });
        }, 500);
    };
    HomePageComponent.prototype.ngHomeSignIn = function (username, email, password, passwordconf, city) {
        var SignInUser = {
            email: email.value,
            username: username.value,
            password: password.value,
            passwordConf: passwordconf.value,
            city: city.value
        };
        this.userService.createNewUser(SignInUser);
    };
    HomePageComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    HomePageComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    HomePageComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    HomePageComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    HomePageComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    HomePageComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    HomePageComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    HomePageComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    HomePageComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servises_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _servises_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://d3js.org/d3.v5.min.js\"></script>\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n    </div>\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button (click)=\"onShoppingList()\" class=\"w3-bar-item w3-button w3-padding\">Our Shopping List</button>\r\n    <button (click)=\"onOrders()\" class=\"w3-bar-item w3-button w3-padding\">Our Orders</button>\r\n  </nav>\r\n  <!-- Top menu on small screens -->\r\n  <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n    <div class=\"w3-bar-item w3-padding-24 w3-wide\">LOGO</div>\r\n    <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></a>\r\n  </header>\r\n  <!-- Overlay effect when opening sidebar on small screens -->\r\n  <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n  <!-- !PAGE CONTENT! -->\r\n  <div class=\"w3-main\" style=\"margin-left:250px\">\r\n    <!-- Push down content on small screens -->\r\n    <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n    <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n      <h1 class=\"w3-bar-item w3-text-grey w3-padding\">Our Shopping List</h1>\r\n    </div>\r\n    <!--<div class=\"w3-container\">\r\n    <table class=\"w3-table w3-striped\">\r\n      <tr>\r\n        <th><h4><b>Date Created</b></h4></th>\r\n        <th><h4><b>Total Price</b></h4></th>\r\n        <th><h4><b>Products</b></h4></th>\r\n      </tr>\r\n      <tr *ngFor=\"let order of orders\">\r\n        <th>{{order.dateCreated}}</th>\r\n        <th>{{order.totalPrice}}</th>\r\n        <th *ngFor=\"let o of order.cart\">{{o.name}}</th>\r\n      </tr>\r\n    </table>\r\n  </div>-->\r\n    <mat-accordion *ngFor=\"let order of orders\">\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header class=\"w3-button w3-block w3-left-align w3-light-grey\">\r\n          <mat-panel-title>\r\n            {{order.dateCreated}}\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            {{order.totalPrice}}\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <table class=\"w3-table \">\r\n          <tr>\r\n            <th><h4><b>Product Name</b></h4></th>\r\n            <th><h4><b>Product Price</b></h4></th>\r\n            <th><h4><b>Product Quantity</b></h4></th>\r\n            <th><h4><b>Product Category</b></h4></th>\r\n          </tr>\r\n          <tr *ngFor=\"let o of order.cart\">\r\n            <th><h4>{{o.name}}</h4></th>\r\n            <th><h4>{{o.price}}</h4></th>\r\n            <th><h4>{{o.quantity}}</h4></th>\r\n            <th><h4>{{o.category}}</h4></th>\r\n          </tr>\r\n        </table>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ShoppingCart, router) {
        this.ShoppingCart = ShoppingCart;
        this.router = router;
        this.orders = [];
        this.panelOpenState = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.ShoppingCart.getOrders(this.token);
        setTimeout(function () {
            _this.ordersSub = _this.ShoppingCart.getOrdersProductUpdateListener().subscribe(function (orders) {
                _this.orders = orders;
            });
        }, 500);
    };
    OrdersComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    OrdersComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    OrdersComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    OrdersComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    OrdersComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    OrdersComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    OrdersComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    OrdersComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    OrdersComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/our-products/our-products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/our-products/our-products.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\ni.am {\r\n  padding: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLXByb2R1Y3RzL291ci1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDOztBQUVEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvb3VyLXByb2R1Y3RzL291ci1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnczLXNpZGViYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53My13aWRlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmkuYW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/our-products/our-products.component.html":
/*!**********************************************************!*\
  !*** ./src/app/our-products/our-products.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://d3js.org/d3.v5.min.js\"></script>\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n    </div>\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button *ngIf=\"user==true\" (click)=\"onShoppingList()\" class=\"w3-bar-item w3-button w3-padding\">Our Shopping List</button>\r\n    <button *ngIf=\"user==true\" (click)=\"onOrders()\" class=\"w3-bar-item w3-button w3-padding\">Our Orders</button>\r\n  </nav>\r\n  <!-- Top menu on small screens -->\r\n  <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n    <div class=\"w3-bar-item w3-padding-24 w3-wide\">LOGO</div>\r\n    <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></a>\r\n  </header>\r\n  <!-- Overlay effect when opening sidebar on small screens -->\r\n  <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n  <!-- !PAGE CONTENT! -->\r\n  <div class=\"w3-main\" style=\"margin-left:250px\">\r\n    <!-- Push down content on small screens -->\r\n    <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n    <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n      <h1 class=\"w3-bar-item w3-text-grey w3-padding\">Our Products</h1>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input *ngIf=\"admin==true\" type=\"text\" #searchInput [(ngModel)]=\"smartsearch\" /> <button *ngIf=\"admin==true\" (click)=\"onSmartSearch()\" class=\"w3-bar-item w3-button w3-padding\">Smart Search</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Search By Name\" #nameInput [(ngModel)]=\"name\" />\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Min Price\" #priceInput [(ngModel)]=\"nimPrice\" />\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Max Price\" #priceInput [(ngModel)]=\"maxPrice\" />\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Search By Quantity\" #quantityInput [(ngModel)]=\"minQuantity\" (input)=\"Quantity\" />\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Search By Quantity\" #quantityInput [(ngModel)]=\"maxQuantity\" (input)=\"Quantity\" />\r\n    <button (click)=\"onMultiSearch()\" class=\"w3-bar-item w3-button w3-padding\">Search</button>\r\n    <button *ngIf=\"admin==true\" (click)=\"onCreate()\" class=\"w3-bar-item w3-button w3-padding\">Add Product</button>\r\n    <div class=\"w3-container\">\r\n      <table class=\"w3-table w3-striped\">\r\n        <tr>\r\n          <th><h4><b>First Name</b></h4></th>\r\n          <th><h4><b>Price</b></h4></th>\r\n          <th><h4><b>Quantity</b></h4></th>\r\n        </tr>\r\n        <tr *ngFor=\"let product of ourProducts\">\r\n          <th>{{product.name}}</th>\r\n          <th>{{product.price}}</th>\r\n          <th>{{product.quantity}}</th>\r\n          <th><button *ngIf=\"admin==true\" (click)=\"onDelete(product._id)\" class=\"w3-bar-item w3-button w3-padding\">Delete</button></th>\r\n          <th><button *ngIf=\"user==true\" (click)=\"onAddToCart(product._id,product.name,product.price,product.quantity,product.category)\" class=\"w3-bar-item w3-button w3-padding\">Add To Cart</button></th>\r\n          <th><button *ngIf=\"admin==true\" [routerLink]=\"['/app-product-edit',product._id,product.name,product.price,product.quantity,product.category]\" class=\"w3-bar-item w3-button w3-padding\">Edit</button></th>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/our-products/our-products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-products/our-products.component.ts ***!
  \********************************************************/
/*! exports provided: OurProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurProductsComponent", function() { return OurProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");







var OurProductsComponent = /** @class */ (function () {
    function OurProductsComponent(UserService, ShoppingCart, producrService, router, socket) {
        this.UserService = UserService;
        this.ShoppingCart = ShoppingCart;
        this.producrService = producrService;
        this.router = router;
        this.socket = socket;
        this.ourProducts = [];
        this.user = false;
        this.admin = false;
        this.smartsearch = "";
        this.arraySmart = [];
        this.name = "";
        this.token = "";
        this.socket.on('new-product', function (product) {
            producrService.addProduct(product);
        });
    }
    OurProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token') != null)
            this.user = true;
        this.producrService.getProducts();
        this.productSub = this.producrService.getProductUpdateListener().subscribe(function (productData) {
            _this.ourProducts = productData;
        });
        this.adminSub = this.UserService.getUserRoleListener().subscribe(function (admin) {
            _this.admin = admin;
        });
    };
    OurProductsComponent.prototype.onMultiSearch = function () {
        var _this = this;
        this.producrService.getProducts();
        setTimeout(function () {
            if (_this.name != "")
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.name.toLocaleLowerCase().match(_this.name.toLocaleLowerCase());
                });
            if (_this.minPrice != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.price >= _this.minPrice.valueOf();
                });
            if (_this.maxPrice != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.price <= _this.maxPrice.valueOf();
                });
            if (_this.minQuantity != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.quantity >= _this.minQuantity.valueOf();
                });
            if (_this.maxQuantity != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.quantity <= _this.maxQuantity.valueOf();
                });
        }, 100);
    };
    OurProductsComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    OurProductsComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    OurProductsComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    OurProductsComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    OurProductsComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    OurProductsComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    OurProductsComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    OurProductsComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    OurProductsComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    OurProductsComponent.prototype.onDelete = function (id) {
        this.token = localStorage.getItem('token');
        this.producrService.deleteProduct(this.token, id);
    };
    OurProductsComponent.prototype.onEdit = function (id, name, price, quantity, category) {
        this.token = localStorage.getItem('token');
        this.router.navigate(['/app-product-edit']);
        //this.producrService.editProduct(this.token, id, name,price, quantity, category);
    };
    OurProductsComponent.prototype.onCreate = function () {
        this.router.navigate(['/app-product-create']);
    };
    OurProductsComponent.prototype.onAddToCart = function (productId, name, price, productQuantity, category) {
        this.token = localStorage.getItem('token');
        this.ShoppingCart.addProduct(this.token, productId, name, price, productQuantity, category);
    };
    OurProductsComponent.prototype.onSmartSearch = function () {
        if (this.smartsearch === "") {
            alert("Null Search");
            this.producrService.getProducts();
        }
        else {
            this.producrService.smartSearch(localStorage.getItem('token'), this.smartsearch.split(" "));
        }
    };
    OurProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-products',
            template: __webpack_require__(/*! ./our-products.component.html */ "./src/app/our-products/our-products.component.html"),
            styles: [__webpack_require__(/*! ./our-products.component.css */ "./src/app/our-products/our-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"], _servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]])
    ], OurProductsComponent);
    return OurProductsComponent;
}());



/***/ }),

/***/ "./src/app/pie/pie.component.css":
/*!***************************************!*\
  !*** ./src/app/pie/pie.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZS9waWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pie/pie.component.html":
/*!****************************************!*\
  !*** ./src/app/pie/pie.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<p></p>\r\n<button (click)=\"onHome()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Back To Home</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/pie/pie.component.ts":
/*!**************************************!*\
  !*** ./src/app/pie/pie.component.ts ***!
  \**************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");





var PieComponent = /** @class */ (function () {
    function PieComponent(router, producrService) {
        this.router = router;
        this.producrService = producrService;
        this.user = false;
        this.data = [];
        this.topSalesData = [];
    }
    PieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token') != null)
            this.user = true;
        this.producrService.profitableFunc();
        setTimeout(function () {
            _this.productSub = _this.producrService.getProfitableUpdateListener().subscribe(function (productData) {
                _this.data = productData;
            });
            var color = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"](["red", "blue", "yellow", "brown", "cyan", "magenta", "pink", "orange", "purple", "rose", "gold", "silver"]);
            var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("p").append("svg")
                .attr("width", 750)
                .attr("height", 750).append('g')
                .attr('transform', 'translate(' + (700 / 2) + ',' + (700 / 2) + ')');
            var arc = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]().outerRadius(Math.min(700, 700) / 2).innerRadius(0);
            var pie = d3__WEBPACK_IMPORTED_MODULE_2__["pie"]().value(function (d) { return d.sales; }).sort(null);
            var path = svg.selectAll(".arc").data(pie(_this.data)).enter().append("g").attr("class", "arc");
            var r = 0;
            var p = Math.PI * 2;
            //var group = canvas.append("g")
            //.attr("transform", "translate(300,300)");
            path.append("path").attr("d", arc).attr("fill", function (d) { return color(d.data.ProductName); });
            path.append("text").attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("text-anchor", "middle")
                .attr("font-size", "1.2em")
                .text(function (d) { return (d.data.ProductName + "-" + d.data.sales); });
        }, 500);
    };
    PieComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie',
            template: __webpack_require__(/*! ./pie.component.html */ "./src/app/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.css */ "./src/app/pie/pie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servises_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/app/product-create/product-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-create/product-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jcmVhdGUvcHJvZHVjdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxzQ0FBc0M7Q0FDdkMiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnczLXJvdy1wYWRkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53My1zaWRlYmFyIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAudzMtd2lkZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-create/product-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-create/product-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button (click)=\"onAbout()\" class=\"w3-bar-item w3-button w3-padding\">About us</button>\r\n\r\n  </nav>\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Create Product</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #name class=\"w3-input w3-border\" type=\"text\" placeholder=\"name\" name=\"name\" required></p>\r\n          <p><input #price class=\"w3-input w3-border\" type=\"number\" placeholder=\"price\" name=\"price\" required></p>\r\n          <p><input #quantity class=\"w3-input w3-border\" type=\"number\" placeholder=\"quantity\" name=\"quantity\" required></p>\r\n          <p>\r\n            <select #category class=\"w3-input w3-border\" data-style=\"btn-info\" name=\"category\" required>\r\n              <option value=\"Fruits\">Fruits</option>\r\n              <option value=\"Milk Products\">Milk Products</option>\r\n            </select>\r\n          </p>\r\n          <button (click)=\"onCreate(name,price,quantity,category)\" type=\"submit\" class=\"w3-button w3-block w3-black\">Create</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/product-create/product-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-create/product-create.component.ts ***!
  \************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");





var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(router, userService, ProductService) {
        this.router = router;
        this.userService = userService;
        this.ProductService = ProductService;
        this.user = false;
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.user = true;
    };
    ProductCreateComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    ProductCreateComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    ProductCreateComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    ProductCreateComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    ProductCreateComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    ProductCreateComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    ProductCreateComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    ProductCreateComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    ProductCreateComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    ProductCreateComponent.prototype.onCreate = function (name, price, quantity, category) {
        this.token = localStorage.getItem('token');
        this.ProductService.createProduct(this.token, name.value, price.value, quantity.value, category.value);
        this.router.navigate(['/app-our-products']);
    };
    ProductCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.css */ "./src/app/product-create/product-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servises_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _servises_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button (click)=\"onAbout()\" class=\"w3-bar-item w3-button w3-padding\">About us</button>\r\n\r\n  </nav>\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Edit Product</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #name class=\"w3-input w3-border\" type=\"text\" placeholder=\"name\" name=\"name\" required value=\"{{productName}}\" disabled></p>\r\n          <p><input #price class=\"w3-input w3-border\" type=\"number\" placeholder=\"price\" name=\"price\" required value=\"{{productPrice}}\"></p>\r\n          <p><input #quantity class=\"w3-input w3-border\" type=\"number\" placeholder=\"quantity\" name=\"quantity\" required value=\"{{productQuantity}}\"></p>\r\n          <p><input #category class=\"w3-input w3-border\" data-style=\"btn-info\" name=\"category\" required value=\"{{productCategory}}\" disabled></p>\r\n          <button (click)=\"onSave(name,price,quantity,category)\" type=\"submit\" class=\"w3-button w3-block w3-black\">Save</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(ProductService, _route, router) {
        this.ProductService = ProductService;
        this._route = _route;
        this.router = router;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.productId = this._route.snapshot.params['product._id'];
        this.productName = this._route.snapshot.params['product.name'];
        this.productPrice = this._route.snapshot.params['product.price'];
        this.productQuantity = this._route.snapshot.params['product.quantity'];
        this.productCategory = this._route.snapshot.params['product.category'];
    };
    ProductEditComponent.prototype.onSave = function (name, price, quantity, category) {
        this.token = localStorage.getItem('token');
        this.ProductService.editProduct(this.token, this.productId, name.value, price.value, quantity.value, category.value);
        this.router.navigate(['/app-our-products']);
    };
    ProductEditComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    ProductEditComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    ProductEditComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    ProductEditComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    ProductEditComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    ProductEditComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    ProductEditComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    ProductEditComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    ProductEditComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/shopping-list/shopping-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/product/shopping-list/shopping-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/shopping-list/shopping-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product/shopping-list/shopping-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-search></sn-search>\r\n<div *ngFor=\"let product of shoppingProducts\">\r\n  <div>{{product.name}}</div>\r\n</div>\r\n<button (click)=\"returnHomePage()\">Home Page</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/product/shopping-list/shopping-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product/shopping-list/shopping-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.shoppingProducts = [];
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getShoppingList('1');
        this.listener = this.productService.getProductUpdateListener().
            subscribe(function (products) {
            _this.shoppingProducts = products;
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.listener.unsubscribe();
    };
    ShoppingListComponent.prototype.returnHomePage = function () {
        this.router.navigate(['/home-page']);
    };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/product/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/product/shopping-list/shopping-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #productSearch>\r\n<button (click)=\"onSearch(productSearch)\">Search Product</button>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.products = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listener = this.productService.getProductUpdateListener().
            subscribe(function (products) {
            _this.products = products;
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.listener.unsubscribe();
    };
    SearchComponent.prototype.onSearch = function (name) {
        this.productService.searchByName(name.value);
        //this.productService.editProduct(this.products[0]._id);
        //this.router.navigate(['/home-page']);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/servises/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servises/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");





var ProductService = /** @class */ (function () {
    function ProductService(http, socket) {
        this.http = http;
        this.socket = socket;
        this.products = [];
        this.top8Sales = [];
        this.profitable = [];
        this.profitableUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.profitable);
        this.productUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.products);
        this.productTopSales = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.top8Sales);
    }
    ProductService.prototype.addProduct = function (newProduct) {
        this.products.push(newProduct);
        this.productUpdated.next(this.products.slice());
    };
    ProductService.prototype.getProducts = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/products')
            .subscribe(function (responseData) {
            _this.products = responseData.products;
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.topSales = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/topSales')
            .subscribe(function (responseData) {
            _this.top8Sales = responseData.cartProducts;
            _this.productUpdated.next(_this.top8Sales.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.profitableFunc = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/topProfitable')
            .subscribe(function (responseData) {
            _this.profitable = responseData.cartProducts;
            _this.profitableUpdated.next(_this.profitable.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.getProfitableUpdateListener = function () {
        return this.profitableUpdated.asObservable();
    };
    ProductService.prototype.getProductUpdateListener = function () {
        return this.productUpdated.asObservable();
    };
    ProductService.prototype.searchByName = function (name) {
        this.getProducts();
        var searchProduct = this.products.filter(function (p) { return p.name == name; });
        this.products = searchProduct;
        this.productUpdated.next(this.products.slice());
    };
    ProductService.prototype.getShoppingList = function (id) {
        this.products = [];
        this.productUpdated.next(this.products.slice());
    };
    ProductService.prototype.deleteProduct = function (token, id) {
        var _this = this;
        var deleteJson = {
            token: token,
            productId: id
        };
        this.http.put('http://localhost:3000/sn/products/delete', deleteJson)
            .subscribe(function (responseData) {
            var updateProducts = _this.products.filter(function (product) { return product._id != id; });
            _this.products = updateProducts;
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.createProduct = function (token, name, price, quantity, category) {
        var _this = this;
        var createproduct = { token: token, name: name, price: price, quantity: quantity, category: category };
        this.http.post('http://localhost:3000/sn/products/create', createproduct)
            .subscribe(function (responseData) {
            var product = {
                _id: responseData.productId,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            };
            _this.socket.emit('new-product', product);
            _this.addProduct(product);
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.editProduct = function (token, id, name, price, quantity, category) {
        var _this = this;
        var editproduct = { token: token, productId: id, name: name, price: price, quantity: quantity, category: category };
        this.http.put('http://localhost:3000/sn/products/edit_product', editproduct)
            .subscribe(function (responseData) {
            var updateProducts = _this.products.filter(function (editproduct) { return editproduct._id != id; });
            var edittedProduct = {
                _id: id,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            };
            updateProducts.push(edittedProduct);
            _this.products = updateProducts;
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.smartSearch = function (token, searchProduct) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/products/smartSearch', { token: token, productNames: searchProduct })
            .subscribe(function (responseData) {
            _this.products = responseData.found;
            if (responseData.message === 'product dosent exist')
                alert(responseData.message);
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/servises/shoppingcart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servises/shoppingcart.service.ts ***!
  \**************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(http, router) {
        this.http = http;
        this.router = router;
        this.bigCitySpenders = [{}];
        this.updateReq = {};
        this.orders = [];
        this.shoppingCartProducts = [];
        this.cartUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.shoppingCartProducts);
        this.ordersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.orders);
        this.bigUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.bigSpenders);
    }
    ShoppingCart.prototype.getUserShoppingCart = function (token) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/myShoppingCart', { token: token })
            .subscribe(function (responseData) {
            if (responseData.message === 'your cart is empty')
                _this.shoppingCartProducts = [];
            else
                _this.shoppingCartProducts = responseData.cartProduct.cart;
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.getShoppingProductUpdateListener = function () {
        return this.cartUpdated.asObservable();
    };
    ShoppingCart.prototype.getOrdersProductUpdateListener = function () {
        return this.ordersUpdated.asObservable();
    };
    ShoppingCart.prototype.addProduct = function (token, productId, name, price, productQuantity, category) {
        var _this = this;
        var addproduct = { token: token, productId: productId, quantity: 1 };
        this.http.put('http://localhost:3000/sn/myShoppingCart/addProduct', addproduct)
            .subscribe(function (responsedata) {
            //const updateproducts = this.shoppingCartProducts.filter(addproduct => addproduct._id != productId);
            var edittedproduct = {
                _id: productId,
                name: name,
                price: price,
                quantity: 1,
                category: category
            };
            alert(responsedata.message);
            _this.shoppingCartProducts.push(edittedproduct);
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.deleteProduct = function (token, productId) {
        var _this = this;
        var deleteJson = {
            token: token,
            productId: productId
        };
        this.http.put('http://localhost:3000/sn/myShoppingCart/removeProduct', deleteJson)
            .subscribe(function (responseData) {
            var updateProducts = _this.shoppingCartProducts.filter(function (product) { return product._id != productId; });
            _this.shoppingCartProducts = updateProducts;
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.editProduct = function (token, id, name, price, quantity, category) {
        var _this = this;
        var editproduct = [{ _id: id, name: name, price: price, quantity: quantity, category: category }];
        this.updateReq = { token: token, editProducts: editproduct };
        this.http.put('http://localhost:3000/sn/myShoppingCart/updateCart', this.updateReq)
            .subscribe(function (responseData) {
            var updateProducts = _this.shoppingCartProducts.filter(function (editproduct) { return editproduct._id != id; });
            var edittedProduct = {
                _id: id,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            };
            updateProducts.push(edittedProduct);
            _this.shoppingCartProducts = updateProducts;
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.payment = function (token) {
        var _this = this;
        this.http.put('http://localhost:3000/sn/myShoppingCart/payment', { token: token })
            .subscribe(function (responseData) {
            if (responseData.message === 'cart has been filterd') {
                alert(responseData.message);
                _this.shoppingCartProducts = responseData.newCart.cart;
                _this.cartUpdated.next(_this.shoppingCartProducts.slice());
            }
            else {
                _this.shoppingCartProducts = [];
                _this.cartUpdated.next(_this.shoppingCartProducts.slice());
                _this.router.navigate(['/home-page']);
            }
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.bigSpender = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/bigSpenders')
            .subscribe(function (responseData) {
            _this.bigSpenders = responseData.cities;
            _this.bigUpdated.next(_this.bigSpenders.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.getbigSpendersUpdateListener = function () {
        return this.bigUpdated.asObservable();
    };
    ShoppingCart.prototype.getOrders = function (token) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/myOrders', { token: token })
            .subscribe(function (responseData) {
            if (responseData.message === 'your order list is empty') {
                alert('your order list is empty');
                _this.orders = [];
            }
            else
                _this.orders = responseData.ordersProducts;
            _this.ordersUpdated.next(_this.orders.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ShoppingCart);
    return ShoppingCart;
}());

/*
editNote(id: string,title:string,content:string) {
  const note: Note = { _id: id, title: title, content: content };
  this.http.put<{ message: string }>('http://localhost:3000/api/notes',note)
    .subscribe(noteData => {
      const updatedNotes = this.notes.filter(note => note._id != id);
      updatedNotes.push(note);
      this.notes = updatedNotes;
      this.noteUpdated.next([...this.notes]);
    });
}
getNotes() {
  this.http.get<{ message: string, notes: Note[] }>
    ('http://localhost:3000/api/notes')
    .subscribe(noteData => {
      this.notes = noteData.notes;
      this.noteUpdated.next([...this.notes]);
    });
}

getNoteUpdateListener() {
  return this.noteUpdated.asObservable();
}

addNote(title: string, content: string) {
  const note: Note = { _id: null, title: title, content: content };
  this.http.post<{ message: string, noteId: string }>('http://localhost:3000/api/notes', note)
    .subscribe((responseData) => {
      note._id = responseData.noteId;
      this.notes.push(note);
      this.noteUpdated.next([...this.notes]);
    });
}

deleteNote(noteId: string) {
  this.http.delete < { message: string }>("http://localhost:3000/api/notes/" + noteId)
    .subscribe(dataMessage => {
      const updatedNotes = this.notes.filter(note => note._id != noteId);
      this.notes = updatedNotes;
      this.noteUpdated.next([...this.notes]);
    });
}

updateNote(note: Note) {
  this.noteEdit.next(note);
}
getNoteEditListener() {
  return this.noteEdit.asObservable();
}
*/


/***/ }),

/***/ "./src/app/servises/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/servises/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserService = /** @class */ (function () {
    // private notes: Note[] = [];
    //  private noteUpdated = new Subject<Note[]>();
    //  private note: Note;
    // private noteEdit = new BehaviorSubject<Note>(this.note);
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.users);
        this.cordinate = [31.9702909, 34.768544399999996];
        this.cordinateUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.cordinate);
        this.admin = false;
        this.userRole = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.admin);
        if (localStorage.getItem('token') != null) {
            this.checkRole(localStorage.getItem('token'));
        }
    }
    /* not fixed create*/
    UserService.prototype.createNewUser = function (user) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/users/create', user)
            .subscribe(function (responseData) {
            localStorage.setItem('token', responseData.token);
            localStorage.setItem('name', user.username);
            _this.router.navigate(['/home-page']);
        }, function (error) {
            alert('Error' + ":" + error.massage);
        });
    };
    UserService.prototype.LogIn = function (user) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/profile', user)
            .subscribe(function (responseData) {
            localStorage.setItem('token', responseData.token);
            localStorage.setItem('name', user.username);
            _this.router.navigate(['/home-page']);
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    UserService.prototype.checkRole = function (token) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/users/checkRole', { token: token })
            .subscribe(function (responseData) {
            if (responseData.message == "Admin")
                _this.admin = true;
            else
                _this.admin = false;
            _this.userRole.next(_this.admin);
        });
    };
    UserService.prototype.getUserUpdateListener = function () {
        return this.userUpdated.asObservable();
    };
    UserService.prototype.getUserRoleListener = function () {
        return this.userRole.asObservable();
    };
    UserService.prototype.getCordinateUpdateListener = function () {
        return this.cordinateUpdated.asObservable();
    };
    UserService.prototype.getCordinates = function (token) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/users/location', { token: token })
            .subscribe(function (responseData) {
            _this.cordinate = [responseData.lat, responseData.long];
            _this.cordinateUpdated.next(_this.cordinate.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shopping-cart-edit/shopping-cart-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shopping-cart-edit/shopping-cart-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC1lZGl0L3Nob3BwaW5nLWNhcnQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQtZWRpdC9zaG9wcGluZy1jYXJ0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shopping-cart-edit/shopping-cart-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shopping-cart-edit/shopping-cart-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button (click)=\"onAbout()\" class=\"w3-bar-item w3-button w3-padding\">About us</button>\r\n\r\n  </nav>\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Edit Product</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #name class=\"w3-input w3-border\" type=\"text\" placeholder=\"name\" name=\"name\" required value=\"{{shoppingProductName}}\" disabled></p>\r\n          <p><input #price class=\"w3-input w3-border\" type=\"number\" placeholder=\"price\" name=\"price\" required value=\"{{shoppingProductPrice}}\" disabled></p>\r\n          <p><input #quantity class=\"w3-input w3-border\" type=\"number\" placeholder=\"quantity\" name=\"quantity\" required value=\"{{shoppingProductQuantity}}\"></p>\r\n          <p><input #category class=\"w3-input w3-border\" type=\"text\" placeholder=\"category\" name=\"category\" required value=\"{{shoppingProductCategory}}\"disabled></p>\r\n          <button (click)=\"onSave(quantity)\" type=\"submit\" class=\"w3-button w3-block w3-black\">Save</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/shopping-cart-edit/shopping-cart-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shopping-cart-edit/shopping-cart-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartEditComponent", function() { return ShoppingCartEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");




var ShoppingCartEditComponent = /** @class */ (function () {
    function ShoppingCartEditComponent(ShoppingCart, _route, router) {
        this.ShoppingCart = ShoppingCart;
        this._route = _route;
        this.router = router;
    }
    ShoppingCartEditComponent.prototype.ngOnInit = function () {
        this.shoppingProductId = this._route.snapshot.params['shopping._id'];
        this.shoppingProductName = this._route.snapshot.params['shopping.name'];
        this.shoppingProductPrice = this._route.snapshot.params['shopping.price'];
        this.shoppingProductQuantity = this._route.snapshot.params['shopping.quantity'];
        this.shoppingProductCategory = this._route.snapshot.params['shopping.category'];
    };
    ShoppingCartEditComponent.prototype.onSave = function (quantity) {
        this.token = localStorage.getItem('token');
        this.ShoppingCart.editProduct(this.token, this.shoppingProductId, this.shoppingProductName, this.shoppingProductPrice, quantity.value, this.shoppingProductCategory);
        this.router.navigate(['/app-shopping-cart']);
    };
    ShoppingCartEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart-edit',
            template: __webpack_require__(/*! ./shopping-cart-edit.component.html */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-edit.component.css */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShoppingCartEditComponent);
    return ShoppingCartEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztDQUNaOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzMtcm93LXBhZGRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnczLXNpZGViYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53My13aWRlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://d3js.org/d3.v5.min.js\"></script>\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n    </div>\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n    <button (click)=\"onShoppingList()\" class=\"w3-bar-item w3-button w3-padding\">Our Shopping List</button>\r\n    <button (click)=\"onOrders()\" class=\"w3-bar-item w3-button w3-padding\">Our Orders</button>\r\n  </nav>\r\n  <!-- Top menu on small screens -->\r\n  <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n    <div class=\"w3-bar-item w3-padding-24 w3-wide\">LOGO</div>\r\n    <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></a>\r\n  </header>\r\n  <!-- Overlay effect when opening sidebar on small screens -->\r\n  <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n  <!-- !PAGE CONTENT! -->\r\n  <div class=\"w3-main\" style=\"margin-left:250px\">\r\n    <!-- Push down content on small screens -->\r\n    <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n    <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n      <h1 class=\"w3-bar-item w3-text-grey w3-padding\">Our Shopping List</h1>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" #nameInput [(ngModel)]=\"name\" (input)=\"SearchByName()\" /> <button class=\"w3-bar-item w3-button w3-padding\">Search By Name</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" #priceInput [(ngModel)]=\"price\" (input)=\"SearchByPrice()\" /> <button class=\"w3-bar-item w3-button w3-padding\">Search By Price</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" #salesInput [(ngModel)]=\"sales\" (input)=\"SearchByQuantity()\" /> <button class=\"w3-bar-item w3-button w3-padding\">Search By Quantity</button>\r\n    <div class=\"w3-container\">\r\n      <table class=\"w3-table w3-striped\">\r\n        <tr>\r\n          <th><h4><b>Product Name</b></h4></th>\r\n          <th><h4><b>Price</b></h4></th>\r\n          <th><h4><b>Quantity</b></h4></th>\r\n          <th><h4><b>Full Price</b></h4></th>\r\n        </tr>\r\n        <tr *ngFor=\"let shopping of ourShoppingProducts\">\r\n          <th>{{shopping.name}}</th>\r\n          <th>{{shopping.price}}</th>\r\n          <th>{{shopping.quantity}}</th>\r\n          <th>{{shopping.quantity*shopping.price}}</th>\r\n          <th><button (click)=\"onDelete(shopping._id)\" class=\"w3-bar-item w3-button w3-padding\">Delete</button></th>\r\n          <th><button [routerLink]=\"['/app-shopping-cart-edit',shopping._id,shopping.name,shopping.price,shopping.quantity,shopping.category]\" class=\"w3-bar-item w3-button w3-padding\">Edit</button></th>\r\n        </tr>\r\n      </table>\r\n      <button (click)=\"onPayment()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Payment</button>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");





var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(ShoppingCart, producrService, router) {
        this.ShoppingCart = ShoppingCart;
        this.producrService = producrService;
        this.router = router;
        this.ourShoppingProducts = [];
        this.user = false;
    }
    //need to add full price
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token') != null)
            this.user = true;
        this.token = localStorage.getItem('token');
        this.ShoppingCart.getUserShoppingCart(this.token);
        setTimeout(function () {
            _this.shoppingProductSub = _this.ShoppingCart.getShoppingProductUpdateListener().subscribe(function (shopping) {
                _this.ourShoppingProducts = shopping;
            });
        }, 200); //only with timeout the observer can get the full response.
    };
    ShoppingCartComponent.prototype.onDelete = function (productId) {
        this.token = localStorage.getItem('token');
        this.ShoppingCart.deleteProduct(this.token, productId);
    };
    ShoppingCartComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    ShoppingCartComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    ShoppingCartComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    ShoppingCartComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    ShoppingCartComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    ShoppingCartComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    ShoppingCartComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    ShoppingCartComponent.prototype.onPayment = function () {
        this.token = localStorage.getItem('token');
        this.ShoppingCart.payment(this.token);
    };
    ShoppingCartComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"], _servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/sign-in-home-page/sign-in-home-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sign-in-home-page/sign-in-home-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi1ob21lLXBhZ2Uvc2lnbi1pbi1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4taG9tZS1wYWdlL3NpZ24taW4taG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sign-in-home-page/sign-in-home-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sign-in-home-page/sign-in-home-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n\r\n  </nav>\r\n\r\n  <!-- Top menu on small screens -->\r\n  <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n    <div class=\"w3-bar-item w3-padding-24 w3-wide\">LOGO</div>\r\n    <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></a>\r\n  </header>\r\n\r\n  <!-- Overlay effect when opening sidebar on small screens -->\r\n  <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n\r\n  <!-- !PAGE CONTENT! -->\r\n  <div class=\"w3-main\" style=\"margin-left:250px\">\r\n\r\n    <!-- Push down content on small screens -->\r\n    <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n    <!-- Top header\r\n    <header class=\"w3-container w3-xlarge\">\r\n      <p class=\"w3-left\">Jeans</p>\r\n      <p class=\"w3-right\">\r\n        <i class=\"fa fa-shopping-cart w3-margin-right\"></i>\r\n        <i class=\"fa fa-search\"></i>\r\n      </p>\r\n    </header>\r\n    -->\r\n    <!-- Image header\r\n    <div class=\"w3-display-container w3-container\">\r\n      <img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:50%\">\r\n    </div>\r\n        -->\r\n\r\n    <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n      <button (click)=\"onPie()\" class=\"w3-bar-item w3-button w3-padding\">Our Top 8 Saled Products</button>\r\n    </div>\r\n\r\n    <!-- Product grid -->\r\n    <div class=\"w3-row w3-grayscale\">\r\n      <div class=\"w3-col l3 s6\">\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{topProducts[0].name}}<br><b>{{topProducts[0].price}}$</b></p>\r\n        </div>\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{topProducts[1].name}}<br><b>{{topProducts[1].price}}$</b></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-col l3 s6\">\r\n        <div class=\"w3-container\">\r\n          <p>{{topProducts[2].name}}<br><b>{{topProducts[2].price}}$</b></p>\r\n        </div>\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{topProducts[3].name}}<br><b>{{topProducts[3].price}}$</b></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-col l3 s6\">\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{topProducts[4].name}}<br><b>{{topProducts[4].price}}$</b></p>\r\n        </div>\r\n        <div class=\"w3-container\">\r\n          <p>{{topProducts[5].name}}<br><b>{{topProducts[5].price}}$</b></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-col l3 s6\">\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{topProducts[6].name}}<br><b>{{topProducts[6].price}}$</b></p>\r\n        </div>\r\n        <div class=\"w3-container\">\r\n\r\n          <p>{{topProducts[7].name}}<br><b>{{topProducts[7].price}}$</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Footer -->\r\n    <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n      <div class=\"w3-row-padding\">\r\n        <div *ngIf=\"user==true\" class=\"w3-col s4\">\r\n          <h4>Hello {{username}}</h4>\r\n        </div>\r\n        <!-- google maps come here -->\r\n        <div class=\"w3-col s4\">\r\n          <h4></h4>\r\n          <style>\r\n            /* Set the size of the div element that contains the map */\r\n            #map {\r\n              height: 400px; /* The height is 400 pixels */\r\n              width: 100%; /* The width is the width of the web page */\r\n            }\r\n          </style>\r\n          <h4>Our Braches</h4>\r\n          <!--The div element for the map -->\r\n          <!--Load the API from the specified URL\r\n          * The async attribute allows the browser to render the page while the API loads\r\n          * The key parameter will contain your own API key (which is not needed for this tutorial)\r\n          * The callback parameter executes the initMap() function\r\n          -->\r\n\r\n\r\n\r\n          <agm-map [latitude]=\"31.970131\" [longitude]=\"34.772044\">\r\n            <agm-marker [latitude]=\"31.970131\" [longitude]=\"34.772044\"></agm-marker>\r\n          </agm-map>\r\n        </div>\r\n        <div class=\"w3-col s4 w3-justify\">\r\n          <h4>Store</h4>\r\n          <p><i class=\"fa fa-fw fa-map-marker\"></i> SuperNav</p>\r\n          <p><i class=\"fa fa-fw fa-phone\"></i> 03-123123123</p>\r\n          <p><i class=\"fa fa-fw fa-envelope\"></i> sn@supernav.com</p>\r\n          <h4>We accept</h4>\r\n          <p><i class=\"fa fa-fw fa-cc-amex\"></i> PayPal</p>\r\n          <p><i class=\"fa fa-fw fa-credit-card\"></i> Credit Card</p>\r\n          <br>\r\n          <i class=\"fa fa-facebook-official w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-instagram w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-snapchat w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-pinterest-p w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-twitter w3-hover-opacity w3-large\"></i>\r\n          <i class=\"fa fa-linkedin w3-hover-opacity w3-large\"></i>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n\r\n\r\n    <!-- End page content -->\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/sign-in-home-page/sign-in-home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sign-in-home-page/sign-in-home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: SignInHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInHomePageComponent", function() { return SignInHomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");





var SignInHomePageComponent = /** @class */ (function () {
    function SignInHomePageComponent(router, producrService, userService) {
        this.router = router;
        this.producrService = producrService;
        this.userService = userService;
        this.topProducts = [];
        this.user = false;
    }
    SignInHomePageComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.user = true;
        this.username = localStorage.getItem('name');
    };
    SignInHomePageComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    SignInHomePageComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    SignInHomePageComponent.prototype.onHome = function () {
        this.router.navigate(['/signin-homepage']);
    };
    SignInHomePageComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    SignInHomePageComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    SignInHomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-home-page',
            template: __webpack_require__(/*! ./sign-in-home-page.component.html */ "./src/app/sign-in-home-page/sign-in-home-page.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-home-page.component.css */ "./src/app/sign-in-home-page/sign-in-home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servises_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _servises_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SignInHomePageComponent);
    return SignInHomePageComponent;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n.w3-sidebar  {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7QUFDRDtFQUNFLGlDQUFpQztDQUNsQztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi53My1zaWRlYmFyICB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n\r\n\r\n  </nav>\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\r\n      <div class=\"w3-col s4\">\r\n        <h4>Log In</h4>\r\n        <p>Questions? Go ahead.</p>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #username class=\"w3-input w3-border\" type=\"text\" placeholder=\"username\" name=\"username\" required></p>\r\n          <p><input #password class=\"w3-input w3-border\" type=\"password\" placeholder=\"password\" name=\"password\" required></p>\r\n          <button (click)=\"ngLogin(username,password)\" type=\"submit\" class=\"w3-button w3-block w3-black\">LogIn</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servises/user.service */ "./src/app/servises/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = false;
    }
    //not fixed function
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.user = true;
    };
    LoginComponent.prototype.onCreateUser = function (form) {
    };
    LoginComponent.prototype.ngLogin = function (username, password) {
        var loginUser = {
            email: 'nevermind',
            username: username.value,
            password: password.value,
            passwordConf: 'nevermind',
            city: 'nevermind'
        };
        this.userService.LogIn(loginUser);
        //setTimeout(() => {
        //  if (localStorage.getItem('token') != null) {
        //    this.userService.checkRole(localStorage.getItem('token'));
        //  }
        //  this.router.navigate(['/home-page']);
        //}, 300);
    };
    LoginComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    LoginComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    LoginComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    LoginComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    LoginComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    LoginComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    LoginComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    LoginComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    LoginComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servises_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/sign-in/sign-in.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/sign-in/sign-in.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n.w3-sidebar  {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztDQUNaO0FBQ0Q7RUFDRSxpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnczLXJvdy1wYWRkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLnczLXNpZGViYXIgIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAudzMtd2lkZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/sign-in/sign-in.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/sign-in/sign-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n    <div class=\"w3-container w3-display-container w3-padding-16\">\r\n      <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n    </div>\r\n\r\n    <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n    <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n    <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n\r\n\r\n  </nav>\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Sign In</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #username class=\"w3-input w3-border\" type=\"text\" placeholder=\"username\" name=\"username\" required></p>\r\n          <p><input #email class=\"w3-input w3-border\" type=\"email\" placeholder=\"Email\" name=\"Email\" required></p>\r\n          <p><input #password class=\"w3-input w3-border\" type=\"password\" placeholder=\"Password\" name=\"Message\" required></p>\r\n          <p><input #passwordconf class=\"w3-input w3-border\" type=\"password\" placeholder=\"Please re-enter your chosen passeord\" name=\"Message\" required></p>\r\n          <p>\r\n            <select #city class=\"w3-input w3-border\" data-style=\"btn-info\" name=\"City\" required>\r\n              <option value=\"Bat-Yam\">Bat-Yam</option>\r\n              <option value=\"Rishon le zion\">Rishon le zion</option>\r\n              <option value=\"Rhovot\">Rhovot</option>\r\n              <option value=\"Ramat gan\">Ramat gan</option>\r\n              <option value=\"Yavne\">Yavne</option>\r\n              <option value=\"Ness ziona\">Ness ziona</option>\r\n            </select>\r\n          </p>\r\n          <button (click)=\"ngSingIn(username,email,password,passwordconf,city)\" type=\"submit\" class=\"w3-button w3-block w3-black\">SignIn</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/users/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servises_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servises/user.service */ "./src/app/servises/user.service.ts");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.user = true;
    };
    SignInComponent.prototype.ngSingIn = function (username, email, password, passwordconf, city) {
        var SignInUser = {
            email: email.value,
            username: username.value,
            password: password.value,
            passwordConf: passwordconf.value,
            city: city.value
        };
        this.userService.createNewUser(SignInUser);
    };
    SignInComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    SignInComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    SignInComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    SignInComponent.prototype.onPie = function () {
        this.router.navigate(['/app-pie']);
    };
    SignInComponent.prototype.onProducts = function () {
        this.router.navigate(['/app-our-products']);
    };
    SignInComponent.prototype.onUsers = function () {
        this.router.navigate(['/app-our-users']);
    };
    SignInComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/app-shopping-cart']);
    };
    SignInComponent.prototype.onSpenderPie = function () {
        this.router.navigate(['/app-big-spenders']);
    };
    SignInComponent.prototype.onOrders = function () {
        this.router.navigate(['/app-orders']);
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/users/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/users/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servises_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\daniel\Documents\GitHub\The most new version of superNav\SuperNAV\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map