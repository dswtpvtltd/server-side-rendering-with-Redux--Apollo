/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchCurrentUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql_query__ = __webpack_require__(16);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var FETCH_USERS = 'fetch_users';
var fetchUsers = function fetchUsers() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, client) {
      var variables, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              variables = {
                mainslider: 1,
                fourboxdata: 2,
                identifier: "home",
                limit: 10,
                page: 1
              };
              _context.next = 3;
              return client.query({
                query: __WEBPACK_IMPORTED_MODULE_0__graphql_query__["a" /* GET_ALL_HOME_SECTION_DATA */],
                variables
              });

            case 3:
              response = _context.sent;
              dispatch({
                type: FETCH_USERS,
                payload: response.data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};
var FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = function fetchCurrentUser() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, client) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: FETCH_CURRENT_USER,
                payload: {}
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_pages_Homepage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_pages_NotFound__ = __webpack_require__(17);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = ([_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]), {}, {
  routes: [_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__client_pages_Homepage__["a" /* default */]), {}, {
    path: "/",
    exact: true
  }), _objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_2__client_pages_NotFound__["a" /* default */]), {}, {
    path: "*"
  })]
})]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cross_fetch_polyfill__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cross_fetch_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cross_fetch_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apollo_react_ssr__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apollo_react_ssr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__apollo_react_ssr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_Routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_http_proxy__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_express_http_proxy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_renderer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_createStore__ = __webpack_require__(26);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 //without this server site rending by lifecyle methods will not work










var app = __WEBPACK_IMPORTED_MODULE_4_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_4_express___default.a.static('public')); //create a proxy for token athentication for login

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_7_express_http_proxy___default()('http://sailcorp.com:8888', {
  proxyReqOptDecorator(Opts) {
    Opts.headers['x-forwarded-host'] = 'localhost:3000';
    return Opts;
  }

}));
app.get('*', function (req, res) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_9__helpers_createStore__["a" /* default */])(req); //return an array of pending promises in network request

  var promises = Object(__WEBPACK_IMPORTED_MODULE_5_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_6__client_Routes__["a" /* default */], req.path).map(function (_ref) {
    var route = _ref.route;
    // pass server side store data for reference
    return route.loadData ? route.loadData(store.store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return promise.then(resolve).catch(resolve);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }); //complete all pending request before 
  //sending response on browser

  Promise.all(promises).then(function () {
    var context = {};
    var contents = Object(__WEBPACK_IMPORTED_MODULE_8__helpers_renderer__["a" /* default */])(req, store, context, res);
  }).catch(function (ex) {
    console.log("[server.js]", ex.message);
  });
});
app.listen(4000, function () {
  console.log("server running on port 4000");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__(3);




var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, Object(__WEBPACK_IMPORTED_MODULE_1_react_router_config__["renderRoutes"])(route.routes));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store_actions__["c" /* fetchCurrentUser */])());
  },
  component: App
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hooks_useSelectorQuery__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphql_query__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions_index__ = __webpack_require__(3);




 //import Image from '../../../public/assets/images/testimage.jpg';
//import './Homepage.css';

var Homepage = function Homepage(props) {
  var fetchUsers = props.fetchUsers,
      users = props.users;
  var variables = {
    mainslider: 1,
    fourboxdata: 2,
    identifier: "home",
    limit: 10,
    page: 1
  };

  var _useSelectorQuery = Object(__WEBPACK_IMPORTED_MODULE_2__hooks_useSelectorQuery__["a" /* useSelectorQuery */])(__WEBPACK_IMPORTED_MODULE_3__graphql_query__["a" /* GET_ALL_HOME_SECTION_DATA */], variables),
      data = _useSelectorQuery.data,
      loading = _useSelectorQuery.loading,
      error = _useSelectorQuery.error;

  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    fetchUsers();
  }, [fetchUsers]);

  if (loading || error) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Loading ...", error);
  }

  if (!users) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Loading data....");
  }

  console.log("Home Page: ", users);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, data.blogList.listAllBlog.map(function (blog) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: blog.post_id
    }, blog.title);
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_index__["d" /* fetchUsers */])());
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_index__["d" /* fetchUsers */])());
};

/* harmony default export */ __webpack_exports__["a"] = ({
  loadData,
  component: Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Homepage)
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSelectorQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apollo_client__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__apollo_client__);

