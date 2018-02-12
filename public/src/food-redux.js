(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.FoodMeRedux = global.FoodMeRedux || {})));
}(this, (function (exports) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var _Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root$2;

if (typeof self !== 'undefined') {
  root$2 = self;
} else if (typeof window !== 'undefined') {
  root$2 = window;
} else if (typeof global !== 'undefined') {
  root$2 = global;
} else if (typeof module !== 'undefined') {
  root$2 = module;
} else {
  root$2 = Function('return this')();
}

var result = symbolObservablePonyfill(root$2);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose$1() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose$1.apply(undefined, chain)(store.dispatch);

      return _extends$1({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_"development" !== 'production', warn the user.
*/
function isCrushed() {}

if ("production" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_"development" === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

var composeWithDevTools = _typeof(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
	if (arguments.length === 0) return undefined;
	if (_typeof(arguments[0]) === 'object') return compose;
	return compose.apply(null, arguments);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module) {
  /* globals define */

  (function (root, factory) {
    'use strict';

    /* istanbul ignore next:cant test */

    if ('object' === 'object' && 'object' === 'object') {
      module.exports = factory();
    } else if (typeof undefined === 'function' && undefined.amd) {
      // AMD. Register as an anonymous module.
      undefined([], factory);
    } else {
      // Browser globals
      root.objectPath = factory();
    }
  })(commonjsGlobal, function () {
    'use strict';

    var _hasOwnProperty = Object.prototype.hasOwnProperty;

    function isEmpty(value) {
      if (!value) {
        return true;
      }
      if (isArray(value) && value.length === 0) {
        return true;
      } else if (!isString(value)) {
        for (var i in value) {
          if (_hasOwnProperty.call(value, i)) {
            return false;
          }
        }
        return true;
      }
      return false;
    }

    function isNumber(value) {
      return typeof value === 'number';
    }

    function isString(obj) {
      return typeof obj === 'string';
    }

    function isArray(obj) {
      return Array.isArray(obj);
    }

    function getKey(key) {
      var intKey = parseInt(key);
      if (intKey.toString() === key) {
        return intKey;
      }
      return key;
    }

    var objectPathImmutable = function objectPathImmutable(src) {
      var dest = src;
      var committed = false;

      var transaction = Object.keys(api).reduce(function (proxy, prop) {
        /* istanbul ignore else */
        if (typeof api[prop] === 'function') {
          proxy[prop] = function () {
            var args = [dest, src].concat(Array.prototype.slice.call(arguments));

            if (committed) {
              throw new Error('Cannot call ' + prop + ' after `value`');
            }

            dest = api[prop].apply(null, args);

            return transaction;
          };
        }

        return proxy;
      }, {});

      transaction.value = function () {
        committed = true;
        return dest;
      };

      return transaction;
    };

    function clone(obj, createIfEmpty, assumeArray) {
      if (obj == null) {
        if (createIfEmpty) {
          if (assumeArray) {
            return [];
          }

          return {};
        }

        return obj;
      } else if (isArray(obj)) {
        return obj.slice();
      }

      var res = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key];
        }
      }

      return res;
    }

    function changeImmutable(dest, src, path, changeCallback) {
      if (isNumber(path)) {
        path = [path];
      }
      if (isEmpty(path)) {
        return src;
      }
      if (isString(path)) {
        return changeImmutable(dest, src, path.split('.').map(getKey), changeCallback);
      }
      var currentPath = path[0];

      if (!dest || dest === src) {
        dest = clone(src, true, isNumber(currentPath));
      }

      if (path.length === 1) {
        return changeCallback(dest, currentPath);
      }

      if (src != null) {
        src = src[currentPath];
      }

      dest[currentPath] = changeImmutable(dest[currentPath], src, path.slice(1), changeCallback);

      return dest;
    }

    var api = {};
    api.set = function set(dest, src, path, value) {
      return changeImmutable(dest, src, path, function (clonedObj, finalPath) {
        clonedObj[finalPath] = value;
        return clonedObj;
      });
    };

    api.push = function push(dest, src, path /*, values */) {
      var values = Array.prototype.slice.call(arguments, 3);
      return changeImmutable(dest, src, path, function (clonedObj, finalPath) {
        if (!isArray(clonedObj[finalPath])) {
          clonedObj[finalPath] = values;
        } else {
          clonedObj[finalPath] = clonedObj[finalPath].concat(values);
        }
        return clonedObj;
      });
    };

    api.insert = function insert(dest, src, path, value, at) {
      at = ~~at;
      return changeImmutable(dest, src, path, function (clonedObj, finalPath) {
        var arr = clonedObj[finalPath];
        if (!isArray(arr)) {
          if (arr != null && typeof arr !== 'undefined') {
            throw new Error('Expected ' + path + 'to be an array. Instead got ' + (typeof path === 'undefined' ? 'undefined' : _typeof(path)));
          }
          arr = [];
        }

        var first = arr.slice(0, at);
        first.push(value);
        clonedObj[finalPath] = first.concat(arr.slice(at));
        return clonedObj;
      });
    };

    api.del = function del(dest, src, path, value, at) {
      return changeImmutable(dest, src, path, function (clonedObj, finalPath) {
        if (Array.isArray(clonedObj)) {
          if (clonedObj[finalPath] !== undefined) {
            clonedObj.splice(finalPath, 1);
          }
        } else {
          if (clonedObj.hasOwnProperty(finalPath)) {
            delete clonedObj[finalPath];
          }
        }
        return clonedObj;
      });
    };

    api.assign = function assign(dest, src, path, source) {
      return changeImmutable(dest, src, path, function (clonedObj, finalPath) {
        source = Object(source);
        var target = clone(clonedObj[finalPath], true);

        for (var key in source) {
          if (_hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }

        clonedObj[finalPath] = target;
        return clonedObj;
      });
    };

    return Object.keys(api).reduce(function (objectPathImmutable, method) {
      objectPathImmutable[method] = api[method].bind(null, null);

      return objectPathImmutable;
    }, objectPathImmutable);
  });
});

var initialState = {
    name: 'users',
    ready: false,
    items: {},

    dictionary: {}
};

function staff() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    if (action.name !== state.name) return state;
    // console.log("#staff", action)
    switch (action.type) {

        case 'SET_COLLECTION':
            {
                var collection = action.items;

                return _extends({}, state, {
                    items: _extends({}, collection)
                });
            }
        case 'COLLECTION_ADDED':
            {
                var path = 'items.' + action.id;
                return index.set(state, path, _.extend({ _id: action.id }, action.fields));
            }
        case 'COLLECTION_REMOVED':
            {
                var _path = 'items.' + action.id;
                return index.del(state, _path);
            }
        case 'COLLECTION_CHANGED':
            {
                var _path2 = 'items.' + action.id;
                return index.assign(state, _path2, action.fields);
            }
        case 'SUBSCRIPTION_READY':
            {
                return Object.assign({}, state, { ready: action.payload.ready });
            }
        default:
            return state;
    }
}

var initialState$1 = {
    name: 'orders',
    ready: false,
    active: false,

    act1: "wow",
    act2: 'wow2',
    items: {},

    dictionary: {}
};

function orders() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
    var action = arguments[1];


    if (action.name !== 'orders') return state;
    // console.log("#orders", action)
    switch (action.type) {

        case 'TEST_ACTIVE':
            {
                return _extends({}, state, {
                    active: action.active
                });
            }

        case 'COLLECTION_ADDED':
            {
                var path = 'items.' + action.id;
                return index.set(state, path, _.extend({ _id: action.id }, action.fields));
            }
        case 'COLLECTION_REMOVED':
            {
                var _path = 'items.' + action.id;
                return index.del(state, _path);
            }
        case 'COLLECTION_CHANGED':
            {
                var _path2 = 'items.' + action.id;
                return index.assign(state, _path2, action.fields);
            }
        case 'SUBSCRIPTION_READY':
            {
                return Object.assign({}, state, { ready: action.payload.ready });
            }
        default:
            return state;
    }
}

