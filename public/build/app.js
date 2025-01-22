(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!***********************************************************************************************************************!*\
  !*** ./assets/controllers/app/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cropped-image-upload_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/cropped-image-upload_controller.js",
	"./modal-common_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-common_controller.js",
	"./modal-form_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-form_controller.js",
	"./select_song_duration_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/select_song_duration_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app/cropped-image-upload_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/cropped-image-upload_controller.js",
	"./app/modal-common_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-common_controller.js",
	"./app/modal-form_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-form_controller.js",
	"./app/select_song_duration_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/select_song_duration_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_autocomplete_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-autocomplete/dist/controller.js */ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js");
/* harmony import */ var tom_select_dist_css_tom_select_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tom-select/dist/css/tom-select.default.css */ "./node_modules/tom-select/dist/css/tom-select.default.css");
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-autocomplete--autocomplete': _symfony_ux_autocomplete_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_4__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/cropped-image-upload_controller.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/cropped-image-upload_controller.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_25__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "croppie", null);
    _defineProperty(_this, "currentFilename", null);
    _defineProperty(_this, "timeout", null);
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;
      this.croppie = new croppie__WEBPACK_IMPORTED_MODULE_25__(this.cropperTarget, {
        enableExif: true,
        viewport: {
          width: this.widthValue,
          height: this.heightValue,
          type: 'circle'
        },
        boundary: {
          width: this.widthValue,
          height: this.heightValue
        }
      });
      console.log(this.croppie);
      this.cropperTarget.addEventListener('update', function () {
        return _this2.cropImageWithTimeout();
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.croppie.destroy();
      this.croppie = null;
      this.currentFilename = null;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = null;
    }
  }, {
    key: "cropImageWithTimeout",
    value: function cropImageWithTimeout() {
      var _this3 = this;
      this.fileInputTarget.disabled = true;
      var spinner = this.labelTarget.querySelector('#spinner');
      if (spinner) {
        spinner.classList.remove('hidden');
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(function () {
        return _this3.cropImageAndClearTimeout();
      }, 500);
      this.fileInputTarget.disabled = false;
      if (spinner) {
        spinner.classList.add('hidden');
      }
    }
  }, {
    key: "cropImageAndClearTimeout",
    value: function cropImageAndClearTimeout() {
      this.cropImage();
      this.timeout = null;
    }
  }, {
    key: "readFile",
    value: function readFile(event) {
      var _this4 = this;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
          return _this4.initCropper(event);
        };
        this.currentFilename = input.files[0].name;
        reader.readAsDataURL(input.files[0]);
      }
    }
  }, {
    key: "initCropper",
    value: function initCropper(event) {
      this.imageWrapperTarget.classList.add('hidden');
      this.cropperWrapperTarget.classList.remove('hidden');
      this.initCropperWithUrl(event.target.result);
    }
  }, {
    key: "initCropperWithUrl",
    value: function initCropperWithUrl(imageUrl) {
      this.cropperWrapperTarget.classList.add('ready');
      this.croppie.bind({
        url: imageUrl
      }).then(function () {
        console.log('Bind complete');
      });
    }
  }, {
    key: "cropImage",
    value: function cropImage() {
      var _this5 = this;
      this.croppie.result({
        type: 'blob',
        size: 'viewport',
        format: 'png',
        circle: false,
        quality: 1
      }).then(function (blob) {
        return _this5.addBlobDataToInput(blob);
      });
    }
  }, {
    key: "addBlobDataToInput",
    value: function addBlobDataToInput(blob) {
      var filenameSplitted = this.currentFilename.split('.');
      filenameSplitted[filenameSplitted.length - 1] = 'png';
      var myFile = new File([blob], filenameSplitted.join('.'), {
        type: 'image/png',
        lastModified: new Date()
      });
      var dataTransfer = new DataTransfer();
      dataTransfer.items.add(myFile);
      this.fileInputTarget.files = dataTransfer.files;
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_24__.Controller);
_defineProperty(_default, "targets", ["fileInput", "cropper", "cropperWrapper", "imageWrapper", "label"]);
_defineProperty(_default, "values", {
  width: Number,
  height: Number
});


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-common_controller.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-common_controller.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! bootstrap/js/src/modal */ "./node_modules/bootstrap/js/src/modal.js");
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! bootstrap/js/src/tooltip */ "./node_modules/bootstrap/js/src/tooltip.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "modal", null);
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "openCommonModal",
    value: (
    /**
     * @param {Object} event
     * @param {Object} options
     * @param {string} options.title
     * @param {string} options.content
     * @param {string} options.url
     * @param {string} options.submitText
     * @param {string} options.declineText
     * @param {boolean} options.isAjax
     * @param {string} options.method
     * @param {boolean} options.isFormSubmit
     */
    function () {
      var _openCommonModal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event, options) {
        var defaultOptions, modalOptions;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              defaultOptions = {
                title: null,
                content: null,
                url: null,
                submitText: null,
                declineText: null,
                isAjax: false,
                method: 'GET',
                isFormSubmit: false
              };
              modalOptions = Object.assign({}, defaultOptions, options);
              this.modalTitleTarget.innerHTML = modalOptions.title;
              this.modalContentTarget.innerHTML = modalOptions.content;
              if (!modalOptions.submitText && !modalOptions.isFormSubmit) {
                this.submitTextTarget.classList.add('hidden');
              } else {
                this.submitTextTarget.classList.remove('hidden');
                this.submitTextTarget.innerHTML = modalOptions.submitText;
              }
              if (modalOptions.declineText) {
                this.declineTextTarget.innerHTML = modalOptions.declineText;
              }
              this.urlValue = modalOptions.url;
              this.isAjaxValue = modalOptions.isAjax;
              this.methodValue = modalOptions.method;
              this.isFormSubmitValue = modalOptions.isFormSubmit;
              if (!this.modal) {
                this.modal = new bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_35__["default"](this.modalTarget);
              }
              this._assignToolTipsInCommonModal();
              this.modal.show();
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openCommonModal(_x, _x2) {
        return _openCommonModal.apply(this, arguments);
      }
      return openCommonModal;
    }())
  }, {
    key: "submitCommonModal",
    value: function submitCommonModal(event) {
      if (this.isFormSubmitValue) {
        this._submitCommonModalWithForm(event);
      } else {
        this._submitUrlValue(event, this.urlValue, this.methodValue);
      }
    }
  }, {
    key: "_submitUrlValue",
    value: function () {
      var _submitUrlValue2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event, url, method) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              if (this.isAjaxValue) {
                fetch(url, {
                  method: method,
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                }).then(function (response) {
                  return response.text();
                }).then(function (json) {
                  window.location.reload();
                })["catch"](function (error) {
                  console.log(error);
                });
              } else if (method === 'GET' && typeof Turbo !== 'undefined') {
                Turbo.visit(url);
              } else {
                window.location.href = url;
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function _submitUrlValue(_x3, _x4, _x5) {
        return _submitUrlValue2.apply(this, arguments);
      }
      return _submitUrlValue;
    }()
  }, {
    key: "_submitCommonModalWithForm",
    value: function () {
      var _submitCommonModalWithForm2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
        var form, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              form = this.modalContentTarget.getElementsByTagName('form')[0];
              _context3.next = 4;
              return fetch(form.action, {
                method: 'post',
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                },
                body: new FormData(form)
              });
            case 4:
              response = _context3.sent;
              if (response.ok) {
                _context3.next = 12;
                break;
              }
              _context3.next = 8;
              return response.text();
            case 8:
              this.modalContentTarget.innerHTML = _context3.sent;
              this._assignToolTipsInCommonModal();
              _context3.next = 26;
              break;
            case 12:
              if (!response.headers.has('x-redirect-uri')) {
                _context3.next = 24;
                break;
              }
              if (!(response.headers.has('x-redirect-to-page') && response.headers.get('x-redirect-to-page'))) {
                _context3.next = 18;
                break;
              }
              this.modal.hide();
              window.location.href = response.headers.get('x-redirect-uri');
              _context3.next = 22;
              break;
            case 18:
              _context3.next = 20;
              return loadContentFromUrl(response.headers.get('x-redirect-uri'));
            case 20:
              this.modalBodyTarget.innerHTML = _context3.sent;
              this._assignToolTipsInCommonModal();
            case 22:
              _context3.next = 26;
              break;
            case 24:
              //close form modal
              this.modal.hide();
              window.location.reload();
            case 26:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _submitCommonModalWithForm(_x6) {
        return _submitCommonModalWithForm2.apply(this, arguments);
      }
      return _submitCommonModalWithForm;
    }()
  }, {
    key: "_assignToolTipsInCommonModal",
    value: function _assignToolTipsInCommonModal() {
      var tooltipElements = this.modalContentTarget.querySelectorAll('[data-toggle="tooltip"]');
      tooltipElements.forEach(function (element) {
        var placement = element.getAttribute('data-placement') || 'auto';
        new bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_36__["default"](element, {
          placement: placement
        });
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_34__.Controller);
_defineProperty(_default, "targets", ['modalTitle', 'modalContent', 'submitText', 'declineText', 'modal']);
_defineProperty(_default, "values", {
  url: String,
  isAjax: Boolean,
  isFormSubmit: Boolean,
  method: String
});

function loadContentFromUrl(_x7) {
  return _loadContentFromUrl.apply(this, arguments);
}
function _loadContentFromUrl() {
  _loadContentFromUrl = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url) {
    var method,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          method = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 'GET';
          return _context4.abrupt("return", fetch(url, {
            method: method,
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          }).then(function (response) {
            return response.text();
          }).then(function (html) {
            return html;
          })["catch"](function (error) {
            console.log(error);
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _loadContentFromUrl.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-form_controller.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/modal-form_controller.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
































function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "openModal",
    value: function () {
      var _openModal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.t0 = this.modalCommonOutlet;
              _context.t1 = event;
              _context.t2 = this.titleValue;
              _context.next = 6;
              return loadContentFromUrl(this.formUrlValue);
            case 6:
              _context.t3 = _context.sent;
              _context.t4 = this.isAjaxValue;
              _context.t5 = this.methodValue;
              _context.t6 = this.submitTextValue;
              _context.t7 = this.declineTextValue;
              _context.t8 = {
                title: _context.t2,
                content: _context.t3,
                isAjax: _context.t4,
                method: _context.t5,
                isFormSubmit: true,
                submitText: _context.t6,
                declineText: _context.t7
              };
              _context.t0.openCommonModal.call(_context.t0, _context.t1, _context.t8);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openModal(_x) {
        return _openModal.apply(this, arguments);
      }
      return openModal;
    }()
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_32__.Controller);
_defineProperty(_default, "outlets", ['modal-common']);
_defineProperty(_default, "values", {
  formUrl: String,
  title: String,
  declineText: String,
  submitText: String
});

function loadContentFromUrl(_x2) {
  return _loadContentFromUrl.apply(this, arguments);
}
function _loadContentFromUrl() {
  _loadContentFromUrl = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var method,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          method = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'GET';
          return _context2.abrupt("return", fetch(url, {
            method: method,
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          }).then(function (response) {
            return response.text();
          }).then(function (html) {
            return html;
          })["catch"](function (error) {
            console.log(error);
          }));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loadContentFromUrl.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/select_song_duration_controller.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/select_song_duration_controller.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.updateLabels(); // Initialize labels on page load
    }
  }, {
    key: "adjust",
    value: function adjust() {
      var startValue = parseInt(this.startTarget.value, 10);
      var endValue = parseInt(this.endTarget.value, 10);
      var range = parseInt(this.rangeTarget.innerHTML, 10);
      var maximum = parseInt(this.maximumTarget.innerHTML, 10);

      // end should be after start
      if (startValue >= endValue) {
        endValue = startValue + range;
      }
      if (endValue - startValue > range) {
        endValue = startValue + range;
      }

      // Update input values
      this.startTarget.value = startValue;
      this.endTarget.value = endValue;
      this.updateLabels();
    }
  }, {
    key: "updateLabels",
    value: function updateLabels() {
      var startMinute = Math.floor(this.startTarget.value / 60);
      var startSecond = (this.startTarget.value % 60).toString().padStart(2, '0');
      var endMinute = Math.floor(this.endTarget.value / 60);
      var endSecond = (this.endTarget.value % 60).toString().padStart(2, '0');
      this.startLabelTarget.textContent = "".concat(startMinute, ":").concat(startSecond);
      this.endLabelTarget.textContent = "".concat(endMinute, ":").concat(endSecond);
      this.currentLabelTarget.textContent = this.endTarget.value - this.startTarget.value;
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_24__.Controller);
_defineProperty(_default, "targets", ['range', "maximum", "start", "end", "startLabel", "endLabel", "currentLabel"]);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */


if (bootstrap__WEBPACK_IMPORTED_MODULE_2__) {
  console.log('Bootstrap is loaded successfully:', bootstrap__WEBPACK_IMPORTED_MODULE_2__);
} else {
  console.log('Bootstrap is NOT loaded.');
}
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__.startStimulusApp)(__webpack_require__("./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/esnext.iterator.every.js */ "./node_modules/core-js/modules/esnext.iterator.every.js");
/* harmony import */ var core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/esm/tom-select.complete.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






























































/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var _default_1_instances, _default_1_getCommonConfig, _default_1_createAutocomplete, _default_1_createAutocompleteWithHtmlContents, _default_1_createAutocompleteWithRemoteData, _default_1_stripTags, _default_1_mergeObjects, _default_1_createTomSelect;
var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _callSuper(this, default_1, arguments);
    _default_1_instances.add(_this);
    _this.isObserving = false;
    _this.hasLoadedChoicesPreviously = false;
    _this.originalOptions = [];
    return _this;
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      if (!this.mutationObserver) {
        this.mutationObserver = new MutationObserver(function (mutations) {
          _this2.onMutations(mutations);
        });
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.selectElement) {
        this.originalOptions = this.createOptionsDataStructure(this.selectElement);
      }
      this.initializeTomSelect();
    }
  }, {
    key: "initializeTomSelect",
    value: function initializeTomSelect() {
      if (this.selectElement) {
        this.selectElement.setAttribute('data-skip-morph', '');
      }
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithRemoteData).call(this, this.urlValue, this.hasMinCharactersValue ? this.minCharactersValue : null);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocomplete).call(this);
      this.startMutationObserver();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.stopMutationObserver();
      var currentSelectedValues = [];
      if (this.selectElement) {
        if (this.selectElement.multiple) {
          currentSelectedValues = Array.from(this.selectElement.options).filter(function (option) {
            return option.selected;
          }).map(function (option) {
            return option.value;
          });
        } else {
          currentSelectedValues = [this.selectElement.value];
        }
      }
      this.tomSelect.destroy();
      if (this.selectElement) {
        if (this.selectElement.multiple) {
          Array.from(this.selectElement.options).forEach(function (option) {
            option.selected = currentSelectedValues.includes(option.value);
          });
        } else {
          this.selectElement.value = currentSelectedValues[0];
        }
      }
    }
  }, {
    key: "getMaxOptions",
    value: function getMaxOptions() {
      return this.selectElement ? this.selectElement.options.length : 50;
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used on an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'autocomplete'
      });
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue === 'false') {
        return false;
      }
      if (this.preloadValue === 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }, {
    key: "resetTomSelect",
    value: function resetTomSelect() {
      if (this.tomSelect) {
        this.dispatchEvent('before-reset', {
          tomSelect: this.tomSelect
        });
        this.stopMutationObserver();
        var currentHtml = this.element.innerHTML;
        var currentValue = this.tomSelect.getValue();
        this.tomSelect.destroy();
        this.element.innerHTML = currentHtml;
        this.initializeTomSelect();
        this.tomSelect.setValue(currentValue);
        this.startMutationObserver();
      }
    }
  }, {
    key: "changeTomSelectDisabledState",
    value: function changeTomSelectDisabledState(isDisabled) {
      this.stopMutationObserver();
      if (isDisabled) {
        this.tomSelect.disable();
      } else {
        this.tomSelect.enable();
      }
      this.startMutationObserver();
    }
  }, {
    key: "startMutationObserver",
    value: function startMutationObserver() {
      if (!this.isObserving && this.mutationObserver) {
        this.mutationObserver.observe(this.element, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
          attributeOldValue: true
        });
        this.isObserving = true;
      }
    }
  }, {
    key: "stopMutationObserver",
    value: function stopMutationObserver() {
      if (this.isObserving && this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.isObserving = false;
      }
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this3 = this;
      var changeDisabledState = false;
      var requireReset = false;
      mutations.forEach(function (mutation) {
        switch (mutation.type) {
          case 'attributes':
            if (mutation.target === _this3.element && mutation.attributeName === 'disabled') {
              changeDisabledState = true;
              break;
            }
            if (mutation.target === _this3.element && mutation.attributeName === 'multiple') {
              var isNowMultiple = _this3.element.hasAttribute('multiple');
              var wasMultiple = mutation.oldValue === 'multiple';
              if (isNowMultiple !== wasMultiple) {
                requireReset = true;
              }
              break;
            }
            break;
        }
      });
      var newOptions = this.selectElement ? this.createOptionsDataStructure(this.selectElement) : [];
      var areOptionsEquivalent = this.areOptionsEquivalent(newOptions);
      if (!areOptionsEquivalent || requireReset) {
        this.originalOptions = newOptions;
        this.resetTomSelect();
      }
      if (changeDisabledState) {
        this.changeTomSelectDisabledState(this.formElement.disabled);
      }
    }
  }, {
    key: "createOptionsDataStructure",
    value: function createOptionsDataStructure(selectElement) {
      return Array.from(selectElement.options).map(function (option) {
        return {
          value: option.value,
          text: option.text
        };
      });
    }
  }, {
    key: "areOptionsEquivalent",
    value: function areOptionsEquivalent(newOptions) {
      var filteredOriginalOptions = this.originalOptions.filter(function (option) {
        return option.value !== '';
      });
      var filteredNewOptions = newOptions.filter(function (option) {
        return option.value !== '';
      });
      var originalPlaceholderOption = this.originalOptions.find(function (option) {
        return option.value === '';
      });
      var newPlaceholderOption = newOptions.find(function (option) {
        return option.value === '';
      });
      if (originalPlaceholderOption && newPlaceholderOption && originalPlaceholderOption.text !== newPlaceholderOption.text) {
        return false;
      }
      if (filteredOriginalOptions.length !== filteredNewOptions.length) {
        return false;
      }
      var normalizeOption = function normalizeOption(option) {
        return "".concat(option.value, "-").concat(option.text);
      };
      var originalOptionsSet = new Set(filteredOriginalOptions.map(normalizeOption));
      var newOptionsSet = new Set(filteredNewOptions.map(normalizeOption));
      return originalOptionsSet.size === newOptionsSet.size && _toConsumableArray(originalOptionsSet).every(function (option) {
        return newOptionsSet.has(option);
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_59__.Controller);
_default_1_instances = new WeakSet(), _default_1_getCommonConfig = function _default_1_getCommonConfig() {
  var _this4 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this4.noResultsFoundTextValue, "</div>");
    },
    option_create: function option_create(data, escapeData) {
      return "<div class=\"create\">".concat(_this4.createOptionTextValue.replace('%placeholder%', "<strong>".concat(escapeData(data.input), "</strong>")), "</div>");
    }
  };
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this4.tomSelect.setTextboxValue('');
    },
    closeAfterSelect: true,
    onOptionAdd: function onOptionAdd(value, data) {
      var parentElement = _this4.tomSelect.input;
      var optgroupData = null;
      var optgroup = data[_this4.tomSelect.settings.optgroupField];
      if (optgroup && _this4.tomSelect.optgroups) {
        optgroupData = _this4.tomSelect.optgroups[optgroup];
        if (optgroupData) {
          var optgroupElement = parentElement.querySelector("optgroup[label=\"".concat(optgroupData.label, "\"]"));
          if (optgroupElement) {
            parentElement = optgroupElement;
          }
        }
      }
      var optionElement = document.createElement('option');
      optionElement.value = value;
      optionElement.text = data[_this4.tomSelect.settings.labelField];
      var optionOrder = data.$order;
      var orderedOption = null;
      for (var _i = 0, _Object$entries = Object.entries(_this4.tomSelect.options); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          tomSelectOption = _Object$entries$_i[1];
        if (tomSelectOption.$order === optionOrder) {
          orderedOption = parentElement.querySelector(":scope > option[value=\"".concat(tomSelectOption[_this4.tomSelect.settings.valueField], "\"]"));
          break;
        }
      }
      if (orderedOption) {
        orderedOption.insertAdjacentElement('afterend', optionElement);
      } else if (optionOrder >= 0) {
        parentElement.append(optionElement);
      } else {
        parentElement.prepend(optionElement);
      }
    }
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _default_1_createAutocomplete = function _default_1_createAutocomplete() {
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.getMaxOptions()
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithHtmlContents = function _default_1_createAutocompleteWithHtmlContents() {
  var _commonConfig$labelFi,
    _this5 = this;
  var commonConfig = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this);
  var labelField = (_commonConfig$labelFi = commonConfig.labelField) !== null && _commonConfig$labelFi !== void 0 ? _commonConfig$labelFi : 'text';
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, commonConfig, {
    maxOptions: this.getMaxOptions(),
    score: function score(search) {
      var scoringFunction = _this5.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(_objectSpread(_objectSpread({}, item), {}, {
          text: __classPrivateFieldGet(_this5, _default_1_instances, "m", _default_1_stripTags).call(_this5, item[labelField])
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item[labelField], "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item[labelField], "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithRemoteData = function _default_1_createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _commonConfig$labelFi2,
    _this7 = this;
  var commonConfig = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this);
  var labelField = (_commonConfig$labelFi2 = commonConfig.labelField) !== null && _commonConfig$labelFi2 !== void 0 ? _commonConfig$labelFi2 : 'text';
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, commonConfig, {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this6 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this6.setNextUrl(query, json.next_page);
        callback(json.results.options || json.results, json.results.optgroups || []);
      })["catch"](function () {
        return callback([], []);
      });
    },
    shouldLoad: function shouldLoad(query) {
      if (null !== minCharacterLength) {
        return query.length >= minCharacterLength;
      }
      if (_this7.hasLoadedChoicesPreviously) {
        return true;
      }
      if (query.length > 0) {
        _this7.hasLoadedChoicesPreviously = true;
      }
      return query.length >= 3;
    },
    optgroupField: 'group_by',
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item[labelField], "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2[labelField], "</div>");
      },
      loading_more: function loading_more() {
        return "<div class=\"loading-more-results\">".concat(_this7.loadingMoreTextValue, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this7.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this7.noResultsFoundTextValue, "</div>");
      },
      option_create: function option_create(data, escapeData) {
        return "<div class=\"create\">".concat(_this7.createOptionTextValue.replace('%placeholder%', "<strong>".concat(escapeData(data.input), "</strong>")), "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_stripTags = function _default_1_stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _default_1_mergeObjects = function _default_1_mergeObjects(object1, object2) {
  return _objectSpread(_objectSpread({}, object1), object2);
}, _default_1_createTomSelect = function _default_1_createTomSelect(options) {
  var preConnectPayload = {
    options: options
  };
  this.dispatchEvent('pre-connect', preConnectPayload);
  var tomSelect = new tom_select__WEBPACK_IMPORTED_MODULE_60__["default"](this.formElement, options);
  var connectPayload = {
    tomSelect: tomSelect,
    options: options
  };
  this.dispatchEvent('connect', connectPayload);
  return tomSelect;
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  loadingMoreText: String,
  noResultsFoundText: String,
  noMoreResultsText: String,
  createOptionText: String,
  minCharacters: Number,
  tomSelectOptions: Object,
  preload: String
};


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }





















































































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  return _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
}();
var RequestBuilder = /*#__PURE__*/function () {
  function RequestBuilder(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
    _classCallCheck(this, RequestBuilder);
    this.url = url;
    this.method = method;
  }
  return _createClass(RequestBuilder, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html',
        'X-Requested-With': 'XMLHttpRequest'
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.method === 'get' && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set('props', JSON.stringify(props));
        params.set('updated', JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) {
          params.set('propsFromParent', JSON.stringify(updatedPropsFromParent));
        }
        if (hasFingerprints) {
          params.set('children', JSON.stringify(children));
        }
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) {
          requestData.propsFromParent = updatedPropsFromParent;
        }
        if (hasFingerprints) {
          requestData.children = children;
        }
        if (actions.length > 0) {
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        var formData = new FormData();
        formData.append('data', JSON.stringify(requestData));
        for (var _i = 0, _Object$entries = Object.entries(files); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) {
            formData.append(key, value[i]);
          }
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      var urlEncodedJsonData = new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
    _classCallCheck(this, Backend);
    this.requestBuilder = new RequestBuilder(url, method);
  }
  return _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  return _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
}();
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var componentMapByElement = new WeakMap();
var componentMapByComponent = new Map();
var registerComponent = function registerComponent(component) {
  componentMapByElement.set(component.element, component);
  componentMapByComponent.set(component, component.name);
};
var unregisterComponent = function unregisterComponent(component) {
  componentMapByElement["delete"](component.element);
  componentMapByComponent["delete"](component);
};
var getComponent = function getComponent(element) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var maxCount = 10;
    var interval = setInterval(function () {
      var component = componentMapByElement.get(element);
      if (component) {
        clearInterval(interval);
        resolve(component);
      }
      count++;
      if (count > maxCount) {
        clearInterval(interval);
        reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
      }
    }, 5);
  });
};
var findComponents = function findComponents(currentComponent, onlyParents, onlyMatchName) {
  var components = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) {
      return;
    }
    if (onlyMatchName && componentName !== onlyMatchName) {
      return;
    }
    components.push(component);
  });
  return components;
};
var findChildren = function findChildren(currentComponent) {
  var children = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (currentComponent === component) {
      return;
    }
    if (!currentComponent.element.contains(component.element)) {
      return;
    }
    var foundChildComponent = false;
    componentMapByComponent.forEach(function (childComponentName, childComponent) {
      if (foundChildComponent) {
        return;
      }
      if (childComponent === component) {
        return;
      }
      if (childComponent.element.contains(component.element)) {
        foundChildComponent = true;
      }
    });
    children.push(component);
  });
  return children;
};
var findParent = function findParent(currentComponent) {
  var parentElement = currentComponent.element.parentElement;
  while (parentElement) {
    var component = componentMapByElement.get(parentElement);
    if (component) {
      return component;
    }
    parentElement = parentElement.parentElement;
  }
  return null;
};
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  return _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        return callback.apply(void 0, args);
      });
    }
  }]);
}();
var ChangingItemsTracker = /*#__PURE__*/function () {
  function ChangingItemsTracker() {
    _classCallCheck(this, ChangingItemsTracker);
    this.changedItems = new Map();
    this.removedItems = new Map();
  }
  return _createClass(ChangingItemsTracker, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) {
          return;
        }
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        trueOriginalValue = originalRecord.original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) {
          return;
        }
      }
      if (!this.removedItems.has(itemName)) {
        this.removedItems.set(itemName, {
          original: trueOriginalValue
        });
      }
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      return Array.from(this.changedItems, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1]["new"];
        return {
          name: name,
          value: value
        };
      });
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      return Array.from(this.removedItems.keys());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = new Set();
    this.removedClasses = new Set();
    this.styleChanges = new ChangingItemsTracker();
    this.attributeChanges = new ChangingItemsTracker();
  }
  return _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (!this.removedClasses["delete"](className)) {
        this.addedClasses.add(className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (!this.addedClasses["delete"](className)) {
        this.removedClasses.add(className);
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return _toConsumableArray(this.addedClasses);
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return _toConsumableArray(this.removedClasses);
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      var _element$classList, _element$classList2;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(this.addedClasses));
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(this.removedClasses));
      this.styleChanges.getChangedItems().forEach(function (change) {
        element.style.setProperty(change.name, change.value);
        return;
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
}();
var ExternalMutationTracker = /*#__PURE__*/function () {
  function ExternalMutationTracker(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker);
    this.changedElements = new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  return _createClass(ExternalMutationTracker, [{
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = new WeakMap();
      var _iterator = _createForOfIteratorHelper(mutations),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) {
            continue;
          }
          if (this.isElementAddedByTranslation(element)) {
            continue;
          }
          var isChangeInAddedElement = false;
          var _iterator2 = _createForOfIteratorHelper(this.addedElements),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var addedElement = _step2.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (isChangeInAddedElement) {
            continue;
          }
          switch (mutation.type) {
            case 'childList':
              this.handleChildListMutation(mutation);
              break;
            case 'attributes':
              if (!handledAttributeMutations.has(element)) {
                handledAttributeMutations.set(element, []);
              }
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this2 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this2.removedElements.includes(node)) {
          _this2.removedElements.splice(_this2.removedElements.indexOf(node), 1);
          return;
        }
        if (_this2.isElementAddedByTranslation(node)) {
          return;
        }
        _this2.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this2.addedElements.includes(node)) {
          _this2.addedElements.splice(_this2.addedElements.indexOf(node), 1);
          return;
        }
        _this2.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case 'class':
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case 'style':
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousValues = previousValue.match(/((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g) || [];
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute('style') || '';
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === undefined || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === undefined ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) {
        oldValue = '';
      }
      if (newValue === attributeName) {
        newValue = '';
      }
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) {
          return;
        }
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) {
        return;
      }
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(';').forEach(function (style) {
        var parts = style.split(':');
        if (parts.length === 1) {
          return;
        }
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(':').trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === 'FONT' && element.getAttribute('style') === 'vertical-align: inherit;';
    }
  }]);
}();
function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    currentArguments.push(currentArgumentValue.trim());
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(trimAll(part).split(' ')));
  });
  return finalParts;
}
function trimAll(str) {
  return str.replace(/[\s]+/g, ' ').trim();
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) {
          return getMultipleCheckboxValue(element, modelValue);
        }
        if (Object(modelValue) === modelValue) {
          return getMultipleCheckboxValue(element, Object.values(modelValue));
        }
      }
      if (element.hasAttribute('value')) {
        return element.checked ? element.getAttribute('value') : null;
      }
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        element.checked = value.some(function (val) {
          return val == element.value;
        });
      } else if (element.hasAttribute('value')) {
        element.checked = element.value == value;
      } else {
        element.checked = value;
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return "".concat(value);
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var closestLiveComponent = element.closest('[data-controller~="live"]');
  return closestLiveComponent === component.element;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      finalValues.push(value);
    }
    return finalValues;
  }
  if (index > -1) {
    finalValues.splice(index, 1);
  }
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};