var useSelectorQuery = function useSelectorQuery(selectQuery, variables) {
  var _useQuery = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["useQuery"])(selectQuery, {
    variables
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  return {
    loading,
    error,
    data
  };
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ALLCATEGORYURL */
/* unused harmony export GET_CATEGORIES */
/* unused harmony export GET_CATEGORY */
/* unused harmony export GET_ALLCATEGORYPRODUCTS */
/* unused harmony export GET_BLOGCATEGOEY */
/* unused harmony export GET_SINGLE_BLOG */
/* unused harmony export GET_BLOGWITHPAGINGDATA */
/* unused harmony export GET_ALLBLOGLISTS */
/* unused harmony export GET_ALLPRODUCTCATEGORY */
/* unused harmony export GET_CMSPAGE */
/* unused harmony export GET_ALLBANNERS */
/* unused harmony export GET_STORECONFIG */
/* unused harmony export GET_ALLATTRIBUTEFILTERONCATEGRY */
/* unused harmony export GET_ATTRIBUTEDEATILS_BY_CODE */
/* unused harmony export CATEGORY_PAGE_ALL_QUERY */
/* unused harmony export GET_PRODUCT_BY_SKU */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_HOME_SECTION_DATA; });
/* unused harmony export sendEnquiryData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apollo_client__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__apollo_client__);
function _templateObject17() {
  var data = _taggedTemplateLiteral(["\nmutation PostEnquiryData(\n  $itemid: Int,\n  $firstname: String,\n  $lastname: String,\n  $apistatus: Int = 0,\n  $companyname: String,\n  $comments: String,\n  $phone: String,\n  $altPhone: String,\n  $email: String,\n  $custentity_min_no_of_guests: Int,\n  $custentity_max_no_of_guests: Int,\n  $custentity_duration_type: String,\n  $custentity_duration: String,\n  $custentity_lead_cruise_date: String,\n  $custentity_number_person: String,\n  $custentity_how_did_you_hear_about_us: String,\n  $custentity_event_type: String,\n  $custentity_est_start_time: String,\n  $custentity_product_name_magento: String,\n  $description: String\n  ){\n  createNewEnquiry(\n    input: {\n      itemid: $itemid\n      firstName: $firstname\n      lastName: $lastname\n      apistatus: $apistatus\n      companyName: $companyname\n      comments: $comments\n      phone: $phone\n      altPhone: $altPhone\n      email: $email\n      custentity_min_no_of_guests: $custentity_min_no_of_guests\n      custentity_max_no_of_guests: $custentity_max_no_of_guests\n      custentity_duration_type: $custentity_duration_type\n      custentity_duration: $custentity_duration\n      custentity_lead_cruise_date: $custentity_lead_cruise_date\n      custentity_number_person: $custentity_number_person\n      custentity_how_did_you_hear_about_us: $custentity_how_did_you_hear_about_us\n      custentity_event_type: $custentity_event_type\n      custentity_est_start_time: $custentity_est_start_time\n      custentity_product_name_magento: $custentity_product_name_magento\n      description: $description\n    }\n  ){\n    apisuccess\n    enquiryid\n  }\n}"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\nquery HomePageData(\n  $mainslider: Int, \n  $fourboxdata: Int, \n  $identifier: String, \n  $limit: Int, \n  $page: Int){\n  mainbanner: allBanners(slider_id: $mainslider) {\n    listBanners {\n      banner_id\n      name\n      slidertitle\n      sliderdescription\n      order_banner\n      slider_id\n      click_url\n      image\n      image_alt\n      width\n      height\n    }\n  }\n  fourboxbanner: allBanners(slider_id: $fourboxdata) {\n    listBanners {\n      banner_id\n      name\n      slidertitle\n      sliderdescription\n      order_banner\n      slider_id\n      click_url\n      image\n      image_alt\n      width\n      height\n    }\n  }\n  cmsPage(identifier: $identifier) {\n          identifier\n          url_key\n          title\n          content\n          content_heading\n          page_layout\n          meta_title\n          meta_description\n          meta_keywords\n        }\n  blogList(limit: $limit, page: $page){\n    listAllBlog {\n      post_id\n      title\n      status\n      blogimage\n      url_key\n      use_comments\n      short_content\n      full_content\n      posted_by\n      meta_title\n      meta_tags\n      meta_description\n      created_at\n      updated_at\n      published_at\n      user_define_publish\n      notify_on_enable\n      display_short_content\n      comments_enabled\n      views\n    }\n  }\n}"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\nquery productdata($productsku: String!){\n  products(filter: { sku: { eq: $productsku } }) {\n    items {\n      id\n      name\n      sku\n      url_key\n      customattributes {\n        MultiSelectAttributes {\n          attributeenable\n          location\n          locationsummer\n          locationwinter\n          paymenttype\n          catering\n          byo\n        }\n      }\n      attributeenable\n      location\n      locationsummer\n      locationwinter\n      paymenttype\n      catering\n      byo\n      additional_information\n      length\n      maxguests\n      cabins\n      sleeps\n      formaldining\n      boatname\n      productattribute\n      builder\n      exterior_designer\n      upgrades\n      videoid\n      year\n      high_season\n      low_season\n      daycruise\n      day_cruise_4hr\n      daycruise_8hr\n      additionalhours\n      overnight\n      weekly\n      weekly_usd\n      stock_status\n      new_from_date\n      new_to_date\n      special_price\n      special_from_date\n      special_to_date\n      short_description {\n        html\n      }\n      description {\n        html\n      }\n      categories {\n        id\n        name\n        is_anchor\n        url_key\n        url_path\n      }\n      price_range {\n        minimum_price {\n          regular_price {\n            value\n            currency\n          }\n          final_price {\n            value\n            currency\n          }\n        }\n        maximum_price {\n          regular_price {\n            value\n            currency\n          }\n          final_price {\n            value\n            currency\n          }\n        }\n      }\n      additional_information\n      attribute_set_id\n      meta_title\n      meta_keyword\n      meta_description\n      manufacturer\n      country_of_manufacture\n      gift_message_available\n      image {\n        url\n        label\n      }\n      small_image {\n        url\n        label\n      }\n      thumbnail {\n        url\n        label\n      }\n      swatch_image\n      media_gallery {\n        url\n        label\n      }\n      categories {\n        id\n        name\n        is_anchor\n        url_key\n        url_path\n        level\n        display_mode\n        default_sort_by\n        description\n      }\n      related_products {\n        id\n        name\n        sku\n        paymenttype\n        url_key\n        image {\n          url\n          label\n          position\n        }\n        small_image {\n          url\n          label\n          position\n        }\n        thumbnail {\n          url\n          label\n          position\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n          maximum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n        }\n      }\n      upsell_products {\n        id\n        name\n        sku\n        paymenttype\n        url_key\n        image {\n          url\n          label\n          position\n        }\n        small_image {\n          url\n          label\n          position\n        }\n        thumbnail {\n          url\n          label\n          position\n        }\n        price_range {\n        minimum_price {\n          regular_price {\n            value\n            currency\n          }\n          final_price {\n            value\n            currency\n          }\n        }\n        maximum_price {\n          regular_price {\n            value\n            currency\n          }\n          final_price {\n            value\n            currency\n          }\n        }\n      }\n      }\n    }\n  }\n}"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\nquery productlist(\n  $currentPage: Int = 1\n  $inputText: String!\n  $pageSize: Int = 6\n  $filters: ProductAttributeFilterInput!\n  $sort: ProductAttributeSortInput,\n  $categoryid: String,\n  $attribute_code: String\n  ){\n  products(\n      currentPage: $currentPage\n      pageSize: $pageSize\n      search: $inputText\n      filter: $filters\n      sort: $sort\n    ) \n    {\n    total_count\n    aggregations{\n      attribute_code\n      label\n      count\n      options{\n        count\n        label\n        value\n      }\n    }\n    filters{\n        name\n        filter_items_count\n        request_var\n        filter_items{\n          label\n          value_string\n        }\n      }\n    items {\n        id\n        sku\n        name\n        url_key\n        stock_status\n        length\n        maxguests\n        cabins\n        sleeps\n        formaldining\n        locationsummer\n        locationwinter\n        boatname\n        productattribute\n        paymenttype\n        builder\n        exterior_designer\n        upgrades\n        videoid\n        year\n        location\n        high_season\n        low_season\n        daycruise\n        day_cruise_4hr\n        daycruise_8hr\n        additionalhours\n        overnight\n        weekly\n        weekly_usd\n        catering\n        image {\n          url\n          label\n          position\n        }\n        small_image {\n          url\n          label\n          position\n        }\n        thumbnail {\n          url\n          label\n          position\n        }\n        short_description {\n          html\n        }\n        description {\n          html\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n          maximum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n        }\n        new_from_date\n        new_to_date\n        special_price\n        special_from_date\n        special_to_date\n        gift_message_available\n        country_of_manufacture\n        price_tiers {\n          quantity\n          final_price {\n            value\n            currency\n          }\n          discount {\n            amount_off\n            percent_off\n          }\n        }\n      }\n  }\n  ", "\n  categoryList(filters: {ids: {eq: $categoryid}}) {\n    id\n    image\n    name\n    description\n    url_key\n    meta_title\n    meta_keywords\n    meta_description\n    children {\n      id\n      level\n      name\n      image\n      titlecat\n      path\n      url_path\n      url_key\n      children {\n        id\n        level\n        name\n        image\n        titlecat\n        path\n        url_path\n        url_key\n      }\n    }\n    products {\n      total_count\n      items {\n        id\n        sku\n        name\n        url_key\n        stock_status\n        image {\n          url\n          label\n          position\n        }\n        small_image {\n          url\n          label\n          position\n        }\n        thumbnail {\n          url\n          label\n          position\n        }\n        short_description {\n          html\n        }\n        description {\n          html\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n          maximum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n        }\n        new_from_date\n        new_to_date\n        special_price\n        special_from_date\n        special_to_date\n        gift_message_available\n        country_of_manufacture\n        price_tiers {\n          quantity\n          final_price {\n            value\n            currency\n          }\n          discount {\n            amount_off\n            percent_off\n          }\n        }\n      }\n      page_info {\n        current_page\n        page_size\n      }\n    }\n  }\n  customAttributeMetadata(\n    attributes: [\n      {\n        attribute_code: $attribute_code\n        entity_type: \"catalog_product\"\n      }\n    ]\n  ) {\n    items {\n      attribute_code\n      attribute_type\n      entity_type\n      input_type\n      attribute_options {\n       value\n       label\n     }\n    }\n  }\n}"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\nquery attributes($attribute_code: String){\n  customAttributeMetadata(\n    attributes: [\n      {\n        attribute_code: $attribute_code\n        entity_type: \"catalog_product\"\n      }\n    ]\n  ) {\n    items {\n      attribute_code\n      attribute_type\n      entity_type\n      input_type\n      attribute_options {\n       value\n       label\n     }\n    }\n  }\n}"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nquery category($categoryid: String){\n  products(filter: { category_id: { eq: $categoryid } }) {\n    total_count\n    aggregations{\n      attribute_code\n      label\n      count\n      options{\n        count\n        label\n        value\n      }\n    }\n  }\n}"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nquery banners($slider_id: Int){\n  allBanners(slider_id: $slider_id) {\n    listBanners {\n      banner_id\n      name\n      slidertitle\n      sliderdescription\n      order_banner\n      slider_id\n      click_url\n      image\n      image_alt\n      width\n      height\n    }\n  }\n}"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    query cmsPageDetail($identifier: String){\n        cmsPage(identifier: $identifier) {\n          identifier\n          url_key\n          title\n          content\n          content_heading\n          page_layout\n          meta_title\n          meta_description\n          meta_keywords\n        }\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["{\n  categoryAll{\n    allCategory{\n      category_id\n      name\n      level\n      path\n      url_path\n      url_key\n      image\n      description\n    }\n  }\n}"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["{\n  blogLists{\n    listAllBlog {\n      count\n      post_id\n      title\n      status\n      blogimage\n      url_key\n      use_comments\n      short_content\n      full_content\n      posted_by\n      meta_title\n      meta_tags\n      meta_description\n      created_at\n      updated_at\n      published_at\n      user_define_publish\n      notify_on_enable\n      display_short_content\n      comments_enabled\n      views\n    }\n  }\n}"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nquery ListNewsOnHome($limit: Int, $page: Int ){\n  blogList(limit: $limit, page: $page){\n    listAllBlog {\n      post_id\n      title\n      status\n      blogimage\n      url_key\n      use_comments\n      short_content\n      full_content\n      posted_by\n      meta_title\n      meta_tags\n      meta_description\n      created_at\n      updated_at\n      published_at\n      user_define_publish\n      notify_on_enable\n      display_short_content\n      comments_enabled\n      views\n    }\n  }\n}"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["{\n  blogList(post_id: 2) {\n    listAllBlog {\n      post_id\n      title\n      status\n      blogimage\n      url_key\n      use_comments\n      short_content\n      full_content\n      posted_by\n      meta_title\n      meta_tags\n      meta_description\n      created_at\n      updated_at\n      published_at\n      user_define_publish\n      notify_on_enable\n      display_short_content\n      comments_enabled\n      views\n    }\n  }\n}"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["{\n  blogCategory(category_id: 2) {\n    listAllCategory {\n      category_id\n      name\n      url_key\n      status\n      sort_order\n      meta_title\n      meta_tags\n      meta_description\n      created_at\n      updated_at\n      blogList{\n        listAllBlog{\n          post_id\n          title\n          status\n          blogimage\n          url_key\n          use_comments\n          short_content\n          full_content\n          posted_by\n          meta_title\n          meta_tags\n          meta_description\n          created_at\n          updated_at\n          published_at\n          user_define_publish\n          notify_on_enable\n          display_short_content\n          comments_enabled\n          views\n        }\n      }\n    }\n  }\n}"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nquery productlist(\n  $currentPage: Int = 1\n  $inputText: String!\n  $pageSize: Int = 6\n  $filters: ProductAttributeFilterInput!\n  $sort: ProductAttributeSortInput\n  ){\n  products(\n      currentPage: $currentPage\n      pageSize: $pageSize\n      search: $inputText\n      filter: $filters\n      sort: $sort\n    ) \n    {\n    total_count\n    filters{\n        name\n        filter_items_count\n        request_var\n        filter_items{\n          label\n          value_string\n        }\n      }\n    items {\n        id\n        sku\n        name\n        url_key\n        stock_status\n        image {\n          url\n          label\n          position\n        }\n        small_image {\n          url\n          label\n          position\n        }\n        thumbnail {\n          url\n          label\n          position\n        }\n        short_description {\n          html\n        }\n        description {\n          html\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n          maximum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n        }\n        new_from_date\n        new_to_date\n        special_price\n        special_from_date\n        special_to_date\n        gift_message_available\n        country_of_manufacture\n        price_tiers {\n          quantity\n          final_price {\n            value\n            currency\n          }\n          discount {\n            amount_off\n            percent_off\n          }\n        }\n      } \n  }\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nquery category($categoryid: String){\n  categoryList(filters: {ids: {eq: $categoryid}}) {\n    id\n    image\n    name\n    description\n    url_key\n    meta_title\n    meta_keywords\n    meta_description\n    children {\n      id\n      level\n      name\n      image\n      titlecat\n      path\n      url_path\n      url_key\n      children {\n        id\n        level\n        name\n        image\n        titlecat\n        path\n        url_path\n        url_key\n      }\n    }\n    products {\n      total_count\n      items {\n        id\n        sku\n        name\n        url_key\n        stock_status\n        image {\n          url\n          label\n          position\n        }\n        small_image {\n          url\n          label\n          position\n        }\n        thumbnail {\n          url\n          label\n          position\n        }\n        short_description {\n          html\n        }\n        description {\n          html\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n          maximum_price {\n            regular_price {\n              value\n              currency\n            }\n            final_price {\n              value\n              currency\n            }\n          }\n        }\n        new_from_date\n        new_to_date\n        special_price\n        special_from_date\n        special_to_date\n        gift_message_available\n        country_of_manufacture\n        price_tiers {\n          quantity\n          final_price {\n            value\n            currency\n          }\n          discount {\n            amount_off\n            percent_off\n          }\n        }\n      }\n      page_info {\n        current_page\n        page_size\n      }\n    }\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query category($categoryid: String){ \n        categoryList (filters: {ids: {eq: $categoryid}})\n        {\n            children_count\n            children {\n                id\n                level\n                name\n                titlecat\n                path\n                url_path\n                url_key\n                children {\n                    id\n                    level\n                    name\n                    titlecat\n                    path\n                    url_path\n                    url_key\n                }\n            }\n        }\n        cmsPages {\n            allPages {\n                name\n                identifier\n                content\n                page_layout\n            }\n        }\n        productCollection{\n          allProducts{\n            id\n            sku\n            name\n            url_key\n          }\n        }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n  reactRout{\n    urlKeyCategory {\n      category_id\n      name\n      path\n      url_path\n      url_key\n    }\n  }\n  cmsPages{\n    allPages{\n      identifier\n      name\n      page_layout\n      content\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_ALLCATEGORYURL = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject());
var GET_CATEGORIES = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject2());
var GET_CATEGORY = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject3());
/*
export const GET_PAGE_SIZE = gql`
    query getPageSize {
        storeConfig {
            id
            product_url_suffix
            category_url_suffix
            title_separator
            list_mode
            grid_per_page_values
            list_per_page_values
            grid_per_page
            list_per_page
            catalog_default_sort_by
        }
    }
`;
*/