var initialState$2 = {
    name: 'products',
    ready: false,
    items: {},

    dictionary: {}
};

function products() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$2;
    var action = arguments[1];


    if (action.name !== 'products') return state;
    // console.log("#products", action)
    switch (action.type) {

        case 'SET_COLLECTION':
            {
                return _extends({}, state, {
                    items: _extends({}, state.items, action.items)
                });
            }
        case 'COLLECTION_ADDED':
            {
                var path = 'items.' + action.id;
                return index.set(state, path, _.extend({ _id: action.id }, action.fields));
            }
        case 'COLLECTION_REMOVED':
            {
                var _path = 'items.' + action.id;
                return index.del(state, _path);
            }
        case 'COLLECTION_CHANGED':
            {
                var _path2 = 'items.' + action.id;
                return index.assign(state, _path2, action.fields);
            }
        case 'SUBSCRIPTION_READY':
            {
                return Object.assign({}, state, { ready: action.payload.ready });
            }
        default:
            return state;
    }
}

var initialState$3 = {
    name: 'additions',
    ready: false,
    items: {},

    dictionary: {}
};

function additions() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$3;
    var action = arguments[1];


    if (action.name !== 'additions') return state;
    // console.log("#additions", action)
    switch (action.type) {

        case 'COLLECTION_ADDED':
            {
                var path = 'items.' + action.id;
                return index.set(state, path, _.extend({ _id: action.id }, action.fields));
            }
        case 'COLLECTION_REMOVED':
            {
                var _path = 'items.' + action.id;
                return index.del(state, _path);
            }
        case 'COLLECTION_CHANGED':
            {
                var _path2 = 'items.' + action.id;
                return index.assign(state, _path2, action.fields);
            }
        case 'SUBSCRIPTION_READY':
            {
                return Object.assign({}, state, { ready: action.payload.ready });
            }
        default:
            return state;
    }
}

