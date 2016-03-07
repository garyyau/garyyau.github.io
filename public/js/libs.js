require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * MUI config module
 * @module config
 */

/** Define module API */
module.exports = {
  /** Use debug mode */
  debug: true
};

},{}],2:[function(require,module,exports){
/**
 * MUI CSS/JS jqLite module
 * @module lib/jqLite
 */

'use strict';


/**
 * Add a class to an element.
 * @param {Element} element - The DOM element.
 * @param {string} cssClasses - Space separated list of class names.
 */
function jqLiteAddClass(element, cssClasses) {
  if (!cssClasses || !element.setAttribute) return;

  var existingClasses = _getExistingClasses(element),
      splitClasses = cssClasses.split(' '),
      cssClass;

  for (var i=0; i < splitClasses.length; i++) {
    cssClass = splitClasses[i].trim();
    if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
      existingClasses += cssClass + ' ';
    }
  }
  
  element.setAttribute('class', existingClasses.trim());
}


/**
 * Get or set CSS properties.
 * @param {Element} element - The DOM element.
 * @param {string} [name] - The property name.
 * @param {string} [value] - The property value.
 */
function jqLiteCss(element, name, value) {
  // Return full style object
  if (name === undefined) {
    return getComputedStyle(element);
  }

  var nameType = jqLiteType(name);

  // Set multiple values
  if (nameType === 'object') {
    for (var key in name) element.style[_camelCase(key)] = name[key];
    return;
  }

  // Set a single value
  if (nameType === 'string' && value !== undefined) {
    element.style[_camelCase(name)] = value;
  }

  var styleObj = getComputedStyle(element),
      isArray = (jqLiteType(name) === 'array');

  // Read single value
  if (!isArray) return _getCurrCssProp(element, name, styleObj);

  // Read multiple values
  var outObj = {},
      key;

  for (var i=0; i < name.length; i++) {
    key = name[i];
    outObj[key] = _getCurrCssProp(element, key, styleObj);
  }

  return outObj;
}


/**
 * Check if element has class.
 * @param {Element} element - The DOM element.
 * @param {string} cls - The class name string.
 */
function jqLiteHasClass(element, cls) {
  if (!cls || !element.getAttribute) return false;
  return (_getExistingClasses(element).indexOf(' ' + cls + ' ') > -1);
}


/**
 * Return the type of a variable.
 * @param {} somevar - The JavaScript variable.
 */
function jqLiteType(somevar) {
  // handle undefined
  if (somevar === undefined) return 'undefined';

  // handle others (of type [object <Type>])
  var typeStr = Object.prototype.toString.call(somevar);
  if (typeStr.indexOf('[object ') === 0) {
    return typeStr.slice(8, -1).toLowerCase();
  } else {
    throw new Error("MUI: Could not understand type: " + typeStr);
  }    
}


/**
 * Attach an event handler to a DOM element
 * @param {Element} element - The DOM element.
 * @param {string} type - The event type name.
 * @param {Function} callback - The callback function.
 * @param {Boolean} useCapture - Use capture flag.
 */
function jqLiteOn(element, type, callback, useCapture) {
  useCapture = (useCapture === undefined) ? false : useCapture;

  // add to DOM
  element.addEventListener(type, callback, useCapture);

  // add to cache
  var cache = element._muiEventCache = element._muiEventCache || {};
  cache[type] = cache[type] || [];
  cache[type].push([callback, useCapture]);
}


/**
 * Remove an event handler from a DOM element
 * @param {Element} element - The DOM element.
 * @param {string} type - The event type name.
 * @param {Function} callback - The callback function.
 * @param {Boolean} useCapture - Use capture flag.
 */
function jqLiteOff(element, type, callback, useCapture) {
  useCapture = (useCapture === undefined) ? false : useCapture;

  // remove from cache
  var cache = element._muiEventCache = element._muiEventCache || {},
      argsList = cache[type] || [],
      args,
      i;

  i = argsList.length;
  while (i--) {
    args = argsList[i];

    // remove all events if callback is undefined
    if (callback === undefined ||
        (args[0] === callback && args[1] === useCapture)) {

      // remove from cache
      argsList.splice(i, 1);
      
      // remove from DOM
      element.removeEventListener(type, args[0], args[1]);
    }
  }
}


/**
 * Attach an event hander which will only execute once
 * @param {Element} element - The DOM element.
 * @param {string} type - The event type name.
 * @param {Function} callback - The callback function.
 * @param {Boolean} useCapture - Use capture flag.
 */
function jqLiteOne(element, type, callback, useCapture) {
  jqLiteOn(element, type, function onFn(ev) {
    // execute callback
    if (callback) callback.apply(this, arguments);

    // remove wrapper
    jqLiteOff(element, type, onFn);
  }, useCapture);
}


/**
 * Get or set horizontal scroll position
 * @param {Element} element - The DOM element
 * @param {number} [value] - The scroll position
 */
function jqLiteScrollLeft(element, value) {
  var win = window;

  // get
  if (value === undefined) {
    if (element === win) {
      var docEl = document.documentElement;
      return (win.pageXOffset || docEl.scrollLeft) - (docEl.clientLeft || 0);
    } else {
      return element.scrollLeft;
    }
  }

  // set
  if (element === win) win.scrollTo(value, jqLiteScrollTop(win));
  else element.scrollLeft = value;
}


/**
 * Get or set vertical scroll position
 * @param {Element} element - The DOM element
 * @param {number} value - The scroll position
 */
function jqLiteScrollTop(element, value) {
  var win = window;

  // get
  if (value === undefined) {
    if (element === win) {
      var docEl = document.documentElement;
      return (win.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
    } else {
      return element.scrollTop;
    }
  }

  // set
  if (element === win) win.scrollTo(jqLiteScrollLeft(win), value);
  else element.scrollTop = value;
}


/**
 * Return object representing top/left offset and element height/width.
 * @param {Element} element - The DOM element.
 */
function jqLiteOffset(element) {
  var win = window,
      rect = element.getBoundingClientRect(),
      scrollTop = jqLiteScrollTop(win),
      scrollLeft = jqLiteScrollLeft(win);

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    height: rect.height,
    width: rect.width
  };
}


/**
 * Attach a callback to the DOM ready event listener
 * @param {Function} fn - The callback function.
 */
function jqLiteReady(fn) {
  var done = false,
      top = true,
      doc = document,
      win = doc.defaultView,
      root = doc.documentElement,
      add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
      rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
      pre = doc.addEventListener ? '' : 'on';

  var init = function(e) {
    if (e.type == 'readystatechange' && doc.readyState != 'complete') {
      return;
    }

    (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) fn.call(win, e.type || e);
  };

  var poll = function() {
    try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
    init('poll');
  };

  if (doc.readyState == 'complete') {
    fn.call(win, 'lazy');
  } else {
    if (doc.createEventObject && root.doScroll) {
      try { top = !win.frameElement; } catch(e) { }
      if (top) poll();
    }
    doc[add](pre + 'DOMContentLoaded', init, false);
    doc[add](pre + 'readystatechange', init, false);
    win[add](pre + 'load', init, false);
  }
}


/**
 * Remove classes from a DOM element
 * @param {Element} element - The DOM element.
 * @param {string} cssClasses - Space separated list of class names.
 */
function jqLiteRemoveClass(element, cssClasses) {
  if (!cssClasses || !element.setAttribute) return;

  var existingClasses = _getExistingClasses(element),
      splitClasses = cssClasses.split(' '),
      cssClass;
  
  for (var i=0; i < splitClasses.length; i++) {
    cssClass = splitClasses[i].trim();
    while (existingClasses.indexOf(' ' + cssClass + ' ') >= 0) {
      existingClasses = existingClasses.replace(' ' + cssClass + ' ', ' ');
    }
  }

  element.setAttribute('class', existingClasses.trim());
}


// ------------------------------
// Utilities
// ------------------------------
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g,
    MOZ_HACK_REGEXP = /^moz([A-Z])/,
    ESCAPE_REGEXP = /([.*+?^=!:${}()|\[\]\/\\])/g,
    BOOLEAN_ATTRS;


BOOLEAN_ATTRS = {
  multiple: true,
  selected: true,
  checked: true,
  disabled: true,
  readonly: true,
  required: true,
  open: true
}


function _getExistingClasses(element) {
  var classes = (element.getAttribute('class') || '').replace(/[\n\t]/g, '');
  return ' ' + classes + ' ';
}


function _camelCase(name) {
  return name.
    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).
    replace(MOZ_HACK_REGEXP, 'Moz$1');
}