var GET_ALLCATEGORYPRODUCTS = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject4());
/** get All blog category */

var GET_BLOGCATEGOEY = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject5());
/** get one blog by blog id */

var GET_SINGLE_BLOG = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject6());
/** get list of all blog and paging */

var GET_BLOGWITHPAGINGDATA = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject7());
/** get list of all blogs */

var GET_ALLBLOGLISTS = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject8());
/** get list of all category */

var GET_ALLPRODUCTCATEGORY = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject9());
/*
export const GET_CMSPAGES = gql`
    {
        cmsPages {
            allPages {
                name
                identifier
                content
                page_layout
            }
        }
    }
`;
*/

var GET_CMSPAGE = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject10());
var GET_ALLBANNERS = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject11());
var GET_STORECONFIG = "\nstoreConfig {\n    id\n    header_logo_src\n    logo_alt\n    logo_height\n    logo_width\n    head_shortcut_icon\n    product_url_suffix\n    category_url_suffix\n    title_separator\n    list_mode\n    grid_per_page_values\n    list_per_page_values\n    grid_per_page\n    list_per_page\n    catalog_default_sort_by\n}";
var GET_ALLATTRIBUTEFILTERONCATEGRY = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject12());
var GET_ATTRIBUTEDEATILS_BY_CODE = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject13());
/** get all details for category page and product listing */