// base IIFE to define idiomorph
var Idiomorph = function () {
  //=============================================================================
  // AND NOW IT BEGINS...
  //=============================================================================
  var EMPTY_SET = new Set();

  // default configuration values, updatable by users now
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: 'merge',
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };

  //=============================================================================
  // Core Morphing Algorithm - morph, morphNormalizedContent, morphOldNodeTo, morphChildren
  //=============================================================================
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) {
      oldNode = oldNode.documentElement;
    }
    if (typeof newContent === 'string') {
      newContent = parseContent(newContent);
    }
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector('head');
      var newHead = normalizedNewContent.querySelector('head');
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        // when head promises resolve, call morph again, ignoring the head tag
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      // innerHTML, so we are only updating the children
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      // otherwise find the best element match in the new content, morph that, and merge its siblings
      // into either side of the best match
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);

      // stash the siblings that will need to be inserted on either side of the best match
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;

      // morph it
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) {
        // if there was a best match, merge the siblings in too and return the
        // whole bunch
        return insertSiblings(previousSibling, morphedNode, nextSibling);
      } else {
        // otherwise nothing was added to the DOM
        return [];
      }
    } else {
      throw "Do not understand how to morph style " + ctx.morphStyle;
    }
  }

  /**
   * @param possibleActiveElement
   * @param ctx
   * @returns {boolean}
   */
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement;
  }

  /**
   * @param oldNode root node to merge content into
   * @param newContent new content to merge
   * @param ctx the merge context
   * @returns {Element} the element that ended up in the DOM
   */
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) ;else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) ;else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") {
        handleHeadElement(newContent, oldNode, ctx);
      } else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) {
          morphChildren(newContent, oldNode, ctx);
        }
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }

  /**
   * This is the core algorithm for matching up children.  The idea is to use id sets to try to match up
   * nodes as faithfully as possible.  We greedily match, which allows us to keep the algorithm fast, but
   * by using id sets, we are able to better match up with content deeper in the DOM.
   *
   * Basic algorithm is, for each node in the new content:
   *
   * - if we have reached the end of the old parent, append the new content
   * - if the new content has an id set match with the current insertion point, morph
   * - search for an id set match
   * - if id set match found, morph
   * - otherwise search for a "soft" match
   * - if a soft match is found, morph
   * - otherwise, prepend the new node before the current insertion point
   *
   * The two search algorithms terminate if competing node matches appear to outweigh what can be achieved
   * with the current node.  See findIdSetMatch() and findSoftMatch() for details.
   *
   * @param {Element} newParent the parent element of the new content
   * @param {Element } oldParent the old content that we are merging the new content into
   * @param ctx the merge context
   */
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;

    // run through all the new content
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;

      // if we are at the end of the exiting parent's children, just append
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // if the current node has an id set match then morph
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // otherwise search forward in the existing old children for an id set match
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a potential match, remove the nodes until that point and morph
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // no id set match found, so scan forward for a soft match for the current node
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a soft match for the current node, morph
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // abandon all hope of morphing, just insert the new child before the insertion point
      // and move on
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }

    // remove any remaining old nodes that didn't match up with new content
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }

  //=============================================================================
  // Attribute Syncing Code
  //=============================================================================

  /**
   * @param attr {String} the attribute to be mutated
   * @param to {Element} the element that is going to be updated
   * @param updateType {("update"|"remove")}
   * @param ctx the merge context
   * @returns {boolean} true if the attribute should be ignored, false otherwise
   */
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === 'value' && ctx.ignoreActiveValue && to === document.activeElement) {
      return true;
    }
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }

  /**
   * syncs a given node with another node, copying over all attributes and
   * inner element state from the 'from' node to the 'to' node
   *
   * @param {Element} from the element to copy attributes & state from
   * @param {Element} to the element to copy attributes & state to
   * @param ctx the merge context
   */
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;

    // if is an element type, sync the attributes from the
    // new node into the new node
    if (type === 1 /* element type */) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator3 = _createForOfIteratorHelper(fromAttributes),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var fromAttribute = _step3.value;
          if (ignoreAttribute(fromAttribute.name, to, 'update', ctx)) {
            continue;
          }
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) {
            to.setAttribute(fromAttribute.name, fromAttribute.value);
          }
        }
        // iterate backwards to avoid skipping over items when a delete occurs
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, 'remove', ctx)) {
          continue;
        }
        if (!from.hasAttribute(toAttribute.name)) {
          to.removeAttribute(toAttribute.name);
        }
      }
    }

    // sync text nodes
    if (type === 8 /* comment */ || type === 3 /* text */) {
      if (to.nodeValue !== from.nodeValue) {
        to.nodeValue = from.nodeValue;
      }
    }
    if (!ignoreValueOfActiveElement(to, ctx)) {
      // sync input values
      syncInputValue(from, to, ctx);
    }
  }

  /**
   * @param from {Element} element to sync the value from
   * @param to {Element} element to sync the value to
   * @param attributeName {String} the attribute name
   * @param ctx the merge context
   */
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, 'update', ctx);
      if (!ignoreUpdate) {
        to[attributeName] = from[attributeName];
      }
      if (from[attributeName]) {
        if (!ignoreUpdate) {
          to.setAttribute(attributeName, from[attributeName]);
        }
      } else {
        if (!ignoreAttribute(attributeName, to, 'remove', ctx)) {
          to.removeAttribute(attributeName);
        }
      }
    }
  }

  /**
   * NB: many bothans died to bring us information:
   *
   *  https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
   *  https://github.com/choojs/nanomorph/blob/master/lib/morph.jsL113
   *
   * @param from {Element} the element to sync the input value from
   * @param to {Element} the element to sync the input value to
   * @param ctx the merge context
   */
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== 'file') {
      var fromValue = from.value;
      var toValue = to.value;

      // sync boolean attributes
      syncBooleanAttribute(from, to, 'checked', ctx);
      syncBooleanAttribute(from, to, 'disabled', ctx);
      if (!from.hasAttribute('value')) {
        if (!ignoreAttribute('value', to, 'remove', ctx)) {
          to.value = '';
          to.removeAttribute('value');
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute('value', to, 'update', ctx)) {
          to.setAttribute('value', fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) {
      syncBooleanAttribute(from, to, 'selected', ctx);
    } else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute('value', to, 'update', ctx)) {
        return;
      }
      if (_fromValue !== _toValue) {
        to.value = _fromValue;
      }
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) {
        to.firstChild.nodeValue = _fromValue;
      }
    }
  }

  //=============================================================================
  // the HEAD tag can be handled specially, either w/ a 'merge' or 'append' style
  //=============================================================================
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;

    // put all new head elements into a Map, by their outerHTML
    var srcToNewHeadNodes = new Map();
    var _iterator4 = _createForOfIteratorHelper(newHeadTag.children),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var newHeadChild = _step4.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }

      // for each elt in the current head
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(currentHead.children),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var currentHeadElt = _step5.value;
        // If the current head element is in the map
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) {
            // remove the current version and let the new version replace it and re-execute
            removed.push(currentHeadElt);
          } else {
            // this element already exists and should not be re-appended, so remove it from
            // the new content map, preserving it in the DOM
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else {
          if (headMergeStyle === "append") {
            // we are appending and this existing element is not new content
            // so if and only if it is marked for re-append do we do anything
            if (isReAppended) {
              removed.push(currentHeadElt);
              nodesToAppend.push(currentHeadElt);
            }
          } else {
            // if this is a merge, we remove this content since it is not in the new head
            if (ctx.head.shouldRemove(currentHeadElt) !== false) {
              removed.push(currentHeadElt);
            }
          }
        }
      }

      // Push the remaining new head elements in the Map into the
      // nodes to append to the head tag
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i2];
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener('load', function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i2 = 0, _nodesToAppend = nodesToAppend; _i2 < _nodesToAppend.length; _i2++) {
      _loop();
    }

    // remove all removed elements, after we have appended the new elements to avoid
    // additional network requests for things like style sheets
    for (var _i3 = 0, _removed = removed; _i3 < _removed.length; _i3++) {
      var removedElement = _removed[_i3];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function noOp() {}

  /*
    Deep merges the config object and the Idiomoroph.defaults object to
    produce a final configuration object
   */
  function mergeDefaults(config) {
    var finalConfig = {};
    // copy top level stuff into final config
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);

    // copy callbacks into final config (do this to deep merge the callbacks)
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);

    // copy head config into final config  (do this to deep merge the head)
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) {
      return false;
    }
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) {
      if (node1.id !== "" && node1.id === node2.id) {
        return true;
      } else {
        return getIdIntersectionCount(ctx, node1, node2) > 0;
      }
    }
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) {
      return false;
    }
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential id match
  // for the newChild.  We stop if we find a potential id match for the new child OR
  // if the number of potential id matches we are discarding is greater than the
  // potential id matches for the new child
  //=============================================================================
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    // max id matches we are willing to discard in our search
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;

    // only search forward if there is a possibility of an id match
    if (newChildPotentialIdCount > 0) {
      var _potentialMatch = insertionPoint;
      // if there is a possibility of an id match, scan forward
      // keep track of the potential id match count we are discarding (the
      // newChildPotentialIdCount must be greater than this to make it likely
      // worth it)
      var otherMatchCount = 0;
      while (_potentialMatch != null) {
        // If we have an id match, return the current potential match
        if (isIdSetMatch(newChild, _potentialMatch, ctx)) {
          return _potentialMatch;
        }

        // computer the other potential matches of this new content
        otherMatchCount += getIdIntersectionCount(ctx, _potentialMatch, newContent);
        if (otherMatchCount > newChildPotentialIdCount) {
          // if we have more potential id matches in _other_ content, we
          // do not have a good candidate for an id match, so return null
          return null;
        }

        // advanced to the next old content child
        _potentialMatch = _potentialMatch.nextSibling;
      }
    }
    return potentialMatch;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential soft match
  // for the newChild.  We stop if we find a potential soft match for the new child OR
  // if we find a potential id match in the old parents children OR if we find two
  // potential soft matches for the next two pieces of new content
  //=============================================================================
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) {
        // the current potential soft match has a potential id set match with the remaining new
        // content so bail out of looking
        return null;
      }

      // if we have a soft match with the current node, return it
      if (isSoftMatch(newChild, potentialSoftMatch)) {
        return potentialSoftMatch;
      }
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        // the next new node has a soft match with this node, so
        // increment the count of future soft matches
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;

        // If there are two future soft matches, bail to allow the siblings to soft match
        // so that we don't consume future soft matches for the sake of the current node
        if (siblingSoftMatchCount >= 2) {
          return null;
        }
      }

      // advanced to the next old content child
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();

    // remove svgs to avoid false-positive matches on head, etc.
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, '');

    // if the newContent contains a html, head or body tag, we can simply parse it w/o wrapping
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      // if it is a full HTML document, return the document itself as the parent container
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        // otherwise return the html element as the parent container
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else {
          return null;
        }
      }
    } else {
      // if it is partial HTML, wrap it in a template tag to provide a parent element and also to help
      // deal with touchy tags like tr, tbody, etc.
      var responseDoc = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html");
      var _content = responseDoc.body.querySelector('template').content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) {
      // noinspection UnnecessaryLocalVariableJS
      var dummyParent = document.createElement('div');
      return dummyParent;
    } else if (newContent.generatedByIdiomorph) {
      // the template tag created by idiomorph parsing can serve as a dummy parent
      return newContent;
    } else if (newContent instanceof Node) {
      // a single node is added as a child to a dummy parent
      var _dummyParent = document.createElement('div');
      _dummyParent.append(newContent);
      return _dummyParent;
    } else {
      // all nodes in the array or HTMLElement collection are consolidated under
      // a single dummy parent element
      var _dummyParent2 = document.createElement('div');
      for (var _i4 = 0, _arr = _toConsumableArray(newContent); _i4 < _arr.length; _i4++) {
        var elt = _arr[_i4];
        _dummyParent2.append(elt);
      }
      return _dummyParent2;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node); // push added preceding siblings on in order and insert
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling); // here we are going in order, so push on as we scan, rather than add
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) {
      morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    }
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) {
      return .5 + getIdIntersectionCount(ctx, node1, node2);
    }
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }

  //=============================================================================
  // ID Set Functions
  //=============================================================================

  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    var idSet = ctx.idMap.get(targetNode) || EMPTY_SET;
    return idSet.has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator6 = _createForOfIteratorHelper(idSet),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var id = _step6.value;
        ctx.deadIds.add(id);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator7 = _createForOfIteratorHelper(sourceSet),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var id = _step7.value;
        // a potential match is an id in the source and potentialIdsSet, but
        // that has not already been merged into the DOM
        if (isIdInConsideration(ctx, id) && idIsWithinNode(ctx, id, node2)) {
          ++matchCount;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return matchCount;
  }

  /**
   * A bottom up algorithm that finds all elements with ids inside of the node
   * argument and populates id sets for those nodes and all their parents, generating
   * a set of ids contained within all nodes for the entire hierarchy in the DOM
   *
   * @param node {Element}
   * @param {Map<Node, Set<String>>} idMap
   */
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    // find all elements with an id property
    var idElements = node.querySelectorAll('[id]');
    var _iterator8 = _createForOfIteratorHelper(idElements),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var elt = _step8.value;
        var current = elt;
        // walk up the parent hierarchy of that element, adding the id
        // of element to the parent's id set
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          // if the id set doesn't exist, create it and insert it in the  map
          if (idSet == null) {
            idSet = new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }

  /**
   * This function computes a map of nodes to all ids contained within that node (inclusive of the
   * node).  This map can be used to ask if two nodes have intersecting sets of ids, which allows
   * for a looser definition of "matching" than tradition id matching, and allows child nodes
   * to contribute to a parent nodes matching.
   *
   * @param {Element} oldContent  the old content that will be morphed
   * @param {Element} newContent  the new content to morph to
   * @returns {Map<Node, Set<String>>} a map of nodes to id sets for the
   */
  function createIdMap(oldContent, newContent) {
    var idMap = new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }

  //=============================================================================
  // This is what ends up becoming the Idiomorph global object
  //=============================================================================
  return {
    morph: morph,
    defaults: defaults
  };
}();
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
var syncAttributes = function syncAttributes(fromEl, toEl) {
  for (var i = 0; i < fromEl.attributes.length; i++) {
    var attr = fromEl.attributes[i];
    toEl.setAttribute(attr.name, attr.value);
  }
};
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, externalMutationTracker) {
  var originalElementIdsToSwapAfter = [];
  var originalElementsToPreserve = new Map();
  var markElementAsNeedingPostMorphSwap = function markElementAsNeedingPostMorphSwap(id, replaceWithClone) {
    var oldElement = originalElementsToPreserve.get(id);
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("Original element with id ".concat(id, " not found"));
    }
    originalElementIdsToSwapAfter.push(id);
    if (!replaceWithClone) {
      return null;
    }
    var clonedOldElement = cloneHTMLElement(oldElement);
    oldElement.replaceWith(clonedOldElement);
    return clonedOldElement;
  };
  rootToElement.querySelectorAll('[data-live-preserve]').forEach(function (newElement) {
    var id = newElement.id;
    if (!id) {
      throw new Error('The data-live-preserve attribute requires an id attribute to be set on the element');
    }
    var oldElement = rootFromElement.querySelector("#".concat(id));
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("The element with id \"".concat(id, "\" was not found in the original HTML"));
    }
    newElement.removeAttribute('data-live-preserve');
    originalElementsToPreserve.set(id, oldElement);
    syncAttributes(newElement, oldElement);
  });
  Idiomorph.morph(rootFromElement, rootToElement, {
    callbacks: {
      beforeNodeMorphed: function beforeNodeMorphed(fromEl, toEl) {
        var _fromEl$parentElement;
        if (!(fromEl instanceof Element) || !(toEl instanceof Element)) {
          return true;
        }
        if (fromEl === rootFromElement) {
          return true;
        }
        if (fromEl.id && originalElementsToPreserve.has(fromEl.id)) {
          if (fromEl.id === toEl.id) {
            return false;
          }
          var clonedFromEl = markElementAsNeedingPostMorphSwap(fromEl.id, true);
          if (!clonedFromEl) {
            throw new Error('missing clone');
          }
          Idiomorph.morph(clonedFromEl, toEl);
          return false;
        }
        if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
          if (typeof fromEl.__x !== 'undefined') {
            if (!window.Alpine) {
              throw new Error('Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.');
            }
            if (typeof window.Alpine.morph !== 'function') {
              throw new Error('Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.');
            }
            window.Alpine.morph(fromEl.__x, toEl);
          }
          if (externalMutationTracker.wasElementAdded(fromEl)) {
            fromEl.insertAdjacentElement('afterend', toEl);
            return false;
          }
          if (modifiedFieldElements.includes(fromEl)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          if (fromEl === document.activeElement && fromEl !== document.body && null !== getModelDirectiveFromElement(fromEl, false)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          var elementChanges = externalMutationTracker.getChangedElement(fromEl);
          if (elementChanges) {
            elementChanges.applyToElement(toEl);
          }
          if (fromEl.nodeName.toUpperCase() !== 'OPTION' && fromEl.isEqualNode(toEl)) {
            var normalizedFromEl = cloneHTMLElement(fromEl);
            normalizeAttributesForComparison(normalizedFromEl);
            var normalizedToEl = cloneHTMLElement(toEl);
            normalizeAttributesForComparison(normalizedToEl);
            if (normalizedFromEl.isEqualNode(normalizedToEl)) {
              return false;
            }
          }
        }
        if (fromEl.hasAttribute('data-skip-morph') || fromEl.id && fromEl.id !== toEl.id) {
          fromEl.innerHTML = toEl.innerHTML;
          return true;
        }
        if ((_fromEl$parentElement = fromEl.parentElement) !== null && _fromEl$parentElement !== void 0 && _fromEl$parentElement.hasAttribute('data-skip-morph')) {
          return false;
        }
        return !fromEl.hasAttribute('data-live-ignore');
      },
      beforeNodeRemoved: function beforeNodeRemoved(node) {
        if (!(node instanceof HTMLElement)) {
          return true;
        }
        if (node.id && originalElementsToPreserve.has(node.id)) {
          markElementAsNeedingPostMorphSwap(node.id, false);
          return true;
        }
        if (externalMutationTracker.wasElementAdded(node)) {
          return false;
        }
        return !node.hasAttribute('data-live-ignore');
      }
    }
  });
  originalElementIdsToSwapAfter.forEach(function (id) {
    var newElement = rootFromElement.querySelector("#".concat(id));
    var originalElement = originalElementsToPreserve.get(id);
    if (!(newElement instanceof HTMLElement) || !(originalElement instanceof HTMLElement)) {
      throw new Error('Missing elements.');
    }
    newElement.replaceWith(originalElement);
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this3 = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this3.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  return _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this4 = this;
      this.elementEventListeners.forEach(function (_ref3) {
        var event = _ref3.event,
          callback = _ref3.callback;
        _this4.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this5 = this;
      this.elementEventListeners.forEach(function (_ref4) {
        var event = _ref4.event,
          callback = _ref4.callback;
        _this5.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  return _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this6 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this6.unsyncedModelNames.includes(key)) {
          _this6.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
}();
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props) {
    _classCallCheck(this, ValueStore);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  return _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== undefined) {
        return this.dirtyProps[normalizedName];
      }
      if (this.pendingProps[normalizedName] !== undefined) {
        return this.pendingProps[normalizedName];
      }
      if (this.props[normalizedName] !== undefined) {
        return this.props[normalizedName];
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.get(normalizedName) === value) {
        return false;
      }
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return _objectSpread({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return _objectSpread({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return _objectSpread({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = _objectSpread({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = _objectSpread(_objectSpread({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i5 = 0, _Object$entries2 = Object.entries(props); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        var currentValue = this.get(key);
        if (currentValue !== value) {
          changed = true;
        }
      }
      if (changed) {
        this.updatedPropsFromParent = props;
      }
      return changed;
    }
  }]);
}();
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, id, backend, elementDriver) {
    var _this7 = this;
    _classCallCheck(this, Component);
    this.fingerprint = '';
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.element = element;
    this.name = name;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.listeners = new Map();
    listeners.forEach(function (listener) {
      var _this7$listeners$get;
      if (!_this7.listeners.has(listener.event)) {
        _this7.listeners.set(listener.event, []);
      }
      (_this7$listeners$get = _this7.listeners.get(listener.event)) === null || _this7$listeners$get === void 0 || _this7$listeners$get.push(listener.action);
    });
    this.valueStore = new ValueStore(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this7);
    });
    this.externalMutationTracker.start();
  }
  return _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      registerComponent(this);
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      unregisterComponent(this);
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model name \"".concat(model, "\"."));
      }
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      var components = findComponents(this, emitUp, matchingName);
      components.forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this8 = this;
      if (!this.listeners.has(name)) {
        return;
      }
      var actions = this.listeners.get(name) || [];
      actions.forEach(function (action) {
        _this8.action(action, data, 1);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== 'undefined' && !this.element.closest('[data-turbo="false"]');
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this9 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i6 = 0, _Object$entries3 = Object.entries(this.pendingFiles); _i6 < _Object$entries3.length; _i6++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
          key = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];
        if (value.files) {
          filesToSend[key] = value.files;
        }
      }
      var requestConfig = {
        props: this.valueStore.getOriginalProps(),
        actions: this.pendingActions,
        updated: this.valueStore.getDirtyProps(),
        children: {},
        updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
        files: filesToSend
      };
      this.hooks.triggerHook('request:started', requestConfig);
      this.backendRequest = this.backend.makeRequest(requestConfig.props, requestConfig.actions, requestConfig.updated, requestConfig.children, requestConfig.updatedPropsFromParent, requestConfig.files);
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then(/*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var _headers$get;
          var backendResponse, html, _i7, _Object$values, input, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                for (_i7 = 0, _Object$values = Object.values(_this9.pendingFiles); _i7 < _Object$values.length; _i7++) {
                  input = _Object$values[_i7];
                  input.value = '';
                }
                headers = backendResponse.response.headers;
                if (!(!((_headers$get = headers.get('Content-Type')) !== null && _headers$get !== void 0 && _headers$get.includes('application/vnd.live-component+html')) && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 14;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this9.valueStore.pushPendingPropsBackToDirty();
                _this9.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this9.renderError(html);
                }
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 14:
                _this9.processRerender(html, backendResponse);
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this9.isRequestPending) {
                  _this9.isRequestPending = false;
                  _this9.performRequest();
                }
                return _context2.abrupt("return", response);
              case 19:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this10 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (this.isTurboEnabled()) {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this10.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error("There was a problem with the '".concat(this.name, "' component HTML returned:"), {
          id: this.id
        });
        throw error;
      }
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this10.valueStore);
      }, this.externalMutationTracker);
      this.externalMutationTracker.start();
      var newProps = this.elementDriver.getComponentProps();
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit();
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this10.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref6) {
        var event = _ref6.event,
          data = _ref6.data,
          target = _ref6.target,
          componentName = _ref6.componentName;
        if (target === 'up') {
          _this10.emitUp(event, data, componentName);
          return;
        }
        if (target === 'self') {
          _this10.emitSelf(event, data);
          return;
        }
        _this10.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref7) {
        var event = _ref7.event,
          payload = _ref7.payload;
        _this10.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this11 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this11.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this12 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this12.nextRequestPromiseResolve = resolve;
      });
    }
  }, {
    key: "_updateFromParentProps",
    value: function _updateFromParentProps(props) {
      var isChanged = this.valueStore.storeNewPropsFromParent(props);
      if (isChanged) {
        this.render();
      }
    }
  }]);
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var StimulusElementDriver = /*#__PURE__*/function () {
  function StimulusElementDriver(controller) {
    _classCallCheck(this, StimulusElementDriver);
    this.controller = controller;
  }
  return _createClass(StimulusElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      return this.controller.propsValue;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit() {
      return this.controller.eventsToEmitValue;
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch() {
      return this.controller.eventsToDispatchValue;
    }
  }]);
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ChildComponentPlugin = /*#__PURE__*/function () {
  function ChildComponentPlugin(component) {
    _classCallCheck(this, ChildComponentPlugin);
    this.parentModelBindings = [];
    this.component = component;
    var modelDirectives = getAllModelDirectiveFromElements(this.component.element);
    this.parentModelBindings = modelDirectives.map(getModelBinding);
  }
  return _createClass(ChildComponentPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this13 = this;
      component.on('request:started', function (requestData) {
        requestData.children = _this13.getChildrenFingerprints();
      });
      component.on('model:set', function (model, value) {
        _this13.notifyParentModelChange(model, value);
      });
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.getChildren().forEach(function (child) {
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "notifyParentModelChange",
    value: function notifyParentModelChange(modelName, value) {
      var parentComponent = findParent(this.component);
      if (!parentComponent) {
        return;
      }
      this.parentModelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        parentComponent.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return findChildren(this.component);
    }
  }]);
}();
var LazyPlugin = /*#__PURE__*/function () {
  function LazyPlugin() {
    _classCallCheck(this, LazyPlugin);
    this.intersectionObserver = null;
  }
  return _createClass(LazyPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _component$element$at,
        _this14 = this;
      if ('lazy' !== ((_component$element$at = component.element.attributes.getNamedItem('loading')) === null || _component$element$at === void 0 ? void 0 : _component$element$at.value)) {
        return;
      }
      component.on('connect', function () {
        _this14.getObserver().observe(component.element);
      });
      component.on('disconnect', function () {
        var _this14$intersectionO;
        (_this14$intersectionO = _this14.intersectionObserver) === null || _this14$intersectionO === void 0 || _this14$intersectionO.unobserve(component.element);
      });
    }
  }, {
    key: "getObserver",
    value: function getObserver() {
      if (!this.intersectionObserver) {
        this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.dispatchEvent(new CustomEvent('live:appear'));
              observer.unobserve(entry.target);
            }
          });
        });
      }
      return this.intersectionObserver;
    }
  }]);
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  return _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this15 = this;
      component.on('loading.state:started', function (element, request) {
        _this15.startLoading(component, element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this15.finishLoading(component, element);
      });
      this.finishLoading(component, component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(component, targetElement, backendRequest) {
      this.handleLoadingToggle(component, true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(component, targetElement) {
      this.handleLoadingToggle(component, false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(component, isLoading, targetElement, backendRequest) {
      var _this16 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(component, targetElement).forEach(function (_ref8) {
        var element = _ref8.element,
          directives = _ref8.directives;
        if (isLoading) {
          _this16.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this16.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this16.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this17 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? Number.parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        if (validModifiers.has(modifier.name)) {
          var _validModifiers$get;
          var callable = (_validModifiers$get = validModifiers.get(modifier.name)) !== null && _validModifiers$get !== void 0 ? _validModifiers$get : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            return _this17.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this17.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this17.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this17.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this17.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this17.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(component, element) {
      var loadingDirectives = [];
      var matchingElements = _toConsumableArray(Array.from(element.querySelectorAll('[data-loading]')));
      matchingElements = matchingElements.filter(function (elt) {
        return elementBelongsToThisComponent(elt, component);
      });
      if (element.hasAttribute('data-loading')) {
        matchingElements = [element].concat(_toConsumableArray(matchingElements));
      }
      matchingElements.forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'revert';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList3;
      (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList4;
      (_element$classList4 = element.classList).remove.apply(_element$classList4, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        element.removeAttribute('class');
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  return _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this18.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this18.isConnected = true;
      });
      component.on('disconnect', function () {
        _this18.isConnected = false;
      });
    }
  }]);
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  return _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this19 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref9) {
        var actionName = _ref9.actionName,
          duration = _ref9.duration;
        _this19.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this20 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this20.component.render();
        };
      } else {
        callback = function callback() {
          _this20.component.action(actionName, {}, 0);
        };
      }
      var timer = window.setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  return _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this21 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this21.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this21.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this21.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this22 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = Number.parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this22.addPoll(directive.action, duration);
      });
    }
  }]);
}();
function isValueEmpty(value) {
  if (null === value || value === '' || undefined === value || Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (_typeof(value) !== 'object') {
    return false;
  }
  for (var _i8 = 0, _Object$keys = Object.keys(value); _i8 < _Object$keys.length; _i8++) {
    var key = _Object$keys[_i8];
    if (!isValueEmpty(value[key])) {
      return false;
    }
  }
  return true;
}
function toQueryString(data) {
  var _buildQueryStringEntries = function buildQueryStringEntries(data) {
    var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var baseKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    Object.entries(data).forEach(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
        iKey = _ref11[0],
        iValue = _ref11[1];
      var key = baseKey === '' ? iKey : "".concat(baseKey, "[").concat(iKey, "]");
      if ('' === baseKey && isValueEmpty(iValue)) {
        entries[key] = '';
      } else if (null !== iValue) {
        if (_typeof(iValue) === 'object') {
          entries = _objectSpread(_objectSpread({}, entries), _buildQueryStringEntries(iValue, entries, key));
        } else {
          entries[key] = encodeURIComponent(iValue).replace(/%20/g, '+').replace(/%2C/g, ',');
        }
      }
    });
    return entries;
  };
  var entries = _buildQueryStringEntries(data);
  return Object.entries(entries).map(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
      key = _ref13[0],
      value = _ref13[1];
    return "".concat(key, "=").concat(value);
  }).join('&');
}
function fromQueryString(search) {
  search = search.replace('?', '');
  if (search === '') return {};
  var _insertDotNotatedValueIntoData = function insertDotNotatedValueIntoData(key, value, data) {
    var _key$split = key.split('.'),
      _key$split2 = _toArray(_key$split),
      first = _key$split2[0],
      second = _key$split2[1],
      rest = _key$split2.slice(2);
    if (!second) {
      data[key] = value;
      return value;
    }
    if (data[first] === undefined) {
      data[first] = Number.isNaN(Number.parseInt(second)) ? {} : [];
    }
    _insertDotNotatedValueIntoData([second].concat(_toConsumableArray(rest)).join('.'), value, data[first]);
  };
  var entries = search.split('&').map(function (i) {
    return i.split('=');
  });
  var data = {};
  entries.forEach(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
      key = _ref15[0],
      value = _ref15[1];
    value = decodeURIComponent(value.replace(/\+/g, '%20'));
    if (!key.includes('[')) {
      data[key] = value;
    } else {
      if ('' === value) return;
      var dotNotatedKey = key.replace(/\[/g, '.').replace(/]/g, '');
      _insertDotNotatedValueIntoData(dotNotatedKey, value, data);
    }
  });
  return data;
}
var UrlUtils = /*#__PURE__*/function (_URL) {
  function UrlUtils() {
    _classCallCheck(this, UrlUtils);
    return _callSuper(this, UrlUtils, arguments);
  }
  _inherits(UrlUtils, _URL);
  return _createClass(UrlUtils, [{
    key: "has",
    value: function has(key) {
      var data = this.getData();
      return Object.keys(data).includes(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var data = this.getData();
      data[key] = value;
      this.setData(data);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.getData()[key];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var data = this.getData();
      delete data[key];
      this.setData(data);
    }
  }, {
    key: "getData",
    value: function getData() {
      if (!this.search) {
        return {};
      }
      return fromQueryString(this.search);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.search = toQueryString(data);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(URL));
var HistoryStrategy = /*#__PURE__*/function () {
  function HistoryStrategy() {
    _classCallCheck(this, HistoryStrategy);
  }
  return _createClass(HistoryStrategy, null, [{
    key: "replace",
    value: function replace(url) {
      history.replaceState(history.state, '', url);
    }
  }]);
}();
var QueryStringPlugin = /*#__PURE__*/function () {
  function QueryStringPlugin(mapping) {
    _classCallCheck(this, QueryStringPlugin);
    this.mapping = mapping;
  }
  return _createClass(QueryStringPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this23 = this;
      component.on('render:finished', function (component) {
        var urlUtils = new UrlUtils(window.location.href);
        var currentUrl = urlUtils.toString();
        Object.entries(_this23.mapping).forEach(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 2),
            prop = _ref17[0],
            mapping = _ref17[1];
          var value = component.valueStore.get(prop);
          urlUtils.set(mapping.name, value);
        });
        if (currentUrl !== urlUtils.toString()) {
          HistoryStrategy.replace(urlUtils);
        }
      });
    }
  }]);
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  return _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this24 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this24.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
}();
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  return _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this25 = this;
      component.on('model:set', function (modelName) {
        _this25.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
}();
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  function LiveControllerDefault() {
    var _this26;
    _classCallCheck(this, LiveControllerDefault);
    _this26 = _callSuper(this, LiveControllerDefault, arguments);
    _this26.pendingActionTriggerModelElement = null;
    _this26.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this26.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this26.handleChangeEvent(event);
      }
    }];
    _this26.pendingFiles = {};
    return _this26;
  }
  _inherits(LiveControllerDefault, _Controller);
  return _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
      this.createComponent();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectComponent();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectComponent();
      this.mutationObserver.disconnect();
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      }
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this27 = this;
      var params = event.params;
      if (!params.action) {
        throw new Error("No action name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-action-param\" attribute?"));
      }
      var rawAction = params.action;
      var actionArgs = _objectSpread({}, params);
      delete actionArgs.action;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = new Map();
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        });
        validModifiers.set('files', function (modifier) {
          if (!modifier.value) {
            pendingFiles = _this27.pendingFiles;
          } else if (_this27.pendingFiles[modifier.value]) {
            pendingFiles[modifier.value] = _this27.pendingFiles[modifier.value];
          }
        });
        directive.modifiers.forEach(function (modifier) {
          if (validModifiers.has(modifier.name)) {
            var _validModifiers$get2;
            var callable = (_validModifiers$get2 = validModifiers.get(modifier.name)) !== null && _validModifiers$get2 !== void 0 ? _validModifiers$get2 : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        for (var _i9 = 0, _Object$entries4 = Object.entries(pendingFiles); _i9 < _Object$entries4.length; _i9++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i9], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) {
            _this27.component.files(key, input);
          }
          delete _this27.pendingFiles[key];
        }
        _this27.component.action(directive.action, actionArgs, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this27.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this28 = this;
      this.getEmitDirectives(event).forEach(function (_ref18) {
        var name = _ref18.name,
          data = _ref18.data,
          nameMatch = _ref18.nameMatch;
        _this28.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this29 = this;
      this.getEmitDirectives(event).forEach(function (_ref19) {
        var name = _ref19.name,
          data = _ref19.data,
          nameMatch = _ref19.nameMatch;
        _this29.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this30 = this;
      this.getEmitDirectives(event).forEach(function (_ref20) {
        var name = _ref20.name,
          data = _ref20.data;
        _this30.component.emitSelf(name, data);
      });
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "propsUpdatedFromParentValueChanged",
    value: function propsUpdatedFromParentValueChanged() {
      this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
    }
  }, {
    key: "fingerprintValueChanged",
    value: function fingerprintValueChanged() {
      this.component.fingerprint = this.fingerprintValue;
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var params = event.params;
      if (!params.event) {
        throw new Error("No event name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-event-param\" attribute?"));
      }
      var eventInfo = params.event;
      var eventArgs = _objectSpread({}, params);
      delete eventArgs.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'name':
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: eventArgs,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this31 = this;
      var id = this.element.id || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, id, LiveControllerDefault.backendFactory(this), new StimulusElementDriver(this));
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new LazyPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin(), new QueryStringPlugin(this.queryMappingValue), new ChildComponentPlugin(this.component)];
      plugins.forEach(function (plugin) {
        _this31.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connectComponent",
    value: function connectComponent() {
      var _this32 = this;
      this.component.connect();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.elementEventListeners.forEach(function (_ref21) {
        var event = _ref21.event,
          callback = _ref21.callback;
        _this32.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnectComponent",
    value: function disconnectComponent() {
      var _this33 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref22) {
        var event = _ref22.event,
          callback = _ref22.callback;
        _this33.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      if (element instanceof HTMLInputElement && element.type === 'file') {
        var _element$files;
        var key = element.name;
        if ((_element$files = element.files) !== null && _element$files !== void 0 && _element$files.length) {
          this.pendingFiles[key] = element;
        } else if (this.pendingFiles[key]) {
          delete this.pendingFiles[key];
        }
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this34 = this;
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'id' && _this34.element.id !== _this34.component.id) {
          _this34.disconnectComponent();
          _this34.createComponent();
          _this34.connectComponent();
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_85__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: {
    type: Object,
    "default": {}
  },
  propsUpdatedFromParent: {
    type: Object,
    "default": {}
  },
  listeners: {
    type: Array,
    "default": []
  },
  eventsToEmit: {
    type: Array,
    "default": []
  },
  eventsToDispatch: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  fingerprint: {
    type: String,
    "default": ''
  },
  requestMethod: {
    type: String,
    "default": 'post'
  },
  queryMapping: {
    type: Object,
    "default": {}
  }
};
LiveControllerDefault.backendFactory = function (controller) {
  return new Backend(controller.urlValue, controller.requestMethodValue);
};


/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-46e48f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07SUFBRSxXQUFTO0VBQUksQ0FBQztFQUN4Q281QixXQUFXLEVBQUU7SUFBRWg5QixJQUFJLEVBQUVtTCxNQUFNO0lBQUUsV0FBUztFQUFHLENBQUM7RUFDMUNra0MsYUFBYSxFQUFFO0lBQUVydkMsSUFBSSxFQUFFbUwsTUFBTTtJQUFFLFdBQVM7RUFBTyxDQUFDO0VBQ2hEbWtDLFlBQVksRUFBRTtJQUFFdHZDLElBQUksRUFBRWtFLE1BQU07SUFBRSxXQUFTLENBQUM7RUFBRTtBQUM5QyxDQUFDO0FBQ0QybkMscUJBQXFCLENBQUNzQyxjQUFjLEdBQUcsVUFBQ2xMLFVBQVU7RUFBQSxPQUFLLElBQUl4aEIsT0FBTyxDQUFDd2hCLFVBQVUsQ0FBQ3YyQixRQUFRLEVBQUV1MkIsVUFBVSxDQUFDc00sa0JBQWtCLENBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2huR3RFO0FBQ3ZCO0FBQUEsSUFFbkJDLGdCQUFnQiwwQkFBQWx4QyxXQUFBO0VBQUEsU0FBQWt4QyxpQkFBQTtJQUFBaHhDLGVBQUEsT0FBQWd4QyxnQkFBQTtJQUFBLE9BQUF6d0MsVUFBQSxPQUFBeXdDLGdCQUFBLEVBQUE5d0MsU0FBQTtFQUFBO0VBQUFRLFNBQUEsQ0FBQXN3QyxnQkFBQSxFQUFBbHhDLFdBQUE7RUFBQSxPQUFBYSxZQUFBLENBQUFxd0MsZ0JBQUE7QUFBQSxFQUFTcnhDLDJEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeD9lMzM2Iiwid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hcHAvY3JvcHBlZC1pbWFnZS11cGxvYWRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL21vZGFsLWNvbW1vbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hcHAvbW9kYWwtZm9ybV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hcHAvc2VsZWN0X3NvbmdfZHVyYXRpb25fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtYXV0b2NvbXBsZXRlL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZS5taW4uY3NzPzk2YzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9jcm9wcGVkLWltYWdlLXVwbG9hZF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL2Nyb3BwZWQtaW1hZ2UtdXBsb2FkX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL21vZGFsLWNvbW1vbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL21vZGFsLWNvbW1vbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tb2RhbC1mb3JtX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hcHAvbW9kYWwtZm9ybV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9zZWxlY3Rfc29uZ19kdXJhdGlvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL3NlbGVjdF9zb25nX2R1cmF0aW9uX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMvYXBwIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC9jcm9wcGVkLWltYWdlLXVwbG9hZF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL2Nyb3BwZWQtaW1hZ2UtdXBsb2FkX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2FwcC9tb2RhbC1jb21tb25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FwcC9tb2RhbC1jb21tb25fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vYXBwL21vZGFsLWZvcm1fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FwcC9tb2RhbC1mb3JtX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2FwcC9zZWxlY3Rfc29uZ19kdXJhdGlvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL3NlbGVjdF9zb25nX2R1cmF0aW9uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1hdXRvY29tcGxldGUvZGlzdC9jb250cm9sbGVyLmpzJztcbmltcG9ydCAndG9tLXNlbGVjdC9kaXN0L2Nzcy90b20tc2VsZWN0LmRlZmF1bHQuY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmUubWluLmNzcyc7XG5pbXBvcnQgY29udHJvbGxlcl8yIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1hdXRvY29tcGxldGUtLWF1dG9jb21wbGV0ZSc6IGNvbnRyb2xsZXJfMCxcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzEsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMixcbn07IiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICogYXMgQ3JvcHBpZSBmcm9tICdjcm9wcGllJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsgXCJmaWxlSW5wdXRcIiwgXCJjcm9wcGVyXCIsIFwiY3JvcHBlcldyYXBwZXJcIiwgXCJpbWFnZVdyYXBwZXJcIiwgXCJsYWJlbFwiIF07XG5cbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICB3aWR0aDogTnVtYmVyLFxuICAgICAgICBoZWlnaHQ6IE51bWJlcixcbiAgICB9XG5cbiAgICBjcm9wcGllID0gbnVsbDtcbiAgICBjdXJyZW50RmlsZW5hbWUgPSBudWxsO1xuICAgIHRpbWVvdXQgPSAgbnVsbDtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY3JvcHBpZSA9IG5ldyBDcm9wcGllKFxuICAgICAgICAgICAgdGhpcy5jcm9wcGVyVGFyZ2V0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVuYWJsZUV4aWY6IHRydWUsXG4gICAgICAgICAgICAgICAgdmlld3BvcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGhWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm91bmRhcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGhWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNyb3BwaWUpO1xuXG4gICAgICAgIHRoaXMuY3JvcHBlclRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGUnLCAoKSA9PiB0aGlzLmNyb3BJbWFnZVdpdGhUaW1lb3V0KCkpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY3JvcHBpZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY3JvcHBpZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudEZpbGVuYW1lID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNyb3BJbWFnZVdpdGhUaW1lb3V0KCkge1xuICAgICAgICB0aGlzLmZpbGVJbnB1dFRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IHRoaXMubGFiZWxUYXJnZXQucXVlcnlTZWxlY3RvcignI3NwaW5uZXInKTtcbiAgICAgICAgaWYgKHNwaW5uZXIpIHtcbiAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jcm9wSW1hZ2VBbmRDbGVhclRpbWVvdXQoKSwgNTAwKTtcblxuICAgICAgICB0aGlzLmZpbGVJbnB1dFRhcmdldC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzcGlubmVyKSB7XG4gICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JvcEltYWdlQW5kQ2xlYXJUaW1lb3V0KCkge1xuICAgICAgICB0aGlzLmNyb3BJbWFnZSgpO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIHJlYWRGaWxlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4gdGhpcy5pbml0Q3JvcHBlcihldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbGVuYW1lID0gaW5wdXQuZmlsZXNbMF0ubmFtZTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRDcm9wcGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VXcmFwcGVyVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmNyb3BwZXJXcmFwcGVyVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIHRoaXMuaW5pdENyb3BwZXJXaXRoVXJsKGV2ZW50LnRhcmdldC5yZXN1bHQpXG4gICAgfVxuXG4gICAgaW5pdENyb3BwZXJXaXRoVXJsKGltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuY3JvcHBlcldyYXBwZXJUYXJnZXQuY2xhc3NMaXN0LmFkZCgncmVhZHknKTtcbiAgICAgICAgdGhpcy5jcm9wcGllLmJpbmQoe3VybDogaW1hZ2VVcmx9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCaW5kIGNvbXBsZXRlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyb3BJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5jcm9wcGllLnJlc3VsdCh7XG4gICAgICAgICAgICB0eXBlOiAnYmxvYicsXG4gICAgICAgICAgICBzaXplOiAndmlld3BvcnQnLFxuICAgICAgICAgICAgZm9ybWF0OiAncG5nJyxcbiAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsXG4gICAgICAgICAgICBxdWFsaXR5OiAxXG4gICAgICAgIH0pLnRoZW4oKGJsb2IpID0+IHRoaXMuYWRkQmxvYkRhdGFUb0lucHV0KGJsb2IpKTtcbiAgICB9XG5cbiAgICBhZGRCbG9iRGF0YVRvSW5wdXQoYmxvYikge1xuICAgICAgICBsZXQgZmlsZW5hbWVTcGxpdHRlZCA9IHRoaXMuY3VycmVudEZpbGVuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGZpbGVuYW1lU3BsaXR0ZWRbZmlsZW5hbWVTcGxpdHRlZC5sZW5ndGggLSAxXSA9ICdwbmcnXG5cbiAgICAgICAgY29uc3QgbXlGaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCBmaWxlbmFtZVNwbGl0dGVkLmpvaW4oJy4nKSwge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcbiAgICAgICAgZGF0YVRyYW5zZmVyLml0ZW1zLmFkZChteUZpbGUpO1xuICAgICAgICB0aGlzLmZpbGVJbnB1dFRhcmdldC5maWxlcyA9IGRhdGFUcmFuc2Zlci5maWxlcztcbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnYm9vdHN0cmFwL2pzL3NyYy9tb2RhbCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdib290c3RyYXAvanMvc3JjL3Rvb2x0aXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydtb2RhbFRpdGxlJywgJ21vZGFsQ29udGVudCcsICdzdWJtaXRUZXh0JywgJ2RlY2xpbmVUZXh0JywgJ21vZGFsJ107XG5cbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICB1cmw6IFN0cmluZyxcbiAgICAgICAgaXNBamF4OiBCb29sZWFuLFxuICAgICAgICBpc0Zvcm1TdWJtaXQ6IEJvb2xlYW4sXG4gICAgICAgIG1ldGhvZDogU3RyaW5nXG4gICAgfVxuXG4gICAgbW9kYWwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aXRsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdWJtaXRUZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGVjbGluZVRleHRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNBamF4XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWV0aG9kXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmlzRm9ybVN1Ym1pdFxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5Db21tb25Nb2RhbChldmVudCwgb3B0aW9ucykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICAgICAgc3VibWl0VGV4dDogbnVsbCxcbiAgICAgICAgICAgIGRlY2xpbmVUZXh0OiBudWxsLFxuICAgICAgICAgICAgaXNBamF4OiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBpc0Zvcm1TdWJtaXQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbW9kYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubW9kYWxUaXRsZVRhcmdldC5pbm5lckhUTUwgPSBtb2RhbE9wdGlvbnMudGl0bGU7XG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50VGFyZ2V0LmlubmVySFRNTCA9IG1vZGFsT3B0aW9ucy5jb250ZW50O1xuXG4gICAgICAgIGlmICghbW9kYWxPcHRpb25zLnN1Ym1pdFRleHQgJiYgIW1vZGFsT3B0aW9ucy5pc0Zvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0VGV4dFRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0VGV4dFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0VGV4dFRhcmdldC5pbm5lckhUTUwgPSBtb2RhbE9wdGlvbnMuc3VibWl0VGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RhbE9wdGlvbnMuZGVjbGluZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVjbGluZVRleHRUYXJnZXQuaW5uZXJIVE1MID0gbW9kYWxPcHRpb25zLmRlY2xpbmVUZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmxWYWx1ZSA9IG1vZGFsT3B0aW9ucy51cmw7XG4gICAgICAgIHRoaXMuaXNBamF4VmFsdWUgPSBtb2RhbE9wdGlvbnMuaXNBamF4O1xuICAgICAgICB0aGlzLm1ldGhvZFZhbHVlID0gbW9kYWxPcHRpb25zLm1ldGhvZDtcbiAgICAgICAgdGhpcy5pc0Zvcm1TdWJtaXRWYWx1ZSA9IG1vZGFsT3B0aW9ucy5pc0Zvcm1TdWJtaXQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLm1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKHRoaXMubW9kYWxUYXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXNzaWduVG9vbFRpcHNJbkNvbW1vbk1vZGFsKCk7XG5cbiAgICAgICAgdGhpcy5tb2RhbC5zaG93KCk7XG4gICAgfVxuXG4gICAgc3VibWl0Q29tbW9uTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JtU3VibWl0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdENvbW1vbk1vZGFsV2l0aEZvcm0oZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0VXJsVmFsdWUoZXZlbnQsIHRoaXMudXJsVmFsdWUsIHRoaXMubWV0aG9kVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgX3N1Ym1pdFVybFZhbHVlKGV2ZW50LCB1cmwsIG1ldGhvZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQWpheFZhbHVlKSB7XG4gICAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdHRVQnICYmIHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIFR1cmJvLnZpc2l0KHVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIF9zdWJtaXRDb21tb25Nb2RhbFdpdGhGb3JtKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMubW9kYWxDb250ZW50VGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmb3JtLmFjdGlvbiwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGVudFRhcmdldC5pbm5lckhUTUwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB0aGlzLl9hc3NpZ25Ub29sVGlwc0luQ29tbW9uTW9kYWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygneC1yZWRpcmVjdC11cmknKSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygneC1yZWRpcmVjdC10by1wYWdlJylcbiAgICAgICAgICAgICAgICAgICAgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3gtcmVkaXJlY3QtdG8tcGFnZScpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCd4LXJlZGlyZWN0LXVyaScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCb2R5VGFyZ2V0LmlubmVySFRNTCA9IGF3YWl0IGxvYWRDb250ZW50RnJvbVVybChyZXNwb25zZS5oZWFkZXJzLmdldCgneC1yZWRpcmVjdC11cmknKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzaWduVG9vbFRpcHNJbkNvbW1vbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2Nsb3NlIGZvcm0gbW9kYWxcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYXNzaWduVG9vbFRpcHNJbkNvbW1vbk1vZGFsKCkge1xuICAgICAgICBjb25zdCB0b29sdGlwRWxlbWVudHMgPSB0aGlzLm1vZGFsQ29udGVudFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJyk7XG5cbiAgICAgICAgdG9vbHRpcEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnKSB8fCAnYXV0byc7XG4gICAgICAgICAgICBuZXcgVG9vbHRpcChlbGVtZW50LCB7cGxhY2VtZW50OiBwbGFjZW1lbnR9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29udGVudEZyb21VcmwodXJsLCBtZXRob2QgPSAnR0VUJykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbn0iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIG91dGxldHMgPSBbJ21vZGFsLWNvbW1vbiddXG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgZm9ybVVybDogU3RyaW5nLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBkZWNsaW5lVGV4dDogU3RyaW5nLFxuICAgICAgICBzdWJtaXRUZXh0OiBTdHJpbmdcbiAgICB9XG5cbiAgICBhc3luYyBvcGVuTW9kYWwoZXZlbnQpXG4gICAge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgdGhpcy5tb2RhbENvbW1vbk91dGxldC5vcGVuQ29tbW9uTW9kYWwoZXZlbnQsIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICBjb250ZW50OiBhd2FpdCBsb2FkQ29udGVudEZyb21VcmwodGhpcy5mb3JtVXJsVmFsdWUpLFxuICAgICAgICAgICAgaXNBamF4OiB0aGlzLmlzQWpheFZhbHVlLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZFZhbHVlLFxuICAgICAgICAgICAgaXNGb3JtU3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0VmFsdWUsXG4gICAgICAgICAgICBkZWNsaW5lVGV4dDogdGhpcy5kZWNsaW5lVGV4dFZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb250ZW50RnJvbVVybCh1cmwsIG1ldGhvZCA9ICdHRVQnKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsncmFuZ2UnLFwibWF4aW11bVwiLCBcInN0YXJ0XCIsIFwiZW5kXCIsIFwic3RhcnRMYWJlbFwiLCBcImVuZExhYmVsXCIsIFwiY3VycmVudExhYmVsXCJdO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbHMoKTsgLy8gSW5pdGlhbGl6ZSBsYWJlbHMgb24gcGFnZSBsb2FkXG4gICAgfVxuXG4gICAgYWRqdXN0KCkge1xuICAgICAgICBsZXQgc3RhcnRWYWx1ZSA9IHBhcnNlSW50KHRoaXMuc3RhcnRUYXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgbGV0IGVuZFZhbHVlID0gcGFyc2VJbnQodGhpcy5lbmRUYXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBwYXJzZUludCh0aGlzLnJhbmdlVGFyZ2V0LmlubmVySFRNTCwgMTApO1xuICAgICAgICBjb25zdCBtYXhpbXVtID0gcGFyc2VJbnQodGhpcy5tYXhpbXVtVGFyZ2V0LmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgIC8vIGVuZCBzaG91bGQgYmUgYWZ0ZXIgc3RhcnRcbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgPj0gZW5kVmFsdWUpIHtcbiAgICAgICAgICAgIGVuZFZhbHVlID0gc3RhcnRWYWx1ZSArIHJhbmdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFZhbHVlIC0gc3RhcnRWYWx1ZSA+IHJhbmdlKSB7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IHN0YXJ0VmFsdWUgKyByYW5nZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGlucHV0IHZhbHVlc1xuICAgICAgICB0aGlzLnN0YXJ0VGFyZ2V0LnZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgdGhpcy5lbmRUYXJnZXQudmFsdWUgPSBlbmRWYWx1ZTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVscygpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxhYmVscygpIHtcbiAgICAgICAgbGV0IHN0YXJ0TWludXRlID0gTWF0aC5mbG9vcih0aGlzLnN0YXJ0VGFyZ2V0LnZhbHVlIC8gNjApO1xuICAgICAgICBsZXQgc3RhcnRTZWNvbmQgPSAodGhpcy5zdGFydFRhcmdldC52YWx1ZSAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgICAgICAgbGV0IGVuZE1pbnV0ZSA9IE1hdGguZmxvb3IodGhpcy5lbmRUYXJnZXQudmFsdWUgLyA2MCk7XG4gICAgICAgIGxldCBlbmRTZWNvbmQgPSAodGhpcy5lbmRUYXJnZXQudmFsdWUgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRMYWJlbFRhcmdldC50ZXh0Q29udGVudCA9IGAke3N0YXJ0TWludXRlfToke3N0YXJ0U2Vjb25kfWA7XG4gICAgICAgIHRoaXMuZW5kTGFiZWxUYXJnZXQudGV4dENvbnRlbnQgPSBgJHtlbmRNaW51dGV9OiR7ZW5kU2Vjb25kfWA7XG4gICAgICAgIHRoaXMuY3VycmVudExhYmVsVGFyZ2V0LnRleHRDb250ZW50ID0gdGhpcy5lbmRUYXJnZXQudmFsdWUgLSB0aGlzLnN0YXJ0VGFyZ2V0LnZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0ICogYXMgYm9vdHN0cmFwIGZyb20gJ2Jvb3RzdHJhcCc7XG5cbmlmIChib290c3RyYXApIHtcbiAgICBjb25zb2xlLmxvZygnQm9vdHN0cmFwIGlzIGxvYWRlZCBzdWNjZXNzZnVsbHk6JywgYm9vdHN0cmFwKTtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Jvb3RzdHJhcCBpcyBOT1QgbG9hZGVkLicpO1xufVxuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMvYXBwJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG50eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcblxudmFyIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZywgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cywgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSwgX2RlZmF1bHRfMV9zdHJpcFRhZ3MsIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdDtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfZGVmYXVsdF8xX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNPYnNlcnZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNMb2FkZWRDaG9pY2VzUHJldmlvdXNseSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsT3B0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMubXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25NdXRhdGlvbnMobXV0YXRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxPcHRpb25zID0gdGhpcy5jcmVhdGVPcHRpb25zRGF0YVN0cnVjdHVyZSh0aGlzLnNlbGVjdEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRvbVNlbGVjdCgpO1xuICAgIH1cbiAgICBpbml0aWFsaXplVG9tU2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNraXAtbW9ycGgnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXJsVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEpLmNhbGwodGhpcywgdGhpcy51cmxWYWx1ZSwgdGhpcy5oYXNNaW5DaGFyYWN0ZXJzVmFsdWUgPyB0aGlzLm1pbkNoYXJhY3RlcnNWYWx1ZSA6IG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNBc0h0bWxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlKS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0TXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLnN0b3BNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZFZhbHVlcyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RFbGVtZW50Lm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMgPSBbdGhpcy5zZWxlY3RFbGVtZW50LnZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvbVNlbGVjdC5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuc2VsZWN0RWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEVsZW1lbnQudmFsdWUgPSBjdXJyZW50U2VsZWN0ZWRWYWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWF4T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0RWxlbWVudCA/IHRoaXMuc2VsZWN0RWxlbWVudC5vcHRpb25zLmxlbmd0aCA6IDUwO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0RWxlbWVudCgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgZm9ybUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dG9jb21wbGV0ZSBTdGltdWx1cyBjb250cm9sbGVyIGNhbiBvbmx5IGJlIHVzZWQgb24gYW4gPGlucHV0PiBvciA8c2VsZWN0Pi4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAnYXV0b2NvbXBsZXRlJyB9KTtcbiAgICB9XG4gICAgZ2V0IHByZWxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNQcmVsb2FkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnZm9jdXMnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVsb2FkVmFsdWU7XG4gICAgfVxuICAgIHJlc2V0VG9tU2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy50b21TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnYmVmb3JlLXJlc2V0JywgeyB0b21TZWxlY3Q6IHRoaXMudG9tU2VsZWN0IH0pO1xuICAgICAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEh0bWwgPSB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy50b21TZWxlY3QuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBjdXJyZW50SHRtbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRvbVNlbGVjdCgpO1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3Quc2V0VmFsdWUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlVG9tU2VsZWN0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc3RvcE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0LmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0LmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhcnRNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfVxuICAgIHN0YXJ0TXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT2JzZXJ2aW5nICYmIHRoaXMubXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzT2JzZXJ2aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPYnNlcnZpbmcgJiYgdGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pc09ic2VydmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBsZXQgY2hhbmdlRGlzYWJsZWRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgcmVxdWlyZVJlc2V0ID0gZmFsc2U7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQgPT09IHRoaXMuZWxlbWVudCAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEaXNhYmxlZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQgPT09IHRoaXMuZWxlbWVudCAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05vd011bHRpcGxlID0gdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhc011bHRpcGxlID0gbXV0YXRpb24ub2xkVmFsdWUgPT09ICdtdWx0aXBsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb3dNdWx0aXBsZSAhPT0gd2FzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlUmVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0gdGhpcy5zZWxlY3RFbGVtZW50ID8gdGhpcy5jcmVhdGVPcHRpb25zRGF0YVN0cnVjdHVyZSh0aGlzLnNlbGVjdEVsZW1lbnQpIDogW107XG4gICAgICAgIGNvbnN0IGFyZU9wdGlvbnNFcXVpdmFsZW50ID0gdGhpcy5hcmVPcHRpb25zRXF1aXZhbGVudChuZXdPcHRpb25zKTtcbiAgICAgICAgaWYgKCFhcmVPcHRpb25zRXF1aXZhbGVudCB8fCByZXF1aXJlUmVzZXQpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxPcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMucmVzZXRUb21TZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlRGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb21TZWxlY3REaXNhYmxlZFN0YXRlKHRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZU9wdGlvbnNEYXRhU3RydWN0dXJlKHNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oc2VsZWN0RWxlbWVudC5vcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFyZU9wdGlvbnNFcXVpdmFsZW50KG5ld09wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRPcmlnaW5hbE9wdGlvbnMgPSB0aGlzLm9yaWdpbmFsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSAnJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkTmV3T3B0aW9ucyA9IG5ld09wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0gJycpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyT3B0aW9uID0gdGhpcy5vcmlnaW5hbE9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09ICcnKTtcbiAgICAgICAgY29uc3QgbmV3UGxhY2Vob2xkZXJPcHRpb24gPSBuZXdPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSAnJyk7XG4gICAgICAgIGlmIChvcmlnaW5hbFBsYWNlaG9sZGVyT3B0aW9uICYmXG4gICAgICAgICAgICBuZXdQbGFjZWhvbGRlck9wdGlvbiAmJlxuICAgICAgICAgICAgb3JpZ2luYWxQbGFjZWhvbGRlck9wdGlvbi50ZXh0ICE9PSBuZXdQbGFjZWhvbGRlck9wdGlvbi50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcmVkT3JpZ2luYWxPcHRpb25zLmxlbmd0aCAhPT0gZmlsdGVyZWROZXdPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZU9wdGlvbiA9IChvcHRpb24pID0+IGAke29wdGlvbi52YWx1ZX0tJHtvcHRpb24udGV4dH1gO1xuICAgICAgICBjb25zdCBvcmlnaW5hbE9wdGlvbnNTZXQgPSBuZXcgU2V0KGZpbHRlcmVkT3JpZ2luYWxPcHRpb25zLm1hcChub3JtYWxpemVPcHRpb24pKTtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9uc1NldCA9IG5ldyBTZXQoZmlsdGVyZWROZXdPcHRpb25zLm1hcChub3JtYWxpemVPcHRpb24pKTtcbiAgICAgICAgcmV0dXJuIChvcmlnaW5hbE9wdGlvbnNTZXQuc2l6ZSA9PT0gbmV3T3B0aW9uc1NldC5zaXplICYmXG4gICAgICAgICAgICBbLi4ub3JpZ2luYWxPcHRpb25zU2V0XS5ldmVyeSgob3B0aW9uKSA9PiBuZXdPcHRpb25zU2V0LmhhcyhvcHRpb24pKSk7XG4gICAgfVxufVxuX2RlZmF1bHRfMV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZyA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnKCkge1xuICAgIGNvbnN0IHBsdWdpbnMgPSB7fTtcbiAgICBjb25zdCBpc011bHRpcGxlID0gIXRoaXMuc2VsZWN0RWxlbWVudCB8fCB0aGlzLnNlbGVjdEVsZW1lbnQubXVsdGlwbGU7XG4gICAgaWYgKCF0aGlzLmZvcm1FbGVtZW50LmRpc2FibGVkICYmICFpc011bHRpcGxlKSB7XG4gICAgICAgIHBsdWdpbnMuY2xlYXJfYnV0dG9uID0geyB0aXRsZTogJycgfTtcbiAgICB9XG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgICAgcGx1Z2lucy5yZW1vdmVfYnV0dG9uID0geyB0aXRsZTogJycgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsVmFsdWUpIHtcbiAgICAgICAgcGx1Z2lucy52aXJ0dWFsX3Njcm9sbCA9IHt9O1xuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSB7XG4gICAgICAgIG5vX3Jlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHNcIj4ke3RoaXMubm9SZXN1bHRzRm91bmRUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uX2NyZWF0ZTogKGRhdGEsIGVzY2FwZURhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNyZWF0ZVwiPiR7dGhpcy5jcmVhdGVPcHRpb25UZXh0VmFsdWUucmVwbGFjZSgnJXBsYWNlaG9sZGVyJScsIGA8c3Ryb25nPiR7ZXNjYXBlRGF0YShkYXRhLmlucHV0KX08L3N0cm9uZz5gKX08L2Rpdj5gO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICByZW5kZXIsXG4gICAgICAgIHBsdWdpbnMsXG4gICAgICAgIG9uSXRlbUFkZDogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3Quc2V0VGV4dGJveFZhbHVlKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VBZnRlclNlbGVjdDogdHJ1ZSxcbiAgICAgICAgb25PcHRpb25BZGQ6ICh2YWx1ZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnRvbVNlbGVjdC5pbnB1dDtcbiAgICAgICAgICAgIGxldCBvcHRncm91cERhdGEgPSBudWxsO1xuICAgICAgICAgICAgY29uc3Qgb3B0Z3JvdXAgPSBkYXRhW3RoaXMudG9tU2VsZWN0LnNldHRpbmdzLm9wdGdyb3VwRmllbGRdO1xuICAgICAgICAgICAgaWYgKG9wdGdyb3VwICYmIHRoaXMudG9tU2VsZWN0Lm9wdGdyb3Vwcykge1xuICAgICAgICAgICAgICAgIG9wdGdyb3VwRGF0YSA9IHRoaXMudG9tU2VsZWN0Lm9wdGdyb3Vwc1tvcHRncm91cF07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGdyb3VwRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRncm91cEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYG9wdGdyb3VwW2xhYmVsPVwiJHtvcHRncm91cERhdGEubGFiZWx9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRncm91cEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQgPSBvcHRncm91cEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHQgPSBkYXRhW3RoaXMudG9tU2VsZWN0LnNldHRpbmdzLmxhYmVsRmllbGRdO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uT3JkZXIgPSBkYXRhLiRvcmRlcjtcbiAgICAgICAgICAgIGxldCBvcmRlcmVkT3B0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgWywgdG9tU2VsZWN0T3B0aW9uXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnRvbVNlbGVjdC5vcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIGlmICh0b21TZWxlY3RPcHRpb24uJG9yZGVyID09PSBvcHRpb25PcmRlcikge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkT3B0aW9uID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgPiBvcHRpb25bdmFsdWU9XCIke3RvbVNlbGVjdE9wdGlvblt0aGlzLnRvbVNlbGVjdC5zZXR0aW5ncy52YWx1ZUZpZWxkXX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yZGVyZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkT3B0aW9uLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBvcHRpb25FbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbk9yZGVyID49IDApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZChvcHRpb25FbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucHJlcGVuZChvcHRpb25FbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy5zaG91bGRMb2FkID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgY29uZmlnLCB0aGlzLnRvbVNlbGVjdE9wdGlvbnNWYWx1ZSk7XG59LCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5nZXRNYXhPcHRpb25zKCksXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzKCkge1xuICAgIGNvbnN0IGNvbW1vbkNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZykuY2FsbCh0aGlzKTtcbiAgICBjb25zdCBsYWJlbEZpZWxkID0gY29tbW9uQ29uZmlnLmxhYmVsRmllbGQgPz8gJ3RleHQnO1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBjb21tb25Db25maWcsIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5nZXRNYXhPcHRpb25zKCksXG4gICAgICAgIHNjb3JlOiAoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY29yaW5nRnVuY3Rpb24gPSB0aGlzLnRvbVNlbGVjdC5nZXRTY29yZUZ1bmN0aW9uKHNlYXJjaCk7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcmluZ0Z1bmN0aW9uKHsgLi4uaXRlbSwgdGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfc3RyaXBUYWdzKS5jYWxsKHRoaXMsIGl0ZW1bbGFiZWxGaWVsZF0pIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICBpdGVtOiAoaXRlbSkgPT4gYDxkaXY+JHtpdGVtW2xhYmVsRmllbGRdfTwvZGl2PmAsXG4gICAgICAgICAgICBvcHRpb246IChpdGVtKSA9PiBgPGRpdj4ke2l0ZW1bbGFiZWxGaWVsZF19PC9kaXY+YCxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XG59LCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YShhdXRvY29tcGxldGVFbmRwb2ludFVybCwgbWluQ2hhcmFjdGVyTGVuZ3RoKSB7XG4gICAgY29uc3QgY29tbW9uQ29uZmlnID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnKS5jYWxsKHRoaXMpO1xuICAgIGNvbnN0IGxhYmVsRmllbGQgPSBjb21tb25Db25maWcubGFiZWxGaWVsZCA/PyAndGV4dCc7XG4gICAgY29uc3QgY29uZmlnID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIGNvbW1vbkNvbmZpZywge1xuICAgICAgICBmaXJzdFVybDogKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBhdXRvY29tcGxldGVFbmRwb2ludFVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nO1xuICAgICAgICAgICAgcmV0dXJuIGAke2F1dG9jb21wbGV0ZUVuZHBvaW50VXJsfSR7c2VwYXJhdG9yfXF1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX1gO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChxdWVyeSk7XG4gICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5leHRVcmwocXVlcnksIGpzb24ubmV4dF9wYWdlKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhqc29uLnJlc3VsdHMub3B0aW9ucyB8fCBqc29uLnJlc3VsdHMsIGpzb24ucmVzdWx0cy5vcHRncm91cHMgfHwgW10pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY2FsbGJhY2soW10sIFtdKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3VsZExvYWQ6IChxdWVyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bGwgIT09IG1pbkNoYXJhY3Rlckxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeS5sZW5ndGggPj0gbWluQ2hhcmFjdGVyTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChxdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNMb2FkZWRDaG9pY2VzUHJldmlvdXNseSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnkubGVuZ3RoID49IDM7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGdyb3VwRmllbGQ6ICdncm91cF9ieScsXG4gICAgICAgIHNjb3JlOiAoc2VhcmNoKSA9PiAoaXRlbSkgPT4gMSxcbiAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICBvcHRpb246IChpdGVtKSA9PiBgPGRpdj4ke2l0ZW1bbGFiZWxGaWVsZF19PC9kaXY+YCxcbiAgICAgICAgICAgIGl0ZW06IChpdGVtKSA9PiBgPGRpdj4ke2l0ZW1bbGFiZWxGaWVsZF19PC9kaXY+YCxcbiAgICAgICAgICAgIGxvYWRpbmdfbW9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImxvYWRpbmctbW9yZS1yZXN1bHRzXCI+JHt0aGlzLmxvYWRpbmdNb3JlVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9fbW9yZV9yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tbW9yZS1yZXN1bHRzXCI+JHt0aGlzLm5vTW9yZVJlc3VsdHNUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub19yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbl9jcmVhdGU6IChkYXRhLCBlc2NhcGVEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY3JlYXRlXCI+JHt0aGlzLmNyZWF0ZU9wdGlvblRleHRWYWx1ZS5yZXBsYWNlKCclcGxhY2Vob2xkZXIlJywgYDxzdHJvbmc+JHtlc2NhcGVEYXRhKGRhdGEuaW5wdXQpfTwvc3Ryb25nPmApfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB0aGlzLnByZWxvYWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9zdHJpcFRhZ3MgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX3N0cmlwVGFncyhzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyk7XG59LCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cyA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzKG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICByZXR1cm4geyAuLi5vYmplY3QxLCAuLi5vYmplY3QyIH07XG59LCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBwcmVDb25uZWN0UGF5bG9hZCA9IHsgb3B0aW9ucyB9O1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncHJlLWNvbm5lY3QnLCBwcmVDb25uZWN0UGF5bG9hZCk7XG4gICAgY29uc3QgdG9tU2VsZWN0ID0gbmV3IFRvbVNlbGVjdCh0aGlzLmZvcm1FbGVtZW50LCBvcHRpb25zKTtcbiAgICBjb25zdCBjb25uZWN0UGF5bG9hZCA9IHsgdG9tU2VsZWN0LCBvcHRpb25zIH07XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgY29ubmVjdFBheWxvYWQpO1xuICAgIHJldHVybiB0b21TZWxlY3Q7XG59O1xuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICB1cmw6IFN0cmluZyxcbiAgICBvcHRpb25zQXNIdG1sOiBCb29sZWFuLFxuICAgIGxvYWRpbmdNb3JlVGV4dDogU3RyaW5nLFxuICAgIG5vUmVzdWx0c0ZvdW5kVGV4dDogU3RyaW5nLFxuICAgIG5vTW9yZVJlc3VsdHNUZXh0OiBTdHJpbmcsXG4gICAgY3JlYXRlT3B0aW9uVGV4dDogU3RyaW5nLFxuICAgIG1pbkNoYXJhY3RlcnM6IE51bWJlcixcbiAgICB0b21TZWxlY3RPcHRpb25zOiBPYmplY3QsXG4gICAgcHJlbG9hZDogU3RyaW5nLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBCYWNrZW5kUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IocHJvbWlzZSwgYWN0aW9ucywgdXBkYXRlTW9kZWxzKSB7XG4gICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICB0aGlzLnByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVNb2RlbHM7XG4gICAgfVxuICAgIGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmZpbHRlcigoYWN0aW9uKSA9PiB0YXJnZXRlZEFjdGlvbnMuaW5jbHVkZXMoYWN0aW9uKSkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbmNsYXNzIFJlcXVlc3RCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIG1ldGhvZCA9ICdwb3N0Jykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgfVxuICAgIGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0b3RhbEZpbGVzID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9PT0gJ2dldCcgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnL19iYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogJyd9YCxcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgICAgICBjb25zdCB1cmxFbmNvZGVkSnNvbkRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gJ3Bvc3QnKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBtZXRob2QpO1xuICAgIH1cbiAgICBtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMucmVxdWVzdEJ1aWxkZXIuYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpO1xuICAgICAgICByZXR1cm4gbmV3IEJhY2tlbmRSZXF1ZXN0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuXG5sZXQgY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoY29tcG9uZW50LmVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgY29tcG9uZW50TWFwQnlDb21wb25lbnQuZGVsZXRlKGNvbXBvbmVudCk7XG59O1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IG1heENvdW50ID0gMTA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVzb2x2ZShjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgfVxuICAgIH0sIDUpO1xufSk7XG5jb25zdCBmaW5kQ29tcG9uZW50cyA9IChjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQgfHwgIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGN1cnJlbnRDb21wb25lbnQuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufTtcbmNvbnN0IGZpbmRDaGlsZHJlbiA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VycmVudENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNoaWxkQ29tcG9uZW50TmFtZSwgY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjb21wb25lbnQuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG59O1xuY29uc3QgZmluZFBhcmVudCA9IChjdXJyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KHBhcmVudEVsZW1lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuY2xhc3MgSG9va01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHRyaWdnZXJIb29rKGhvb2tOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soLi4uYXJncykpO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhbmdpbmdJdGVtc1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHNldEl0ZW0oaXRlbU5hbWUsIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogb3JpZ2luYWxSZWNvcmQub3JpZ2luYWwsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBwcmV2aW91c1ZhbHVlLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKGl0ZW1OYW1lLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgbGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAodHJ1ZU9yaWdpbmFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHRydWVPcmlnaW5hbFZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5yZW1vdmVkSXRlbXMua2V5cygpKTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmRlbGV0ZShjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZGVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnJlbW92ZWRDbGFzc2VzXTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldENoYW5nZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgYXBwbHlUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5yZW1vdmVkQ2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWRkZWRDbGFzc2VzLnNpemUgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMuaXNFbXB0eSgpICYmXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuaXNFbXB0eSgpKTtcbiAgICB9XG59XG5cbmNsYXNzIEV4dGVybmFsTXV0YXRpb25UcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENoYW5nZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSA/IHRoaXMuY2hhbmdlZEVsZW1lbnRzLmdldChlbGVtZW50KSA6IG51bGw7XG4gICAgfVxuICAgIGdldEFkZGVkRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHM7XG4gICAgfVxuICAgIHdhc0VsZW1lbnRBZGRlZChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG4gICAgfVxuICAgIGhhbmRsZVBlbmRpbmdDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm9uTXV0YXRpb25zKHRoaXMubXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWRFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMuc3BsaWNlKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gcHJldmlvdXNWYWx1ZS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNsYXNzTGlzdCk7XG4gICAgICAgIGNvbnN0IGFkZGVkVmFsdWVzID0gbmV3VmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBhZGRlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgYWRkZWRPckNoYW5nZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhuZXdTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiBwcmV2aW91c1N0eWxlc1trZXldID09PSB1bmRlZmluZWQgfHwgcHJldmlvdXNTdHlsZXNba2V5XSAhPT0gbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuICAgICAgICBhZGRlZE9yQ2hhbmdlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkU3R5bGUoc3R5bGUsIG5ld1N0eWxlc1tzdHlsZV0sIHByZXZpb3VzU3R5bGVzW3N0eWxlXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICB9XG4gICAgZXh0cmFjdFN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgc3R5bGVzLnNwbGl0KCc7JykuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuICAgIGlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09ICdGT05UJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gJ3ZlcnRpY2FsLWFsaWduOiBpbmhlcml0Oyc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FmdGVyX2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi50cmltQWxsKHBhcnQpLnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gdHJpbUFsbChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCAnICcpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoKHMpID0+IHMucmVwbGFjZSgnXScsICcnKSlcbiAgICAgICAgLmpvaW4oJy4nKSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdmFsdWVTdG9yZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWVEYXRhID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAobW9kZWxOYW1lRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB2YWx1ZVN0b3JlLmdldChtb2RlbE5hbWVEYXRhLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdChtb2RlbFZhbHVlKSA9PT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIE9iamVjdC52YWx1ZXMobW9kZWxWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQgPyBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LnNlbGVjdGVkT3B0aW9ucykubWFwKChlbCkgPT4gZWwudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWU7XG4gICAgfVxuICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZS5zb21lKCh2YWwpID0+IHZhbCA9PSBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZTtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50LmRhdGFzZXQubW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5tb2RlbCk7XG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2VsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShkaXJlY3RpdmUuYWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhyb3dPbk1pc3NpbmcgPSB0cnVlKSB7XG4gICAgY29uc3QgZGF0YU1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpO1xuICAgIGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGFNb2RlbERpcmVjdGl2ZXNbMF07XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGlmIChmb3JtRWxlbWVudCAmJiAnbW9kZWwnIGluIGZvcm1FbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbCB8fCAnKicpO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1swXTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7Zm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRocm93T25NaXNzaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZGVsIG5hbWUgZm9yIFwiJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfVwiOiB0aGUgZWxlbWVudCBtdXN0IGVpdGhlciBoYXZlIGEgXCJkYXRhLW1vZGVsXCIgKG9yIFwibmFtZVwiIGF0dHJpYnV0ZSBsaXZpbmcgaW5zaWRlIGEgPGZvcm0gZGF0YS1tb2RlbD1cIipcIj4pLmApO1xufVxuZnVuY3Rpb24gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2xvc2VzdExpdmVDb21wb25lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWNvbnRyb2xsZXJ+PVwibGl2ZVwiXScpO1xuICAgIHJldHVybiBjbG9zZXN0TGl2ZUNvbXBvbmVudCA9PT0gY29tcG9uZW50LmVsZW1lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjbG9uZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGQgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3JlYXRlZCBlbGVtZW50IGlzIG5vdCBhbiBIVE1MRWxlbWVudDogJHtodG1sLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpID0+IHtcbiAgICBjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZmluYWxWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBmaW5hbFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG59O1xuY29uc3QgaW5wdXRWYWx1ZSA9IChlbGVtZW50KSA9PiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xuXG4vLyBiYXNlIElJRkUgdG8gZGVmaW5lIGlkaW9tb3JwaFxudmFyIElkaW9tb3JwaCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBBTkQgTk9XIElUIEJFR0lOUy4uLlxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGxldCBFTVBUWV9TRVQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gZGVmYXVsdCBjb25maWd1cmF0aW9uIHZhbHVlcywgdXBkYXRhYmxlIGJ5IHVzZXJzIG5vd1xuICAgICAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBtb3JwaFN0eWxlOiBcIm91dGVySFRNTFwiLFxuICAgICAgICAgICAgY2FsbGJhY2tzIDoge1xuICAgICAgICAgICAgICAgIGJlZm9yZU5vZGVBZGRlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBhZnRlck5vZGVBZGRlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBiZWZvcmVOb2RlTW9ycGhlZDogbm9PcCxcbiAgICAgICAgICAgICAgICBhZnRlck5vZGVNb3JwaGVkOiBub09wLFxuICAgICAgICAgICAgICAgIGJlZm9yZU5vZGVSZW1vdmVkOiBub09wLFxuICAgICAgICAgICAgICAgIGFmdGVyTm9kZVJlbW92ZWQ6IG5vT3AsXG4gICAgICAgICAgICAgICAgYmVmb3JlQXR0cmlidXRlVXBkYXRlZDogbm9PcCxcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICBzdHlsZTogJ21lcmdlJyxcbiAgICAgICAgICAgICAgICBzaG91bGRQcmVzZXJ2ZTogZnVuY3Rpb24gKGVsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWx0LmdldEF0dHJpYnV0ZShcImltLXByZXNlcnZlXCIpID09PSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3VsZFJlQXBwZW5kOiBmdW5jdGlvbiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcmUtYXBwZW5kXCIpID09PSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3VsZFJlbW92ZTogbm9PcCxcbiAgICAgICAgICAgICAgICBhZnRlckhlYWRNb3JwaGVkOiBub09wLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gQ29yZSBNb3JwaGluZyBBbGdvcml0aG0gLSBtb3JwaCwgbW9ycGhOb3JtYWxpemVkQ29udGVudCwgbW9ycGhPbGROb2RlVG8sIG1vcnBoQ2hpbGRyZW5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBtb3JwaChvbGROb2RlLCBuZXdDb250ZW50LCBjb25maWcgPSB7fSkge1xuXG4gICAgICAgICAgICBpZiAob2xkTm9kZSBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgb2xkTm9kZSA9IG9sZE5vZGUuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udGVudCA9IHBhcnNlQ29udGVudChuZXdDb250ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vcm1hbGl6ZWRDb250ZW50ID0gbm9ybWFsaXplQ29udGVudChuZXdDb250ZW50KTtcblxuICAgICAgICAgICAgbGV0IGN0eCA9IGNyZWF0ZU1vcnBoQ29udGV4dChvbGROb2RlLCBub3JtYWxpemVkQ29udGVudCwgY29uZmlnKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGN0eCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChjdHguaGVhZC5ibG9jaykge1xuICAgICAgICAgICAgICAgIGxldCBvbGRIZWFkID0gb2xkTm9kZS5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0hlYWQgPSBub3JtYWxpemVkTmV3Q29udGVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEhlYWQgJiYgbmV3SGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZXMgPSBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkLCBvbGRIZWFkLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGhlYWQgcHJvbWlzZXMgcmVzb2x2ZSwgY2FsbCBtb3JwaCBhZ2FpbiwgaWdub3JpbmcgdGhlIGhlYWQgdGFnXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZE5ld0NvbnRlbnQsIE9iamVjdC5hc3NpZ24oY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJpbm5lckhUTUxcIikge1xuXG4gICAgICAgICAgICAgICAgLy8gaW5uZXJIVE1MLCBzbyB3ZSBhcmUgb25seSB1cGRhdGluZyB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBtb3JwaENoaWxkcmVuKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGROb2RlLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN0eC5tb3JwaFN0eWxlID09PSBcIm91dGVySFRNTFwiIHx8IGN0eC5tb3JwaFN0eWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgZmluZCB0aGUgYmVzdCBlbGVtZW50IG1hdGNoIGluIHRoZSBuZXcgY29udGVudCwgbW9ycGggdGhhdCwgYW5kIG1lcmdlIGl0cyBzaWJsaW5nc1xuICAgICAgICAgICAgICAgIC8vIGludG8gZWl0aGVyIHNpZGUgb2YgdGhlIGJlc3QgbWF0Y2hcbiAgICAgICAgICAgICAgICBsZXQgYmVzdE1hdGNoID0gZmluZEJlc3ROb2RlTWF0Y2gobm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzdGFzaCB0aGUgc2libGluZ3MgdGhhdCB3aWxsIG5lZWQgdG8gYmUgaW5zZXJ0ZWQgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGJlc3QgbWF0Y2hcbiAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNTaWJsaW5nID0gYmVzdE1hdGNoPy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gYmVzdE1hdGNoPy5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIC8vIG1vcnBoIGl0XG4gICAgICAgICAgICAgICAgbGV0IG1vcnBoZWROb2RlID0gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgYmVzdE1hdGNoLCBjdHgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSB3YXMgYSBiZXN0IG1hdGNoLCBtZXJnZSB0aGUgc2libGluZ3MgaW4gdG9vIGFuZCByZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHdob2xlIGJ1bmNoXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnNlcnRTaWJsaW5ncyhwcmV2aW91c1NpYmxpbmcsIG1vcnBoZWROb2RlLCBuZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIG5vdGhpbmcgd2FzIGFkZGVkIHRvIHRoZSBET01cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkRvIG5vdCB1bmRlcnN0YW5kIGhvdyB0byBtb3JwaCBzdHlsZSBcIiArIGN0eC5tb3JwaFN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHBvc3NpYmxlQWN0aXZlRWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0gY3R4XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQocG9zc2libGVBY3RpdmVFbGVtZW50LCBjdHgpIHtcbiAgICAgICAgICAgIHJldHVybiBjdHguaWdub3JlQWN0aXZlVmFsdWUgJiYgcG9zc2libGVBY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBvbGROb2RlIHJvb3Qgbm9kZSB0byBtZXJnZSBjb250ZW50IGludG9cbiAgICAgICAgICogQHBhcmFtIG5ld0NvbnRlbnQgbmV3IGNvbnRlbnQgdG8gbWVyZ2VcbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdGhhdCBlbmRlZCB1cCBpbiB0aGUgRE9NXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtb3JwaE9sZE5vZGVUbyhvbGROb2RlLCBuZXdDb250ZW50LCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChjdHguaWdub3JlQWN0aXZlICYmIG9sZE5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIDsgZWxzZSBpZiAobmV3Q29udGVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQob2xkTm9kZSkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcblxuICAgICAgICAgICAgICAgIG9sZE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNTb2Z0TWF0Y2gob2xkTm9kZSwgbmV3Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXG4gICAgICAgICAgICAgICAgb2xkTm9kZS5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCBvbGROb2RlKTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZU1vcnBoZWQob2xkTm9kZSwgbmV3Q29udGVudCkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcblxuICAgICAgICAgICAgICAgIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLmlnbm9yZSkgOyBlbHNlIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLnN0eWxlICE9PSBcIm1vcnBoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSGVhZEVsZW1lbnQobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzeW5jTm9kZUZyb20obmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudChvbGROb2RlLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaENoaWxkcmVuKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmNhbGxiYWNrcy5hZnRlck5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgdGhlIGNvcmUgYWxnb3JpdGhtIGZvciBtYXRjaGluZyB1cCBjaGlsZHJlbi4gIFRoZSBpZGVhIGlzIHRvIHVzZSBpZCBzZXRzIHRvIHRyeSB0byBtYXRjaCB1cFxuICAgICAgICAgKiBub2RlcyBhcyBmYWl0aGZ1bGx5IGFzIHBvc3NpYmxlLiAgV2UgZ3JlZWRpbHkgbWF0Y2gsIHdoaWNoIGFsbG93cyB1cyB0byBrZWVwIHRoZSBhbGdvcml0aG0gZmFzdCwgYnV0XG4gICAgICAgICAqIGJ5IHVzaW5nIGlkIHNldHMsIHdlIGFyZSBhYmxlIHRvIGJldHRlciBtYXRjaCB1cCB3aXRoIGNvbnRlbnQgZGVlcGVyIGluIHRoZSBET00uXG4gICAgICAgICAqXG4gICAgICAgICAqIEJhc2ljIGFsZ29yaXRobSBpcywgZm9yIGVhY2ggbm9kZSBpbiB0aGUgbmV3IGNvbnRlbnQ6XG4gICAgICAgICAqXG4gICAgICAgICAqIC0gaWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIG9sZCBwYXJlbnQsIGFwcGVuZCB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICogLSBpZiB0aGUgbmV3IGNvbnRlbnQgaGFzIGFuIGlkIHNldCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IGluc2VydGlvbiBwb2ludCwgbW9ycGhcbiAgICAgICAgICogLSBzZWFyY2ggZm9yIGFuIGlkIHNldCBtYXRjaFxuICAgICAgICAgKiAtIGlmIGlkIHNldCBtYXRjaCBmb3VuZCwgbW9ycGhcbiAgICAgICAgICogLSBvdGhlcndpc2Ugc2VhcmNoIGZvciBhIFwic29mdFwiIG1hdGNoXG4gICAgICAgICAqIC0gaWYgYSBzb2Z0IG1hdGNoIGlzIGZvdW5kLCBtb3JwaFxuICAgICAgICAgKiAtIG90aGVyd2lzZSwgcHJlcGVuZCB0aGUgbmV3IG5vZGUgYmVmb3JlIHRoZSBjdXJyZW50IGluc2VydGlvbiBwb2ludFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgdHdvIHNlYXJjaCBhbGdvcml0aG1zIHRlcm1pbmF0ZSBpZiBjb21wZXRpbmcgbm9kZSBtYXRjaGVzIGFwcGVhciB0byBvdXR3ZWlnaCB3aGF0IGNhbiBiZSBhY2hpZXZlZFxuICAgICAgICAgKiB3aXRoIHRoZSBjdXJyZW50IG5vZGUuICBTZWUgZmluZElkU2V0TWF0Y2goKSBhbmQgZmluZFNvZnRNYXRjaCgpIGZvciBkZXRhaWxzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld1BhcmVudCB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudCB9IG9sZFBhcmVudCB0aGUgb2xkIGNvbnRlbnQgdGhhdCB3ZSBhcmUgbWVyZ2luZyB0aGUgbmV3IGNvbnRlbnQgaW50b1xuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKG5ld1BhcmVudCwgb2xkUGFyZW50LCBjdHgpIHtcblxuICAgICAgICAgICAgbGV0IG5leHROZXdDaGlsZCA9IG5ld1BhcmVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgbGV0IGluc2VydGlvblBvaW50ID0gb2xkUGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgbmV3Q2hpbGQ7XG5cbiAgICAgICAgICAgIC8vIHJ1biB0aHJvdWdoIGFsbCB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHdoaWxlIChuZXh0TmV3Q2hpbGQpIHtcblxuICAgICAgICAgICAgICAgIG5ld0NoaWxkID0gbmV4dE5ld0NoaWxkO1xuICAgICAgICAgICAgICAgIG5leHROZXdDaGlsZCA9IG5ld0NoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIGF0IHRoZSBlbmQgb2YgdGhlIGV4aXRpbmcgcGFyZW50J3MgY2hpbGRyZW4sIGp1c3QgYXBwZW5kXG4gICAgICAgICAgICAgICAgaWYgKGluc2VydGlvblBvaW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NoaWxkKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IG5vZGUgaGFzIGFuIGlkIHNldCBtYXRjaCB0aGVuIG1vcnBoXG4gICAgICAgICAgICAgICAgaWYgKGlzSWRTZXRNYXRjaChuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhPbGROb2RlVG8oaW5zZXJ0aW9uUG9pbnQsIG5ld0NoaWxkLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHNlYXJjaCBmb3J3YXJkIGluIHRoZSBleGlzdGluZyBvbGQgY2hpbGRyZW4gZm9yIGFuIGlkIHNldCBtYXRjaFxuICAgICAgICAgICAgICAgIGxldCBpZFNldE1hdGNoID0gZmluZElkU2V0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGZvdW5kIGEgcG90ZW50aWFsIG1hdGNoLCByZW1vdmUgdGhlIG5vZGVzIHVudGlsIHRoYXQgcG9pbnQgYW5kIG1vcnBoXG4gICAgICAgICAgICAgICAgaWYgKGlkU2V0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIGlkU2V0TWF0Y2gsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIG1vcnBoT2xkTm9kZVRvKGlkU2V0TWF0Y2gsIG5ld0NoaWxkLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbm8gaWQgc2V0IG1hdGNoIGZvdW5kLCBzbyBzY2FuIGZvcndhcmQgZm9yIGEgc29mdCBtYXRjaCBmb3IgdGhlIGN1cnJlbnQgbm9kZVxuICAgICAgICAgICAgICAgIGxldCBzb2Z0TWF0Y2ggPSBmaW5kU29mdE1hdGNoKG5ld1BhcmVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmb3VuZCBhIHNvZnQgbWF0Y2ggZm9yIHRoZSBjdXJyZW50IG5vZGUsIG1vcnBoXG4gICAgICAgICAgICAgICAgaWYgKHNvZnRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludCA9IHJlbW92ZU5vZGVzQmV0d2VlbihpbnNlcnRpb25Qb2ludCwgc29mdE1hdGNoLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBtb3JwaE9sZE5vZGVUbyhzb2Z0TWF0Y2gsIG5ld0NoaWxkLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWJhbmRvbiBhbGwgaG9wZSBvZiBtb3JwaGluZywganVzdCBpbnNlcnQgdGhlIG5ldyBjaGlsZCBiZWZvcmUgdGhlIGluc2VydGlvbiBwb2ludFxuICAgICAgICAgICAgICAgIC8vIGFuZCBtb3ZlIG9uXG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NoaWxkKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIG9sZFBhcmVudC5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGluc2VydGlvblBvaW50KTtcbiAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFueSByZW1haW5pbmcgb2xkIG5vZGVzIHRoYXQgZGlkbid0IG1hdGNoIHVwIHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHdoaWxlIChpbnNlcnRpb25Qb2ludCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSBpbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKHRlbXBOb2RlLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBBdHRyaWJ1dGUgU3luY2luZyBDb2RlXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIGF0dHIge1N0cmluZ30gdGhlIGF0dHJpYnV0ZSB0byBiZSBtdXRhdGVkXG4gICAgICAgICAqIEBwYXJhbSB0byB7RWxlbWVudH0gdGhlIGVsZW1lbnQgdGhhdCBpcyBnb2luZyB0byBiZSB1cGRhdGVkXG4gICAgICAgICAqIEBwYXJhbSB1cGRhdGVUeXBlIHsoXCJ1cGRhdGVcInxcInJlbW92ZVwiKX1cbiAgICAgICAgICogQHBhcmFtIGN0eCB0aGUgbWVyZ2UgY29udGV4dFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIHNob3VsZCBiZSBpZ25vcmVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGlnbm9yZUF0dHJpYnV0ZShhdHRyLCB0bywgdXBkYXRlVHlwZSwgY3R4KSB7XG4gICAgICAgICAgICBpZihhdHRyID09PSAndmFsdWUnICYmIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiB0byA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3R4LmNhbGxiYWNrcy5iZWZvcmVBdHRyaWJ1dGVVcGRhdGVkKGF0dHIsIHRvLCB1cGRhdGVUeXBlKSA9PT0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogc3luY3MgYSBnaXZlbiBub2RlIHdpdGggYW5vdGhlciBub2RlLCBjb3B5aW5nIG92ZXIgYWxsIGF0dHJpYnV0ZXMgYW5kXG4gICAgICAgICAqIGlubmVyIGVsZW1lbnQgc3RhdGUgZnJvbSB0aGUgJ2Zyb20nIG5vZGUgdG8gdGhlICd0bycgbm9kZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGZyb20gdGhlIGVsZW1lbnQgdG8gY29weSBhdHRyaWJ1dGVzICYgc3RhdGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRvIHRoZSBlbGVtZW50IHRvIGNvcHkgYXR0cmlidXRlcyAmIHN0YXRlIHRvXG4gICAgICAgICAqIEBwYXJhbSBjdHggdGhlIG1lcmdlIGNvbnRleHRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHN5bmNOb2RlRnJvbShmcm9tLCB0bywgY3R4KSB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IGZyb20ubm9kZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIGlzIGFuIGVsZW1lbnQgdHlwZSwgc3luYyB0aGUgYXR0cmlidXRlcyBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gbmV3IG5vZGUgaW50byB0aGUgbmV3IG5vZGVcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAxIC8qIGVsZW1lbnQgdHlwZSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21BdHRyaWJ1dGVzID0gZnJvbS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvQXR0cmlidXRlcyA9IHRvLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmcm9tQXR0cmlidXRlIG9mIGZyb21BdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmVBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCB0bywgJ3VwZGF0ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0by5nZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lKSAhPT0gZnJvbUF0dHJpYnV0ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2V0QXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSwgZnJvbUF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSBiYWNrd2FyZHMgdG8gYXZvaWQgc2tpcHBpbmcgb3ZlciBpdGVtcyB3aGVuIGEgZGVsZXRlIG9jY3Vyc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0b0F0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgMCA8PSBpOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGUgPSB0b0F0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSwgdG8sICdyZW1vdmUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyb20uaGFzQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN5bmMgdGV4dCBub2Rlc1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDggLyogY29tbWVudCAqLyB8fCB0eXBlID09PSAzIC8qIHRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAodG8ubm9kZVZhbHVlICE9PSBmcm9tLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0by5ub2RlVmFsdWUgPSBmcm9tLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQodG8sIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAvLyBzeW5jIGlucHV0IHZhbHVlc1xuICAgICAgICAgICAgICAgIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBmcm9tIHtFbGVtZW50fSBlbGVtZW50IHRvIHN5bmMgdGhlIHZhbHVlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHRvIHtFbGVtZW50fSBlbGVtZW50IHRvIHN5bmMgdGhlIHZhbHVlIHRvXG4gICAgICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIHtTdHJpbmd9IHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgYXR0cmlidXRlTmFtZSwgY3R4KSB7XG4gICAgICAgICAgICBpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSAhPT0gdG9bYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgaWdub3JlVXBkYXRlID0gaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCAndXBkYXRlJywgY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0b1thdHRyaWJ1dGVOYW1lXSA9IGZyb21bYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZnJvbVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgJ3JlbW92ZScsIGN0eCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOQjogbWFueSBib3RoYW5zIGRpZWQgdG8gYnJpbmcgdXMgaW5mb3JtYXRpb246XG4gICAgICAgICAqXG4gICAgICAgICAqICBodHRwczovL2dpdGh1Yi5jb20vcGF0cmljay1zdGVlbGUtaWRlbS9tb3JwaGRvbS9ibG9iL21hc3Rlci9zcmMvc3BlY2lhbEVsSGFuZGxlcnMuanNcbiAgICAgICAgICogIGh0dHBzOi8vZ2l0aHViLmNvbS9jaG9vanMvbmFub21vcnBoL2Jsb2IvbWFzdGVyL2xpYi9tb3JwaC5qc0wxMTNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGZyb20ge0VsZW1lbnR9IHRoZSBlbGVtZW50IHRvIHN5bmMgdGhlIGlucHV0IHZhbHVlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHRvIHtFbGVtZW50fSB0aGUgZWxlbWVudCB0byBzeW5jIHRoZSBpbnB1dCB2YWx1ZSB0b1xuICAgICAgICAgKiBAcGFyYW0gY3R4IHRoZSBtZXJnZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzeW5jSW5wdXRWYWx1ZShmcm9tLCB0bywgY3R4KSB7XG4gICAgICAgICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB0byBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICBmcm9tLnR5cGUgIT09ICdmaWxlJykge1xuXG4gICAgICAgICAgICAgICAgbGV0IGZyb21WYWx1ZSA9IGZyb20udmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIHN5bmMgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sICdjaGVja2VkJywgY3R4KTtcbiAgICAgICAgICAgICAgICBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgJ2Rpc2FibGVkJywgY3R4KTtcblxuICAgICAgICAgICAgICAgIGlmICghZnJvbS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoJ3ZhbHVlJywgdG8sICdyZW1vdmUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoJ3ZhbHVlJywgdG8sICd1cGRhdGUnLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLnZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTE9wdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgJ3NlbGVjdGVkJywgY3R4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgJiYgdG8gaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZyb21WYWx1ZSA9IGZyb20udmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKCd2YWx1ZScsIHRvLCAndXBkYXRlJywgY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0by5maXJzdENoaWxkICYmIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlICE9PSBmcm9tVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG8uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyB0aGUgSEVBRCB0YWcgY2FuIGJlIGhhbmRsZWQgc3BlY2lhbGx5LCBlaXRoZXIgdy8gYSAnbWVyZ2UnIG9yICdhcHBlbmQnIHN0eWxlXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZFRhZywgY3VycmVudEhlYWQsIGN0eCkge1xuXG4gICAgICAgICAgICBsZXQgYWRkZWQgPSBbXTtcbiAgICAgICAgICAgIGxldCByZW1vdmVkID0gW107XG4gICAgICAgICAgICBsZXQgcHJlc2VydmVkID0gW107XG4gICAgICAgICAgICBsZXQgbm9kZXNUb0FwcGVuZCA9IFtdO1xuXG4gICAgICAgICAgICBsZXQgaGVhZE1lcmdlU3R5bGUgPSBjdHguaGVhZC5zdHlsZTtcblxuICAgICAgICAgICAgLy8gcHV0IGFsbCBuZXcgaGVhZCBlbGVtZW50cyBpbnRvIGEgTWFwLCBieSB0aGVpciBvdXRlckhUTUxcbiAgICAgICAgICAgIGxldCBzcmNUb05ld0hlYWROb2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmV3SGVhZENoaWxkIG9mIG5ld0hlYWRUYWcuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzcmNUb05ld0hlYWROb2Rlcy5zZXQobmV3SGVhZENoaWxkLm91dGVySFRNTCwgbmV3SGVhZENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZm9yIGVhY2ggZWx0IGluIHRoZSBjdXJyZW50IGhlYWRcbiAgICAgICAgICAgIGZvciAoY29uc3QgY3VycmVudEhlYWRFbHQgb2YgY3VycmVudEhlYWQuY2hpbGRyZW4pIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGhlYWQgZWxlbWVudCBpcyBpbiB0aGUgbWFwXG4gICAgICAgICAgICAgICAgbGV0IGluTmV3Q29udGVudCA9IHNyY1RvTmV3SGVhZE5vZGVzLmhhcyhjdXJyZW50SGVhZEVsdC5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgIGxldCBpc1JlQXBwZW5kZWQgPSBjdHguaGVhZC5zaG91bGRSZUFwcGVuZChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzUHJlc2VydmVkID0gY3R4LmhlYWQuc2hvdWxkUHJlc2VydmUoY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgIGlmIChpbk5ld0NvbnRlbnQgfHwgaXNQcmVzZXJ2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVBcHBlbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IHZlcnNpb24gYW5kIGxldCB0aGUgbmV3IHZlcnNpb24gcmVwbGFjZSBpdCBhbmQgcmUtZXhlY3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBhbmQgc2hvdWxkIG5vdCBiZSByZS1hcHBlbmRlZCwgc28gcmVtb3ZlIGl0IGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXcgY29udGVudCBtYXAsIHByZXNlcnZpbmcgaXQgaW4gdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjVG9OZXdIZWFkTm9kZXMuZGVsZXRlKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZE1lcmdlU3R5bGUgPT09IFwiYXBwZW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgYW5kIHRoaXMgZXhpc3RpbmcgZWxlbWVudCBpcyBub3QgbmV3IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIGlmIGFuZCBvbmx5IGlmIGl0IGlzIG1hcmtlZCBmb3IgcmUtYXBwZW5kIGRvIHdlIGRvIGFueXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZUFwcGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvQXBwZW5kLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIG1lcmdlLCB3ZSByZW1vdmUgdGhpcyBjb250ZW50IHNpbmNlIGl0IGlzIG5vdCBpbiB0aGUgbmV3IGhlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHguaGVhZC5zaG91bGRSZW1vdmUoY3VycmVudEhlYWRFbHQpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFB1c2ggdGhlIHJlbWFpbmluZyBuZXcgaGVhZCBlbGVtZW50cyBpbiB0aGUgTWFwIGludG8gdGhlXG4gICAgICAgICAgICAvLyBub2RlcyB0byBhcHBlbmQgdG8gdGhlIGhlYWQgdGFnXG4gICAgICAgICAgICBub2Rlc1RvQXBwZW5kLnB1c2goLi4uc3JjVG9OZXdIZWFkTm9kZXMudmFsdWVzKCkpO1xuXG4gICAgICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmV3Tm9kZSBvZiBub2Rlc1RvQXBwZW5kKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0VsdCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG5ld05vZGUub3V0ZXJIVE1MKS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdFbHQpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3RWx0LmhyZWYgfHwgbmV3RWx0LnNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc29sdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gX3Jlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SGVhZC5hcHBlbmRDaGlsZChuZXdFbHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkLnB1c2gobmV3RWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgcmVtb3ZlZCBlbGVtZW50cywgYWZ0ZXIgd2UgaGF2ZSBhcHBlbmRlZCB0aGUgbmV3IGVsZW1lbnRzIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIG5ldHdvcmsgcmVxdWVzdHMgZm9yIHRoaW5ncyBsaWtlIHN0eWxlIHNoZWV0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZW1vdmVkRWxlbWVudCBvZiByZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SGVhZC5yZW1vdmVDaGlsZChyZW1vdmVkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChyZW1vdmVkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHguaGVhZC5hZnRlckhlYWRNb3JwaGVkKGN1cnJlbnRIZWFkLCB7YWRkZWQ6IGFkZGVkLCBrZXB0OiBwcmVzZXJ2ZWQsIHJlbW92ZWQ6IHJlbW92ZWR9KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5vT3AoKSB7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgIERlZXAgbWVyZ2VzIHRoZSBjb25maWcgb2JqZWN0IGFuZCB0aGUgSWRpb21vcm9waC5kZWZhdWx0cyBvYmplY3QgdG9cbiAgICAgICAgICBwcm9kdWNlIGEgZmluYWwgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlRGVmYXVsdHMoY29uZmlnKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxDb25maWcgPSB7fTtcbiAgICAgICAgICAgIC8vIGNvcHkgdG9wIGxldmVsIHN0dWZmIGludG8gZmluYWwgY29uZmlnXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLCBkZWZhdWx0cyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLCBjb25maWcpO1xuXG4gICAgICAgICAgICAvLyBjb3B5IGNhbGxiYWNrcyBpbnRvIGZpbmFsIGNvbmZpZyAoZG8gdGhpcyB0byBkZWVwIG1lcmdlIHRoZSBjYWxsYmFja3MpXG4gICAgICAgICAgICBmaW5hbENvbmZpZy5jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBkZWZhdWx0cy5jYWxsYmFja3MpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGNvbmZpZy5jYWxsYmFja3MpO1xuXG4gICAgICAgICAgICAvLyBjb3B5IGhlYWQgY29uZmlnIGludG8gZmluYWwgY29uZmlnICAoZG8gdGhpcyB0byBkZWVwIG1lcmdlIHRoZSBoZWFkKVxuICAgICAgICAgICAgZmluYWxDb25maWcuaGVhZCA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBkZWZhdWx0cy5oZWFkKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuaGVhZCwgY29uZmlnLmhlYWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnID0gbWVyZ2VEZWZhdWx0cyhjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG9sZE5vZGUsXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudDogbmV3Q29udGVudCxcbiAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICBtb3JwaFN0eWxlOiBjb25maWcubW9ycGhTdHlsZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVBY3RpdmU6IGNvbmZpZy5pZ25vcmVBY3RpdmUsXG4gICAgICAgICAgICAgICAgaWdub3JlQWN0aXZlVmFsdWU6IGNvbmZpZy5pZ25vcmVBY3RpdmVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpZE1hcDogY3JlYXRlSWRNYXAob2xkTm9kZSwgbmV3Q29udGVudCksXG4gICAgICAgICAgICAgICAgZGVhZElkczogbmV3IFNldCgpLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczogY29uZmlnLmNhbGxiYWNrcyxcbiAgICAgICAgICAgICAgICBoZWFkOiBjb25maWcuaGVhZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNJZFNldE1hdGNoKG5vZGUxLCBub2RlMiwgY3R4KSB7XG4gICAgICAgICAgICBpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUxLmlkICE9PSBcIlwiICYmIG5vZGUxLmlkID09PSBub2RlMi5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikgPiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzU29mdE1hdGNoKG5vZGUxLCBub2RlMikge1xuICAgICAgICAgICAgaWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTm9kZXNCZXR3ZWVuKHN0YXJ0SW5jbHVzaXZlLCBlbmRFeGNsdXNpdmUsIGN0eCkge1xuICAgICAgICAgICAgd2hpbGUgKHN0YXJ0SW5jbHVzaXZlICE9PSBlbmRFeGNsdXNpdmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSBzdGFydEluY2x1c2l2ZTtcbiAgICAgICAgICAgICAgICBzdGFydEluY2x1c2l2ZSA9IHN0YXJ0SW5jbHVzaXZlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIGVuZEV4Y2x1c2l2ZSk7XG4gICAgICAgICAgICByZXR1cm4gZW5kRXhjbHVzaXZlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBTY2FucyBmb3J3YXJkIGZyb20gdGhlIGluc2VydGlvblBvaW50IGluIHRoZSBvbGQgcGFyZW50IGxvb2tpbmcgZm9yIGEgcG90ZW50aWFsIGlkIG1hdGNoXG4gICAgICAgIC8vIGZvciB0aGUgbmV3Q2hpbGQuICBXZSBzdG9wIGlmIHdlIGZpbmQgYSBwb3RlbnRpYWwgaWQgbWF0Y2ggZm9yIHRoZSBuZXcgY2hpbGQgT1JcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBvZiBwb3RlbnRpYWwgaWQgbWF0Y2hlcyB3ZSBhcmUgZGlzY2FyZGluZyBpcyBncmVhdGVyIHRoYW4gdGhlXG4gICAgICAgIC8vIHBvdGVudGlhbCBpZCBtYXRjaGVzIGZvciB0aGUgbmV3IGNoaWxkXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gZmluZElkU2V0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXG4gICAgICAgICAgICAvLyBtYXggaWQgbWF0Y2hlcyB3ZSBhcmUgd2lsbGluZyB0byBkaXNjYXJkIGluIG91ciBzZWFyY2hcbiAgICAgICAgICAgIGxldCBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbmV3Q2hpbGQsIG9sZFBhcmVudCk7XG5cbiAgICAgICAgICAgIGxldCBwb3RlbnRpYWxNYXRjaCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgc2VhcmNoIGZvcndhcmQgaWYgdGhlcmUgaXMgYSBwb3NzaWJpbGl0eSBvZiBhbiBpZCBtYXRjaFxuICAgICAgICAgICAgaWYgKG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcG90ZW50aWFsTWF0Y2ggPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHBvc3NpYmlsaXR5IG9mIGFuIGlkIG1hdGNoLCBzY2FuIGZvcndhcmRcbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBwb3RlbnRpYWwgaWQgbWF0Y2ggY291bnQgd2UgYXJlIGRpc2NhcmRpbmcgKHRoZVxuICAgICAgICAgICAgICAgIC8vIG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGlzIHRvIG1ha2UgaXQgbGlrZWx5XG4gICAgICAgICAgICAgICAgLy8gd29ydGggaXQpXG4gICAgICAgICAgICAgICAgbGV0IG90aGVyTWF0Y2hDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvdGVudGlhbE1hdGNoICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGFuIGlkIG1hdGNoLCByZXR1cm4gdGhlIGN1cnJlbnQgcG90ZW50aWFsIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbE1hdGNoLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wdXRlciB0aGUgb3RoZXIgcG90ZW50aWFsIG1hdGNoZXMgb2YgdGhpcyBuZXcgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBvdGhlck1hdGNoQ291bnQgKz0gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIHBvdGVudGlhbE1hdGNoLCBuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyTWF0Y2hDb3VudCA+IG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBtb3JlIHBvdGVudGlhbCBpZCBtYXRjaGVzIGluIF9vdGhlcl8gY29udGVudCwgd2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBoYXZlIGEgZ29vZCBjYW5kaWRhdGUgZm9yIGFuIGlkIG1hdGNoLCBzbyByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBhZHZhbmNlZCB0byB0aGUgbmV4dCBvbGQgY29udGVudCBjaGlsZFxuICAgICAgICAgICAgICAgICAgICBwb3RlbnRpYWxNYXRjaCA9IHBvdGVudGlhbE1hdGNoLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxNYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gU2NhbnMgZm9yd2FyZCBmcm9tIHRoZSBpbnNlcnRpb25Qb2ludCBpbiB0aGUgb2xkIHBhcmVudCBsb29raW5nIGZvciBhIHBvdGVudGlhbCBzb2Z0IG1hdGNoXG4gICAgICAgIC8vIGZvciB0aGUgbmV3Q2hpbGQuICBXZSBzdG9wIGlmIHdlIGZpbmQgYSBwb3RlbnRpYWwgc29mdCBtYXRjaCBmb3IgdGhlIG5ldyBjaGlsZCBPUlxuICAgICAgICAvLyBpZiB3ZSBmaW5kIGEgcG90ZW50aWFsIGlkIG1hdGNoIGluIHRoZSBvbGQgcGFyZW50cyBjaGlsZHJlbiBPUiBpZiB3ZSBmaW5kIHR3b1xuICAgICAgICAvLyBwb3RlbnRpYWwgc29mdCBtYXRjaGVzIGZvciB0aGUgbmV4dCB0d28gcGllY2VzIG9mIG5ldyBjb250ZW50XG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gZmluZFNvZnRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG5cbiAgICAgICAgICAgIGxldCBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IG5ld0NoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgbGV0IHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChwb3RlbnRpYWxTb2Z0TWF0Y2ggIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxTb2Z0TWF0Y2gsIG5ld0NvbnRlbnQpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBwb3RlbnRpYWwgc29mdCBtYXRjaCBoYXMgYSBwb3RlbnRpYWwgaWQgc2V0IG1hdGNoIHdpdGggdGhlIHJlbWFpbmluZyBuZXdcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudCBzbyBiYWlsIG91dCBvZiBsb29raW5nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYSBzb2Z0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgbm9kZSwgcmV0dXJuIGl0XG4gICAgICAgICAgICAgICAgaWYgKGlzU29mdE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxTb2Z0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzU29mdE1hdGNoKG5leHRTaWJsaW5nLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXh0IG5ldyBub2RlIGhhcyBhIHNvZnQgbWF0Y2ggd2l0aCB0aGlzIG5vZGUsIHNvXG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgY291bnQgb2YgZnV0dXJlIHNvZnQgbWF0Y2hlc1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nU29mdE1hdGNoQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgdHdvIGZ1dHVyZSBzb2Z0IG1hdGNoZXMsIGJhaWwgdG8gYWxsb3cgdGhlIHNpYmxpbmdzIHRvIHNvZnQgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSBkb24ndCBjb25zdW1lIGZ1dHVyZSBzb2Z0IG1hdGNoZXMgZm9yIHRoZSBzYWtlIG9mIHRoZSBjdXJyZW50IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFkdmFuY2VkIHRvIHRoZSBuZXh0IG9sZCBjb250ZW50IGNoaWxkXG4gICAgICAgICAgICAgICAgcG90ZW50aWFsU29mdE1hdGNoID0gcG90ZW50aWFsU29mdE1hdGNoLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBzdmdzIHRvIGF2b2lkIGZhbHNlLXBvc2l0aXZlIG1hdGNoZXMgb24gaGVhZCwgZXRjLlxuICAgICAgICAgICAgbGV0IGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQgPSBuZXdDb250ZW50LnJlcGxhY2UoLzxzdmcoXFxzW14+XSo+fD4pKFtcXHNcXFNdKj8pPFxcL3N2Zz4vZ2ltLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBuZXdDb250ZW50IGNvbnRhaW5zIGEgaHRtbCwgaGVhZCBvciBib2R5IHRhZywgd2UgY2FuIHNpbXBseSBwYXJzZSBpdCB3L28gd3JhcHBpbmdcbiAgICAgICAgICAgIGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaGVhZD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvYm9keT4vKSkge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhuZXdDb250ZW50LCBcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBhIGZ1bGwgSFRNTCBkb2N1bWVudCwgcmV0dXJuIHRoZSBkb2N1bWVudCBpdHNlbGYgYXMgdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudFdpdGhTdmdzUmVtb3ZlZC5tYXRjaCgvPFxcL2h0bWw+LykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSByZXR1cm4gdGhlIGh0bWwgZWxlbWVudCBhcyB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbEVsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChodG1sRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIHBhcnRpYWwgSFRNTCwgd3JhcCBpdCBpbiBhIHRlbXBsYXRlIHRhZyB0byBwcm92aWRlIGEgcGFyZW50IGVsZW1lbnQgYW5kIGFsc28gdG8gaGVscFxuICAgICAgICAgICAgICAgIC8vIGRlYWwgd2l0aCB0b3VjaHkgdGFncyBsaWtlIHRyLCB0Ym9keSwgZXRjLlxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXCI8Ym9keT48dGVtcGxhdGU+XCIgKyBuZXdDb250ZW50ICsgXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZURvYy5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudDtcbiAgICAgICAgICAgICAgICBjb250ZW50LmdlbmVyYXRlZEJ5SWRpb21vcnBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbm9ybWFsaXplQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgICAgICAgICBpZiAobmV3Q29udGVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFVubmVjZXNzYXJ5TG9jYWxWYXJpYWJsZUpTXG4gICAgICAgICAgICAgICAgY29uc3QgZHVtbXlQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgdGVtcGxhdGUgdGFnIGNyZWF0ZWQgYnkgaWRpb21vcnBoIHBhcnNpbmcgY2FuIHNlcnZlIGFzIGEgZHVtbXkgcGFyZW50XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gYSBzaW5nbGUgbm9kZSBpcyBhZGRlZCBhcyBhIGNoaWxkIHRvIGEgZHVtbXkgcGFyZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZHVtbXlQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkdW1teVBhcmVudC5hcHBlbmQobmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhbGwgbm9kZXMgaW4gdGhlIGFycmF5IG9yIEhUTUxFbGVtZW50IGNvbGxlY3Rpb24gYXJlIGNvbnNvbGlkYXRlZCB1bmRlclxuICAgICAgICAgICAgICAgIC8vIGEgc2luZ2xlIGR1bW15IHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZHVtbXlQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsdCBvZiBbLi4ubmV3Q29udGVudF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZHVtbXlQYXJlbnQuYXBwZW5kKGVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkdW1teVBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIGxldCBhZGRlZCA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKHByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChwcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzU2libGluZyA9IHByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgYWRkZWQucHVzaChub2RlKTsgLy8gcHVzaCBhZGRlZCBwcmVjZWRpbmcgc2libGluZ3Mgb24gaW4gb3JkZXIgYW5kIGluc2VydFxuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vcnBoZWROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZGVkLnB1c2gobW9ycGhlZE5vZGUpO1xuICAgICAgICAgICAgd2hpbGUgKG5leHRTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBhZGRlZC5wdXNoKG5leHRTaWJsaW5nKTsgLy8gaGVyZSB3ZSBhcmUgZ29pbmcgaW4gb3JkZXIsIHNvIHB1c2ggb24gYXMgd2Ugc2NhbiwgcmF0aGVyIHRoYW4gYWRkXG4gICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3RhY2sucG9wKCksIG1vcnBoZWROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRCZXN0Tm9kZU1hdGNoKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBuZXdDb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgYmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2NvcmUgPSBzY29yZUVsZW1lbnQoY3VycmVudEVsZW1lbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBuZXdTY29yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiZXN0RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNjb3JlRWxlbWVudChub2RlMSwgbm9kZTIsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGlzU29mdE1hdGNoKG5vZGUxLCBub2RlMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLjUgKyBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KSB7XG4gICAgICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIHRlbXBOb2RlKTtcbiAgICAgICAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKHRlbXBOb2RlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgdGVtcE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQodGVtcE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBJRCBTZXQgRnVuY3Rpb25zXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICBmdW5jdGlvbiBpc0lkSW5Db25zaWRlcmF0aW9uKGN0eCwgaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAhY3R4LmRlYWRJZHMuaGFzKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgIGxldCBpZFNldCA9IGN0eC5pZE1hcC5nZXQodGFyZ2V0Tm9kZSkgfHwgRU1QVFlfU0VUO1xuICAgICAgICAgICAgcmV0dXJuIGlkU2V0LmhhcyhpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5vZGUpIHtcbiAgICAgICAgICAgIGxldCBpZFNldCA9IGN0eC5pZE1hcC5nZXQobm9kZSkgfHwgRU1QVFlfU0VUO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZFNldCkge1xuICAgICAgICAgICAgICAgIGN0eC5kZWFkSWRzLmFkZChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSB7XG4gICAgICAgICAgICBsZXQgc291cmNlU2V0ID0gY3R4LmlkTWFwLmdldChub2RlMSkgfHwgRU1QVFlfU0VUO1xuICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBzb3VyY2VTZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBhIHBvdGVudGlhbCBtYXRjaCBpcyBhbiBpZCBpbiB0aGUgc291cmNlIGFuZCBwb3RlbnRpYWxJZHNTZXQsIGJ1dFxuICAgICAgICAgICAgICAgIC8vIHRoYXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gbWVyZ2VkIGludG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChpc0lkSW5Db25zaWRlcmF0aW9uKGN0eCwgaWQpICYmIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIG5vZGUyKSkge1xuICAgICAgICAgICAgICAgICAgICArK21hdGNoQ291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib3R0b20gdXAgYWxnb3JpdGhtIHRoYXQgZmluZHMgYWxsIGVsZW1lbnRzIHdpdGggaWRzIGluc2lkZSBvZiB0aGUgbm9kZVxuICAgICAgICAgKiBhcmd1bWVudCBhbmQgcG9wdWxhdGVzIGlkIHNldHMgZm9yIHRob3NlIG5vZGVzIGFuZCBhbGwgdGhlaXIgcGFyZW50cywgZ2VuZXJhdGluZ1xuICAgICAgICAgKiBhIHNldCBvZiBpZHMgY29udGFpbmVkIHdpdGhpbiBhbGwgbm9kZXMgZm9yIHRoZSBlbnRpcmUgaGllcmFyY2h5IGluIHRoZSBET01cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gICAgICAgICAqIEBwYXJhbSB7TWFwPE5vZGUsIFNldDxTdHJpbmc+Pn0gaWRNYXBcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5vZGUsIGlkTWFwKSB7XG4gICAgICAgICAgICBsZXQgbm9kZVBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIC8vIGZpbmQgYWxsIGVsZW1lbnRzIHdpdGggYW4gaWQgcHJvcGVydHlcbiAgICAgICAgICAgIGxldCBpZEVsZW1lbnRzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsdCBvZiBpZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbHQ7XG4gICAgICAgICAgICAgICAgLy8gd2FsayB1cCB0aGUgcGFyZW50IGhpZXJhcmNoeSBvZiB0aGF0IGVsZW1lbnQsIGFkZGluZyB0aGUgaWRcbiAgICAgICAgICAgICAgICAvLyBvZiBlbGVtZW50IHRvIHRoZSBwYXJlbnQncyBpZCBzZXRcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gbm9kZVBhcmVudCAmJiBjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkU2V0ID0gaWRNYXAuZ2V0KGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgaWQgc2V0IGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdCBhbmQgaW5zZXJ0IGl0IGluIHRoZSAgbWFwXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZFNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTWFwLnNldChjdXJyZW50LCBpZFNldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWRTZXQuYWRkKGVsdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gY29tcHV0ZXMgYSBtYXAgb2Ygbm9kZXMgdG8gYWxsIGlkcyBjb250YWluZWQgd2l0aGluIHRoYXQgbm9kZSAoaW5jbHVzaXZlIG9mIHRoZVxuICAgICAgICAgKiBub2RlKS4gIFRoaXMgbWFwIGNhbiBiZSB1c2VkIHRvIGFzayBpZiB0d28gbm9kZXMgaGF2ZSBpbnRlcnNlY3Rpbmcgc2V0cyBvZiBpZHMsIHdoaWNoIGFsbG93c1xuICAgICAgICAgKiBmb3IgYSBsb29zZXIgZGVmaW5pdGlvbiBvZiBcIm1hdGNoaW5nXCIgdGhhbiB0cmFkaXRpb24gaWQgbWF0Y2hpbmcsIGFuZCBhbGxvd3MgY2hpbGQgbm9kZXNcbiAgICAgICAgICogdG8gY29udHJpYnV0ZSB0byBhIHBhcmVudCBub2RlcyBtYXRjaGluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBvbGRDb250ZW50ICB0aGUgb2xkIGNvbnRlbnQgdGhhdCB3aWxsIGJlIG1vcnBoZWRcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBuZXdDb250ZW50ICB0aGUgbmV3IGNvbnRlbnQgdG8gbW9ycGggdG9cbiAgICAgICAgICogQHJldHVybnMge01hcDxOb2RlLCBTZXQ8U3RyaW5nPj59IGEgbWFwIG9mIG5vZGVzIHRvIGlkIHNldHMgZm9yIHRoZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSWRNYXAob2xkQ29udGVudCwgbmV3Q29udGVudCkge1xuICAgICAgICAgICAgbGV0IGlkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcG9wdWxhdGVJZE1hcEZvck5vZGUob2xkQ29udGVudCwgaWRNYXApO1xuICAgICAgICAgICAgcG9wdWxhdGVJZE1hcEZvck5vZGUobmV3Q29udGVudCwgaWRNYXApO1xuICAgICAgICAgICAgcmV0dXJuIGlkTWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyBUaGlzIGlzIHdoYXQgZW5kcyB1cCBiZWNvbWluZyB0aGUgSWRpb21vcnBoIGdsb2JhbCBvYmplY3RcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9ycGgsXG4gICAgICAgICAgICBkZWZhdWx0c1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oZWxlbWVudCkge1xuICAgIGNvbnN0IGlzRmlsZUlucHV0ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZSc7XG4gICAgaWYgKCFpc0ZpbGVJbnB1dCkge1xuICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oY2hpbGQpO1xuICAgIH0pO1xufVxuXG5jb25zdCBzeW5jQXR0cmlidXRlcyA9IChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyb21FbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBmcm9tRWwuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgdG9FbC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIgPSBbXTtcbiAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZSA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAgPSAoaWQsIHJlcGxhY2VXaXRoQ2xvbmUpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG4gICAgICAgIGlmICghKG9sZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT3JpZ2luYWwgZWxlbWVudCB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApO1xuICAgICAgICB9XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLnB1c2goaWQpO1xuICAgICAgICBpZiAoIXJlcGxhY2VXaXRoQ2xvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb25lZE9sZEVsZW1lbnQgPSBjbG9uZUhUTUxFbGVtZW50KG9sZEVsZW1lbnQpO1xuICAgICAgICBvbGRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZE9sZEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gY2xvbmVkT2xkRWxlbWVudDtcbiAgICB9O1xuICAgIHJvb3RUb0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGl2ZS1wcmVzZXJ2ZV0nKS5mb3JFYWNoKChuZXdFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gbmV3RWxlbWVudC5pZDtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YS1saXZlLXByZXNlcnZlIGF0dHJpYnV0ZSByZXF1aXJlcyBhbiBpZCBhdHRyaWJ1dGUgdG8gYmUgc2V0IG9uIHRoZSBlbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkRWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgICAgaWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZWxlbWVudCB3aXRoIGlkIFwiJHtpZH1cIiB3YXMgbm90IGZvdW5kIGluIHRoZSBvcmlnaW5hbCBIVE1MYCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1wcmVzZXJ2ZScpO1xuICAgICAgICBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5zZXQoaWQsIG9sZEVsZW1lbnQpO1xuICAgICAgICBzeW5jQXR0cmlidXRlcyhuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgICB9KTtcbiAgICBJZGlvbW9ycGgubW9ycGgocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgYmVmb3JlTm9kZU1vcnBoZWQ6IChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShmcm9tRWwgaW5zdGFuY2VvZiBFbGVtZW50KSB8fCAhKHRvRWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmlkICYmIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmhhcyhmcm9tRWwuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaWQgPT09IHRvRWwuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRGcm9tRWwgPSBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAoZnJvbUVsLmlkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9uZWRGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjbG9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIElkaW9tb3JwaC5tb3JwaChjbG9uZWRGcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tRWwuX194ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuQWxwaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyB0aG91Z2ggdGhlIGdsb2JhbCB3aW5kb3cuQWxwaW5lIHZhcmlhYmxlLiBQbGVhc2UgbWFrZSBzdXJlIEFscGluZS5qcyBpcyBsb2FkZWQgYmVmb3JlIFN5bWZvbnkgVVggTGl2ZUNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgbW9ycGggZnVuY3Rpb24uIFBsZWFzZSBtYWtlIHN1cmUgdGhlIEFscGluZS5qcyBNb3JwaCBwbHVnaW4gaXMgaW5zdGFsbGVkIGFuZCBsb2FkZWQsIHNlZSBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zL21vcnBoIGZvciBtb3JlIGluZm9ybWF0aW9uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LkFscGluZS5tb3JwaChmcm9tRWwuX194LCB0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgdG9FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkRmllbGRFbGVtZW50cy5pbmNsdWRlcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21FbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsICE9PSBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGZyb21FbCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudENoYW5nZXMgPSBleHRlcm5hbE11dGF0aW9uVHJhY2tlci5nZXRDaGFuZ2VkRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFwcGx5VG9FbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ09QVElPTicgJiYgZnJvbUVsLmlzRXF1YWxOb2RlKHRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZEZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkVG9FbCA9IGNsb25lSFRNTEVsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEZyb21FbC5pc0VxdWFsTm9kZShub3JtYWxpemVkVG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2tpcC1tb3JwaCcpIHx8IChmcm9tRWwuaWQgJiYgZnJvbUVsLmlkICE9PSB0b0VsLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5uZXJIVE1MID0gdG9FbC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1za2lwLW1vcnBoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIWZyb21FbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVOb2RlUmVtb3ZlZChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKG5vZGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtFbGVtZW50QXNOZWVkaW5nUG9zdE1vcnBoU3dhcChub2RlLmlkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlci5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuICAgICAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICEob3JpZ2luYWxFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudHMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbWVudC5yZXBsYWNlV2l0aChvcmlnaW5hbEVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsS2V5IH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKGN1cnJlbnRMZXZlbERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudExldmVsRGF0YVtmaW5hbEtleV07XG59XG5jb25zdCBwYXJzZURlZXBEYXRhID0gKGRhdGEsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZmluYWxEYXRhO1xuICAgIGNvbnN0IHBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEsXG4gICAgICAgIGZpbmFsRGF0YSxcbiAgICAgICAgZmluYWxLZXksXG4gICAgICAgIHBhcnRzLFxuICAgIH07XG59O1xuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgfTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHsgLi4udGhpcy5wZW5kaW5nUHJvcHMsIC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgcHJvcHMsIGxpc3RlbmVycywgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludCA9ICcnO1xuICAgICAgICB0aGlzLmRlZmF1bHREZWJvdW5jZSA9IDE1MDtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgICAgIHRoaXMuZWxlbWVudERyaXZlciA9IGVsZW1lbnREcml2ZXI7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGxpc3RlbmVyLmV2ZW50LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5nZXQobGlzdGVuZXIuZXZlbnQpPy5wdXNoKGxpc3RlbmVyLmFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZShwcm9wcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyID0gbmV3IFVuc3luY2VkSW5wdXRzVHJhY2tlcih0aGlzLCBlbGVtZW50RHJpdmVyKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBIb29rTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyID0gbmV3IEV4dGVybmFsTXV0YXRpb25UcmFja2VyKHRoaXMuZWxlbWVudCwgKGVsZW1lbnQpID0+IGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMpKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgcmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB1bnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdkaXNjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdG9wKCk7XG4gICAgfVxuICAgIG9uKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy51bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldChtb2RlbCwgdmFsdWUsIHJlUmVuZGVyID0gZmFsc2UsIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIG5hbWUgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ21vZGVsOnNldCcsIG1vZGVsLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0RGF0YShtb2RlbCkge1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBhY3Rpb24obmFtZSwgYXJncyA9IHt9LCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZmlsZXMoa2V5LCBpbnB1dCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gaW5wdXQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnRyeVN0YXJ0aW5nUmVxdWVzdCgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZE1vZGVscygpO1xuICAgIH1cbiAgICBlbWl0KG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBmYWxzZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFVwKG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCB0cnVlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0U2VsZihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgIH1cbiAgICBwZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gZmluZENvbXBvbmVudHModGhpcywgZW1pdFVwLCBtYXRjaGluZ05hbWUpO1xuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRvRW1pdChuYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKSB8fCBbXTtcbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uKGFjdGlvbiwgZGF0YSwgMSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1R1cmJvRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10dXJibz1cImZhbHNlXCJdJyk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICBjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5maWxlcykge1xuICAgICAgICAgICAgICAgIGZpbGVzVG9TZW5kW2tleV0gPSB2YWx1ZS5maWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgICAgICAgcHJvcHM6IHRoaXMudmFsdWVTdG9yZS5nZXRPcmlnaW5hbFByb3BzKCksXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnBlbmRpbmdBY3Rpb25zLFxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiB7fSxcbiAgICAgICAgICAgIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ6IHRoaXMudmFsdWVTdG9yZS5nZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCksXG4gICAgICAgICAgICBmaWxlczogZmlsZXNUb1NlbmQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlcXVlc3Q6c3RhcnRlZCcsIHJlcXVlc3RDb25maWcpO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHJlcXVlc3RDb25maWcucHJvcHMsIHJlcXVlc3RDb25maWcuYWN0aW9ucywgcmVxdWVzdENvbmZpZy51cGRhdGVkLCByZXF1ZXN0Q29uZmlnLmNoaWxkcmVuLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIHJlcXVlc3RDb25maWcuZmlsZXMpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5mbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFja2VuZFJlc3BvbnNlID0gbmV3IEJhY2tlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyk/LmluY2x1ZGVzKCdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcpICYmXG4gICAgICAgICAgICAgICAgIWhlYWRlcnMuZ2V0KCdYLUxpdmUtUmVkaXJlY3QnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBkaXNwbGF5RXJyb3I6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlU3RvcmUucHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVzcG9uc2U6ZXJyb3InLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbHMuZGlzcGxheUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRXJyb3IoaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1ZXN0UGVuZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6c3RhcnRlZCcsIGh0bWwsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICBpZiAoIWNvbnRyb2xzLnNob3VsZFJlbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHVyYm9FbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTW9kZWxWYWx1ZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSkuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgaWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLWNvbnRyb2xsZXJ+PWxpdmVdJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSAnJHt0aGlzLm5hbWV9JyBjb21wb25lbnQgSFRNTCByZXR1cm5lZDpgLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuaGFuZGxlUGVuZGluZ0NoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdG9wKCk7XG4gICAgICAgIGV4ZWN1dGVNb3JwaGRvbSh0aGlzLmVsZW1lbnQsIG5ld0VsZW1lbnQsIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkSW5wdXRzKCksIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudFByb3BzKCk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVBbGxQcm9wcyhuZXdQcm9wcyk7XG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQoKTtcbiAgICAgICAgY29uc3QgYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2ggPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2goKTtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kaWZpZWRNb2RlbFZhbHVlcykuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50c1RvRW1pdC5mb3JFYWNoKCh7IGV2ZW50LCBkYXRhLCB0YXJnZXQsIGNvbXBvbmVudE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFVwKGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTZWxmKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2guZm9yRWFjaCgoeyBldmVudCwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpmaW5pc2hlZCcsIHRoaXMpO1xuICAgIH1cbiAgICBjYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkge1xuICAgICAgICBpZiAoZGVib3VuY2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHREZWJvdW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVib3VuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVib3VuY2U7XG4gICAgfVxuICAgIGNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSkge1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCB0aGlzLmNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSk7XG4gICAgfVxuICAgIHJlbmRlckVycm9yKGh0bWwpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmUtY29tcG9uZW50LWVycm9yJyk7XG4gICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW9kYWwuaWQgPSAnbGl2ZS1jb21wb25lbnQtZXJyb3InO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucGFkZGluZyA9ICc1MHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC41KSc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS56SW5kZXggPSAnMTAwMDAwJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZmxleEdyb3cgPSAnMSc7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChtb2RhbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwub3V0ZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgICAgICB9O1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwobW9kYWwpKTtcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gICAgcmVzZXRQcm9taXNlKCkge1xuICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3VwZGF0ZUZyb21QYXJlbnRQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpO1xuICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcHJveGlmeUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KGNvbXBvbmVudCwge1xuICAgICAgICBnZXQoY29tcG9uZW50LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjb21wb25lbnQgfHwgdHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSBjb21wb25lbnRbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxhYmxlLmFwcGx5KGNvbXBvbmVudCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldChjb21wb25lbnQsIHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuZ2V0RGF0YShwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgW3Byb3AsIGFyZ3NdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5zZXQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBTdGltdWx1c0VsZW1lbnREcml2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRW1pdFZhbHVlO1xuICAgIH1cbiAgICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0Rpc3BhdGNoVmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFttb2RlbE5hbWUsIGlubmVyTW9kZWxOYW1lXSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbi5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgICAgIHNob3VsZFJlbmRlcixcbiAgICAgICAgZGVib3VuY2UsXG4gICAgICAgIHRhcmdldEV2ZW50TmFtZSxcbiAgICB9O1xufVxuXG5jbGFzcyBDaGlsZENvbXBvbmVudFBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHModGhpcy5jb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVxdWVzdDpzdGFydGVkJywgKHJlcXVlc3REYXRhKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQYXJlbnRNb2RlbENoYW5nZShtb2RlbCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgIHRhZzogY2hpbGQuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgbm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBwYXJlbnRDb21wb25lbnQgPSBmaW5kUGFyZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmVudE1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ2hpbGRyZW4odGhpcy5jb21wb25lbnQpO1xuICAgIH1cbn1cblxuY2xhc3MgTGF6eVBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCdsYXp5JyAhPT0gY29tcG9uZW50LmVsZW1lbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2xvYWRpbmcnKT8udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0T2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXZlOmFwcGVhcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICB9XG59XG5cbmNsYXNzIExvYWRpbmdQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIChlbGVtZW50LCByZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9hZGluZyhjb21wb25lbnQsIGVsZW1lbnQsIHJlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQsIGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudCwgY29tcG9uZW50LmVsZW1lbnQpO1xuICAgIH1cbiAgICBzdGFydExvYWRpbmcoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCB0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcoY29tcG9uZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGZhbHNlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpLmZvckVhY2goKHsgZWxlbWVudCwgZGlyZWN0aXZlcyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGZpbmFsQWN0aW9uID0gcGFyc2VMb2FkaW5nQWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGlzTG9hZGluZyk7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkQWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCB0YXJnZXRlZE1vZGVscyA9IFtdO1xuICAgICAgICBsZXQgZGVsYXkgPSAwO1xuICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWxheScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxheSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkgPz8gKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiB1c2VkIGluIGRhdGEtbG9hZGluZz1cIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNMb2FkaW5nICYmXG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgYmFja2VuZFJlcXVlc3QgJiZcbiAgICAgICAgICAgICFiYWNrZW5kUmVxdWVzdC5jb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJlxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgYmFja2VuZFJlcXVlc3QgJiZcbiAgICAgICAgICAgICFiYWNrZW5kUmVxdWVzdC5hcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsb2FkaW5nRGlyZWN0aXZlO1xuICAgICAgICBzd2l0Y2ggKGZpbmFsQWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgIH1cbiAgICBnZXRMb2FkaW5nRGlyZWN0aXZlcyhjb21wb25lbnQsIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgbGV0IG1hdGNoaW5nRWxlbWVudHMgPSBbLi4uQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxvYWRpbmddJykpXTtcbiAgICAgICAgbWF0Y2hpbmdFbGVtZW50cyA9IG1hdGNoaW5nRWxlbWVudHMuZmlsdGVyKChlbHQpID0+IGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsdCwgY29tcG9uZW50KSk7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgIG1hdGNoaW5nRWxlbWVudHMgPSBbZWxlbWVudCwgLi4ubWF0Y2hpbmdFbGVtZW50c107XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hpbmdFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEVsZW1lbnQgVHlwZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubG9hZGluZyB8fCAnc2hvdycpO1xuICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbG9hZGluZ0RpcmVjdGl2ZXM7XG4gICAgfVxuICAgIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3JldmVydCc7XG4gICAgfVxuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBwYXJzZUxvYWRpbmdBY3Rpb24gPSAoYWN0aW9uLCBpc0xvYWRpbmcpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdoaWRlJyA6ICdzaG93JztcbiAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xuICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyc7XG4gICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZEF0dHJpYnV0ZScgOiAncmVtb3ZlQXR0cmlidXRlJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdhZGRBdHRyaWJ1dGUnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7YWN0aW9ufVwiYCk7XG59O1xuXG5jbGFzcyBQYWdlVW5sb2FkaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6c3RhcnRlZCcsIChodG1sLCByZXNwb25zZSwgY29udHJvbHMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ0RpcmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xscy5wdXNoKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSk7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QWxsUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5wb2xscyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgICBpZiAoYWN0aW9uTmFtZSA9PT0gJyRyZW5kZXInKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oYWN0aW9uTmFtZSwge30sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5wdXNoKHRpbWVyKTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjb21wb25lbnQuZWxlbWVudDtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IgPSBuZXcgUG9sbGluZ0RpcmVjdG9yKGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLmFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLmNsZWFyUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWFsaXplUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5jbGVhclBvbGxpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhd1BvbGxDb25maWcgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd1BvbGxDb25maWcgfHwgJyRyZW5kZXInKTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IDIwMDA7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGF5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUVtcHR5KHZhbHVlKSB7XG4gICAgaWYgKG51bGwgPT09IHZhbHVlIHx8IHZhbHVlID09PSAnJyB8fCB1bmRlZmluZWQgPT09IHZhbHVlIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuICAgICAgICBpZiAoIWlzVmFsdWVFbXB0eSh2YWx1ZVtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgY29uc3QgYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMgPSAoZGF0YSwgZW50cmllcyA9IHt9LCBiYXNlS2V5ID0gJycpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2lLZXksIGlWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGJhc2VLZXkgPT09ICcnID8gaUtleSA6IGAke2Jhc2VLZXl9WyR7aUtleX1dYDtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gYmFzZUtleSAmJiBpc1ZhbHVlRW1wdHkoaVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGVudHJpZXNba2V5XSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobnVsbCAhPT0gaVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSB7IC4uLmVudHJpZXMsIC4uLmJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzKGlWYWx1ZSwgZW50cmllcywga2V5KSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc1trZXldID0gZW5jb2RlVVJJQ29tcG9uZW50KGlWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUyQy9nLCAnLCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH07XG4gICAgY29uc3QgZW50cmllcyA9IGJ1aWxkUXVlcnlTdHJpbmdFbnRyaWVzKGRhdGEpO1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhlbnRyaWVzKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHt2YWx1ZX1gKVxuICAgICAgICAuam9pbignJicpO1xufVxuZnVuY3Rpb24gZnJvbVF1ZXJ5U3RyaW5nKHNlYXJjaCkge1xuICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCc/JywgJycpO1xuICAgIGlmIChzZWFyY2ggPT09ICcnKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgaW5zZXJ0RG90Tm90YXRlZFZhbHVlSW50b0RhdGEgPSAoa2V5LCB2YWx1ZSwgZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBbZmlyc3QsIHNlY29uZCwgLi4ucmVzdF0gPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW2ZpcnN0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhW2ZpcnN0XSA9IE51bWJlci5pc05hTihOdW1iZXIucGFyc2VJbnQoc2Vjb25kKSkgPyB7fSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhKFtzZWNvbmQsIC4uLnJlc3RdLmpvaW4oJy4nKSwgdmFsdWUsIGRhdGFbZmlyc3RdKTtcbiAgICB9O1xuICAgIGNvbnN0IGVudHJpZXMgPSBzZWFyY2guc3BsaXQoJyYnKS5tYXAoKGkpID0+IGkuc3BsaXQoJz0nKSk7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGVudHJpZXMuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpO1xuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgnJyA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgZG90Tm90YXRlZEtleSA9IGtleS5yZXBsYWNlKC9cXFsvZywgJy4nKS5yZXBsYWNlKC9dL2csICcnKTtcbiAgICAgICAgICAgIGluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhKGRvdE5vdGF0ZWRLZXksIHZhbHVlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufVxuY2xhc3MgVXJsVXRpbHMgZXh0ZW5kcyBVUkwge1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKVtrZXldO1xuICAgIH1cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb21RdWVyeVN0cmluZyh0aGlzLnNlYXJjaCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHRvUXVlcnlTdHJpbmcoZGF0YSk7XG4gICAgfVxufVxuY2xhc3MgSGlzdG9yeVN0cmF0ZWd5IHtcbiAgICBzdGF0aWMgcmVwbGFjZSh1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeS5zdGF0ZSwgJycsIHVybCk7XG4gICAgfVxufVxuXG5jbGFzcyBRdWVyeVN0cmluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IobWFwcGluZykge1xuICAgICAgICB0aGlzLm1hcHBpbmcgPSBtYXBwaW5nO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxVdGlscyA9IG5ldyBVcmxVdGlscyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gdXJsVXRpbHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubWFwcGluZykuZm9yRWFjaCgoW3Byb3AsIG1hcHBpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQocHJvcCk7XG4gICAgICAgICAgICAgICAgdXJsVXRpbHMuc2V0KG1hcHBpbmcubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdXJsVXRpbHMudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlTdHJhdGVneS5yZXBsYWNlKHVybFV0aWxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kZWxdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmdldFVuc3luY2VkTW9kZWxzKCkuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiYgIWVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgVmFsaWRhdGVkRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCB2YWx1ZVN0b3JlKSB7XG4gICAgICAgIGlmICh2YWx1ZVN0b3JlLmhhcygndmFsaWRhdGVkRmllbGRzJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldCgndmFsaWRhdGVkRmllbGRzJyldO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVN0b3JlLnNldCgndmFsaWRhdGVkRmllbGRzJywgdmFsaWRhdGVkRmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuICAgICAgICBpZiAoIXBhcmFtcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gYWN0aW9uIG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1hY3Rpb24tcGFyYW1cIiBhdHRyaWJ1dGU/YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gcGFyYW1zLmFjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aW9uQXJncyA9IHsgLi4ucGFyYW1zIH07XG4gICAgICAgIGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZmlsZXMoa2V5LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGFjdGlvbkFyZ3MsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuICAgIH1cbiAgICBmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZmluZ2VycHJpbnQgPSB0aGlzLmZpbmdlcnByaW50VmFsdWU7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWV2ZW50LXBhcmFtXCIgYXR0cmlidXRlP2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IHBhcmFtcy5ldmVudDtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICAgICAgZGVsZXRlIGV2ZW50QXJncy5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGV2ZW50QXJncyxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IExhenlQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUXVlcnlTdHJpbmdQbHVnaW4odGhpcy5xdWVyeU1hcHBpbmdWYWx1ZSksXG4gICAgICAgICAgICBuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW4odGhpcy5jb21wb25lbnQpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmZpbGVzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJlxuICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdpZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICAgIGxpc3RlbmVyczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgICBldmVudHNUb0VtaXQ6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZXZlbnRzVG9EaXNwYXRjaDogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgICBkZWJvdW5jZTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICAgIGZpbmdlcnByaW50OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSxcbiAgICByZXF1ZXN0TWV0aG9kOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3Bvc3QnIH0sXG4gICAgcXVlcnlNYXBwaW5nOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDoge30gfSxcbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQuYmFja2VuZEZhY3RvcnkgPSAoY29udHJvbGxlcikgPT4gbmV3IEJhY2tlbmQoY29udHJvbGxlci51cmxWYWx1ZSwgY29udHJvbGxlci5yZXF1ZXN0TWV0aG9kVmFsdWUpO1xuXG5leHBvcnQgeyBDb21wb25lbnQsIExpdmVDb250cm9sbGVyRGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRDb21wb25lbnQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJDcm9wcGllIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfY2FsbFN1cGVyIiwiY29uY2F0IiwiX2RlZmluZVByb3BlcnR5IiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiX3RoaXMyIiwiY3JvcHBpZSIsImNyb3BwZXJUYXJnZXQiLCJlbmFibGVFeGlmIiwidmlld3BvcnQiLCJ3aWR0aCIsIndpZHRoVmFsdWUiLCJoZWlnaHQiLCJoZWlnaHRWYWx1ZSIsInR5cGUiLCJib3VuZGFyeSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3JvcEltYWdlV2l0aFRpbWVvdXQiLCJkaXNjb25uZWN0IiwiZGVzdHJveSIsImN1cnJlbnRGaWxlbmFtZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfdGhpczMiLCJmaWxlSW5wdXRUYXJnZXQiLCJkaXNhYmxlZCIsInNwaW5uZXIiLCJsYWJlbFRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiY3JvcEltYWdlQW5kQ2xlYXJUaW1lb3V0IiwiYWRkIiwiY3JvcEltYWdlIiwicmVhZEZpbGUiLCJldmVudCIsIl90aGlzNCIsImlucHV0IiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaW5pdENyb3BwZXIiLCJuYW1lIiwicmVhZEFzRGF0YVVSTCIsImltYWdlV3JhcHBlclRhcmdldCIsImNyb3BwZXJXcmFwcGVyVGFyZ2V0IiwiaW5pdENyb3BwZXJXaXRoVXJsIiwicmVzdWx0IiwiaW1hZ2VVcmwiLCJiaW5kIiwidXJsIiwidGhlbiIsIl90aGlzNSIsInNpemUiLCJmb3JtYXQiLCJjaXJjbGUiLCJxdWFsaXR5IiwiYmxvYiIsImFkZEJsb2JEYXRhVG9JbnB1dCIsImZpbGVuYW1lU3BsaXR0ZWQiLCJzcGxpdCIsIm15RmlsZSIsIkZpbGUiLCJqb2luIiwibGFzdE1vZGlmaWVkIiwiRGF0ZSIsImRhdGFUcmFuc2ZlciIsIkRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiTnVtYmVyIiwiZGVmYXVsdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9nZXRQcm90b3R5cGVPZiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJCb29sZWFuIiwidmFsdWVPZiIsIl9zZXRQcm90b3R5cGVPZiIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTW9kYWwiLCJUb29sdGlwIiwiX29wZW5Db21tb25Nb2RhbCIsIl9jYWxsZWUiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJtb2RhbE9wdGlvbnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWJtaXRUZXh0IiwiZGVjbGluZVRleHQiLCJpc0FqYXgiLCJpc0Zvcm1TdWJtaXQiLCJhc3NpZ24iLCJtb2RhbFRpdGxlVGFyZ2V0IiwiaW5uZXJIVE1MIiwibW9kYWxDb250ZW50VGFyZ2V0Iiwic3VibWl0VGV4dFRhcmdldCIsImRlY2xpbmVUZXh0VGFyZ2V0IiwidXJsVmFsdWUiLCJpc0FqYXhWYWx1ZSIsIm1ldGhvZFZhbHVlIiwiaXNGb3JtU3VibWl0VmFsdWUiLCJtb2RhbCIsIm1vZGFsVGFyZ2V0IiwiX2Fzc2lnblRvb2xUaXBzSW5Db21tb25Nb2RhbCIsInNob3ciLCJvcGVuQ29tbW9uTW9kYWwiLCJfeCIsIl94MiIsInN1Ym1pdENvbW1vbk1vZGFsIiwiX3N1Ym1pdENvbW1vbk1vZGFsV2l0aEZvcm0iLCJfc3VibWl0VXJsVmFsdWUiLCJfc3VibWl0VXJsVmFsdWUyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInRleHQiLCJqc29uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsIlR1cmJvIiwidmlzaXQiLCJocmVmIiwiX3gzIiwiX3g0IiwiX3g1IiwiX3N1Ym1pdENvbW1vbk1vZGFsV2l0aEZvcm0yIiwiX2NhbGxlZTMiLCJmb3JtIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhY3Rpb24iLCJib2R5IiwiRm9ybURhdGEiLCJvayIsImhhcyIsImdldCIsImhpZGUiLCJsb2FkQ29udGVudEZyb21VcmwiLCJtb2RhbEJvZHlUYXJnZXQiLCJfeDYiLCJ0b29sdGlwRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBsYWNlbWVudCIsImdldEF0dHJpYnV0ZSIsIl94NyIsIl9sb2FkQ29udGVudEZyb21VcmwiLCJfY2FsbGVlNCIsIl9hcmdzNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInVuZGVmaW5lZCIsImh0bWwiLCJfb3Blbk1vZGFsIiwidDAiLCJtb2RhbENvbW1vbk91dGxldCIsInQxIiwidDIiLCJ0aXRsZVZhbHVlIiwiZm9ybVVybFZhbHVlIiwidDMiLCJ0NCIsInQ1IiwidDYiLCJzdWJtaXRUZXh0VmFsdWUiLCJ0NyIsImRlY2xpbmVUZXh0VmFsdWUiLCJ0OCIsIm9wZW5Nb2RhbCIsImZvcm1VcmwiLCJfYXJnczIiLCJ1cGRhdGVMYWJlbHMiLCJhZGp1c3QiLCJzdGFydFZhbHVlIiwicGFyc2VJbnQiLCJzdGFydFRhcmdldCIsImVuZFZhbHVlIiwiZW5kVGFyZ2V0IiwicmFuZ2UiLCJyYW5nZVRhcmdldCIsIm1heGltdW0iLCJtYXhpbXVtVGFyZ2V0Iiwic3RhcnRNaW51dGUiLCJNYXRoIiwiZmxvb3IiLCJzdGFydFNlY29uZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJlbmRNaW51dGUiLCJlbmRTZWNvbmQiLCJzdGFydExhYmVsVGFyZ2V0IiwidGV4dENvbnRlbnQiLCJlbmRMYWJlbFRhcmdldCIsImN1cnJlbnRMYWJlbFRhcmdldCIsImJvb3RzdHJhcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIlRvbVNlbGVjdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsIlN1cHByZXNzZWRFcnJvciIsInN1cHByZXNzZWQiLCJtZXNzYWdlIiwiX2RlZmF1bHRfMV9pbnN0YW5jZXMiLCJfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZyIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlIiwiX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzIiwiX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSIsIl9kZWZhdWx0XzFfc3RyaXBUYWdzIiwiX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMiLCJfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCIsImRlZmF1bHRfMSIsImlzT2JzZXJ2aW5nIiwiaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkiLCJvcmlnaW5hbE9wdGlvbnMiLCJpbml0aWFsaXplIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvbk11dGF0aW9ucyIsInNlbGVjdEVsZW1lbnQiLCJjcmVhdGVPcHRpb25zRGF0YVN0cnVjdHVyZSIsImluaXRpYWxpemVUb21TZWxlY3QiLCJzZXRBdHRyaWJ1dGUiLCJ0b21TZWxlY3QiLCJoYXNNaW5DaGFyYWN0ZXJzVmFsdWUiLCJtaW5DaGFyYWN0ZXJzVmFsdWUiLCJvcHRpb25zQXNIdG1sVmFsdWUiLCJzdGFydE11dGF0aW9uT2JzZXJ2ZXIiLCJzdG9wTXV0YXRpb25PYnNlcnZlciIsImN1cnJlbnRTZWxlY3RlZFZhbHVlcyIsIm11bHRpcGxlIiwiZnJvbSIsImZpbHRlciIsIm9wdGlvbiIsInNlbGVjdGVkIiwibWFwIiwiaW5jbHVkZXMiLCJnZXRNYXhPcHRpb25zIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZGlzcGF0Y2hFdmVudCIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsImhhc1ByZWxvYWRWYWx1ZSIsInByZWxvYWRWYWx1ZSIsInJlc2V0VG9tU2VsZWN0IiwiY3VycmVudEh0bWwiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiY2hhbmdlVG9tU2VsZWN0RGlzYWJsZWRTdGF0ZSIsImlzRGlzYWJsZWQiLCJkaXNhYmxlIiwiZW5hYmxlIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVzIiwiY2hhcmFjdGVyRGF0YSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiY2hhbmdlRGlzYWJsZWRTdGF0ZSIsInJlcXVpcmVSZXNldCIsIm11dGF0aW9uIiwiYXR0cmlidXRlTmFtZSIsImlzTm93TXVsdGlwbGUiLCJoYXNBdHRyaWJ1dGUiLCJ3YXNNdWx0aXBsZSIsIm9sZFZhbHVlIiwibmV3T3B0aW9ucyIsImFyZU9wdGlvbnNFcXVpdmFsZW50IiwiZm9ybUVsZW1lbnQiLCJmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucyIsImZpbHRlcmVkTmV3T3B0aW9ucyIsIm9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24iLCJmaW5kIiwibmV3UGxhY2Vob2xkZXJPcHRpb24iLCJub3JtYWxpemVPcHRpb24iLCJvcmlnaW5hbE9wdGlvbnNTZXQiLCJTZXQiLCJuZXdPcHRpb25zU2V0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZXZlcnkiLCJXZWFrU2V0IiwicGx1Z2lucyIsImlzTXVsdGlwbGUiLCJjbGVhcl9idXR0b24iLCJyZW1vdmVfYnV0dG9uIiwidmlydHVhbF9zY3JvbGwiLCJyZW5kZXIiLCJub19yZXN1bHRzIiwibm9SZXN1bHRzRm91bmRUZXh0VmFsdWUiLCJvcHRpb25fY3JlYXRlIiwiZGF0YSIsImVzY2FwZURhdGEiLCJjcmVhdGVPcHRpb25UZXh0VmFsdWUiLCJyZXBsYWNlIiwiY29uZmlnIiwib25JdGVtQWRkIiwic2V0VGV4dGJveFZhbHVlIiwiY2xvc2VBZnRlclNlbGVjdCIsIm9uT3B0aW9uQWRkIiwicGFyZW50RWxlbWVudCIsIm9wdGdyb3VwRGF0YSIsIm9wdGdyb3VwIiwic2V0dGluZ3MiLCJvcHRncm91cEZpZWxkIiwib3B0Z3JvdXBzIiwib3B0Z3JvdXBFbGVtZW50IiwibGFiZWwiLCJvcHRpb25FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibGFiZWxGaWVsZCIsIm9wdGlvbk9yZGVyIiwiJG9yZGVyIiwib3JkZXJlZE9wdGlvbiIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwidG9tU2VsZWN0T3B0aW9uIiwidmFsdWVGaWVsZCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImFwcGVuZCIsInByZXBlbmQiLCJzaG91bGRMb2FkIiwidG9tU2VsZWN0T3B0aW9uc1ZhbHVlIiwibWF4T3B0aW9ucyIsIl9jb21tb25Db25maWckbGFiZWxGaSIsImNvbW1vbkNvbmZpZyIsInNjb3JlIiwic2VhcmNoIiwic2NvcmluZ0Z1bmN0aW9uIiwiZ2V0U2NvcmVGdW5jdGlvbiIsIml0ZW0iLCJfb2JqZWN0U3ByZWFkIiwiYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwiLCJtaW5DaGFyYWN0ZXJMZW5ndGgiLCJfY29tbW9uQ29uZmlnJGxhYmVsRmkyIiwiX3RoaXM3IiwiZmlyc3RVcmwiLCJxdWVyeSIsInNlcGFyYXRvciIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWQiLCJjYWxsYmFjayIsIl90aGlzNiIsImdldFVybCIsInNldE5leHRVcmwiLCJuZXh0X3BhZ2UiLCJyZXN1bHRzIiwibG9hZGluZ19tb3JlIiwibG9hZGluZ01vcmVUZXh0VmFsdWUiLCJub19tb3JlX3Jlc3VsdHMiLCJub01vcmVSZXN1bHRzVGV4dFZhbHVlIiwicHJlbG9hZCIsInN0cmluZyIsIm9iamVjdDEiLCJvYmplY3QyIiwicHJlQ29ubmVjdFBheWxvYWQiLCJjb25uZWN0UGF5bG9hZCIsIm9wdGlvbnNBc0h0bWwiLCJsb2FkaW5nTW9yZVRleHQiLCJub1Jlc3VsdHNGb3VuZFRleHQiLCJub01vcmVSZXN1bHRzVGV4dCIsImNyZWF0ZU9wdGlvblRleHQiLCJtaW5DaGFyYWN0ZXJzIiwidG9tU2VsZWN0T3B0aW9ucyIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRlc3QiLCJpc0FycmF5IiwiQmFja2VuZFJlcXVlc3QiLCJwcm9taXNlIiwiYWN0aW9ucyIsInVwZGF0ZU1vZGVscyIsImlzUmVzb2x2ZWQiLCJ1cGRhdGVkTW9kZWxzIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwidGFyZ2V0ZWRNb2RlbHMiLCJtb2RlbCIsIlJlcXVlc3RCdWlsZGVyIiwiYnVpbGRSZXF1ZXN0IiwicHJvcHMiLCJ1cGRhdGVkIiwiY2hpbGRyZW4iLCJ1cGRhdGVkUHJvcHNGcm9tUGFyZW50Iiwic3BsaXRVcmwiLCJfc3BsaXRVcmwiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJ0b3RhbEZpbGVzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50IiwiaGFzRmluZ2VycHJpbnRzIiwid2lsbERhdGFGaXRJblVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXQiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImZvcm1EYXRhIiwicGFyYW1zU3RyaW5nIiwicHJvcHNKc29uIiwidXBkYXRlZEpzb24iLCJjaGlsZHJlbkpzb24iLCJwcm9wc0Zyb21QYXJlbnRKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiQmFja2VuZCIsInJlcXVlc3RCdWlsZGVyIiwibWFrZVJlcXVlc3QiLCJfdGhpcyRyZXF1ZXN0QnVpbGRlciQiLCJiYWNrZW5kQWN0aW9uIiwiQmFja2VuZFJlc3BvbnNlIiwiX2dldEJvZHkiLCJnZXRCb2R5IiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsIm91dGVySFRNTCIsImluZGV4T2YiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJXZWFrTWFwIiwiY29tcG9uZW50TWFwQnlDb21wb25lbnQiLCJNYXAiLCJyZWdpc3RlckNvbXBvbmVudCIsImNvbXBvbmVudCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJyZWplY3QiLCJjb3VudCIsIm1heENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaW5kQ29tcG9uZW50cyIsImN1cnJlbnRDb21wb25lbnQiLCJvbmx5UGFyZW50cyIsIm9ubHlNYXRjaE5hbWUiLCJjb21wb25lbnRzIiwiY29tcG9uZW50TmFtZSIsImNvbnRhaW5zIiwiZmluZENoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsImluZGV4Iiwic3BsaWNlIiwidHJpZ2dlckhvb2siLCJDaGFuZ2luZ0l0ZW1zVHJhY2tlciIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsInNldEl0ZW0iLCJpdGVtTmFtZSIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZWRSZWNvcmQiLCJvcmlnaW5hbCIsIm9yaWdpbmFsUmVjb3JkIiwicmVtb3ZlSXRlbSIsInRydWVPcmlnaW5hbFZhbHVlIiwiZ2V0Q2hhbmdlZEl0ZW1zIiwiX3JlZiIsIl9yZWYyIiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsIkVsZW1lbnRDaGFuZ2VzIiwiYWRkZWRDbGFzc2VzIiwicmVtb3ZlZENsYXNzZXMiLCJzdHlsZUNoYW5nZXMiLCJhdHRyaWJ1dGVDaGFuZ2VzIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsImFkZFN0eWxlIiwic3R5bGVOYW1lIiwib3JpZ2luYWxWYWx1ZSIsInJlbW92ZVN0eWxlIiwiYWRkQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0QWRkZWRDbGFzc2VzIiwiZ2V0UmVtb3ZlZENsYXNzZXMiLCJnZXRDaGFuZ2VkU3R5bGVzIiwiZ2V0UmVtb3ZlZFN0eWxlcyIsImdldENoYW5nZWRBdHRyaWJ1dGVzIiwiZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMiLCJhcHBseVRvRWxlbWVudCIsIl9lbGVtZW50JGNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJjaGFuZ2UiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJzdGFydCIsImdldENoYW5nZWRFbGVtZW50IiwiZ2V0QWRkZWRFbGVtZW50cyIsIndhc0VsZW1lbnRBZGRlZCIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsImlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbiIsImlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiYWRkZWRFbGVtZW50IiwiZXJyIiwiaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24iLCJoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbiIsImFkZGVkTm9kZXMiLCJub2RlIiwiRWxlbWVudCIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJlbGVtZW50Q2hhbmdlcyIsInByZXZpb3VzVmFsdWVzIiwibWF0Y2giLCJuZXdWYWx1ZXMiLCJhZGRlZFZhbHVlcyIsInJlbW92ZWRWYWx1ZXMiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJzdHlsZXMiLCJzdHlsZU9iamVjdCIsInBhcnRzIiwicHJvcGVydHkiLCJ0cmltIiwidGFnTmFtZSIsInBhcnNlRGlyZWN0aXZlcyIsImRpcmVjdGl2ZXMiLCJjdXJyZW50QWN0aW9uTmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJnZXRMYXN0QWN0aW9uTmFtZSIsInB1c2hJbnN0cnVjdGlvbiIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsInB1c2hNb2RpZmllciIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJmaW5hbFBhcnRzIiwicGFydCIsInRyaW1BbGwiLCJzdHIiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIm1vZGVsTmFtZURhdGEiLCJnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50IiwibW9kZWxWYWx1ZSIsImdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJkYXRhc2V0Iiwic2V0VmFsdWVPbkVsZW1lbnQiLCJzb21lIiwidmFsIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyIsImRpcmVjdGl2ZSIsInRocm93T25NaXNzaW5nIiwiZGF0YU1vZGVsRGlyZWN0aXZlcyIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb3Nlc3RMaXZlQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJ0ZW1wbGF0ZSIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsIklkaW9tb3JwaCIsIkVNUFRZX1NFVCIsImRlZmF1bHRzIiwibW9ycGhTdHlsZSIsImNhbGxiYWNrcyIsImJlZm9yZU5vZGVBZGRlZCIsIm5vT3AiLCJhZnRlck5vZGVBZGRlZCIsImJlZm9yZU5vZGVNb3JwaGVkIiwiYWZ0ZXJOb2RlTW9ycGhlZCIsImJlZm9yZU5vZGVSZW1vdmVkIiwiYWZ0ZXJOb2RlUmVtb3ZlZCIsImJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQiLCJoZWFkIiwic2hvdWxkUHJlc2VydmUiLCJlbHQiLCJzaG91bGRSZUFwcGVuZCIsInNob3VsZFJlbW92ZSIsImFmdGVySGVhZE1vcnBoZWQiLCJtb3JwaCIsIm9sZE5vZGUiLCJuZXdDb250ZW50IiwiRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJzZUNvbnRlbnQiLCJub3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZUNvbnRlbnQiLCJjdHgiLCJjcmVhdGVNb3JwaENvbnRleHQiLCJtb3JwaE5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplZE5ld0NvbnRlbnQiLCJibG9jayIsIm9sZEhlYWQiLCJuZXdIZWFkIiwicHJvbWlzZXMiLCJoYW5kbGVIZWFkRWxlbWVudCIsImFsbCIsImlnbm9yZSIsIm1vcnBoQ2hpbGRyZW4iLCJiZXN0TWF0Y2giLCJmaW5kQmVzdE5vZGVNYXRjaCIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwibW9ycGhlZE5vZGUiLCJtb3JwaE9sZE5vZGVUbyIsImluc2VydFNpYmxpbmdzIiwiaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQiLCJwb3NzaWJsZUFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmVWYWx1ZSIsImFjdGl2ZUVsZW1lbnQiLCJpZ25vcmVBY3RpdmUiLCJpc1NvZnRNYXRjaCIsInJlcGxhY2VDaGlsZCIsIkhUTUxIZWFkRWxlbWVudCIsInN5bmNOb2RlRnJvbSIsIm5ld1BhcmVudCIsIm9sZFBhcmVudCIsIm5leHROZXdDaGlsZCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRpb25Qb2ludCIsIm5ld0NoaWxkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbiIsImlzSWRTZXRNYXRjaCIsImlkU2V0TWF0Y2giLCJmaW5kSWRTZXRNYXRjaCIsInJlbW92ZU5vZGVzQmV0d2VlbiIsInNvZnRNYXRjaCIsImZpbmRTb2Z0TWF0Y2giLCJpbnNlcnRCZWZvcmUiLCJ0ZW1wTm9kZSIsInJlbW92ZU5vZGUiLCJpZ25vcmVBdHRyaWJ1dGUiLCJhdHRyIiwidG8iLCJ1cGRhdGVUeXBlIiwibm9kZVR5cGUiLCJmcm9tQXR0cmlidXRlcyIsInRvQXR0cmlidXRlcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJmcm9tQXR0cmlidXRlIiwidG9BdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzeW5jSW5wdXRWYWx1ZSIsInN5bmNCb29sZWFuQXR0cmlidXRlIiwiaWdub3JlVXBkYXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsIkhUTUxPcHRpb25FbGVtZW50IiwiSFRNTFRleHRBcmVhRWxlbWVudCIsIm5ld0hlYWRUYWciLCJjdXJyZW50SGVhZCIsImFkZGVkIiwicmVtb3ZlZCIsInByZXNlcnZlZCIsIm5vZGVzVG9BcHBlbmQiLCJoZWFkTWVyZ2VTdHlsZSIsInNyY1RvTmV3SGVhZE5vZGVzIiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsIm5ld0hlYWRDaGlsZCIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJjdXJyZW50SGVhZEVsdCIsImluTmV3Q29udGVudCIsImlzUmVBcHBlbmRlZCIsImlzUHJlc2VydmVkIiwiX2xvb3AiLCJuZXdOb2RlIiwiX25vZGVzVG9BcHBlbmQiLCJfaTIiLCJuZXdFbHQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsInNyYyIsIl9yZXNvbHZlIiwiX2kzIiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsImlkIiwiZ2V0SWRJbnRlcnNlY3Rpb25Db3VudCIsInN0YXJ0SW5jbHVzaXZlIiwiZW5kRXhjbHVzaXZlIiwibmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50IiwicG90ZW50aWFsTWF0Y2giLCJvdGhlck1hdGNoQ291bnQiLCJwb3RlbnRpYWxTb2Z0TWF0Y2giLCJzaWJsaW5nU29mdE1hdGNoQ291bnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJjb250ZW50V2l0aFN2Z3NSZW1vdmVkIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2VuZXJhdGVkQnlJZGlvbW9ycGgiLCJodG1sRWxlbWVudCIsInJlc3BvbnNlRG9jIiwiZHVtbXlQYXJlbnQiLCJOb2RlIiwiX2k0IiwiX2FyciIsInN0YWNrIiwiY3VycmVudEVsZW1lbnQiLCJiZXN0RWxlbWVudCIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I3IiwiX3N0ZXA3IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJvbGRDb250ZW50Iiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJpc0ZpbGVJbnB1dCIsInN5bmNBdHRyaWJ1dGVzIiwiZnJvbUVsIiwidG9FbCIsImV4ZWN1dGVNb3JwaGRvbSIsInJvb3RGcm9tRWxlbWVudCIsInJvb3RUb0VsZW1lbnQiLCJtb2RpZmllZEZpZWxkRWxlbWVudHMiLCJnZXRFbGVtZW50VmFsdWUiLCJleHRlcm5hbE11dGF0aW9uVHJhY2tlciIsIm9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyIiwib3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUiLCJtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAiLCJyZXBsYWNlV2l0aENsb25lIiwib2xkRWxlbWVudCIsImNsb25lZE9sZEVsZW1lbnQiLCJyZXBsYWNlV2l0aCIsIl9mcm9tRWwkcGFyZW50RWxlbWVudCIsImNsb25lZEZyb21FbCIsIl9feCIsIkFscGluZSIsIm5vZGVOYW1lIiwidG9VcHBlckNhc2UiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIm9yaWdpbmFsRWxlbWVudCIsIlVuc3luY2VkSW5wdXRzVHJhY2tlciIsIm1vZGVsRWxlbWVudFJlc29sdmVyIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiaGFuZGxlSW5wdXRFdmVudCIsInVuc3luY2VkSW5wdXRzIiwiVW5zeW5jZWRJbnB1dENvbnRhaW5lciIsImFjdGl2YXRlIiwiX3JlZjMiLCJkZWFjdGl2YXRlIiwiX3JlZjQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFya01vZGVsQXNTeW5jZWQiLCJtb2RlbE5hbWUiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50IiwiZ2V0TW9kZWxOYW1lIiwiZ2V0VW5zeW5jZWRJbnB1dHMiLCJhbGxVbnN5bmNlZElucHV0cyIsImdldFVuc3luY2VkTW9kZWxzIiwiZ2V0VW5zeW5jZWRNb2RlbE5hbWVzIiwicmVzZXRVbnN5bmNlZEZpZWxkcyIsInVuc3luY2VkTm9uTW9kZWxGaWVsZHMiLCJ1bnN5bmNlZE1vZGVsTmFtZXMiLCJ1bnN5bmNlZE1vZGVsRmllbGRzIiwiZ2V0RGVlcERhdGEiLCJwcm9wZXJ0eVBhdGgiLCJfcGFyc2VEZWVwRGF0YSIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJwYXJzZSIsIlZhbHVlU3RvcmUiLCJkaXJ0eVByb3BzIiwicGVuZGluZ1Byb3BzIiwibm9ybWFsaXplZE5hbWUiLCJnZXRPcmlnaW5hbFByb3BzIiwiZ2V0RGlydHlQcm9wcyIsImdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmciLCJyZWluaXRpYWxpemVBbGxQcm9wcyIsInB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSIsInN0b3JlTmV3UHJvcHNGcm9tUGFyZW50IiwiY2hhbmdlZCIsIl9pNSIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJmaW5nZXJwcmludCIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX3RoaXM3JGxpc3RlbmVycyRnZXQiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsIm9uIiwib2ZmIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJlbWl0Iiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJlbWl0VXAiLCJlbWl0U2VsZiIsImRvRW1pdCIsIm1hdGNoaW5nTmFtZSIsIl90aGlzOCIsImlzVHVyYm9FbmFibGVkIiwicGVyZm9ybVJlcXVlc3QiLCJfdGhpczkiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJfaTYiLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInJlcXVlc3RDb25maWciLCJfcmVmNSIsIl9oZWFkZXJzJGdldCIsImJhY2tlbmRSZXNwb25zZSIsIl9pNyIsIl9PYmplY3QkdmFsdWVzIiwiY29udHJvbHMiLCJkaXNwbGF5RXJyb3IiLCJyZW5kZXJFcnJvciIsInByb2Nlc3NSZXJlbmRlciIsIl90aGlzMTAiLCJzaG91bGRSZW5kZXIiLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsIm5ld1Byb3BzIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiX3JlZjYiLCJfcmVmNyIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNhbGN1bGF0ZURlYm91bmNlIiwiX3RoaXMxMSIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImZvY3VzIiwiX3RoaXMxMiIsIl91cGRhdGVGcm9tUGFyZW50UHJvcHMiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJfbGVuMiIsIl9rZXkyIiwiU3RpbXVsdXNFbGVtZW50RHJpdmVyIiwiY29udHJvbGxlciIsIm1vZGVsRGlyZWN0aXZlIiwicHJvcHNWYWx1ZSIsImV2ZW50c1RvRW1pdFZhbHVlIiwiZXZlbnRzVG9EaXNwYXRjaFZhbHVlIiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwibW9kaWZpZXIiLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8iLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8yIiwiaW5uZXJNb2RlbE5hbWUiLCJDaGlsZENvbXBvbmVudFBsdWdpbiIsInBhcmVudE1vZGVsQmluZGluZ3MiLCJtb2RlbERpcmVjdGl2ZXMiLCJfdGhpczEzIiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJub3RpZnlQYXJlbnRNb2RlbENoYW5nZSIsImZpbmdlcnByaW50cyIsImdldENoaWxkcmVuIiwidGFnIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRDb21wb25lbnQiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsIkxhenlQbHVnaW4iLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMTQiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMTQkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiTG9hZGluZ1BsdWdpbiIsIl90aGlzMTUiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNiIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmOCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE3IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwiX3ZhbGlkTW9kaWZpZXJzJGdldCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJtYXRjaGluZ0VsZW1lbnRzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0MyIsIl9lbGVtZW50JGNsYXNzTGlzdDQiLCJhdHRyaWJ1dGUiLCJQYWdlVW5sb2FkaW5nUGx1Z2luIiwiaXNDb25uZWN0ZWQiLCJfdGhpczE4IiwiUG9sbGluZ0RpcmVjdG9yIiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFkZFBvbGwiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsInN0YXJ0QWxsUG9sbGluZyIsIl90aGlzMTkiLCJfcmVmOSIsInN0b3BBbGxQb2xsaW5nIiwiY2xlYXJQb2xsaW5nIiwiX3RoaXMyMCIsInRpbWVyIiwiUG9sbGluZ1BsdWdpbiIsIl90aGlzMjEiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMjIiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJpc1ZhbHVlRW1wdHkiLCJfaTgiLCJfT2JqZWN0JGtleXMiLCJ0b1F1ZXJ5U3RyaW5nIiwiYnVpbGRRdWVyeVN0cmluZ0VudHJpZXMiLCJiYXNlS2V5IiwiX3JlZjEwIiwiX3JlZjExIiwiaUtleSIsImlWYWx1ZSIsIl9yZWYxMiIsIl9yZWYxMyIsImZyb21RdWVyeVN0cmluZyIsImluc2VydERvdE5vdGF0ZWRWYWx1ZUludG9EYXRhIiwiX2tleSRzcGxpdCIsIl9rZXkkc3BsaXQyIiwiX3RvQXJyYXkiLCJmaXJzdCIsInNlY29uZCIsInJlc3QiLCJfcmVmMTQiLCJfcmVmMTUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkb3ROb3RhdGVkS2V5IiwiVXJsVXRpbHMiLCJfVVJMIiwic2V0RGF0YSIsIl93cmFwTmF0aXZlU3VwZXIiLCJVUkwiLCJIaXN0b3J5U3RyYXRlZ3kiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiUXVlcnlTdHJpbmdQbHVnaW4iLCJtYXBwaW5nIiwiX3RoaXMyMyIsInVybFV0aWxzIiwiY3VycmVudFVybCIsIl9yZWYxNiIsIl9yZWYxNyIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyNCIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luIiwiX3RoaXMyNSIsImhhbmRsZU1vZGVsU2V0IiwidmFsaWRhdGVkRmllbGRzIiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiX3RoaXMyNiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI3IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k5IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyOCIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjE4IiwibmFtZU1hdGNoIiwiX3RoaXMyOSIsIl9yZWYxOSIsIl90aGlzMzAiLCJfcmVmMjAiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczMxIiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicXVlcnlNYXBwaW5nVmFsdWUiLCJfdGhpczMyIiwiX3JlZjIxIiwiX3RoaXMzMyIsIl9yZWYyMiIsImV2ZW50TmFtZSIsIl9lbGVtZW50JGZpbGVzIiwiZmluYWxWYWx1ZSIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJfdGhpczM0IiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImV2ZW50c1RvRGlzcGF0Y2giLCJyZXF1ZXN0TWV0aG9kIiwicXVlcnlNYXBwaW5nIiwicmVxdWVzdE1ldGhvZFZhbHVlIiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=