var initialState$4 = {
    name: 'categories',
    ready: false,
    items: {},

    dictionary: {}
};

function categories() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$4;
    var action = arguments[1];


    if (action.name !== 'categories') return state;
    // console.log("#categories", action)
    switch (action.type) {

        case 'SET_COLLECTION':
            {

                return _extends({}, state, {
                    items: _extends({}, state.items, action.items)
                });
            }

        case 'COLLECTION_ADDED':
            {
                return _extends({}, state, {
                    items: _extends({}, state.items, defineProperty({}, action.id, _.extend({ _id: action.id }, action.fields)))
                });
            }
        case 'COLLECTION_REMOVED':
            {
                var path = 'items.' + action.id;
                return index.del(state, path);
            }
        case 'COLLECTION_CHANGED':
            {
                var _path = 'items.' + action.id;
                return index.assign(state, _path, action.fields);
            }
        case 'SUBSCRIPTION_READY':
            {
                return Object.assign({}, state, { ready: action.payload.ready });
            }
        default:
            return state;
    }
}

var reducer = combineReducers({
	staff: staff,
	orders: orders,
	products: products,
	additions: additions,
	categories: categories
});

var GEO_START_LOAD_LIST = "GEO_START_LOAD_LIST";

var GEO_RESET = "GEO_RESET";

var types = Object.freeze({
	GEO_START_LOAD_LIST: GEO_START_LOAD_LIST,
	GEO_RESET: GEO_RESET
});

// import createLogger from 'redux-logger'
// import { createLogger } from 'redux-logger'

// const logger = createLogger({
// ...options
// {
// 	predicate, // if specified this function will be called before each action is processed with this middleware.
// 	collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
// 	duration = false: Boolean, // print the duration of each action?
// 	timestamp = true: Boolean, // print the timestamp with each action?

// 	level = 'log': 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
// 	colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
// 	titleFormatter, // Format the title used when logging actions.

// 	stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
// 	actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
// 	errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.

// 	logger = console: LoggerObject, // implementation of the `console` API.
// 	logErrors = true: Boolean, // should the logger catch, log, and re-throw errors?

// 	diff = false: Boolean, // (alpha) show diff between states?
// 	diffPredicate // (alpha) filter function for showing states diff, similar to `predicate`
// }
// });
var middleware = void 0;

if (composeWithDevTools) {
	middleware = composeWithDevTools(applyMiddleware(thunk));
} else {
	middleware = applyMiddleware(thunk);
}

var store = createStore(reducer, middleware);

exports.store = store;
exports.actionsTypes = types;

Object.defineProperty(exports, '__esModule', { value: true });

})));