var CATEGORY_PAGE_ALL_QUERY = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject14(), GET_STORECONFIG);
/** get product details for product page */

var GET_PRODUCT_BY_SKU = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject15());
var GET_ALL_HOME_SECTION_DATA = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject16());
var sendEnquiryData = Object(__WEBPACK_IMPORTED_MODULE_0__apollo_client__["gql"])(_templateObject17());

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);



var NotFound = function NotFound() {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, "404 - Not Found!"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], {
    to: "/"
  }, "Go Home"));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  component: NotFound
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_Routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apollo_client__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apollo_client_react_ssr__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apollo_client_react_ssr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__apollo_client_react_ssr__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, store, context, res) {
    var App;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // we can replace renderToString to renderToNodeStream for better TTFB
            App = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__apollo_client__["ApolloProvider"], {
              client: store.client
            }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
              store: store.store
            }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["StaticRouter"], {
              location: req.path,
              context: context
            }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_7__client_Routes__["a" /* default */])))));
            _context2.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_9__apollo_client_react_ssr__["renderToStringWithData"])(App).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
                var state, helmet, html;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return store.client.extract();

                      case 2:
                        state = _context.sent;
                        helmet = __WEBPACK_IMPORTED_MODULE_5_react_helmet__["Helmet"].renderStatic();
                        html = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
                          id: "root",
                          dangerouslySetInnerHTML: {
                            __html: content
                          }
                        }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
                          dangerouslySetInnerHTML: {
                            __html: "window.__APOLLO_STATE__=".concat(JSON.stringify(state).replace(/</g, '\\u003c'), ";")
                          }
                        }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
                          dangerouslySetInnerHTML: {
                            __html: "window.INITIAL_STATE=".concat(JSON.stringify(store.store.getState()).replace(/</g, '\\u003c'), ";")
                          }
                        })));
                        res.send("<!doctype html>\n".concat(__WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToStaticMarkup(html)));
                        res.end();

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x5) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_store_reducers_index__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apollo_client__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__apollo_client__);




/* harmony default export */ __webpack_exports__["a"] = (function (req) {
  var client = new __WEBPACK_IMPORTED_MODULE_3__apollo_client__["ApolloClient"]({
    link: Object(__WEBPACK_IMPORTED_MODULE_3__apollo_client__["createHttpLink"])({
      uri: 'http://sailcorp.com:8888/graphql',
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie')
      }
    }),
    cache: new __WEBPACK_IMPORTED_MODULE_3__apollo_client__["InMemoryCache"]()
  });
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__client_store_reducers_index__["a" /* default */], {}, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(client)));
  return {
    store,
    client
  };
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authReducer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersReducer__ = __webpack_require__(30);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  users: __WEBPACK_IMPORTED_MODULE_2__usersReducer__["a" /* default */],
  auth: __WEBPACK_IMPORTED_MODULE_1__authReducer__["a" /* default */]
}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_index__["a" /* FETCH_CURRENT_USER */]:
      return action.payload.data || false;

    default:
      return state;
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_index__["b" /* FETCH_USERS */]:
      return [].concat(_toConsumableArray(state), [action.payload]);

    default:
      return state;
  }
});

/***/ })
/******/ ]);