function _escapeRegExp(string) {
  return string.replace(ESCAPE_REGEXP, "\\$1");
}


function _getCurrCssProp(elem, name, computed) {
  var ret;

  // try computed style
  ret = computed.getPropertyValue(name);

  // try style attribute (if element is not attached to document)
  if (ret === '' && !elem.ownerDocument) ret = elem.style[_camelCase(name)];

  return ret;
}


/**
 * Module API
 */
module.exports = {
  /** Add classes */
  addClass: jqLiteAddClass,

  /** Get or set CSS properties */
  css: jqLiteCss,

  /** Check for class */
  hasClass: jqLiteHasClass,

  /** Remove event handlers */
  off: jqLiteOff,

  /** Return offset values */
  offset: jqLiteOffset,

  /** Add event handlers */
  on: jqLiteOn,

  /** Add an execute-once event handler */
  one: jqLiteOne,

  /** DOM ready event handler */
  ready: jqLiteReady,

  /** Remove classes */
  removeClass: jqLiteRemoveClass,

  /** Check JavaScript variable instance type */
  type: jqLiteType,

  /** Get or set horizontal scroll position */
  scrollLeft: jqLiteScrollLeft,

  /** Get or set vertical scroll position */
  scrollTop: jqLiteScrollTop
};

},{}],3:[function(require,module,exports){
/**
 * MUI CSS/JS utilities module
 * @module lib/util
 */

'use strict';


var config = require('../config'),
    jqLite = require('./jqLite'),
    nodeInsertedCallbacks = [],
    scrollLock = 0,
    scrollLockCls = 'mui-body--scroll-lock',
    scrollLockPos,
    _supportsPointerEvents;


/**
 * Logging function
 */
function logFn() {
  var win = window;

  if (config.debug && typeof win.console !== "undefined") {
    try {
      win.console.log.apply(win.console, arguments);
    } catch (a) {
      var e = Array.prototype.slice.call(arguments);
      win.console.log(e.join("\n"));
    }
  }
}


/**
 * Load CSS text in new stylesheet
 * @param {string} cssText - The css text.
 */
function loadStyleFn(cssText) {
  var doc = document,
      head;

  // copied from jQuery 
  head = doc.head ||
    doc.getElementsByTagName('head')[0] ||
    doc.documentElement;
  
  var e = doc.createElement('style');
  e.type = 'text/css';
    
  if (e.styleSheet) e.styleSheet.cssText = cssText;
  else e.appendChild(doc.createTextNode(cssText));
  
  // add to document
  head.insertBefore(e, head.firstChild);

  return e;
}


/**
 * Raise an error
 * @param {string} msg - The error message.
 */
function raiseErrorFn(msg, useConsole) {
  if (useConsole) {
    if (typeof console !== 'undefined') console.error('MUI Warning: ' + msg);
  } else {
    throw new Error('MUI: ' + msg);
  }
}


/**
 * Register callbacks on muiNodeInserted event
 * @param {function} callbackFn - The callback function.
 */
function onNodeInsertedFn(callbackFn) {
  nodeInsertedCallbacks.push(callbackFn);

  // initalize listeners
  if (nodeInsertedCallbacks._initialized === undefined) {
    var doc = document;

    jqLite.on(doc, 'animationstart', animationHandlerFn);
    jqLite.on(doc, 'mozAnimationStart', animationHandlerFn);
    jqLite.on(doc, 'webkitAnimationStart', animationHandlerFn);

    nodeInsertedCallbacks._initialized = true;
  }
}


/**
 * Execute muiNodeInserted callbacks
 * @param {Event} ev - The DOM event.
 */
function animationHandlerFn(ev) {
  // check animation name
  if (ev.animationName !== 'mui-node-inserted') return;

  var el = ev.target;

  // iterate through callbacks
  for (var i=nodeInsertedCallbacks.length - 1; i >= 0; i--) {
    nodeInsertedCallbacks[i](el);
  }
}


/**
 * Convert Classname object, with class as key and true/false as value, to an
 * class string.
 * @param  {Object} classes The classes
 * @return {String}         class string
 */
function classNamesFn(classes) {
  var cs = '';
  for (var i in classes) {
    cs += (classes[i]) ? i + ' ' : '';
  }
  return cs.trim();
}


/**
 * Check if client supports pointer events.
 */
function supportsPointerEventsFn() {
  // check cache
  if (_supportsPointerEvents !== undefined) return _supportsPointerEvents;
  
  var element = document.createElement('x');
  element.style.cssText = 'pointer-events:auto';
  _supportsPointerEvents = (element.style.pointerEvents === 'auto');
  return _supportsPointerEvents;
}


/**
 * Create callback closure.
 * @param {Object} instance - The object instance.
 * @param {String} funcName - The name of the callback function.
 */
function callbackFn(instance, funcName) {
  return function() {instance[funcName].apply(instance, arguments);};
}


/**
 * Dispatch event.
 * @param {Element} element - The DOM element.
 * @param {String} eventType - The event type.
 * @param {Boolean} bubbles=true - If true, event bubbles.
 * @param {Boolean} cancelable=true = If true, event is cancelable
 * @param {Object} [data] - Data to add to event object
 */
function dispatchEventFn(element, eventType, bubbles, cancelable, data) {
  var ev = document.createEvent('HTMLEvents'),
      bubbles = (bubbles !== undefined) ? bubbles : true,
      cancelable = (cancelable !== undefined) ? cancelable : true,
      k;
  
  ev.initEvent(eventType, bubbles, cancelable);

  // add data to event object
  if (data) for (k in data) ev[k] = data[k];

  // dispatch
  if (element) element.dispatchEvent(ev);

  return ev;
}


/**
 * Turn on window scroll lock.
 */
function enableScrollLockFn() {
  // increment counter
  scrollLock += 1

  // add lock
  if (scrollLock === 1) {
    var win = window,
        doc = document;

    scrollLockPos = {left: jqLite.scrollLeft(win), top: jqLite.scrollTop(win)};
    jqLite.addClass(doc.body, scrollLockCls);
    win.scrollTo(scrollLockPos.left, scrollLockPos.top);
  }
}


/**
 * Turn off window scroll lock.
 */
function disableScrollLockFn() {
  // ignore
  if (scrollLock === 0) return;

  // decrement counter
  scrollLock -= 1

  // remove lock 
  if (scrollLock === 0) {
    var win = window,
        doc = document;

    jqLite.removeClass(doc.body, scrollLockCls);
    win.scrollTo(scrollLockPos.left, scrollLockPos.top);
  }
}


/**
 * Define the module API
 */
module.exports = {
  /** Create callback closures */
  callback: callbackFn,
  
  /** Classnames object to string */
  classNames: classNamesFn,

  /** Disable scroll lock */
  disableScrollLock: disableScrollLockFn,

  /** Dispatch event */
  dispatchEvent: dispatchEventFn,
  
  /** Enable scroll lock */
  enableScrollLock: enableScrollLockFn,

  /** Log messages to the console when debug is turned on */
  log: logFn,

  /** Load CSS text as new stylesheet */
  loadStyle: loadStyleFn,

  /** Register muiNodeInserted handler */
  onNodeInserted: onNodeInsertedFn,

  /** Raise MUI error */
  raiseError: raiseErrorFn,

  /** Support Pointer Events check */
  supportsPointerEvents: supportsPointerEventsFn
};

},{"../config":1,"./jqLite":2}],4:[function(require,module,exports){
/**
 * MUI CSS/JS overlay module
 * @module overlay
 */

'use strict';


var util = require('./lib/util'),
    jqLite = require('./lib/jqLite'),
    overlayId = 'mui-overlay',
    bodyClass = 'mui--overflow-hidden',
    iosRegex = /(iPad|iPhone|iPod)/g;


/**
 * Turn overlay on/off.
 * @param {string} action - Turn overlay "on"/"off".
 * @param {object} [options]
 * @config {boolean} [keyboard] - If true, close when escape key is pressed.
 * @config {boolean} [static] - If false, close when backdrop is clicked.
 * @config {Function} [onclose] - Callback function to execute on close
 * @param {Element} [childElement] - Child element to add to overlay.
 */
function overlayFn(action) {
  var overlayEl;
  
  if (action === 'on') {
    // extract arguments
    var arg, options, childElement;
    
    // pull options and childElement from arguments
    for (var i=arguments.length - 1; i > 0; i--) {
      arg = arguments[i];

      if (jqLite.type(arg) === 'object') options = arg;
      if (arg instanceof Element && arg.nodeType === 1) childElement = arg;
    }

    // option defaults
    options = options || {};
    if (options.keyboard === undefined) options.keyboard = true;
    if (options.static === undefined) options.static = false;
    
    // execute method
    overlayEl = overlayOn(options, childElement);
    
  } else if (action === 'off') {
    overlayEl = overlayOff();

  } else {
    // raise error
    util.raiseError("Expecting 'on' or 'off'");
  }

  return overlayEl;
}


/**
 * Turn on overlay.
 * @param {object} options - Overlay options.
 * @param {Element} childElement - The child element.
 */
function overlayOn(options, childElement) {
  var bodyEl = document.body,
      overlayEl = document.getElementById(overlayId);
    
  // add overlay
  util.enableScrollLock();
  //jqLite.addClass(bodyEl, bodyClass);

  if (!overlayEl) {
    // create overlayEl
    overlayEl = document.createElement('div');
    overlayEl.setAttribute('id', overlayId);
    
    // add child element
    if (childElement) overlayEl.appendChild(childElement);

    bodyEl.appendChild(overlayEl);
    
  } else {
    // remove existing children
    while (overlayEl.firstChild) overlayEl.removeChild(overlayEl.firstChild);
    
    // add child element
    if (childElement) overlayEl.appendChild(childElement);
  }

  // iOS bugfix
  if (iosRegex.test(navigator.userAgent)) {
    jqLite.css(overlayEl, 'cursor', 'pointer');
  }

  // handle options
  if (options.keyboard) addKeyupHandler();
  else removeKeyupHandler();

  if (options.static) removeClickHandler(overlayEl);
  else addClickHandler(overlayEl);

  // attach options
  overlayEl.muiOptions = options;

  return overlayEl;
}


/**
 * Turn off overlay.
 */
function overlayOff() {
  var overlayEl = document.getElementById(overlayId),
      callbackFn;

  if (overlayEl) {
    // remove children
    while (overlayEl.firstChild) overlayEl.removeChild(overlayEl.firstChild);

    // remove overlay element
    overlayEl.parentNode.removeChild(overlayEl);

    // callback reference
    callbackFn = overlayEl.muiOptions.onclose;

    // remove click handler
    removeClickHandler(overlayEl);
  }

  util.disableScrollLock();

  // remove keyup handler
  removeKeyupHandler();

  // execute callback
  if (callbackFn) callbackFn();

  return overlayEl;
}


/**
 * Add keyup handler.
 */
function addKeyupHandler() {
  jqLite.on(document, 'keyup', onKeyup);
}


/**
 * Remove keyup handler.
 */
function removeKeyupHandler() {
  jqLite.off(document, 'keyup', onKeyup);
}


/**
 * Teardown overlay when escape key is pressed.
 */
function onKeyup(ev) {
  if (ev.keyCode === 27) overlayOff();
}


/**
 * Add click handler.
 */
function addClickHandler(overlayEl) {
  jqLite.on(overlayEl, 'click', onClick);
}


/**
 * Remove click handler.
 */
function removeClickHandler(overlayEl) {
  jqLite.off(overlayEl, 'click', onClick);
}


/**
 * Teardown overlay when backdrop is clicked.
 */
function onClick(ev) {
  if (ev.target.id === overlayId) overlayOff();
}


/** Define module API */
module.exports = overlayFn;

},{"./lib/jqLite":2,"./lib/util":3}],"muicss":[function(require,module,exports){
/**
 * MUI NPM package
 * @module pkg/index.js
 */

/** Define module API */
module.exports = {
  overlay: require('./lib/js/overlay')
}

},{"./lib/js/overlay":4}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbXVpY3NzL2xpYi9qcy9jb25maWcuanMiLCJub2RlX21vZHVsZXMvbXVpY3NzL2xpYi9qcy9saWIvanFMaXRlLmpzIiwibm9kZV9tb2R1bGVzL211aWNzcy9saWIvanMvbGliL3V0aWwuanMiLCJub2RlX21vZHVsZXMvbXVpY3NzL2xpYi9qcy9vdmVybGF5LmpzIiwibXVpY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBNVUkgY29uZmlnIG1vZHVsZVxuICogQG1vZHVsZSBjb25maWdcbiAqL1xuXG4vKiogRGVmaW5lIG1vZHVsZSBBUEkgKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKiogVXNlIGRlYnVnIG1vZGUgKi9cbiAgZGVidWc6IHRydWVcbn07XG4iLCIvKipcbiAqIE1VSSBDU1MvSlMganFMaXRlIG1vZHVsZVxuICogQG1vZHVsZSBsaWIvanFMaXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qKlxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NDbGFzc2VzIC0gU3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3MgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGpxTGl0ZUFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzZXMpIHtcbiAgaWYgKCFjc3NDbGFzc2VzIHx8ICFlbGVtZW50LnNldEF0dHJpYnV0ZSkgcmV0dXJuO1xuXG4gIHZhciBleGlzdGluZ0NsYXNzZXMgPSBfZ2V0RXhpc3RpbmdDbGFzc2VzKGVsZW1lbnQpLFxuICAgICAgc3BsaXRDbGFzc2VzID0gY3NzQ2xhc3Nlcy5zcGxpdCgnICcpLFxuICAgICAgY3NzQ2xhc3M7XG5cbiAgZm9yICh2YXIgaT0wOyBpIDwgc3BsaXRDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY3NzQ2xhc3MgPSBzcGxpdENsYXNzZXNbaV0udHJpbSgpO1xuICAgIGlmIChleGlzdGluZ0NsYXNzZXMuaW5kZXhPZignICcgKyBjc3NDbGFzcyArICcgJykgPT09IC0xKSB7XG4gICAgICBleGlzdGluZ0NsYXNzZXMgKz0gY3NzQ2xhc3MgKyAnICc7XG4gICAgfVxuICB9XG4gIFxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBleGlzdGluZ0NsYXNzZXMudHJpbSgpKTtcbn1cblxuXG4vKipcbiAqIEdldCBvciBzZXQgQ1NTIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIC0gVGhlIHByb3BlcnR5IG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXSAtIFRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24ganFMaXRlQ3NzKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIC8vIFJldHVybiBmdWxsIHN0eWxlIG9iamVjdFxuICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIH1cblxuICB2YXIgbmFtZVR5cGUgPSBqcUxpdGVUeXBlKG5hbWUpO1xuXG4gIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcbiAgaWYgKG5hbWVUeXBlID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBuYW1lKSBlbGVtZW50LnN0eWxlW19jYW1lbENhc2Uoa2V5KV0gPSBuYW1lW2tleV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2V0IGEgc2luZ2xlIHZhbHVlXG4gIGlmIChuYW1lVHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuc3R5bGVbX2NhbWVsQ2FzZShuYW1lKV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZU9iaiA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBpc0FycmF5ID0gKGpxTGl0ZVR5cGUobmFtZSkgPT09ICdhcnJheScpO1xuXG4gIC8vIFJlYWQgc2luZ2xlIHZhbHVlXG4gIGlmICghaXNBcnJheSkgcmV0dXJuIF9nZXRDdXJyQ3NzUHJvcChlbGVtZW50LCBuYW1lLCBzdHlsZU9iaik7XG5cbiAgLy8gUmVhZCBtdWx0aXBsZSB2YWx1ZXNcbiAgdmFyIG91dE9iaiA9IHt9LFxuICAgICAga2V5O1xuXG4gIGZvciAodmFyIGk9MDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBuYW1lW2ldO1xuICAgIG91dE9ialtrZXldID0gX2dldEN1cnJDc3NQcm9wKGVsZW1lbnQsIGtleSwgc3R5bGVPYmopO1xuICB9XG5cbiAgcmV0dXJuIG91dE9iajtcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGNscyAtIFRoZSBjbGFzcyBuYW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24ganFMaXRlSGFzQ2xhc3MoZWxlbWVudCwgY2xzKSB7XG4gIGlmICghY2xzIHx8ICFlbGVtZW50LmdldEF0dHJpYnV0ZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gKF9nZXRFeGlzdGluZ0NsYXNzZXMoZWxlbWVudCkuaW5kZXhPZignICcgKyBjbHMgKyAnICcpID4gLTEpO1xufVxuXG5cbi8qKlxuICogUmV0dXJuIHRoZSB0eXBlIG9mIGEgdmFyaWFibGUuXG4gKiBAcGFyYW0ge30gc29tZXZhciAtIFRoZSBKYXZhU2NyaXB0IHZhcmlhYmxlLlxuICovXG5mdW5jdGlvbiBqcUxpdGVUeXBlKHNvbWV2YXIpIHtcbiAgLy8gaGFuZGxlIHVuZGVmaW5lZFxuICBpZiAoc29tZXZhciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG5cbiAgLy8gaGFuZGxlIG90aGVycyAob2YgdHlwZSBbb2JqZWN0IDxUeXBlPl0pXG4gIHZhciB0eXBlU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNvbWV2YXIpO1xuICBpZiAodHlwZVN0ci5pbmRleE9mKCdbb2JqZWN0ICcpID09PSAwKSB7XG4gICAgcmV0dXJuIHR5cGVTdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTVVJOiBDb3VsZCBub3QgdW5kZXJzdGFuZCB0eXBlOiBcIiArIHR5cGVTdHIpO1xuICB9ICAgIFxufVxuXG5cbi8qKlxuICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZXZlbnQgdHlwZSBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmUgLSBVc2UgY2FwdHVyZSBmbGFnLlxuICovXG5mdW5jdGlvbiBqcUxpdGVPbihlbGVtZW50LCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICB1c2VDYXB0dXJlID0gKHVzZUNhcHR1cmUgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IHVzZUNhcHR1cmU7XG5cbiAgLy8gYWRkIHRvIERPTVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuXG4gIC8vIGFkZCB0byBjYWNoZVxuICB2YXIgY2FjaGUgPSBlbGVtZW50Ll9tdWlFdmVudENhY2hlID0gZWxlbWVudC5fbXVpRXZlbnRDYWNoZSB8fCB7fTtcbiAgY2FjaGVbdHlwZV0gPSBjYWNoZVt0eXBlXSB8fCBbXTtcbiAgY2FjaGVbdHlwZV0ucHVzaChbY2FsbGJhY2ssIHVzZUNhcHR1cmVdKTtcbn1cblxuXG4vKipcbiAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZyb20gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZXZlbnQgdHlwZSBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmUgLSBVc2UgY2FwdHVyZSBmbGFnLlxuICovXG5mdW5jdGlvbiBqcUxpdGVPZmYoZWxlbWVudCwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgdXNlQ2FwdHVyZSA9ICh1c2VDYXB0dXJlID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiB1c2VDYXB0dXJlO1xuXG4gIC8vIHJlbW92ZSBmcm9tIGNhY2hlXG4gIHZhciBjYWNoZSA9IGVsZW1lbnQuX211aUV2ZW50Q2FjaGUgPSBlbGVtZW50Ll9tdWlFdmVudENhY2hlIHx8IHt9LFxuICAgICAgYXJnc0xpc3QgPSBjYWNoZVt0eXBlXSB8fCBbXSxcbiAgICAgIGFyZ3MsXG4gICAgICBpO1xuXG4gIGkgPSBhcmdzTGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBhcmdzID0gYXJnc0xpc3RbaV07XG5cbiAgICAvLyByZW1vdmUgYWxsIGV2ZW50cyBpZiBjYWxsYmFjayBpcyB1bmRlZmluZWRcbiAgICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAoYXJnc1swXSA9PT0gY2FsbGJhY2sgJiYgYXJnc1sxXSA9PT0gdXNlQ2FwdHVyZSkpIHtcblxuICAgICAgLy8gcmVtb3ZlIGZyb20gY2FjaGVcbiAgICAgIGFyZ3NMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgIFxuICAgICAgLy8gcmVtb3ZlIGZyb20gRE9NXG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBBdHRhY2ggYW4gZXZlbnQgaGFuZGVyIHdoaWNoIHdpbGwgb25seSBleGVjdXRlIG9uY2VcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlIC0gVXNlIGNhcHR1cmUgZmxhZy5cbiAqL1xuZnVuY3Rpb24ganFMaXRlT25lKGVsZW1lbnQsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gIGpxTGl0ZU9uKGVsZW1lbnQsIHR5cGUsIGZ1bmN0aW9uIG9uRm4oZXYpIHtcbiAgICAvLyBleGVjdXRlIGNhbGxiYWNrXG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgLy8gcmVtb3ZlIHdyYXBwZXJcbiAgICBqcUxpdGVPZmYoZWxlbWVudCwgdHlwZSwgb25Gbik7XG4gIH0sIHVzZUNhcHR1cmUpO1xufVxuXG5cbi8qKlxuICogR2V0IG9yIHNldCBob3Jpem9udGFsIHNjcm9sbCBwb3NpdGlvblxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXSAtIFRoZSBzY3JvbGwgcG9zaXRpb25cbiAqL1xuZnVuY3Rpb24ganFMaXRlU2Nyb2xsTGVmdChlbGVtZW50LCB2YWx1ZSkge1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIC8vIGdldFxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChlbGVtZW50ID09PSB3aW4pIHtcbiAgICAgIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHJldHVybiAod2luLnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQpIC0gKGRvY0VsLmNsaWVudExlZnQgfHwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0XG4gIGlmIChlbGVtZW50ID09PSB3aW4pIHdpbi5zY3JvbGxUbyh2YWx1ZSwganFMaXRlU2Nyb2xsVG9wKHdpbikpO1xuICBlbHNlIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbHVlO1xufVxuXG5cbi8qKlxuICogR2V0IG9yIHNldCB2ZXJ0aWNhbCBzY3JvbGwgcG9zaXRpb25cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHNjcm9sbCBwb3NpdGlvblxuICovXG5mdW5jdGlvbiBqcUxpdGVTY3JvbGxUb3AoZWxlbWVudCwgdmFsdWUpIHtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICAvLyBnZXRcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gd2luKSB7XG4gICAgICB2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByZXR1cm4gKHdpbi5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3ApIC0gKGRvY0VsLmNsaWVudFRvcCB8fCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldFxuICBpZiAoZWxlbWVudCA9PT0gd2luKSB3aW4uc2Nyb2xsVG8oanFMaXRlU2Nyb2xsTGVmdCh3aW4pLCB2YWx1ZSk7XG4gIGVsc2UgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZTtcbn1cblxuXG4vKipcbiAqIFJldHVybiBvYmplY3QgcmVwcmVzZW50aW5nIHRvcC9sZWZ0IG9mZnNldCBhbmQgZWxlbWVudCBoZWlnaHQvd2lkdGguXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgRE9NIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGpxTGl0ZU9mZnNldChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSB3aW5kb3csXG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNjcm9sbFRvcCA9IGpxTGl0ZVNjcm9sbFRvcCh3aW4pLFxuICAgICAgc2Nyb2xsTGVmdCA9IGpxTGl0ZVNjcm9sbExlZnQod2luKTtcblxuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHdpZHRoOiByZWN0LndpZHRoXG4gIH07XG59XG5cblxuLyoqXG4gKiBBdHRhY2ggYSBjYWxsYmFjayB0byB0aGUgRE9NIHJlYWR5IGV2ZW50IGxpc3RlbmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24ganFMaXRlUmVhZHkoZm4pIHtcbiAgdmFyIGRvbmUgPSBmYWxzZSxcbiAgICAgIHRvcCA9IHRydWUsXG4gICAgICBkb2MgPSBkb2N1bWVudCxcbiAgICAgIHdpbiA9IGRvYy5kZWZhdWx0VmlldyxcbiAgICAgIHJvb3QgPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgYWRkID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAnYXR0YWNoRXZlbnQnLFxuICAgICAgcmVtID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnLFxuICAgICAgcHJlID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAnJyA6ICdvbic7XG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudHlwZSA9PSAncmVhZHlzdGF0ZWNoYW5nZScgJiYgZG9jLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIChlLnR5cGUgPT0gJ2xvYWQnID8gd2luIDogZG9jKVtyZW1dKHByZSArIGUudHlwZSwgaW5pdCwgZmFsc2UpO1xuICAgIGlmICghZG9uZSAmJiAoZG9uZSA9IHRydWUpKSBmbi5jYWxsKHdpbiwgZS50eXBlIHx8IGUpO1xuICB9O1xuXG4gIHZhciBwb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHsgcm9vdC5kb1Njcm9sbCgnbGVmdCcpOyB9IGNhdGNoKGUpIHsgc2V0VGltZW91dChwb2xsLCA1MCk7IHJldHVybjsgfVxuICAgIGluaXQoJ3BvbGwnKTtcbiAgfTtcblxuICBpZiAoZG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuICAgIGZuLmNhbGwod2luLCAnbGF6eScpO1xuICB9IGVsc2Uge1xuICAgIGlmIChkb2MuY3JlYXRlRXZlbnRPYmplY3QgJiYgcm9vdC5kb1Njcm9sbCkge1xuICAgICAgdHJ5IHsgdG9wID0gIXdpbi5mcmFtZUVsZW1lbnQ7IH0gY2F0Y2goZSkgeyB9XG4gICAgICBpZiAodG9wKSBwb2xsKCk7XG4gICAgfVxuICAgIGRvY1thZGRdKHByZSArICdET01Db250ZW50TG9hZGVkJywgaW5pdCwgZmFsc2UpO1xuICAgIGRvY1thZGRdKHByZSArICdyZWFkeXN0YXRlY2hhbmdlJywgaW5pdCwgZmFsc2UpO1xuICAgIHdpblthZGRdKHByZSArICdsb2FkJywgaW5pdCwgZmFsc2UpO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3NlcyBmcm9tIGEgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NDbGFzc2VzIC0gU3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3MgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGpxTGl0ZVJlbW92ZUNsYXNzKGVsZW1lbnQsIGNzc0NsYXNzZXMpIHtcbiAgaWYgKCFjc3NDbGFzc2VzIHx8ICFlbGVtZW50LnNldEF0dHJpYnV0ZSkgcmV0dXJuO1xuXG4gIHZhciBleGlzdGluZ0NsYXNzZXMgPSBfZ2V0RXhpc3RpbmdDbGFzc2VzKGVsZW1lbnQpLFxuICAgICAgc3BsaXRDbGFzc2VzID0gY3NzQ2xhc3Nlcy5zcGxpdCgnICcpLFxuICAgICAgY3NzQ2xhc3M7XG4gIFxuICBmb3IgKHZhciBpPTA7IGkgPCBzcGxpdENsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjc3NDbGFzcyA9IHNwbGl0Q2xhc3Nlc1tpXS50cmltKCk7XG4gICAgd2hpbGUgKGV4aXN0aW5nQ2xhc3Nlcy5pbmRleE9mKCcgJyArIGNzc0NsYXNzICsgJyAnKSA+PSAwKSB7XG4gICAgICBleGlzdGluZ0NsYXNzZXMgPSBleGlzdGluZ0NsYXNzZXMucmVwbGFjZSgnICcgKyBjc3NDbGFzcyArICcgJywgJyAnKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBleGlzdGluZ0NsYXNzZXMudHJpbSgpKTtcbn1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFV0aWxpdGllc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgU1BFQ0lBTF9DSEFSU19SRUdFWFAgPSAvKFtcXDpcXC1cXF9dKyguKSkvZyxcbiAgICBNT1pfSEFDS19SRUdFWFAgPSAvXm1veihbQS1aXSkvLFxuICAgIEVTQ0FQRV9SRUdFWFAgPSAvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLFxuICAgIEJPT0xFQU5fQVRUUlM7XG5cblxuQk9PTEVBTl9BVFRSUyA9IHtcbiAgbXVsdGlwbGU6IHRydWUsXG4gIHNlbGVjdGVkOiB0cnVlLFxuICBjaGVja2VkOiB0cnVlLFxuICBkaXNhYmxlZDogdHJ1ZSxcbiAgcmVhZG9ubHk6IHRydWUsXG4gIHJlcXVpcmVkOiB0cnVlLFxuICBvcGVuOiB0cnVlXG59XG5cblxuZnVuY3Rpb24gX2dldEV4aXN0aW5nQ2xhc3NlcyhlbGVtZW50KSB7XG4gIHZhciBjbGFzc2VzID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKS5yZXBsYWNlKC9bXFxuXFx0XS9nLCAnJyk7XG4gIHJldHVybiAnICcgKyBjbGFzc2VzICsgJyAnO1xufVxuXG5cbmZ1bmN0aW9uIF9jYW1lbENhc2UobmFtZSkge1xuICByZXR1cm4gbmFtZS5cbiAgICByZXBsYWNlKFNQRUNJQUxfQ0hBUlNfUkVHRVhQLCBmdW5jdGlvbihfLCBzZXBhcmF0b3IsIGxldHRlciwgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gb2Zmc2V0ID8gbGV0dGVyLnRvVXBwZXJDYXNlKCkgOiBsZXR0ZXI7XG4gICAgfSkuXG4gICAgcmVwbGFjZShNT1pfSEFDS19SRUdFWFAsICdNb3okMScpO1xufVxuXG5cbmZ1bmN0aW9uIF9lc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShFU0NBUEVfUkVHRVhQLCBcIlxcXFwkMVwiKTtcbn1cblxuXG5mdW5jdGlvbiBfZ2V0Q3VyckNzc1Byb3AoZWxlbSwgbmFtZSwgY29tcHV0ZWQpIHtcbiAgdmFyIHJldDtcblxuICAvLyB0cnkgY29tcHV0ZWQgc3R5bGVcbiAgcmV0ID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcblxuICAvLyB0cnkgc3R5bGUgYXR0cmlidXRlIChpZiBlbGVtZW50IGlzIG5vdCBhdHRhY2hlZCB0byBkb2N1bWVudClcbiAgaWYgKHJldCA9PT0gJycgJiYgIWVsZW0ub3duZXJEb2N1bWVudCkgcmV0ID0gZWxlbS5zdHlsZVtfY2FtZWxDYXNlKG5hbWUpXTtcblxuICByZXR1cm4gcmV0O1xufVxuXG5cbi8qKlxuICogTW9kdWxlIEFQSVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLyoqIEFkZCBjbGFzc2VzICovXG4gIGFkZENsYXNzOiBqcUxpdGVBZGRDbGFzcyxcblxuICAvKiogR2V0IG9yIHNldCBDU1MgcHJvcGVydGllcyAqL1xuICBjc3M6IGpxTGl0ZUNzcyxcblxuICAvKiogQ2hlY2sgZm9yIGNsYXNzICovXG4gIGhhc0NsYXNzOiBqcUxpdGVIYXNDbGFzcyxcblxuICAvKiogUmVtb3ZlIGV2ZW50IGhhbmRsZXJzICovXG4gIG9mZjoganFMaXRlT2ZmLFxuXG4gIC8qKiBSZXR1cm4gb2Zmc2V0IHZhbHVlcyAqL1xuICBvZmZzZXQ6IGpxTGl0ZU9mZnNldCxcblxuICAvKiogQWRkIGV2ZW50IGhhbmRsZXJzICovXG4gIG9uOiBqcUxpdGVPbixcblxuICAvKiogQWRkIGFuIGV4ZWN1dGUtb25jZSBldmVudCBoYW5kbGVyICovXG4gIG9uZToganFMaXRlT25lLFxuXG4gIC8qKiBET00gcmVhZHkgZXZlbnQgaGFuZGxlciAqL1xuICByZWFkeToganFMaXRlUmVhZHksXG5cbiAgLyoqIFJlbW92ZSBjbGFzc2VzICovXG4gIHJlbW92ZUNsYXNzOiBqcUxpdGVSZW1vdmVDbGFzcyxcblxuICAvKiogQ2hlY2sgSmF2YVNjcmlwdCB2YXJpYWJsZSBpbnN0YW5jZSB0eXBlICovXG4gIHR5cGU6IGpxTGl0ZVR5cGUsXG5cbiAgLyoqIEdldCBvciBzZXQgaG9yaXpvbnRhbCBzY3JvbGwgcG9zaXRpb24gKi9cbiAgc2Nyb2xsTGVmdDoganFMaXRlU2Nyb2xsTGVmdCxcblxuICAvKiogR2V0IG9yIHNldCB2ZXJ0aWNhbCBzY3JvbGwgcG9zaXRpb24gKi9cbiAgc2Nyb2xsVG9wOiBqcUxpdGVTY3JvbGxUb3Bcbn07XG4iLCIvKipcbiAqIE1VSSBDU1MvSlMgdXRpbGl0aWVzIG1vZHVsZVxuICogQG1vZHVsZSBsaWIvdXRpbFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyksXG4gICAganFMaXRlID0gcmVxdWlyZSgnLi9qcUxpdGUnKSxcbiAgICBub2RlSW5zZXJ0ZWRDYWxsYmFja3MgPSBbXSxcbiAgICBzY3JvbGxMb2NrID0gMCxcbiAgICBzY3JvbGxMb2NrQ2xzID0gJ211aS1ib2R5LS1zY3JvbGwtbG9jaycsXG4gICAgc2Nyb2xsTG9ja1BvcyxcbiAgICBfc3VwcG9ydHNQb2ludGVyRXZlbnRzO1xuXG5cbi8qKlxuICogTG9nZ2luZyBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBsb2dGbigpIHtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoY29uZmlnLmRlYnVnICYmIHR5cGVvZiB3aW4uY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRyeSB7XG4gICAgICB3aW4uY29uc29sZS5sb2cuYXBwbHkod2luLmNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoYSkge1xuICAgICAgdmFyIGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgd2luLmNvbnNvbGUubG9nKGUuam9pbihcIlxcblwiKSk7XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBMb2FkIENTUyB0ZXh0IGluIG5ldyBzdHlsZXNoZWV0XG4gKiBAcGFyYW0ge3N0cmluZ30gY3NzVGV4dCAtIFRoZSBjc3MgdGV4dC5cbiAqL1xuZnVuY3Rpb24gbG9hZFN0eWxlRm4oY3NzVGV4dCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBoZWFkO1xuXG4gIC8vIGNvcGllZCBmcm9tIGpRdWVyeSBcbiAgaGVhZCA9IGRvYy5oZWFkIHx8XG4gICAgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHxcbiAgICBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICBcbiAgdmFyIGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBcbiAgaWYgKGUuc3R5bGVTaGVldCkgZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICBlbHNlIGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzc1RleHQpKTtcbiAgXG4gIC8vIGFkZCB0byBkb2N1bWVudFxuICBoZWFkLmluc2VydEJlZm9yZShlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXG4gIHJldHVybiBlO1xufVxuXG5cbi8qKlxuICogUmFpc2UgYW4gZXJyb3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gcmFpc2VFcnJvckZuKG1zZywgdXNlQ29uc29sZSkge1xuICBpZiAodXNlQ29uc29sZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIGNvbnNvbGUuZXJyb3IoJ01VSSBXYXJuaW5nOiAnICsgbXNnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01VSTogJyArIG1zZyk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJlZ2lzdGVyIGNhbGxiYWNrcyBvbiBtdWlOb2RlSW5zZXJ0ZWQgZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrRm4gLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG9uTm9kZUluc2VydGVkRm4oY2FsbGJhY2tGbikge1xuICBub2RlSW5zZXJ0ZWRDYWxsYmFja3MucHVzaChjYWxsYmFja0ZuKTtcblxuICAvLyBpbml0YWxpemUgbGlzdGVuZXJzXG4gIGlmIChub2RlSW5zZXJ0ZWRDYWxsYmFja3MuX2luaXRpYWxpemVkID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG5cbiAgICBqcUxpdGUub24oZG9jLCAnYW5pbWF0aW9uc3RhcnQnLCBhbmltYXRpb25IYW5kbGVyRm4pO1xuICAgIGpxTGl0ZS5vbihkb2MsICdtb3pBbmltYXRpb25TdGFydCcsIGFuaW1hdGlvbkhhbmRsZXJGbik7XG4gICAganFMaXRlLm9uKGRvYywgJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JywgYW5pbWF0aW9uSGFuZGxlckZuKTtcblxuICAgIG5vZGVJbnNlcnRlZENhbGxiYWNrcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG59XG5cblxuLyoqXG4gKiBFeGVjdXRlIG11aU5vZGVJbnNlcnRlZCBjYWxsYmFja3NcbiAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gVGhlIERPTSBldmVudC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0aW9uSGFuZGxlckZuKGV2KSB7XG4gIC8vIGNoZWNrIGFuaW1hdGlvbiBuYW1lXG4gIGlmIChldi5hbmltYXRpb25OYW1lICE9PSAnbXVpLW5vZGUtaW5zZXJ0ZWQnKSByZXR1cm47XG5cbiAgdmFyIGVsID0gZXYudGFyZ2V0O1xuXG4gIC8vIGl0ZXJhdGUgdGhyb3VnaCBjYWxsYmFja3NcbiAgZm9yICh2YXIgaT1ub2RlSW5zZXJ0ZWRDYWxsYmFja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBub2RlSW5zZXJ0ZWRDYWxsYmFja3NbaV0oZWwpO1xuICB9XG59XG5cblxuLyoqXG4gKiBDb252ZXJ0IENsYXNzbmFtZSBvYmplY3QsIHdpdGggY2xhc3MgYXMga2V5IGFuZCB0cnVlL2ZhbHNlIGFzIHZhbHVlLCB0byBhblxuICogY2xhc3Mgc3RyaW5nLlxuICogQHBhcmFtICB7T2JqZWN0fSBjbGFzc2VzIFRoZSBjbGFzc2VzXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgY2xhc3Mgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNsYXNzTmFtZXNGbihjbGFzc2VzKSB7XG4gIHZhciBjcyA9ICcnO1xuICBmb3IgKHZhciBpIGluIGNsYXNzZXMpIHtcbiAgICBjcyArPSAoY2xhc3Nlc1tpXSkgPyBpICsgJyAnIDogJyc7XG4gIH1cbiAgcmV0dXJuIGNzLnRyaW0oKTtcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIGNsaWVudCBzdXBwb3J0cyBwb2ludGVyIGV2ZW50cy5cbiAqL1xuZnVuY3Rpb24gc3VwcG9ydHNQb2ludGVyRXZlbnRzRm4oKSB7XG4gIC8vIGNoZWNrIGNhY2hlXG4gIGlmIChfc3VwcG9ydHNQb2ludGVyRXZlbnRzICE9PSB1bmRlZmluZWQpIHJldHVybiBfc3VwcG9ydHNQb2ludGVyRXZlbnRzO1xuICBcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd4Jyk7XG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcbiAgX3N1cHBvcnRzUG9pbnRlckV2ZW50cyA9IChlbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJyk7XG4gIHJldHVybiBfc3VwcG9ydHNQb2ludGVyRXZlbnRzO1xufVxuXG5cbi8qKlxuICogQ3JlYXRlIGNhbGxiYWNrIGNsb3N1cmUuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgb2JqZWN0IGluc3RhbmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmNOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWxsYmFja0ZuKGluc3RhbmNlLCBmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7aW5zdGFuY2VbZnVuY05hbWVdLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO307XG59XG5cblxuLyoqXG4gKiBEaXNwYXRjaCBldmVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFR5cGUgLSBUaGUgZXZlbnQgdHlwZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYnViYmxlcz10cnVlIC0gSWYgdHJ1ZSwgZXZlbnQgYnViYmxlcy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FuY2VsYWJsZT10cnVlID0gSWYgdHJ1ZSwgZXZlbnQgaXMgY2FuY2VsYWJsZVxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXSAtIERhdGEgdG8gYWRkIHRvIGV2ZW50IG9iamVjdFxuICovXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50Rm4oZWxlbWVudCwgZXZlbnRUeXBlLCBidWJibGVzLCBjYW5jZWxhYmxlLCBkYXRhKSB7XG4gIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyksXG4gICAgICBidWJibGVzID0gKGJ1YmJsZXMgIT09IHVuZGVmaW5lZCkgPyBidWJibGVzIDogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGUgPSAoY2FuY2VsYWJsZSAhPT0gdW5kZWZpbmVkKSA/IGNhbmNlbGFibGUgOiB0cnVlLFxuICAgICAgaztcbiAgXG4gIGV2LmluaXRFdmVudChldmVudFR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpO1xuXG4gIC8vIGFkZCBkYXRhIHRvIGV2ZW50IG9iamVjdFxuICBpZiAoZGF0YSkgZm9yIChrIGluIGRhdGEpIGV2W2tdID0gZGF0YVtrXTtcblxuICAvLyBkaXNwYXRjaFxuICBpZiAoZWxlbWVudCkgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2KTtcblxuICByZXR1cm4gZXY7XG59XG5cblxuLyoqXG4gKiBUdXJuIG9uIHdpbmRvdyBzY3JvbGwgbG9jay5cbiAqL1xuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsTG9ja0ZuKCkge1xuICAvLyBpbmNyZW1lbnQgY291bnRlclxuICBzY3JvbGxMb2NrICs9IDFcblxuICAvLyBhZGQgbG9ja1xuICBpZiAoc2Nyb2xsTG9jayA9PT0gMSkge1xuICAgIHZhciB3aW4gPSB3aW5kb3csXG4gICAgICAgIGRvYyA9IGRvY3VtZW50O1xuXG4gICAgc2Nyb2xsTG9ja1BvcyA9IHtsZWZ0OiBqcUxpdGUuc2Nyb2xsTGVmdCh3aW4pLCB0b3A6IGpxTGl0ZS5zY3JvbGxUb3Aod2luKX07XG4gICAganFMaXRlLmFkZENsYXNzKGRvYy5ib2R5LCBzY3JvbGxMb2NrQ2xzKTtcbiAgICB3aW4uc2Nyb2xsVG8oc2Nyb2xsTG9ja1Bvcy5sZWZ0LCBzY3JvbGxMb2NrUG9zLnRvcCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFR1cm4gb2ZmIHdpbmRvdyBzY3JvbGwgbG9jay5cbiAqL1xuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbExvY2tGbigpIHtcbiAgLy8gaWdub3JlXG4gIGlmIChzY3JvbGxMb2NrID09PSAwKSByZXR1cm47XG5cbiAgLy8gZGVjcmVtZW50IGNvdW50ZXJcbiAgc2Nyb2xsTG9jayAtPSAxXG5cbiAgLy8gcmVtb3ZlIGxvY2sgXG4gIGlmIChzY3JvbGxMb2NrID09PSAwKSB7XG4gICAgdmFyIHdpbiA9IHdpbmRvdyxcbiAgICAgICAgZG9jID0gZG9jdW1lbnQ7XG5cbiAgICBqcUxpdGUucmVtb3ZlQ2xhc3MoZG9jLmJvZHksIHNjcm9sbExvY2tDbHMpO1xuICAgIHdpbi5zY3JvbGxUbyhzY3JvbGxMb2NrUG9zLmxlZnQsIHNjcm9sbExvY2tQb3MudG9wKTtcbiAgfVxufVxuXG5cbi8qKlxuICogRGVmaW5lIHRoZSBtb2R1bGUgQVBJXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKiogQ3JlYXRlIGNhbGxiYWNrIGNsb3N1cmVzICovXG4gIGNhbGxiYWNrOiBjYWxsYmFja0ZuLFxuICBcbiAgLyoqIENsYXNzbmFtZXMgb2JqZWN0IHRvIHN0cmluZyAqL1xuICBjbGFzc05hbWVzOiBjbGFzc05hbWVzRm4sXG5cbiAgLyoqIERpc2FibGUgc2Nyb2xsIGxvY2sgKi9cbiAgZGlzYWJsZVNjcm9sbExvY2s6IGRpc2FibGVTY3JvbGxMb2NrRm4sXG5cbiAgLyoqIERpc3BhdGNoIGV2ZW50ICovXG4gIGRpc3BhdGNoRXZlbnQ6IGRpc3BhdGNoRXZlbnRGbixcbiAgXG4gIC8qKiBFbmFibGUgc2Nyb2xsIGxvY2sgKi9cbiAgZW5hYmxlU2Nyb2xsTG9jazogZW5hYmxlU2Nyb2xsTG9ja0ZuLFxuXG4gIC8qKiBMb2cgbWVzc2FnZXMgdG8gdGhlIGNvbnNvbGUgd2hlbiBkZWJ1ZyBpcyB0dXJuZWQgb24gKi9cbiAgbG9nOiBsb2dGbixcblxuICAvKiogTG9hZCBDU1MgdGV4dCBhcyBuZXcgc3R5bGVzaGVldCAqL1xuICBsb2FkU3R5bGU6IGxvYWRTdHlsZUZuLFxuXG4gIC8qKiBSZWdpc3RlciBtdWlOb2RlSW5zZXJ0ZWQgaGFuZGxlciAqL1xuICBvbk5vZGVJbnNlcnRlZDogb25Ob2RlSW5zZXJ0ZWRGbixcblxuICAvKiogUmFpc2UgTVVJIGVycm9yICovXG4gIHJhaXNlRXJyb3I6IHJhaXNlRXJyb3JGbixcblxuICAvKiogU3VwcG9ydCBQb2ludGVyIEV2ZW50cyBjaGVjayAqL1xuICBzdXBwb3J0c1BvaW50ZXJFdmVudHM6IHN1cHBvcnRzUG9pbnRlckV2ZW50c0ZuXG59O1xuIiwiLyoqXG4gKiBNVUkgQ1NTL0pTIG92ZXJsYXkgbW9kdWxlXG4gKiBAbW9kdWxlIG92ZXJsYXlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL2xpYi91dGlsJyksXG4gICAganFMaXRlID0gcmVxdWlyZSgnLi9saWIvanFMaXRlJyksXG4gICAgb3ZlcmxheUlkID0gJ211aS1vdmVybGF5JyxcbiAgICBib2R5Q2xhc3MgPSAnbXVpLS1vdmVyZmxvdy1oaWRkZW4nLFxuICAgIGlvc1JlZ2V4ID0gLyhpUGFkfGlQaG9uZXxpUG9kKS9nO1xuXG5cbi8qKlxuICogVHVybiBvdmVybGF5IG9uL29mZi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUdXJuIG92ZXJsYXkgXCJvblwiL1wib2ZmXCIuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAY29uZmlnIHtib29sZWFufSBba2V5Ym9hcmRdIC0gSWYgdHJ1ZSwgY2xvc2Ugd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gKiBAY29uZmlnIHtib29sZWFufSBbc3RhdGljXSAtIElmIGZhbHNlLCBjbG9zZSB3aGVuIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gKiBAY29uZmlnIHtGdW5jdGlvbn0gW29uY2xvc2VdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBjbG9zZVxuICogQHBhcmFtIHtFbGVtZW50fSBbY2hpbGRFbGVtZW50XSAtIENoaWxkIGVsZW1lbnQgdG8gYWRkIHRvIG92ZXJsYXkuXG4gKi9cbmZ1bmN0aW9uIG92ZXJsYXlGbihhY3Rpb24pIHtcbiAgdmFyIG92ZXJsYXlFbDtcbiAgXG4gIGlmIChhY3Rpb24gPT09ICdvbicpIHtcbiAgICAvLyBleHRyYWN0IGFyZ3VtZW50c1xuICAgIHZhciBhcmcsIG9wdGlvbnMsIGNoaWxkRWxlbWVudDtcbiAgICBcbiAgICAvLyBwdWxsIG9wdGlvbnMgYW5kIGNoaWxkRWxlbWVudCBmcm9tIGFyZ3VtZW50c1xuICAgIGZvciAodmFyIGk9YXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgaWYgKGpxTGl0ZS50eXBlKGFyZykgPT09ICdvYmplY3QnKSBvcHRpb25zID0gYXJnO1xuICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgYXJnLm5vZGVUeXBlID09PSAxKSBjaGlsZEVsZW1lbnQgPSBhcmc7XG4gICAgfVxuXG4gICAgLy8gb3B0aW9uIGRlZmF1bHRzXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKG9wdGlvbnMua2V5Ym9hcmQgPT09IHVuZGVmaW5lZCkgb3B0aW9ucy5rZXlib2FyZCA9IHRydWU7XG4gICAgaWYgKG9wdGlvbnMuc3RhdGljID09PSB1bmRlZmluZWQpIG9wdGlvbnMuc3RhdGljID0gZmFsc2U7XG4gICAgXG4gICAgLy8gZXhlY3V0ZSBtZXRob2RcbiAgICBvdmVybGF5RWwgPSBvdmVybGF5T24ob3B0aW9ucywgY2hpbGRFbGVtZW50KTtcbiAgICBcbiAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdvZmYnKSB7XG4gICAgb3ZlcmxheUVsID0gb3ZlcmxheU9mZigpO1xuXG4gIH0gZWxzZSB7XG4gICAgLy8gcmFpc2UgZXJyb3JcbiAgICB1dGlsLnJhaXNlRXJyb3IoXCJFeHBlY3RpbmcgJ29uJyBvciAnb2ZmJ1wiKTtcbiAgfVxuXG4gIHJldHVybiBvdmVybGF5RWw7XG59XG5cblxuLyoqXG4gKiBUdXJuIG9uIG92ZXJsYXkuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE92ZXJsYXkgb3B0aW9ucy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRFbGVtZW50IC0gVGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIG92ZXJsYXlPbihvcHRpb25zLCBjaGlsZEVsZW1lbnQpIHtcbiAgdmFyIGJvZHlFbCA9IGRvY3VtZW50LmJvZHksXG4gICAgICBvdmVybGF5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdmVybGF5SWQpO1xuICAgIFxuICAvLyBhZGQgb3ZlcmxheVxuICB1dGlsLmVuYWJsZVNjcm9sbExvY2soKTtcbiAgLy9qcUxpdGUuYWRkQ2xhc3MoYm9keUVsLCBib2R5Q2xhc3MpO1xuXG4gIGlmICghb3ZlcmxheUVsKSB7XG4gICAgLy8gY3JlYXRlIG92ZXJsYXlFbFxuICAgIG92ZXJsYXlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXlFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgb3ZlcmxheUlkKTtcbiAgICBcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudFxuICAgIGlmIChjaGlsZEVsZW1lbnQpIG92ZXJsYXlFbC5hcHBlbmRDaGlsZChjaGlsZEVsZW1lbnQpO1xuXG4gICAgYm9keUVsLmFwcGVuZENoaWxkKG92ZXJsYXlFbCk7XG4gICAgXG4gIH0gZWxzZSB7XG4gICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGNoaWxkcmVuXG4gICAgd2hpbGUgKG92ZXJsYXlFbC5maXJzdENoaWxkKSBvdmVybGF5RWwucmVtb3ZlQ2hpbGQob3ZlcmxheUVsLmZpcnN0Q2hpbGQpO1xuICAgIFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50XG4gICAgaWYgKGNoaWxkRWxlbWVudCkgb3ZlcmxheUVsLmFwcGVuZENoaWxkKGNoaWxkRWxlbWVudCk7XG4gIH1cblxuICAvLyBpT1MgYnVnZml4XG4gIGlmIChpb3NSZWdleC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAganFMaXRlLmNzcyhvdmVybGF5RWwsICdjdXJzb3InLCAncG9pbnRlcicpO1xuICB9XG5cbiAgLy8gaGFuZGxlIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMua2V5Ym9hcmQpIGFkZEtleXVwSGFuZGxlcigpO1xuICBlbHNlIHJlbW92ZUtleXVwSGFuZGxlcigpO1xuXG4gIGlmIChvcHRpb25zLnN0YXRpYykgcmVtb3ZlQ2xpY2tIYW5kbGVyKG92ZXJsYXlFbCk7XG4gIGVsc2UgYWRkQ2xpY2tIYW5kbGVyKG92ZXJsYXlFbCk7XG5cbiAgLy8gYXR0YWNoIG9wdGlvbnNcbiAgb3ZlcmxheUVsLm11aU9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIHJldHVybiBvdmVybGF5RWw7XG59XG5cblxuLyoqXG4gKiBUdXJuIG9mZiBvdmVybGF5LlxuICovXG5mdW5jdGlvbiBvdmVybGF5T2ZmKCkge1xuICB2YXIgb3ZlcmxheUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3ZlcmxheUlkKSxcbiAgICAgIGNhbGxiYWNrRm47XG5cbiAgaWYgKG92ZXJsYXlFbCkge1xuICAgIC8vIHJlbW92ZSBjaGlsZHJlblxuICAgIHdoaWxlIChvdmVybGF5RWwuZmlyc3RDaGlsZCkgb3ZlcmxheUVsLnJlbW92ZUNoaWxkKG92ZXJsYXlFbC5maXJzdENoaWxkKTtcblxuICAgIC8vIHJlbW92ZSBvdmVybGF5IGVsZW1lbnRcbiAgICBvdmVybGF5RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdmVybGF5RWwpO1xuXG4gICAgLy8gY2FsbGJhY2sgcmVmZXJlbmNlXG4gICAgY2FsbGJhY2tGbiA9IG92ZXJsYXlFbC5tdWlPcHRpb25zLm9uY2xvc2U7XG5cbiAgICAvLyByZW1vdmUgY2xpY2sgaGFuZGxlclxuICAgIHJlbW92ZUNsaWNrSGFuZGxlcihvdmVybGF5RWwpO1xuICB9XG5cbiAgdXRpbC5kaXNhYmxlU2Nyb2xsTG9jaygpO1xuXG4gIC8vIHJlbW92ZSBrZXl1cCBoYW5kbGVyXG4gIHJlbW92ZUtleXVwSGFuZGxlcigpO1xuXG4gIC8vIGV4ZWN1dGUgY2FsbGJhY2tcbiAgaWYgKGNhbGxiYWNrRm4pIGNhbGxiYWNrRm4oKTtcblxuICByZXR1cm4gb3ZlcmxheUVsO1xufVxuXG5cbi8qKlxuICogQWRkIGtleXVwIGhhbmRsZXIuXG4gKi9cbmZ1bmN0aW9uIGFkZEtleXVwSGFuZGxlcigpIHtcbiAganFMaXRlLm9uKGRvY3VtZW50LCAna2V5dXAnLCBvbktleXVwKTtcbn1cblxuXG4vKipcbiAqIFJlbW92ZSBrZXl1cCBoYW5kbGVyLlxuICovXG5mdW5jdGlvbiByZW1vdmVLZXl1cEhhbmRsZXIoKSB7XG4gIGpxTGl0ZS5vZmYoZG9jdW1lbnQsICdrZXl1cCcsIG9uS2V5dXApO1xufVxuXG5cbi8qKlxuICogVGVhcmRvd24gb3ZlcmxheSB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAqL1xuZnVuY3Rpb24gb25LZXl1cChldikge1xuICBpZiAoZXYua2V5Q29kZSA9PT0gMjcpIG92ZXJsYXlPZmYoKTtcbn1cblxuXG4vKipcbiAqIEFkZCBjbGljayBoYW5kbGVyLlxuICovXG5mdW5jdGlvbiBhZGRDbGlja0hhbmRsZXIob3ZlcmxheUVsKSB7XG4gIGpxTGl0ZS5vbihvdmVybGF5RWwsICdjbGljaycsIG9uQ2xpY2spO1xufVxuXG5cbi8qKlxuICogUmVtb3ZlIGNsaWNrIGhhbmRsZXIuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsaWNrSGFuZGxlcihvdmVybGF5RWwpIHtcbiAganFMaXRlLm9mZihvdmVybGF5RWwsICdjbGljaycsIG9uQ2xpY2spO1xufVxuXG5cbi8qKlxuICogVGVhcmRvd24gb3ZlcmxheSB3aGVuIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gKi9cbmZ1bmN0aW9uIG9uQ2xpY2soZXYpIHtcbiAgaWYgKGV2LnRhcmdldC5pZCA9PT0gb3ZlcmxheUlkKSBvdmVybGF5T2ZmKCk7XG59XG5cblxuLyoqIERlZmluZSBtb2R1bGUgQVBJICovXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJsYXlGbjtcbiIsIi8qKlxuICogTVVJIE5QTSBwYWNrYWdlXG4gKiBAbW9kdWxlIHBrZy9pbmRleC5qc1xuICovXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG92ZXJsYXk6IHJlcXVpcmUoJy4vbGliL2pzL292ZXJsYXknKVxufVxuIl19
