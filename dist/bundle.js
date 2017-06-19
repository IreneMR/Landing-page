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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  min-height: 500px;\n  max-width: 100%;\n  font-family: 'ProximaNova', Helvetica, Arial, sans-serif; }\n\nh3 {\n  padding: 0;\n  margin: 0; }\n\n.display_none {\n  display: none; }\n\n.landing__navbar {\n  min-height: 40px;\n  max-width: 100%;\n  background-color: transparent;\n  transition: background 500ms; }\n\n.fixed {\n  background-color: #000;\n  opacity: 1; }\n\n.landing__button--registrer {\n  height: 40px;\n  width: 129px;\n  border: 2px solid #FFF;\n  border-radius: 3px;\n  background-color: #000;\n  color: #FFF;\n  line-height: 17px;\n  text-align: center;\n  opacity: 1; }\n  .landing__button--registrer:hover {\n    color: #FFF; }\n\n.landing__first--container,\n.landing__section--services,\n.landing__section--badges {\n  height: calc(90% - 50px); }\n\n.landing__first--container {\n  min-height: 500px;\n  background-size: cover;\n  background-image: url(\"http://wallpapercave.com/wp/ItmVuT6.jpg\");\n  transition: background 500ms; }\n\n.landing__first--container__text {\n  font-size: 43px; }\n\n.landing__first--container__box {\n  padding-top: 150px;\n  color: #DDD; }\n\n.landing__header--text__icons {\n  display: inline-block; }\n\n.tab-content {\n  color: #DDD; }\n\n.nav-tabs img {\n  display: none; }\n\n.landing__input--icon {\n  padding-top: 25px; }\n\n.landing__input--icons__arrows {\n  background-color: #545250;\n  height: 35px;\n  width: 50px;\n  border: none;\n  border-radius: 3px; }\n\n.landing__button--quote {\n  height: 35px;\n  width: 129px;\n  border: 2px solid #FFF;\n  border-radius: 3px;\n  background-color: #000;\n  color: #FFF;\n  line-height: 17px;\n  text-align: center;\n  opacity: 1; }\n  .landing__button--quote:hover {\n    color: #FFF; }\n\n.landing__input {\n  background-color: #FFF;\n  background-position: 0 -30px;\n  padding: 3px;\n  padding-left: 20px; }\n\n.tab-pane {\n  padding-top: 10px; }\n\n.landing__section--services {\n  padding-top: 30px; }\n\n.landing__box {\n  height: 375px;\n  padding: 20px; }\n\n.landing__box .caption h3 {\n  height: 52px;\n  margin-bottom: 10px; }\n\n.landing__button--details {\n  height: 40px;\n  width: 129px;\n  border: 2px solid #000;\n  border-radius: 3px;\n  color: #000;\n  font-weight: bold;\n  text-align: center; }\n  .landing__button--details:hover {\n    color: #FFF;\n    background-color: #000; }\n\n.landing__button--char {\n  margin-bottom: 10px;\n  font-size: 0.9em; }\n\n.landing__box--icon {\n  text-align: center; }\n\n.landing__icon {\n  width: 80px; }\n\n.landing__pill--container {\n  padding: 0 3.44%; }\n\n.landing__box--badges {\n  text-align: center;\n  max-width: 686px;\n  margin: 0 auto 40px; }\n\n.landing__open--box__container {\n  width: 282px;\n  margin: 0 auto; }\n\n.landing__pill--box {\n  display: inline-block; }\n\n.landing__button--text {\n  position: relative;\n  outline: 0 !important; }\n\n.landing__button--text.active::after {\n  content: '';\n  position: absolute;\n  transform: translateX(-50%);\n  left: 50%;\n  bottom: -8px;\n  width: 0;\n  height: 0;\n  border-top: 8px solid #DDD;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent; }\n\n.landing__pill--text {\n  text-align: center;\n  height: 30px;\n  padding-top: 10px;\n  margin-bottom: 40px; }\n\n.landing__section--line-icons {\n  padding-bottom: 50px; }\n\n.landing__progress--icon {\n  width: 100px;\n  margin-bottom: 30px; }\n\n.landing__progress--arrow {\n  margin-top: 40px; }\n\n#sub-footer {\n  border-top: 1px solid #979797;\n  padding-top: 30px; }\n\n#sub-footer ul {\n  padding-left: 0;\n  list-style-type: none; }\n\n#sub-footer li a {\n  color: #777777;\n  text-decoration: none; }\n\n#sub-footer li a.landing__list--title {\n  color: #2CA1E9;\n  text-transform: uppercase;\n  line-height: 2em; }\n\n.landing__footer {\n  background-color: #E5E5E5;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 30px; }\n\n.landing__footer--icon {\n  height: 50px;\n  margin: 30px; }\n\n.landing__footer--shape {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.landing__footer--rectangle {\n  width: 282px;\n  height: 160px;\n  background-color: #F1F1F1;\n  display: inline-block; }\n\n.landing__footer--triangle {\n  width: 0;\n  height: 0;\n  border-top: 80px solid transparent;\n  border-left: 36px solid #F1F1F1;\n  border-bottom: 80px solid transparent;\n  display: inline-block; }\n\n.landing__footer--copy {\n  height: 60px;\n  padding-top: 20px; }\n\n.landing__footer--text {\n  font-size: 12px; }\n\n/*#sub-footer {\r\n  border-top: 1px solid #979797;\r\n  padding-top: 30px;\r\n  ul{\r\n    padding-left: 0;\r\n    list-style-type: none;\r\n    li a {\r\n      color: #777777;\r\n      text-decoration: none;\r\n      &.landing__list--title {\r\n        color: #2CA1E9;\r\n        text-transform: uppercase;\r\n        line-height: 2em;\r\n      }\r\n    }\r\n  }\r\n}*/\n@media (min-width: 768px) {\n  .navbar-nav > li > a {\n    padding-top: 10px !important; }\n  .nav-tabs img {\n    display: inline-block; }\n  .landing__icon {\n    width: 60px; }\n  .landing__box {\n    height: 300px; }\n  .landing__box .caption h3 {\n    height: auto; }\n  .landing__button--char {\n    font-size: 1em; } }\n\n@media (min-width: 1170px) {\n  .landing__icon {\n    width: 65px; }\n  .landing__box {\n    height: 335px; }\n  .landing__footer {\n    align-items: center;\n    justify-content: flex-end;\n    height: 160px; }\n  .landing__footer--shape {\n    display: block; }\n  .landing__footer--icon {\n    margin: 0;\n    padding-right: 40px; } }\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_index_scss__);
// CALL API http://swapi.co/


var url = "http://swapi.co/api/people/?format=json";
var urlPlanets = "http://swapi.co/api/planets/?format=json";

var characters = [];
var planets = [];

// GET CHARACTERS
function getcharacters(page){
    console.log(characters);
    $('.caption').each(function(){
        var $this = $(this);
        var $charNumber = $this.data('character');
        $this.find(".name").html(characters.results[$charNumber].name);
        $this.find(".gender").html(characters.results[$charNumber].gender);
        $this.find(".birth").html(characters.results[$charNumber].birth_year);
        $this.find(".hair").html(characters.results[$charNumber].hair_color);
        $this.find(".eyes").html(characters.results[$charNumber].eye_color);
    });
};

$.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(data) {
        characters = data;
        getcharacters();
        
    },
    error: function(){
        console.log('error');
    }
});

// NAVBAR ANIMATION

$(window).scroll(function(){
  if($(window).scrollTop() > 5){
    $('.navbar').addClass('fixed');
  }else{ 
    $('.navbar').removeClass('fixed');
  }
});



$(function(){

    // BUTTONS ANIMATION FADE-IN
    $(".landing__button--char").click(function(){
        $(".button__text").fadeOut("slow");
        $(this).siblings(".button__text").fadeIn("slow");
    });

    // BUTTON PILLS SHOW TEXT
    $(".landing__button--text").click(function(){
        var $this     = $(this);
        var $pillText = $this.data('text');
        $(".landing__button--text").removeClass('active');
        $this.addClass('active');
        $('.landing__pill--text').html($pillText);
    });
});


/***/ })
/******/ ]);