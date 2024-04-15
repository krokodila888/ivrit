/*! For license information please see main.c4ee1ea0.js.LICENSE.txt */
!(function () {
  'use strict';
  var n = {
      110: function (n, t, e) {
        var r = e(309),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function c(n) {
          return r.isMemo(n) ? a : l[n.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = a);
        var s = Object.defineProperty,
          u = Object.getOwnPropertyNames,
          p = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          f = Object.getPrototypeOf,
          v = Object.prototype;
        n.exports = function n(t, e, r) {
          if ('string' !== typeof e) {
            if (v) {
              var o = f(e);
              o && o !== v && n(t, o, r);
            }
            var a = u(e);
            p && (a = a.concat(p(e)));
            for (var l = c(t), h = c(e), m = 0; m < a.length; ++m) {
              var w = a[m];
              if (!i[w] && (!r || !r[w]) && (!h || !h[w]) && (!l || !l[w])) {
                var y = d(e, w);
                try {
                  s(t, w, y);
                } catch (g) {}
              }
            }
          }
          return t;
        };
      },
      746: function (n, t) {
        var e = 'function' === typeof Symbol && Symbol.for,
          r = e ? Symbol.for('react.element') : 60103,
          o = e ? Symbol.for('react.portal') : 60106,
          i = e ? Symbol.for('react.fragment') : 60107,
          a = e ? Symbol.for('react.strict_mode') : 60108,
          l = e ? Symbol.for('react.profiler') : 60114,
          c = e ? Symbol.for('react.provider') : 60109,
          s = e ? Symbol.for('react.context') : 60110,
          u = e ? Symbol.for('react.async_mode') : 60111,
          p = e ? Symbol.for('react.concurrent_mode') : 60111,
          d = e ? Symbol.for('react.forward_ref') : 60112,
          f = e ? Symbol.for('react.suspense') : 60113,
          v = e ? Symbol.for('react.suspense_list') : 60120,
          h = e ? Symbol.for('react.memo') : 60115,
          m = e ? Symbol.for('react.lazy') : 60116,
          w = e ? Symbol.for('react.block') : 60121,
          y = e ? Symbol.for('react.fundamental') : 60117,
          g = e ? Symbol.for('react.responder') : 60118,
          b = e ? Symbol.for('react.scope') : 60119;
        function T(n) {
          if ('object' === typeof n && null !== n) {
            var t = n.$$typeof;
            switch (t) {
              case r:
                switch ((n = n.type)) {
                  case u:
                  case p:
                  case i:
                  case l:
                  case a:
                  case f:
                    return n;
                  default:
                    switch ((n = n && n.$$typeof)) {
                      case s:
                      case d:
                      case m:
                      case h:
                      case c:
                        return n;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function z(n) {
          return T(n) === p;
        }
        (t.AsyncMode = u),
          (t.ConcurrentMode = p),
          (t.ContextConsumer = s),
          (t.ContextProvider = c),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = i),
          (t.Lazy = m),
          (t.Memo = h),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = a),
          (t.Suspense = f),
          (t.isAsyncMode = function (n) {
            return z(n) || T(n) === u;
          }),
          (t.isConcurrentMode = z),
          (t.isContextConsumer = function (n) {
            return T(n) === s;
          }),
          (t.isContextProvider = function (n) {
            return T(n) === c;
          }),
          (t.isElement = function (n) {
            return 'object' === typeof n && null !== n && n.$$typeof === r;
          }),
          (t.isForwardRef = function (n) {
            return T(n) === d;
          }),
          (t.isFragment = function (n) {
            return T(n) === i;
          }),
          (t.isLazy = function (n) {
            return T(n) === m;
          }),
          (t.isMemo = function (n) {
            return T(n) === h;
          }),
          (t.isPortal = function (n) {
            return T(n) === o;
          }),
          (t.isProfiler = function (n) {
            return T(n) === l;
          }),
          (t.isStrictMode = function (n) {
            return T(n) === a;
          }),
          (t.isSuspense = function (n) {
            return T(n) === f;
          }),
          (t.isValidElementType = function (n) {
            return (
              'string' === typeof n ||
              'function' === typeof n ||
              n === i ||
              n === p ||
              n === l ||
              n === a ||
              n === f ||
              n === v ||
              ('object' === typeof n &&
                null !== n &&
                (n.$$typeof === m ||
                  n.$$typeof === h ||
                  n.$$typeof === c ||
                  n.$$typeof === s ||
                  n.$$typeof === d ||
                  n.$$typeof === y ||
                  n.$$typeof === g ||
                  n.$$typeof === b ||
                  n.$$typeof === w))
            );
          }),
          (t.typeOf = T);
      },
      309: function (n, t, e) {
        n.exports = e(746);
      },
      463: function (n, t, e) {
        var r = e(791),
          o = e(296);
        function i(n) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + n,
              e = 1;
            e < arguments.length;
            e++
          )
            t += '&args[]=' + encodeURIComponent(arguments[e]);
          return (
            'Minified React error #' +
            n +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var a = new Set(),
          l = {};
        function c(n, t) {
          s(n, t), s(n + 'Capture', t);
        }
        function s(n, t) {
          for (l[n] = t, n = 0; n < t.length; n++) a.add(t[n]);
        }
        var u = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          p = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          v = {};
        function h(n, t, e, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = e),
            (this.propertyName = n),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var m = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (n) {
            m[n] = new h(n, 0, !1, n, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (n) {
            var t = n[0];
            m[t] = new h(t, 1, !1, n[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (n) {
              m[n] = new h(n, 2, !1, n.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (n) {
            m[n] = new h(n, 2, !1, n, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (n) {
              m[n] = new h(n, 3, !1, n.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (n) {
            m[n] = new h(n, 3, !0, n, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (n) {
            m[n] = new h(n, 4, !1, n, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (n) {
            m[n] = new h(n, 6, !1, n, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (n) {
            m[n] = new h(n, 5, !1, n.toLowerCase(), null, !1, !1);
          });
        var w = /[\-:]([a-z])/g;
        function y(n) {
          return n[1].toUpperCase();
        }
        function g(n, t, e, r) {
          var o = m.hasOwnProperty(t) ? m[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (n, t, e, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (n, t, e, r) {
                  if (null !== e && 0 === e.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== e
                          ? !e.acceptsBooleans
                          : 'data-' !== (n = n.toLowerCase().slice(0, 5)) &&
                            'aria-' !== n)
                      );
                    default:
                      return !1;
                  }
                })(n, t, e, r)
              )
                return !0;
              if (r) return !1;
              if (null !== e)
                switch (e.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, e, o, r) && (e = null),
            r || null === o
              ? (function (n) {
                  return (
                    !!p.call(v, n) ||
                    (!p.call(f, n) &&
                      (d.test(n) ? (v[n] = !0) : ((f[n] = !0), !1)))
                  );
                })(t) &&
                (null === e ? n.removeAttribute(t) : n.setAttribute(t, '' + e))
              : o.mustUseProperty
                ? (n[o.propertyName] = null === e ? 3 !== o.type && '' : e)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === e
                    ? n.removeAttribute(t)
                    : ((e =
                        3 === (o = o.type) || (4 === o && !0 === e)
                          ? ''
                          : '' + e),
                      r ? n.setAttributeNS(r, t, e) : n.setAttribute(t, e))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (n) {
            var t = n.replace(w, y);
            m[t] = new h(t, 1, !1, n, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (n) {
              var t = n.replace(w, y);
              m[t] = new h(t, 1, !1, n, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (n) {
            var t = n.replace(w, y);
            m[t] = new h(
              t,
              1,
              !1,
              n,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (n) {
            m[n] = new h(n, 1, !1, n.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new h(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (n) {
            m[n] = new h(n, 1, !1, n.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          T = Symbol.for('react.element'),
          z = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          x = Symbol.for('react.profiler'),
          E = Symbol.for('react.provider'),
          _ = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          N = Symbol.for('react.suspense'),
          O = Symbol.for('react.suspense_list'),
          P = Symbol.for('react.memo'),
          j = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var L = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var A = Symbol.iterator;
        function R(n) {
          return null === n || 'object' !== typeof n
            ? null
            : 'function' === typeof (n = (A && n[A]) || n['@@iterator'])
              ? n
              : null;
        }
        var I,
          F = Object.assign;
        function D(n) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || '';
            }
          return '\n' + I + n;
        }
        var M = !1;
        function V(n, t) {
          if (!n || M) return '';
          M = !0;
          var e = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(n, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                n.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              n();
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var o = s.stack.split('\n'),
                  i = r.stack.split('\n'),
                  a = o.length - 1,
                  l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || o[a] !== i[l])) {
                        var c = '\n' + o[a].replace(' at new ', ' at ');
                        return (
                          n.displayName &&
                            c.includes('<anonymous>') &&
                            (c = c.replace('<anonymous>', n.displayName)),
                          c
                        );
                      }
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (M = !1), (Error.prepareStackTrace = e);
          }
          return (n = n ? n.displayName || n.name : '') ? D(n) : '';
        }
        function U(n) {
          switch (n.tag) {
            case 5:
              return D(n.type);
            case 16:
              return D('Lazy');
            case 13:
              return D('Suspense');
            case 19:
              return D('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (n = V(n.type, !1));
            case 11:
              return (n = V(n.type.render, !1));
            case 1:
              return (n = V(n.type, !0));
            default:
              return '';
          }
        }
        function W(n) {
          if (null == n) return null;
          if ('function' === typeof n) return n.displayName || n.name || null;
          if ('string' === typeof n) return n;
          switch (n) {
            case k:
              return 'Fragment';
            case z:
              return 'Portal';
            case x:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case N:
              return 'Suspense';
            case O:
              return 'SuspenseList';
          }
          if ('object' === typeof n)
            switch (n.$$typeof) {
              case _:
                return (n.displayName || 'Context') + '.Consumer';
              case E:
                return (n._context.displayName || 'Context') + '.Provider';
              case C:
                var t = n.render;
                return (
                  (n = n.displayName) ||
                    (n =
                      '' !== (n = t.displayName || t.name || '')
                        ? 'ForwardRef(' + n + ')'
                        : 'ForwardRef'),
                  n
                );
              case P:
                return null !== (t = n.displayName || null)
                  ? t
                  : W(n.type) || 'Memo';
              case j:
                (t = n._payload), (n = n._init);
                try {
                  return W(n(t));
                } catch (e) {}
            }
          return null;
        }
        function B(n) {
          var t = n.type;
          switch (n.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (n = (n = t.render).displayName || n.name || ''),
                t.displayName ||
                  ('' !== n ? 'ForwardRef(' + n + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return W(t);
            case 8:
              return t === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function H(n) {
          switch (typeof n) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return n;
            default:
              return '';
          }
        }
        function Q(n) {
          var t = n.type;
          return (
            (n = n.nodeName) &&
            'input' === n.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function K(n) {
          n._valueTracker ||
            (n._valueTracker = (function (n) {
              var t = Q(n) ? 'checked' : 'value',
                e = Object.getOwnPropertyDescriptor(n.constructor.prototype, t),
                r = '' + n[t];
              if (
                !n.hasOwnProperty(t) &&
                'undefined' !== typeof e &&
                'function' === typeof e.get &&
                'function' === typeof e.set
              ) {
                var o = e.get,
                  i = e.set;
                return (
                  Object.defineProperty(n, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (n) {
                      (r = '' + n), i.call(this, n);
                    },
                  }),
                  Object.defineProperty(n, t, { enumerable: e.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (n) {
                      r = '' + n;
                    },
                    stopTracking: function () {
                      (n._valueTracker = null), delete n[t];
                    },
                  }
                );
              }
            })(n));
        }
        function X(n) {
          if (!n) return !1;
          var t = n._valueTracker;
          if (!t) return !0;
          var e = t.getValue(),
            r = '';
          return (
            n && (r = Q(n) ? (n.checked ? 'true' : 'false') : n.value),
            (n = r) !== e && (t.setValue(n), !0)
          );
        }
        function Z(n) {
          if (
            'undefined' ===
            typeof (n =
              n || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return n.activeElement || n.body;
          } catch (t) {
            return n.body;
          }
        }
        function q(n, t) {
          var e = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != e ? e : n._wrapperState.initialChecked,
          });
        }
        function J(n, t) {
          var e = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (e = H(null != t.value ? t.value : e)),
            (n._wrapperState = {
              initialChecked: r,
              initialValue: e,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(n, t) {
          null != (t = t.checked) && g(n, 'checked', t, !1);
        }
        function Y(n, t) {
          G(n, t);
          var e = H(t.value),
            r = t.type;
          if (null != e)
            'number' === r
              ? ((0 === e && '' === n.value) || n.value != e) &&
                (n.value = '' + e)
              : n.value !== '' + e && (n.value = '' + e);
          else if ('submit' === r || 'reset' === r)
            return void n.removeAttribute('value');
          t.hasOwnProperty('value')
            ? nn(n, t.type, e)
            : t.hasOwnProperty('defaultValue') &&
              nn(n, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (n.defaultChecked = !!t.defaultChecked);
        }
        function $(n, t, e) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + n._wrapperState.initialValue),
              e || t === n.value || (n.value = t),
              (n.defaultValue = t);
          }
          '' !== (e = n.name) && (n.name = ''),
            (n.defaultChecked = !!n._wrapperState.initialChecked),
            '' !== e && (n.name = e);
        }
        function nn(n, t, e) {
          ('number' === t && Z(n.ownerDocument) === n) ||
            (null == e
              ? (n.defaultValue = '' + n._wrapperState.initialValue)
              : n.defaultValue !== '' + e && (n.defaultValue = '' + e));
        }
        var tn = Array.isArray;
        function en(n, t, e, r) {
          if (((n = n.options), t)) {
            t = {};
            for (var o = 0; o < e.length; o++) t['$' + e[o]] = !0;
            for (e = 0; e < n.length; e++)
              (o = t.hasOwnProperty('$' + n[e].value)),
                n[e].selected !== o && (n[e].selected = o),
                o && r && (n[e].defaultSelected = !0);
          } else {
            for (e = '' + H(e), t = null, o = 0; o < n.length; o++) {
              if (n[o].value === e)
                return (
                  (n[o].selected = !0), void (r && (n[o].defaultSelected = !0))
                );
              null !== t || n[o].disabled || (t = n[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function rn(n, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + n._wrapperState.initialValue,
          });
        }
        function on(n, t) {
          var e = t.value;
          if (null == e) {
            if (((e = t.children), (t = t.defaultValue), null != e)) {
              if (null != t) throw Error(i(92));
              if (tn(e)) {
                if (1 < e.length) throw Error(i(93));
                e = e[0];
              }
              t = e;
            }
            null == t && (t = ''), (e = t);
          }
          n._wrapperState = { initialValue: H(e) };
        }
        function an(n, t) {
          var e = H(t.value),
            r = H(t.defaultValue);
          null != e &&
            ((e = '' + e) !== n.value && (n.value = e),
            null == t.defaultValue &&
              n.defaultValue !== e &&
              (n.defaultValue = e)),
            null != r && (n.defaultValue = '' + r);
        }
        function ln(n) {
          var t = n.textContent;
          t === n._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (n.value = t);
        }
        function cn(n) {
          switch (n) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function sn(n, t) {
          return null == n || 'http://www.w3.org/1999/xhtml' === n
            ? cn(t)
            : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === t
              ? 'http://www.w3.org/1999/xhtml'
              : n;
        }
        var un,
          pn,
          dn =
            ((pn = function (n, t) {
              if (
                'http://www.w3.org/2000/svg' !== n.namespaceURI ||
                'innerHTML' in n
              )
                n.innerHTML = t;
              else {
                for (
                  (un = un || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = un.firstChild;
                  n.firstChild;

                )
                  n.removeChild(n.firstChild);
                for (; t.firstChild; ) n.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (n, t, e, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return pn(n, t);
                  });
                }
              : pn);
        function fn(n, t) {
          if (t) {
            var e = n.firstChild;
            if (e && e === n.lastChild && 3 === e.nodeType)
              return void (e.nodeValue = t);
          }
          n.textContent = t;
        }
        var vn = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          hn = ['Webkit', 'ms', 'Moz', 'O'];
        function mn(n, t, e) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : e ||
                'number' !== typeof t ||
                0 === t ||
                (vn.hasOwnProperty(n) && vn[n])
              ? ('' + t).trim()
              : t + 'px';
        }
        function wn(n, t) {
          for (var e in ((n = n.style), t))
            if (t.hasOwnProperty(e)) {
              var r = 0 === e.indexOf('--'),
                o = mn(e, t[e], r);
              'float' === e && (e = 'cssFloat'),
                r ? n.setProperty(e, o) : (n[e] = o);
            }
        }
        Object.keys(vn).forEach(function (n) {
          hn.forEach(function (t) {
            (t = t + n.charAt(0).toUpperCase() + n.substring(1)),
              (vn[t] = vn[n]);
          });
        });
        var yn = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function gn(n, t) {
          if (t) {
            if (
              yn[n] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, n));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(i(62));
          }
        }
        function bn(n, t) {
          if (-1 === n.indexOf('-')) return 'string' === typeof t.is;
          switch (n) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var Tn = null;
        function zn(n) {
          return (
            (n = n.target || n.srcElement || window).correspondingUseElement &&
              (n = n.correspondingUseElement),
            3 === n.nodeType ? n.parentNode : n
          );
        }
        var kn = null,
          Sn = null,
          xn = null;
        function En(n) {
          if ((n = bo(n))) {
            if ('function' !== typeof kn) throw Error(i(280));
            var t = n.stateNode;
            t && ((t = zo(t)), kn(n.stateNode, n.type, t));
          }
        }
        function _n(n) {
          Sn ? (xn ? xn.push(n) : (xn = [n])) : (Sn = n);
        }
        function Cn() {
          if (Sn) {
            var n = Sn,
              t = xn;
            if (((xn = Sn = null), En(n), t))
              for (n = 0; n < t.length; n++) En(t[n]);
          }
        }
        function Nn(n, t) {
          return n(t);
        }
        function On() {}
        var Pn = !1;
        function jn(n, t, e) {
          if (Pn) return n(t, e);
          Pn = !0;
          try {
            return Nn(n, t, e);
          } finally {
            (Pn = !1), (null !== Sn || null !== xn) && (On(), Cn());
          }
        }
        function Ln(n, t) {
          var e = n.stateNode;
          if (null === e) return null;
          var r = zo(e);
          if (null === r) return null;
          e = r[t];
          n: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (n = n.type) ||
                  'input' === n ||
                  'select' === n ||
                  'textarea' === n
                )),
                (n = !r);
              break n;
            default:
              n = !1;
          }
          if (n) return null;
          if (e && 'function' !== typeof e) throw Error(i(231, t, typeof e));
          return e;
        }
        var An = !1;
        if (u)
          try {
            var Rn = {};
            Object.defineProperty(Rn, 'passive', {
              get: function () {
                An = !0;
              },
            }),
              window.addEventListener('test', Rn, Rn),
              window.removeEventListener('test', Rn, Rn);
          } catch (pn) {
            An = !1;
          }
        function In(n, t, e, r, o, i, a, l, c) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(e, s);
          } catch (u) {
            this.onError(u);
          }
        }
        var Fn = !1,
          Dn = null,
          Mn = !1,
          Vn = null,
          Un = {
            onError: function (n) {
              (Fn = !0), (Dn = n);
            },
          };
        function Wn(n, t, e, r, o, i, a, l, c) {
          (Fn = !1), (Dn = null), In.apply(Un, arguments);
        }
        function Bn(n) {
          var t = n,
            e = n;
          if (n.alternate) for (; t.return; ) t = t.return;
          else {
            n = t;
            do {
              0 !== (4098 & (t = n).flags) && (e = t.return), (n = t.return);
            } while (n);
          }
          return 3 === t.tag ? e : null;
        }
        function Hn(n) {
          if (13 === n.tag) {
            var t = n.memoizedState;
            if (
              (null === t &&
                null !== (n = n.alternate) &&
                (t = n.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Qn(n) {
          if (Bn(n) !== n) throw Error(i(188));
        }
        function Kn(n) {
          return null !==
            (n = (function (n) {
              var t = n.alternate;
              if (!t) {
                if (null === (t = Bn(n))) throw Error(i(188));
                return t !== n ? null : n;
              }
              for (var e = n, r = t; ; ) {
                var o = e.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    e = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === e) return Qn(o), n;
                    if (a === r) return Qn(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (e.return !== r.return) (e = o), (r = a);
                else {
                  for (var l = !1, c = o.child; c; ) {
                    if (c === e) {
                      (l = !0), (e = o), (r = a);
                      break;
                    }
                    if (c === r) {
                      (l = !0), (r = o), (e = a);
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!l) {
                    for (c = a.child; c; ) {
                      if (c === e) {
                        (l = !0), (e = a), (r = o);
                        break;
                      }
                      if (c === r) {
                        (l = !0), (r = a), (e = o);
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (e.alternate !== r) throw Error(i(190));
              }
              if (3 !== e.tag) throw Error(i(188));
              return e.stateNode.current === e ? n : t;
            })(n))
            ? Xn(n)
            : null;
        }
        function Xn(n) {
          if (5 === n.tag || 6 === n.tag) return n;
          for (n = n.child; null !== n; ) {
            var t = Xn(n);
            if (null !== t) return t;
            n = n.sibling;
          }
          return null;
        }
        var Zn = o.unstable_scheduleCallback,
          qn = o.unstable_cancelCallback,
          Jn = o.unstable_shouldYield,
          Gn = o.unstable_requestPaint,
          Yn = o.unstable_now,
          $n = o.unstable_getCurrentPriorityLevel,
          nt = o.unstable_ImmediatePriority,
          tt = o.unstable_UserBlockingPriority,
          et = o.unstable_NormalPriority,
          rt = o.unstable_LowPriority,
          ot = o.unstable_IdlePriority,
          it = null,
          at = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (n) {
                return (n >>>= 0), 0 === n ? 32 : (31 - ((ct(n) / st) | 0)) | 0;
              },
          ct = Math.log,
          st = Math.LN2;
        var ut = 64,
          pt = 4194304;
        function dt(n) {
          switch (n & -n) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & n;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & n;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return n;
          }
        }
        function ft(n, t) {
          var e = n.pendingLanes;
          if (0 === e) return 0;
          var r = 0,
            o = n.suspendedLanes,
            i = n.pingedLanes,
            a = 268435455 & e;
          if (0 !== a) {
            var l = a & ~o;
            0 !== l ? (r = dt(l)) : 0 !== (i &= a) && (r = dt(i));
          } else 0 !== (a = e & ~o) ? (r = dt(a)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & e), 0 !== (t = n.entangledLanes)))
            for (n = n.entanglements, t &= r; 0 < t; )
              (o = 1 << (e = 31 - lt(t))), (r |= n[e]), (t &= ~o);
          return r;
        }
        function vt(n, t) {
          switch (n) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(n) {
          return 0 !== (n = -1073741825 & n.pendingLanes)
            ? n
            : 1073741824 & n
              ? 1073741824
              : 0;
        }
        function mt() {
          var n = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), n;
        }
        function wt(n) {
          for (var t = [], e = 0; 31 > e; e++) t.push(n);
          return t;
        }
        function yt(n, t, e) {
          (n.pendingLanes |= t),
            536870912 !== t && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
            ((n = n.eventTimes)[(t = 31 - lt(t))] = e);
        }
        function gt(n, t) {
          var e = (n.entangledLanes |= t);
          for (n = n.entanglements; e; ) {
            var r = 31 - lt(e),
              o = 1 << r;
            (o & t) | (n[r] & t) && (n[r] |= t), (e &= ~o);
          }
        }
        var bt = 0;
        function Tt(n) {
          return 1 < (n &= -n)
            ? 4 < n
              ? 0 !== (268435455 & n)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var zt,
          kt,
          St,
          xt,
          Et,
          _t = !1,
          Ct = [],
          Nt = null,
          Ot = null,
          Pt = null,
          jt = new Map(),
          Lt = new Map(),
          At = [],
          Rt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function It(n, t) {
          switch (n) {
            case 'focusin':
            case 'focusout':
              Nt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Ot = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Pt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              jt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Lt.delete(t.pointerId);
          }
        }
        function Ft(n, t, e, r, o, i) {
          return null === n || n.nativeEvent !== i
            ? ((n = {
                blockedOn: t,
                domEventName: e,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [o],
              }),
              null !== t && null !== (t = bo(t)) && kt(t),
              n)
            : ((n.eventSystemFlags |= r),
              (t = n.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              n);
        }
        function Dt(n) {
          var t = go(n.target);
          if (null !== t) {
            var e = Bn(t);
            if (null !== e)
              if (13 === (t = e.tag)) {
                if (null !== (t = Hn(e)))
                  return (
                    (n.blockedOn = t),
                    void Et(n.priority, function () {
                      St(e);
                    })
                  );
              } else if (
                3 === t &&
                e.stateNode.current.memoizedState.isDehydrated
              )
                return void (n.blockedOn =
                  3 === e.tag ? e.stateNode.containerInfo : null);
          }
          n.blockedOn = null;
        }
        function Mt(n) {
          if (null !== n.blockedOn) return !1;
          for (var t = n.targetContainers; 0 < t.length; ) {
            var e = Jt(n.domEventName, n.eventSystemFlags, t[0], n.nativeEvent);
            if (null !== e)
              return null !== (t = bo(e)) && kt(t), (n.blockedOn = e), !1;
            var r = new (e = n.nativeEvent).constructor(e.type, e);
            (Tn = r), e.target.dispatchEvent(r), (Tn = null), t.shift();
          }
          return !0;
        }
        function Vt(n, t, e) {
          Mt(n) && e.delete(t);
        }
        function Ut() {
          (_t = !1),
            null !== Nt && Mt(Nt) && (Nt = null),
            null !== Ot && Mt(Ot) && (Ot = null),
            null !== Pt && Mt(Pt) && (Pt = null),
            jt.forEach(Vt),
            Lt.forEach(Vt);
        }
        function Wt(n, t) {
          n.blockedOn === t &&
            ((n.blockedOn = null),
            _t ||
              ((_t = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ut)));
        }
        function Bt(n) {
          function t(t) {
            return Wt(t, n);
          }
          if (0 < Ct.length) {
            Wt(Ct[0], n);
            for (var e = 1; e < Ct.length; e++) {
              var r = Ct[e];
              r.blockedOn === n && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Wt(Nt, n),
              null !== Ot && Wt(Ot, n),
              null !== Pt && Wt(Pt, n),
              jt.forEach(t),
              Lt.forEach(t),
              e = 0;
            e < At.length;
            e++
          )
            (r = At[e]).blockedOn === n && (r.blockedOn = null);
          for (; 0 < At.length && null === (e = At[0]).blockedOn; )
            Dt(e), null === e.blockedOn && At.shift();
        }
        var Ht = b.ReactCurrentBatchConfig,
          Qt = !0;
        function Kt(n, t, e, r) {
          var o = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Zt(n, t, e, r);
          } finally {
            (bt = o), (Ht.transition = i);
          }
        }
        function Xt(n, t, e, r) {
          var o = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Zt(n, t, e, r);
          } finally {
            (bt = o), (Ht.transition = i);
          }
        }
        function Zt(n, t, e, r) {
          if (Qt) {
            var o = Jt(n, t, e, r);
            if (null === o) Hr(n, t, r, qt, e), It(n, r);
            else if (
              (function (n, t, e, r, o) {
                switch (t) {
                  case 'focusin':
                    return (Nt = Ft(Nt, n, t, e, r, o)), !0;
                  case 'dragenter':
                    return (Ot = Ft(Ot, n, t, e, r, o)), !0;
                  case 'mouseover':
                    return (Pt = Ft(Pt, n, t, e, r, o)), !0;
                  case 'pointerover':
                    var i = o.pointerId;
                    return jt.set(i, Ft(jt.get(i) || null, n, t, e, r, o)), !0;
                  case 'gotpointercapture':
                    return (
                      (i = o.pointerId),
                      Lt.set(i, Ft(Lt.get(i) || null, n, t, e, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, n, t, e, r)
            )
              r.stopPropagation();
            else if ((It(n, r), 4 & t && -1 < Rt.indexOf(n))) {
              for (; null !== o; ) {
                var i = bo(o);
                if (
                  (null !== i && zt(i),
                  null === (i = Jt(n, t, e, r)) && Hr(n, t, r, qt, e),
                  i === o)
                )
                  break;
                o = i;
              }
              null !== o && r.stopPropagation();
            } else Hr(n, t, r, null, e);
          }
        }
        var qt = null;
        function Jt(n, t, e, r) {
          if (((qt = null), null !== (n = go((n = zn(r))))))
            if (null === (t = Bn(n))) n = null;
            else if (13 === (e = t.tag)) {
              if (null !== (n = Hn(t))) return n;
              n = null;
            } else if (3 === e) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              n = null;
            } else t !== n && (n = null);
          return (qt = n), null;
        }
        function Gt(n) {
          switch (n) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch ($n()) {
                case nt:
                  return 1;
                case tt:
                  return 4;
                case et:
                case rt:
                  return 16;
                case ot:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          $t = null,
          ne = null;
        function te() {
          if (ne) return ne;
          var n,
            t,
            e = $t,
            r = e.length,
            o = 'value' in Yt ? Yt.value : Yt.textContent,
            i = o.length;
          for (n = 0; n < r && e[n] === o[n]; n++);
          var a = r - n;
          for (t = 1; t <= a && e[r - t] === o[i - t]; t++);
          return (ne = o.slice(n, 1 < t ? 1 - t : void 0));
        }
        function ee(n) {
          var t = n.keyCode;
          return (
            'charCode' in n
              ? 0 === (n = n.charCode) && 13 === t && (n = 13)
              : (n = t),
            10 === n && (n = 13),
            32 <= n || 13 === n ? n : 0
          );
        }
        function re() {
          return !0;
        }
        function oe() {
          return !1;
        }
        function ie(n) {
          function t(t, e, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = e),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            n))
              n.hasOwnProperty(a) && ((t = n[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? re
                : oe),
              (this.isPropagationStopped = oe),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                  (n.preventDefault
                    ? n.preventDefault()
                    : 'unknown' !== typeof n.returnValue &&
                      (n.returnValue = !1),
                  (this.isDefaultPrevented = re));
              },
              stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                  (n.stopPropagation
                    ? n.stopPropagation()
                    : 'unknown' !== typeof n.cancelBubble &&
                      (n.cancelBubble = !0),
                  (this.isPropagationStopped = re));
              },
              persist: function () {},
              isPersistent: re,
            }),
            t
          );
        }
        var ae,
          le,
          ce,
          se = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (n) {
              return n.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ue = ie(se),
          pe = F({}, se, { view: 0, detail: 0 }),
          de = ie(pe),
          fe = F({}, pe, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: xe,
            button: 0,
            buttons: 0,
            relatedTarget: function (n) {
              return void 0 === n.relatedTarget
                ? n.fromElement === n.srcElement
                  ? n.toElement
                  : n.fromElement
                : n.relatedTarget;
            },
            movementX: function (n) {
              return 'movementX' in n
                ? n.movementX
                : (n !== ce &&
                    (ce && 'mousemove' === n.type
                      ? ((ae = n.screenX - ce.screenX),
                        (le = n.screenY - ce.screenY))
                      : (le = ae = 0),
                    (ce = n)),
                  ae);
            },
            movementY: function (n) {
              return 'movementY' in n ? n.movementY : le;
            },
          }),
          ve = ie(fe),
          he = ie(F({}, fe, { dataTransfer: 0 })),
          me = ie(F({}, pe, { relatedTarget: 0 })),
          we = ie(
            F({}, se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          ye = F({}, se, {
            clipboardData: function (n) {
              return 'clipboardData' in n
                ? n.clipboardData
                : window.clipboardData;
            },
          }),
          ge = ie(ye),
          be = ie(F({}, se, { data: 0 })),
          Te = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          ze = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          ke = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function Se(n) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(n)
            : !!(n = ke[n]) && !!t[n];
        }
        function xe() {
          return Se;
        }
        var Ee = F({}, pe, {
            key: function (n) {
              if (n.key) {
                var t = Te[n.key] || n.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === n.type
                ? 13 === (n = ee(n))
                  ? 'Enter'
                  : String.fromCharCode(n)
                : 'keydown' === n.type || 'keyup' === n.type
                  ? ze[n.keyCode] || 'Unidentified'
                  : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xe,
            charCode: function (n) {
              return 'keypress' === n.type ? ee(n) : 0;
            },
            keyCode: function (n) {
              return 'keydown' === n.type || 'keyup' === n.type ? n.keyCode : 0;
            },
            which: function (n) {
              return 'keypress' === n.type
                ? ee(n)
                : 'keydown' === n.type || 'keyup' === n.type
                  ? n.keyCode
                  : 0;
            },
          }),
          _e = ie(Ee),
          Ce = ie(
            F({}, fe, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Ne = ie(
            F({}, pe, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xe,
            })
          ),
          Oe = ie(
            F({}, se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pe = F({}, fe, {
            deltaX: function (n) {
              return 'deltaX' in n
                ? n.deltaX
                : 'wheelDeltaX' in n
                  ? -n.wheelDeltaX
                  : 0;
            },
            deltaY: function (n) {
              return 'deltaY' in n
                ? n.deltaY
                : 'wheelDeltaY' in n
                  ? -n.wheelDeltaY
                  : 'wheelDelta' in n
                    ? -n.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          je = ie(Pe),
          Le = [9, 13, 27, 32],
          Ae = u && 'CompositionEvent' in window,
          Re = null;
        u && 'documentMode' in document && (Re = document.documentMode);
        var Ie = u && 'TextEvent' in window && !Re,
          Fe = u && (!Ae || (Re && 8 < Re && 11 >= Re)),
          De = String.fromCharCode(32),
          Me = !1;
        function Ve(n, t) {
          switch (n) {
            case 'keyup':
              return -1 !== Le.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Ue(n) {
          return 'object' === typeof (n = n.detail) && 'data' in n
            ? n.data
            : null;
        }
        var We = !1;
        var Be = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function He(n) {
          var t = n && n.nodeName && n.nodeName.toLowerCase();
          return 'input' === t ? !!Be[n.type] : 'textarea' === t;
        }
        function Qe(n, t, e, r) {
          _n(r),
            0 < (t = Kr(t, 'onChange')).length &&
              ((e = new ue('onChange', 'change', null, e, r)),
              n.push({ event: e, listeners: t }));
        }
        var Ke = null,
          Xe = null;
        function Ze(n) {
          Dr(n, 0);
        }
        function qe(n) {
          if (X(To(n))) return n;
        }
        function Je(n, t) {
          if ('change' === n) return t;
        }
        var Ge = !1;
        if (u) {
          var Ye;
          if (u) {
            var $e = 'oninput' in document;
            if (!$e) {
              var nr = document.createElement('div');
              nr.setAttribute('oninput', 'return;'),
                ($e = 'function' === typeof nr.oninput);
            }
            Ye = $e;
          } else Ye = !1;
          Ge = Ye && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Ke && (Ke.detachEvent('onpropertychange', er), (Xe = Ke = null));
        }
        function er(n) {
          if ('value' === n.propertyName && qe(Xe)) {
            var t = [];
            Qe(t, Xe, n, zn(n)), jn(Ze, t);
          }
        }
        function rr(n, t, e) {
          'focusin' === n
            ? (tr(), (Xe = e), (Ke = t).attachEvent('onpropertychange', er))
            : 'focusout' === n && tr();
        }
        function or(n) {
          if ('selectionchange' === n || 'keyup' === n || 'keydown' === n)
            return qe(Xe);
        }
        function ir(n, t) {
          if ('click' === n) return qe(t);
        }
        function ar(n, t) {
          if ('input' === n || 'change' === n) return qe(t);
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (n, t) {
                return (
                  (n === t && (0 !== n || 1 / n === 1 / t)) ||
                  (n !== n && t !== t)
                );
              };
        function cr(n, t) {
          if (lr(n, t)) return !0;
          if (
            'object' !== typeof n ||
            null === n ||
            'object' !== typeof t ||
            null === t
          )
            return !1;
          var e = Object.keys(n),
            r = Object.keys(t);
          if (e.length !== r.length) return !1;
          for (r = 0; r < e.length; r++) {
            var o = e[r];
            if (!p.call(t, o) || !lr(n[o], t[o])) return !1;
          }
          return !0;
        }
        function sr(n) {
          for (; n && n.firstChild; ) n = n.firstChild;
          return n;
        }
        function ur(n, t) {
          var e,
            r = sr(n);
          for (n = 0; r; ) {
            if (3 === r.nodeType) {
              if (((e = n + r.textContent.length), n <= t && e >= t))
                return { node: r, offset: t - n };
              n = e;
            }
            n: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break n;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function pr(n, t) {
          return (
            !(!n || !t) &&
            (n === t ||
              ((!n || 3 !== n.nodeType) &&
                (t && 3 === t.nodeType
                  ? pr(n, t.parentNode)
                  : 'contains' in n
                    ? n.contains(t)
                    : !!n.compareDocumentPosition &&
                      !!(16 & n.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var n = window, t = Z(); t instanceof n.HTMLIFrameElement; ) {
            try {
              var e = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              e = !1;
            }
            if (!e) break;
            t = Z((n = t.contentWindow).document);
          }
          return t;
        }
        function fr(n) {
          var t = n && n.nodeName && n.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === n.type ||
                'search' === n.type ||
                'tel' === n.type ||
                'url' === n.type ||
                'password' === n.type)) ||
              'textarea' === t ||
              'true' === n.contentEditable)
          );
        }
        function vr(n) {
          var t = dr(),
            e = n.focusedElem,
            r = n.selectionRange;
          if (
            t !== e &&
            e &&
            e.ownerDocument &&
            pr(e.ownerDocument.documentElement, e)
          ) {
            if (null !== r && fr(e))
              if (
                ((t = r.start),
                void 0 === (n = r.end) && (n = t),
                'selectionStart' in e)
              )
                (e.selectionStart = t),
                  (e.selectionEnd = Math.min(n, e.value.length));
              else if (
                (n =
                  ((t = e.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var o = e.textContent.length,
                  i = Math.min(r.start, o);
                (r = void 0 === r.end ? i : Math.min(r.end, o)),
                  !n.extend && i > r && ((o = r), (r = i), (i = o)),
                  (o = ur(e, i));
                var a = ur(e, r);
                o &&
                  a &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== o.node ||
                    n.anchorOffset !== o.offset ||
                    n.focusNode !== a.node ||
                    n.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  n.removeAllRanges(),
                  i > r
                    ? (n.addRange(t), n.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), n.addRange(t)));
              }
            for (t = [], n = e; (n = n.parentNode); )
              1 === n.nodeType &&
                t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for (
              'function' === typeof e.focus && e.focus(), e = 0;
              e < t.length;
              e++
            )
              ((n = t[e]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var hr = u && 'documentMode' in document && 11 >= document.documentMode,
          mr = null,
          wr = null,
          yr = null,
          gr = !1;
        function br(n, t, e) {
          var r =
            e.window === e
              ? e.document
              : 9 === e.nodeType
                ? e
                : e.ownerDocument;
          gr ||
            null == mr ||
            mr !== Z(r) ||
            ('selectionStart' in (r = mr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && cr(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(wr, 'onSelect')).length &&
                ((t = new ue('onSelect', 'select', null, t, e)),
                n.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function Tr(n, t) {
          var e = {};
          return (
            (e[n.toLowerCase()] = t.toLowerCase()),
            (e['Webkit' + n] = 'webkit' + t),
            (e['Moz' + n] = 'moz' + t),
            e
          );
        }
        var zr = {
            animationend: Tr('Animation', 'AnimationEnd'),
            animationiteration: Tr('Animation', 'AnimationIteration'),
            animationstart: Tr('Animation', 'AnimationStart'),
            transitionend: Tr('Transition', 'TransitionEnd'),
          },
          kr = {},
          Sr = {};
        function xr(n) {
          if (kr[n]) return kr[n];
          if (!zr[n]) return n;
          var t,
            e = zr[n];
          for (t in e)
            if (e.hasOwnProperty(t) && t in Sr) return (kr[n] = e[t]);
          return n;
        }
        u &&
          ((Sr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete zr.animationend.animation,
            delete zr.animationiteration.animation,
            delete zr.animationstart.animation),
          'TransitionEvent' in window || delete zr.transitionend.transition);
        var Er = xr('animationend'),
          _r = xr('animationiteration'),
          Cr = xr('animationstart'),
          Nr = xr('transitionend'),
          Or = new Map(),
          Pr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function jr(n, t) {
          Or.set(n, t), c(t, [n]);
        }
        for (var Lr = 0; Lr < Pr.length; Lr++) {
          var Ar = Pr[Lr];
          jr(Ar.toLowerCase(), 'on' + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        jr(Er, 'onAnimationEnd'),
          jr(_r, 'onAnimationIteration'),
          jr(Cr, 'onAnimationStart'),
          jr('dblclick', 'onDoubleClick'),
          jr('focusin', 'onFocus'),
          jr('focusout', 'onBlur'),
          jr(Nr, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          c(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          c(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          c('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          c(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          c(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          c(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Rr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Ir = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Rr)
          );
        function Fr(n, t, e) {
          var r = n.type || 'unknown-event';
          (n.currentTarget = e),
            (function (n, t, e, r, o, a, l, c, s) {
              if ((Wn.apply(this, arguments), Fn)) {
                if (!Fn) throw Error(i(198));
                var u = Dn;
                (Fn = !1), (Dn = null), Mn || ((Mn = !0), (Vn = u));
              }
            })(r, t, void 0, n),
            (n.currentTarget = null);
        }
        function Dr(n, t) {
          t = 0 !== (4 & t);
          for (var e = 0; e < n.length; e++) {
            var r = n[e],
              o = r.event;
            r = r.listeners;
            n: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    c = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), c !== i && o.isPropagationStopped()))
                    break n;
                  Fr(o, l, s), (i = c);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((c = (l = r[a]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    c !== i && o.isPropagationStopped())
                  )
                    break n;
                  Fr(o, l, s), (i = c);
                }
            }
          }
          if (Mn) throw ((n = Vn), (Mn = !1), (Vn = null), n);
        }
        function Mr(n, t) {
          var e = t[mo];
          void 0 === e && (e = t[mo] = new Set());
          var r = n + '__bubble';
          e.has(r) || (Br(t, n, 2, !1), e.add(r));
        }
        function Vr(n, t, e) {
          var r = 0;
          t && (r |= 4), Br(e, n, r, t);
        }
        var Ur = '_reactListening' + Math.random().toString(36).slice(2);
        function Wr(n) {
          if (!n[Ur]) {
            (n[Ur] = !0),
              a.forEach(function (t) {
                'selectionchange' !== t &&
                  (Ir.has(t) || Vr(t, !1, n), Vr(t, !0, n));
              });
            var t = 9 === n.nodeType ? n : n.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Vr('selectionchange', !1, t));
          }
        }
        function Br(n, t, e, r) {
          switch (Gt(t)) {
            case 1:
              var o = Kt;
              break;
            case 4:
              o = Xt;
              break;
            default:
              o = Zt;
          }
          (e = o.bind(null, t, e, n)),
            (o = void 0),
            !An ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? n.addEventListener(t, e, { capture: !0, passive: o })
                : n.addEventListener(t, e, !0)
              : void 0 !== o
                ? n.addEventListener(t, e, { passive: o })
                : n.addEventListener(t, e, !1);
        }
        function Hr(n, t, e, r, o) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            n: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var c = a.tag;
                    if (
                      (3 === c || 4 === c) &&
                      ((c = a.stateNode.containerInfo) === o ||
                        (8 === c.nodeType && c.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = go(l))) return;
                  if (5 === (c = a.tag) || 6 === c) {
                    r = i = a;
                    continue n;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          jn(function () {
            var r = i,
              o = zn(e),
              a = [];
            n: {
              var l = Or.get(n);
              if (void 0 !== l) {
                var c = ue,
                  s = n;
                switch (n) {
                  case 'keypress':
                    if (0 === ee(e)) break n;
                  case 'keydown':
                  case 'keyup':
                    c = _e;
                    break;
                  case 'focusin':
                    (s = 'focus'), (c = me);
                    break;
                  case 'focusout':
                    (s = 'blur'), (c = me);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    c = me;
                    break;
                  case 'click':
                    if (2 === e.button) break n;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    c = ve;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    c = he;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    c = Ne;
                    break;
                  case Er:
                  case _r:
                  case Cr:
                    c = we;
                    break;
                  case Nr:
                    c = Oe;
                    break;
                  case 'scroll':
                    c = de;
                    break;
                  case 'wheel':
                    c = je;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    c = ge;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    c = Ce;
                }
                var u = 0 !== (4 & t),
                  p = !u && 'scroll' === n,
                  d = u ? (null !== l ? l + 'Capture' : null) : l;
                u = [];
                for (var f, v = r; null !== v; ) {
                  var h = (f = v).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== h &&
                      ((f = h),
                      null !== d &&
                        null != (h = Ln(v, d)) &&
                        u.push(Qr(v, h, f))),
                    p)
                  )
                    break;
                  v = v.return;
                }
                0 < u.length &&
                  ((l = new c(l, s, null, e, o)),
                  a.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((c = 'mouseout' === n || 'pointerout' === n),
                (!(l = 'mouseover' === n || 'pointerover' === n) ||
                  e === Tn ||
                  !(s = e.relatedTarget || e.fromElement) ||
                  (!go(s) && !s[ho])) &&
                  (c || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  c
                    ? ((c = r),
                      null !==
                        (s = (s = e.relatedTarget || e.toElement)
                          ? go(s)
                          : null) &&
                        (s !== (p = Bn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((c = null), (s = r)),
                  c !== s))
              ) {
                if (
                  ((u = ve),
                  (h = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (v = 'mouse'),
                  ('pointerout' !== n && 'pointerover' !== n) ||
                    ((u = Ce),
                    (h = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (v = 'pointer')),
                  (p = null == c ? l : To(c)),
                  (f = null == s ? l : To(s)),
                  ((l = new u(h, v + 'leave', c, e, o)).target = p),
                  (l.relatedTarget = f),
                  (h = null),
                  go(o) === r &&
                    (((u = new u(d, v + 'enter', s, e, o)).target = f),
                    (u.relatedTarget = p),
                    (h = u)),
                  (p = h),
                  c && s)
                )
                  n: {
                    for (d = s, v = 0, f = u = c; f; f = Xr(f)) v++;
                    for (f = 0, h = d; h; h = Xr(h)) f++;
                    for (; 0 < v - f; ) (u = Xr(u)), v--;
                    for (; 0 < f - v; ) (d = Xr(d)), f--;
                    for (; v--; ) {
                      if (u === d || (null !== d && u === d.alternate)) break n;
                      (u = Xr(u)), (d = Xr(d));
                    }
                    u = null;
                  }
                else u = null;
                null !== c && Zr(a, l, c, u, !1),
                  null !== s && null !== p && Zr(a, p, s, u, !0);
              }
              if (
                'select' ===
                  (c =
                    (l = r ? To(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ('input' === c && 'file' === l.type)
              )
                var m = Je;
              else if (He(l))
                if (Ge) m = ar;
                else {
                  m = or;
                  var w = rr;
                }
              else
                (c = l.nodeName) &&
                  'input' === c.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (m = ir);
              switch (
                (m && (m = m(n, r))
                  ? Qe(a, m, e, o)
                  : (w && w(n, l, r),
                    'focusout' === n &&
                      (w = l._wrapperState) &&
                      w.controlled &&
                      'number' === l.type &&
                      nn(l, 'number', l.value)),
                (w = r ? To(r) : window),
                n)
              ) {
                case 'focusin':
                  (He(w) || 'true' === w.contentEditable) &&
                    ((mr = w), (wr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = wr = mr = null;
                  break;
                case 'mousedown':
                  gr = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (gr = !1), br(a, e, o);
                  break;
                case 'selectionchange':
                  if (hr) break;
                case 'keydown':
                case 'keyup':
                  br(a, e, o);
              }
              var y;
              if (Ae)
                n: {
                  switch (n) {
                    case 'compositionstart':
                      var g = 'onCompositionStart';
                      break n;
                    case 'compositionend':
                      g = 'onCompositionEnd';
                      break n;
                    case 'compositionupdate':
                      g = 'onCompositionUpdate';
                      break n;
                  }
                  g = void 0;
                }
              else
                We
                  ? Ve(n, e) && (g = 'onCompositionEnd')
                  : 'keydown' === n &&
                    229 === e.keyCode &&
                    (g = 'onCompositionStart');
              g &&
                (Fe &&
                  'ko' !== e.locale &&
                  (We || 'onCompositionStart' !== g
                    ? 'onCompositionEnd' === g && We && (y = te())
                    : (($t = 'value' in (Yt = o) ? Yt.value : Yt.textContent),
                      (We = !0))),
                0 < (w = Kr(r, g)).length &&
                  ((g = new be(g, n, null, e, o)),
                  a.push({ event: g, listeners: w }),
                  y ? (g.data = y) : null !== (y = Ue(e)) && (g.data = y))),
                (y = Ie
                  ? (function (n, t) {
                      switch (n) {
                        case 'compositionend':
                          return Ue(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Me = !0), De);
                        case 'textInput':
                          return (n = t.data) === De && Me ? null : n;
                        default:
                          return null;
                      }
                    })(n, e)
                  : (function (n, t) {
                      if (We)
                        return 'compositionend' === n || (!Ae && Ve(n, t))
                          ? ((n = te()), (ne = $t = Yt = null), (We = !1), n)
                          : null;
                      switch (n) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Fe && 'ko' !== t.locale ? null : t.data;
                      }
                    })(n, e)) &&
                  0 < (r = Kr(r, 'onBeforeInput')).length &&
                  ((o = new be('onBeforeInput', 'beforeinput', null, e, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Dr(a, t);
          });
        }
        function Qr(n, t, e) {
          return { instance: n, listener: t, currentTarget: e };
        }
        function Kr(n, t) {
          for (var e = t + 'Capture', r = []; null !== n; ) {
            var o = n,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = Ln(n, e)) && r.unshift(Qr(n, i, o)),
              null != (i = Ln(n, t)) && r.push(Qr(n, i, o))),
              (n = n.return);
          }
          return r;
        }
        function Xr(n) {
          if (null === n) return null;
          do {
            n = n.return;
          } while (n && 5 !== n.tag);
          return n || null;
        }
        function Zr(n, t, e, r, o) {
          for (var i = t._reactName, a = []; null !== e && e !== r; ) {
            var l = e,
              c = l.alternate,
              s = l.stateNode;
            if (null !== c && c === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (c = Ln(e, i)) && a.unshift(Qr(e, c, l))
                : o || (null != (c = Ln(e, i)) && a.push(Qr(e, c, l)))),
              (e = e.return);
          }
          0 !== a.length && n.push({ event: t, listeners: a });
        }
        var qr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Gr(n) {
          return ('string' === typeof n ? n : '' + n)
            .replace(qr, '\n')
            .replace(Jr, '');
        }
        function Yr(n, t, e) {
          if (((t = Gr(t)), Gr(n) !== t && e)) throw Error(i(425));
        }
        function $r() {}
        var no = null,
          to = null;
        function eo(n, t) {
          return (
            'textarea' === n ||
            'noscript' === n ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = 'function' === typeof setTimeout ? setTimeout : void 0,
          oo = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          io = 'function' === typeof Promise ? Promise : void 0,
          ao =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof io
                ? function (n) {
                    return io.resolve(null).then(n).catch(lo);
                  }
                : ro;
        function lo(n) {
          setTimeout(function () {
            throw n;
          });
        }
        function co(n, t) {
          var e = t,
            r = 0;
          do {
            var o = e.nextSibling;
            if ((n.removeChild(e), o && 8 === o.nodeType))
              if ('/$' === (e = o.data)) {
                if (0 === r) return n.removeChild(o), void Bt(t);
                r--;
              } else ('$' !== e && '$?' !== e && '$!' !== e) || r++;
            e = o;
          } while (e);
          Bt(t);
        }
        function so(n) {
          for (; null != n; n = n.nextSibling) {
            var t = n.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = n.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return n;
        }
        function uo(n) {
          n = n.previousSibling;
          for (var t = 0; n; ) {
            if (8 === n.nodeType) {
              var e = n.data;
              if ('$' === e || '$!' === e || '$?' === e) {
                if (0 === t) return n;
                t--;
              } else '/$' === e && t++;
            }
            n = n.previousSibling;
          }
          return null;
        }
        var po = Math.random().toString(36).slice(2),
          fo = '__reactFiber$' + po,
          vo = '__reactProps$' + po,
          ho = '__reactContainer$' + po,
          mo = '__reactEvents$' + po,
          wo = '__reactListeners$' + po,
          yo = '__reactHandles$' + po;
        function go(n) {
          var t = n[fo];
          if (t) return t;
          for (var e = n.parentNode; e; ) {
            if ((t = e[ho] || e[fo])) {
              if (
                ((e = t.alternate),
                null !== t.child || (null !== e && null !== e.child))
              )
                for (n = uo(n); null !== n; ) {
                  if ((e = n[fo])) return e;
                  n = uo(n);
                }
              return t;
            }
            e = (n = e).parentNode;
          }
          return null;
        }
        function bo(n) {
          return !(n = n[fo] || n[ho]) ||
            (5 !== n.tag && 6 !== n.tag && 13 !== n.tag && 3 !== n.tag)
            ? null
            : n;
        }
        function To(n) {
          if (5 === n.tag || 6 === n.tag) return n.stateNode;
          throw Error(i(33));
        }
        function zo(n) {
          return n[vo] || null;
        }
        var ko = [],
          So = -1;
        function xo(n) {
          return { current: n };
        }
        function Eo(n) {
          0 > So || ((n.current = ko[So]), (ko[So] = null), So--);
        }
        function _o(n, t) {
          So++, (ko[So] = n.current), (n.current = t);
        }
        var Co = {},
          No = xo(Co),
          Oo = xo(!1),
          Po = Co;
        function jo(n, t) {
          var e = n.type.contextTypes;
          if (!e) return Co;
          var r = n.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in e) i[o] = t[o];
          return (
            r &&
              (((n = n.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (n.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Lo(n) {
          return null !== (n = n.childContextTypes) && void 0 !== n;
        }
        function Ao() {
          Eo(Oo), Eo(No);
        }
        function Ro(n, t, e) {
          if (No.current !== Co) throw Error(i(168));
          _o(No, t), _o(Oo, e);
        }
        function Io(n, t, e) {
          var r = n.stateNode;
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return e;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(i(108, B(n) || 'Unknown', o));
          return F({}, e, r);
        }
        function Fo(n) {
          return (
            (n =
              ((n = n.stateNode) &&
                n.__reactInternalMemoizedMergedChildContext) ||
              Co),
            (Po = No.current),
            _o(No, n),
            _o(Oo, Oo.current),
            !0
          );
        }
        function Do(n, t, e) {
          var r = n.stateNode;
          if (!r) throw Error(i(169));
          e
            ? ((n = Io(n, t, Po)),
              (r.__reactInternalMemoizedMergedChildContext = n),
              Eo(Oo),
              Eo(No),
              _o(No, n))
            : Eo(Oo),
            _o(Oo, e);
        }
        var Mo = null,
          Vo = !1,
          Uo = !1;
        function Wo(n) {
          null === Mo ? (Mo = [n]) : Mo.push(n);
        }
        function Bo() {
          if (!Uo && null !== Mo) {
            Uo = !0;
            var n = 0,
              t = bt;
            try {
              var e = Mo;
              for (bt = 1; n < e.length; n++) {
                var r = e[n];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Mo = null), (Vo = !1);
            } catch (o) {
              throw (null !== Mo && (Mo = Mo.slice(n + 1)), Zn(nt, Bo), o);
            } finally {
              (bt = t), (Uo = !1);
            }
          }
          return null;
        }
        var Ho = [],
          Qo = 0,
          Ko = null,
          Xo = 0,
          Zo = [],
          qo = 0,
          Jo = null,
          Go = 1,
          Yo = '';
        function $o(n, t) {
          (Ho[Qo++] = Xo), (Ho[Qo++] = Ko), (Ko = n), (Xo = t);
        }
        function ni(n, t, e) {
          (Zo[qo++] = Go), (Zo[qo++] = Yo), (Zo[qo++] = Jo), (Jo = n);
          var r = Go;
          n = Yo;
          var o = 32 - lt(r) - 1;
          (r &= ~(1 << o)), (e += 1);
          var i = 32 - lt(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              (Go = (1 << (32 - lt(t) + o)) | (e << o) | r),
              (Yo = i + n);
          } else (Go = (1 << i) | (e << o) | r), (Yo = n);
        }
        function ti(n) {
          null !== n.return && ($o(n, 1), ni(n, 1, 0));
        }
        function ei(n) {
          for (; n === Ko; )
            (Ko = Ho[--Qo]), (Ho[Qo] = null), (Xo = Ho[--Qo]), (Ho[Qo] = null);
          for (; n === Jo; )
            (Jo = Zo[--qo]),
              (Zo[qo] = null),
              (Yo = Zo[--qo]),
              (Zo[qo] = null),
              (Go = Zo[--qo]),
              (Zo[qo] = null);
        }
        var ri = null,
          oi = null,
          ii = !1,
          ai = null;
        function li(n, t) {
          var e = Ps(5, null, null, 0);
          (e.elementType = 'DELETED'),
            (e.stateNode = t),
            (e.return = n),
            null === (t = n.deletions)
              ? ((n.deletions = [e]), (n.flags |= 16))
              : t.push(e);
        }
        function ci(n, t) {
          switch (n.tag) {
            case 5:
              var e = n.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    e.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((n.stateNode = t), (ri = n), (oi = so(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === n.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((n.stateNode = t), (ri = n), (oi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((e = null !== Jo ? { id: Go, overflow: Yo } : null),
                (n.memoizedState = {
                  dehydrated: t,
                  treeContext: e,
                  retryLane: 1073741824,
                }),
                ((e = Ps(18, null, null, 0)).stateNode = t),
                (e.return = n),
                (n.child = e),
                (ri = n),
                (oi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(n) {
          return 0 !== (1 & n.mode) && 0 === (128 & n.flags);
        }
        function ui(n) {
          if (ii) {
            var t = oi;
            if (t) {
              var e = t;
              if (!ci(n, t)) {
                if (si(n)) throw Error(i(418));
                t = so(e.nextSibling);
                var r = ri;
                t && ci(n, t)
                  ? li(r, e)
                  : ((n.flags = (-4097 & n.flags) | 2), (ii = !1), (ri = n));
              }
            } else {
              if (si(n)) throw Error(i(418));
              (n.flags = (-4097 & n.flags) | 2), (ii = !1), (ri = n);
            }
          }
        }
        function pi(n) {
          for (
            n = n.return;
            null !== n && 5 !== n.tag && 3 !== n.tag && 13 !== n.tag;

          )
            n = n.return;
          ri = n;
        }
        function di(n) {
          if (n !== ri) return !1;
          if (!ii) return pi(n), (ii = !0), !1;
          var t;
          if (
            ((t = 3 !== n.tag) &&
              !(t = 5 !== n.tag) &&
              (t =
                'head' !== (t = n.type) &&
                'body' !== t &&
                !eo(n.type, n.memoizedProps)),
            t && (t = oi))
          ) {
            if (si(n)) throw (fi(), Error(i(418)));
            for (; t; ) li(n, t), (t = so(t.nextSibling));
          }
          if ((pi(n), 13 === n.tag)) {
            if (!(n = null !== (n = n.memoizedState) ? n.dehydrated : null))
              throw Error(i(317));
            n: {
              for (n = n.nextSibling, t = 0; n; ) {
                if (8 === n.nodeType) {
                  var e = n.data;
                  if ('/$' === e) {
                    if (0 === t) {
                      oi = so(n.nextSibling);
                      break n;
                    }
                    t--;
                  } else ('$' !== e && '$!' !== e && '$?' !== e) || t++;
                }
                n = n.nextSibling;
              }
              oi = null;
            }
          } else oi = ri ? so(n.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var n = oi; n; ) n = so(n.nextSibling);
        }
        function vi() {
          (oi = ri = null), (ii = !1);
        }
        function hi(n) {
          null === ai ? (ai = [n]) : ai.push(n);
        }
        var mi = b.ReactCurrentBatchConfig;
        function wi(n, t) {
          if (n && n.defaultProps) {
            for (var e in ((t = F({}, t)), (n = n.defaultProps)))
              void 0 === t[e] && (t[e] = n[e]);
            return t;
          }
          return t;
        }
        var yi = xo(null),
          gi = null,
          bi = null,
          Ti = null;
        function zi() {
          Ti = bi = gi = null;
        }
        function ki(n) {
          var t = yi.current;
          Eo(yi), (n._currentValue = t);
        }
        function Si(n, t, e) {
          for (; null !== n; ) {
            var r = n.alternate;
            if (
              ((n.childLanes & t) !== t
                ? ((n.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              n === e)
            )
              break;
            n = n.return;
          }
        }
        function xi(n, t) {
          (gi = n),
            (Ti = bi = null),
            null !== (n = n.dependencies) &&
              null !== n.firstContext &&
              (0 !== (n.lanes & t) && (bl = !0), (n.firstContext = null));
        }
        function Ei(n) {
          var t = n._currentValue;
          if (Ti !== n)
            if (
              ((n = { context: n, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === gi) throw Error(i(308));
              (bi = n), (gi.dependencies = { lanes: 0, firstContext: n });
            } else bi = bi.next = n;
          return t;
        }
        var _i = null;
        function Ci(n) {
          null === _i ? (_i = [n]) : _i.push(n);
        }
        function Ni(n, t, e, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((e.next = e), Ci(t))
              : ((e.next = o.next), (o.next = e)),
            (t.interleaved = e),
            Oi(n, r)
          );
        }
        function Oi(n, t) {
          n.lanes |= t;
          var e = n.alternate;
          for (null !== e && (e.lanes |= t), e = n, n = n.return; null !== n; )
            (n.childLanes |= t),
              null !== (e = n.alternate) && (e.childLanes |= t),
              (e = n),
              (n = n.return);
          return 3 === e.tag ? e.stateNode : null;
        }
        var Pi = !1;
        function ji(n) {
          n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Li(n, t) {
          (n = n.updateQueue),
            t.updateQueue === n &&
              (t.updateQueue = {
                baseState: n.baseState,
                firstBaseUpdate: n.firstBaseUpdate,
                lastBaseUpdate: n.lastBaseUpdate,
                shared: n.shared,
                effects: n.effects,
              });
        }
        function Ai(n, t) {
          return {
            eventTime: n,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ri(n, t, e) {
          var r = n.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Cc))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Oi(n, e)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ci(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Oi(n, e)
          );
        }
        function Ii(n, t, e) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & e))
          ) {
            var r = t.lanes;
            (e |= r &= n.pendingLanes), (t.lanes = e), gt(n, e);
          }
        }
        function Fi(n, t) {
          var e = n.updateQueue,
            r = n.alternate;
          if (null !== r && e === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (e = e.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: e.eventTime,
                  lane: e.lane,
                  tag: e.tag,
                  payload: e.payload,
                  callback: e.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (e = e.next);
              } while (null !== e);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (e = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (n.updateQueue = e)
            );
          }
          null === (n = e.lastBaseUpdate)
            ? (e.firstBaseUpdate = t)
            : (n.next = t),
            (e.lastBaseUpdate = t);
        }
        function Di(n, t, e, r) {
          var o = n.updateQueue;
          Pi = !1;
          var i = o.firstBaseUpdate,
            a = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var c = l,
              s = c.next;
            (c.next = null), null === a ? (i = s) : (a.next = s), (a = c);
            var u = n.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== a &&
              (null === l ? (u.firstBaseUpdate = s) : (l.next = s),
              (u.lastBaseUpdate = c));
          }
          if (null !== i) {
            var p = o.baseState;
            for (a = 0, u = s = c = null, l = i; ; ) {
              var d = l.lane,
                f = l.eventTime;
              if ((r & d) === d) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                n: {
                  var v = n,
                    h = l;
                  switch (((d = t), (f = e), h.tag)) {
                    case 1:
                      if ('function' === typeof (v = h.payload)) {
                        p = v.call(f, p, d);
                        break n;
                      }
                      p = v;
                      break n;
                    case 3:
                      v.flags = (-65537 & v.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            'function' === typeof (v = h.payload)
                              ? v.call(f, p, d)
                              : v) ||
                        void 0 === d
                      )
                        break n;
                      p = F({}, p, d);
                      break n;
                    case 2:
                      Pi = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((n.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (f = {
                  eventTime: f,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((s = u = f), (c = p)) : (u = u.next = f),
                  (a |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === u && (c = p),
              (o.baseState = c),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = u),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (a |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === i && (o.shared.lanes = 0);
            (Ic |= a), (n.lanes = a), (n.memoizedState = p);
          }
        }
        function Mi(n, t, e) {
          if (((n = t.effects), (t.effects = null), null !== n))
            for (t = 0; t < n.length; t++) {
              var r = n[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = e), 'function' !== typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var Vi = new r.Component().refs;
        function Ui(n, t, e, r) {
          (e =
            null === (e = e(r, (t = n.memoizedState))) || void 0 === e
              ? t
              : F({}, t, e)),
            (n.memoizedState = e),
            0 === n.lanes && (n.updateQueue.baseState = e);
        }
        var Wi = {
          isMounted: function (n) {
            return !!(n = n._reactInternals) && Bn(n) === n;
          },
          enqueueSetState: function (n, t, e) {
            n = n._reactInternals;
            var r = ns(),
              o = ts(n),
              i = Ai(r, o);
            (i.payload = t),
              void 0 !== e && null !== e && (i.callback = e),
              null !== (t = Ri(n, i, o)) && (es(t, n, o, r), Ii(t, n, o));
          },
          enqueueReplaceState: function (n, t, e) {
            n = n._reactInternals;
            var r = ns(),
              o = ts(n),
              i = Ai(r, o);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== e && null !== e && (i.callback = e),
              null !== (t = Ri(n, i, o)) && (es(t, n, o, r), Ii(t, n, o));
          },
          enqueueForceUpdate: function (n, t) {
            n = n._reactInternals;
            var e = ns(),
              r = ts(n),
              o = Ai(e, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Ri(n, o, r)) && (es(t, n, r, e), Ii(t, n, r));
          },
        };
        function Bi(n, t, e, r, o, i, a) {
          return 'function' === typeof (n = n.stateNode).shouldComponentUpdate
            ? n.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !cr(e, r) ||
                !cr(o, i);
        }
        function Hi(n, t, e) {
          var r = !1,
            o = Co,
            i = t.contextType;
          return (
            'object' === typeof i && null !== i
              ? (i = Ei(i))
              : ((o = Lo(t) ? Po : No.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? jo(n, o)
                  : Co)),
            (t = new t(e, i)),
            (n.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wi),
            (n.stateNode = t),
            (t._reactInternals = n),
            r &&
              (((n = n.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (n.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Qi(n, t, e, r) {
          (n = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(e, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(e, r),
            t.state !== n && Wi.enqueueReplaceState(t, t.state, null);
        }
        function Ki(n, t, e, r) {
          var o = n.stateNode;
          (o.props = e), (o.state = n.memoizedState), (o.refs = Vi), ji(n);
          var i = t.contextType;
          'object' === typeof i && null !== i
            ? (o.context = Ei(i))
            : ((i = Lo(t) ? Po : No.current), (o.context = jo(n, i))),
            (o.state = n.memoizedState),
            'function' === typeof (i = t.getDerivedStateFromProps) &&
              (Ui(n, t, i, e), (o.state = n.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount &&
                o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Wi.enqueueReplaceState(o, o.state, null),
              Di(n, e, o, r),
              (o.state = n.memoizedState)),
            'function' === typeof o.componentDidMount && (n.flags |= 4194308);
        }
        function Xi(n, t, e) {
          if (
            null !== (n = e.ref) &&
            'function' !== typeof n &&
            'object' !== typeof n
          ) {
            if (e._owner) {
              if ((e = e._owner)) {
                if (1 !== e.tag) throw Error(i(309));
                var r = e.stateNode;
              }
              if (!r) throw Error(i(147, n));
              var o = r,
                a = '' + n;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (n) {
                    var t = o.refs;
                    t === Vi && (t = o.refs = {}),
                      null === n ? delete t[a] : (t[a] = n);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ('string' !== typeof n) throw Error(i(284));
            if (!e._owner) throw Error(i(290, n));
          }
          return n;
        }
        function Zi(n, t) {
          throw (
            ((n = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                '[object Object]' === n
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : n
              )
            ))
          );
        }
        function qi(n) {
          return (0, n._init)(n._payload);
        }
        function Ji(n) {
          function t(t, e) {
            if (n) {
              var r = t.deletions;
              null === r ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e);
            }
          }
          function e(e, r) {
            if (!n) return null;
            for (; null !== r; ) t(e, r), (r = r.sibling);
            return null;
          }
          function r(n, t) {
            for (n = new Map(); null !== t; )
              null !== t.key ? n.set(t.key, t) : n.set(t.index, t),
                (t = t.sibling);
            return n;
          }
          function o(n, t) {
            return ((n = Ls(n, t)).index = 0), (n.sibling = null), n;
          }
          function a(t, e, r) {
            return (
              (t.index = r),
              n
                ? null !== (r = t.alternate)
                  ? (r = r.index) < e
                    ? ((t.flags |= 2), e)
                    : r
                  : ((t.flags |= 2), e)
                : ((t.flags |= 1048576), e)
            );
          }
          function l(t) {
            return n && null === t.alternate && (t.flags |= 2), t;
          }
          function c(n, t, e, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fs(e, n.mode, r)).return = n), t)
              : (((t = o(t, e)).return = n), t);
          }
          function s(n, t, e, r) {
            var i = e.type;
            return i === k
              ? p(n, t, e.props.children, r, e.key)
              : null !== t &&
                  (t.elementType === i ||
                    ('object' === typeof i &&
                      null !== i &&
                      i.$$typeof === j &&
                      qi(i) === t.type))
                ? (((r = o(t, e.props)).ref = Xi(n, t, e)), (r.return = n), r)
                : (((r = As(e.type, e.key, e.props, null, n.mode, r)).ref = Xi(
                    n,
                    t,
                    e
                  )),
                  (r.return = n),
                  r);
          }
          function u(n, t, e, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== e.containerInfo ||
              t.stateNode.implementation !== e.implementation
              ? (((t = Ds(e, n.mode, r)).return = n), t)
              : (((t = o(t, e.children || [])).return = n), t);
          }
          function p(n, t, e, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Rs(e, n.mode, r, i)).return = n), t)
              : (((t = o(t, e)).return = n), t);
          }
          function d(n, t, e) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Fs('' + t, n.mode, e)).return = n), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case T:
                  return (
                    ((e = As(t.type, t.key, t.props, null, n.mode, e)).ref = Xi(
                      n,
                      null,
                      t
                    )),
                    (e.return = n),
                    e
                  );
                case z:
                  return ((t = Ds(t, n.mode, e)).return = n), t;
                case j:
                  return d(n, (0, t._init)(t._payload), e);
              }
              if (tn(t) || R(t))
                return ((t = Rs(t, n.mode, e, null)).return = n), t;
              Zi(n, t);
            }
            return null;
          }
          function f(n, t, e, r) {
            var o = null !== t ? t.key : null;
            if (('string' === typeof e && '' !== e) || 'number' === typeof e)
              return null !== o ? null : c(n, t, '' + e, r);
            if ('object' === typeof e && null !== e) {
              switch (e.$$typeof) {
                case T:
                  return e.key === o ? s(n, t, e, r) : null;
                case z:
                  return e.key === o ? u(n, t, e, r) : null;
                case j:
                  return f(n, t, (o = e._init)(e._payload), r);
              }
              if (tn(e) || R(e)) return null !== o ? null : p(n, t, e, r, null);
              Zi(n, e);
            }
            return null;
          }
          function v(n, t, e, r, o) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return c(t, (n = n.get(e) || null), '' + r, o);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case T:
                  return s(
                    t,
                    (n = n.get(null === r.key ? e : r.key) || null),
                    r,
                    o
                  );
                case z:
                  return u(
                    t,
                    (n = n.get(null === r.key ? e : r.key) || null),
                    r,
                    o
                  );
                case j:
                  return v(n, t, e, (0, r._init)(r._payload), o);
              }
              if (tn(r) || R(r))
                return p(t, (n = n.get(e) || null), r, o, null);
              Zi(t, r);
            }
            return null;
          }
          function h(o, i, l, c) {
            for (
              var s = null, u = null, p = i, h = (i = 0), m = null;
              null !== p && h < l.length;
              h++
            ) {
              p.index > h ? ((m = p), (p = null)) : (m = p.sibling);
              var w = f(o, p, l[h], c);
              if (null === w) {
                null === p && (p = m);
                break;
              }
              n && p && null === w.alternate && t(o, p),
                (i = a(w, i, h)),
                null === u ? (s = w) : (u.sibling = w),
                (u = w),
                (p = m);
            }
            if (h === l.length) return e(o, p), ii && $o(o, h), s;
            if (null === p) {
              for (; h < l.length; h++)
                null !== (p = d(o, l[h], c)) &&
                  ((i = a(p, i, h)),
                  null === u ? (s = p) : (u.sibling = p),
                  (u = p));
              return ii && $o(o, h), s;
            }
            for (p = r(o, p); h < l.length; h++)
              null !== (m = v(p, o, h, l[h], c)) &&
                (n &&
                  null !== m.alternate &&
                  p.delete(null === m.key ? h : m.key),
                (i = a(m, i, h)),
                null === u ? (s = m) : (u.sibling = m),
                (u = m));
            return (
              n &&
                p.forEach(function (n) {
                  return t(o, n);
                }),
              ii && $o(o, h),
              s
            );
          }
          function m(o, l, c, s) {
            var u = R(c);
            if ('function' !== typeof u) throw Error(i(150));
            if (null == (c = u.call(c))) throw Error(i(151));
            for (
              var p = (u = null), h = l, m = (l = 0), w = null, y = c.next();
              null !== h && !y.done;
              m++, y = c.next()
            ) {
              h.index > m ? ((w = h), (h = null)) : (w = h.sibling);
              var g = f(o, h, y.value, s);
              if (null === g) {
                null === h && (h = w);
                break;
              }
              n && h && null === g.alternate && t(o, h),
                (l = a(g, l, m)),
                null === p ? (u = g) : (p.sibling = g),
                (p = g),
                (h = w);
            }
            if (y.done) return e(o, h), ii && $o(o, m), u;
            if (null === h) {
              for (; !y.done; m++, y = c.next())
                null !== (y = d(o, y.value, s)) &&
                  ((l = a(y, l, m)),
                  null === p ? (u = y) : (p.sibling = y),
                  (p = y));
              return ii && $o(o, m), u;
            }
            for (h = r(o, h); !y.done; m++, y = c.next())
              null !== (y = v(h, o, m, y.value, s)) &&
                (n &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? m : y.key),
                (l = a(y, l, m)),
                null === p ? (u = y) : (p.sibling = y),
                (p = y));
            return (
              n &&
                h.forEach(function (n) {
                  return t(o, n);
                }),
              ii && $o(o, m),
              u
            );
          }
          return function n(r, i, a, c) {
            if (
              ('object' === typeof a &&
                null !== a &&
                a.type === k &&
                null === a.key &&
                (a = a.props.children),
              'object' === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case T:
                  n: {
                    for (var s = a.key, u = i; null !== u; ) {
                      if (u.key === s) {
                        if ((s = a.type) === k) {
                          if (7 === u.tag) {
                            e(r, u.sibling),
                              ((i = o(u, a.props.children)).return = r),
                              (r = i);
                            break n;
                          }
                        } else if (
                          u.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === j &&
                            qi(s) === u.type)
                        ) {
                          e(r, u.sibling),
                            ((i = o(u, a.props)).ref = Xi(r, u, a)),
                            (i.return = r),
                            (r = i);
                          break n;
                        }
                        e(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    a.type === k
                      ? (((i = Rs(a.props.children, r.mode, c, a.key)).return =
                          r),
                        (r = i))
                      : (((c = As(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          c
                        )).ref = Xi(r, i, a)),
                        (c.return = r),
                        (r = c));
                  }
                  return l(r);
                case z:
                  n: {
                    for (u = a.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === a.containerInfo &&
                          i.stateNode.implementation === a.implementation
                        ) {
                          e(r, i.sibling),
                            ((i = o(i, a.children || [])).return = r),
                            (r = i);
                          break n;
                        }
                        e(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Ds(a, r.mode, c)).return = r), (r = i);
                  }
                  return l(r);
                case j:
                  return n(r, i, (u = a._init)(a._payload), c);
              }
              if (tn(a)) return h(r, i, a, c);
              if (R(a)) return m(r, i, a, c);
              Zi(r, a);
            }
            return ('string' === typeof a && '' !== a) || 'number' === typeof a
              ? ((a = '' + a),
                null !== i && 6 === i.tag
                  ? (e(r, i.sibling), ((i = o(i, a)).return = r), (r = i))
                  : (e(r, i), ((i = Fs(a, r.mode, c)).return = r), (r = i)),
                l(r))
              : e(r, i);
          };
        }
        var Gi = Ji(!0),
          Yi = Ji(!1),
          $i = {},
          na = xo($i),
          ta = xo($i),
          ea = xo($i);
        function ra(n) {
          if (n === $i) throw Error(i(174));
          return n;
        }
        function oa(n, t) {
          switch ((_o(ea, t), _o(ta, n), _o(na, $i), (n = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : sn(null, '');
              break;
            default:
              t = sn(
                (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
                (n = n.tagName)
              );
          }
          Eo(na), _o(na, t);
        }
        function ia() {
          Eo(na), Eo(ta), Eo(ea);
        }
        function aa(n) {
          ra(ea.current);
          var t = ra(na.current),
            e = sn(t, n.type);
          t !== e && (_o(ta, n), _o(na, e));
        }
        function la(n) {
          ta.current === n && (Eo(na), Eo(ta));
        }
        var ca = xo(0);
        function sa(n) {
          for (var t = n; null !== t; ) {
            if (13 === t.tag) {
              var e = t.memoizedState;
              if (
                null !== e &&
                (null === (e = e.dehydrated) ||
                  '$?' === e.data ||
                  '$!' === e.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ua = [];
        function pa() {
          for (var n = 0; n < ua.length; n++)
            ua[n]._workInProgressVersionPrimary = null;
          ua.length = 0;
        }
        var da = b.ReactCurrentDispatcher,
          fa = b.ReactCurrentBatchConfig,
          va = 0,
          ha = null,
          ma = null,
          wa = null,
          ya = !1,
          ga = !1,
          ba = 0,
          Ta = 0;
        function za() {
          throw Error(i(321));
        }
        function ka(n, t) {
          if (null === t) return !1;
          for (var e = 0; e < t.length && e < n.length; e++)
            if (!lr(n[e], t[e])) return !1;
          return !0;
        }
        function Sa(n, t, e, r, o, a) {
          if (
            ((va = a),
            (ha = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (da.current = null === n || null === n.memoizedState ? ll : cl),
            (n = e(r, o)),
            ga)
          ) {
            a = 0;
            do {
              if (((ga = !1), (ba = 0), 25 <= a)) throw Error(i(301));
              (a += 1),
                (wa = ma = null),
                (t.updateQueue = null),
                (da.current = sl),
                (n = e(r, o));
            } while (ga);
          }
          if (
            ((da.current = al),
            (t = null !== ma && null !== ma.next),
            (va = 0),
            (wa = ma = ha = null),
            (ya = !1),
            t)
          )
            throw Error(i(300));
          return n;
        }
        function xa() {
          var n = 0 !== ba;
          return (ba = 0), n;
        }
        function Ea() {
          var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === wa ? (ha.memoizedState = wa = n) : (wa = wa.next = n), wa
          );
        }
        function _a() {
          if (null === ma) {
            var n = ha.alternate;
            n = null !== n ? n.memoizedState : null;
          } else n = ma.next;
          var t = null === wa ? ha.memoizedState : wa.next;
          if (null !== t) (wa = t), (ma = n);
          else {
            if (null === n) throw Error(i(310));
            (n = {
              memoizedState: (ma = n).memoizedState,
              baseState: ma.baseState,
              baseQueue: ma.baseQueue,
              queue: ma.queue,
              next: null,
            }),
              null === wa ? (ha.memoizedState = wa = n) : (wa = wa.next = n);
          }
          return wa;
        }
        function Ca(n, t) {
          return 'function' === typeof t ? t(n) : t;
        }
        function Na(n) {
          var t = _a(),
            e = t.queue;
          if (null === e) throw Error(i(311));
          e.lastRenderedReducer = n;
          var r = ma,
            o = r.baseQueue,
            a = e.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              (o.next = a.next), (a.next = l);
            }
            (r.baseQueue = o = a), (e.pending = null);
          }
          if (null !== o) {
            (a = o.next), (r = r.baseState);
            var c = (l = null),
              s = null,
              u = a;
            do {
              var p = u.lane;
              if ((va & p) === p)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : n(r, u.action));
              else {
                var d = {
                  lane: p,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === s ? ((c = s = d), (l = r)) : (s = s.next = d),
                  (ha.lanes |= p),
                  (Ic |= p);
              }
              u = u.next;
            } while (null !== u && u !== a);
            null === s ? (l = r) : (s.next = c),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (e.lastRenderedState = r);
          }
          if (null !== (n = e.interleaved)) {
            o = n;
            do {
              (a = o.lane), (ha.lanes |= a), (Ic |= a), (o = o.next);
            } while (o !== n);
          } else null === o && (e.lanes = 0);
          return [t.memoizedState, e.dispatch];
        }
        function Oa(n) {
          var t = _a(),
            e = t.queue;
          if (null === e) throw Error(i(311));
          e.lastRenderedReducer = n;
          var r = e.dispatch,
            o = e.pending,
            a = t.memoizedState;
          if (null !== o) {
            e.pending = null;
            var l = (o = o.next);
            do {
              (a = n(a, l.action)), (l = l.next);
            } while (l !== o);
            lr(a, t.memoizedState) || (bl = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (e.lastRenderedState = a);
          }
          return [a, r];
        }
        function Pa() {}
        function ja(n, t) {
          var e = ha,
            r = _a(),
            o = t(),
            a = !lr(r.memoizedState, o);
          if (
            (a && ((r.memoizedState = o), (bl = !0)),
            (r = r.queue),
            Ha(Ra.bind(null, e, r, n), [n]),
            r.getSnapshot !== t ||
              a ||
              (null !== wa && 1 & wa.memoizedState.tag))
          ) {
            if (
              ((e.flags |= 2048),
              Ma(9, Aa.bind(null, e, r, o, t), void 0, null),
              null === Nc)
            )
              throw Error(i(349));
            0 !== (30 & va) || La(e, t, o);
          }
          return o;
        }
        function La(n, t, e) {
          (n.flags |= 16384),
            (n = { getSnapshot: t, value: e }),
            null === (t = ha.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ha.updateQueue = t),
                (t.stores = [n]))
              : null === (e = t.stores)
                ? (t.stores = [n])
                : e.push(n);
        }
        function Aa(n, t, e, r) {
          (t.value = e), (t.getSnapshot = r), Ia(t) && Fa(n);
        }
        function Ra(n, t, e) {
          return e(function () {
            Ia(t) && Fa(n);
          });
        }
        function Ia(n) {
          var t = n.getSnapshot;
          n = n.value;
          try {
            var e = t();
            return !lr(n, e);
          } catch (r) {
            return !0;
          }
        }
        function Fa(n) {
          var t = Oi(n, 1);
          null !== t && es(t, n, 1, -1);
        }
        function Da(n) {
          var t = Ea();
          return (
            'function' === typeof n && (n = n()),
            (t.memoizedState = t.baseState = n),
            (n = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ca,
              lastRenderedState: n,
            }),
            (t.queue = n),
            (n = n.dispatch = el.bind(null, ha, n)),
            [t.memoizedState, n]
          );
        }
        function Ma(n, t, e, r) {
          return (
            (n = { tag: n, create: t, destroy: e, deps: r, next: null }),
            null === (t = ha.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ha.updateQueue = t),
                (t.lastEffect = n.next = n))
              : null === (e = t.lastEffect)
                ? (t.lastEffect = n.next = n)
                : ((r = e.next),
                  (e.next = n),
                  (n.next = r),
                  (t.lastEffect = n)),
            n
          );
        }
        function Va() {
          return _a().memoizedState;
        }
        function Ua(n, t, e, r) {
          var o = Ea();
          (ha.flags |= n),
            (o.memoizedState = Ma(1 | t, e, void 0, void 0 === r ? null : r));
        }
        function Wa(n, t, e, r) {
          var o = _a();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ma) {
            var a = ma.memoizedState;
            if (((i = a.destroy), null !== r && ka(r, a.deps)))
              return void (o.memoizedState = Ma(t, e, i, r));
          }
          (ha.flags |= n), (o.memoizedState = Ma(1 | t, e, i, r));
        }
        function Ba(n, t) {
          return Ua(8390656, 8, n, t);
        }
        function Ha(n, t) {
          return Wa(2048, 8, n, t);
        }
        function Qa(n, t) {
          return Wa(4, 2, n, t);
        }
        function Ka(n, t) {
          return Wa(4, 4, n, t);
        }
        function Xa(n, t) {
          return 'function' === typeof t
            ? ((n = n()),
              t(n),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((n = n()),
                (t.current = n),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Za(n, t, e) {
          return (
            (e = null !== e && void 0 !== e ? e.concat([n]) : null),
            Wa(4, 4, Xa.bind(null, t, n), e)
          );
        }
        function qa() {}
        function Ja(n, t) {
          var e = _a();
          t = void 0 === t ? null : t;
          var r = e.memoizedState;
          return null !== r && null !== t && ka(t, r[1])
            ? r[0]
            : ((e.memoizedState = [n, t]), n);
        }
        function Ga(n, t) {
          var e = _a();
          t = void 0 === t ? null : t;
          var r = e.memoizedState;
          return null !== r && null !== t && ka(t, r[1])
            ? r[0]
            : ((n = n()), (e.memoizedState = [n, t]), n);
        }
        function Ya(n, t, e) {
          return 0 === (21 & va)
            ? (n.baseState && ((n.baseState = !1), (bl = !0)),
              (n.memoizedState = e))
            : (lr(e, t) ||
                ((e = mt()), (ha.lanes |= e), (Ic |= e), (n.baseState = !0)),
              t);
        }
        function $a(n, t) {
          var e = bt;
          (bt = 0 !== e && 4 > e ? e : 4), n(!0);
          var r = fa.transition;
          fa.transition = {};
          try {
            n(!1), t();
          } finally {
            (bt = e), (fa.transition = r);
          }
        }
        function nl() {
          return _a().memoizedState;
        }
        function tl(n, t, e) {
          var r = ts(n);
          if (
            ((e = {
              lane: r,
              action: e,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(n))
          )
            ol(t, e);
          else if (null !== (e = Ni(n, t, e, r))) {
            es(e, n, r, ns()), il(e, t, r);
          }
        }
        function el(n, t, e) {
          var r = ts(n),
            o = {
              lane: r,
              action: e,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(n)) ol(t, o);
          else {
            var i = n.alternate;
            if (
              0 === n.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  l = i(a, e);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, a))) {
                  var c = t.interleaved;
                  return (
                    null === c
                      ? ((o.next = o), Ci(t))
                      : ((o.next = c.next), (c.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (s) {}
            null !== (e = Ni(n, t, o, r)) &&
              (es(e, n, r, (o = ns())), il(e, t, r));
          }
        }
        function rl(n) {
          var t = n.alternate;
          return n === ha || (null !== t && t === ha);
        }
        function ol(n, t) {
          ga = ya = !0;
          var e = n.pending;
          null === e ? (t.next = t) : ((t.next = e.next), (e.next = t)),
            (n.pending = t);
        }
        function il(n, t, e) {
          if (0 !== (4194240 & e)) {
            var r = t.lanes;
            (e |= r &= n.pendingLanes), (t.lanes = e), gt(n, e);
          }
        }
        var al = {
            readContext: Ei,
            useCallback: za,
            useContext: za,
            useEffect: za,
            useImperativeHandle: za,
            useInsertionEffect: za,
            useLayoutEffect: za,
            useMemo: za,
            useReducer: za,
            useRef: za,
            useState: za,
            useDebugValue: za,
            useDeferredValue: za,
            useTransition: za,
            useMutableSource: za,
            useSyncExternalStore: za,
            useId: za,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ei,
            useCallback: function (n, t) {
              return (Ea().memoizedState = [n, void 0 === t ? null : t]), n;
            },
            useContext: Ei,
            useEffect: Ba,
            useImperativeHandle: function (n, t, e) {
              return (
                (e = null !== e && void 0 !== e ? e.concat([n]) : null),
                Ua(4194308, 4, Xa.bind(null, t, n), e)
              );
            },
            useLayoutEffect: function (n, t) {
              return Ua(4194308, 4, n, t);
            },
            useInsertionEffect: function (n, t) {
              return Ua(4, 2, n, t);
            },
            useMemo: function (n, t) {
              var e = Ea();
              return (
                (t = void 0 === t ? null : t),
                (n = n()),
                (e.memoizedState = [n, t]),
                n
              );
            },
            useReducer: function (n, t, e) {
              var r = Ea();
              return (
                (t = void 0 !== e ? e(t) : t),
                (r.memoizedState = r.baseState = t),
                (n = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: n,
                  lastRenderedState: t,
                }),
                (r.queue = n),
                (n = n.dispatch = tl.bind(null, ha, n)),
                [r.memoizedState, n]
              );
            },
            useRef: function (n) {
              return (n = { current: n }), (Ea().memoizedState = n);
            },
            useState: Da,
            useDebugValue: qa,
            useDeferredValue: function (n) {
              return (Ea().memoizedState = n);
            },
            useTransition: function () {
              var n = Da(!1),
                t = n[0];
              return (
                (n = $a.bind(null, n[1])), (Ea().memoizedState = n), [t, n]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (n, t, e) {
              var r = ha,
                o = Ea();
              if (ii) {
                if (void 0 === e) throw Error(i(407));
                e = e();
              } else {
                if (((e = t()), null === Nc)) throw Error(i(349));
                0 !== (30 & va) || La(r, t, e);
              }
              o.memoizedState = e;
              var a = { value: e, getSnapshot: t };
              return (
                (o.queue = a),
                Ba(Ra.bind(null, r, a, n), [n]),
                (r.flags |= 2048),
                Ma(9, Aa.bind(null, r, a, e, t), void 0, null),
                e
              );
            },
            useId: function () {
              var n = Ea(),
                t = Nc.identifierPrefix;
              if (ii) {
                var e = Yo;
                (t =
                  ':' +
                  t +
                  'R' +
                  (e = (Go & ~(1 << (32 - lt(Go) - 1))).toString(32) + e)),
                  0 < (e = ba++) && (t += 'H' + e.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (e = Ta++).toString(32) + ':';
              return (n.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: Ei,
            useCallback: Ja,
            useContext: Ei,
            useEffect: Ha,
            useImperativeHandle: Za,
            useInsertionEffect: Qa,
            useLayoutEffect: Ka,
            useMemo: Ga,
            useReducer: Na,
            useRef: Va,
            useState: function () {
              return Na(Ca);
            },
            useDebugValue: qa,
            useDeferredValue: function (n) {
              return Ya(_a(), ma.memoizedState, n);
            },
            useTransition: function () {
              return [Na(Ca)[0], _a().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: ja,
            useId: nl,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ei,
            useCallback: Ja,
            useContext: Ei,
            useEffect: Ha,
            useImperativeHandle: Za,
            useInsertionEffect: Qa,
            useLayoutEffect: Ka,
            useMemo: Ga,
            useReducer: Oa,
            useRef: Va,
            useState: function () {
              return Oa(Ca);
            },
            useDebugValue: qa,
            useDeferredValue: function (n) {
              var t = _a();
              return null === ma
                ? (t.memoizedState = n)
                : Ya(t, ma.memoizedState, n);
            },
            useTransition: function () {
              return [Oa(Ca)[0], _a().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: ja,
            useId: nl,
            unstable_isNewReconciler: !1,
          };
        function ul(n, t) {
          try {
            var e = '',
              r = t;
            do {
              (e += U(r)), (r = r.return);
            } while (r);
            var o = e;
          } catch (i) {
            o = '\nError generating stack: ' + i.message + '\n' + i.stack;
          }
          return { value: n, source: t, stack: o, digest: null };
        }
        function pl(n, t, e) {
          return {
            value: n,
            source: null,
            stack: null != e ? e : null,
            digest: null != t ? t : null,
          };
        }
        function dl(n, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var fl = 'function' === typeof WeakMap ? WeakMap : Map;
        function vl(n, t, e) {
          ((e = Ai(-1, e)).tag = 3), (e.payload = { element: null });
          var r = t.value;
          return (
            (e.callback = function () {
              Hc || ((Hc = !0), (Qc = r)), dl(0, t);
            }),
            e
          );
        }
        function hl(n, t, e) {
          (e = Ai(-1, e)).tag = 3;
          var r = n.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var o = t.value;
            (e.payload = function () {
              return r(o);
            }),
              (e.callback = function () {
                dl(0, t);
              });
          }
          var i = n.stateNode;
          return (
            null !== i &&
              'function' === typeof i.componentDidCatch &&
              (e.callback = function () {
                dl(0, t),
                  'function' !== typeof r &&
                    (null === Kc ? (Kc = new Set([this])) : Kc.add(this));
                var n = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== n ? n : '',
                });
              }),
            e
          );
        }
        function ml(n, t, e) {
          var r = n.pingCache;
          if (null === r) {
            r = n.pingCache = new fl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(e) || (o.add(e), (n = xs.bind(null, n, t, e)), t.then(n, n));
        }
        function wl(n) {
          do {
            var t;
            if (
              ((t = 13 === n.tag) &&
                (t = null === (t = n.memoizedState) || null !== t.dehydrated),
              t)
            )
              return n;
            n = n.return;
          } while (null !== n);
          return null;
        }
        function yl(n, t, e, r, o) {
          return 0 === (1 & n.mode)
            ? (n === t
                ? (n.flags |= 65536)
                : ((n.flags |= 128),
                  (e.flags |= 131072),
                  (e.flags &= -52805),
                  1 === e.tag &&
                    (null === e.alternate
                      ? (e.tag = 17)
                      : (((t = Ai(-1, 1)).tag = 2), Ri(e, t, 1))),
                  (e.lanes |= 1)),
              n)
            : ((n.flags |= 65536), (n.lanes = o), n);
        }
        var gl = b.ReactCurrentOwner,
          bl = !1;
        function Tl(n, t, e, r) {
          t.child = null === n ? Yi(t, null, e, r) : Gi(t, n.child, e, r);
        }
        function zl(n, t, e, r, o) {
          e = e.render;
          var i = t.ref;
          return (
            xi(t, o),
            (r = Sa(n, t, e, r, i, o)),
            (e = xa()),
            null === n || bl
              ? (ii && e && ti(t), (t.flags |= 1), Tl(n, t, r, o), t.child)
              : ((t.updateQueue = n.updateQueue),
                (t.flags &= -2053),
                (n.lanes &= ~o),
                Hl(n, t, o))
          );
        }
        function kl(n, t, e, r, o) {
          if (null === n) {
            var i = e.type;
            return 'function' !== typeof i ||
              js(i) ||
              void 0 !== i.defaultProps ||
              null !== e.compare ||
              void 0 !== e.defaultProps
              ? (((n = As(e.type, null, r, t, t.mode, o)).ref = t.ref),
                (n.return = t),
                (t.child = n))
              : ((t.tag = 15), (t.type = i), Sl(n, t, i, r, o));
          }
          if (((i = n.child), 0 === (n.lanes & o))) {
            var a = i.memoizedProps;
            if (
              (e = null !== (e = e.compare) ? e : cr)(a, r) &&
              n.ref === t.ref
            )
              return Hl(n, t, o);
          }
          return (
            (t.flags |= 1),
            ((n = Ls(i, r)).ref = t.ref),
            (n.return = t),
            (t.child = n)
          );
        }
        function Sl(n, t, e, r, o) {
          if (null !== n) {
            var i = n.memoizedProps;
            if (cr(i, r) && n.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = i), 0 === (n.lanes & o)))
                return (t.lanes = n.lanes), Hl(n, t, o);
              0 !== (131072 & n.flags) && (bl = !0);
            }
          }
          return _l(n, t, e, r, o);
        }
        function xl(n, t, e) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== n ? n.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _o(Lc, jc),
                (jc |= e);
            else {
              if (0 === (1073741824 & e))
                return (
                  (n = null !== i ? i.baseLanes | e : e),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: n,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _o(Lc, jc),
                  (jc |= n),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : e),
                _o(Lc, jc),
                (jc |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | e), (t.memoizedState = null))
              : (r = e),
              _o(Lc, jc),
              (jc |= r);
          return Tl(n, t, o, e), t.child;
        }
        function El(n, t) {
          var e = t.ref;
          ((null === n && null !== e) || (null !== n && n.ref !== e)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(n, t, e, r, o) {
          var i = Lo(e) ? Po : No.current;
          return (
            (i = jo(t, i)),
            xi(t, o),
            (e = Sa(n, t, e, r, i, o)),
            (r = xa()),
            null === n || bl
              ? (ii && r && ti(t), (t.flags |= 1), Tl(n, t, e, o), t.child)
              : ((t.updateQueue = n.updateQueue),
                (t.flags &= -2053),
                (n.lanes &= ~o),
                Hl(n, t, o))
          );
        }
        function Cl(n, t, e, r, o) {
          if (Lo(e)) {
            var i = !0;
            Fo(t);
          } else i = !1;
          if ((xi(t, o), null === t.stateNode))
            Bl(n, t), Hi(t, e, r), Ki(t, e, r, o), (r = !0);
          else if (null === n) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var c = a.context,
              s = e.contextType;
            'object' === typeof s && null !== s
              ? (s = Ei(s))
              : (s = jo(t, (s = Lo(e) ? Po : No.current)));
            var u = e.getDerivedStateFromProps,
              p =
                'function' === typeof u ||
                'function' === typeof a.getSnapshotBeforeUpdate;
            p ||
              ('function' !== typeof a.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof a.componentWillReceiveProps) ||
              ((l !== r || c !== s) && Qi(t, a, r, s)),
              (Pi = !1);
            var d = t.memoizedState;
            (a.state = d),
              Di(t, r, a, o),
              (c = t.memoizedState),
              l !== r || d !== c || Oo.current || Pi
                ? ('function' === typeof u &&
                    (Ui(t, e, u, r), (c = t.memoizedState)),
                  (l = Pi || Bi(t, e, l, r, d, c, s))
                    ? (p ||
                        ('function' !== typeof a.UNSAFE_componentWillMount &&
                          'function' !== typeof a.componentWillMount) ||
                        ('function' === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        'function' === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      'function' === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (a.props = r),
                  (a.state = c),
                  (a.context = s),
                  (r = l))
                : ('function' === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Li(n, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : wi(t.type, l)),
              (a.props = s),
              (p = t.pendingProps),
              (d = a.context),
              'object' === typeof (c = e.contextType) && null !== c
                ? (c = Ei(c))
                : (c = jo(t, (c = Lo(e) ? Po : No.current)));
            var f = e.getDerivedStateFromProps;
            (u =
              'function' === typeof f ||
              'function' === typeof a.getSnapshotBeforeUpdate) ||
              ('function' !== typeof a.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof a.componentWillReceiveProps) ||
              ((l !== p || d !== c) && Qi(t, a, r, c)),
              (Pi = !1),
              (d = t.memoizedState),
              (a.state = d),
              Di(t, r, a, o);
            var v = t.memoizedState;
            l !== p || d !== v || Oo.current || Pi
              ? ('function' === typeof f &&
                  (Ui(t, e, f, r), (v = t.memoizedState)),
                (s = Pi || Bi(t, e, s, r, d, v, c) || !1)
                  ? (u ||
                      ('function' !== typeof a.UNSAFE_componentWillUpdate &&
                        'function' !== typeof a.componentWillUpdate) ||
                      ('function' === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, v, c),
                      'function' === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, v, c)),
                    'function' === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof a.componentDidUpdate ||
                      (l === n.memoizedProps && d === n.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof a.getSnapshotBeforeUpdate ||
                      (l === n.memoizedProps && d === n.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
                (a.props = r),
                (a.state = v),
                (a.context = c),
                (r = s))
              : ('function' !== typeof a.componentDidUpdate ||
                  (l === n.memoizedProps && d === n.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof a.getSnapshotBeforeUpdate ||
                  (l === n.memoizedProps && d === n.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nl(n, t, e, r, i, o);
        }
        function Nl(n, t, e, r, o, i) {
          El(n, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return o && Do(t, e, !1), Hl(n, t, i);
          (r = t.stateNode), (gl.current = t);
          var l =
            a && 'function' !== typeof e.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== n && a
              ? ((t.child = Gi(t, n.child, null, i)),
                (t.child = Gi(t, null, l, i)))
              : Tl(n, t, l, i),
            (t.memoizedState = r.state),
            o && Do(t, e, !0),
            t.child
          );
        }
        function Ol(n) {
          var t = n.stateNode;
          t.pendingContext
            ? Ro(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ro(0, t.context, !1),
            oa(n, t.containerInfo);
        }
        function Pl(n, t, e, r, o) {
          return vi(), hi(o), (t.flags |= 256), Tl(n, t, e, r), t.child;
        }
        var jl,
          Ll,
          Al,
          Rl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(n) {
          return { baseLanes: n, cachePool: null, transitions: null };
        }
        function Fl(n, t, e) {
          var r,
            o = t.pendingProps,
            a = ca.current,
            l = !1,
            c = 0 !== (128 & t.flags);
          if (
            ((r = c) ||
              (r = (null === n || null !== n.memoizedState) && 0 !== (2 & a)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== n && null === n.memoizedState) || (a |= 1),
            _o(ca, 1 & a),
            null === n)
          )
            return (
              ui(t),
              null !== (n = t.memoizedState) && null !== (n = n.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === n.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((c = o.children),
                  (n = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (c = { mode: 'hidden', children: c }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = c))
                        : (l = Is(c, o, 0, null)),
                      (n = Rs(n, o, e, null)),
                      (l.return = t),
                      (n.return = t),
                      (l.sibling = n),
                      (t.child = l),
                      (t.child.memoizedState = Il(e)),
                      (t.memoizedState = Rl),
                      n)
                    : Dl(t, c))
            );
          if (null !== (a = n.memoizedState) && null !== (r = a.dehydrated))
            return (function (n, t, e, r, o, a, l) {
              if (e)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ml(n, t, l, (r = pl(Error(i(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = n.child), (t.flags |= 128), null)
                    : ((a = r.fallback),
                      (o = t.mode),
                      (r = Is(
                        { mode: 'visible', children: r.children },
                        o,
                        0,
                        null
                      )),
                      ((a = Rs(a, o, l, null)).flags |= 2),
                      (r.return = t),
                      (a.return = t),
                      (r.sibling = a),
                      (t.child = r),
                      0 !== (1 & t.mode) && Gi(t, n.child, null, l),
                      (t.child.memoizedState = Il(l)),
                      (t.memoizedState = Rl),
                      a);
              if (0 === (1 & t.mode)) return Ml(n, t, l, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var c = r.dgst;
                return (
                  (r = c), Ml(n, t, l, (r = pl((a = Error(i(419))), r, void 0)))
                );
              }
              if (((c = 0 !== (l & n.childLanes)), bl || c)) {
                if (null !== (r = Nc)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== a.retryLane &&
                    ((a.retryLane = o), Oi(n, o), es(r, n, o, -1));
                }
                return hs(), Ml(n, t, l, (r = pl(Error(i(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = n.child),
                  (t = _s.bind(null, n)),
                  (o._reactRetry = t),
                  null)
                : ((n = a.treeContext),
                  (oi = so(o.nextSibling)),
                  (ri = t),
                  (ii = !0),
                  (ai = null),
                  null !== n &&
                    ((Zo[qo++] = Go),
                    (Zo[qo++] = Yo),
                    (Zo[qo++] = Jo),
                    (Go = n.id),
                    (Yo = n.overflow),
                    (Jo = t)),
                  (t = Dl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(n, t, c, o, r, a, e);
          if (l) {
            (l = o.fallback), (c = t.mode), (r = (a = n.child).sibling);
            var s = { mode: 'hidden', children: o.children };
            return (
              0 === (1 & c) && t.child !== a
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = s),
                  (t.deletions = null))
                : ((o = Ls(a, s)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (l = Ls(r, l))
                : ((l = Rs(l, c, e, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (c =
                null === (c = n.child.memoizedState)
                  ? Il(e)
                  : {
                      baseLanes: c.baseLanes | e,
                      cachePool: null,
                      transitions: c.transitions,
                    }),
              (l.memoizedState = c),
              (l.childLanes = n.childLanes & ~e),
              (t.memoizedState = Rl),
              o
            );
          }
          return (
            (n = (l = n.child).sibling),
            (o = Ls(l, { mode: 'visible', children: o.children })),
            0 === (1 & t.mode) && (o.lanes = e),
            (o.return = t),
            (o.sibling = null),
            null !== n &&
              (null === (e = t.deletions)
                ? ((t.deletions = [n]), (t.flags |= 16))
                : e.push(n)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Dl(n, t) {
          return (
            ((t = Is(
              { mode: 'visible', children: t },
              n.mode,
              0,
              null
            )).return = n),
            (n.child = t)
          );
        }
        function Ml(n, t, e, r) {
          return (
            null !== r && hi(r),
            Gi(t, n.child, null, e),
            ((n = Dl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            n
          );
        }
        function Vl(n, t, e) {
          n.lanes |= t;
          var r = n.alternate;
          null !== r && (r.lanes |= t), Si(n.return, t, e);
        }
        function Ul(n, t, e, r, o) {
          var i = n.memoizedState;
          null === i
            ? (n.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: e,
                tailMode: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = e),
              (i.tailMode = o));
        }
        function Wl(n, t, e) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Tl(n, t, r.children, e), 0 !== (2 & (r = ca.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== n && 0 !== (128 & n.flags))
              n: for (n = t.child; null !== n; ) {
                if (13 === n.tag) null !== n.memoizedState && Vl(n, e, t);
                else if (19 === n.tag) Vl(n, e, t);
                else if (null !== n.child) {
                  (n.child.return = n), (n = n.child);
                  continue;
                }
                if (n === t) break n;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === t) break n;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              }
            r &= 1;
          }
          if ((_o(ca, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (e = t.child, o = null; null !== e; )
                  null !== (n = e.alternate) && null === sa(n) && (o = e),
                    (e = e.sibling);
                null === (e = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = e.sibling), (e.sibling = null)),
                  Ul(t, !1, o, e, i);
                break;
              case 'backwards':
                for (e = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (n = o.alternate) && null === sa(n)) {
                    t.child = o;
                    break;
                  }
                  (n = o.sibling), (o.sibling = e), (e = o), (o = n);
                }
                Ul(t, !0, e, null, i);
                break;
              case 'together':
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Bl(n, t) {
          0 === (1 & t.mode) &&
            null !== n &&
            ((n.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(n, t, e) {
          if (
            (null !== n && (t.dependencies = n.dependencies),
            (Ic |= t.lanes),
            0 === (e & t.childLanes))
          )
            return null;
          if (null !== n && t.child !== n.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              e = Ls((n = t.child), n.pendingProps), t.child = e, e.return = t;
              null !== n.sibling;

            )
              (n = n.sibling),
                ((e = e.sibling = Ls(n, n.pendingProps)).return = t);
            e.sibling = null;
          }
          return t.child;
        }
        function Ql(n, t) {
          if (!ii)
            switch (n.tailMode) {
              case 'hidden':
                t = n.tail;
                for (var e = null; null !== t; )
                  null !== t.alternate && (e = t), (t = t.sibling);
                null === e ? (n.tail = null) : (e.sibling = null);
                break;
              case 'collapsed':
                e = n.tail;
                for (var r = null; null !== e; )
                  null !== e.alternate && (r = e), (e = e.sibling);
                null === r
                  ? t || null === n.tail
                    ? (n.tail = null)
                    : (n.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Kl(n) {
          var t = null !== n.alternate && n.alternate.child === n.child,
            e = 0,
            r = 0;
          if (t)
            for (var o = n.child; null !== o; )
              (e |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = n),
                (o = o.sibling);
          else
            for (o = n.child; null !== o; )
              (e |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = n),
                (o = o.sibling);
          return (n.subtreeFlags |= r), (n.childLanes = e), t;
        }
        function Xl(n, t, e) {
          var r = t.pendingProps;
          switch ((ei(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Kl(t), null;
            case 1:
            case 17:
              return Lo(t.type) && Ao(), Kl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ia(),
                Eo(Oo),
                Eo(No),
                pa(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== n && null !== n.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === n ||
                      (n.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ai && (as(ai), (ai = null)))),
                Kl(t),
                null
              );
            case 5:
              la(t);
              var o = ra(ea.current);
              if (((e = t.type), null !== n && null != t.stateNode))
                Ll(n, t, e, r),
                  n.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Kl(t), null;
                }
                if (((n = ra(na.current)), di(t))) {
                  (r = t.stateNode), (e = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[fo] = t), (r[vo] = a), (n = 0 !== (1 & t.mode)), e)
                  ) {
                    case 'dialog':
                      Mr('cancel', r), Mr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Mr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < Rr.length; o++) Mr(Rr[o], r);
                      break;
                    case 'source':
                      Mr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Mr('error', r), Mr('load', r);
                      break;
                    case 'details':
                      Mr('toggle', r);
                      break;
                    case 'input':
                      J(r, a), Mr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Mr('invalid', r);
                      break;
                    case 'textarea':
                      on(r, a), Mr('invalid', r);
                  }
                  for (var c in (gn(e, a), (o = null), a))
                    if (a.hasOwnProperty(c)) {
                      var s = a[c];
                      'children' === c
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== a.suppressHydrationWarning &&
                              Yr(r.textContent, s, n),
                            (o = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== a.suppressHydrationWarning &&
                              Yr(r.textContent, s, n),
                            (o = ['children', '' + s]))
                        : l.hasOwnProperty(c) &&
                          null != s &&
                          'onScroll' === c &&
                          Mr('scroll', r);
                    }
                  switch (e) {
                    case 'input':
                      K(r), $(r, a, !0);
                      break;
                    case 'textarea':
                      K(r), ln(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof a.onClick && (r.onclick = $r);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (c = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === n && (n = cn(e)),
                    'http://www.w3.org/1999/xhtml' === n
                      ? 'script' === e
                        ? (((n = c.createElement('div')).innerHTML =
                            '<script></script>'),
                          (n = n.removeChild(n.firstChild)))
                        : 'string' === typeof r.is
                          ? (n = c.createElement(e, { is: r.is }))
                          : ((n = c.createElement(e)),
                            'select' === e &&
                              ((c = n),
                              r.multiple
                                ? (c.multiple = !0)
                                : r.size && (c.size = r.size)))
                      : (n = c.createElementNS(n, e)),
                    (n[fo] = t),
                    (n[vo] = r),
                    jl(n, t),
                    (t.stateNode = n);
                  n: {
                    switch (((c = bn(e, r)), e)) {
                      case 'dialog':
                        Mr('cancel', n), Mr('close', n), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Mr('load', n), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < Rr.length; o++) Mr(Rr[o], n);
                        o = r;
                        break;
                      case 'source':
                        Mr('error', n), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Mr('error', n), Mr('load', n), (o = r);
                        break;
                      case 'details':
                        Mr('toggle', n), (o = r);
                        break;
                      case 'input':
                        J(n, r), (o = q(n, r)), Mr('invalid', n);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (n._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = F({}, r, { value: void 0 })),
                          Mr('invalid', n);
                        break;
                      case 'textarea':
                        on(n, r), (o = rn(n, r)), Mr('invalid', n);
                    }
                    for (a in (gn(e, o), (s = o)))
                      if (s.hasOwnProperty(a)) {
                        var u = s[a];
                        'style' === a
                          ? wn(n, u)
                          : 'dangerouslySetInnerHTML' === a
                            ? null != (u = u ? u.__html : void 0) && dn(n, u)
                            : 'children' === a
                              ? 'string' === typeof u
                                ? ('textarea' !== e || '' !== u) && fn(n, u)
                                : 'number' === typeof u && fn(n, '' + u)
                              : 'suppressContentEditableWarning' !== a &&
                                'suppressHydrationWarning' !== a &&
                                'autoFocus' !== a &&
                                (l.hasOwnProperty(a)
                                  ? null != u &&
                                    'onScroll' === a &&
                                    Mr('scroll', n)
                                  : null != u && g(n, a, u, c));
                      }
                    switch (e) {
                      case 'input':
                        K(n), $(n, r, !1);
                        break;
                      case 'textarea':
                        K(n), ln(n);
                        break;
                      case 'option':
                        null != r.value &&
                          n.setAttribute('value', '' + H(r.value));
                        break;
                      case 'select':
                        (n.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? en(n, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              en(n, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof o.onClick && (n.onclick = $r);
                    }
                    switch (e) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break n;
                      case 'img':
                        r = !0;
                        break n;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Kl(t), null;
            case 6:
              if (n && null != t.stateNode) Al(0, t, n.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((e = ra(ea.current)), ra(na.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (e = t.memoizedProps),
                    (r[fo] = t),
                    (a = r.nodeValue !== e) && null !== (n = ri))
                  )
                    switch (n.tag) {
                      case 3:
                        Yr(r.nodeValue, e, 0 !== (1 & n.mode));
                        break;
                      case 5:
                        !0 !== n.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, e, 0 !== (1 & n.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(
                    r
                  ))[fo] = t),
                    (t.stateNode = r);
              }
              return Kl(t), null;
            case 13:
              if (
                (Eo(ca),
                (r = t.memoizedState),
                null === n ||
                  (null !== n.memoizedState &&
                    null !== n.memoizedState.dehydrated))
              ) {
                if (
                  ii &&
                  null !== oi &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), vi(), (t.flags |= 98560), (a = !1);
                else if (((a = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === n) {
                    if (!a) throw Error(i(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(i(317));
                    a[fo] = t;
                  } else
                    vi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Kl(t), (a = !1);
                } else null !== ai && (as(ai), (ai = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = e), t)
                : ((r = null !== r) !==
                    (null !== n && null !== n.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === n || 0 !== (1 & ca.current)
                        ? 0 === Ac && (Ac = 3)
                        : hs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Kl(t),
                  null);
            case 4:
              return (
                ia(), null === n && Wr(t.stateNode.containerInfo), Kl(t), null
              );
            case 10:
              return ki(t.type._context), Kl(t), null;
            case 19:
              if ((Eo(ca), null === (a = t.memoizedState))) return Kl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (c = a.rendering)))
                if (r) Ql(a, !1);
                else {
                  if (0 !== Ac || (null !== n && 0 !== (128 & n.flags)))
                    for (n = t.child; null !== n; ) {
                      if (null !== (c = sa(n))) {
                        for (
                          t.flags |= 128,
                            Ql(a, !1),
                            null !== (r = c.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = e,
                            e = t.child;
                          null !== e;

                        )
                          (n = r),
                            ((a = e).flags &= 14680066),
                            null === (c = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = n),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = c.childLanes),
                                (a.lanes = c.lanes),
                                (a.child = c.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = c.memoizedProps),
                                (a.memoizedState = c.memoizedState),
                                (a.updateQueue = c.updateQueue),
                                (a.type = c.type),
                                (n = c.dependencies),
                                (a.dependencies =
                                  null === n
                                    ? null
                                    : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext,
                                      })),
                            (e = e.sibling);
                        return _o(ca, (1 & ca.current) | 2), t.child;
                      }
                      n = n.sibling;
                    }
                  null !== a.tail &&
                    Yn() > Wc &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ql(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (n = sa(c))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (e = n.updateQueue) &&
                        ((t.updateQueue = e), (t.flags |= 4)),
                      Ql(a, !0),
                      null === a.tail &&
                        'hidden' === a.tailMode &&
                        !c.alternate &&
                        !ii)
                    )
                      return Kl(t), null;
                  } else
                    2 * Yn() - a.renderingStartTime > Wc &&
                      1073741824 !== e &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ql(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (e = a.last) ? (e.sibling = c) : (t.child = c),
                    (a.last = c));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Yn()),
                  (t.sibling = null),
                  (e = ca.current),
                  _o(ca, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Kl(t), null);
            case 22:
            case 23:
              return (
                ps(),
                (r = null !== t.memoizedState),
                null !== n &&
                  (null !== n.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & jc) &&
                    (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Kl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Zl(n, t) {
          switch ((ei(t), t.tag)) {
            case 1:
              return (
                Lo(t.type) && Ao(),
                65536 & (n = t.flags)
                  ? ((t.flags = (-65537 & n) | 128), t)
                  : null
              );
            case 3:
              return (
                ia(),
                Eo(Oo),
                Eo(No),
                pa(),
                0 !== (65536 & (n = t.flags)) && 0 === (128 & n)
                  ? ((t.flags = (-65537 & n) | 128), t)
                  : null
              );
            case 5:
              return la(t), null;
            case 13:
              if (
                (Eo(ca),
                null !== (n = t.memoizedState) && null !== n.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                vi();
              }
              return 65536 & (n = t.flags)
                ? ((t.flags = (-65537 & n) | 128), t)
                : null;
            case 19:
              return Eo(ca), null;
            case 4:
              return ia(), null;
            case 10:
              return ki(t.type._context), null;
            case 22:
            case 23:
              return ps(), null;
            default:
              return null;
          }
        }
        (jl = function (n, t) {
          for (var e = t.child; null !== e; ) {
            if (5 === e.tag || 6 === e.tag) n.appendChild(e.stateNode);
            else if (4 !== e.tag && null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        }),
          (Ll = function (n, t, e, r) {
            var o = n.memoizedProps;
            if (o !== r) {
              (n = t.stateNode), ra(na.current);
              var i,
                a = null;
              switch (e) {
                case 'input':
                  (o = q(n, o)), (r = q(n, r)), (a = []);
                  break;
                case 'select':
                  (o = F({}, o, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case 'textarea':
                  (o = rn(n, o)), (r = rn(n, r)), (a = []);
                  break;
                default:
                  'function' !== typeof o.onClick &&
                    'function' === typeof r.onClick &&
                    (n.onclick = $r);
              }
              for (u in (gn(e, r), (e = null), o))
                if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                  if ('style' === u) {
                    var c = o[u];
                    for (i in c)
                      c.hasOwnProperty(i) && (e || (e = {}), (e[i] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== u &&
                      'children' !== u &&
                      'suppressContentEditableWarning' !== u &&
                      'suppressHydrationWarning' !== u &&
                      'autoFocus' !== u &&
                      (l.hasOwnProperty(u)
                        ? a || (a = [])
                        : (a = a || []).push(u, null));
              for (u in r) {
                var s = r[u];
                if (
                  ((c = null != o ? o[u] : void 0),
                  r.hasOwnProperty(u) && s !== c && (null != s || null != c))
                )
                  if ('style' === u)
                    if (c) {
                      for (i in c)
                        !c.hasOwnProperty(i) ||
                          (s && s.hasOwnProperty(i)) ||
                          (e || (e = {}), (e[i] = ''));
                      for (i in s)
                        s.hasOwnProperty(i) &&
                          c[i] !== s[i] &&
                          (e || (e = {}), (e[i] = s[i]));
                    } else e || (a || (a = []), a.push(u, e)), (e = s);
                  else
                    'dangerouslySetInnerHTML' === u
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (a = a || []).push(u, s))
                      : 'children' === u
                        ? ('string' !== typeof s && 'number' !== typeof s) ||
                          (a = a || []).push(u, '' + s)
                        : 'suppressContentEditableWarning' !== u &&
                          'suppressHydrationWarning' !== u &&
                          (l.hasOwnProperty(u)
                            ? (null != s && 'onScroll' === u && Mr('scroll', n),
                              a || c === s || (a = []))
                            : (a = a || []).push(u, s));
              }
              e && (a = a || []).push('style', e);
              var u = a;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Al = function (n, t, e, r) {
            e !== r && (t.flags |= 4);
          });
        var ql = !1,
          Jl = !1,
          Gl = 'function' === typeof WeakSet ? WeakSet : Set,
          Yl = null;
        function $l(n, t) {
          var e = n.ref;
          if (null !== e)
            if ('function' === typeof e)
              try {
                e(null);
              } catch (r) {
                Ss(n, t, r);
              }
            else e.current = null;
        }
        function nc(n, t, e) {
          try {
            e();
          } catch (r) {
            Ss(n, t, r);
          }
        }
        var tc = !1;
        function ec(n, t, e) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & n) === n) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && nc(t, e, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rc(n, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var e = (t = t.next);
            do {
              if ((e.tag & n) === n) {
                var r = e.create;
                e.destroy = r();
              }
              e = e.next;
            } while (e !== t);
          }
        }
        function oc(n) {
          var t = n.ref;
          if (null !== t) {
            var e = n.stateNode;
            n.tag, (n = e), 'function' === typeof t ? t(n) : (t.current = n);
          }
        }
        function ic(n) {
          var t = n.alternate;
          null !== t && ((n.alternate = null), ic(t)),
            (n.child = null),
            (n.deletions = null),
            (n.sibling = null),
            5 === n.tag &&
              null !== (t = n.stateNode) &&
              (delete t[fo],
              delete t[vo],
              delete t[mo],
              delete t[wo],
              delete t[yo]),
            (n.stateNode = null),
            (n.return = null),
            (n.dependencies = null),
            (n.memoizedProps = null),
            (n.memoizedState = null),
            (n.pendingProps = null),
            (n.stateNode = null),
            (n.updateQueue = null);
        }
        function ac(n) {
          return 5 === n.tag || 3 === n.tag || 4 === n.tag;
        }
        function lc(n) {
          n: for (;;) {
            for (; null === n.sibling; ) {
              if (null === n.return || ac(n.return)) return null;
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue n;
              if (null === n.child || 4 === n.tag) continue n;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) return n.stateNode;
          }
        }
        function cc(n, t, e) {
          var r = n.tag;
          if (5 === r || 6 === r)
            (n = n.stateNode),
              t
                ? 8 === e.nodeType
                  ? e.parentNode.insertBefore(n, t)
                  : e.insertBefore(n, t)
                : (8 === e.nodeType
                    ? (t = e.parentNode).insertBefore(n, e)
                    : (t = e).appendChild(n),
                  (null !== (e = e._reactRootContainer) && void 0 !== e) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (n = n.child))
            for (cc(n, t, e), n = n.sibling; null !== n; )
              cc(n, t, e), (n = n.sibling);
        }
        function sc(n, t, e) {
          var r = n.tag;
          if (5 === r || 6 === r)
            (n = n.stateNode), t ? e.insertBefore(n, t) : e.appendChild(n);
          else if (4 !== r && null !== (n = n.child))
            for (sc(n, t, e), n = n.sibling; null !== n; )
              sc(n, t, e), (n = n.sibling);
        }
        var uc = null,
          pc = !1;
        function dc(n, t, e) {
          for (e = e.child; null !== e; ) fc(n, t, e), (e = e.sibling);
        }
        function fc(n, t, e) {
          if (at && 'function' === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, e);
            } catch (l) {}
          switch (e.tag) {
            case 5:
              Jl || $l(e, t);
            case 6:
              var r = uc,
                o = pc;
              (uc = null),
                dc(n, t, e),
                (pc = o),
                null !== (uc = r) &&
                  (pc
                    ? ((n = uc),
                      (e = e.stateNode),
                      8 === n.nodeType
                        ? n.parentNode.removeChild(e)
                        : n.removeChild(e))
                    : uc.removeChild(e.stateNode));
              break;
            case 18:
              null !== uc &&
                (pc
                  ? ((n = uc),
                    (e = e.stateNode),
                    8 === n.nodeType
                      ? co(n.parentNode, e)
                      : 1 === n.nodeType && co(n, e),
                    Bt(n))
                  : co(uc, e.stateNode));
              break;
            case 4:
              (r = uc),
                (o = pc),
                (uc = e.stateNode.containerInfo),
                (pc = !0),
                dc(n, t, e),
                (uc = r),
                (pc = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Jl &&
                null !== (r = e.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var i = o,
                    a = i.destroy;
                  (i = i.tag),
                    void 0 !== a &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      nc(e, t, a),
                    (o = o.next);
                } while (o !== r);
              }
              dc(n, t, e);
              break;
            case 1:
              if (
                !Jl &&
                ($l(e, t),
                'function' === typeof (r = e.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = e.memoizedProps),
                    (r.state = e.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Ss(e, t, l);
                }
              dc(n, t, e);
              break;
            case 21:
              dc(n, t, e);
              break;
            case 22:
              1 & e.mode
                ? ((Jl = (r = Jl) || null !== e.memoizedState),
                  dc(n, t, e),
                  (Jl = r))
                : dc(n, t, e);
              break;
            default:
              dc(n, t, e);
          }
        }
        function vc(n) {
          var t = n.updateQueue;
          if (null !== t) {
            n.updateQueue = null;
            var e = n.stateNode;
            null === e && (e = n.stateNode = new Gl()),
              t.forEach(function (t) {
                var r = Cs.bind(null, n, t);
                e.has(t) || (e.add(t), t.then(r, r));
              });
          }
        }
        function hc(n, t) {
          var e = t.deletions;
          if (null !== e)
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              try {
                var a = n,
                  l = t,
                  c = l;
                n: for (; null !== c; ) {
                  switch (c.tag) {
                    case 5:
                      (uc = c.stateNode), (pc = !1);
                      break n;
                    case 3:
                    case 4:
                      (uc = c.stateNode.containerInfo), (pc = !0);
                      break n;
                  }
                  c = c.return;
                }
                if (null === uc) throw Error(i(160));
                fc(a, l, o), (uc = null), (pc = !1);
                var s = o.alternate;
                null !== s && (s.return = null), (o.return = null);
              } catch (u) {
                Ss(o, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mc(t, n), (t = t.sibling);
        }
        function mc(n, t) {
          var e = n.alternate,
            r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hc(t, n), wc(n), 4 & r)) {
                try {
                  ec(3, n, n.return), rc(3, n);
                } catch (m) {
                  Ss(n, n.return, m);
                }
                try {
                  ec(5, n, n.return);
                } catch (m) {
                  Ss(n, n.return, m);
                }
              }
              break;
            case 1:
              hc(t, n), wc(n), 512 & r && null !== e && $l(e, e.return);
              break;
            case 5:
              if (
                (hc(t, n),
                wc(n),
                512 & r && null !== e && $l(e, e.return),
                32 & n.flags)
              ) {
                var o = n.stateNode;
                try {
                  fn(o, '');
                } catch (m) {
                  Ss(n, n.return, m);
                }
              }
              if (4 & r && null != (o = n.stateNode)) {
                var a = n.memoizedProps,
                  l = null !== e ? e.memoizedProps : a,
                  c = n.type,
                  s = n.updateQueue;
                if (((n.updateQueue = null), null !== s))
                  try {
                    'input' === c &&
                      'radio' === a.type &&
                      null != a.name &&
                      G(o, a),
                      bn(c, l);
                    var u = bn(c, a);
                    for (l = 0; l < s.length; l += 2) {
                      var p = s[l],
                        d = s[l + 1];
                      'style' === p
                        ? wn(o, d)
                        : 'dangerouslySetInnerHTML' === p
                          ? dn(o, d)
                          : 'children' === p
                            ? fn(o, d)
                            : g(o, p, d, u);
                    }
                    switch (c) {
                      case 'input':
                        Y(o, a);
                        break;
                      case 'textarea':
                        an(o, a);
                        break;
                      case 'select':
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var v = a.value;
                        null != v
                          ? en(o, !!a.multiple, v, !1)
                          : f !== !!a.multiple &&
                            (null != a.defaultValue
                              ? en(o, !!a.multiple, a.defaultValue, !0)
                              : en(o, !!a.multiple, a.multiple ? [] : '', !1));
                    }
                    o[vo] = a;
                  } catch (m) {
                    Ss(n, n.return, m);
                  }
              }
              break;
            case 6:
              if ((hc(t, n), wc(n), 4 & r)) {
                if (null === n.stateNode) throw Error(i(162));
                (o = n.stateNode), (a = n.memoizedProps);
                try {
                  o.nodeValue = a;
                } catch (m) {
                  Ss(n, n.return, m);
                }
              }
              break;
            case 3:
              if (
                (hc(t, n),
                wc(n),
                4 & r && null !== e && e.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  Ss(n, n.return, m);
                }
              break;
            case 4:
            default:
              hc(t, n), wc(n);
              break;
            case 13:
              hc(t, n),
                wc(n),
                8192 & (o = n.child).flags &&
                  ((a = null !== o.memoizedState),
                  (o.stateNode.isHidden = a),
                  !a ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Uc = Yn())),
                4 & r && vc(n);
              break;
            case 22:
              if (
                ((p = null !== e && null !== e.memoizedState),
                1 & n.mode
                  ? ((Jl = (u = Jl) || p), hc(t, n), (Jl = u))
                  : hc(t, n),
                wc(n),
                8192 & r)
              ) {
                if (
                  ((u = null !== n.memoizedState),
                  (n.stateNode.isHidden = u) && !p && 0 !== (1 & n.mode))
                )
                  for (Yl = n, p = n.child; null !== p; ) {
                    for (d = Yl = p; null !== Yl; ) {
                      switch (((v = (f = Yl).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ec(4, f, f.return);
                          break;
                        case 1:
                          $l(f, f.return);
                          var h = f.stateNode;
                          if ('function' === typeof h.componentWillUnmount) {
                            (r = f), (e = f.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (m) {
                              Ss(r, e, m);
                            }
                          }
                          break;
                        case 5:
                          $l(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            Tc(d);
                            continue;
                          }
                      }
                      null !== v ? ((v.return = f), (Yl = v)) : Tc(d);
                    }
                    p = p.sibling;
                  }
                n: for (p = null, d = n; ; ) {
                  if (5 === d.tag) {
                    if (null === p) {
                      p = d;
                      try {
                        (o = d.stateNode),
                          u
                            ? 'function' === typeof (a = o.style).setProperty
                              ? a.setProperty('display', 'none', 'important')
                              : (a.display = 'none')
                            : ((c = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (c.style.display = mn('display', l)));
                      } catch (m) {
                        Ss(n, n.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === p)
                      try {
                        d.stateNode.nodeValue = u ? '' : d.memoizedProps;
                      } catch (m) {
                        Ss(n, n.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === n) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === n) break n;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === n) break n;
                    p === d && (p = null), (d = d.return);
                  }
                  p === d && (p = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              hc(t, n), wc(n), 4 & r && vc(n);
            case 21:
          }
        }
        function wc(n) {
          var t = n.flags;
          if (2 & t) {
            try {
              n: {
                for (var e = n.return; null !== e; ) {
                  if (ac(e)) {
                    var r = e;
                    break n;
                  }
                  e = e.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fn(o, ''), (r.flags &= -33)),
                    sc(n, lc(n), o);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  cc(n, lc(n), a);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              Ss(n, n.return, l);
            }
            n.flags &= -3;
          }
          4096 & t && (n.flags &= -4097);
        }
        function yc(n, t, e) {
          (Yl = n), gc(n, t, e);
        }
        function gc(n, t, e) {
          for (var r = 0 !== (1 & n.mode); null !== Yl; ) {
            var o = Yl,
              i = o.child;
            if (22 === o.tag && r) {
              var a = null !== o.memoizedState || ql;
              if (!a) {
                var l = o.alternate,
                  c = (null !== l && null !== l.memoizedState) || Jl;
                l = ql;
                var s = Jl;
                if (((ql = a), (Jl = c) && !s))
                  for (Yl = o; null !== Yl; )
                    (c = (a = Yl).child),
                      22 === a.tag && null !== a.memoizedState
                        ? zc(o)
                        : null !== c
                          ? ((c.return = a), (Yl = c))
                          : zc(o);
                for (; null !== i; ) (Yl = i), gc(i, t, e), (i = i.sibling);
                (Yl = o), (ql = l), (Jl = s);
              }
              bc(n);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== i
                ? ((i.return = o), (Yl = i))
                : bc(n);
          }
        }
        function bc(n) {
          for (; null !== Yl; ) {
            var t = Yl;
            if (0 !== (8772 & t.flags)) {
              var e = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl || rc(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Jl)
                        if (null === e) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? e.memoizedProps
                              : wi(t.type, e.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            e.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Mi(t, a, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((e = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              e = t.child.stateNode;
                          }
                        Mi(t, l, e);
                      }
                      break;
                    case 5:
                      var c = t.stateNode;
                      if (null === e && 4 & t.flags) {
                        e = c;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && e.focus();
                            break;
                          case 'img':
                            s.src && (e.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var p = u.memoizedState;
                          if (null !== p) {
                            var d = p.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Jl || (512 & t.flags && oc(t));
              } catch (f) {
                Ss(t, t.return, f);
              }
            }
            if (t === n) {
              Yl = null;
              break;
            }
            if (null !== (e = t.sibling)) {
              (e.return = t.return), (Yl = e);
              break;
            }
            Yl = t.return;
          }
        }
        function Tc(n) {
          for (; null !== Yl; ) {
            var t = Yl;
            if (t === n) {
              Yl = null;
              break;
            }
            var e = t.sibling;
            if (null !== e) {
              (e.return = t.return), (Yl = e);
              break;
            }
            Yl = t.return;
          }
        }
        function zc(n) {
          for (; null !== Yl; ) {
            var t = Yl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var e = t.return;
                  try {
                    rc(4, t);
                  } catch (c) {
                    Ss(t, e, c);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (c) {
                      Ss(t, o, c);
                    }
                  }
                  var i = t.return;
                  try {
                    oc(t);
                  } catch (c) {
                    Ss(t, i, c);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    oc(t);
                  } catch (c) {
                    Ss(t, a, c);
                  }
              }
            } catch (c) {
              Ss(t, t.return, c);
            }
            if (t === n) {
              Yl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Yl = l);
              break;
            }
            Yl = t.return;
          }
        }
        var kc,
          Sc = Math.ceil,
          xc = b.ReactCurrentDispatcher,
          Ec = b.ReactCurrentOwner,
          _c = b.ReactCurrentBatchConfig,
          Cc = 0,
          Nc = null,
          Oc = null,
          Pc = 0,
          jc = 0,
          Lc = xo(0),
          Ac = 0,
          Rc = null,
          Ic = 0,
          Fc = 0,
          Dc = 0,
          Mc = null,
          Vc = null,
          Uc = 0,
          Wc = 1 / 0,
          Bc = null,
          Hc = !1,
          Qc = null,
          Kc = null,
          Xc = !1,
          Zc = null,
          qc = 0,
          Jc = 0,
          Gc = null,
          Yc = -1,
          $c = 0;
        function ns() {
          return 0 !== (6 & Cc) ? Yn() : -1 !== Yc ? Yc : (Yc = Yn());
        }
        function ts(n) {
          return 0 === (1 & n.mode)
            ? 1
            : 0 !== (2 & Cc) && 0 !== Pc
              ? Pc & -Pc
              : null !== mi.transition
                ? (0 === $c && ($c = mt()), $c)
                : 0 !== (n = bt)
                  ? n
                  : (n = void 0 === (n = window.event) ? 16 : Gt(n.type));
        }
        function es(n, t, e, r) {
          if (50 < Jc) throw ((Jc = 0), (Gc = null), Error(i(185)));
          yt(n, e, r),
            (0 !== (2 & Cc) && n === Nc) ||
              (n === Nc && (0 === (2 & Cc) && (Fc |= e), 4 === Ac && ls(n, Pc)),
              rs(n, r),
              1 === e &&
                0 === Cc &&
                0 === (1 & t.mode) &&
                ((Wc = Yn() + 500), Vo && Bo()));
        }
        function rs(n, t) {
          var e = n.callbackNode;
          !(function (n, t) {
            for (
              var e = n.suspendedLanes,
                r = n.pingedLanes,
                o = n.expirationTimes,
                i = n.pendingLanes;
              0 < i;

            ) {
              var a = 31 - lt(i),
                l = 1 << a,
                c = o[a];
              -1 === c
                ? (0 !== (l & e) && 0 === (l & r)) || (o[a] = vt(l, t))
                : c <= t && (n.expiredLanes |= l),
                (i &= ~l);
            }
          })(n, t);
          var r = ft(n, n === Nc ? Pc : 0);
          if (0 === r)
            null !== e && qn(e),
              (n.callbackNode = null),
              (n.callbackPriority = 0);
          else if (((t = r & -r), n.callbackPriority !== t)) {
            if ((null != e && qn(e), 1 === t))
              0 === n.tag
                ? (function (n) {
                    (Vo = !0), Wo(n);
                  })(cs.bind(null, n))
                : Wo(cs.bind(null, n)),
                ao(function () {
                  0 === (6 & Cc) && Bo();
                }),
                (e = null);
            else {
              switch (Tt(r)) {
                case 1:
                  e = nt;
                  break;
                case 4:
                  e = tt;
                  break;
                case 16:
                default:
                  e = et;
                  break;
                case 536870912:
                  e = ot;
              }
              e = Ns(e, os.bind(null, n));
            }
            (n.callbackPriority = t), (n.callbackNode = e);
          }
        }
        function os(n, t) {
          if (((Yc = -1), ($c = 0), 0 !== (6 & Cc))) throw Error(i(327));
          var e = n.callbackNode;
          if (zs() && n.callbackNode !== e) return null;
          var r = ft(n, n === Nc ? Pc : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & n.expiredLanes) || t) t = ms(n, r);
          else {
            t = r;
            var o = Cc;
            Cc |= 2;
            var a = vs();
            for (
              (Nc === n && Pc === t) ||
              ((Bc = null), (Wc = Yn() + 500), ds(n, t));
              ;

            )
              try {
                ys();
                break;
              } catch (c) {
                fs(n, c);
              }
            zi(),
              (xc.current = a),
              (Cc = o),
              null !== Oc ? (t = 0) : ((Nc = null), (Pc = 0), (t = Ac));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(n)) && ((r = o), (t = is(n, o))),
              1 === t)
            )
              throw ((e = Rc), ds(n, 0), ls(n, r), rs(n, Yn()), e);
            if (6 === t) ls(n, r);
            else {
              if (
                ((o = n.current.alternate),
                0 === (30 & r) &&
                  !(function (n) {
                    for (var t = n; ; ) {
                      if (16384 & t.flags) {
                        var e = t.updateQueue;
                        if (null !== e && null !== (e = e.stores))
                          for (var r = 0; r < e.length; r++) {
                            var o = e[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(i(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((e = t.child), 16384 & t.subtreeFlags && null !== e))
                        (e.return = t), (t = e);
                      else {
                        if (t === n) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === n) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = ms(n, r)) &&
                    0 !== (a = ht(n)) &&
                    ((r = a), (t = is(n, a))),
                  1 === t))
              )
                throw ((e = Rc), ds(n, 0), ls(n, r), rs(n, Yn()), e);
              switch (((n.finishedWork = o), (n.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Ts(n, Vc, Bc);
                  break;
                case 3:
                  if (
                    (ls(n, r),
                    (130023424 & r) === r && 10 < (t = Uc + 500 - Yn()))
                  ) {
                    if (0 !== ft(n, 0)) break;
                    if (((o = n.suspendedLanes) & r) !== r) {
                      ns(), (n.pingedLanes |= n.suspendedLanes & o);
                      break;
                    }
                    n.timeoutHandle = ro(Ts.bind(null, n, Vc, Bc), t);
                    break;
                  }
                  Ts(n, Vc, Bc);
                  break;
                case 4:
                  if ((ls(n, r), (4194240 & r) === r)) break;
                  for (t = n.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - lt(r);
                    (a = 1 << l), (l = t[l]) > o && (o = l), (r &= ~a);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Yn() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Sc(r / 1960)) - r))
                  ) {
                    n.timeoutHandle = ro(Ts.bind(null, n, Vc, Bc), r);
                    break;
                  }
                  Ts(n, Vc, Bc);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rs(n, Yn()), n.callbackNode === e ? os.bind(null, n) : null;
        }
        function is(n, t) {
          var e = Mc;
          return (
            n.current.memoizedState.isDehydrated && (ds(n, t).flags |= 256),
            2 !== (n = ms(n, t)) && ((t = Vc), (Vc = e), null !== t && as(t)),
            n
          );
        }
        function as(n) {
          null === Vc ? (Vc = n) : Vc.push.apply(Vc, n);
        }
        function ls(n, t) {
          for (
            t &= ~Dc,
              t &= ~Fc,
              n.suspendedLanes |= t,
              n.pingedLanes &= ~t,
              n = n.expirationTimes;
            0 < t;

          ) {
            var e = 31 - lt(t),
              r = 1 << e;
            (n[e] = -1), (t &= ~r);
          }
        }
        function cs(n) {
          if (0 !== (6 & Cc)) throw Error(i(327));
          zs();
          var t = ft(n, 0);
          if (0 === (1 & t)) return rs(n, Yn()), null;
          var e = ms(n, t);
          if (0 !== n.tag && 2 === e) {
            var r = ht(n);
            0 !== r && ((t = r), (e = is(n, r)));
          }
          if (1 === e) throw ((e = Rc), ds(n, 0), ls(n, t), rs(n, Yn()), e);
          if (6 === e) throw Error(i(345));
          return (
            (n.finishedWork = n.current.alternate),
            (n.finishedLanes = t),
            Ts(n, Vc, Bc),
            rs(n, Yn()),
            null
          );
        }
        function ss(n, t) {
          var e = Cc;
          Cc |= 1;
          try {
            return n(t);
          } finally {
            0 === (Cc = e) && ((Wc = Yn() + 500), Vo && Bo());
          }
        }
        function us(n) {
          null !== Zc && 0 === Zc.tag && 0 === (6 & Cc) && zs();
          var t = Cc;
          Cc |= 1;
          var e = _c.transition,
            r = bt;
          try {
            if (((_c.transition = null), (bt = 1), n)) return n();
          } finally {
            (bt = r), (_c.transition = e), 0 === (6 & (Cc = t)) && Bo();
          }
        }
        function ps() {
          (jc = Lc.current), Eo(Lc);
        }
        function ds(n, t) {
          (n.finishedWork = null), (n.finishedLanes = 0);
          var e = n.timeoutHandle;
          if ((-1 !== e && ((n.timeoutHandle = -1), oo(e)), null !== Oc))
            for (e = Oc.return; null !== e; ) {
              var r = e;
              switch ((ei(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ao();
                  break;
                case 3:
                  ia(), Eo(Oo), Eo(No), pa();
                  break;
                case 5:
                  la(r);
                  break;
                case 4:
                  ia();
                  break;
                case 13:
                case 19:
                  Eo(ca);
                  break;
                case 10:
                  ki(r.type._context);
                  break;
                case 22:
                case 23:
                  ps();
              }
              e = e.return;
            }
          if (
            ((Nc = n),
            (Oc = n = Ls(n.current, null)),
            (Pc = jc = t),
            (Ac = 0),
            (Rc = null),
            (Dc = Fc = Ic = 0),
            (Vc = Mc = null),
            null !== _i)
          ) {
            for (t = 0; t < _i.length; t++)
              if (null !== (r = (e = _i[t]).interleaved)) {
                e.interleaved = null;
                var o = r.next,
                  i = e.pending;
                if (null !== i) {
                  var a = i.next;
                  (i.next = o), (r.next = a);
                }
                e.pending = r;
              }
            _i = null;
          }
          return n;
        }
        function fs(n, t) {
          for (;;) {
            var e = Oc;
            try {
              if ((zi(), (da.current = al), ya)) {
                for (var r = ha.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ya = !1;
              }
              if (
                ((va = 0),
                (wa = ma = ha = null),
                (ga = !1),
                (ba = 0),
                (Ec.current = null),
                null === e || null === e.return)
              ) {
                (Ac = 1), (Rc = t), (Oc = null);
                break;
              }
              n: {
                var a = n,
                  l = e.return,
                  c = e,
                  s = t;
                if (
                  ((t = Pc),
                  (c.flags |= 32768),
                  null !== s &&
                    'object' === typeof s &&
                    'function' === typeof s.then)
                ) {
                  var u = s,
                    p = c,
                    d = p.tag;
                  if (0 === (1 & p.mode) && (0 === d || 11 === d || 15 === d)) {
                    var f = p.alternate;
                    f
                      ? ((p.updateQueue = f.updateQueue),
                        (p.memoizedState = f.memoizedState),
                        (p.lanes = f.lanes))
                      : ((p.updateQueue = null), (p.memoizedState = null));
                  }
                  var v = wl(l);
                  if (null !== v) {
                    (v.flags &= -257),
                      yl(v, l, c, 0, t),
                      1 & v.mode && ml(a, u, t),
                      (s = u);
                    var h = (t = v).updateQueue;
                    if (null === h) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else h.add(s);
                    break n;
                  }
                  if (0 === (1 & t)) {
                    ml(a, u, t), hs();
                    break n;
                  }
                  s = Error(i(426));
                } else if (ii && 1 & c.mode) {
                  var w = wl(l);
                  if (null !== w) {
                    0 === (65536 & w.flags) && (w.flags |= 256),
                      yl(w, l, c, 0, t),
                      hi(ul(s, c));
                    break n;
                  }
                }
                (a = s = ul(s, c)),
                  4 !== Ac && (Ac = 2),
                  null === Mc ? (Mc = [a]) : Mc.push(a),
                  (a = l);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Fi(a, vl(0, s, t));
                      break n;
                    case 1:
                      c = s;
                      var y = a.type,
                        g = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== g &&
                            'function' === typeof g.componentDidCatch &&
                            (null === Kc || !Kc.has(g))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Fi(a, hl(a, c, t));
                        break n;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              bs(e);
            } catch (b) {
              (t = b), Oc === e && null !== e && (Oc = e = e.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var n = xc.current;
          return (xc.current = al), null === n ? al : n;
        }
        function hs() {
          (0 !== Ac && 3 !== Ac && 2 !== Ac) || (Ac = 4),
            null === Nc ||
              (0 === (268435455 & Ic) && 0 === (268435455 & Fc)) ||
              ls(Nc, Pc);
        }
        function ms(n, t) {
          var e = Cc;
          Cc |= 2;
          var r = vs();
          for ((Nc === n && Pc === t) || ((Bc = null), ds(n, t)); ; )
            try {
              ws();
              break;
            } catch (o) {
              fs(n, o);
            }
          if ((zi(), (Cc = e), (xc.current = r), null !== Oc))
            throw Error(i(261));
          return (Nc = null), (Pc = 0), Ac;
        }
        function ws() {
          for (; null !== Oc; ) gs(Oc);
        }
        function ys() {
          for (; null !== Oc && !Jn(); ) gs(Oc);
        }
        function gs(n) {
          var t = kc(n.alternate, n, jc);
          (n.memoizedProps = n.pendingProps),
            null === t ? bs(n) : (Oc = t),
            (Ec.current = null);
        }
        function bs(n) {
          var t = n;
          do {
            var e = t.alternate;
            if (((n = t.return), 0 === (32768 & t.flags))) {
              if (null !== (e = Xl(e, t, jc))) return void (Oc = e);
            } else {
              if (null !== (e = Zl(e, t)))
                return (e.flags &= 32767), void (Oc = e);
              if (null === n) return (Ac = 6), void (Oc = null);
              (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Oc = t);
            Oc = t = n;
          } while (null !== t);
          0 === Ac && (Ac = 5);
        }
        function Ts(n, t, e) {
          var r = bt,
            o = _c.transition;
          try {
            (_c.transition = null),
              (bt = 1),
              (function (n, t, e, r) {
                do {
                  zs();
                } while (null !== Zc);
                if (0 !== (6 & Cc)) throw Error(i(327));
                e = n.finishedWork;
                var o = n.finishedLanes;
                if (null === e) return null;
                if (
                  ((n.finishedWork = null),
                  (n.finishedLanes = 0),
                  e === n.current)
                )
                  throw Error(i(177));
                (n.callbackNode = null), (n.callbackPriority = 0);
                var a = e.lanes | e.childLanes;
                if (
                  ((function (n, t) {
                    var e = n.pendingLanes & ~t;
                    (n.pendingLanes = t),
                      (n.suspendedLanes = 0),
                      (n.pingedLanes = 0),
                      (n.expiredLanes &= t),
                      (n.mutableReadLanes &= t),
                      (n.entangledLanes &= t),
                      (t = n.entanglements);
                    var r = n.eventTimes;
                    for (n = n.expirationTimes; 0 < e; ) {
                      var o = 31 - lt(e),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (n[o] = -1), (e &= ~i);
                    }
                  })(n, a),
                  n === Nc && ((Oc = Nc = null), (Pc = 0)),
                  (0 === (2064 & e.subtreeFlags) && 0 === (2064 & e.flags)) ||
                    Xc ||
                    ((Xc = !0),
                    Ns(et, function () {
                      return zs(), null;
                    })),
                  (a = 0 !== (15990 & e.flags)),
                  0 !== (15990 & e.subtreeFlags) || a)
                ) {
                  (a = _c.transition), (_c.transition = null);
                  var l = bt;
                  bt = 1;
                  var c = Cc;
                  (Cc |= 4),
                    (Ec.current = null),
                    (function (n, t) {
                      if (((no = Qt), fr((n = dr())))) {
                        if ('selectionStart' in n)
                          var e = {
                            start: n.selectionStart,
                            end: n.selectionEnd,
                          };
                        else
                          n: {
                            var r =
                              (e =
                                ((e = n.ownerDocument) && e.defaultView) ||
                                window).getSelection && e.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              e = r.anchorNode;
                              var o = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                e.nodeType, a.nodeType;
                              } catch (T) {
                                e = null;
                                break n;
                              }
                              var l = 0,
                                c = -1,
                                s = -1,
                                u = 0,
                                p = 0,
                                d = n,
                                f = null;
                              t: for (;;) {
                                for (
                                  var v;
                                  d !== e ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (c = l + o),
                                    d !== a ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (v = d.firstChild);

                                )
                                  (f = d), (d = v);
                                for (;;) {
                                  if (d === n) break t;
                                  if (
                                    (f === e && ++u === o && (c = l),
                                    f === a && ++p === r && (s = l),
                                    null !== (v = d.nextSibling))
                                  )
                                    break;
                                  f = (d = f).parentNode;
                                }
                                d = v;
                              }
                              e =
                                -1 === c || -1 === s
                                  ? null
                                  : { start: c, end: s };
                            } else e = null;
                          }
                        e = e || { start: 0, end: 0 };
                      } else e = null;
                      for (
                        to = { focusedElem: n, selectionRange: e },
                          Qt = !1,
                          Yl = t;
                        null !== Yl;

                      )
                        if (
                          ((n = (t = Yl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== n)
                        )
                          (n.return = t), (Yl = n);
                        else
                          for (; null !== Yl; ) {
                            t = Yl;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var m = h.memoizedProps,
                                        w = h.memoizedState,
                                        y = t.stateNode,
                                        g = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : wi(t.type, m),
                                          w
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = g;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = '')
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (T) {
                              Ss(t, t.return, T);
                            }
                            if (null !== (n = t.sibling)) {
                              (n.return = t.return), (Yl = n);
                              break;
                            }
                            Yl = t.return;
                          }
                      (h = tc), (tc = !1);
                    })(n, e),
                    mc(e, n),
                    vr(to),
                    (Qt = !!no),
                    (to = no = null),
                    (n.current = e),
                    yc(e, n, o),
                    Gn(),
                    (Cc = c),
                    (bt = l),
                    (_c.transition = a);
                } else n.current = e;
                if (
                  (Xc && ((Xc = !1), (Zc = n), (qc = o)),
                  (a = n.pendingLanes),
                  0 === a && (Kc = null),
                  (function (n) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          n,
                          void 0,
                          128 === (128 & n.current.flags)
                        );
                      } catch (t) {}
                  })(e.stateNode),
                  rs(n, Yn()),
                  null !== t)
                )
                  for (r = n.onRecoverableError, e = 0; e < t.length; e++)
                    r((o = t[e]).value, {
                      componentStack: o.stack,
                      digest: o.digest,
                    });
                if (Hc) throw ((Hc = !1), (n = Qc), (Qc = null), n);
                0 !== (1 & qc) && 0 !== n.tag && zs(),
                  (a = n.pendingLanes),
                  0 !== (1 & a)
                    ? n === Gc
                      ? Jc++
                      : ((Jc = 0), (Gc = n))
                    : (Jc = 0),
                  Bo();
              })(n, t, e, r);
          } finally {
            (_c.transition = o), (bt = r);
          }
          return null;
        }
        function zs() {
          if (null !== Zc) {
            var n = Tt(qc),
              t = _c.transition,
              e = bt;
            try {
              if (((_c.transition = null), (bt = 16 > n ? 16 : n), null === Zc))
                var r = !1;
              else {
                if (((n = Zc), (Zc = null), (qc = 0), 0 !== (6 & Cc)))
                  throw Error(i(331));
                var o = Cc;
                for (Cc |= 4, Yl = n.current; null !== Yl; ) {
                  var a = Yl,
                    l = a.child;
                  if (0 !== (16 & Yl.flags)) {
                    var c = a.deletions;
                    if (null !== c) {
                      for (var s = 0; s < c.length; s++) {
                        var u = c[s];
                        for (Yl = u; null !== Yl; ) {
                          var p = Yl;
                          switch (p.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ec(8, p, a);
                          }
                          var d = p.child;
                          if (null !== d) (d.return = p), (Yl = d);
                          else
                            for (; null !== Yl; ) {
                              var f = (p = Yl).sibling,
                                v = p.return;
                              if ((ic(p), p === u)) {
                                Yl = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = v), (Yl = f);
                                break;
                              }
                              Yl = v;
                            }
                        }
                      }
                      var h = a.alternate;
                      if (null !== h) {
                        var m = h.child;
                        if (null !== m) {
                          h.child = null;
                          do {
                            var w = m.sibling;
                            (m.sibling = null), (m = w);
                          } while (null !== m);
                        }
                      }
                      Yl = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== l)
                    (l.return = a), (Yl = l);
                  else
                    n: for (; null !== Yl; ) {
                      if (0 !== (2048 & (a = Yl).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ec(9, a, a.return);
                        }
                      var y = a.sibling;
                      if (null !== y) {
                        (y.return = a.return), (Yl = y);
                        break n;
                      }
                      Yl = a.return;
                    }
                }
                var g = n.current;
                for (Yl = g; null !== Yl; ) {
                  var b = (l = Yl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== b)
                    (b.return = l), (Yl = b);
                  else
                    n: for (l = g; null !== Yl; ) {
                      if (0 !== (2048 & (c = Yl).flags))
                        try {
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rc(9, c);
                          }
                        } catch (z) {
                          Ss(c, c.return, z);
                        }
                      if (c === l) {
                        Yl = null;
                        break n;
                      }
                      var T = c.sibling;
                      if (null !== T) {
                        (T.return = c.return), (Yl = T);
                        break n;
                      }
                      Yl = c.return;
                    }
                }
                if (
                  ((Cc = o),
                  Bo(),
                  at && 'function' === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, n);
                  } catch (z) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = e), (_c.transition = t);
            }
          }
          return !1;
        }
        function ks(n, t, e) {
          (n = Ri(n, (t = vl(0, (t = ul(e, t)), 1)), 1)),
            (t = ns()),
            null !== n && (yt(n, 1, t), rs(n, t));
        }
        function Ss(n, t, e) {
          if (3 === n.tag) ks(n, n, e);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ks(t, n, e);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === Kc || !Kc.has(r)))
                ) {
                  (t = Ri(t, (n = hl(t, (n = ul(e, n)), 1)), 1)),
                    (n = ns()),
                    null !== t && (yt(t, 1, n), rs(t, n));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xs(n, t, e) {
          var r = n.pingCache;
          null !== r && r.delete(t),
            (t = ns()),
            (n.pingedLanes |= n.suspendedLanes & e),
            Nc === n &&
              (Pc & e) === e &&
              (4 === Ac ||
              (3 === Ac && (130023424 & Pc) === Pc && 500 > Yn() - Uc)
                ? ds(n, 0)
                : (Dc |= e)),
            rs(n, t);
        }
        function Es(n, t) {
          0 === t &&
            (0 === (1 & n.mode)
              ? (t = 1)
              : ((t = pt), 0 === (130023424 & (pt <<= 1)) && (pt = 4194304)));
          var e = ns();
          null !== (n = Oi(n, t)) && (yt(n, t, e), rs(n, e));
        }
        function _s(n) {
          var t = n.memoizedState,
            e = 0;
          null !== t && (e = t.retryLane), Es(n, e);
        }
        function Cs(n, t) {
          var e = 0;
          switch (n.tag) {
            case 13:
              var r = n.stateNode,
                o = n.memoizedState;
              null !== o && (e = o.retryLane);
              break;
            case 19:
              r = n.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Es(n, e);
        }
        function Ns(n, t) {
          return Zn(n, t);
        }
        function Os(n, t, e, r) {
          (this.tag = n),
            (this.key = e),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ps(n, t, e, r) {
          return new Os(n, t, e, r);
        }
        function js(n) {
          return !(!(n = n.prototype) || !n.isReactComponent);
        }
        function Ls(n, t) {
          var e = n.alternate;
          return (
            null === e
              ? (((e = Ps(n.tag, t, n.key, n.mode)).elementType =
                  n.elementType),
                (e.type = n.type),
                (e.stateNode = n.stateNode),
                (e.alternate = n),
                (n.alternate = e))
              : ((e.pendingProps = t),
                (e.type = n.type),
                (e.flags = 0),
                (e.subtreeFlags = 0),
                (e.deletions = null)),
            (e.flags = 14680064 & n.flags),
            (e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (t = n.dependencies),
            (e.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (e.sibling = n.sibling),
            (e.index = n.index),
            (e.ref = n.ref),
            e
          );
        }
        function As(n, t, e, r, o, a) {
          var l = 2;
          if (((r = n), 'function' === typeof n)) js(n) && (l = 1);
          else if ('string' === typeof n) l = 5;
          else
            n: switch (n) {
              case k:
                return Rs(e.children, o, a, t);
              case S:
                (l = 8), (o |= 8);
                break;
              case x:
                return (
                  ((n = Ps(12, e, t, 2 | o)).elementType = x), (n.lanes = a), n
                );
              case N:
                return (
                  ((n = Ps(13, e, t, o)).elementType = N), (n.lanes = a), n
                );
              case O:
                return (
                  ((n = Ps(19, e, t, o)).elementType = O), (n.lanes = a), n
                );
              case L:
                return Is(e, o, a, t);
              default:
                if ('object' === typeof n && null !== n)
                  switch (n.$$typeof) {
                    case E:
                      l = 10;
                      break n;
                    case _:
                      l = 9;
                      break n;
                    case C:
                      l = 11;
                      break n;
                    case P:
                      l = 14;
                      break n;
                    case j:
                      (l = 16), (r = null);
                      break n;
                  }
                throw Error(i(130, null == n ? n : typeof n, ''));
            }
          return (
            ((t = Ps(l, e, t, o)).elementType = n),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Rs(n, t, e, r) {
          return ((n = Ps(7, n, r, t)).lanes = e), n;
        }
        function Is(n, t, e, r) {
          return (
            ((n = Ps(22, n, r, t)).elementType = L),
            (n.lanes = e),
            (n.stateNode = { isHidden: !1 }),
            n
          );
        }
        function Fs(n, t, e) {
          return ((n = Ps(6, n, null, t)).lanes = e), n;
        }
        function Ds(n, t, e) {
          return (
            ((t = Ps(
              4,
              null !== n.children ? n.children : [],
              n.key,
              t
            )).lanes = e),
            (t.stateNode = {
              containerInfo: n.containerInfo,
              pendingChildren: null,
              implementation: n.implementation,
            }),
            t
          );
        }
        function Ms(n, t, e, r, o) {
          (this.tag = t),
            (this.containerInfo = n),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = wt(0)),
            (this.expirationTimes = wt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = wt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(n, t, e, r, o, i, a, l, c) {
          return (
            (n = new Ms(n, t, e, l, c)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ps(3, null, null, t)),
            (n.current = i),
            (i.stateNode = n),
            (i.memoizedState = {
              element: r,
              isDehydrated: e,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            ji(i),
            n
          );
        }
        function Us(n, t, e) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: z,
            key: null == r ? null : '' + r,
            children: n,
            containerInfo: t,
            implementation: e,
          };
        }
        function Ws(n) {
          if (!n) return Co;
          n: {
            if (Bn((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(i(170));
            var t = n;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break n;
                case 1:
                  if (Lo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break n;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === n.tag) {
            var e = n.type;
            if (Lo(e)) return Io(n, e, t);
          }
          return t;
        }
        function Bs(n, t, e, r, o, i, a, l, c) {
          return (
            ((n = Vs(e, r, !0, n, 0, i, 0, l, c)).context = Ws(null)),
            (e = n.current),
            ((i = Ai((r = ns()), (o = ts(e)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ri(e, i, o),
            (n.current.lanes = o),
            yt(n, o, r),
            rs(n, r),
            n
          );
        }
        function Hs(n, t, e, r) {
          var o = t.current,
            i = ns(),
            a = ts(o);
          return (
            (e = Ws(e)),
            null === t.context ? (t.context = e) : (t.pendingContext = e),
            ((t = Ai(i, a)).payload = { element: n }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (n = Ri(o, t, a)) && (es(n, o, a, i), Ii(n, o, a)),
            a
          );
        }
        function Qs(n) {
          return (n = n.current).child
            ? (n.child.tag, n.child.stateNode)
            : null;
        }
        function Ks(n, t) {
          if (null !== (n = n.memoizedState) && null !== n.dehydrated) {
            var e = n.retryLane;
            n.retryLane = 0 !== e && e < t ? e : t;
          }
        }
        function Xs(n, t) {
          Ks(n, t), (n = n.alternate) && Ks(n, t);
        }
        kc = function (n, t, e) {
          if (null !== n)
            if (n.memoizedProps !== t.pendingProps || Oo.current) bl = !0;
            else {
              if (0 === (n.lanes & e) && 0 === (128 & t.flags))
                return (
                  (bl = !1),
                  (function (n, t, e) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), vi();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Lo(t.type) && Fo(t);
                        break;
                      case 4:
                        oa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        _o(yi, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_o(ca, 1 & ca.current), (t.flags |= 128), null)
                            : 0 !== (e & t.child.childLanes)
                              ? Fl(n, t, e)
                              : (_o(ca, 1 & ca.current),
                                null !== (n = Hl(n, t, e)) ? n.sibling : null);
                        _o(ca, 1 & ca.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (e & t.childLanes)),
                          0 !== (128 & n.flags))
                        ) {
                          if (r) return Wl(n, t, e);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          _o(ca, ca.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xl(n, t, e);
                    }
                    return Hl(n, t, e);
                  })(n, t, e)
                );
              bl = 0 !== (131072 & n.flags);
            }
          else (bl = !1), ii && 0 !== (1048576 & t.flags) && ni(t, Xo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Bl(n, t), (n = t.pendingProps);
              var o = jo(t, No.current);
              xi(t, e), (o = Sa(null, t, r, n, o, e));
              var a = xa();
              return (
                (t.flags |= 1),
                'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lo(r) ? ((a = !0), Fo(t)) : (a = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    ji(t),
                    (o.updater = Wi),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Ki(t, r, n, e),
                    (t = Nl(null, t, r, !0, a, e)))
                  : ((t.tag = 0),
                    ii && a && ti(t),
                    Tl(null, t, o, e),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              n: {
                switch (
                  (Bl(n, t),
                  (n = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (n) {
                      if ('function' === typeof n) return js(n) ? 1 : 0;
                      if (void 0 !== n && null !== n) {
                        if ((n = n.$$typeof) === C) return 11;
                        if (n === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (n = wi(r, n)),
                  o)
                ) {
                  case 0:
                    t = _l(null, t, r, n, e);
                    break n;
                  case 1:
                    t = Cl(null, t, r, n, e);
                    break n;
                  case 11:
                    t = zl(null, t, r, n, e);
                    break n;
                  case 14:
                    t = kl(null, t, r, wi(r.type, n), e);
                    break n;
                }
                throw Error(i(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                _l(n, t, r, (o = t.elementType === r ? o : wi(r, o)), e)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Cl(n, t, r, (o = t.elementType === r ? o : wi(r, o)), e)
              );
            case 3:
              n: {
                if ((Ol(t), null === n)) throw Error(i(387));
                (r = t.pendingProps),
                  (o = (a = t.memoizedState).element),
                  Li(n, t),
                  Di(t, r, null, e);
                var l = t.memoizedState;
                if (((r = l.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Pl(n, t, r, e, (o = ul(Error(i(423)), t)));
                    break n;
                  }
                  if (r !== o) {
                    t = Pl(n, t, r, e, (o = ul(Error(i(424)), t)));
                    break n;
                  }
                  for (
                    oi = so(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ii = !0,
                      ai = null,
                      e = Yi(t, null, r, e),
                      t.child = e;
                    e;

                  )
                    (e.flags = (-3 & e.flags) | 4096), (e = e.sibling);
                } else {
                  if ((vi(), r === o)) {
                    t = Hl(n, t, e);
                    break n;
                  }
                  Tl(n, t, r, e);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === n && ui(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== n ? n.memoizedProps : null),
                (l = o.children),
                eo(r, o)
                  ? (l = null)
                  : null !== a && eo(r, a) && (t.flags |= 32),
                El(n, t),
                Tl(n, t, l, e),
                t.child
              );
            case 6:
              return null === n && ui(t), null;
            case 13:
              return Fl(n, t, e);
            case 4:
              return (
                oa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === n ? (t.child = Gi(t, null, r, e)) : Tl(n, t, r, e),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                zl(n, t, r, (o = t.elementType === r ? o : wi(r, o)), e)
              );
            case 7:
              return Tl(n, t, t.pendingProps, e), t.child;
            case 8:
            case 12:
              return Tl(n, t, t.pendingProps.children, e), t.child;
            case 10:
              n: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  (l = o.value),
                  _o(yi, r._currentValue),
                  (r._currentValue = l),
                  null !== a)
                )
                  if (lr(a.value, l)) {
                    if (a.children === o.children && !Oo.current) {
                      t = Hl(n, t, e);
                      break n;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var c = a.dependencies;
                      if (null !== c) {
                        l = a.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === a.tag) {
                              (s = Ai(-1, e & -e)).tag = 2;
                              var u = a.updateQueue;
                              if (null !== u) {
                                var p = (u = u.shared).pending;
                                null === p
                                  ? (s.next = s)
                                  : ((s.next = p.next), (p.next = s)),
                                  (u.pending = s);
                              }
                            }
                            (a.lanes |= e),
                              null !== (s = a.alternate) && (s.lanes |= e),
                              Si(a.return, e, t),
                              (c.lanes |= e);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === a.tag)
                        l = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (l = a.return)) throw Error(i(341));
                        (l.lanes |= e),
                          null !== (c = l.alternate) && (c.lanes |= e),
                          Si(l, e, t),
                          (l = a.sibling);
                      } else l = a.child;
                      if (null !== l) l.return = a;
                      else
                        for (l = a; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (a = l.sibling)) {
                            (a.return = l.return), (l = a);
                            break;
                          }
                          l = l.return;
                        }
                      a = l;
                    }
                Tl(n, t, o.children, e), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                xi(t, e),
                (r = r((o = Ei(o)))),
                (t.flags |= 1),
                Tl(n, t, r, e),
                t.child
              );
            case 14:
              return (
                (o = wi((r = t.type), t.pendingProps)),
                kl(n, t, r, (o = wi(r.type, o)), e)
              );
            case 15:
              return Sl(n, t, t.type, t.pendingProps, e);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : wi(r, o)),
                Bl(n, t),
                (t.tag = 1),
                Lo(r) ? ((n = !0), Fo(t)) : (n = !1),
                xi(t, e),
                Hi(t, r, o),
                Ki(t, r, o, e),
                Nl(null, t, r, !0, n, e)
              );
            case 19:
              return Wl(n, t, e);
            case 22:
              return xl(n, t, e);
          }
          throw Error(i(156, t.tag));
        };
        var Zs =
          'function' === typeof reportError
            ? reportError
            : function (n) {
                console.error(n);
              };
        function qs(n) {
          this._internalRoot = n;
        }
        function Js(n) {
          this._internalRoot = n;
        }
        function Gs(n) {
          return !(
            !n ||
            (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)
          );
        }
        function Ys(n) {
          return !(
            !n ||
            (1 !== n.nodeType &&
              9 !== n.nodeType &&
              11 !== n.nodeType &&
              (8 !== n.nodeType ||
                ' react-mount-point-unstable ' !== n.nodeValue))
          );
        }
        function $s() {}
        function nu(n, t, e, r, o) {
          var i = e._reactRootContainer;
          if (i) {
            var a = i;
            if ('function' === typeof o) {
              var l = o;
              o = function () {
                var n = Qs(a);
                l.call(n);
              };
            }
            Hs(t, a, n, o);
          } else
            a = (function (n, t, e, r, o) {
              if (o) {
                if ('function' === typeof r) {
                  var i = r;
                  r = function () {
                    var n = Qs(a);
                    i.call(n);
                  };
                }
                var a = Bs(t, r, n, 0, null, !1, 0, '', $s);
                return (
                  (n._reactRootContainer = a),
                  (n[ho] = a.current),
                  Wr(8 === n.nodeType ? n.parentNode : n),
                  us(),
                  a
                );
              }
              for (; (o = n.lastChild); ) n.removeChild(o);
              if ('function' === typeof r) {
                var l = r;
                r = function () {
                  var n = Qs(c);
                  l.call(n);
                };
              }
              var c = Vs(n, 0, !1, null, 0, !1, 0, '', $s);
              return (
                (n._reactRootContainer = c),
                (n[ho] = c.current),
                Wr(8 === n.nodeType ? n.parentNode : n),
                us(function () {
                  Hs(t, c, e, r);
                }),
                c
              );
            })(e, t, n, o, r);
          return Qs(a);
        }
        (Js.prototype.render = qs.prototype.render =
          function (n) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hs(n, t, null, null);
          }),
          (Js.prototype.unmount = qs.prototype.unmount =
            function () {
              var n = this._internalRoot;
              if (null !== n) {
                this._internalRoot = null;
                var t = n.containerInfo;
                us(function () {
                  Hs(null, n, null, null);
                }),
                  (t[ho] = null);
              }
            }),
          (Js.prototype.unstable_scheduleHydration = function (n) {
            if (n) {
              var t = xt();
              n = { blockedOn: null, target: n, priority: t };
              for (
                var e = 0;
                e < At.length && 0 !== t && t < At[e].priority;
                e++
              );
              At.splice(e, 0, n), 0 === e && Dt(n);
            }
          }),
          (zt = function (n) {
            switch (n.tag) {
              case 3:
                var t = n.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var e = dt(t.pendingLanes);
                  0 !== e &&
                    (gt(t, 1 | e),
                    rs(t, Yn()),
                    0 === (6 & Cc) && ((Wc = Yn() + 500), Bo()));
                }
                break;
              case 13:
                us(function () {
                  var t = Oi(n, 1);
                  if (null !== t) {
                    var e = ns();
                    es(t, n, 1, e);
                  }
                }),
                  Xs(n, 1);
            }
          }),
          (kt = function (n) {
            if (13 === n.tag) {
              var t = Oi(n, 134217728);
              if (null !== t) es(t, n, 134217728, ns());
              Xs(n, 134217728);
            }
          }),
          (St = function (n) {
            if (13 === n.tag) {
              var t = ts(n),
                e = Oi(n, t);
              if (null !== e) es(e, n, t, ns());
              Xs(n, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Et = function (n, t) {
            var e = bt;
            try {
              return (bt = n), t();
            } finally {
              bt = e;
            }
          }),
          (kn = function (n, t, e) {
            switch (t) {
              case 'input':
                if ((Y(n, e), (t = e.name), 'radio' === e.type && null != t)) {
                  for (e = n; e.parentNode; ) e = e.parentNode;
                  for (
                    e = e.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < e.length;
                    t++
                  ) {
                    var r = e[t];
                    if (r !== n && r.form === n.form) {
                      var o = zo(r);
                      if (!o) throw Error(i(90));
                      X(r), Y(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                an(n, e);
                break;
              case 'select':
                null != (t = e.value) && en(n, !!e.multiple, t, !1);
            }
          }),
          (Nn = ss),
          (On = us);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [bo, To, zo, _n, Cn, ss],
          },
          eu = {
            findFiberByHostInstance: go,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          ru = {
            bundleType: eu.bundleType,
            version: eu.version,
            rendererPackageName: eu.rendererPackageName,
            rendererConfig: eu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (n) {
              return null === (n = Kn(n)) ? null : n.stateNode;
            },
            findFiberByHostInstance:
              eu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ou.isDisabled && ou.supportsFiber)
            try {
              (it = ou.inject(ru)), (at = ou);
            } catch (pn) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (n, t) {
            var e =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(t)) throw Error(i(200));
            return Us(n, t, null, e);
          }),
          (t.createRoot = function (n, t) {
            if (!Gs(n)) throw Error(i(299));
            var e = !1,
              r = '',
              o = Zs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (e = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Vs(n, 1, !1, null, 0, e, 0, r, o)),
              (n[ho] = t.current),
              Wr(8 === n.nodeType ? n.parentNode : n),
              new qs(t)
            );
          }),
          (t.findDOMNode = function (n) {
            if (null == n) return null;
            if (1 === n.nodeType) return n;
            var t = n._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof n.render) throw Error(i(188));
              throw ((n = Object.keys(n).join(',')), Error(i(268, n)));
            }
            return (n = null === (n = Kn(t)) ? null : n.stateNode);
          }),
          (t.flushSync = function (n) {
            return us(n);
          }),
          (t.hydrate = function (n, t, e) {
            if (!Ys(t)) throw Error(i(200));
            return nu(null, n, t, !0, e);
          }),
          (t.hydrateRoot = function (n, t, e) {
            if (!Gs(n)) throw Error(i(405));
            var r = (null != e && e.hydratedSources) || null,
              o = !1,
              a = '',
              l = Zs;
            if (
              (null !== e &&
                void 0 !== e &&
                (!0 === e.unstable_strictMode && (o = !0),
                void 0 !== e.identifierPrefix && (a = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (l = e.onRecoverableError)),
              (t = Bs(t, null, n, 1, null != e ? e : null, o, 0, a, l)),
              (n[ho] = t.current),
              Wr(n),
              r)
            )
              for (n = 0; n < r.length; n++)
                (o = (o = (e = r[n])._getVersion)(e._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [e, o])
                    : t.mutableSourceEagerHydrationData.push(e, o);
            return new Js(t);
          }),
          (t.render = function (n, t, e) {
            if (!Ys(t)) throw Error(i(200));
            return nu(null, n, t, !1, e);
          }),
          (t.unmountComponentAtNode = function (n) {
            if (!Ys(n)) throw Error(i(40));
            return (
              !!n._reactRootContainer &&
              (us(function () {
                nu(null, null, n, !1, function () {
                  (n._reactRootContainer = null), (n[ho] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (n, t, e, r) {
            if (!Ys(e)) throw Error(i(200));
            if (null == n || void 0 === n._reactInternals) throw Error(i(38));
            return nu(n, t, e, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (n, t, e) {
        var r = e(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (n, t, e) {
        !(function n() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (t) {
              console.error(t);
            }
        })(),
          (n.exports = e(463));
      },
      459: function (n, t) {
        var e,
          r = Symbol.for('react.element'),
          o = Symbol.for('react.portal'),
          i = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          c = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.server_context'),
          p = Symbol.for('react.forward_ref'),
          d = Symbol.for('react.suspense'),
          f = Symbol.for('react.suspense_list'),
          v = Symbol.for('react.memo'),
          h = Symbol.for('react.lazy'),
          m = Symbol.for('react.offscreen');
        function w(n) {
          if ('object' === typeof n && null !== n) {
            var t = n.$$typeof;
            switch (t) {
              case r:
                switch ((n = n.type)) {
                  case i:
                  case l:
                  case a:
                  case d:
                  case f:
                    return n;
                  default:
                    switch ((n = n && n.$$typeof)) {
                      case u:
                      case s:
                      case p:
                      case h:
                      case v:
                      case c:
                        return n;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        e = Symbol.for('react.module.reference');
      },
      900: function (n, t, e) {
        e(459);
      },
      374: function (n, t, e) {
        var r = e(791),
          o = Symbol.for('react.element'),
          i = Symbol.for('react.fragment'),
          a = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          c = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(n, t, e) {
          var r,
            i = {},
            s = null,
            u = null;
          for (r in (void 0 !== e && (s = '' + e),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            a.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
          if (n && n.defaultProps)
            for (r in (t = n.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: o,
            type: n,
            key: s,
            ref: u,
            props: i,
            _owner: l.current,
          };
        }
        (t.Fragment = i), (t.jsx = s), (t.jsxs = s);
      },
      117: function (n, t) {
        var e = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          i = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          c = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          p = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          f = Symbol.iterator;
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          m = {};
        function w(n, t, e) {
          (this.props = n),
            (this.context = t),
            (this.refs = m),
            (this.updater = e || v);
        }
        function y() {}
        function g(n, t, e) {
          (this.props = n),
            (this.context = t),
            (this.refs = m),
            (this.updater = e || v);
        }
        (w.prototype.isReactComponent = {}),
          (w.prototype.setState = function (n, t) {
            if ('object' !== typeof n && 'function' !== typeof n && null != n)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, n, t, 'setState');
          }),
          (w.prototype.forceUpdate = function (n) {
            this.updater.enqueueForceUpdate(this, n, 'forceUpdate');
          }),
          (y.prototype = w.prototype);
        var b = (g.prototype = new y());
        (b.constructor = g), h(b, w.prototype), (b.isPureReactComponent = !0);
        var T = Array.isArray,
          z = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(n, t, r) {
          var o,
            i = {},
            a = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = '' + t.key),
            t))
              z.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) i.children = r;
          else if (1 < c) {
            for (var s = Array(c), u = 0; u < c; u++) s[u] = arguments[u + 2];
            i.children = s;
          }
          if (n && n.defaultProps)
            for (o in (c = n.defaultProps)) void 0 === i[o] && (i[o] = c[o]);
          return {
            $$typeof: e,
            type: n,
            key: a,
            ref: l,
            props: i,
            _owner: k.current,
          };
        }
        function E(n) {
          return 'object' === typeof n && null !== n && n.$$typeof === e;
        }
        var _ = /\/+/g;
        function C(n, t) {
          return 'object' === typeof n && null !== n && null != n.key
            ? (function (n) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  n.replace(/[=:]/g, function (n) {
                    return t[n];
                  })
                );
              })('' + n.key)
            : t.toString(36);
        }
        function N(n, t, o, i, a) {
          var l = typeof n;
          ('undefined' !== l && 'boolean' !== l) || (n = null);
          var c = !1;
          if (null === n) c = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                c = !0;
                break;
              case 'object':
                switch (n.$$typeof) {
                  case e:
                  case r:
                    c = !0;
                }
            }
          if (c)
            return (
              (a = a((c = n))),
              (n = '' === i ? '.' + C(c, 0) : i),
              T(a)
                ? ((o = ''),
                  null != n && (o = n.replace(_, '$&/') + '/'),
                  N(a, t, o, '', function (n) {
                    return n;
                  }))
                : null != a &&
                  (E(a) &&
                    (a = (function (n, t) {
                      return {
                        $$typeof: e,
                        type: n.type,
                        key: t,
                        ref: n.ref,
                        props: n.props,
                        _owner: n._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (c && c.key === a.key)
                          ? ''
                          : ('' + a.key).replace(_, '$&/') + '/') +
                        n
                    )),
                  t.push(a)),
              1
            );
          if (((c = 0), (i = '' === i ? '.' : i + ':'), T(n)))
            for (var s = 0; s < n.length; s++) {
              var u = i + C((l = n[s]), s);
              c += N(l, t, o, u, a);
            }
          else if (
            ((u = (function (n) {
              return null === n || 'object' !== typeof n
                ? null
                : 'function' === typeof (n = (f && n[f]) || n['@@iterator'])
                  ? n
                  : null;
            })(n)),
            'function' === typeof u)
          )
            for (n = u.call(n), s = 0; !(l = n.next()).done; )
              c += N((l = l.value), t, o, (u = i + C(l, s++)), a);
          else if ('object' === l)
            throw (
              ((t = String(n)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(n).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return c;
        }
        function O(n, t, e) {
          if (null == n) return n;
          var r = [],
            o = 0;
          return (
            N(n, r, '', '', function (n) {
              return t.call(e, n, o++);
            }),
            r
          );
        }
        function P(n) {
          if (-1 === n._status) {
            var t = n._result;
            (t = t()).then(
              function (t) {
                (0 !== n._status && -1 !== n._status) ||
                  ((n._status = 1), (n._result = t));
              },
              function (t) {
                (0 !== n._status && -1 !== n._status) ||
                  ((n._status = 2), (n._result = t));
              }
            ),
              -1 === n._status && ((n._status = 0), (n._result = t));
          }
          if (1 === n._status) return n._result.default;
          throw n._result;
        }
        var j = { current: null },
          L = { transition: null },
          A = {
            ReactCurrentDispatcher: j,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: O,
          forEach: function (n, t, e) {
            O(
              n,
              function () {
                t.apply(this, arguments);
              },
              e
            );
          },
          count: function (n) {
            var t = 0;
            return (
              O(n, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (n) {
            return (
              O(n, function (n) {
                return n;
              }) || []
            );
          },
          only: function (n) {
            if (!E(n))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return n;
          },
        }),
          (t.Component = w),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = g),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (n, t, r) {
            if (null === n || void 0 === n)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  n +
                  '.'
              );
            var o = h({}, n.props),
              i = n.key,
              a = n.ref,
              l = n._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (l = k.current)),
                void 0 !== t.key && (i = '' + t.key),
                n.type && n.type.defaultProps)
              )
                var c = n.type.defaultProps;
              for (s in t)
                z.call(t, s) &&
                  !S.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              c = Array(s);
              for (var u = 0; u < s; u++) c[u] = arguments[u + 2];
              o.children = c;
            }
            return {
              $$typeof: e,
              type: n.type,
              key: i,
              ref: a,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (n) {
            return (
              ((n = {
                $$typeof: c,
                _currentValue: n,
                _currentValue2: n,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: n }),
              (n.Consumer = n)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (n) {
            var t = x.bind(null, n);
            return (t.type = n), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (n) {
            return { $$typeof: s, render: n };
          }),
          (t.isValidElement = E),
          (t.lazy = function (n) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: n },
              _init: P,
            };
          }),
          (t.memo = function (n, t) {
            return { $$typeof: p, type: n, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (n) {
            var t = L.transition;
            L.transition = {};
            try {
              n();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (t.useCallback = function (n, t) {
            return j.current.useCallback(n, t);
          }),
          (t.useContext = function (n) {
            return j.current.useContext(n);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (n) {
            return j.current.useDeferredValue(n);
          }),
          (t.useEffect = function (n, t) {
            return j.current.useEffect(n, t);
          }),
          (t.useId = function () {
            return j.current.useId();
          }),
          (t.useImperativeHandle = function (n, t, e) {
            return j.current.useImperativeHandle(n, t, e);
          }),
          (t.useInsertionEffect = function (n, t) {
            return j.current.useInsertionEffect(n, t);
          }),
          (t.useLayoutEffect = function (n, t) {
            return j.current.useLayoutEffect(n, t);
          }),
          (t.useMemo = function (n, t) {
            return j.current.useMemo(n, t);
          }),
          (t.useReducer = function (n, t, e) {
            return j.current.useReducer(n, t, e);
          }),
          (t.useRef = function (n) {
            return j.current.useRef(n);
          }),
          (t.useState = function (n) {
            return j.current.useState(n);
          }),
          (t.useSyncExternalStore = function (n, t, e) {
            return j.current.useSyncExternalStore(n, t, e);
          }),
          (t.useTransition = function () {
            return j.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      791: function (n, t, e) {
        n.exports = e(117);
      },
      184: function (n, t, e) {
        n.exports = e(374);
      },
      813: function (n, t) {
        function e(n, t) {
          var e = n.length;
          n.push(t);
          n: for (; 0 < e; ) {
            var r = (e - 1) >>> 1,
              o = n[r];
            if (!(0 < i(o, t))) break n;
            (n[r] = t), (n[e] = o), (e = r);
          }
        }
        function r(n) {
          return 0 === n.length ? null : n[0];
        }
        function o(n) {
          if (0 === n.length) return null;
          var t = n[0],
            e = n.pop();
          if (e !== t) {
            n[0] = e;
            n: for (var r = 0, o = n.length, a = o >>> 1; r < a; ) {
              var l = 2 * (r + 1) - 1,
                c = n[l],
                s = l + 1,
                u = n[s];
              if (0 > i(c, e))
                s < o && 0 > i(u, c)
                  ? ((n[r] = u), (n[s] = e), (r = s))
                  : ((n[r] = c), (n[l] = e), (r = l));
              else {
                if (!(s < o && 0 > i(u, e))) break n;
                (n[r] = u), (n[s] = e), (r = s);
              }
            }
          }
          return t;
        }
        function i(n, t) {
          var e = n.sortIndex - t.sortIndex;
          return 0 !== e ? e : n.id - t.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            c = l.now();
          t.unstable_now = function () {
            return l.now() - c;
          };
        }
        var s = [],
          u = [],
          p = 1,
          d = null,
          f = 3,
          v = !1,
          h = !1,
          m = !1,
          w = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          g = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function b(n) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= n)) break;
              o(u), (t.sortIndex = t.expirationTime), e(s, t);
            }
            t = r(u);
          }
        }
        function T(n) {
          if (((m = !1), b(n), !h))
            if (null !== r(s)) (h = !0), L(z);
            else {
              var t = r(u);
              null !== t && A(T, t.startTime - n);
            }
        }
        function z(n, e) {
          (h = !1), m && ((m = !1), y(E), (E = -1)), (v = !0);
          var i = f;
          try {
            for (
              b(e), d = r(s);
              null !== d && (!(d.expirationTime > e) || (n && !N()));

            ) {
              var a = d.callback;
              if ('function' === typeof a) {
                (d.callback = null), (f = d.priorityLevel);
                var l = a(d.expirationTime <= e);
                (e = t.unstable_now()),
                  'function' === typeof l
                    ? (d.callback = l)
                    : d === r(s) && o(s),
                  b(e);
              } else o(s);
              d = r(s);
            }
            if (null !== d) var c = !0;
            else {
              var p = r(u);
              null !== p && A(T, p.startTime - e), (c = !1);
            }
            return c;
          } finally {
            (d = null), (f = i), (v = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          x = null,
          E = -1,
          _ = 5,
          C = -1;
        function N() {
          return !(t.unstable_now() - C < _);
        }
        function O() {
          if (null !== x) {
            var n = t.unstable_now();
            C = n;
            var e = !0;
            try {
              e = x(!0, n);
            } finally {
              e ? k() : ((S = !1), (x = null));
            }
          } else S = !1;
        }
        if ('function' === typeof g)
          k = function () {
            g(O);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var P = new MessageChannel(),
            j = P.port2;
          (P.port1.onmessage = O),
            (k = function () {
              j.postMessage(null);
            });
        } else
          k = function () {
            w(O, 0);
          };
        function L(n) {
          (x = n), S || ((S = !0), k());
        }
        function A(n, e) {
          E = w(function () {
            n(t.unstable_now());
          }, e);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (n) {
            n.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || v || ((h = !0), L(z));
          }),
          (t.unstable_forceFrameRate = function (n) {
            0 > n || 125 < n
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (_ = 0 < n ? Math.floor(1e3 / n) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (n) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var e = f;
            f = t;
            try {
              return n();
            } finally {
              f = e;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (n, t) {
            switch (n) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                n = 3;
            }
            var e = f;
            f = n;
            try {
              return t();
            } finally {
              f = e;
            }
          }),
          (t.unstable_scheduleCallback = function (n, o, i) {
            var a = t.unstable_now();
            switch (
              ('object' === typeof i && null !== i
                ? (i = 'number' === typeof (i = i.delay) && 0 < i ? a + i : a)
                : (i = a),
              n)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (n = {
                id: p++,
                callback: o,
                priorityLevel: n,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > a
                ? ((n.sortIndex = i),
                  e(u, n),
                  null === r(s) &&
                    n === r(u) &&
                    (m ? (y(E), (E = -1)) : (m = !0), A(T, i - a)))
                : ((n.sortIndex = l), e(s, n), h || v || ((h = !0), L(z))),
              n
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (n) {
            var t = f;
            return function () {
              var e = f;
              f = t;
              try {
                return n.apply(this, arguments);
              } finally {
                f = e;
              }
            };
          });
      },
      296: function (n, t, e) {
        n.exports = e(813);
      },
      561: function (n, t, e) {
        var r = e(791);
        var o =
            'function' === typeof Object.is
              ? Object.is
              : function (n, t) {
                  return (
                    (n === t && (0 !== n || 1 / n === 1 / t)) ||
                    (n !== n && t !== t)
                  );
                },
          i = r.useState,
          a = r.useEffect,
          l = r.useLayoutEffect,
          c = r.useDebugValue;
        function s(n) {
          var t = n.getSnapshot;
          n = n.value;
          try {
            var e = t();
            return !o(n, e);
          } catch (r) {
            return !0;
          }
        }
        var u =
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
            ? function (n, t) {
                return t();
              }
            : function (n, t) {
                var e = t(),
                  r = i({ inst: { value: e, getSnapshot: t } }),
                  o = r[0].inst,
                  u = r[1];
                return (
                  l(
                    function () {
                      (o.value = e),
                        (o.getSnapshot = t),
                        s(o) && u({ inst: o });
                    },
                    [n, e, t]
                  ),
                  a(
                    function () {
                      return (
                        s(o) && u({ inst: o }),
                        n(function () {
                          s(o) && u({ inst: o });
                        })
                      );
                    },
                    [n]
                  ),
                  c(e),
                  e
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
      },
      595: function (n, t, e) {
        var r = e(791),
          o = e(248);
        var i =
            'function' === typeof Object.is
              ? Object.is
              : function (n, t) {
                  return (
                    (n === t && (0 !== n || 1 / n === 1 / t)) ||
                    (n !== n && t !== t)
                  );
                },
          a = o.useSyncExternalStore,
          l = r.useRef,
          c = r.useEffect,
          s = r.useMemo,
          u = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (n, t, e, r, o) {
          var p = l(null);
          if (null === p.current) {
            var d = { hasValue: !1, value: null };
            p.current = d;
          } else d = p.current;
          p = s(
            function () {
              function n(n) {
                if (!c) {
                  if (
                    ((c = !0), (a = n), (n = r(n)), void 0 !== o && d.hasValue)
                  ) {
                    var t = d.value;
                    if (o(t, n)) return (l = t);
                  }
                  return (l = n);
                }
                if (((t = l), i(a, n))) return t;
                var e = r(n);
                return void 0 !== o && o(t, e) ? t : ((a = n), (l = e));
              }
              var a,
                l,
                c = !1,
                s = void 0 === e ? null : e;
              return [
                function () {
                  return n(t());
                },
                null === s
                  ? void 0
                  : function () {
                      return n(s());
                    },
              ];
            },
            [t, e, r, o]
          );
          var f = a(n, p[0], p[1]);
          return (
            c(
              function () {
                (d.hasValue = !0), (d.value = f);
              },
              [f]
            ),
            u(f),
            f
          );
        };
      },
      248: function (n, t, e) {
        n.exports = e(561);
      },
      327: function (n, t, e) {
        n.exports = e(595);
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return n[r](i, i.exports, e), i.exports;
  }
  (e.m = n),
    (function () {
      var n,
        t = Object.getPrototypeOf
          ? function (n) {
              return Object.getPrototypeOf(n);
            }
          : function (n) {
              return n.__proto__;
            };
      e.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ('object' === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && 'function' === typeof r.then) return r;
        }
        var i = Object.create(null);
        e.r(i);
        var a = {};
        n = n || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & o && r;
          'object' == typeof l && !~n.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (n) {
            a[n] = function () {
              return r[n];
            };
          });
        return (
          (a.default = function () {
            return r;
          }),
          e.d(i, a),
          i
        );
      };
    })(),
    (e.d = function (n, t) {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.f = {}),
    (e.e = function (n) {
      return Promise.all(
        Object.keys(e.f).reduce(function (t, r) {
          return e.f[r](n, t), t;
        }, [])
      );
    }),
    (e.u = function (n) {
      return 'static/js/' + n + '.5fef94a4.chunk.js';
    }),
    (e.miniCssF = function (n) {}),
    (e.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (function () {
      var n = {},
        t = 'movies-explorer-frontend:';
      e.l = function (r, o, i, a) {
        if (n[r]) n[r].push(o);
        else {
          var l, c;
          if (void 0 !== i)
            for (
              var s = document.getElementsByTagName('script'), u = 0;
              u < s.length;
              u++
            ) {
              var p = s[u];
              if (
                p.getAttribute('src') == r ||
                p.getAttribute('data-webpack') == t + i
              ) {
                l = p;
                break;
              }
            }
          l ||
            ((c = !0),
            ((l = document.createElement('script')).charset = 'utf-8'),
            (l.timeout = 120),
            e.nc && l.setAttribute('nonce', e.nc),
            l.setAttribute('data-webpack', t + i),
            (l.src = r)),
            (n[r] = [o]);
          var d = function (t, e) {
              (l.onerror = l.onload = null), clearTimeout(f);
              var o = n[r];
              if (
                (delete n[r],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (n) {
                    return n(e);
                  }),
                t)
              )
                return t(e);
            },
            f = setTimeout(
              d.bind(null, void 0, { type: 'timeout', target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            c && document.head.appendChild(l);
        }
      };
    })(),
    (e.r = function (n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (e.p = '/'),
    (function () {
      var n = { 179: 0 };
      e.f.j = function (t, r) {
        var o = e.o(n, t) ? n[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var i = new Promise(function (e, r) {
              o = n[t] = [e, r];
            });
            r.push((o[2] = i));
            var a = e.p + e.u(t),
              l = new Error();
            e.l(
              a,
              function (r) {
                if (e.o(n, t) && (0 !== (o = n[t]) && (n[t] = void 0), o)) {
                  var i = r && ('load' === r.type ? 'missing' : r.type),
                    a = r && r.target && r.target.src;
                  (l.message =
                    'Loading chunk ' + t + ' failed.\n(' + i + ': ' + a + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = i),
                    (l.request = a),
                    o[1](l);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var o,
            i,
            a = r[0],
            l = r[1],
            c = r[2],
            s = 0;
          if (
            a.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (o in l) e.o(l, o) && (e.m[o] = l[o]);
            if (c) c(e);
          }
          for (t && t(r); s < a.length; s++)
            (i = a[s]), e.o(n, i) && n[i] && n[i][0](), (n[i] = 0);
        },
        r = (self.webpackChunkmovies_explorer_frontend =
          self.webpackChunkmovies_explorer_frontend || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var n = e(791),
        t = e.t(n, 2),
        r = e(250),
        o = e(248),
        i = e(327),
        a = e(164);
      var l = function (n) {
          n();
        },
        c = function () {
          return l;
        },
        s = (0, n.createContext)(null);
      function u() {
        return (0, n.useContext)(s);
      }
      var p = function () {
          throw new Error('uSES not initialized!');
        },
        d = p,
        f = function (n, t) {
          return n === t;
        };
      function v() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          e =
            t === s
              ? u
              : function () {
                  return (0, n.useContext)(t);
                };
        return function (t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
          var o = e(),
            i = o.store,
            a = o.subscription,
            l = o.getServerState,
            c = d(a.addNestedSub, i.getState, l || i.getState, t, r);
          return (0, n.useDebugValue)(c), c;
        };
      }
      var h = v();
      e(110), e(900);
      var m = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function w(n, t) {
        var e,
          r = m;
        function o() {
          a.onStateChange && a.onStateChange();
        }
        function i() {
          e ||
            ((e = t ? t.addNestedSub(o) : n.subscribe(o)),
            (r = (function () {
              var n = c(),
                t = null,
                e = null;
              return {
                clear: function () {
                  (t = null), (e = null);
                },
                notify: function () {
                  n(function () {
                    for (var n = t; n; ) n.callback(), (n = n.next);
                  });
                },
                get: function () {
                  for (var n = [], e = t; e; ) n.push(e), (e = e.next);
                  return n;
                },
                subscribe: function (n) {
                  var r = !0,
                    o = (e = { callback: n, next: null, prev: e });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (e = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        var a = {
          addNestedSub: function (n) {
            return i(), r.subscribe(n);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(e);
          },
          trySubscribe: i,
          tryUnsubscribe: function () {
            e && (e(), (e = void 0), r.clear(), (r = m));
          },
          getListeners: function () {
            return r;
          },
        };
        return a;
      }
      var y = !(
        'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        'undefined' === typeof window.document.createElement
      )
        ? n.useLayoutEffect
        : n.useEffect;
      var g = function (t) {
        var e = t.store,
          r = t.context,
          o = t.children,
          i = t.serverState,
          a = (0, n.useMemo)(
            function () {
              var n = w(e);
              return {
                store: e,
                subscription: n,
                getServerState: i
                  ? function () {
                      return i;
                    }
                  : void 0,
              };
            },
            [e, i]
          ),
          l = (0, n.useMemo)(
            function () {
              return e.getState();
            },
            [e]
          );
        y(
          function () {
            var n = a.subscription;
            return (
              (n.onStateChange = n.notifyNestedSubs),
              n.trySubscribe(),
              l !== e.getState() && n.notifyNestedSubs(),
              function () {
                n.tryUnsubscribe(), (n.onStateChange = void 0);
              }
            );
          },
          [a, l]
        );
        var c = r || s;
        return n.createElement(c.Provider, { value: a }, o);
      };
      function b() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          e =
            t === s
              ? u
              : function () {
                  return (0, n.useContext)(t);
                };
        return function () {
          return e().store;
        };
      }
      var T = b();
      function z() {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          t = n === s ? T : b(n);
        return function () {
          return t().dispatch;
        };
      }
      var k,
        S,
        x = z();
      (k = i.useSyncExternalStoreWithSelector),
        (d = k),
        (function (n) {
          n;
        })(o.useSyncExternalStore),
        (S = a.unstable_batchedUpdates),
        (l = S);
      var E,
        _ = function (n) {
          n &&
            n instanceof Function &&
            e
              .e(787)
              .then(e.bind(e, 787))
              .then(function (t) {
                var e = t.getCLS,
                  r = t.getFID,
                  o = t.getFCP,
                  i = t.getLCP,
                  a = t.getTTFB;
                e(n), r(n), o(n), i(n), a(n);
              });
        };
      function C(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      function N(n) {
        if (
          ('undefined' !== typeof Symbol && null != n[Symbol.iterator]) ||
          null != n['@@iterator']
        )
          return Array.from(n);
      }
      function O(n, t) {
        if (n) {
          if ('string' === typeof n) return C(n, t);
          var e = Object.prototype.toString.call(n).slice(8, -1);
          return (
            'Object' === e && n.constructor && (e = n.constructor.name),
            'Map' === e || 'Set' === e
              ? Array.from(n)
              : 'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? C(n, t)
                : void 0
          );
        }
      }
      function P(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return C(n);
          })(n) ||
          N(n) ||
          O(n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function j(n, t) {
        if (!(n instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function L(n) {
        return (
          (L =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    'function' == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? 'symbol'
                    : typeof n;
                }),
          L(n)
        );
      }
      function A(n) {
        var t = (function (n, t) {
          if ('object' !== L(n) || null === n) return n;
          var e = n[Symbol.toPrimitive];
          if (void 0 !== e) {
            var r = e.call(n, t || 'default');
            if ('object' !== L(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(n);
        })(n, 'string');
        return 'symbol' === L(t) ? t : String(t);
      }
      function R(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(n, A(r.key), r);
        }
      }
      function I(n, t, e) {
        return (
          t && R(n.prototype, t),
          e && R(n, e),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
      }
      function F(n, t) {
        return (
          (F = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, t) {
                return (n.__proto__ = t), n;
              }),
          F(n, t)
        );
      }
      function D(n, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          t && F(n, t);
      }
      function M(n) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          M(n)
        );
      }
      function V() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (n) {
          return !1;
        }
      }
      function U(n, t) {
        if (t && ('object' === L(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (n) {
          if (void 0 === n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return n;
        })(n);
      }
      function W(n) {
        var t = V();
        return function () {
          var e,
            r = M(n);
          if (t) {
            var o = M(this).constructor;
            e = Reflect.construct(r, arguments, o);
          } else e = r.apply(this, arguments);
          return U(this, e);
        };
      }
      function B(n) {
        if (Array.isArray(n)) return n;
      }
      function H() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function Q(n, t) {
        return (
          B(n) ||
          (function (n, t) {
            var e =
              null == n
                ? null
                : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
                  n['@@iterator'];
            if (null != e) {
              var r,
                o,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (e = e.call(n)).next), 0 === t)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(e)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (u) {
                (s = !0), (o = u);
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(n, t) ||
          O(n, t) ||
          H()
        );
      }
      function K(n, t, e) {
        return (
          (K = V()
            ? Reflect.construct.bind()
            : function (n, t, e) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(n, r))();
                return e && F(o, e.prototype), o;
              }),
          K.apply(null, arguments)
        );
      }
      function X(n) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (
          (X = function (n) {
            if (
              null === n ||
              !(function (n) {
                return (
                  -1 !== Function.toString.call(n).indexOf('[native code]')
                );
              })(n)
            )
              return n;
            if ('function' !== typeof n)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            if ('undefined' !== typeof t) {
              if (t.has(n)) return t.get(n);
              t.set(n, e);
            }
            function e() {
              return K(n, arguments, M(this).constructor);
            }
            return (
              (e.prototype = Object.create(n.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              F(e, n)
            );
          }),
          X(n)
        );
      }
      function Z() {
        return (
          (Z = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var t = 1; t < arguments.length; t++) {
                  var e = arguments[t];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                }
                return n;
              }),
          Z.apply(this, arguments)
        );
      }
      !(function (n) {
        (n.Pop = 'POP'), (n.Push = 'PUSH'), (n.Replace = 'REPLACE');
      })(E || (E = {}));
      var q,
        J = 'popstate';
      function G(n, t) {
        if (!1 === n || null === n || 'undefined' === typeof n)
          throw new Error(t);
      }
      function Y(n) {
        return { usr: n.state, key: n.key };
      }
      function $(n, t, e, r) {
        return (
          void 0 === e && (e = null),
          Z(
            {
              pathname: 'string' === typeof n ? n : n.pathname,
              search: '',
              hash: '',
            },
            'string' === typeof t ? tn(t) : t,
            {
              state: e,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function nn(n) {
        var t = n.pathname,
          e = void 0 === t ? '/' : t,
          r = n.search,
          o = void 0 === r ? '' : r,
          i = n.hash,
          a = void 0 === i ? '' : i;
        return (
          o && '?' !== o && (e += '?' === o.charAt(0) ? o : '?' + o),
          a && '#' !== a && (e += '#' === a.charAt(0) ? a : '#' + a),
          e
        );
      }
      function tn(n) {
        var t = {};
        if (n) {
          var e = n.indexOf('#');
          e >= 0 && ((t.hash = n.substr(e)), (n = n.substr(0, e)));
          var r = n.indexOf('?');
          r >= 0 && ((t.search = n.substr(r)), (n = n.substr(0, r))),
            n && (t.pathname = n);
        }
        return t;
      }
      function en(n) {
        var t =
            'undefined' !== typeof window &&
            'undefined' !== typeof window.location &&
            'null' !== window.location.origin
              ? window.location.origin
              : window.location.href,
          e = 'string' === typeof n ? n : nn(n);
        return (
          G(
            t,
            'No window.location.(origin|href) available to create URL for href: ' +
              e
          ),
          new URL(e, t)
        );
      }
      function rn(n, t, e, r) {
        void 0 === r && (r = {});
        var o = r,
          i = o.window,
          a = void 0 === i ? document.defaultView : i,
          l = o.v5Compat,
          c = void 0 !== l && l,
          s = a.history,
          u = E.Pop,
          p = null;
        function d() {
          (u = E.Pop), p && p({ action: u, location: f.location });
        }
        var f = {
          get action() {
            return u;
          },
          get location() {
            return n(a, s);
          },
          listen: function (n) {
            if (p)
              throw new Error('A history only accepts one active listener');
            return (
              a.addEventListener(J, d),
              (p = n),
              function () {
                a.removeEventListener(J, d), (p = null);
              }
            );
          },
          createHref: function (n) {
            return t(a, n);
          },
          encodeLocation: function (n) {
            var t = en('string' === typeof n ? n : nn(n));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (n, t) {
            u = E.Push;
            var r = $(f.location, n, t);
            e && e(r, n);
            var o = Y(r),
              i = f.createHref(r);
            try {
              s.pushState(o, '', i);
            } catch (l) {
              a.location.assign(i);
            }
            c && p && p({ action: u, location: f.location });
          },
          replace: function (n, t) {
            u = E.Replace;
            var r = $(f.location, n, t);
            e && e(r, n);
            var o = Y(r),
              i = f.createHref(r);
            s.replaceState(o, '', i),
              c && p && p({ action: u, location: f.location });
          },
          go: function (n) {
            return s.go(n);
          },
        };
        return f;
      }
      function on(n, t, e) {
        void 0 === e && (e = '/');
        var r = vn(('string' === typeof t ? tn(t) : t).pathname || '/', e);
        if (null == r) return null;
        var o = an(n);
        !(function (n) {
          n.sort(function (n, t) {
            return n.score !== t.score
              ? t.score - n.score
              : (function (n, t) {
                  var e =
                    n.length === t.length &&
                    n.slice(0, -1).every(function (n, e) {
                      return n === t[e];
                    });
                  return e ? n[n.length - 1] - t[t.length - 1] : 0;
                })(
                  n.routesMeta.map(function (n) {
                    return n.childrenIndex;
                  }),
                  t.routesMeta.map(function (n) {
                    return n.childrenIndex;
                  })
                );
          });
        })(o);
        for (var i = null, a = 0; null == i && a < o.length; ++a)
          i = pn(o[a], fn(r));
        return i;
      }
      function an(n, t, e, r) {
        void 0 === t && (t = []),
          void 0 === e && (e = []),
          void 0 === r && (r = '');
        var o = function (n, o, i) {
          var a = {
            relativePath: void 0 === i ? n.path || '' : i,
            caseSensitive: !0 === n.caseSensitive,
            childrenIndex: o,
            route: n,
          };
          a.relativePath.startsWith('/') &&
            (G(
              a.relativePath.startsWith(r),
              'Absolute route path "' +
                a.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (a.relativePath = a.relativePath.slice(r.length)));
          var l = gn([r, a.relativePath]),
            c = e.concat(a);
          n.children &&
            n.children.length > 0 &&
            (G(
              !0 !== n.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            an(n.children, t, c, l)),
            (null != n.path || n.index) &&
              t.push({ path: l, score: un(l, n.index), routesMeta: c });
        };
        return (
          n.forEach(function (n, t) {
            var e;
            if ('' !== n.path && null != (e = n.path) && e.includes('?')) {
              var r,
                i = (function (n, t) {
                  var e =
                    ('undefined' !== typeof Symbol && n[Symbol.iterator]) ||
                    n['@@iterator'];
                  if (!e) {
                    if (
                      Array.isArray(n) ||
                      (e = O(n)) ||
                      (t && n && 'number' === typeof n.length)
                    ) {
                      e && (n = e);
                      var r = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return r >= n.length
                            ? { done: !0 }
                            : { done: !1, value: n[r++] };
                        },
                        e: function (n) {
                          throw n;
                        },
                        f: o,
                      };
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  }
                  var i,
                    a = !0,
                    l = !1;
                  return {
                    s: function () {
                      e = e.call(n);
                    },
                    n: function () {
                      var n = e.next();
                      return (a = n.done), n;
                    },
                    e: function (n) {
                      (l = !0), (i = n);
                    },
                    f: function () {
                      try {
                        a || null == e.return || e.return();
                      } finally {
                        if (l) throw i;
                      }
                    },
                  };
                })(ln(n.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var a = r.value;
                  o(n, t, a);
                }
              } catch (l) {
                i.e(l);
              } finally {
                i.f();
              }
            } else o(n, t);
          }),
          t
        );
      }
      function ln(n) {
        var t = n.split('/');
        if (0 === t.length) return [];
        var e,
          r = B((e = t)) || N(e) || O(e) || H(),
          o = r[0],
          i = r.slice(1),
          a = o.endsWith('?'),
          l = o.replace(/\?$/, '');
        if (0 === i.length) return a ? [l, ''] : [l];
        var c = ln(i.join('/')),
          s = [];
        return (
          s.push.apply(
            s,
            P(
              c.map(function (n) {
                return '' === n ? l : [l, n].join('/');
              })
            )
          ),
          a && s.push.apply(s, P(c)),
          s.map(function (t) {
            return n.startsWith('/') && '' === t ? '/' : t;
          })
        );
      }
      !(function (n) {
        (n.data = 'data'),
          (n.deferred = 'deferred'),
          (n.redirect = 'redirect'),
          (n.error = 'error');
      })(q || (q = {}));
      var cn = /^:\w+$/,
        sn = function (n) {
          return '*' === n;
        };
      function un(n, t) {
        var e = n.split('/'),
          r = e.length;
        return (
          e.some(sn) && (r += -2),
          t && (r += 2),
          e
            .filter(function (n) {
              return !sn(n);
            })
            .reduce(function (n, t) {
              return n + (cn.test(t) ? 3 : '' === t ? 1 : 10);
            }, r)
        );
      }
      function pn(n, t) {
        for (
          var e = n.routesMeta, r = {}, o = '/', i = [], a = 0;
          a < e.length;
          ++a
        ) {
          var l = e[a],
            c = a === e.length - 1,
            s = '/' === o ? t : t.slice(o.length) || '/',
            u = dn(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
              s
            );
          if (!u) return null;
          Object.assign(r, u.params);
          var p = l.route;
          i.push({
            params: r,
            pathname: gn([o, u.pathname]),
            pathnameBase: bn(gn([o, u.pathnameBase])),
            route: p,
          }),
            '/' !== u.pathnameBase && (o = gn([o, u.pathnameBase]));
        }
        return i;
      }
      function dn(n, t) {
        'string' === typeof n && (n = { path: n, caseSensitive: !1, end: !0 });
        var e = (function (n, t, e) {
            void 0 === t && (t = !1);
            void 0 === e && (e = !0);
            hn(
              '*' === n || !n.endsWith('*') || n.endsWith('/*'),
              'Route path "' +
                n +
                '" will be treated as if it were "' +
                n.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                n.replace(/\*$/, '/*') +
                '".'
            );
            var r = [],
              o =
                '^' +
                n
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/\/:(\w+)/g, function (n, t) {
                    return r.push(t), '/([^\\/]+)';
                  });
            n.endsWith('*')
              ? (r.push('*'),
                (o += '*' === n || '/*' === n ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : e
                ? (o += '\\/*$')
                : '' !== n && '/' !== n && (o += '(?:(?=\\/|$))');
            var i = new RegExp(o, t ? void 0 : 'i');
            return [i, r];
          })(n.path, n.caseSensitive, n.end),
          r = Q(e, 2),
          o = r[0],
          i = r[1],
          a = t.match(o);
        if (!a) return null;
        var l = a[0],
          c = l.replace(/(.)\/+$/, '$1'),
          s = a.slice(1);
        return {
          params: i.reduce(function (n, t, e) {
            if ('*' === t) {
              var r = s[e] || '';
              c = l.slice(0, l.length - r.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (n[t] = (function (n, t) {
                try {
                  return decodeURIComponent(n);
                } catch (e) {
                  return (
                    hn(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        n +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        e +
                        ').'
                    ),
                    n
                  );
                }
              })(s[e] || '', t)),
              n
            );
          }, {}),
          pathname: l,
          pathnameBase: c,
          pattern: n,
        };
      }
      function fn(n) {
        try {
          return decodeURI(n);
        } catch (t) {
          return (
            hn(
              !1,
              'The URL path "' +
                n +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').'
            ),
            n
          );
        }
      }
      function vn(n, t) {
        if ('/' === t) return n;
        if (!n.toLowerCase().startsWith(t.toLowerCase())) return null;
        var e = t.endsWith('/') ? t.length - 1 : t.length,
          r = n.charAt(e);
        return r && '/' !== r ? null : n.slice(e) || '/';
      }
      function hn(n, t) {
        if (!n) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }
      }
      function mn(n, t, e, r) {
        return (
          "Cannot include a '" +
          n +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          e +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function wn(n) {
        return n.filter(function (n, t) {
          return 0 === t || (n.route.path && n.route.path.length > 0);
        });
      }
      function yn(n, t, e, r) {
        var o;
        void 0 === r && (r = !1),
          'string' === typeof n
            ? (o = tn(n))
            : (G(
                !(o = Z({}, n)).pathname || !o.pathname.includes('?'),
                mn('?', 'pathname', 'search', o)
              ),
              G(
                !o.pathname || !o.pathname.includes('#'),
                mn('#', 'pathname', 'hash', o)
              ),
              G(
                !o.search || !o.search.includes('#'),
                mn('#', 'search', 'hash', o)
              ));
        var i,
          a = '' === n || '' === o.pathname,
          l = a ? '/' : o.pathname;
        if (r || null == l) i = e;
        else {
          var c = t.length - 1;
          if (l.startsWith('..')) {
            for (var s = l.split('/'); '..' === s[0]; ) s.shift(), (c -= 1);
            o.pathname = s.join('/');
          }
          i = c >= 0 ? t[c] : '/';
        }
        var u = (function (n, t) {
            void 0 === t && (t = '/');
            var e = 'string' === typeof n ? tn(n) : n,
              r = e.pathname,
              o = e.search,
              i = void 0 === o ? '' : o,
              a = e.hash,
              l = void 0 === a ? '' : a,
              c = r
                ? r.startsWith('/')
                  ? r
                  : (function (n, t) {
                      var e = t.replace(/\/+$/, '').split('/');
                      return (
                        n.split('/').forEach(function (n) {
                          '..' === n
                            ? e.length > 1 && e.pop()
                            : '.' !== n && e.push(n);
                        }),
                        e.length > 1 ? e.join('/') : '/'
                      );
                    })(r, t)
                : t;
            return { pathname: c, search: Tn(i), hash: zn(l) };
          })(o, i),
          p = l && '/' !== l && l.endsWith('/'),
          d = (a || '.' === l) && e.endsWith('/');
        return u.pathname.endsWith('/') || (!p && !d) || (u.pathname += '/'), u;
      }
      var gn = function (n) {
          return n.join('/').replace(/\/\/+/g, '/');
        },
        bn = function (n) {
          return n.replace(/\/+$/, '').replace(/^\/*/, '/');
        },
        Tn = function (n) {
          return n && '?' !== n ? (n.startsWith('?') ? n : '?' + n) : '';
        },
        zn = function (n) {
          return n && '#' !== n ? (n.startsWith('#') ? n : '#' + n) : '';
        },
        kn = (function (n) {
          D(e, n);
          var t = W(e);
          function e() {
            return j(this, e), t.apply(this, arguments);
          }
          return I(e);
        })(X(Error));
      var Sn = I(function n(t, e, r, o) {
        j(this, n),
          void 0 === o && (o = !1),
          (this.status = t),
          (this.statusText = e || ''),
          (this.internal = o),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function xn(n) {
        return n instanceof Sn;
      }
      var En = ['post', 'put', 'patch', 'delete'],
        _n = (new Set(En), ['get'].concat(En));
      new Set(_n),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          window.document.createElement;
      function Cn() {
        return (
          (Cn = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var t = 1; t < arguments.length; t++) {
                  var e = arguments[t];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                }
                return n;
              }),
          Cn.apply(this, arguments)
        );
      }
      var Nn =
          'function' === typeof Object.is
            ? Object.is
            : function (n, t) {
                return (
                  (n === t && (0 !== n || 1 / n === 1 / t)) ||
                  (n !== n && t !== t)
                );
              },
        On = n.useState,
        Pn = n.useEffect,
        jn = n.useLayoutEffect,
        Ln = n.useDebugValue;
      function An(n) {
        var t = n.getSnapshot,
          e = n.value;
        try {
          var r = t();
          return !Nn(e, r);
        } catch (o) {
          return !0;
        }
      }
      'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        window.document.createElement,
        t.useSyncExternalStore;
      var Rn = n.createContext(null);
      var In = n.createContext(null);
      var Fn = n.createContext(null);
      var Dn = n.createContext(null);
      var Mn = n.createContext(null);
      var Vn = n.createContext(null);
      var Un = n.createContext({ outlet: null, matches: [] });
      var Wn = n.createContext(null);
      function Bn() {
        return null != n.useContext(Vn);
      }
      function Hn() {
        return Bn() || G(!1), n.useContext(Vn).location;
      }
      function Qn() {
        Bn() || G(!1);
        var t = n.useContext(Mn),
          e = t.basename,
          r = t.navigator,
          o = n.useContext(Un).matches,
          i = Hn().pathname,
          a = JSON.stringify(
            wn(o).map(function (n) {
              return n.pathnameBase;
            })
          ),
          l = n.useRef(!1);
        return (
          n.useEffect(function () {
            l.current = !0;
          }),
          n.useCallback(
            function (n, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ('number' !== typeof n) {
                  var o = yn(n, JSON.parse(a), i, 'path' === t.relative);
                  '/' !== e &&
                    (o.pathname = '/' === o.pathname ? e : gn([e, o.pathname])),
                    (t.replace ? r.replace : r.push)(o, t.state, t);
                } else r.go(n);
            },
            [e, r, a, i]
          )
        );
      }
      function Kn() {
        var t = (function () {
            var t,
              e = n.useContext(Wn),
              r = Yn(Zn.UseRouteError),
              o = n.useContext(Un),
              i = o.matches[o.matches.length - 1];
            if (e) return e;
            return (
              o || G(!1),
              !i.route.id && G(!1),
              null == (t = r.errors) ? void 0 : t[i.route.id]
            );
          })(),
          e = xn(t)
            ? t.status + ' ' + t.statusText
            : t instanceof Error
              ? t.message
              : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          o = 'rgba(200,200,200, 0.5)',
          i = { padding: '0.5rem', backgroundColor: o },
          a = { padding: '2px 4px', backgroundColor: o };
        return n.createElement(
          n.Fragment,
          null,
          n.createElement('h2', null, 'Unhandled Thrown Error!'),
          n.createElement('h3', { style: { fontStyle: 'italic' } }, e),
          r ? n.createElement('pre', { style: i }, r) : null,
          n.createElement('p', null, '\ud83d\udcbf Hey developer \ud83d\udc4b'),
          n.createElement(
            'p',
            null,
            'You can provide a way better UX than this when your app throws errors by providing your own\xa0',
            n.createElement('code', { style: a }, 'errorElement'),
            ' props on\xa0',
            n.createElement('code', { style: a }, '<Route>')
          )
        );
      }
      var Xn,
        Zn,
        qn = (function (t) {
          D(r, t);
          var e = W(r);
          function r(n) {
            var t;
            return (
              j(this, r),
              ((t = e.call(this, n)).state = {
                location: n.location,
                error: n.error,
              }),
              t
            );
          }
          return (
            I(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (n, t) {
                    console.error(
                      'React Router caught the following error during render',
                      n,
                      t
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.state.error
                      ? n.createElement(Wn.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (n) {
                    return { error: n };
                  },
                },
                {
                  key: 'getDerivedStateFromProps',
                  value: function (n, t) {
                    return t.location !== n.location
                      ? { error: n.error, location: n.location }
                      : { error: n.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(n.Component);
      function Jn(t) {
        var e = t.routeContext,
          r = t.match,
          o = t.children,
          i = n.useContext(Rn);
        return (
          i &&
            r.route.errorElement &&
            (i._deepestRenderedBoundaryId = r.route.id),
          n.createElement(Un.Provider, { value: e }, o)
        );
      }
      function Gn(t, e, r) {
        if ((void 0 === e && (e = []), null == t)) {
          if (null == r || !r.errors) return null;
          t = r.matches;
        }
        var o = t,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var a = o.findIndex(function (n) {
            return n.route.id && (null == i ? void 0 : i[n.route.id]);
          });
          a >= 0 || G(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
        }
        return o.reduceRight(function (t, a, l) {
          var c = a.route.id ? (null == i ? void 0 : i[a.route.id]) : null,
            s = r ? a.route.errorElement || n.createElement(Kn, null) : null,
            u = function () {
              return n.createElement(
                Jn,
                {
                  match: a,
                  routeContext: {
                    outlet: t,
                    matches: e.concat(o.slice(0, l + 1)),
                  },
                },
                c ? s : void 0 !== a.route.element ? a.route.element : t
              );
            };
          return r && (a.route.errorElement || 0 === l)
            ? n.createElement(qn, {
                location: r.location,
                component: s,
                error: c,
                children: u(),
              })
            : u();
        }, null);
      }
      function Yn(t) {
        var e = n.useContext(Fn);
        return e || G(!1), e;
      }
      !(function (n) {
        n.UseRevalidator = 'useRevalidator';
      })(Xn || (Xn = {})),
        (function (n) {
          (n.UseLoaderData = 'useLoaderData'),
            (n.UseActionData = 'useActionData'),
            (n.UseRouteError = 'useRouteError'),
            (n.UseNavigation = 'useNavigation'),
            (n.UseRouteLoaderData = 'useRouteLoaderData'),
            (n.UseMatches = 'useMatches'),
            (n.UseRevalidator = 'useRevalidator');
        })(Zn || (Zn = {}));
      var $n;
      function nt(n) {
        G(!1);
      }
      function tt(t) {
        var e = t.basename,
          r = void 0 === e ? '/' : e,
          o = t.children,
          i = void 0 === o ? null : o,
          a = t.location,
          l = t.navigationType,
          c = void 0 === l ? E.Pop : l,
          s = t.navigator,
          u = t.static,
          p = void 0 !== u && u;
        Bn() && G(!1);
        var d = r.replace(/^\/*/, '/'),
          f = n.useMemo(
            function () {
              return { basename: d, navigator: s, static: p };
            },
            [d, s, p]
          );
        'string' === typeof a && (a = tn(a));
        var v = a,
          h = v.pathname,
          m = void 0 === h ? '/' : h,
          w = v.search,
          y = void 0 === w ? '' : w,
          g = v.hash,
          b = void 0 === g ? '' : g,
          T = v.state,
          z = void 0 === T ? null : T,
          k = v.key,
          S = void 0 === k ? 'default' : k,
          x = n.useMemo(
            function () {
              var n = vn(m, d);
              return null == n
                ? null
                : { pathname: n, search: y, hash: b, state: z, key: S };
            },
            [d, m, y, b, z, S]
          );
        return null == x
          ? null
          : n.createElement(
              Mn.Provider,
              { value: f },
              n.createElement(Vn.Provider, {
                children: i,
                value: { location: x, navigationType: c },
              })
            );
      }
      function et(t) {
        var e = t.children,
          r = t.location,
          o = n.useContext(In);
        return (function (t, e) {
          Bn() || G(!1);
          var r,
            o = n.useContext(Mn).navigator,
            i = n.useContext(Fn),
            a = n.useContext(Un).matches,
            l = a[a.length - 1],
            c = l ? l.params : {},
            s = (l && l.pathname, l ? l.pathnameBase : '/'),
            u = (l && l.route, Hn());
          if (e) {
            var p,
              d = 'string' === typeof e ? tn(e) : e;
            '/' === s ||
              (null == (p = d.pathname) ? void 0 : p.startsWith(s)) ||
              G(!1),
              (r = d);
          } else r = u;
          var f = r.pathname || '/',
            v = on(t, { pathname: '/' === s ? f : f.slice(s.length) || '/' }),
            h = Gn(
              v &&
                v.map(function (n) {
                  return Object.assign({}, n, {
                    params: Object.assign({}, c, n.params),
                    pathname: gn([
                      s,
                      o.encodeLocation
                        ? o.encodeLocation(n.pathname).pathname
                        : n.pathname,
                    ]),
                    pathnameBase:
                      '/' === n.pathnameBase
                        ? s
                        : gn([
                            s,
                            o.encodeLocation
                              ? o.encodeLocation(n.pathnameBase).pathname
                              : n.pathnameBase,
                          ]),
                  });
                }),
              a,
              i || void 0
            );
          return e && h
            ? n.createElement(
                Vn.Provider,
                {
                  value: {
                    location: Cn(
                      {
                        pathname: '/',
                        search: '',
                        hash: '',
                        state: null,
                        key: 'default',
                      },
                      r
                    ),
                    navigationType: E.Pop,
                  },
                },
                h
              )
            : h;
        })(o && !e ? o.router.routes : ot(e), r);
      }
      !(function (n) {
        (n[(n.pending = 0)] = 'pending'),
          (n[(n.success = 1)] = 'success'),
          (n[(n.error = 2)] = 'error');
      })($n || ($n = {}));
      var rt = new Promise(function () {});
      n.Component;
      function ot(t, e) {
        void 0 === e && (e = []);
        var r = [];
        return (
          n.Children.forEach(t, function (t, o) {
            if (n.isValidElement(t))
              if (t.type !== n.Fragment) {
                t.type !== nt && G(!1),
                  t.props.index && t.props.children && G(!1);
                var i = [].concat(P(e), [o]),
                  a = {
                    id: t.props.id || i.join('-'),
                    caseSensitive: t.props.caseSensitive,
                    element: t.props.element,
                    index: t.props.index,
                    path: t.props.path,
                    loader: t.props.loader,
                    action: t.props.action,
                    errorElement: t.props.errorElement,
                    hasErrorBoundary: null != t.props.errorElement,
                    shouldRevalidate: t.props.shouldRevalidate,
                    handle: t.props.handle,
                  };
                t.props.children && (a.children = ot(t.props.children, i)),
                  r.push(a);
              } else r.push.apply(r, ot(t.props.children, e));
          }),
          r
        );
      }
      var it = 'REMOVE_CARD',
        at = 'ADD_CARD',
        lt = 'EDIT_CARD',
        ct = 'SET_DECK',
        st = 'CLEAR_CURRENT_DECK',
        ut = 'SET_WORD',
        pt = 'CLEAR_CURRENT_WORD',
        dt = [
          { ruTopic: '\u0410\u0434\u0440\u0435\u0441', enTopic: 'Address' },
          {
            ruTopic: '\u0412\u043e\u043f\u0440\u043e\u0441\u044b',
            enTopic: 'Questions',
          },
          {
            ruTopic: '\u0421\u0442\u0440\u0430\u043d\u044b',
            enTopic: 'Countries',
          },
          { ruTopic: '\u042f\u0437\u044b\u043a\u0438', enTopic: 'Languages' },
          {
            ruTopic: '\u0413\u043e\u0440\u043e\u0434\u0430',
            enTopic: 'Cities',
          },
          { ruTopic: '\u0418\u043c\u0435\u043d\u0430', enTopic: 'Names' },
          {
            ruTopic: '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            enTopic: 'Days of Week',
          },
          { ruTopic: '\u0423\u0447\u0435\u0431\u0430', enTopic: 'Study' },
          {
            ruTopic: '\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435',
            enTopic: 'Animals',
          },
          {
            ruTopic:
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            enTopic: 'Greetings',
          },
          {
            ruTopic:
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            enTopic: 'Organizations',
          },
          {
            ruTopic: '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438',
            enTopic: 'Professions',
          },
          {
            ruTopic:
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            enTopic: 'Statehood',
          },
          { ruTopic: '\u0421\u0435\u043c\u044c\u044f', enTopic: 'Family' },
          { ruTopic: '\u0415\u0434\u0430', enTopic: 'Food' },
          { ruTopic: '\u0420\u0430\u0437\u043d\u043e\u0435', enTopic: 'Other' },
          { ruTopic: '\u0427\u0438\u0441\u043b\u0430', enTopic: 'Numbers' },
          {
            ruTopic:
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            enTopic: 'Adjectives',
          },
          {
            ruTopic:
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            enTopic: 'Pronouns',
          },
          {
            ruTopic: '\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438',
            enTopic: 'Prepositions',
          },
          {
            ruTopic: '\u0413\u043b\u0430\u0433\u043e\u043b\u044b',
            enTopic: 'Verbs',
          },
          { ruTopic: '\u0412\u0441\u0435', enTopic: 'All' },
        ],
        ft = [
          {
            ruTopic:
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            enTopic: 'Adjectives',
          },
          {
            ruTopic: '\u0413\u043b\u0430\u0433\u043e\u043b\u044b',
            enTopic: 'Verbs',
          },
          {
            ruTopic:
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            enTopic: 'Pronouns',
          },
          {
            ruTopic: '\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438',
            enTopic: 'Prepositions',
          },
          { ruTopic: '\u0427\u0438\u0441\u043b\u0430', enTopic: 'Numbers' },
        ],
        vt = [
          {
            ruTopic:
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            enTopic: 'Greetings',
          },
          {
            ruTopic: '\u0412\u043e\u043f\u0440\u043e\u0441\u044b',
            enTopic: 'Questions',
          },
          { ruTopic: '\u0421\u0435\u043c\u044c\u044f', enTopic: 'Family' },
          {
            ruTopic: '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438',
            enTopic: 'Professions',
          },
          {
            ruTopic:
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            enTopic: 'Organizations',
          },
          {
            ruTopic:
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            enTopic: 'Statehood',
          },
          {
            ruTopic: '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            enTopic: 'Days of Week',
          },
          { ruTopic: '\u0423\u0447\u0435\u0431\u0430', enTopic: 'Study' },
          { ruTopic: '\u0415\u0434\u0430', enTopic: 'Food' },
          { ruTopic: '\u0410\u0434\u0440\u0435\u0441', enTopic: 'Address' },
          {
            ruTopic: '\u0421\u0442\u0440\u0430\u043d\u044b',
            enTopic: 'Countries',
          },
          { ruTopic: '\u042f\u0437\u044b\u043a\u0438', enTopic: 'Languages' },
          {
            ruTopic: '\u0413\u043e\u0440\u043e\u0434\u0430',
            enTopic: 'Cities',
          },
          { ruTopic: '\u0418\u043c\u0435\u043d\u0430', enTopic: 'Names' },
          {
            ruTopic: '\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435',
            enTopic: 'Animals',
          },
          { ruTopic: '\u0420\u0430\u0437\u043d\u043e\u0435', enTopic: 'Other' },
        ],
        ht = [
          {
            word: '\u05de\u05d4',
            vocalization: '\u05de\u05d4',
            translation: '\u0427\u0442\u043e?',
            transcription: '\u043c\u0430',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05de\u05d9',
            vocalization: '\u05de\u05d9',
            translation: '\u041a\u0442\u043e?',
            transcription: '\u043c\u0438',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05de\u05d0\u05d9\u05df',
            vocalization: '\u05de\u05d0\u05d9\u05df',
            translation: '\u041e\u0442\u043a\u0443\u0434\u0430?',
            transcription: '\u043c\u044d\u0410\u0439\u043d',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05d0\u05d9\u05e4\u05d4',
            vocalization: '\u05d0\u05d9\u05e4\u05d4',
            translation: '\u0413\u0434\u0435?',
            transcription: '\u044d\u0439\u0444\u043e',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05dc\u05de\u05d4',
            vocalization: '\u05dc\u05de\u05d4',
            translation: '\u041f\u043e\u0447\u0435\u043c\u0443?',
            transcription: '\u043b\u0410\u043c\u0430',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05de\u05ea\u05d9',
            vocalization: '\u05de\u05ea\u05d9',
            translation: '\u041a\u043e\u0433\u0434\u0430?',
            transcription: '\u043c\u0430\u0442\u0410\u0439',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05dc\u05d0\u05df',
            vocalization: '\u05dc\u05d0\u05df',
            translation: '\u041a\u0443\u0434\u0430?',
            transcription: '\u043b\u0435\u0410\u043d',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05e2\u05dc \u05de\u05d9',
            vocalization: '\u05e2\u05dc \u05de\u05d9',
            translation: '\u041e \u043a\u043e\u043c?',
            transcription: '\u0410\u043b\u044c \u043c\u0418',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05e2\u05dc \u05de\u05d4',
            vocalization: '\u05e2\u05dc \u05de\u05e2',
            translation: '\u041e \u0447\u0435\u043c?',
            transcription: '\u0410\u043b\u044c \u043c\u0410',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05e2\u05dd \u05de\u05d9',
            vocalization: '\u05e2\u05dd \u05de\u05d9',
            translation: '\u0421 \u043a\u0435\u043c?',
            transcription: '\u0418\u043c \u043c\u0418',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05e9\u05dc \u05de\u05d9',
            vocalization: '\u05e9\u05dc \u05de\u05d9',
            translation: '\u0427\u044c\u0435?',
            transcription: '\u0448\u0415\u043b\u044c \u043c\u0418',
            ruTopic: ['\u0412\u043e\u043f\u0440\u043e\u0441\u044b'],
            enTopic: ['Questions'],
          },
          {
            word: '\u05e9\u05e8\u05d4',
            vocalization: '\u05e9\u05e8\u05d4',
            translation: '\u0421\u0430\u0440\u0430',
            transcription: '\u0421\u0430\u0440\u0430',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d9\u05e6\u05d7\u05e7',
            vocalization: '\u05d9\u05e6\u05d7\u05e7',
            translation: '\u0418\u0446\u0445\u0430\u043a',
            transcription: '\u0418\u0446\u0445\u0410\u043a',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05e8\u05d5\u05ea\u05d9',
            vocalization: '\u05e8\u05d5\u05ea\u05d9',
            translation: '\u0420\u0443\u0442\u0438',
            transcription: '\u0420\u0423\u0442\u0438',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d9\u05d5\u05e1\u05e3',
            vocalization: '\u05d9\u05d5\u05e1\u05e3',
            translation: '\u0419\u043e\u0441\u0435\u0444',
            transcription: '\u0419\u041e\u0441\u0435\u0444',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05de\u05e8\u05d9\u05e0\u05d4',
            vocalization: '\u05de\u05e8\u05d9\u05e0\u05d4',
            translation: '\u041c\u0430\u0440\u0438\u043d\u0430',
            transcription: '\u041c\u0430\u0440\u0418\u043d\u0430',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d3\u05d9\u05e0\u05d4',
            vocalization: '\u05d3\u05d9\u05e0\u05d4',
            translation: '\u0414\u0438\u043d\u0430',
            transcription: '\u0414\u0418\u043d\u0430',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d3\u05e0\u05d9\u05d0\u05dc',
            vocalization: '\u05d3\u05e0\u05d9\u05d0\u05dc',
            translation: '\u0414\u0430\u043d\u0438\u044d\u043b\u044c',
            transcription: '\u0414\u0430\u043d\u0438\u044d\u043b\u044c',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d3\u05d5\u05e8\u05d9\u05ea',
            vocalization: '\u05d3\u05d5\u05e8\u05d9\u05ea',
            translation: '\u0414\u043e\u0440\u0438\u0442 (\u0436.\u0440.)',
            transcription: '\u0414\u043e\u0440\u0438\u0442',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05de\u05d9\u05db\u05d0\u05dc',
            vocalization: '\u05de\u05d9\u05db\u05d0\u05dc',
            translation: '\u041c\u0438\u0445\u0430\u044d\u043b\u044c',
            transcription: '\u041c\u0438\u0445\u0430\u044d\u043b\u044c',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05e1\u05d9\u05de\u05d4',
            vocalization: '\u05e1\u05d9\u05de\u05d4',
            translation: '\u0421\u0438\u043c\u0430',
            transcription: '\u0421\u0438\u043c\u0430',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d0\u05d5\u05e8\u05d9',
            vocalization: '\u05d0\u05d5\u05e8\u05d9',
            translation: '\u0423\u0440\u0438',
            transcription: '\u0423\u0440\u0438',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05e8\u05d7\u05dc',
            vocalization: '\u05e8\u05d7\u05dc',
            translation: '\u0420\u0430\u0445\u044d\u043b\u044c',
            transcription: '\u0420\u0430\u0445\u042d\u043b\u044c',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05e2\u05e0\u05ea',
            vocalization: '\u05e2\u05e0\u05ea',
            translation: '\u0410\u043d\u0430\u0442',
            transcription: '\u0410\u043d\u0430\u0442',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d2\u05d9\u05d5\u05df',
            vocalization: '\u05d2\u05d9\u05d5\u05df',
            translation: '\u0414\u0436\u043e\u043d',
            transcription: '\u0414\u0436\u043e\u043d',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d1\u05d5\u05e8\u05d9\u05e1',
            vocalization: '\u05d1\u05d5\u05e8\u05d9\u05e1',
            translation: '\u0411\u043e\u0440\u0438\u0441',
            transcription: '\u0411\u043e\u0440\u0438\u0441',
            ruTopic: ['\u0418\u043c\u0435\u043d\u0430'],
            enTopic: ['Names'],
          },
          {
            word: '\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd',
            vocalization: '\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd',
            translation:
              '\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c',
            transcription:
              '\u0415\u0440\u0443\u0448\u0430\u043b\u0410\u0438\u043c',
            ruTopic: ['\u0413\u043e\u0440\u043e\u0434\u0430'],
            enTopic: ['Cities'],
          },
          {
            word: '\u05d8\u05d1\u05e8\u05d9\u05d4',
            vocalization: '\u05d8\u05d1\u05e8\u05d9\u05d4',
            translation: '\u0422\u0432\u0435\u0440\u0438\u044f',
            transcription: '\u0422\u0432\u0415\u0440\u0438\u044f',
            ruTopic: ['\u0413\u043e\u0440\u043e\u0434\u0430'],
            enTopic: ['Cities'],
          },
          {
            word: '\u05d0\u05d9\u05dc\u05ea',
            vocalization: '\u05d0\u05d9\u05dc\u05ea',
            translation: '\u042d\u0439\u043b\u0430\u0442',
            transcription: '\u042d\u0439\u043b\u0430\u0442',
            ruTopic: ['\u0413\u043e\u0440\u043e\u0434\u0430'],
            enTopic: ['Cities'],
          },
          {
            word: '\u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1',
            vocalization: '\u05ea\u05dc-\u05d0\u05d1\u05d9\u05d1',
            translation: '\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432',
            transcription: '\u0422\u0435\u043b\u044c-\u0410\u0432\u0418\u0432',
            ruTopic: ['\u0413\u043e\u0440\u043e\u0434\u0430'],
            enTopic: ['Cities'],
          },
          {
            word: '\u05d7\u05d9\u05e4\u05d4',
            vocalization: '\u05d7\u05d9\u05e4\u05d4',
            translation: '\u0425\u0430\u0439\u0444\u0430',
            transcription: '\u0425\u044d\u0439\u0444\u0410',
            ruTopic: ['\u0413\u043e\u0440\u043e\u0434\u0430'],
            enTopic: ['Cities'],
          },
          {
            word: '\u05e4\u05e8\u05d9\u05d6',
            vocalization: '\u05e4\u05e8\u05d9\u05d6',
            translation: '\u041f\u0430\u0440\u0438\u0436',
            transcription: '\u041f\u0430\u0440\u0438\u0437',
            ruTopic: ['\u0413\u043e\u0440\u043e\u0434\u0430'],
            enTopic: ['Cities'],
          },
          {
            word: '\u05e1\u05e4\u05e8\u05d3',
            vocalization: '\u05e1\u05e4\u05e8\u05d3',
            translation: '\u0418\u0441\u043f\u0430\u043d\u0438\u044f',
            transcription: '\u0421\u0444\u0430\u0440\u0410\u0434',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05d0\u05e0\u05d2\u05dc\u05d9\u05d4',
            vocalization: '\u05d0\u05e0\u05d2\u05dc\u05d9\u05d4',
            translation: '\u0410\u043d\u0433\u043b\u0438\u044f',
            transcription: '\u0410\u043d\u0433\u043b\u0438\u0430',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05e8\u05d5\u05e1\u05d9\u05d4',
            vocalization: '\u05e8\u05d5\u05e1\u05d9\u05d4',
            translation: '\u0420\u043e\u0441\u0441\u0438\u044f',
            transcription: '\u0420\u0423\u0441\u0441\u0438\u0430',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05d0\u05d5\u05e7\u05e8\u05d0\u05d9\u05e0\u05d4',
            vocalization: '\u05d0\u05d5\u05e7\u05e8\u05d0\u05d9\u05e0\u05d4',
            translation: '\u0423\u043a\u0440\u0430\u0438\u043d\u0430',
            transcription: '\u0423\u043a\u0440\u0410\u0439\u043d\u0430',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05e6\u05e8\u05e4\u05ea',
            vocalization: '\u05e6\u05e8\u05e4\u05ea',
            translation: '\u0424\u0440\u0430\u043d\u0446\u0438\u044f',
            transcription:
              '\u0424\u0440\u0410\u043d\u043a\u0440\u0430\u0439\u0445',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05d9\u05e9\u05e8\u05d0\u05dc',
            vocalization: '\u05d9\u05e9\u05e8\u05d0\u05dc',
            translation: '\u0418\u0437\u0440\u0430\u0438\u043b\u044c',
            transcription: '\u0418\u0441\u0440\u0430\u042d\u043b\u044c',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05e2\u05d9\u05e8\u05d0\u05e7',
            vocalization: '\u05e2\u05d9\u05e8\u05d0\u05e7',
            translation: '\u0418\u0440\u0430\u043a',
            transcription: '\u0418\u0440\u0430\u043a',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05d0\u05d9\u05e8\u05d0\u05df',
            vocalization: '\u05d0\u05d9\u05e8\u05d0\u05df',
            translation: '\u0418\u0440\u0430\u043d',
            transcription: '\u0418\u0440\u0430\u043d',
            ruTopic: ['\u0421\u0442\u0440\u0430\u043d\u044b'],
            enTopic: ['Countries'],
          },
          {
            word: '\u05e2\u05d1\u05e8\u05d9\u05ea',
            vocalization: '\u05e2\u05d1\u05e8\u05d9\u05ea',
            translation: '\u0418\u0432\u0440\u0438\u0442',
            transcription: '\u0418\u0432\u0440\u0438\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05e8\u05d5\u05e1\u05d9\u05ea',
            vocalization: '\u05e8\u05d5\u05bc\u05e1\u05b4\u05d9\u05ea',
            translation: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
            transcription: '\u0440\u0443\u0441\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea',
            vocalization: '\u05d0\u05b7\u05e0\u05d2\u05dc\u05b4\u05d9\u05ea',
            translation:
              '\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439',
            transcription: '\u0430\u043d\u0433\u043b\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05e6\u05e8\u05e4\u05ea\u05d9\u05ea',
            vocalization:
              '\u05e6\u05b8\u05e8\u05e4\u05b8\u05ea\u05b4\u05d9\u05ea',
            translation:
              '\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439',
            transcription: '\u0446\u0430\u0440\u0444\u0430\u0442\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05d2\u05e8\u05de\u05e0\u05d9\u05ea',
            vocalization:
              '\u05d2\u05b6\u05e8\u05de\u05b8\u05e0\u05b4\u05d9\u05ea',
            translation: '\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439',
            transcription: '\u0433\u0435\u0440\u043c\u0430\u043d\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05e1\u05e4\u05e8\u05d3\u05d9\u05de',
            vocalization:
              '\u05e1\u05e4\u05b8\u05e8\u05b7\u05d3\u05b4\u05d9\u05ea',
            translation:
              '\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439',
            transcription: '\u0441\u0444\u0430\u0440\u0430\u0434\u0438\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05e8\u05d5\u05de\u05e0\u05d9\u05ea',
            vocalization: '\u05e8\u05d5\u05de\u05e0\u05d9\u05ea',
            translation:
              '\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0438\u0439',
            transcription: '\u0440\u043e\u043c\u0430\u043d\u0438\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05e2\u05e8\u05d1\u05d9\u05ea',
            vocalization: '\u05e2\u05e8\u05d1\u05d9\u05ea',
            translation: '\u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0439',
            transcription: '\u0430\u0440\u0432\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05d0\u05de\u05d4\u05e8\u05d9\u05ea',
            vocalization: '\u05d0\u05de\u05d4\u05e8\u05d9\u05ea',
            translation:
              '\u0410\u043c\u0445\u0430\u0440\u0441\u043a\u0438\u0439',
            transcription: '\u0430\u043c(\u0445)\u0430\u0440\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05d9\u05e4\u05e0\u05d9\u05ea',
            vocalization: '\u05d9\u05e4\u05e0\u05d9\u05ea',
            translation: '\u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439',
            transcription: '\u044f\u0444\u0430\u043d\u0418\u0442',
            ruTopic: ['\u042f\u0437\u044b\u043a\u0438'],
            enTopic: ['Languages'],
          },
          {
            word: '\u05d1\u05d9\u05ea',
            vocalization: '\u05d1\u05bc\u05b7\u05d9\u05b4\u05ea',
            translation: '\u0414\u043e\u043c',
            transcription: '\u0431\u0410\u0439\u0442',
            ruTopic: ['\u0410\u0434\u0440\u0435\u0441'],
            enTopic: ['Address'],
          },
          {
            word: '\u05e8\u05d7\u05d5\u05d1',
            vocalization: '\u05e8\u05b0\u05d7\u05d5\u05b9\u05d1',
            translation: '\u0423\u043b\u0438\u0446\u0430',
            transcription: '\u0440\u044d\u0445\u041e\u0432',
            ruTopic: ['\u0410\u0434\u0440\u0435\u0441'],
            enTopic: ['Address'],
          },
          {
            word: '\u05d3\u05d9\u05e8\u05d4',
            vocalization: '\u05d3\u05bc\u05b4\u05d9\u05e8\u05b8\u05d4',
            translation: '\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
            transcription: '\u0434\u0438\u0440\u0410',
            ruTopic: ['\u0410\u0434\u0440\u0435\u0441'],
            enTopic: ['Address'],
          },
          {
            word: '\u05de\u05e1\u05e4\u05e8',
            vocalization: '\u05de\u05b4\u05e1\u05b0\u05e4\u05bc\u05b8\u05e8',
            translation: '\u041d\u043e\u043c\u0435\u0440',
            transcription: '\u043c\u0438\u0441\u043f\u0410\u0440',
            ruTopic: ['\u0410\u0434\u0440\u0435\u0441'],
            enTopic: ['Address'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05d8\u05d5\u05d1',
            vocalization: '\u05d9\u05d5\u05b9\u05dd \u05d8\u05d5\u05b9\u05d1',
            translation:
              '\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f',
            transcription: '\u0439\u043e\u043c \u0442\u043e\u0432',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05d1\u05d5\u05e7\u05e8 \u05d8\u05d5\u05d1',
            vocalization:
              '\u05d1\u05bc\u05d5\u05b9\u05e7\u05b6\u05e8 \u05d8\u05d5\u05b9\u05d1',
            translation:
              '\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0443\u0442\u0440\u0430',
            transcription: '\u0431\u041e\u043a\u0435\u0440 \u0442\u043e\u0432',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05e2\u05e8\u05d1 \u05d8\u05d5\u05d1',
            vocalization:
              '\u05e2\u05b6\u05e8\u05b6\u05d1 \u05d8\u05d5\u05b9\u05d1',
            translation:
              '\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0432\u0435\u0447\u0435\u0440\u0430',
            transcription: '\u042d\u0440\u0435\u0432 \u0442\u043e\u0432',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05dc\u05d9\u05dc\u05d4 \u05d8\u05d5\u05d1',
            vocalization:
              '\u05dc\u05b7\u05d9\u05dc\u05b8\u05d4 \u05d8\u05d5\u05b9\u05d1',
            translation:
              '\u0425\u043e\u0440\u043e\u0448\u0435\u0439 \u043d\u043e\u0447\u0438',
            transcription: '\u043b\u0410\u0439\u043b\u0430 \u0442\u043e\u0432',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05e1\u05dc\u05d9\u05d7\u05d4',
            vocalization: '\u05e1\u05dc\u05d9\u05d7\u05d4',
            translation: '\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435',
            transcription: '\u0441\u043b\u0438\u0445\u0410',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05ea\u05d5\u05d3\u05d4 \u05e8\u05d1\u05d4',
            vocalization: '\u05ea\u05d5\u05d3\u05d4 \u05e8\u05d1\u05d4',
            translation:
              '\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0441\u043f\u0430\u0441\u0438\u0431\u043e',
            transcription: '\u0442\u043e\u0434\u0410 \u0440\u0430\u0431\u0410',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05d1\u05d1\u05e7\u05e9\u05d4',
            vocalization:
              '\u05d1\u05bc\u05b0\u05d1\u05b7\u05e7\u05bc\u05b8\u05e9\u05c1\u05b8\u05d4',
            translation:
              '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430',
            transcription: '\u0431\u0435\u0432\u0430\u043a\u0430\u0448\u0410',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05d1\u05d4\u05e6\u05dc\u05d7\u05d4',
            vocalization:
              '\u05d1\u05bc\u05b0\u05d4\u05b7\u05e6\u05dc\u05b8\u05d7\u05b8\u05d4',
            translation: '\u0423\u0441\u043f\u0435\u0445\u0430',
            transcription:
              '\u0431\u0435(h)\u0430\u0446\u043b\u0430\u0445\u0430',
            ruTopic: [
              '\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f',
            ],
            enTopic: ['Greetings'],
          },
          {
            word: '\u05d0\u05d5\u05dc\u05e4\u05df',
            vocalization:
              '\u05d0\u05d5\u05bc\u05dc\u05b0\u05e4\u05bc\u05b8\u05df',
            translation: '\u0423\u043b\u044c\u043f\u0430\u043d',
            transcription: '\u0443\u043b\u044c\u043f\u0410\u043d',
            ruTopic: [
              '\u0423\u0447\u0435\u0431\u0430',
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Study', 'Organizations/Places'],
          },
          {
            word: '\u05d0\u05d5\u05e0\u05d9\u05d1\u05e8\u05e1\u05d9\u05d8\u05d4',
            vocalization:
              '\u05d0\u05d5\u05bc\u05e0\u05b4\u05d9\u05d1\u05b6\u05e8\u05b0\u05e1\u05b4\u05d9\u05d8\u05b8\u05d4',
            translation:
              '\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442',
            transcription:
              '\u0443\u043d\u0438\u0432\u042d\u0440\u0441\u0438\u0442\u0430',
            ruTopic: [
              '\u0423\u0447\u0435\u0431\u0430',
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Study', 'Organizations/Places'],
          },
          {
            word: '\u05de\u05e9\u05e8\u05d3',
            vocalization: '\u05de\u05b4\u05e9\u05c2\u05b0\u05e8\u05b8\u05d3',
            translation: '\u041e\u0444\u0438\u0441',
            transcription: '\u043c\u0438\u0441\u0440\u0410\u0434',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05d1\u05d9\u05ea \u05d4\u05d7\u05d5\u05dc\u05d9\u05dd',
            vocalization:
              '\u05d1\u05d9\u05ea \u05d4\u05d7\u05d5\u05dc\u05d9\u05dd',
            translation: '\u0411\u043e\u043b\u044c\u043d\u0438\u0446\u0430',
            transcription:
              '\u0431\u0415\u0439\u0442 \u0445\u043e\u043b\u0418\u043c',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05d1\u05d9\u05ea \u05de\u05e9\u05e4\u05d8',
            vocalization: '\u05d1\u05d9\u05ea \u05de\u05e9\u05e4\u05d8',
            translation: '\u0421\u0443\u0434',
            transcription:
              '\u0431\u0415\u0439\u0442 \u043c\u0438\u0448\u043f\u0410\u0434',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05e9\u05d5\u05e7',
            vocalization: '\u05e9\u05c1\u05d5\u05bc\u05e7',
            translation: '\u0420\u044b\u043d\u043e\u043a',
            transcription: '\u0448\u0423\u043a',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05ea\u05dc\u05de\u05d9\u05d3',
            vocalization:
              '\u05ea\u05bc\u05b7\u05dc\u05b0\u05de\u05b4\u05d9\u05d3',
            translation: '\u0423\u0447\u0435\u043d\u0438\u043a',
            transcription: '\u0442\u0430\u043b\u043c\u0418\u0434',
            ruTopic: ['\u0423\u0447\u0435\u0431\u0430'],
            enTopic: ['Study'],
          },
          {
            word: '\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8',
            vocalization:
              '\u05e1\u05b0\u05d8\u05d5\u05bc\u05d3\u05b6\u05e0\u05b0\u05d8',
            translation: '\u0421\u0442\u0443\u0434\u0435\u043d\u0442',
            transcription: '\u0441\u0442\u0443\u0434\u042d\u043d\u0442',
            ruTopic: ['\u0423\u0447\u0435\u0431\u0430'],
            enTopic: ['Study'],
          },
          {
            word: '\u05de\u05d5\u05e8\u05d4',
            vocalization: '\u05de\u05d5\u05b9\u05e8\u05b6\u05d4',
            translation:
              '\u0423\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u0438\u0446\u0430',
            transcription: '\u043c\u043e\u0440\u0410',
            ruTopic: [
              '\u0423\u0447\u0435\u0431\u0430',
              '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438',
            ],
            enTopic: ['Study', 'Professions'],
          },
          {
            word: '\u05d1\u05d9\u05ea-\u05e1\u05e4\u05e8',
            vocalization: '\u05d1\u05d9\u05ea-\u05e1\u05e4\u05e8',
            translation:
              '\u0428\u043a\u043e\u043b\u0430 (\u0434\u043e\u043c \u043a\u043d\u0438\u0433\u0438)',
            transcription:
              '\u0431\u0415\u0439\u0442 \u0441\u044d\u0444\u042d\u0440',
            ruTopic: [
              '\u0423\u0447\u0435\u0431\u0430',
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Study', 'Organizations/Places'],
          },
          {
            word: '\u05db\u05d9\u05ea\u05d4',
            vocalization: '\u05db\u05bc\u05b4\u05d9\u05ea\u05bc\u05b8\u05d4',
            translation: '\u041a\u043b\u0430\u0441\u0441',
            transcription: '\u043a\u0438\u0442\u0410',
            ruTopic: ['\u0423\u0447\u0435\u0431\u0430'],
            enTopic: ['Study'],
          },
          {
            word: '\u05de\u05e9\u05d8\u05e8\u05d4',
            vocalization:
              '\u05de\u05b4\u05e9\u05c1\u05b0\u05d8\u05b8\u05e8\u05b8\u05d4',
            translation: '\u041f\u043e\u043b\u0438\u0446\u0438\u044f',
            transcription: '\u043c\u0438\u0448\u0442\u0430\u0440\u0410',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05d1\u05e0\u05e7',
            vocalization: '\u05d1\u05bc\u05b7\u05e0\u05b0\u05e7',
            translation: '\u0411\u0430\u043d\u043a',
            transcription: '\u0431\u0430\u043d\u043a',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05e7\u05e4\u05d4',
            vocalization: '\u05e7\u05e4\u05d4',
            translation: '\u041a\u0430\u0444\u0435',
            transcription: '\u043a\u0430\u0444\u0435',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05e1\u05e4\u05e8\u05d9\u05d9\u05d4',
            vocalization: '\u05e1\u05e4\u05e8\u05d9\u05d9\u05d4',
            translation:
              '\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430',
            transcription: '\u0441\u0438\u0444\u0440\u0438\u042f',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05de\u05e1\u05e2\u05d3\u05d4',
            vocalization: '\u05de\u05e1\u05e2\u05d3\u05d4',
            translation: '\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d',
            transcription: '\u043c\u0438\u0441\u0430\u0434\u0410',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05de\u05e4\u05e2\u05dc',
            vocalization: '\u05de\u05e4\u05e2\u05dc',
            translation: '\u0417\u0430\u0432\u043e\u0434',
            transcription: '\u043c\u0438\u0444\u0410\u043b\u044c',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05d7\u05e0\u05d5\u05ea',
            vocalization: '\u05d7\u05e0\u05d5\u05ea',
            translation: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d',
            transcription: '\u0445\u0430\u043d\u0423\u0442',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05d2\u05df \u05d9\u05dc\u05d3\u05d9\u05dd',
            vocalization: '\u05d2\u05df \u05d9\u05dc\u05d3\u05d9\u05dd',
            translation:
              '\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u0430\u0434',
            transcription:
              '\u0433\u0410\u043d \u0439\u043e\u043b\u0434\u0418\u043c',
            ruTopic: [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u041c\u0435\u0441\u0442\u0430',
            ],
            enTopic: ['Organizations/Places'],
          },
          {
            word: '\u05e4\u05e7\u05d9\u05d3',
            vocalization: '\u05e4\u05bc\u05b8\u05e7\u05b4\u05d9\u05d3',
            translation:
              '\u0427\u0438\u043d\u043e\u0432\u043d\u0438\u043a/\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439',
            transcription: '\u043f\u0430\u043a\u0418\u0434',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05e8\u05d5\u05e4\u05d0',
            vocalization: '\u05e8\u05d5\u05e4\u05d0',
            translation: '\u0412\u0440\u0430\u0447',
            transcription: '\u0440\u043e\u0444\u042d',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05d5\u05db\u05e8\u05ea',
            vocalization: '\u05de\u05d5\u05db\u05e8\u05ea',
            translation:
              '\u041f\u0440\u043e\u0434\u0430\u0432\u0449\u0438\u0446\u0430',
            transcription: '\u043c\u043e\u0445\u042d\u0440\u044d\u0442',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05dc\u05e6\u05e8\u05d9\u05ea',
            vocalization: '\u05de\u05dc\u05e6\u05e8\u05d9\u05ea',
            translation:
              '\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442\u043a\u0430',
            transcription:
              '\u043c\u0435\u043b\u044c\u0446\u0430\u0440\u0418\u0442',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05e9\u05d5\u05de\u05e8',
            vocalization: '\u05e9\u05d5\u05de\u05e8',
            translation: '\u041e\u0445\u0440\u0430\u043d\u043d\u0438\u043a',
            transcription: '\u0448\u043e\u043c\u042d\u0440',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05e1\u05d5\u05e4\u05e8\u05ea',
            vocalization: '\u05e1\u05d5\u05e4\u05e8\u05ea',
            translation:
              '\u041f\u0438\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u0438\u0446\u0430',
            transcription: '\u0441\u043e\u0444\u042d\u0440\u0435\u0442',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05e2\u05d9\u05ea\u05d5\u05e0\u05d0\u05d9',
            vocalization: '\u05e2\u05d9\u05ea\u05d5\u05e0\u05d0\u05d9',
            translation:
              '\u0416\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442',
            transcription: '\u0438\u0442\u043e\u043d\u0410\u0438',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05e0\u05d4\u05dc',
            vocalization: '\u05de\u05e0\u05d4\u05dc',
            translation: '\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440',
            transcription: '\u043c\u044d\u043d\u0430\u042d\u043b',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05d6\u05db\u05d9\u05e8\u05d4',
            vocalization:
              '\u05de\u05b7\u05d6\u05b0\u05db\u05bc\u05b4\u05d9\u05e8\u05b8\u05d4\u05bc',
            translation:
              '\u0421\u0435\u043a\u0440\u0435\u0442\u0430\u0440\u0448\u0430',
            transcription: '\u043c\u0430\u0437\u043a\u0438\u0440\u0410',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05e2\u05d5\u05e8\u05da \u05d3\u05d9\u05df',
            vocalization: '\u05e2\u05d5\u05e8\u05da \u05d3\u05d9\u05df',
            translation: '\u0410\u0434\u0432\u043e\u043a\u0430\u0442',
            transcription: '\u041e\u0440\u044d\u0445 \u0434\u0418\u043d',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05d4\u05e0\u05d3\u05e1',
            vocalization:
              '\u05de\u05b0\u05d4\u05b7\u05e0\u05b0\u05d3\u05bc\u05b5\u05e1',
            translation: '\u0418\u043d\u0436\u0435\u043d\u0435\u0440',
            transcription: '\u043c\u044d\u0430\u043d\u0434\u042d\u0441',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05e2\u05d1\u05d5\u05d3\u05d4',
            vocalization: '\u05e2\u05d1\u05d5\u05d3\u05d4',
            translation: '\u0420\u0430\u0431\u043e\u0442\u0430',
            transcription: '\u0430\u0432\u043e\u0434\u0410',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05d5\u05d8\u05e8\u05d9\u05e0\u05e8',
            vocalization: '\u05d5\u05d8\u05e8\u05d9\u05e0\u05e8',
            translation:
              '\u0412\u0435\u0442\u0435\u0440\u0438\u043d\u0430\u0440',
            transcription:
              '\u0432\u0435\u0442\u0435\u0440\u0438\u043d\u0410\u0440',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05d0\u05d7\u05d5\u05ea',
            vocalization: '\u05d0\u05d7\u05d5\u05ea',
            translation:
              '\u041c\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u0430',
            transcription: '\u0430\u0445\u041e\u0442',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05d2\u05e0\u05e0\u05ea',
            vocalization: '\u05d2\u05e0\u05e0\u05ea',
            translation:
              '\u0412\u043e\u0441\u043f\u0438\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u0438\u0446\u0430',
            transcription: '\u0433\u0430\u043d\u042d\u043d\u044d\u0442',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05d7\u05d9\u05d9\u05dc',
            vocalization: '\u05d7\u05d9\u05d9\u05dc',
            translation: '\u0421\u043e\u043b\u0434\u0430\u0442',
            transcription: '\u0445\u0430\u042f\u043b',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05d7\u05d9\u05d9\u05dc\u05ea',
            vocalization: '\u05d7\u05d9\u05d9\u05dc\u05ea',
            translation: '\u0421\u043e\u043b\u0434\u0430\u0442\u043a\u0430',
            transcription: '\u0445\u0430\u0439\u042d\u043b\u044d\u0442',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05ea\u05e4\u05e7\u05d9\u05d3',
            vocalization: '\u05ea\u05e4\u05e7\u05d9\u05d3',
            translation:
              '\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c',
            transcription: '\u0442\u0430\u0444\u043a\u0418\u0434',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05e7\u05e6\u05d5\u05e2',
            vocalization: '\u05de\u05e7\u05e6\u05d5\u05e2',
            translation:
              '\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c',
            transcription: '\u043c\u0438\u043a\u0446\u041e\u0430',
            ruTopic: ['\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438'],
            enTopic: ['Professions'],
          },
          {
            word: '\u05de\u05e9\u05e4\u05d7\u05d4',
            vocalization:
              '\u05de\u05b4\u05e9\u05c1\u05b0\u05e4\u05bc\u05b8\u05d7\u05b8\u05d4',
            translation: '\u0421\u0435\u043c\u044c\u044f',
            transcription: '',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d4\u05d5\u05e8\u05d9\u05dd',
            vocalization: '\u05d4\u05d5\u05e8\u05d9\u05dd',
            translation: '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u0438',
            transcription: 'h\u043e\u0440\u0418\u043c',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d0\u05d1\u05d0',
            vocalization: '\u05d0\u05d1\u05d0',
            translation: '\u041f\u0430\u043f\u0430',
            transcription: '\u0410\u0431\u0430',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d0\u05d9\u05de\u05d0',
            vocalization: '\u05d0\u05b4\u05d9\u05de\u05bc\u05b8\u05d0',
            translation: '\u041c\u0430\u043c\u0430',
            transcription: '\u0418\u043c\u0430',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d1\u05df',
            vocalization: '\u05d1\u05df',
            translation: '\u0421\u044b\u043d',
            transcription: '\u0431\u0415\u043d',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d1\u05ea',
            vocalization: '\u05d1\u05de',
            translation: '\u0414\u043e\u0447\u044c',
            transcription: '\u0431\u0410\u0442',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05ea\u05d9\u05e0\u05d5\u05e7',
            vocalization: '\u05ea\u05d9\u05e0\u05d5\u05e7',
            translation: '\u041c\u043b\u0430\u0434\u0435\u043d\u0435\u0446',
            transcription: '\u0442\u0438\u043d\u041e\u043a',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d1\u05e2\u05dc',
            vocalization: '\u05d1\u05e2\u05dc',
            translation: '\u041c\u0443\u0436',
            transcription: '\u0431\u0430\u0410\u043b',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d0\u05d9\u05e9\u05d4',
            vocalization: '\u05d0\u05b4\u05d9\u05e9\u05c1\u05bc\u05b8\u05d4',
            translation: '\u0416\u0435\u043d\u0430',
            transcription: '\u0438\u0448\u0410',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d0\u05d7',
            vocalization: '\u05d0\u05d7',
            translation: '\u0411\u0440\u0430\u0442',
            transcription: '\u0410\u0445',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d0\u05d7\u05d5\u05ea',
            vocalization: '\u05d0\u05d7\u05d5\u05ea',
            translation: '\u0421\u0435\u0441\u0442\u0440\u0430',
            transcription: '\u0430\u0445\u041e\u0442',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05e1\u05d1\u05ea\u05d0',
            vocalization: '\u05e1\u05d1\u05ea\u05d0',
            translation: '\u0411\u0430\u0431\u0443\u0448\u043a\u0430',
            transcription: '\u0441\u0410\u0432\u0442\u0430',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05e1\u05d1\u05d0',
            vocalization: '\u05e1\u05d1\u05d0',
            translation: '\u0414\u0435\u0434\u0443\u0448\u043a\u0430',
            transcription: '\u0441\u0410\u0431\u0430',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d3\u05d5\u05d3',
            vocalization: '\u05d3\u05d5\u05d3',
            translation: '\u0414\u044f\u0434\u044f',
            transcription: '\u0434\u041e\u0434',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05d3\u05d5\u05d3\u05d4',
            vocalization: '\u05d3\u05d5\u05d3\u05d4',
            translation: '\u0422\u0435\u0442\u044f',
            transcription: '\u0434\u043e\u0434\u0410',
            ruTopic: '\u0421\u0435\u043c\u044c\u044f',
            enTopic: 'Family',
          },
          {
            word: '\u05dc\u05d7\u05dd',
            vocalization: '\u05dc\u05d7\u05dd',
            translation: '\u0425\u043b\u0435\u0431',
            transcription: '\u043b\u044d\u0445\u042d\u043c',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d7\u05dc\u05d1',
            vocalization: '\u05d7\u05dc\u05d1',
            translation: '\u041c\u043e\u043b\u043e\u043a\u043e',
            transcription: '\u0445\u0430\u043b\u0410\u0432',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d3\u05d2',
            vocalization: '\u05d3\u05d2',
            translation: '\u0420\u044b\u0431\u0430',
            transcription: '\u0434\u0410\u0433',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d1\u05e9\u05e8',
            vocalization: '\u05d1\u05e9\u05e8',
            translation: '\u041c\u044f\u0441\u043e',
            transcription: '\u0431\u0430\u0441\u0410\u0440',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d9\u05e8\u05e7\u05d5\u05ea',
            vocalization: '\u05d9\u05e8\u05e7\u05d5\u05ea',
            translation: '\u041e\u0432\u043e\u0449\u0438',
            transcription: '\u0439\u0435\u0440\u0430\u043a\u041e\u0442',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e4\u05d9\u05e8\u05d5\u05ea',
            vocalization: '\u05e4\u05d9\u05e8\u05d5\u05ea',
            translation: '\u0424\u0440\u0443\u043a\u0442\u044b',
            transcription: '\u043f\u0435\u0440\u041e\u0442',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e7\u05e4\u05d4',
            vocalization: '\u05e7\u05e4\u05d4',
            translation: '\u041a\u043e\u0444\u0435',
            transcription: '\u043a\u0430\u0444\u042d',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05ea\u05d4',
            vocalization: '\u05ea\u05d4',
            translation: '\u0427\u0430\u0439',
            transcription: '\u0442\u0415',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d3\u05d1\u05e9',
            vocalization: '\u05d3\u05d1\u05e9',
            translation: '\u041c\u0435\u0434',
            transcription: '\u0434\u0432\u0410\u0448',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05de\u05d9\u05e6',
            vocalization: '\u05de\u05d9\u05e6',
            translation: '\u0421\u043e\u043a',
            transcription: '\u043c\u0418\u0446',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d2\u05dc\u05d9\u05d3\u05d4',
            vocalization: '\u05d2\u05dc\u05d9\u05d3\u05d4',
            translation:
              '\u041c\u043e\u0440\u043e\u0436\u0435\u043d\u043e\u0435',
            transcription: '\u0433\u043b\u0438\u0434\u0410',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e2\u05d5\u05d3\u05d4',
            vocalization: '\u05e2\u05d5\u05d2\u05d4',
            translation: '\u041f\u0438\u0440\u043e\u0433',
            transcription: '\u0443\u0433\u0410',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05de\u05d9\u05dd',
            vocalization: '\u05de\u05d9\u05dd',
            translation: '\u0412\u043e\u0434\u0430',
            transcription: '\u043c\u0430\u0439\u0418\u043c',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e1\u05d5\u05db\u05e8',
            vocalization: '\u05e1\u05d5\u05db\u05e8',
            translation: '\u0421\u0430\u0445\u0430\u0440',
            transcription: '\u0441\u043e\u0445\u0415\u0440',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e9\u05d5\u05d5\u05e7\u05d5\u05dc\u05d3',
            vocalization: '\u05e9\u05d5\u05e7\u05d5\u05dc\u05d3',
            translation: '\u0428\u043e\u043a\u043e\u043b\u0430\u0434',
            transcription: '\u0448\u041e\u043a\u043e\u043b\u0430\u0434',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05dc\u05d9\u05de\u05d5\u05df',
            vocalization: '\u05dc\u05d9\u05de\u05d5\u05df',
            translation: '\u041b\u0438\u043c\u043e\u043d',
            transcription: '\u043b\u0438\u043c\u041e\u043d',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05ea\u05d5\u05ea',
            vocalization: '\u05ea\u05d5\u05ea',
            translation: '\u041a\u043b\u0443\u0431\u043d\u0438\u043a\u0430',
            transcription: '\u0442\u0423\u0442',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05ea\u05d5\u05ea \u05e9\u05d3\u05d4',
            vocalization: '\u05ea\u05d5\u05ea \u05e9\u05d3\u05d4',
            translation:
              '\u041f\u043e\u043b\u0435\u0432\u0430\u044f \u043a\u043b\u0443\u0431\u043d\u0438\u043a\u0430',
            transcription: '\u0442\u0423\u0442 \u0441\u0430\u0434\u042d',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e2\u05e0\u05d1\u05d9\u05dd',
            vocalization: '\u05e2\u05e0\u05d1\u05d9\u05dd',
            translation: '\u0412\u0438\u043d\u043e\u0433\u0440\u0430\u0434',
            transcription: '\u0430\u043d\u0430\u0432\u0418\u043c',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05ea\u05e4\u05d5\u05d6',
            vocalization: '\u05ea\u05e4\u05d5\u05d6',
            translation: '\u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d',
            transcription: '\u0442\u0430\u043f\u0423\u0437',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d0\u05d2\u05e1',
            vocalization: '\u05d0\u05d2\u05e1',
            translation: '\u0413\u0440\u0443\u0448\u0430',
            transcription: '\u0430\u0433\u0410\u0441',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05ea\u05e4\u05d5\u05d7',
            vocalization:
              '\u05ea\u05bc\u05b7\u05e4\u05bc\u05d5\u05bc\u05d7\u05b7',
            translation: '\u042f\u0431\u043b\u043e\u043a\u043e',
            transcription: '\u0442\u0430\u043f\u0423\u0430\u0445',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d9\u05e8\u05d5\u05e7',
            vocalization: '\u05d9\u05e8\u05d5\u05e7',
            translation: '\u0417\u0435\u043b\u0435\u043d\u044c',
            transcription: '\u044f\u0440\u041e\u043a',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d1\u05e6\u05dc',
            vocalization: '\u05d1\u05e6\u05dc',
            translation: '\u041b\u0443\u043a',
            transcription: '\u0431\u0430\u0446\u0410\u043b',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d7\u05e6\u05d9\u05dc',
            vocalization: '\u05d7\u05e6\u05d9\u05dc',
            translation: '\u0411\u0430\u043a\u043b\u0430\u0436\u0430\u043d',
            transcription: '\u0445\u0430\u0446\u0418\u043b',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05de\u05dc\u05e4\u05e4\u05d5\u05df',
            vocalization: '\u05de\u05dc\u05e4\u05e4\u05d5\u05df',
            translation: '\u041e\u0433\u0443\u0440\u0435\u0446',
            transcription:
              '\u043c\u0435\u043b\u0430\u0444\u0435\u0444\u041e\u043d',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e2\u05d2\u05d1\u05e0\u05d9\u05d9\u05d4',
            vocalization: '\u05e2\u05d2\u05d1\u05e0\u05d9\u05d9\u05d4',
            translation: '\u041f\u043e\u043c\u0438\u0434\u043e\u0440',
            transcription: '\u0430\u0433\u0432\u0430\u043d\u0438\u042f',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d7\u05e1\u05d4',
            vocalization: '\u05d7\u05e1\u05d4',
            translation: '\u0421\u0430\u043b\u0430\u0442',
            transcription: '\u0445\u0430\u0441\u0410',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05db\u05e8\u05d5\u05d1\u05d9\u05ea',
            vocalization: '\u05db\u05e8\u05d5\u05d1\u05d9\u05ea',
            translation:
              '\u0426\u0432\u0435\u0442\u043d\u0430\u044f \u043a\u0430\u043f\u0443\u0441\u0442\u0430',
            transcription: '\u043a\u0440\u0443\u0432\u0418\u0442',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e6\u05e0\u05d5\u05e0\u05d9\u05ea',
            vocalization: '\u05e6\u05e0\u05d5\u05e0\u05d9\u05ea',
            translation: '\u0420\u0435\u0434\u0438\u0441\u043a\u0430',
            transcription: '\u0446\u043d\u043e\u043d\u0418\u0442',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05e1\u05dc\u05d8',
            vocalization: '\u05e1\u05dc\u05d8',
            translation: '\u0421\u0430\u043b\u0430\u0442',
            transcription: '\u0441\u0430\u043b\u0410\u0442',
            ruTopic: '\u0415\u0434\u0430',
            enTopic: 'Food',
          },
          {
            word: '\u05d0\u05e4\u05e1',
            vocalization: '\u05d0\u05b6\u05e4\u05b6\u05e1',
            translation: '\u041d\u043e\u043b\u044c',
            transcription: '\u042d\u0444\u0435\u0441',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05d0\u05d7\u05ea',
            vocalization: '\u05d0\u05b7\u05d7\u05b7\u05ea',
            translation: '\u041e\u0434\u0438\u043d',
            transcription: '\u0430\u0445\u0410\u0442',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05e9\u05de\u05d9\u05d9\u05dd',
            vocalization:
              '\u05e9\u05c1\u05b0\u05ea\u05bc\u05b7\u05d9\u05b4\u05d9\u05dd',
            translation: '\u0414\u0432\u0430',
            transcription: '\u0448\u0442\u0410\u0439\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05e9\u05dc\u05d5\u05e9',
            vocalization: '\u05e9\u05c1\u05b8\u05dc\u05d5\u05b9\u05e9\u05c1',
            translation: '\u0422\u0440\u0438',
            transcription: '\u0448\u0430\u043b\u041e\u0448',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05d0\u05e8\u05d1\u05e2',
            vocalization: '\u05d0\u05b7\u05e8\u05b0\u05d1\u05bc\u05b7\u05e2',
            translation: '\u0427\u0435\u0442\u044b\u0440\u0435',
            transcription: '\u0430\u0440\u0431\u0410',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05d7\u05de\u05e9',
            vocalization: '\u05d7\u05b8\u05de\u05b5\u05e9\u05c1',
            translation: '\u041f\u044f\u0442\u044c',
            transcription: '\u0445\u0430\u043c\u042d\u0448',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05e9\u05e9',
            vocalization: '\u05e9\u05c1\u05b5\u05e9\u05c1',
            translation: '\u0428\u0435\u0441\u0442\u044c',
            transcription: '\u0448\u0435\u0448',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05e9\u05d1\u05e2',
            vocalization: '\u05e9\u05c1\u05b6\u05d1\u05b7\u05e2',
            translation: '\u0421\u0435\u043c\u044c',
            transcription: '\u0448\u044d\u0432\u0410',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05e9\u05de\u05d5\u05e0\u05d4',
            vocalization:
              '\u05e9\u05c1\u05b0\u05de\u05d5\u05b9\u05e0\u05b6\u05d4',
            translation: '\u0412\u043e\u0441\u0435\u043c\u044c',
            transcription: '\u0448\u043c\u043e\u043d\u0438',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05ea\u05e9\u05e2',
            vocalization: '\u05ea\u05bc\u05b5\u05e9\u05c1\u05b7\u05e2',
            translation: '\u0414\u0435\u0432\u044f\u0442\u044c',
            transcription: '\u0442\u044d\u0448\u0410',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05e2\u05e9\u05e8',
            vocalization: '\u05e2\u05b6\u05e9\u05c2\u05b6\u05e8',
            translation: '\u0414\u0435\u0441\u044f\u0442\u044c',
            transcription: '\u042d\u0441\u0440\u044d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
          },
          {
            word: '\u05d0\u05e4\u05e1',
            vocalization: '\u05d0\u05e4\u05e1',
            translation: '\u041d\u043e\u043b\u044c',
            transcription: '\u042d\u0444\u044d\u0441',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 0,
          },
          {
            word: '\u05d0\u05d7\u05ea',
            vocalization: '\u05d0\u05d7\u05ea',
            translation: '\u041e\u0434\u0438\u043d',
            transcription: '\u0430\u0445\u0410\u0442',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 1,
          },
          {
            word: '\u05e9\u05de\u05d9\u05d9\u05dd',
            vocalization: '\u05e9\u05ea\u05d9\u05d9\u05dd',
            translation: '\u0414\u0432\u0430',
            transcription: '\u0448\u0442\u0410\u0439\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 2,
          },
          {
            word: '\u05e9\u05dc\u05d5\u05e9',
            vocalization: '\u05e9\u05dc\u05d5\u05e9',
            translation: '\u0422\u0440\u0438',
            transcription: '\u0448\u0430\u043b\u041e\u0448',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 3,
          },
          {
            word: '\u05d0\u05e8\u05d1\u05e2',
            vocalization: '\u05d0\u05e8\u05d1\u05e2',
            translation: '\u0427\u0435\u0442\u044b\u0440\u0435',
            transcription: '\u0430\u0440\u0431\u0410',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 4,
          },
          {
            word: '\u05d7\u05de\u05e9',
            vocalization: '\u05d7\u05de\u05e9',
            translation: '\u041f\u044f\u0442\u044c',
            transcription: '\u0445\u0430\u043c\u042d\u0448',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 5,
          },
          {
            word: '\u05e9\u05e9',
            vocalization: '\u05e9\u05e9',
            translation: '\u0428\u0435\u0441\u0442\u044c',
            transcription: '\u0448\u0435\u0448',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 6,
          },
          {
            word: '\u05e9\u05d1\u05e2',
            vocalization: '\u05e9\u05d1\u05e2',
            translation: '\u0421\u0435\u043c\u044c',
            transcription: '\u0448\u044d\u0432\u0410',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 7,
          },
          {
            word: '\u05e9\u05de\u05d5\u05e0\u05d4',
            vocalization: '\u05e9\u05de\u05d5\u05e0\u05d4',
            translation: '\u0412\u043e\u0441\u0435\u043c\u044c',
            transcription: '\u0448\u043c\u043e\u043d\u0438',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 8,
          },
          {
            word: '\u05ea\u05e9\u05e2',
            vocalization: '\u05ea\u05e9\u05e2',
            translation: '\u0414\u0435\u0432\u044f\u0442\u044c',
            transcription: '\u0442\u044d\u0448\u0410',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 9,
          },
          {
            word: '\u05e2\u05e9\u05e8',
            vocalization: '\u05e2\u05e9\u05e8',
            translation: '\u0414\u0435\u0441\u044f\u0442\u044c',
            transcription: '\u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 10,
          },
          {
            word: '\u05d0\u05d7\u05ea \u05e2\u05e9\u05e8\u05d4',
            vocalization:
              '\u05d0\u05b7\u05d7\u05b7\u05ea \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u041e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0430\u0445\u0410\u0442 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 11,
          },
          {
            word: '\u05e9\u05ea\u05d9\u05d9\u05dd \u05e2\u05e9\u05e8\u05d4',
            vocalization:
              '\u05e9\u05c1\u05b0\u05ea\u05b5\u05d9\u05d9\u05dd \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0414\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription:
              '\u0448\u0442\u044d\u0439\u043c \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 12,
          },
          {
            word: '\u05e9\u05dc\u05d5\u05e9 \u05e2\u05e9\u05e8\u05d4',
            vocalization:
              '\u05e9\u05c1\u05b0\u05dc\u05d5\u05b9\u05e9\u05c1 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0422\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0448\u043b\u043e\u0448 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 13,
          },
          {
            word: '\u05d0\u05e8\u05d1\u05e2 \u05e2\u05e9\u05e8\u05d4',
            vocalization:
              '\u05d0\u05b7\u05e8\u05b0\u05d1\u05bc\u05b7\u05e2 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0427\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0430\u0440\u0431\u0410 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 14,
          },
          {
            word: '\u05d7\u05de\u05e9 \u05e2\u05e9\u05d3\u05d4',
            vocalization:
              '\u05d7\u05b2\u05de\u05b5\u05e9\u05c1 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u041f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription:
              '\u0445\u0430\u043c\u042d\u0448 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 15,
          },
          {
            word: '\u05e9\u05e9 \u05e2\u05e9\u05d3\u05d4',
            vocalization:
              '\u05e9\u05c1\u05b5\u05e9\u05c1 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0428\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0448\u0435\u0448 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 16,
          },
          {
            word: '\u05e9\u05d1\u05e2 \u05e2\u05e9\u05d3\u05d4',
            vocalization:
              '\u05e9\u05c1\u05b0\u05d1\u05b7\u05e2 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0421\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0448\u0432\u0430 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 17,
          },
          {
            word: '\u05e9\u05de\u05d5\u05e0\u05d4 \u05e2\u05e9\u05d3\u05d4',
            vocalization:
              '\u05e9\u05c1\u05b0\u05de\u05d5\u05b9\u05e0\u05b6\u05d4 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0412\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription:
              '\u0448\u043c\u043e\u043d\u042d \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 18,
          },
          {
            word: '\u05ea\u05e9\u05e2 \u05e2\u05e9\u05e8\u05d4',
            vocalization:
              '\u05ea\u05bc\u05b0\u05e9\u05c1\u05b7\u05e2 \u05e2\u05b6\u05e9\u05c2\u05e8\u05b5\u05d4',
            translation:
              '\u0414\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0442\u0448\u0430 \u044d\u0441\u0440\u042d',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 19,
          },
          {
            word: '\u05e2\u05e9\u05e8\u05d9\u05dd',
            vocalization:
              '\u05e2\u05b6\u05e9\u05c2\u05b0\u05e8\u05b4\u05d9\u05dd',
            translation: '\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u044d\u0441\u0440\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 20,
          },
          {
            word: '\u05e9\u05dc\u05d5\u05e9\u05d9\u05dd',
            vocalization:
              '\u05e9\u05c1\u05dc\u05d5\u05b9\u05e9\u05b4\u05d9\u05dd',
            translation: '\u0422\u0440\u0438\u0434\u0446\u0430\u0442\u044c',
            transcription: '\u0448\u043b\u043e\u0448\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 30,
          },
          {
            word: '\u05d0\u05e8\u05d1\u05e2\u05d9\u05dd',
            vocalization:
              '\u05d0\u05b7\u05e8\u05b0\u05d1\u05bc\u05b8\u05e2\u05b4\u05d9\u05dd',
            translation: '\u0421\u043e\u0440\u043e\u043a',
            transcription: '\u0430\u0440\u0431\u0430\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 40,
          },
          {
            word: '\u05d7\u05de\u05d9\u05e9\u05d9\u05dd',
            vocalization:
              '\u05d7\u05b2\u05de\u05b4\u05d9\u05e9\u05c1\u05b4\u05d9\u05dd',
            translation:
              '\u041f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442',
            transcription: '\u0445\u0430\u043c\u0438\u0448\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 50,
          },
          {
            word: '\u05e9\u05e9\u05d9\u05dd',
            vocalization: '\u05e9\u05c1\u05b4\u05e9\u05c1\u05b4\u05d9\u05dd',
            translation:
              '\u0428\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442',
            transcription: '\u0448\u0438\u0448\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 60,
          },
          {
            word: '\u05e9\u05d1\u05e2\u05d9\u05dd',
            vocalization:
              '\u05e9\u05c1\u05b4\u05d1\u05b0\u05e2\u05b4\u05d9\u05dd',
            translation:
              '\u0421\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442',
            transcription: '\u0448\u0438\u0432\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 70,
          },
          {
            word: '\u05e9\u05de\u05d5\u05e0\u05d9\u05dd',
            vocalization:
              '\u05e9\u05c1\u05b0\u05de\u05d5\u05b9\u05e0\u05b4\u05d9\u05dd',
            translation:
              '\u0412\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442',
            transcription: '\u0448\u043c\u043e\u043d\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 80,
          },
          {
            word: '\u05de\u05e9\u05e2\u05d9\u05dd',
            vocalization:
              '\u05ea\u05bc\u05b4\u05e9\u05c1\u05b0\u05e2\u05d9\u05dd',
            translation:
              '\u0414\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e',
            transcription: '\u0442\u0438\u0448\u0418\u043c',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 90,
          },
          {
            word: '\u05de\u05d0\u05d4',
            vocalization: '\u05de\u05d0\u05d4',
            translation: '\u0421\u0442\u043e',
            transcription: '\u043c\u042d\u0430',
            ruTopic: ['\u0427\u0438\u0441\u043b\u0430'],
            enTopic: ['Numbers'],
            num: 100,
          },
          {
            word: '\u05d7\u05ea\u05d5\u05dc',
            vocalization: '\u05d7\u05ea\u05d5\u05dc',
            translation: '\u041a\u043e\u0442',
            transcription: '\u0445\u0430\u0442\u0423\u043b\u044c',
            ruTopic: ['\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435'],
            enTopic: ['Animals'],
          },
          {
            word: '\u05d7\u05de\u05d5\u05e8',
            vocalization: '\u05d7\u05de\u05d5\u05e8',
            translation: '\u041e\u0441\u0435\u043b',
            transcription: '\u0445\u0430\u043c\u041e\u0440',
            ruTopic: ['\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435'],
            enTopic: ['Animals'],
          },
          {
            word: '\u05db\u05dc\u05d1',
            vocalization: '\u05db\u05dc\u05d1',
            translation: '\u0421\u043e\u0431\u0430\u043a\u0430',
            transcription: '\u043a\u042d\u043b\u044d\u0432',
            ruTopic: ['\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435'],
            enTopic: ['Animals'],
          },
          {
            word: '\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc',
            vocalization:
              '\u05ea\u05bc\u05b7\u05e8\u05b0\u05e0\u05b0\u05d2\u05d5\u05b9\u05dc',
            translation: '\u041f\u0435\u0442\u0443\u0445',
            transcription:
              '\u0442\u0430\u0440\u043d\u0435\u0433\u041e\u043b\u044c',
            ruTopic: ['\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435'],
            enTopic: ['Animals'],
          },
          {
            word: '\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05ea',
            vocalization: '\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05ea',
            translation: '\u041a\u0443\u0440\u0438\u0446\u0430',
            transcription:
              '\u0442\u0430\u0440\u043d\u0435\u0433\u041e\u043b\u0435\u0442',
            ruTopic: ['\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435'],
            enTopic: ['Animals'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df',
            vocalization: '\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df',
            translation:
              '\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 (\u0434\u0435\u043d\u044c \u043f\u0435\u0440\u0432\u044b\u0439)',
            transcription: '\u0439\u043e\u043c \u0440\u0438\u0448\u041e\u043d',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9',
            vocalization: '\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9',
            translation:
              '\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a (\u0434\u0435\u043d\u044c \u0432\u0442\u043e\u0440\u043e\u0439)',
            transcription: '\u0439\u043e\u043c \u0448\u044d\u043d\u0418',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9',
            vocalization: '\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9',
            translation:
              '\u0412\u0442\u043e\u0440\u043d\u0438\u043a (\u0434\u0435\u043d\u044c \u0442\u0440\u0435\u0442\u0438\u0439)',
            transcription: '\u0439\u043e\u043c \u0448\u043b\u0438\u0448\u0418',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9',
            vocalization: '\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9',
            translation:
              '\u0421\u0440\u0435\u0434\u0430 (\u0434\u0435\u043d\u044c \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439)',
            transcription: '\u0439\u043e\u043c \u0440\u044d\u0432\u0438\u0438',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9',
            vocalization: '\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9',
            translation:
              '\u0427\u0435\u0442\u0432\u0435\u0440\u0433 (\u0434\u0435\u043d\u044c \u043f\u044f\u0442\u044b\u0439)',
            transcription:
              '\u0439\u043e\u043c \u0445\u0430\u043c\u0438\u0448\u0438',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9',
            vocalization: '\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9',
            translation:
              '\u041f\u044f\u0442\u043d\u0438\u0446\u0430 (\u0434\u0435\u043d\u044c \u0448\u0435\u0441\u0442\u043e\u0439)',
            transcription: '\u0439\u043e\u043c \u0448\u0438\u0448\u0418',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05e9\u05d1\u05ea',
            vocalization: '\u05e9\u05d1\u05ea',
            translation:
              '\u0421\u0443\u0431\u0431\u043e\u0442\u0430/\u0448\u0430\u0431\u0431\u0430\u0442',
            transcription: '\u0448\u0430\u0431\u0431\u0410\u0442',
            ruTopic: [
              '\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438',
            ],
            enTopic: ['Days of Week'],
          },
          {
            word: '\u05d0\u05e0\u05d9',
            vocalization: '\u05d0\u05e0\u05d9',
            translation: '\u042f',
            transcription: '\u0430\u043d\u0418',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d0\u05ea',
            vocalization: '\u05d0\u05de',
            translation: '\u0422\u044b (\u0436.\u0440.)',
            transcription: '\u0430\u0442',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d0\u05de\u05d4',
            vocalization: '\u05d0\u05ea\u05d4',
            translation: '\u0422\u044b (\u043c.\u0440.)',
            transcription: '\u0430\u0442\u0410',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d4\u05d5\u05d0',
            vocalization: '\u05d4\u05d5\u05d0',
            translation: '\u041e\u043d',
            transcription: '(\u0445)\u0443',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d4\u05d9\u05d0',
            vocalization: '\u05d4\u05d9\u05d0',
            translation: '\u041e\u043d\u0430',
            transcription: '(\u0445)\u0438',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d0\u05e0\u05d7\u05e0\u05d5',
            vocalization: '\u05d0\u05e0\u05d7\u05e0\u05d5',
            translation: '\u041c\u044b',
            transcription: '\u0430\u043d\u0410\u0445\u043d\u0443',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d4\u05df',
            vocalization: '\u05d4\u05df',
            translation: '\u041e\u043d\u0438 (\u0436.\u0440)',
            transcription: '(\u0445)\u042d\u043d',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d4\u05dd',
            vocalization: '\u05d4\u05dd',
            translation: '\u041e\u043d\u0438 (\u043c.\u0440.)',
            transcription: '(\u0445)\u042d\u043c',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d0\u05ea\u05df',
            vocalization: '\u05d0\u05ea\u05df',
            translation: '\u0412\u044b (\u0436.\u0440.)',
            transcription: '\u0430\u0442\u042d\u043d',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d0\u05de\u05dd',
            vocalization: '\u05d0\u05de\u05dd',
            translation: '\u0412\u044b (\u043c.\u0440.)',
            transcription: '\u0430\u0442\u042d\u043c',
            ruTopic: [
              '\u041c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f',
            ],
            enTopic: ['Pronouns'],
          },
          {
            word: '\u05d8\u05d5\u05d1',
            vocalization: '\u05d8\u05d5\u05d1',
            translation: '\u0425\u043e\u0440\u043e\u0448\u0438\u0439',
            transcription: '\u0442\u043e\u0432',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d6\u05d5\u05dc',
            vocalization: '\u05d6\u05d5\u05dc',
            translation: '\u0414\u0435\u0448\u0435\u0432\u044b\u0439',
            transcription: '\u0437\u043e\u043b',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e7\u05d8\u05df',
            vocalization: '\u05e7\u05d8\u05df',
            translation:
              '\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439',
            transcription: '\u043a\u0430\u0442\u0410\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d9\u05e7\u05e8',
            vocalization: '\u05d9\u05e7\u05e8',
            translation:
              '\u0414\u043e\u0440\u043e\u0433\u043e\u0439 (\u0434\u0435\u043d\u0435\u0436\u043d\u043e)',
            transcription: '\u0439\u0430\u043a\u0410\u0440',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d2\u05d3\u05d5\u05dc',
            vocalization: '\u05d2\u05d3\u05d5\u05dc',
            translation: '\u0411\u043e\u043b\u044c\u0448\u043e\u0439',
            transcription: '\u0433\u0430\u0434\u041e\u043b\u044c',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d9\u05e4\u05d4',
            vocalization: '\u05d9\u05e4\u05d4',
            translation: '\u041a\u0440\u0430\u0441\u0438\u0432\u044b\u0439',
            transcription: '\u0439\u0430\u0444\u042d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d7\u05e9\u05d5\u05d1',
            vocalization: '\u05d7\u05e9\u05d5\u05d1',
            translation: '\u0412\u0430\u0436\u043d\u044b\u0439',
            transcription: '\u0445\u0430\u0448\u0423\u0432',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05de\u05e2\u05e0\u05d9\u05d9\u05df',
            vocalization: '\u05de\u05e2\u05e0\u05d9\u05d9\u05df',
            translation:
              '\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439',
            transcription: '\u043c\u044d\u0430\u043d\u044c\u0415\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e0\u05d7\u05de\u05d3',
            vocalization: '\u05e0\u05d7\u05de\u05d3',
            translation: '\u041c\u0438\u043b\u044b\u0439',
            transcription: '\u043d\u044d\u0445\u043c\u0410\u0434',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e7\u05e6\u05e8',
            vocalization: '\u05e7\u05e6\u05e8',
            translation: '\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439',
            transcription: '\u043a\u0430\u0446\u0410\u0440',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d0\u05e8\u05d5\u05da',
            vocalization: '\u05d0\u05e8\u05d5\u05da',
            translation: '\u0414\u043b\u0438\u043d\u043d\u044b\u0439',
            transcription: '\u0430\u0440\u041e\u0445',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e7\u05dc',
            vocalization: '\u05e7\u05dc',
            translation: '\u041b\u0435\u0433\u043a\u0438\u0439',
            transcription: '\u043a\u0430\u043b\u044c',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05de\u05e4\u05d5\u05e8\u05e1\u05dd',
            vocalization: '\u05de\u05e4\u05d5\u05e8\u05e1\u05dd',
            translation:
              '\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439',
            transcription: '\u043c\u044d\u0444\u0443\u0440\u0441\u0410\u043c',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e7\u05e9\u05d4',
            vocalization: '\u05e7\u05e9\u05d4',
            translation: '\u0422\u0440\u0443\u0434\u043d\u044b\u0439',
            transcription: '\u043a\u0430\u0448\u042d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d7\u05d3\u05e9',
            vocalization: '\u05d7\u05d3\u05e9',
            translation: '\u041d\u043e\u0432\u044b\u0439',
            transcription: '\u0445\u0430\u0434\u0410\u0448',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e0\u05d5\u05d7',
            vocalization: '\u05e0\u05d5\u05b9\u05d7\u05b7',
            translation: '\u0423\u0434\u043e\u0431\u043d\u044b\u0439',
            transcription: '\u043d\u041e\u0430\u0445',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d7\u05d5\u05dc\u05d4',
            vocalization: '\u05d7\u05d5\u05b9\u05dc\u05b6\u05d4',
            translation: '\u0411\u043e\u043b\u044c\u043d\u043e\u0439',
            transcription: '\u0445\u043e\u043b\u042d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d7\u05db\u05dd',
            vocalization: '\u05d7\u05db\u05dd',
            translation: '\u0423\u043c\u043d\u044b\u0439',
            transcription: '\u0445\u0430\u0445\u0410\u043c',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e6\u05d5\u05d3\u05e7',
            vocalization: '\u05e6\u05d5\u05d3\u05e7',
            translation:
              '\u041f\u0440\u0430\u0432\u044b\u0439 (\u043f\u0440\u0430\u0432)',
            transcription: '\u0446\u043e\u0434\u042d\u043a',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e0\u05db\u05d5\u05df',
            vocalization: '\u05e0\u05db\u05d5\u05df',
            translation:
              '\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439',
            transcription: '\u043d\u0430\u0445\u041e\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05de\u05e6\u05d5\u05d9\u05df',
            vocalization: '\u05de\u05e6\u05d5\u05d9\u05df',
            translation: '\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439',
            transcription: '\u043c\u044d\u0446\u0443\u042f\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e9\u05db\u05d5\u05e8\u05d4',
            vocalization: '\u05e9\u05db\u05d5\u05e8\u05d4',
            translation: '\u0421\u044a\u0435\u043c\u043d\u0430\u044f',
            transcription: '\u0441\u0445\u0443\u0440\u0410',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e2\u05e9\u05d9\u05e8',
            vocalization: '\u05e2\u05e9\u05d9\u05e8',
            translation: '\u0411\u043e\u0433\u0430\u0442\u044b\u0439',
            transcription: '\u0430\u0448\u0418\u0440',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d2\u05e8\u05d5\u05e9',
            vocalization: '\u05d2\u05e8\u05d5\u05e9',
            translation:
              '\u0420\u0430\u0437\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439',
            transcription: '\u0433\u0430\u0440\u0423\u0448',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e8\u05d5\u05d5\u05e7',
            vocalization: '\u05e8\u05d5\u05d5\u05e7',
            translation: '\u0425\u043e\u043b\u043e\u0441\u0442\u043e\u0439',
            transcription: '\u0440\u0430\u0432\u0410\u043a',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e0\u05e9\u05d5\u05d9',
            vocalization: '\u05e0\u05e9\u05d5\u05d9',
            translation:
              '\u0421\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0432 \u0431\u0440\u0430\u043a\u0435',
            transcription: '\u043d\u0430\u0441\u0423\u0439',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e7\u05e8',
            vocalization: '\u05e7\u05e8',
            translation: '\u0425\u043e\u043b\u043e\u0434\u043d\u044b\u0439',
            transcription: '\u043a\u0410\u0440',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d7\u05dd',
            vocalization: '\u05d7\u05dd',
            translation: '\u0413\u043e\u0440\u044f\u0447\u0438\u0439',
            transcription: '\u0445\u0410\u043c',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d9\u05e9\u05df',
            vocalization: '\u05d9\u05b8\u05e9\u05c1\u05b8\u05df',
            translation:
              '\u0421\u0442\u0430\u0440\u044b\u0439 (\u043d\u0435 \u043d\u043e\u0432\u044b\u0439)',
            transcription: '\u044f\u0448\u0410\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d6\u05e7\u05df',
            vocalization: '\u05d6\u05e7\u05df',
            translation: '\u0421\u0442\u0430\u0440\u044b\u0439',
            transcription: '\u0437\u0430\u043a\u042d\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05e6\u05e2\u05d9\u05e8',
            vocalization: '\u05e6\u05e2\u05d9\u05e8',
            translation: '\u041c\u043e\u043b\u043e\u0434\u043e\u0439',
            transcription: '\u0446\u0430\u0418\u0440',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d5\u05ea\u05d9\u05e7',
            vocalization: '\u05d5\u05ea\u05d9\u05e7',
            translation: '\u0421\u043e \u0441\u0442\u0430\u0436\u0435\u043c',
            transcription: '\u0432\u0430\u0442\u0418\u043a',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d3\u05ea\u05d9',
            vocalization: '\u05d3\u05ea\u05d9',
            translation:
              '\u0420\u0435\u043b\u0438\u0433\u0438\u043e\u0437\u043d\u044b\u0439',
            transcription: '\u0434\u0430\u0442\u0418',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05d8\u05e8\u05d9',
            vocalization: '\u05d8\u05e8\u05d9',
            translation: '\u0421\u0432\u0435\u0436\u0438\u0439',
            transcription: '\u0442\u0430\u0440\u0418',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
            ],
            enTopic: ['Adjectives'],
          },
          {
            word: '\u05dc\u05d1\u05df',
            vocalization: '\u05dc\u05d1\u05df',
            translation: '\u0411\u0435\u043b\u044b\u0439',
            transcription: '\u043b\u0430\u0431\u0410\u043d',
            ruTopic: [
              '\u041f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435',
              '\u0426\u0432\u0435\u0442\u0430',
            ],
            enTopic: ['Adjectives', 'Colors'],
          },
          {
            word: '\u05dc\u05d5\u05b9\u05de\u05b5\u05d3',
            vocalization: '\u05dc\u05d5\u05b9\u05de\u05b5\u05d3',
            translation: '(\u043e\u043d) \u0443\u0447\u0438\u0442\u0441\u044f',
            enTranslation: 'learn',
            transcription: '\u043b\u043e\u043c\u042d\u0434',
            infinitive: {
              word: '\u05dc\u05dc\u05de\u05d5\u05d3',
              vocalization: '\u05dc\u05dc\u05de\u05d5\u05d3',
              translation: '\u0423\u0447\u0438\u0442\u044c\u0441\u044f',
              transcription: '\u043b\u0438\u043b\u044c\u043c\u041e\u0434',
            },
            present: [
              {
                word: '\u05dc\u05d5\u05de\u05d3',
                vocalization: '\u05dc\u05d5\u05b9\u05de\u05b5\u05d3',
                translation: '\u0443\u0447\u0438\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0415\u0434',
              },
              {
                word: '\u05dc\u05d5\u05de\u05d3\u05ea',
                vocalization: '\u05dc\u05d5\u05de\u05d3\u05ea',
                translation: '\u0443\u0447\u0438\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0415\u0434\u0435\u0442',
              },
              {
                word: '\u05dc\u05d5\u05de\u05d3\u05d9\u05dd',
                vocalization: '\u05dc\u05d5\u05de\u05d3\u05d9\u05dd',
                translation: '\u0443\u0447\u0430\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0434\u0418\u043c',
              },
              {
                word: '\u05dc\u05d5\u05de\u05d3\u05d5\u05ea',
                vocalization: '\u05dc\u05d5\u05de\u05d3\u05d5\u05ea',
                translation: '\u0443\u0447\u0430\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0434\u041e\u0442',
              },
            ],
            ruTopic: [
              '\u0423\u0447\u0435\u0431\u0430',
              '\u0413\u043b\u0430\u0433\u043e\u043b\u044b',
            ],
            enTopic: ['Study', 'Verbs'],
          },
          {
            word: '\u05e2\u05d5\u05d1\u05d3',
            vocalization: '\u05e2\u05d5\u05b9\u05d1\u05b5\u05d3',
            translation:
              '(\u043e\u043d) \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
            enTranslation: 'work',
            transcription: '\u043e\u0432\u042d\u0434',
            infinitive: {
              word: '\u05dc\u05e2\u05d1\u05d5\u05d3',
              vocalization: '\u05dc\u05e2\u05d1\u05d5\u05d3',
              translation: '\u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0430\u0432\u041e\u0434',
            },
            present: [
              {
                word: '\u05e2\u05d5\u05d1\u05d3',
                vocalization: '\u05e2\u05d5\u05b9\u05d1\u05b5\u05d3',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
                transcription: '\u043e\u0432\u042d\u0434',
              },
              {
                word: '\u05e2\u05d5\u05d1\u05d3\u05ea',
                vocalization: '\u05e2\u05d5\u05d1\u05d3\u05ea',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
                transcription: '\u043e\u0432\u042d\u0434\u044d\u0442',
              },
              {
                word: '\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd',
                vocalization: '\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442',
                transcription: '\u043e\u0432\u0434\u0418\u043c',
              },
              {
                word: '\u05e2\u05d5\u05d1\u05d3\u05d5\u05ea',
                vocalization: '\u05e2\u05d5\u05d1\u05d3\u05d5\u05ea',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442',
                transcription: '\u043e\u0432\u0434\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d2\u05e8',
            vocalization: '\u05d2\u05e8',
            translation: '(\u043e\u043d) \u0436\u0438\u0432\u0435\u0442',
            enTranslation: 'live',
            transcription: '\u0433\u0410\u0440',
            infinitive: {
              word: '\u05dc\u05d2\u05d5\u05e8',
              vocalization: '\u05dc\u05d2\u05d5\u05e8',
              translation: '\u0416\u0438\u0442\u044c',
              transcription: '\u043b\u0430\u0433\u0423\u0440',
            },
            present: [
              {
                word: '\u05d2\u05e8',
                vocalization: '\u05d2\u05e8',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0433\u0410\u0440',
              },
              {
                word: '\u05d2\u05e8\u05d4',
                vocalization: '\u05d2\u05e8\u05d4',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '',
              },
              {
                word: '\u05d2\u05e8\u05d9\u05dd',
                vocalization: '\u05d2\u05e8\u05d9\u05dd',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0433\u0430\u0440\u0418\u043c',
              },
              {
                word: '\u05d2\u05e8\u05d5\u05ea',
                vocalization: '\u05d2\u05e8\u05d5\u05ea',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0433\u0430\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d3\u05d1\u05e8',
            vocalization: '\u05de\u05d3\u05d1\u05e8',
            translation:
              '(\u043e\u043d) \u0433\u043e\u0432\u043e\u0440\u0438\u0442',
            enTranslation: 'say',
            transcription: '\u043c\u0435\u0434\u0430\u0431\u042d\u0440',
            infinitive: {
              word: '\u05dc\u05d3\u05d1\u05e8',
              vocalization: '\u05dc\u05d3\u05d1\u05e8',
              translation: '\u0413\u043e\u0432\u043e\u0440\u0438\u0442\u044c',
              transcription: '\u043b\u0435\u0434\u0430\u0431\u0415\u0440',
            },
            present: [
              {
                word: '\u05de\u05d3\u05d1\u05e8',
                vocalization: '\u05de\u05d3\u05d1\u05e8',
                translation: '\u0433\u043e\u0432\u043e\u0440\u0438\u0442',
                transcription: '\u043c\u0435\u0434\u0430\u0431\u042d\u0440',
              },
              {
                word: '\u05de\u05d3\u05d1\u05e8\u05ea',
                vocalization: '\u05de\u05d3\u05d1\u05e8\u05ea',
                translation: '\u0433\u043e\u0432\u043e\u0440\u0438\u0442',
                transcription:
                  '\u043c\u0435\u0434\u0430\u0431\u0415\u0440\u0435\u0442',
              },
              {
                word: '\u05de\u05d3\u05d1\u05e8\u05d9\u05dd',
                vocalization: '\u05de\u05d3\u05d1\u05e8\u05d9\u05dd',
                translation: '\u0433\u043e\u0432\u043e\u0440\u044f\u0442',
                transcription:
                  '\u043c\u0435\u0434\u0430\u0431\u0440\u0418\u043c',
              },
              {
                word: '\u05de\u05d3\u05d1\u05e8\u05d5\u05ea',
                vocalization: '\u05de\u05d3\u05d1\u05e8\u05d5\u05ea',
                translation: '\u0433\u043e\u0432\u043e\u0440\u044f\u0442',
                transcription:
                  '\u043c\u0435\u0434\u0430\u0431\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e6\u05d8\u05e2\u05e8',
            vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8',
            translation:
              '(\u043e\u043d) \u043e\u0433\u043e\u0440\u0447\u0430\u0435\u0442\u0441\u044f',
            enTranslation: 'upset',
            transcription: '\u043c\u0438\u0446\u0442\u0430\u042d\u0440',
            infinitive: {
              word: '\u05dc\u05d4\u05e6\u05d8\u05e2\u05e8',
              vocalization: '\u05dc\u05d4\u05e6\u05d8\u05e2\u05e8',
              translation:
                '\u041e\u0433\u043e\u0440\u0447\u0430\u0442\u044c\u0441\u044f',
              transcription:
                '\u043b\u0435h\u0438\u0446\u0442\u0430\u042d\u0440',
            },
            present: [
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u0435\u0442\u0441\u044f',
                transcription: '\u043c\u0438\u0446\u0442\u0430\u042d\u0440',
              },
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8\u05ea',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8\u05ea',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u0435\u0442\u0441\u044f',
                transcription:
                  '\u043c\u0438\u0446\u0442\u0430\u042d\u0440\u044d\u0442',
              },
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u044e\u0442\u0441\u044f',
                transcription:
                  '\u043c\u0438\u0446\u0442\u0430\u044d\u0440\u0418\u043c',
              },
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d5\u05ea',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d5\u05ea',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u044e\u0442\u0441\u044f',
                transcription:
                  '\u043c\u0438\u0446\u0442\u0430\u044d\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d9\u05d5\u05d3\u05e2',
            vocalization: '\u05d9\u05d5\u05d3\u05e2',
            translation: '(\u043e\u043d) \u0437\u043d\u0430\u0435\u0442',
            enTranslation: 'know',
            transcription: '\u0439\u043e\u0434\u042d\u0430',
            infinitive: {
              word: '\u05dc\u05d3\u05e2\u05ea',
              vocalization: '\u05dc\u05d3\u05e2\u05ea',
              translation: '\u0417\u043d\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0434\u0430\u0410\u0442',
            },
            present: [
              {
                word: '\u05d9\u05d5\u05d3\u05e2',
                vocalization: '\u05d9\u05d5\u05d3\u05e2',
                translation: '\u0437\u043d\u0430\u0435\u0442',
                transcription: '\u0439\u043e\u0434\u042d\u0430',
              },
              {
                word: '\u05d9\u05d5\u05d3\u05e2\u05ea',
                vocalization: '\u05d9\u05d5\u05d3\u05e2\u05ea',
                translation: '\u0437\u043d\u0430\u0435\u0442',
                transcription: '\u0439\u043e\u0434\u0430\u0410\u0442',
              },
              {
                word: '\u05d9\u05d5\u05d3\u05e2\u05d9\u05dd',
                vocalization: '\u05d9\u05d5\u05d3\u05e2\u05d9\u05dd',
                translation: '\u0437\u043d\u0430\u044e\u0442',
                transcription: '\u0439\u043e\u0434\u0418\u043c',
              },
              {
                word: '\u05d9\u05d5\u05d3\u05e2\u05d5\u05ea',
                vocalization: '\u05d9\u05d5\u05d3\u05e2\u05d5\u05ea',
                translation: '\u0437\u043d\u0430\u044e\u0442',
                transcription: '\u0439\u043e\u0434\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d1\u05d9\u05df',
            vocalization: '\u05de\u05d1\u05d9\u05df',
            translation:
              '(\u043e\u043d) \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442',
            enTranslation: 'understand',
            transcription: '\u043c\u0435\u0432\u0418\u043d',
            infinitive: {
              word: '\u05dc\u05d4\u05d1\u05d9\u05df',
              vocalization: '\u05dc\u05d4\u05d1\u05d9\u05df',
              translation: '\u041f\u043e\u043d\u0438\u043c\u0430\u0442\u044c',
              transcription: '\u043b\u0435h\u0430\u0432\u0418\u043d',
            },
            present: [
              {
                word: '\u05de\u05d1\u05d9\u05df',
                vocalization: '\u05de\u05d1\u05d9\u05df',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442',
                transcription: '\u043c\u0435\u0432\u0418\u043d',
              },
              {
                word: '\u05de\u05d1\u05d9\u05e0\u05d4',
                vocalization: '\u05de\u05d1\u05d9\u05e0\u05d4',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442',
                transcription: '\u043c\u0435\u0432\u0438\u043d\u0410',
              },
              {
                word: '\u05de\u05d1\u05d9\u05e0\u05d9\u05dd',
                vocalization: '\u05de\u05d1\u05d9\u05e0\u05d9\u05dd',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442',
                transcription: '\u043c\u0435\u0432\u0438\u043d\u0418\u043c',
              },
              {
                word: '\u05de\u05d1\u05d9\u05e0\u05d5\u05ea',
                vocalization: '\u05de\u05d1\u05d9\u05e0\u05d5\u05ea',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442',
                transcription: '\u043c\u0435\u0432\u0438\u043d\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05db\u05d5\u05ea\u05d1',
            vocalization: '\u05db\u05d5\u05ea\u05d1',
            translation: '(\u043e\u043d) \u043f\u0438\u0448\u0435\u0442',
            enTranslation: 'write',
            transcription: '\u043a\u043e\u0442\u042d\u0432',
            infinitive: {
              word: '\u05dc\u05db\u05ea\u05d5\u05d1',
              vocalization: '\u05dc\u05db\u05ea\u05d5\u05d1',
              translation: '\u041f\u0438\u0441\u0430\u0442\u044c',
              transcription: '\u043b\u0438\u0445\u0442\u041e\u0432',
            },
            present: [
              {
                word: '\u05db\u05d5\u05ea\u05d1',
                vocalization: '\u05db\u05d5\u05ea\u05d1',
                translation: '\u043f\u0438\u0448\u0435\u0442',
                transcription: '\u043a\u043e\u0442\u042d\u0432',
              },
              {
                word: '\u05db\u05d5\u05ea\u05d1\u05ea',
                vocalization: '\u05db\u05d5\u05ea\u05d1\u05ea',
                translation: '\u043f\u0438\u0448\u0435\u0442',
                transcription: '\u043a\u043e\u0442\u042d\u0432\u0435\u0442',
              },
              {
                word: '\u05db\u05d5\u05ea\u05d1\u05d9\u05dd',
                vocalization: '\u05db\u05d5\u05ea\u05d1\u05d9\u05dd',
                translation: '\u043f\u0438\u0448\u0443\u0442',
                transcription: '\u043a\u043e\u0442\u0432\u0418\u043c',
              },
              {
                word: '\u05d1\u05d5\u05ea\u05d1\u05d5\u05ea',
                vocalization: '\u05d1\u05d5\u05ea\u05d1\u05d5\u05ea',
                translation: '\u043f\u0438\u0448\u0443\u0442',
                transcription: '\u043a\u043e\u0442\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e7\u05d5\u05e8\u05d0',
            vocalization: '\u05e7\u05d5\u05e8\u05d0',
            translation: '(\u043e\u043d) \u0447\u0438\u0442\u0430\u0435\u0442',
            enTranslation: 'read',
            transcription: '\u043a\u043e\u0440\u042d',
            infinitive: {
              word: '\u05dc\u05e7\u05e8\u05d5\u05d0',
              vocalization: '\u05dc\u05e7\u05e8\u05d5\u05d0',
              translation: '\u0427\u0438\u0442\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u043a\u0440\u041e\u0430',
            },
            present: [
              {
                word: '\u05e7\u05d5\u05e8\u05d0',
                vocalization: '\u05e7\u05d5\u05e8\u05d0',
                translation: '\u0447\u0438\u0442\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u0440\u042d',
              },
              {
                word: '\u05e7\u05d5\u05e8\u05d0\u05ea',
                vocalization: '\u05e7\u05d5\u05e8\u05d0\u05ea',
                translation: '\u0447\u0438\u0442\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u0440\u042d\u0442',
              },
              {
                word: '\u05e7\u05d5\u05e8\u05d0\u05d9\u05dd',
                vocalization: '\u05e7\u05d5\u05e8\u05d0\u05d9\u05dd',
                translation: '\u0447\u0438\u0442\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u0440\u044a\u0418\u043c',
              },
              {
                word: '\u05e7\u05d5\u05e8\u05d5\u05ea',
                vocalization: '\u05e7\u05d5\u05e8\u05d5\u05ea',
                translation: '\u0447\u0438\u0442\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u0440\u044a\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e0\u05de\u05e6\u05d0',
            vocalization: '\u05e0\u05b4\u05de\u05b0\u05e6\u05b8\u05d0',
            translation:
              '(\u043e\u043d) \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f',
            enTranslation: 'is',
            transcription: '\u043d\u0438\u043c\u0446\u0410',
            infinitive: {
              word: '\u05dc\u05d4\u05de\u05e6\u05d0',
              vocalization: '\u05dc\u05d4\u05de\u05e6\u05d0',
              translation:
                '\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f',
              transcription: '\u043b\u0435h\u0438\u043c\u0430\u0446\u0415',
            },
            present: [
              {
                word: '\u05e0\u05de\u05e6\u05d0',
                vocalization: '\u05e0\u05b4\u05de\u05b0\u05e6\u05b8\u05d0',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0410',
              },
              {
                word: '\u05e0\u05de\u05e6\u05d0\u05ea',
                vocalization: '\u05e0\u05de\u05e6\u05d0\u05ea',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0415\u0442',
              },
              {
                word: '\u05e0\u05de\u05e6\u05d0\u05d9\u05dd',
                vocalization: '\u05e0\u05de\u05e6\u05d0\u05d9\u05dd',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0430\u0418\u043c',
              },
              {
                word: '\u05e0\u05de\u05e6\u05d0\u05d5\u05ea',
                vocalization: '\u05e0\u05de\u05e6\u05d0\u05d5\u05ea',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0430\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d7\u05e1\u05e8',
            vocalization: '\u05d7\u05e1\u05e8',
            translation:
              '(\u043e\u043d) \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442',
            enTranslation: 'absent',
            transcription: '\u0445\u0430\u0441\u042d\u0440',
            infinitive: {
              word: '\u05dc\u05d7\u05e1\u05d5\u05e8',
              vocalization: '\u05dc\u05d7\u05e1\u05d5\u05e8',
              translation:
                '\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0445\u0441\u041e\u0440',
            },
            present: [
              {
                word: '\u05d7\u05e1\u05e8',
                vocalization: '\u05d7\u05e1\u05e8',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u0445\u0430\u0441\u042d\u0440',
              },
              {
                word: '\u05d7\u05e1\u05e8\u05d4',
                vocalization: '\u05d7\u05e1\u05e8\u05d4',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u0445\u0430\u0441\u0435\u0440\u0410',
              },
              {
                word: '\u05d7\u05e1\u05e8\u05d9\u05dd',
                vocalization: '\u05d7\u05e1\u05e8\u05d9\u05dd',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription: '\u0445\u0430\u0441\u0435\u0440\u0418\u043c',
              },
              {
                word: '\u05d7\u05e1\u05e8\u05d5\u05ea',
                vocalization: '\u05d7\u05e1\u05e8\u05d5\u05ea',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription: '\u0445\u0430\u0441\u0435\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d4\u05d5\u05dc\u05da',
            vocalization: '\u05d4\u05d5\u05dc\u05da',
            translation:
              '(\u043e\u043d) \u0438\u0434\u0435\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
            transcription: '\u043e\u043b\u042d\u0445',
            enTranslation: 'walk',
            infinitive: {
              word: '\u05dc\u05dc\u05db\u05ea',
              vocalization: '\u05dc\u05dc\u05db\u05ea',
              translation:
                '\u0418\u0434\u0442\u0438 \u043f\u0435\u0448\u043a\u043e\u043c',
              transcription: '',
            },
            present: [
              {
                word: '\u05d4\u05d5\u05dc\u05da',
                vocalization: '\u05d4\u05d5\u05dc\u05da',
                translation:
                  '\u0438\u0434\u0435\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u042d\u0445',
              },
              {
                word: '\u05d4\u05d5\u05dc\u05db\u05d4',
                vocalization: '\u05d4\u05d5\u05dc\u05db\u05d4',
                translation:
                  '\u0438\u0434\u0435\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u042d\u0445\u0435\u0442',
              },
              {
                word: '\u05d4\u05d5\u05da\u05db\u05d9\u05dd',
                vocalization: '\u05d4\u05d5\u05da\u05db\u05d9\u05dd',
                translation:
                  '\u0438\u0434\u0443\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u0445\u0418\u043c',
              },
              {
                word: '\u05d4\u05d5\u05dc\u05db\u05d5\u05ea',
                vocalization: '\u05d4\u05d5\u05dc\u05db\u05d5\u05ea',
                translation:
                  '\u0438\u0434\u0443\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u0445\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d1\u05d0',
            vocalization: '\u05d1\u05d0',
            translation:
              '(\u043e\u043d) \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442',
            enTranslation: 'come',
            transcription: '\u0431\u0410',
            infinitive: {
              word: '\u05dc\u05d1\u05d5\u05d0',
              vocalization: '\u05dc\u05d1\u05d5\u05d0',
              translation:
                '\u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c',
              transcription: '\u043b\u0430\u0432\u041e',
            },
            present: [
              {
                word: '\u05d1\u05d0',
                vocalization: '\u05d1\u05d0',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442',
                transcription: '\u0431\u0410',
              },
              {
                word: '\u05d1\u05d0\u05d4',
                vocalization: '\u05d1\u05d0\u05d4',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442',
                transcription: '\u0431\u0410\u0430',
              },
              {
                word: '\u05d1\u05d0\u05d9\u05dd',
                vocalization: '\u05d1\u05d0\u05d9\u05dd',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442',
                transcription: '\u0431\u0430\u0418\u043c',
              },
              {
                word: '\u05d1\u05d0\u05d5\u05ea',
                vocalization: '\u05d1\u05d0\u05d5\u05ea',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442',
                transcription: '\u0431\u0430\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e2\u05d5\u05e0\u05d4',
            vocalization: '\u05e2\u05d5\u05e0\u05d4',
            translation:
              '(\u043e\u043d) \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442',
            enTranslation: 'unswer',
            transcription: '\u043e\u043d\u042d',
            infinitive: {
              word: '\u05dc\u05e2\u05e0\u05d5\u05ea',
              vocalization: '\u05dc\u05e2\u05e0\u05d5\u05ea',
              translation: '\u041e\u0442\u0432\u0435\u0447\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0430\u043d\u041e\u0442',
            },
            present: [
              {
                word: '\u05e2\u05d5\u05e0\u05d4',
                vocalization: '\u05e2\u05d5\u05e0\u05d4',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442',
                transcription: '\u043e\u043d\u042d',
              },
              {
                word: '\u05e2\u05d5\u05e0\u05d4',
                vocalization: '\u05e2\u05d5\u05e0\u05d4',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442',
                transcription: '\u043e\u043d\u0410',
              },
              {
                word: '\u05e2\u05d5\u05e0\u05d9\u05dd',
                vocalization: '\u05e2\u05d5\u05e0\u05d9\u05dd',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442',
                transcription: '\u043e\u043d\u0418\u043c',
              },
              {
                word: '\u05e2\u05d5\u05e0\u05d5\u05ea',
                vocalization: '\u05e2\u05d5\u05e0\u05d5\u05ea',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442',
                transcription: '\u043e\u043d\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e7\u05e9\u05d9\u05d1',
            vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1',
            translation:
              '(\u043e\u043d) \u0441\u043b\u0443\u0448\u0430\u0435\u0442',
            enTranslation: 'listen',
            transcription: '\u043c\u0430\u043a\u0448\u0418\u0432',
            infinitive: {
              word: '\u05dc\u05d4\u05e7\u05e9\u05d9\u05d1',
              vocalization: '\u05dc\u05d4\u05e7\u05e9\u05d9\u05d1',
              translation: '\u0421\u043b\u0443\u0448\u0430\u0442\u044c',
              transcription: '\u043b\u0435h\u0430\u043a\u0448\u0438\u0432',
            },
            present: [
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1',
                translation: '\u0441\u043b\u0443\u0448\u0430\u0435\u0442',
                transcription: '\u043c\u0430\u043a\u0448\u0418\u0432',
              },
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d4',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d4',
                translation: '\u0441\u043b\u0443\u0448\u0430\u0435\u0442',
                transcription: '\u043c\u0430\u043a\u0448\u0438\u0432\u0410',
              },
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d9\u05dd',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d9\u05dd',
                translation: '\u0441\u043b\u0443\u0448\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0430\u043a\u0448\u0438\u0432\u0418\u043c',
              },
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d5\u05ea',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d5\u05ea',
                translation: '\u0441\u043b\u0443\u0448\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0430\u043a\u0448\u0438\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d8\u05d9\u05d9\u05dc',
            vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc',
            translation:
              '(\u043e\u043d) \u0433\u0443\u043b\u044f\u0435\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442',
            enTranslation: 'travel',
            transcription: '\u043c\u0438\u0442\u0430\u0439\u042d\u043b',
            infinitive: {
              word: '\u05dc\u05d8\u05d9\u05dc',
              vocalization: '\u05dc\u05d8\u05d9\u05dc',
              translation:
                '\u0413\u0443\u043b\u044f\u0442\u044c/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u0442\u0430\u0439\u0415\u043b\u044c',
            },
            present: [
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc',
                translation:
                  '\u0433\u0443\u043b\u044f\u0435\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u043c\u0438\u0442\u0430\u0439\u042d\u043b',
              },
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc\u05ea',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc\u05ea',
                translation:
                  '\u0433\u0443\u043b\u044f\u0435\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription:
                  '\u043c\u0438\u0442\u0430\u0439\u042d\u043b\u0435\u0442',
              },
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d9\u05dd',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d9\u05dd',
                translation:
                  '\u0433\u0443\u043b\u044f\u044e\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0438\u0442\u0430\u0439\u043b\u0418\u043c',
              },
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d5\u05ea',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d5\u05ea',
                translation:
                  '\u0433\u0443\u043b\u044f\u044e\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0438\u0442\u0430\u0439\u043b\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d8\u05e4\u05dc',
            vocalization: '\u05de\u05d8\u05e4\u05dc',
            translation:
              '(\u043e\u043d) \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442, \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u0441\u044f',
            enTranslation: 'care',
            transcription: '\u043c\u044d\u0442\u0430\u043f\u042d\u043b',
            infinitive: {
              word: '\u05dc\u05d8\u05e4\u05dc',
              vocalization: '\u05dc\u05d8\u05e4\u05dc',
              translation:
                '\u0423\u0445\u0430\u0436\u0438\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u0442\u0430\u043f\u0415\u043b\u044c',
            },
            present: [
              {
                word: '\u05de\u05d8\u05e4\u05dc',
                vocalization: '\u05de\u05d8\u05e4\u05dc',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442',
                transcription: '\u043c\u044d\u0442\u0430\u043f\u0415\u043b',
              },
              {
                word: '\u05de\u05d8\u05e4\u05dc\u05ea',
                vocalization: '\u05de\u05d8\u05e4\u05dc\u05ea',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442',
                transcription:
                  '\u043c\u0435\u0442\u0430\u043f\u0415\u043b\u0435\u0442',
              },
              {
                word: '\u05de\u05d8\u05e4\u05dc\u05d9\u05dd',
                vocalization: '\u05de\u05d8\u05e4\u05dc\u05d9\u05dd',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0442\u0430\u043f\u043b\u0418\u043c',
              },
              {
                word: '\u05de\u05d8\u05e4\u05dc\u05d5\u05ea',
                vocalization: '\u05de\u05d8\u05e4\u05dc\u05d5\u05ea',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0442\u0430\u043f\u043b\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e0\u05e9\u05d0\u05e8',
            vocalization: '\u05e0\u05e9\u05d0\u05e8',
            translation:
              '(\u043e\u043d) \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f',
            enTranslation: 'stay',
            transcription: '\u043d\u0438\u0448\u0410\u0440',
            infinitive: {
              word: '\u05dc\u05d4\u05d9\u05e9\u05d0\u05e8',
              vocalization: '\u05dc\u05d4\u05d9\u05e9\u05d0\u05e8',
              translation:
                '\u041e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f',
              transcription: '\u041b\u0435h\u0438\u0448\u0430\u042d\u0440',
            },
            present: [
              {
                word: '\u05e0\u05e9\u05d0\u05e8',
                vocalization: '\u05e0\u05e9\u05d0\u05e8',
                translation: '\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u0410\u0440',
              },
              {
                word: '\u05e0\u05e9\u05d0\u05e8\u05ea',
                vocalization: '\u05e0\u05e9\u05d0\u05e8\u05ea',
                translation: '\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u042d\u0440\u0435\u0442',
              },
              {
                word: '\u05e0\u05e9\u05d0\u05e8\u05d9\u05dd',
                vocalization: '\u05e0\u05e9\u05d0\u05e8\u05d9\u05dd',
                translation: '\u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u0430\u0440\u0418\u043c',
              },
              {
                word: '\u05e0\u05e9\u05d0\u05e8\u05d5\u05ea',
                vocalization: '\u05e0\u05e9\u05d0\u05e8\u05d5\u05ea',
                translation: '\u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u0430\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d7\u05d5\u05e9\u05d1',
            vocalization: '\u05d7\u05d5\u05b9\u05e9\u05c1\u05b5\u05d1',
            translation: '(\u043e\u043d) \u0434\u0443\u043c\u0430\u0435\u0442',
            enTranslation: 'think',
            transcription: '\u0445\u043e\u0448\u0415\u0432',
            infinitive: {
              word: '\u05dc\u05d7\u05e9\u05df\u05d1',
              vocalization: '\u05dc\u05d7\u05e9\u05df\u05d1',
              translation: '\u0414\u0443\u043c\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0445\u0448\u041e\u0432',
            },
            present: [
              {
                word: '\u05d7\u05d5\u05e9\u05d1',
                vocalization: '\u05d7\u05d5\u05b9\u05e9\u05c1\u05b5\u05d1',
                translation: '\u0434\u0443\u043c\u0430\u0435\u0442',
                transcription: '\u0445\u043e\u0448\u0415\u0432',
              },
              {
                word: '\u05d7\u05d5\u05e9\u05d1\u05ea',
                vocalization: '\u05d7\u05d5\u05e9\u05d1\u05ea',
                translation: '\u0434\u0443\u043c\u0430\u0435\u0442',
                transcription: '\u0445\u043e\u0448\u0415\u0432\u0435\u0442',
              },
              {
                word: '\u05d7\u05d5\u05e9\u05d1\u05d9\u05dd',
                vocalization: '\u05d7\u05d5\u05e9\u05d1\u05d9\u05dd',
                translation: '\u0434\u0443\u043c\u0430\u044e\u0442',
                transcription: '\u0445\u043e\u0448\u0432\u0418\u043c',
              },
              {
                word: '\u05d7\u05d5\u05e9\u05d1\u05d5\u05ea',
                vocalization: '\u05d7\u05d5\u05e9\u05d1\u05d5\u05ea',
                translation: '\u0434\u0443\u043c\u0430\u044e\u0442',
                transcription: '\u0445\u043e\u0448\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e0\u05d5\u05e1\u05e2',
            vocalization: '\u05e0\u05d5\u05b9\u05e1\u05b5\u05e2\u05b7',
            translation: '(\u043e\u043d) \u0435\u0434\u0435\u0442',
            enTranslation: 'ride',
            transcription: '\u043d\u043e\u0441\u042d\u0430',
            infinitive: {
              word: '\u05dc\u05e0\u05e1\u05d5\u05e2',
              vocalization: '\u05dc\u05e0\u05e1\u05d5\u05e2',
              translation: '\u0415\u0445\u0430\u0442\u044c',
              transcription: '\u043b\u0438\u043d\u0441\u041e\u0430',
            },
            present: [
              {
                word: '\u05e0\u05d5\u05e1\u05e2',
                vocalization: '\u05e0\u05d5\u05b9\u05e1\u05b5\u05e2\u05b7',
                translation: '\u0435\u0434\u0435\u0442',
                transcription: '\u043d\u043e\u0441\u042d\u0430',
              },
              {
                word: '\u05e0\u05d5\u05e1\u05e2\u05ea',
                vocalization: '\u05e0\u05d5\u05e1\u05e2\u05ea',
                translation: '\u0435\u0434\u0435\u0442',
                transcription: '\u043d\u043e\u0441\u0430\u0410\u0442',
              },
              {
                word: '\u05e0\u05d5\u05e1\u05e2\u05d9\u05dd',
                vocalization: '\u05e0\u05d5\u05e1\u05e2\u05d9\u05dd',
                translation: '\u0435\u0434\u0443\u0442',
                transcription: '\u043d\u043e\u0441\u044a\u0418\u043c',
              },
              {
                word: '\u05e0\u05d5\u05e1\u05e2\u05d5\u05ea',
                vocalization: '\u05e0\u05d5\u05e1\u05e2\u05d5\u05ea',
                translation: '\u0435\u0434\u0443\u0442',
                transcription: '\u043d\u043e\u0441\u044a\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e7\u05d5\u05e0\u05d4',
            vocalization: '\u05e7\u05d5\u05e0\u05d4',
            translation:
              '(\u043e\u043d) \u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442',
            enTranslation: 'buy',
            transcription: '\u043a\u043e\u043d\u042d',
            infinitive: {
              word: '\u05dc\u05e7\u05e0\u05d5\u05ea',
              vocalization: '\u05dc\u05e7\u05e0\u05d5\u05ea',
              translation: '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u044c',
              transcription: '\u043b\u0438\u043a\u043d\u041e\u0442',
            },
            present: [
              {
                word: '\u05e7\u05d5\u05e0\u05d4',
                vocalization: '\u05e7\u05d5\u05e0\u05d4',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u043d\u042d',
              },
              {
                word: '\u05e7\u05d5\u05e0\u05d4',
                vocalization: '\u05e7\u05d5\u05e0\u05d4',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u043d\u0410',
              },
              {
                word: '\u05e7\u05d5\u05e0\u05d9\u05dd',
                vocalization: '\u05e7\u05d5\u05e0\u05d9\u05dd',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u043d\u0418\u043c',
              },
              {
                word: '\u05e7\u05d5\u05e0\u05d5\u05ea',
                vocalization: '\u05e7\u05d5\u05e0\u05d5\u05ea',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u043d\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e8\u05d5\u05d0\u05d4',
            vocalization: '\u05e8\u05d5\u05d0\u05d4',
            translation: '(\u043e\u043d) \u0432\u0438\u0434\u0438\u0442',
            enTranslation: 'see',
            transcription: '\u0440\u043e\u042d',
            infinitive: {
              word: '\u05dc\u05e8\u05d0\u05d5\u05ea',
              vocalization: '\u05dc\u05e8\u05d0\u05d5\u05ea',
              translation: '\u0412\u0438\u0434\u0435\u0442\u044c',
              transcription: '\u043b\u0438\u0440\u044a\u041e\u0442',
            },
            present: [
              {
                word: '\u05e8\u05d5\u05d0\u05d4',
                vocalization: '\u05e8\u05d5\u05d0\u05d4',
                translation: '\u0432\u0438\u0434\u0438\u0442',
                transcription: '\u0440\u043e\u042d',
              },
              {
                word: '\u05e8\u05d5\u05d0\u05d4',
                vocalization: '\u05e8\u05d5\u05d0\u05d4',
                translation: '\u0432\u0438\u0434\u0438\u0442',
                transcription: '\u0440\u043e\u0410',
              },
              {
                word: '\u05e8\u05d5\u05d0\u05d9\u05dd',
                vocalization: '\u05e8\u05d5\u05d0\u05d9\u05dd',
                translation: '\u0432\u0438\u0434\u044f\u0442',
                transcription: '\u0440\u043e\u0418\u043c',
              },
              {
                word: '\u05e8\u05d5\u05d0\u05d5\u05ea',
                vocalization: '\u05e8\u05d5\u05d0\u05d5\u05ea',
                translation: '\u0432\u0438\u0434\u044f\u0442',
                transcription: '\u0440\u043e\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e2\u05d5\u05e9\u05d4',
            vocalization: '\u05e2\u05d5\u05e9\u05d4',
            translation: '(\u043e\u043d) \u0434\u0435\u043b\u0430\u0435\u0442',
            enTranslation: 'do',
            transcription: '\u043e\u0441\u042d',
            infinitive: {
              word: '\u05dc\u05e2\u05e9\u05d5\u05ea',
              vocalization: '\u05dc\u05e2\u05e9\u05d5\u05ea',
              translation: '\u0414\u0435\u043b\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0430\u0441\u041e\u0442',
            },
            present: [
              {
                word: '\u05e2\u05d5\u05e9\u05d4',
                vocalization: '\u05e2\u05d5\u05e9\u05d4',
                translation: '\u0434\u0435\u043b\u0430\u0435\u0442',
                transcription: '\u043e\u0441\u042d',
              },
              {
                word: '\u05e2\u05d5\u05e9\u05d4',
                vocalization: '\u05e2\u05d5\u05e9\u05d4',
                translation: '\u0434\u0435\u043b\u0430\u0435\u0442',
                transcription: '\u043e\u0441\u0410',
              },
              {
                word: '\u05e2\u05d5\u05e9\u05d9\u05dd',
                vocalization: '\u05e2\u05d5\u05e9\u05d9\u05dd',
                translation: '\u0434\u0435\u043b\u0430\u044e\u0442',
                transcription: '\u043e\u0441\u0418\u043c',
              },
              {
                word: '\u05e2\u05d5\u05e9\u05d5\u05ea',
                vocalization: '\u05e2\u05d5\u05e9\u05d5\u05ea',
                translation: '\u0434\u0435\u043b\u0430\u044e\u0442',
                transcription: '\u043e\u0441\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d0\u05d5\u05db\u05dc',
            vocalization: '\u05d0\u05d5\u05db\u05dc',
            translation: '(\u043e\u043d) \u0435\u0441\u0442',
            enTranslation: 'eat',
            transcription: '\u043e\u0445\u042d\u043b\u044c',
            infinitive: {
              word: '\u05dc\u05d0\u05db\u05d5\u05dc',
              vocalization: '\u05dc\u05d0\u05db\u05d5\u05dc',
              translation: '\u0415\u0441\u0442\u044c',
              transcription: '\u043b\u044d\u044d\u0445\u041e\u043b\u044c',
            },
            present: [
              {
                word: '\u05d0\u05d5\u05db\u05dc',
                vocalization: '\u05d0\u05d5\u05db\u05dc',
                translation: '\u0435\u0441\u0442',
                transcription: '\u043e\u0445\u042d\u043b\u044c',
              },
              {
                word: '\u05d0\u05d5\u05db\u05dc\u05ea',
                vocalization: '\u05d0\u05d5\u05db\u05dc\u05ea',
                translation: '\u0435\u0441\u0442',
                transcription: '\u043e\u0445\u042d\u043b\u0435\u0442',
              },
              {
                word: '\u05d0\u05d5\u05db\u05dc\u05d9\u05dd',
                vocalization: '\u05d0\u05d5\u05db\u05dc\u05d9\u05dd',
                translation: '\u0435\u0434\u044f\u0442',
                transcription: '\u043e\u0445\u043b\u0418\u043c',
              },
              {
                word: '\u05d0\u05d5\u05db\u05dc\u05d5\u05ea',
                vocalization: '\u05d0\u05d5\u05db\u05dc\u05d5\u05ea',
                translation: '\u0435\u0434\u044f\u0442',
                transcription: '\u043e\u0445\u043b\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e9\u05d5\u05ea\u05d4',
            vocalization: '\u05e9\u05d5\u05ea\u05d4',
            translation: '(\u043e\u043d) \u043f\u044c\u0435\u0442',
            enTranslation: 'drink',
            transcription: '\u0448\u043e\u0442\u042d',
            infinitive: {
              word: '\u05dc\u05e9\u05ea\u05d5\u05ea',
              vocalization: '\u05dc\u05e9\u05ea\u05d5\u05ea',
              translation: '\u041f\u0438\u0442\u044c',
              transcription: '\u043b\u0438\u0448\u0442\u041e\u0442',
            },
            present: [
              {
                word: '\u05e9\u05d5\u05ea\u05d4',
                vocalization: '\u05e9\u05d5\u05ea\u05d4',
                translation: '\u043f\u044c\u0435\u0442',
                transcription: '\u0448\u043e\u0442\u042d',
              },
              {
                word: '\u05e9\u05d5\u05ea\u05d4',
                vocalization: '\u05e9\u05d5\u05ea\u05d4',
                translation: '\u043f\u044c\u0435\u0442',
                transcription: '\u0448\u043e\u0442\u0410',
              },
              {
                word: '\u05e9\u05d5\u05ea\u05d9\u05dd',
                vocalization: '\u05e9\u05d5\u05ea\u05d9\u05dd',
                translation: '\u043f\u044c\u044e\u0442',
                transcription: '\u0448\u043e\u0442\u0418\u043c',
              },
              {
                word: '\u05e9\u05d5\u05ea\u05d5\u05ea',
                vocalization: '\u05e9\u05d5\u05ea\u05d5\u05ea',
                translation: '\u043f\u044c\u044e\u0442',
                transcription: '\u0448\u043e\u0442\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d9\u05d5\u05e9\u05d1',
            vocalization: '\u05d9\u05d5\u05e9\u05d1',
            translation: '(\u043e\u043d) \u0441\u0438\u0434\u0438\u0442',
            enTranslation: 'sit',
            transcription: '\u0439\u043e\u0448\u0415\u0432',
            infinitive: {
              word: '\u05dc\u05e9\u05d1\u05ea',
              vocalization: '\u05dc\u05e9\u05d1\u05ea',
              translation: '\u0421\u0438\u0434\u0435\u0442\u044c',
              transcription: '\u043b\u0430\u0448\u042d\u0432\u0435\u0434',
            },
            present: [
              {
                word: '\u05d9\u05d5\u05e9\u05d1',
                vocalization: '\u05d9\u05d5\u05e9\u05d1',
                translation: '\u0441\u0438\u0434\u0438\u0442',
                transcription: '\u0439\u043e\u0448\u0415\u0432',
              },
              {
                word: '\u05d9\u05d5\u05e9\u05d1\u05ea',
                vocalization: '\u05d9\u05d5\u05e9\u05d1\u05ea',
                translation: '\u0441\u0438\u0434\u0438\u0442',
                transcription: '\u0439\u043e\u0448\u0415\u0432\u0435\u0434',
              },
              {
                word: '\u05d9\u05d5\u05e9\u05d1\u05d9\u05dd',
                vocalization: '\u05d9\u05d5\u05e9\u05d1\u05d9\u05dd',
                translation: '\u0441\u0438\u0434\u044f\u0442',
                transcription: '\u0439\u043e\u0448\u0432\u0418\u043c',
              },
              {
                word: '\u05d9\u05d5\u05e9\u05d1\u05d5\u05ea',
                vocalization: '\u05d9\u05d5\u05e9\u05d1\u05d5\u05ea',
                translation: '\u0441\u0438\u0434\u044f\u0442',
                transcription: '\u0439\u043e\u0448\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d7\u05d9',
            vocalization: '\u05d7\u05d9',
            translation: '(\u043e\u043d) \u0436\u0438\u0432\u0435\u0442',
            enTranslation: 'alive',
            transcription: '\u0445\u0410\u0439',
            infinitive: {
              word: '\u05dc\u05d7\u05d9\u05d5\u05ea',
              vocalization: '\u05dc\u05d7\u05d9\u05d5\u05ea',
              translation: '\u0416\u0438\u0442\u044c',
              transcription: '\u043b\u0438\u0445\u0439\u041e\u0442',
            },
            present: [
              {
                word: '\u05d7\u05d9',
                vocalization: '\u05d7\u05d9',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0445\u0410\u0439',
              },
              {
                word: '\u05d7\u05d9\u05d4',
                vocalization: '\u05d7\u05d9\u05d4',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0445\u0430\u042f',
              },
              {
                word: '\u05d7\u05d9\u05d9\u05dd',
                vocalization: '\u05d7\u05d9\u05d9\u05dd',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0445\u0430\u0439\u0418\u043c',
              },
              {
                word: '\u05d7\u05d9\u05d5\u05ea',
                vocalization: '\u05d7\u05d9\u05d5\u05ea',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0445\u0430\u0439\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e9\u05d7\u05e7',
            vocalization: '\u05de\u05e9\u05d7\u05e7',
            translation: '(\u043e\u043d) \u0438\u0433\u0440\u0430\u0435\u0442',
            enTranslation: 'play',
            transcription: '\u043c\u0435\u0441\u0430\u0445\u0415\u043a',
            infinitive: {
              word: '\u05dc\u05e9\u05d7\u05e7',
              vocalization: '\u05dc\u05e9\u05d7\u05e7',
              translation: '\u0418\u0433\u0440\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u0441\u0430\u0445\u0415\u043a',
            },
            present: [
              {
                word: '\u05de\u05e9\u05d7\u05e7',
                vocalization: '\u05de\u05e9\u05d7\u05e7',
                translation: '\u0438\u0433\u0440\u0430\u0435\u0442',
                transcription: '\u043c\u0435\u0441\u0430\u0445\u0415\u043a',
              },
              {
                word: '\u05de\u05e9\u05d7\u05e7\u05ea',
                vocalization: '\u05de\u05e9\u05d7\u05e7\u05ea',
                translation: '\u0438\u0433\u0440\u0430\u0435\u0442',
                transcription:
                  '\u043c\u0435\u0441\u0430\u0445\u0415\u043a\u0435\u0442',
              },
              {
                word: '\u05de\u05e9\u05d7\u05e7\u05d9\u05dd',
                vocalization: '\u05de\u05e9\u05d7\u05e7\u05d9\u05dd',
                translation: '\u0438\u0433\u0440\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0441\u0430\u0445\u0430\u043a\u0418\u043c',
              },
              {
                word: '\u05de\u05e9\u05d7\u05e7\u05d5\u05ea',
                vocalization: '\u05de\u05e9\u05d7\u05e7\u05d5\u05ea',
                translation: '\u0438\u0433\u0440\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0441\u0430\u0445\u0430\u043a\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e8\u05d2\u05d9\u05e9',
            vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9',
            translation:
              '(\u043e\u043d) \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442',
            enTranslation: 'feel',
            transcription: '\u043c\u0430\u0440\u0433\u0418\u0448',
            infinitive: {
              word: '\u05dc\u05d4\u05e8\u05d2\u05d9\u05e9',
              vocalization: '\u05dc\u05d4\u05e8\u05d2\u05d9\u05e9',
              translation:
                '\u0427\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0435h\u0430\u0440\u0433\u0418\u0448',
            },
            present: [
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u043c\u0430\u0440\u0433\u0418\u0448',
              },
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d4',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d4',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u043c\u0430\u0440\u0433\u0438\u0448\u0410',
              },
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d9\u05dd',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d9\u05dd',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0430\u0440\u0433\u0438\u0448\u0418\u043c',
              },
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d5\u05ea',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d5\u05ea',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0430\u0440\u0433\u0438\u0448\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e8\u05d5\u05e6\u05d4',
            vocalization: '\u05e8\u05d5\u05e6\u05d4',
            translation: '(\u043e\u043d) \u0445\u043e\u0447\u0435\u0442',
            enTranslation: 'want',
            transcription: '\u0440\u043e\u0446\u042d',
            infinitive: {
              word: '\u05dc\u05e8\u05e6\u05d5\u05ea',
              vocalization: '\u05dc\u05e8\u05e6\u05d5\u05ea',
              translation: '\u0425\u043e\u0442\u0435\u0442\u044c',
              transcription: '\u043b\u0438\u0440\u0446\u041e\u0442',
            },
            present: [
              {
                word: '\u05e8\u05d5\u05e6\u05d4',
                vocalization: '\u05e8\u05d5\u05e6\u05d4',
                translation: '\u0445\u043e\u0447\u0435\u0442',
                transcription: '\u0440\u043e\u0446\u042d',
              },
              {
                word: '\u05e8\u05d5\u05e6\u05d4',
                vocalization: '\u05e8\u05d5\u05e6\u05d4',
                translation: '\u0445\u043e\u0447\u0435\u0442',
                transcription: '\u0440\u043e\u0446\u0410',
              },
              {
                word: '\u05e8\u05d5\u05e6\u05d9\u05dd',
                vocalization: '\u05e8\u05d5\u05e6\u05d9\u05dd',
                translation: '\u0445\u043e\u0442\u044f\u0442',
                transcription: '\u0440\u043e\u0446\u0418\u043c',
              },
              {
                word: '\u05e8\u05d5\u05e6\u05d5\u05ea',
                vocalization: '\u05e8\u05d5\u05e6\u05d5\u05ea',
                translation: '\u0445\u043e\u0442\u044f\u0442',
                transcription: '\u0440\u043e\u0446\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d1\u05d9\u05df',
            vocalization: '\u05d1\u05d9\u05df',
            translation: '\u041c\u0435\u0436\u0434\u0443',
            transcription: '\u0431\u0415\u0439\u043d',
            ruTopic: ['\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438'],
            enTopic: ['Prepositions'],
          },
          {
            word: '\u05e2\u05dc',
            vocalization: '\u05e2\u05dc',
            translation: '\u041d\u0430',
            transcription: '\u0430\u043b\u044c',
            ruTopic: ['\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438'],
            enTopic: ['Prepositions'],
          },
          {
            word: '\u05e2\u05dc-\u05d9\u05d3',
            vocalization: '\u05e2\u05dc-\u05d9\u05d3',
            translation: '\u0412\u043e\u0437\u043b\u0435',
            transcription: '\u0430\u043b\u044c-\u044f\u0434',
            ruTopic: ['\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438'],
            enTopic: ['Prepositions'],
          },
          {
            word: '\u05e2\u05dc-\u05d9\u05d3',
            vocalization: '\u05e2\u05dc-\u05d9\u05d3',
            translation: '\u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432',
            transcription: '\u043c\u0443\u043b\u044c',
            ruTopic: ['\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438'],
            enTopic: ['Prepositions'],
          },
          {
            word: '\u05ea\u05d7\u05ea',
            vocalization: '\u05ea\u05bc\u05b7\u05d7\u05b7\u05ea',
            translation: '\u041f\u043e\u0434, \u0441\u043d\u0438\u0437\u0443',
            transcription: '\u0442\u0410\u0445\u0430\u0442',
            ruTopic: ['\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438'],
            enTopic: ['Prepositions'],
          },
          {
            word: '\u05e2\u05dd',
            vocalization: '\u05e2\u05dd',
            translation: '\u0421',
            transcription: '\u0418\u043c',
            ruTopic: ['\u041f\u0440\u0435\u0434\u043b\u043e\u0433\u0438'],
            enTopic: ['Prepositions'],
          },
          {
            word: '\u05ea\u05d9\u05d9\u05e8',
            vocalization: '\u05ea\u05d9\u05d9\u05e8',
            translation: '\u0422\u0443\u0440\u0438\u0441\u0442',
            transcription: '\u0442\u0430\u042f\u0440',
            ruTopic: [
              '\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f',
              '\u0420\u0430\u0437\u043d\u043e\u0435',
            ],
            enTopic: ['Travel', 'Other'],
          },
          {
            word: '\u05e0\u05e9\u05d9\u05d0',
            vocalization: '\u05e0\u05b8\u05e9\u05c2\u05b4\u05d9\u05d0',
            translation:
              '\u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442',
            transcription: '\u043d\u0430\u0441\u0418',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e8\u05d0\u05e9 \u05d4\u05de\u05de\u05e9\u05dc\u05d4',
            vocalization:
              '\u05e8\u05d0\u05e9 \u05d4\u05de\u05de\u05e9\u05dc\u05d4',
            translation:
              '\u041f\u0440\u0435\u043c\u044c\u0435\u0440-\u043c\u0438\u043d\u0438\u0441\u0442\u0440, \u0433\u043b\u0430\u0432\u0430 \u043f\u0440\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430',
            transcription:
              '\u0440\u041e\u0448 \u0430-\u043c\u0435\u043c\u0448\u0430\u043b\u0410',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05d1\u05d9\u05e8\u05d4',
            vocalization: '\u05d1\u05bc\u05b4\u05d9\u05e8\u05b8\u05d4',
            translation: '\u0421\u0442\u043e\u043b\u0438\u0446\u0430',
            transcription: '\u0431\u0438\u0440\u0410',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e2\u05d9\u05e8',
            vocalization: '\u05e2\u05d9\u05e8',
            translation: '\u0413\u043e\u0440\u043e\u0434',
            transcription: '\u0418\u0440',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05d0\u05e8\u05e5',
            vocalization: '\u05d0\u05b6\u05e8\u05b6\u05e5',
            translation:
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e',
            transcription: '\u042d\u0440\u0435\u0446',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e2\u05dd',
            vocalization: '\u05e2\u05dd',
            translation: '\u041d\u0430\u0440\u043e\u0434',
            transcription: '\u0410\u043c',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8',
            vocalization: '\u05e9\u05e8',
            translation: '\u041c\u0438\u043d\u0438\u0441\u0442\u0440',
            transcription: '\u0441\u0410\u0440',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05d4\u05de\u05e0\u05d5\u05df',
            vocalization: '\u05d4\u05de\u05e0\u05d5\u05df',
            translation: '\u0413\u0438\u043c\u043d',
            transcription: '\u0445\u0438\u043c\u043d\u041e\u043d',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e1\u05de\u05dc',
            vocalization: '\u05e1\u05b5\u05de\u05b6\u05dc',
            translation: '\u0421\u0438\u043c\u0432\u043e\u043b',
            transcription: '\u0441\u0415\u043c\u0435\u043b\u044c',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05de\u05e0\u05d5\u05e8\u05d4',
            vocalization: '\u05de\u05e0\u05d5\u05e8\u05d4',
            translation: '\u041c\u0435\u043d\u043e\u0440\u0430',
            transcription: '\u043c\u0435\u043d\u043e\u0440\u0410',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05de\u05d2\u05df \u05d3\u05d5\u05d3',
            vocalization: '\u05de\u05d2\u05df \u05d3\u05d5\u05d3',
            translation:
              '\u0429\u0438\u0442 \u0414\u0430\u0432\u0438\u0434\u0430',
            transcription:
              '\u043c\u0430\u0433\u0415\u043d \u0414\u0430\u0432\u0438\u0434',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05d4\u05ea\u05e7\u05d5\u05d4',
            vocalization: '\u05d4\u05ea\u05e7\u05d5\u05d4',
            translation: '\u041d\u0430\u0434\u0435\u0436\u0434\u0430',
            transcription: '\u0430\u0442\u0418\u043a\u0432\u0430',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e6\u05d1\u05d0',
            vocalization: '\u05e6\u05d1\u05d0',
            translation: '\u0410\u0440\u043c\u0438\u044f',
            transcription: '\u0446\u0432\u0410',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8 \u05d4\u05d1\u05d9\u05d8\u05d7\u05d5\u05df',
            vocalization:
              '\u05e9\u05e8 \u05d4\u05d1\u05d9\u05d8\u05d7\u05d5\u05df',
            translation:
              '\u041c\u0438\u043d\u0438\u0441\u0442\u0440 \u043e\u0431\u043e\u0440\u043e\u043d\u044b',
            transcription:
              '\u0421\u0430\u0440 \u0430\u0431\u0438\u0442\u0430\u0445\u041e\u043d',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8 \u05d4\u05d0\u05d5\u05e6\u05e8',
            vocalization: '\u05e9\u05e8 \u05d4\u05d0\u05d5\u05e6\u05e8',
            translation:
              '\u041c\u0438\u043d\u0438\u0441\u0442\u0440 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432',
            transcription: '\u0441\u0410\u0440 \u0430\u043e\u0446\u0410\u0440',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8 \u05d4\u05d7\u05d9\u05e0\u05d5\u05da',
            vocalization: '\u05e9\u05e8 \u05d4\u05d7\u05d9\u05e0\u05d5\u05da',
            translation:
              '\u041c\u0438\u043d\u0438\u0441\u0442\u0440 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f',
            transcription:
              '\u0441\u0410\u0440 \u0430\u0445\u0438\u043d\u0423\u0445',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8 \u05d4\u05d7\u05d5\u05e5',
            vocalization: '\u05e9\u05e8 \u05d4\u05d7\u05d5\u05e5',
            translation:
              '\u041c\u0438\u043d\u0438\u0441\u0442\u0440 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u0434\u0435\u043b',
            transcription: '\u0441\u0410\u0440 \u0430\u0445\u0423\u0446',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8 \u05d4\u05e4\u05e0\u05d9\u05dd',
            vocalization: '\u05e9\u05e8 \u05d4\u05e4\u05e0\u05d9\u05dd',
            translation:
              '\u041c\u0438\u043d\u0438\u0441\u0442\u0440 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u0434\u0435\u043b',
            transcription: '\u0441\u0410\u0440 \u0430\u043f\u043d\u0418\u043c',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e9\u05e8 \u05d4\u05e7\u05dc\u05d9\u05d8\u05d4',
            vocalization: '\u05e9\u05e8 \u05d4\u05e7\u05dc\u05d9\u05d8\u05d4',
            translation:
              '\u041c\u0438\u043d\u0438\u0441\u0442\u0440 \u0430\u0431\u0441\u043e\u0440\u0431\u0446\u0438\u0438',
            transcription:
              '\u0441\u0410\u0440 \u0430\u043a\u043b\u0438\u0442\u0410',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05e6\u05d1\u05d0',
            vocalization: '\u05e6\u05d1\u05d0',
            translation: '\u0410\u0440\u043c\u0438\u044f',
            transcription: '\u0446\u0430\u0432\u0410',
            ruTopic: [
              '\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c',
            ],
            enTopic: ['Statehood'],
          },
          {
            word: '\u05d8\u05dc\u05e4\u05d5\u05df',
            vocalization: '\u05d8\u05dc\u05e4\u05d5\u05df',
            translation: '\u0422\u0435\u043b\u0435\u0444\u043e\u043d',
            transcription: '\u0442\u044d\u043b\u044d\u0444\u041e\u043d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d8\u05dc\u05d5\u05d5\u05d9\u05d6\u05d9\u05d4',
            vocalization: '\u05d8\u05dc\u05d5\u05d5\u05d9\u05d6\u05d9\u05d4',
            translation:
              '\u0422\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440',
            transcription:
              '\u0422\u044d\u043b\u044d\u0432\u0418\u0439\u0437\u0438\u0430',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e2\u05d5\u05dc\u05d4 \u05d7\u05d3\u05e9',
            vocalization: '\u05e2\u05d5\u05dc\u05d4 \u05d7\u05d3\u05e9',
            translation:
              '\u041d\u043e\u0432\u044b\u0439 \u0440\u0435\u043f\u0430\u0442\u0440\u0438\u0430\u043d\u0442',
            transcription: '\u043e\u043b\u0415 \u0445\u0430\u0434\u0410\u0448',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e7\u05e6\u05ea',
            vocalization: '\u05e7\u05e6\u05ea',
            translation:
              '\u041d\u0435\u043d\u0430\u0434\u043e\u043b\u0433\u043e',
            transcription: '\u041a\u0446\u0430\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d2\u05dd',
            vocalization: '\u05d2\u05dd',
            translation: '\u0422\u043e\u0436\u0435',
            transcription: '\u0433\u0430\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05df',
            vocalization: '\u05db\u05df',
            translation: '\u0414\u0430',
            transcription: '\u043a\u0435\u043d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05dc\u05d0',
            vocalization: '\u05dc\u05d0',
            translation: '\u043d\u0435\u0442',
            transcription: '\u043b\u0401',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e0\u05db\u05d5\u05df',
            vocalization: '\u05e0\u05db\u05d5\u05df',
            translation: '\u0412\u0435\u0440\u043d\u043e',
            transcription: '\u043d\u0430\u0445\u041e\u043d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e9\u05d5\u05dc\u05d7\u05df',
            vocalization: '\u05e9\u05d5\u05dc\u05d7\u05df',
            translation: '\u0421\u0442\u043e\u043b',
            transcription: '\u0448\u0443\u043b\u0445\u0410\u043d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05ea\u05de\u05df\u05e0\u05d4',
            vocalization: '\u05ea\u05de\u05d5\u05e0\u05d4',
            translation: '\u041a\u0430\u0440\u0442\u0438\u043d\u0430',
            transcription: '\u0442\u043c\u0443\u043d\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e2\u05d8',
            vocalization: '\u05e2\u05d8',
            translation: '\u0420\u0443\u0447\u043a\u0430',
            transcription: '\u044d\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e2\u05d9\u05d8\u05d5\u05df',
            vocalization: '\u05e2\u05d9\u05de\u05d5\u05df',
            translation: '\u0413\u0430\u0437\u0435\u0442\u0430',
            transcription: '\u0438\u0442\u041e\u043d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e1\u05d9\u05e4\u05d5\u05e8',
            vocalization: '\u05e1\u05d9\u05e4\u05d5\u05e8',
            translation: '\u0418\u0441\u0442\u043e\u0440\u0438\u044f',
            transcription: '\u0441\u0438\u043f\u0423\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e1\u05e4\u05e8',
            vocalization: '\u05e1\u05e4\u05e8',
            translation: '\u041a\u043d\u0438\u0433\u0430',
            transcription: '\u0441\u042d\u0444\u044d\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05db\u05ea\u05d1',
            vocalization: '\u05de\u05db\u05ea\u05d1',
            translation: '\u041f\u0438\u0441\u044c\u043c\u043e',
            transcription: '\u043c\u0438\u0445\u0442\u0410\u0432',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05ea\u05d9\u05e7',
            vocalization: '\u05ea\u05d9\u05e7',
            translation: '\u0421\u0443\u043c\u043a\u0430',
            transcription: '\u0442\u0438\u043a',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e9\u05d0\u05dc\u05d4',
            vocalization: '\u05e9\u05d0\u05dc\u05d4',
            translation: '\u0412\u043e\u043f\u0440\u043e\u0441',
            transcription: '\u0448\u042d\u042d\u043b\u0430',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05ea\u05e9\u05d5\u05d1\u05d4',
            vocalization: '\u05ea\u05e9\u05d5\u05d1\u05d4',
            translation: '\u041e\u0442\u0432\u0435\u0442',
            transcription: '\u0442\u0448\u0443\u0432\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d7\u05e9\u05d1\u05d4',
            vocalization: '\u05de\u05d7\u05e9\u05d1\u05d4',
            translation: '\u041c\u044b\u0441\u043b\u044c',
            transcription: '\u043c\u0430\u0445\u0448\u044d\u0432\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d7\u05e9\u05d1',
            vocalization: '\u05de\u05d7\u05e9\u05d1',
            translation:
              '\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440',
            transcription: '\u043c\u0430\u0445\u0448\u0415\u0432',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d0\u05d5\u05d3',
            vocalization: '\u05de\u05d0\u05d5\u05d3',
            translation: '\u041e\u0447\u0435\u043d\u044c',
            transcription: '\u043c\u044d\u041e\u0434',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e0\u05e2\u05d9\u05dd',
            vocalization: '\u05e0\u05e2\u05d9\u05dd',
            translation: '\u041f\u0440\u0438\u044f\u0442\u043d\u043e',
            transcription: '\u043d\u0430\u0418\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d1\u05d7\u05d5\u05e8\u05d4',
            vocalization: '\u05d1\u05d7\u05d5\u05e8\u05d4',
            translation: '\u0414\u0435\u0432\u0443\u0448\u043a\u0430',
            transcription: '\u0431\u0430\u0445\u0443\u0440\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d1\u05d7\u05d5\u05e8',
            vocalization: '\u05d1\u05d7\u05d5\u05e8',
            translation: '\u041f\u0430\u0440\u0435\u043d\u044c',
            transcription: '\u0431\u0430\u0445\u0423\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d7\u05d5\u05e4\u05e9',
            vocalization: '\u05d7\u05d5\u05e4\u05e9',
            translation: '\u041e\u0442\u043f\u0443\u0441\u043a',
            transcription: '\u0445\u041e\u0444\u044d\u0448',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e8\u05e7',
            vocalization: '\u05e8\u05e7',
            translation: '\u0422\u043e\u043b\u044c\u043a\u043e',
            transcription: '\u0440\u0430\u043a',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e2\u05db\u05e9\u05d9\u05d1',
            vocalization: '\u05e2\u05db\u05e9\u05d9\u05d1',
            translation: '\u0421\u0435\u0439\u0447\u0430\u0441',
            transcription: '\u0430\u0445\u0448\u0410\u0432',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d3\u05d9\u05d0\u05dc\u05d5\u05d2',
            vocalization: '\u05d3\u05d9\u05d0\u05dc\u05d5\u05d2',
            translation: '\u0414\u0438\u0430\u043b\u043e\u0433',
            transcription: '\u0434\u0438\u0430\u043b\u043e\u0433',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05e4\u05d4',
            vocalization: '\u05de\u05e4\u05d4',
            translation: '\u041a\u0430\u0440\u0442\u0430',
            transcription: '\u043c\u0430\u043f\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e7\u05d9\u05e8',
            vocalization: '\u05e7\u05d9\u05e8',
            translation: '\u0421\u0442\u0435\u043d\u0430',
            transcription: '\u043a\u0438\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d1\u05d9\u05e8\u05d4',
            vocalization: '\u05d1\u05d9\u05e8\u05d4',
            translation: '\u0421\u0442\u043e\u043b\u0438\u0446\u0430',
            transcription: '\u0431\u0438\u0440\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e9\u05e4\u05d4',
            vocalization: '\u05e9\u05e4\u05d4',
            translation: '\u042f\u0437\u044b\u043a',
            transcription: '\u0441\u0430\u0444\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d2\u05d3\u05dc',
            vocalization: '\u05de\u05d2\u05d3\u05dc',
            translation: '\u0411\u0430\u0448\u043d\u044f',
            transcription: '\u043c\u0438\u0433\u0434\u0410\u043b\u044c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05ea\u05d5\u05db\u05e0\u05d9\u05d5\u05ea',
            vocalization: '\u05ea\u05d5\u05db\u05e0\u05d9\u05d5\u05ea',
            translation: '\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0438',
            transcription: '\u0442\u043e\u0445\u043d\u044c\u041e\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d9\u05dd',
            vocalization: '\u05d9\u05dd',
            translation: '\u041c\u043e\u0440\u0435',
            transcription: '\u042f\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05db\u05d5\u05e0\u05d9\u05ea',
            vocalization: '\u05de\u05db\u05d5\u05e0\u05d9\u05ea',
            translation: '\u041c\u0430\u0448\u0438\u043d\u0430',
            transcription: '\u043c\u044d\u0445\u043e\u043d\u0418\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05dc\u05d5\u05d7',
            vocalization: '\u05dc\u05d5\u05d7',
            translation: '\u0414\u043e\u0441\u043a\u0430',
            transcription: '\u043b\u0423\u0430\u0445',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05e1\u05e3',
            vocalization: '\u05db\u05e1\u05e3',
            translation: '\u0414\u0435\u043d\u044c\u0433\u0438',
            transcription: '\u043a\u042d\u0441\u044d\u0444',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e2\u05d9\u05e4\u05e8\u05d5\u05df',
            vocalization:
              '\u05e2\u05b4\u05d9\u05e4\u05bc\u05b8\u05e8\u05d5\u05b9\u05df',
            translation: '\u041a\u0430\u0440\u0430\u043d\u0434\u0430\u0448',
            transcription: '\u0438\u043f\u0430\u0440\u041e\u043d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d7\u05d1\u05e8\u05ea',
            vocalization: '\u05de\u05d7\u05d1\u05e8\u05ea',
            translation: '\u0422\u0435\u0442\u0440\u0430\u0434\u044c',
            transcription: '\u043c\u0430\u0445\u0431\u042d\u0440\u044d\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d4\u05d9\u05d5\u05dd',
            vocalization: '\u05d4\u05b7\u05d9\u05bc\u05d5\u05b9\u05dd',
            translation: '\u0421\u0435\u0433\u043e\u0434\u043d\u044f',
            transcription: '\u0445\u0430\u0439\u041e\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e4\u05e7\u05e1',
            vocalization: '\u05e4\u05b7\u05e7\u05b0\u05e1',
            translation: '\u0424\u0430\u043a\u0441',
            transcription: '\u0444\u0410\u043a\u0441',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d2\u05d1\u05e8\u05ea',
            vocalization: '\u05d2\u05bc\u05b0\u05d1\u05b6\u05e8\u05b6\u05ea',
            translation: '\u0413\u043e\u0441\u043f\u043e\u0436\u0430',
            transcription: '\u0433\u0432\u042d\u0440\u044d\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05e8',
            vocalization: '\u05de\u05b7\u05e8',
            translation: '\u0413\u043e\u0441\u043f\u043e\u0434\u0438\u043d',
            transcription: '\u043c\u0410\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05dc\u05d1',
            vocalization: '\u05dc\u05b5\u05d1',
            translation: '\u0421\u0435\u0440\u0434\u0446\u0435',
            transcription: '\u043b\u0415\u0432',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05e9',
            vocalization: '\u05d0\u05b5\u05e9\u05c1',
            translation: '\u041e\u0433\u043e\u043d\u044c',
            transcription: '\u042d\u0448',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e0\u05e4\u05d8',
            vocalization: '\u05e0\u05b5\u05e4\u05b0\u05d8',
            translation: '\u041d\u0435\u0444\u0442\u044c',
            transcription: '\u043d\u042d\u0444\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05d9\u05e1\u05d0',
            vocalization: '\u05db\u05d9\u05e1\u05d0',
            translation: '\u0421\u0442\u0443\u043b',
            transcription: '\u043a\u0438\u0441\u042d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e8\u05d3\u05d9\u05d5',
            vocalization: '\u05e8\u05d3\u05d9\u05d5',
            translation: '\u0420\u0430\u0434\u0438\u043e',
            transcription: '\u0440\u0410\u0434\u0438\u043e',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d4\u05e8\u05d1\u05d4',
            vocalization: '\u05d4\u05b7\u05e8\u05b0\u05d1\u05bc\u05b5\u05d4',
            translation: '\u041c\u043d\u043e\u0433\u043e',
            transcription: '\u0430\u0440\u0431\u042d',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d1\u05d7\u05d5\u05e5',
            vocalization: '\u05d1\u05d7\u05d5\u05e5',
            translation: '\u0421\u043d\u0430\u0440\u0443\u0436\u0438',
            transcription: '\u0431\u0430-\u0445\u0443\u0446',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05d9',
            vocalization: '\u05db\u05d9',
            translation:
              '\u041f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e',
            transcription: '\u043a\u0418',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05e4\u05e0\u05d9 \u05e9\u05d0\u05e0\u05d9',
            vocalization: '\u05de\u05e4\u05e0\u05d9 \u05e9\u05d0\u05e0\u05d9',
            translation:
              '\u041f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e',
            transcription:
              '\u043c\u0438\u0444\u043d\u042d\u0439 \u0448\u0435\u043d\u0418',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d4\u05e4\u05e1\u05e7\u05d4',
            vocalization:
              '\u05d4\u05b7\u05e4\u05b0\u05e1\u05b8\u05e7\u05b8\u05d4',
            translation: '\u041f\u0435\u0440\u0435\u0440\u044b\u0432',
            transcription: '\u0430\u0444\u0441\u0430\u043a\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d8\u05d9\u05d5\u05dc',
            vocalization: '\u05d8\u05d9\u05d5\u05dc',
            translation:
              '\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435',
            transcription: '\u0442\u0438\u0423\u043b\u044c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05d5\u05d8\u05d5\u05d1\u05d5\u05e1',
            vocalization:
              '\u05d0\u05d5\u05b9\u05d8\u05d5\u05b9\u05d1\u05bc\u05d5\u05bc\u05e1',
            translation: '\u0410\u0432\u0442\u043e\u0431\u0443\u0441',
            transcription: '\u041e\u0442\u043e\u0431\u0443\u0441',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e7\u05d5\u05e4\u05ea-\u05d7\u05d5\u05dc\u05d9\u05dd',
            vocalization:
              '\u05e7\u05d5\u05e4\u05ea-\u05d7\u05d5\u05dc\u05d9\u05dd',
            translation:
              '\u0411\u043e\u043b\u044c\u043d\u0438\u0447\u043d\u0430\u044f \u043a\u0430\u0441\u0441\u0430',
            transcription:
              '\u043a\u0443\u043f\u0410\u0442 \u0445\u043e\u043b\u0418\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d1\u05e8\u05d2\u05dc',
            vocalization: '\u05d1\u05e8\u05d2\u05dc',
            translation: '\u041f\u0435\u0448\u043a\u043e\u043c',
            transcription: '\u0431\u0430-\u0440\u0435\u0433\u0435\u043b\u044c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05dd',
            vocalization: '\u05d0\u05dd',
            translation: '\u0415\u0441\u043b\u0438',
            transcription: '\u0418\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d7\u05d3\u05e9\u05d5\u05ea',
            vocalization: '\u05d7\u05d3\u05e9\u05d5\u05ea',
            translation: '\u041d\u043e\u0432\u043e\u0441\u0442\u0438',
            transcription: '\u0445\u0430\u0434\u0430\u0448\u041e\u0442',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05de\u05d5 \u05ea\u05de\u05d9\u05d3',
            vocalization: '\u05db\u05de\u05d5 \u05ea\u05de\u05d9\u05d3',
            translation:
              '\u041a\u0430\u043a \u0432\u0441\u0435\u0433\u0434\u0430',
            transcription: '\u043a\u043c\u041e \u0442\u0430\u043c\u0418\u0434',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05ea\u05de\u05d9\u05d3',
            vocalization: '\u05ea\u05de\u05d9\u05d3',
            translation: '\u0412\u0441\u0435\u0433\u0434\u0430',
            transcription: '\u0442\u0430\u043c\u0418\u0434',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05e4\u05ea\u05d7',
            vocalization: '\u05de\u05e4\u05ea\u05d7',
            translation: '\u041a\u043b\u044e\u0447',
            transcription: '\u043c\u0430\u0444\u0442\u042d\u0430\u0445',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05d1\u05dc',
            vocalization: '\u05d0\u05d1\u05dc',
            translation: '\u041d\u043e',
            transcription: '\u0430\u0432\u0410\u043b\u044c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05e1\u05e3',
            vocalization: '\u05db\u05e1\u05e3',
            translation: '\u0414\u0435\u043d\u044c\u0433\u0438',
            transcription: '\u043a\u0415\u0441\u0435\u0444',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05dc',
            vocalization: '\u05db\u05dc',
            translation: '\u0412\u0441\u0435',
            transcription: '\u043a\u0410\u043b\u044c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05dc\u05e4\u05e2\u05de\u05d9\u05dd',
            vocalization: '\u05dc\u05e4\u05e2\u05de\u05d9\u05dd',
            translation: '\u0418\u043d\u043e\u0433\u0434\u0430',
            transcription: '\u043b\u0438\u0444\u0430\u043c\u0418\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc',
            vocalization: '\u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc',
            translation: '\u0412 \u043e\u0431\u0449\u0435\u043c',
            transcription:
              '\u0431\u044d\u0434\u042d\u0440\u044d\u0445 \u043a\u043b\u0410\u043b\u044c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05d9\u05e9',
            vocalization: '\u05d0\u05d9\u05e9',
            translation: '\u0427\u0435\u043b\u043e\u0432\u0435\u043a',
            transcription: '\u0418\u0448',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e0\u05d4\u05d2',
            vocalization: '\u05e0\u05d4\u05d2',
            translation: '\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c',
            transcription: '\u043d\u0410\u0433',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05e0\u05d4\u05d9\u05d2',
            vocalization: '\u05de\u05e0\u05d4\u05d9\u05d2',
            translation: '\u041b\u0438\u0434\u0435\u0440',
            transcription: '\u043c\u0430\u043d\u0445\u0418\u0433',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05e6\u05d1 \u05de\u05e9\u05e4\u05d7\u05ea\u05d9',
            vocalization:
              '\u05de\u05e6\u05d1 \u05de\u05e9\u05e4\u05d7\u05ea\u05d9',
            translation:
              '\u0421\u0435\u043c\u0435\u0439\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435',
            transcription:
              '\u043c\u0430\u0446\u0410\u0432 \u043c\u0438\u0448\u043f\u0430\u0445\u0442\u0418',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e6\u05d3\u05d9\u05e7',
            vocalization: '\u05e6\u05d3\u05d9\u05e7',
            translation:
              '\u041f\u0440\u0430\u0432\u0435\u0434\u043d\u0438\u043a',
            transcription: '\u0446\u0430\u0434\u0418\u043a',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e2\u05d5\u05e0\u05d4',
            vocalization: '\u05e2\u05d5\u05e0\u05d4',
            translation: '\u0421\u0435\u0437\u043e\u043d',
            transcription: '\u043e\u043d\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e4\u05d2\u05d9\u05e9\u05d4',
            vocalization: '\u05e4\u05d2\u05d9\u05e9\u05d4',
            translation: '\u0412\u0441\u0442\u0440\u0435\u0447\u0430',
            transcription: '\u043f\u0433\u0438\u0448\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d7\u05d3\u05e8',
            vocalization: '\u05d7\u05d3\u05e8',
            translation: '\u041a\u043e\u043c\u043d\u0430\u0442\u0430',
            transcription: '\u0445\u0415\u0434\u0435\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e8\u05d4\u05d9\u05d8\u05d9\u05dd',
            vocalization:
              '\u05e8\u05b8\u05d4\u05b4\u05d9\u05d8\u05b4\u05d9\u05dd',
            translation: '\u041c\u0435\u0431\u0435\u043b\u044c',
            transcription: '\u0440\u0430h\u0438\u0442\u0418\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e9\u05dd',
            vocalization: '\u05e9\u05dd',
            translation: '\u0418\u043c\u044f',
            transcription: '\u0448\u0415\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d9\u05dc\u05d4',
            vocalization: '\u05de\u05d9\u05dc\u05d4',
            translation: '\u0421\u043b\u043e\u0432\u043e',
            transcription: '\u043c\u0438\u043b\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e9\u05e0\u05d4',
            vocalization: '\u05e9\u05e0\u05d4',
            translation: '\u0413\u043e\u0434',
            transcription: '\u0448\u0430\u043d\u0410',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05de\u05d7\u05e8',
            vocalization: '\u05de\u05d7\u05e8',
            translation: '\u0417\u0430\u0432\u0442\u0440\u0430',
            transcription: '\u043c\u0430\u0445\u0410\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05db\u05d1\u05e8',
            vocalization: '\u05db\u05d1\u05e8',
            translation: '\u0423\u0436\u0435',
            transcription: '\u043a\u0432\u0410\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d3\u05d5\u05d5\u05e7\u05d0',
            vocalization: '\u05d3\u05d5\u05d5\u05e7\u05d0',
            translation: '\u0418\u043c\u0435\u043d\u043d\u043e',
            transcription: '\u0434\u0410\u0432\u043a\u0430',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05e3 \u05e4\u05e2\u05dd',
            vocalization: '\u05d0\u05e3 \u05e4\u05e2\u05dd',
            translation: '\u041d\u0438\u043a\u043e\u0433\u0434\u0430',
            transcription: '\u0410\u0444 \u043f\u0430\u0410\u043c',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05e0\u05d5\u05d3\u05e0\u05d9\u05e7',
            vocalization: '\u05e0\u05d5\u05d3\u05e0\u05d9\u05e7',
            translation: '\u0417\u0430\u043d\u0443\u0434\u0430',
            transcription: '\u043d\u0423\u0434\u043d\u0438\u043a',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d0\u05d5\u05dc\u05d9',
            vocalization: '\u05d0\u05d5\u05dc\u05d9',
            translation:
              '\u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c',
            transcription: '\u0443\u043b\u0410\u0439',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
          {
            word: '\u05d3\u05d5\u05d0\u05e8',
            vocalization: '\u05d3\u05d5\u05d0\u05e8',
            translation: '\u041f\u043e\u0447\u0442\u0430',
            transcription: '\u0434\u041e\u0430\u0440',
            ruTopic: ['\u0420\u0430\u0437\u043d\u043e\u0435'],
            enTopic: ['Other'],
          },
        ],
        mt = [
          {
            word: '\u05dc\u05d5\u05b9\u05de\u05b5\u05d3',
            vocalization: '\u05dc\u05d5\u05b9\u05de\u05b5\u05d3',
            translation: '(\u043e\u043d) \u0443\u0447\u0438\u0442\u0441\u044f',
            enTranslation: 'learn',
            transcription: '\u043b\u043e\u043c\u042d\u0434',
            infinitive: {
              word: '\u05dc\u05dc\u05de\u05d5\u05d3',
              vocalization: '\u05dc\u05dc\u05de\u05d5\u05d3',
              translation: '\u0423\u0447\u0438\u0442\u044c\u0441\u044f',
              transcription: '\u043b\u0438\u043b\u044c\u043c\u041e\u0434',
            },
            present: [
              {
                word: '\u05dc\u05d5\u05de\u05d3',
                vocalization: '\u05dc\u05d5\u05b9\u05de\u05b5\u05d3',
                translation: '\u0443\u0447\u0438\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0415\u0434',
              },
              {
                word: '\u05dc\u05d5\u05de\u05d3\u05ea',
                vocalization: '\u05dc\u05d5\u05de\u05d3\u05ea',
                translation: '\u0443\u0447\u0438\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0415\u0434\u0435\u0442',
              },
              {
                word: '\u05dc\u05d5\u05de\u05d3\u05d9\u05dd',
                vocalization: '\u05dc\u05d5\u05de\u05d3\u05d9\u05dd',
                translation: '\u0443\u0447\u0430\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0434\u0418\u043c',
              },
              {
                word: '\u05dc\u05d5\u05de\u05d3\u05d5\u05ea',
                vocalization: '\u05dc\u05d5\u05de\u05d3\u05d5\u05ea',
                translation: '\u0443\u0447\u0430\u0442\u0441\u044f',
                transcription: '\u043b\u043e\u043c\u0434\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e2\u05d5\u05d1\u05d3',
            vocalization: '\u05e2\u05d5\u05b9\u05d1\u05b5\u05d3',
            translation:
              '(\u043e\u043d) \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
            enTranslation: 'work',
            transcription: '\u043e\u0432\u042d\u0434',
            infinitive: {
              word: '\u05dc\u05e2\u05d1\u05d5\u05d3',
              vocalization: '\u05dc\u05e2\u05d1\u05d5\u05d3',
              translation: '\u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0430\u0432\u041e\u0434',
            },
            present: [
              {
                word: '\u05e2\u05d5\u05d1\u05d3',
                vocalization: '\u05e2\u05d5\u05b9\u05d1\u05b5\u05d3',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
                transcription: '\u043e\u0432\u042d\u0434',
              },
              {
                word: '\u05e2\u05d5\u05d1\u05d3\u05ea',
                vocalization: '\u05e2\u05d5\u05d1\u05d3\u05ea',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442',
                transcription: '\u043e\u0432\u042d\u0434\u044d\u0442',
              },
              {
                word: '\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd',
                vocalization: '\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442',
                transcription: '\u043e\u0432\u0434\u0418\u043c',
              },
              {
                word: '\u05e2\u05d5\u05d1\u05d3\u05d5\u05ea',
                vocalization: '\u05e2\u05d5\u05d1\u05d3\u05d5\u05ea',
                translation: '\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442',
                transcription: '\u043e\u0432\u0434\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d2\u05e8',
            vocalization: '\u05d2\u05e8',
            translation: '(\u043e\u043d) \u0436\u0438\u0432\u0435\u0442',
            enTranslation: 'live',
            transcription: '\u0433\u0410\u0440',
            infinitive: {
              word: '\u05dc\u05d2\u05d5\u05e8',
              vocalization: '\u05dc\u05d2\u05d5\u05e8',
              translation: '\u0416\u0438\u0442\u044c',
              transcription: '\u043b\u0430\u0433\u0423\u0440',
            },
            present: [
              {
                word: '\u05d2\u05e8',
                vocalization: '\u05d2\u05e8',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0433\u0410\u0440',
              },
              {
                word: '\u05d2\u05e8\u05d4',
                vocalization: '\u05d2\u05e8\u05d4',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0433\u0430\u0440\u0410',
              },
              {
                word: '\u05d2\u05e8\u05d9\u05dd',
                vocalization: '\u05d2\u05e8\u05d9\u05dd',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0433\u0430\u0440\u0418\u043c',
              },
              {
                word: '\u05d2\u05e8\u05d5\u05ea',
                vocalization: '\u05d2\u05e8\u05d5\u05ea',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0433\u0430\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d3\u05d1\u05e8',
            vocalization: '\u05de\u05d3\u05d1\u05e8',
            translation:
              '(\u043e\u043d) \u0433\u043e\u0432\u043e\u0440\u0438\u0442',
            enTranslation: 'say',
            transcription: '\u043c\u0435\u0434\u0430\u0431\u042d\u0440',
            infinitive: {
              word: '\u05dc\u05d3\u05d1\u05e8',
              vocalization: '\u05dc\u05d3\u05d1\u05e8',
              translation: '\u0413\u043e\u0432\u043e\u0440\u0438\u0442\u044c',
              transcription: '\u043b\u0435\u0434\u0430\u0431\u0415\u0440',
            },
            present: [
              {
                word: '\u05de\u05d3\u05d1\u05e8',
                vocalization: '\u05de\u05d3\u05d1\u05e8',
                translation: '\u0433\u043e\u0432\u043e\u0440\u0438\u0442',
                transcription: '\u043c\u0435\u0434\u0430\u0431\u042d\u0440',
              },
              {
                word: '\u05de\u05d3\u05d1\u05e8\u05ea',
                vocalization: '\u05de\u05d3\u05d1\u05e8\u05ea',
                translation: '\u0433\u043e\u0432\u043e\u0440\u0438\u0442',
                transcription:
                  '\u043c\u0435\u0434\u0430\u0431\u0415\u0440\u0435\u0442',
              },
              {
                word: '\u05de\u05d3\u05d1\u05e8\u05d9\u05dd',
                vocalization: '\u05de\u05d3\u05d1\u05e8\u05d9\u05dd',
                translation: '\u0433\u043e\u0432\u043e\u0440\u044f\u0442',
                transcription:
                  '\u043c\u0435\u0434\u0430\u0431\u0440\u0418\u043c',
              },
              {
                word: '\u05de\u05d3\u05d1\u05e8\u05d5\u05ea',
                vocalization: '\u05de\u05d3\u05d1\u05e8\u05d5\u05ea',
                translation: '\u0433\u043e\u0432\u043e\u0440\u044f\u0442',
                transcription:
                  '\u043c\u0435\u0434\u0430\u0431\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e6\u05d8\u05e2\u05e8',
            vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8',
            translation:
              '(\u043e\u043d) \u043e\u0433\u043e\u0440\u0447\u0430\u0435\u0442\u0441\u044f',
            enTranslation: 'upset',
            transcription: '\u043c\u0438\u0446\u0442\u0430\u042d\u0440',
            infinitive: {
              word: '\u05dc\u05d4\u05e6\u05d8\u05e2\u05e8',
              vocalization: '\u05dc\u05d4\u05e6\u05d8\u05e2\u05e8',
              translation:
                '\u041e\u0433\u043e\u0440\u0447\u0430\u0442\u044c\u0441\u044f',
              transcription:
                '\u043b\u0435h\u0438\u0446\u0442\u0430\u042d\u0440',
            },
            present: [
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u0435\u0442\u0441\u044f',
                transcription: '\u043c\u0438\u0446\u0442\u0430\u042d\u0440',
              },
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8\u05ea',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8\u05ea',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u0435\u0442\u0441\u044f',
                transcription:
                  '\u043c\u0438\u0446\u0442\u0430\u042d\u0440\u044d\u0442',
              },
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u044e\u0442\u0441\u044f',
                transcription:
                  '\u043c\u0438\u0446\u0442\u0430\u044d\u0440\u0418\u043c',
              },
              {
                word: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d5\u05ea',
                vocalization: '\u05de\u05e6\u05d8\u05e2\u05e8\u05d5\u05ea',
                translation:
                  '\u043e\u0433\u043e\u0440\u0447\u0430\u044e\u0442\u0441\u044f',
                transcription:
                  '\u043c\u0438\u0446\u0442\u0430\u044d\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d9\u05d5\u05d3\u05e2',
            vocalization: '\u05d9\u05d5\u05d3\u05e2',
            translation: '(\u043e\u043d) \u0437\u043d\u0430\u0435\u0442',
            enTranslation: 'know',
            transcription: '\u0439\u043e\u0434\u042d\u0430',
            infinitive: {
              word: '\u05dc\u05d3\u05e2\u05ea',
              vocalization: '\u05dc\u05d3\u05e2\u05ea',
              translation: '\u0417\u043d\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0434\u0430\u0410\u0442',
            },
            present: [
              {
                word: '\u05d9\u05d5\u05d3\u05e2',
                vocalization: '\u05d9\u05d5\u05d3\u05e2',
                translation: '\u0437\u043d\u0430\u0435\u0442',
                transcription: '\u0439\u043e\u0434\u042d\u0430',
              },
              {
                word: '\u05d9\u05d5\u05d3\u05e2\u05ea',
                vocalization: '\u05d9\u05d5\u05d3\u05e2\u05ea',
                translation: '\u0437\u043d\u0430\u0435\u0442',
                transcription: '\u0439\u043e\u0434\u0430\u0410\u0442',
              },
              {
                word: '\u05d9\u05d5\u05d3\u05e2\u05d9\u05dd',
                vocalization: '\u05d9\u05d5\u05d3\u05e2\u05d9\u05dd',
                translation: '\u0437\u043d\u0430\u044e\u0442',
                transcription: '\u0439\u043e\u0434\u0418\u043c',
              },
              {
                word: '\u05d9\u05d5\u05d3\u05e2\u05d5\u05ea',
                vocalization: '\u05d9\u05d5\u05d3\u05e2\u05d5\u05ea',
                translation: '\u0437\u043d\u0430\u044e\u0442',
                transcription: '\u0439\u043e\u0434\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d1\u05d9\u05df',
            vocalization: '\u05de\u05d1\u05d9\u05df',
            translation:
              '(\u043e\u043d) \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442',
            enTranslation: 'understand',
            transcription: '\u043c\u0435\u0432\u0418\u043d',
            infinitive: {
              word: '\u05dc\u05d4\u05d1\u05d9\u05df',
              vocalization: '\u05dc\u05d4\u05d1\u05d9\u05df',
              translation: '\u041f\u043e\u043d\u0438\u043c\u0430\u0442\u044c',
              transcription: '\u043b\u0435h\u0430\u0432\u0418\u043d',
            },
            present: [
              {
                word: '\u05de\u05d1\u05d9\u05df',
                vocalization: '\u05de\u05d1\u05d9\u05df',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442',
                transcription: '\u043c\u0435\u0432\u0418\u043d',
              },
              {
                word: '\u05de\u05d1\u05d9\u05e0\u05d4',
                vocalization: '\u05de\u05d1\u05d9\u05e0\u05d4',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442',
                transcription: '\u043c\u0435\u0432\u0438\u043d\u0410',
              },
              {
                word: '\u05de\u05d1\u05d9\u05e0\u05d9\u05dd',
                vocalization: '\u05de\u05d1\u05d9\u05e0\u05d9\u05dd',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442',
                transcription: '\u043c\u0435\u0432\u0438\u043d\u0418\u043c',
              },
              {
                word: '\u05de\u05d1\u05d9\u05e0\u05d5\u05ea',
                vocalization: '\u05de\u05d1\u05d9\u05e0\u05d5\u05ea',
                translation: '\u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442',
                transcription: '\u043c\u0435\u0432\u0438\u043d\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05db\u05d5\u05ea\u05d1',
            vocalization: '\u05db\u05d5\u05ea\u05d1',
            translation: '(\u043e\u043d) \u043f\u0438\u0448\u0435\u0442',
            enTranslation: 'write',
            transcription: '\u043a\u043e\u0442\u042d\u0432',
            infinitive: {
              word: '\u05dc\u05db\u05ea\u05d5\u05d1',
              vocalization: '\u05dc\u05db\u05ea\u05d5\u05d1',
              translation: '\u041f\u0438\u0441\u0430\u0442\u044c',
              transcription: '\u043b\u0438\u0445\u0442\u041e\u0432',
            },
            present: [
              {
                word: '\u05db\u05d5\u05ea\u05d1',
                vocalization: '\u05db\u05d5\u05ea\u05d1',
                translation: '\u043f\u0438\u0448\u0435\u0442',
                transcription: '\u043a\u043e\u0442\u042d\u0432',
              },
              {
                word: '\u05db\u05d5\u05ea\u05d1\u05ea',
                vocalization: '\u05db\u05d5\u05ea\u05d1\u05ea',
                translation: '\u043f\u0438\u0448\u0435\u0442',
                transcription: '\u043a\u043e\u0442\u042d\u0432\u0435\u0442',
              },
              {
                word: '\u05db\u05d5\u05ea\u05d1\u05d9\u05dd',
                vocalization: '\u05db\u05d5\u05ea\u05d1\u05d9\u05dd',
                translation: '\u043f\u0438\u0448\u0443\u0442',
                transcription: '\u043a\u043e\u0442\u0432\u0418\u043c',
              },
              {
                word: '\u05d1\u05d5\u05ea\u05d1\u05d5\u05ea',
                vocalization: '\u05d1\u05d5\u05ea\u05d1\u05d5\u05ea',
                translation: '\u043f\u0438\u0448\u0443\u0442',
                transcription: '\u043a\u043e\u0442\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e7\u05d5\u05e8\u05d0',
            vocalization: '\u05e7\u05d5\u05e8\u05d0',
            translation: '(\u043e\u043d) \u0447\u0438\u0442\u0430\u0435\u0442',
            enTranslation: 'read',
            transcription: '\u043a\u043e\u0440\u042d',
            infinitive: {
              word: '\u05dc\u05e7\u05e8\u05d5\u05d0',
              vocalization: '\u05dc\u05e7\u05e8\u05d5\u05d0',
              translation: '\u0427\u0438\u0442\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u043a\u0440\u041e\u0430',
            },
            present: [
              {
                word: '\u05e7\u05d5\u05e8\u05d0',
                vocalization: '\u05e7\u05d5\u05e8\u05d0',
                translation: '\u0447\u0438\u0442\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u0440\u042d',
              },
              {
                word: '\u05e7\u05d5\u05e8\u05d0\u05ea',
                vocalization: '\u05e7\u05d5\u05e8\u05d0\u05ea',
                translation: '\u0447\u0438\u0442\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u0440\u042d\u0442',
              },
              {
                word: '\u05e7\u05d5\u05e8\u05d0\u05d9\u05dd',
                vocalization: '\u05e7\u05d5\u05e8\u05d0\u05d9\u05dd',
                translation: '\u0447\u0438\u0442\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u0440\u044a\u0418\u043c',
              },
              {
                word: '\u05e7\u05d5\u05e8\u05d5\u05ea',
                vocalization: '\u05e7\u05d5\u05e8\u05d5\u05ea',
                translation: '\u0447\u0438\u0442\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u0440\u044a\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e0\u05de\u05e6\u05d0',
            vocalization: '\u05e0\u05b4\u05de\u05b0\u05e6\u05b8\u05d0',
            translation:
              '(\u043e\u043d) \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f',
            enTranslation: 'is',
            transcription: '\u043d\u0438\u043c\u0446\u0410',
            infinitive: {
              word: '\u05dc\u05d4\u05de\u05e6\u05d0',
              vocalization: '\u05dc\u05d4\u05de\u05e6\u05d0',
              translation:
                '\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f',
              transcription: '\u043b\u0435h\u0438\u043c\u0430\u0446\u0415',
            },
            present: [
              {
                word: '\u05e0\u05de\u05e6\u05d0',
                vocalization: '\u05e0\u05b4\u05de\u05b0\u05e6\u05b8\u05d0',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0410',
              },
              {
                word: '\u05e0\u05de\u05e6\u05d0\u05ea',
                vocalization: '\u05e0\u05de\u05e6\u05d0\u05ea',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0415\u0442',
              },
              {
                word: '\u05e0\u05de\u05e6\u05d0\u05d9\u05dd',
                vocalization: '\u05e0\u05de\u05e6\u05d0\u05d9\u05dd',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0430\u0418\u043c',
              },
              {
                word: '\u05e0\u05de\u05e6\u05d0\u05d5\u05ea',
                vocalization: '\u05e0\u05de\u05e6\u05d0\u05d5\u05ea',
                translation:
                  '\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u043c\u0446\u0430\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d7\u05e1\u05e8',
            vocalization: '\u05d7\u05e1\u05e8',
            translation:
              '(\u043e\u043d) \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442',
            enTranslation: 'absent',
            transcription: '\u0445\u0430\u0441\u042d\u0440',
            infinitive: {
              word: '\u05dc\u05d7\u05e1\u05d5\u05e8',
              vocalization: '\u05dc\u05d7\u05e1\u05d5\u05e8',
              translation:
                '\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0445\u0441\u041e\u0440',
            },
            present: [
              {
                word: '\u05d7\u05e1\u05e8',
                vocalization: '\u05d7\u05e1\u05e8',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u0445\u0430\u0441\u042d\u0440',
              },
              {
                word: '\u05d7\u05e1\u05e8\u05d4',
                vocalization: '\u05d7\u05e1\u05e8\u05d4',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u0445\u0430\u0441\u0435\u0440\u0410',
              },
              {
                word: '\u05d7\u05e1\u05e8\u05d9\u05dd',
                vocalization: '\u05d7\u05e1\u05e8\u05d9\u05dd',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription: '\u0445\u0430\u0441\u0435\u0440\u0418\u043c',
              },
              {
                word: '\u05d7\u05e1\u05e8\u05d5\u05ea',
                vocalization: '\u05d7\u05e1\u05e8\u05d5\u05ea',
                translation:
                  '\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription: '\u0445\u0430\u0441\u0435\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d4\u05d5\u05dc\u05da',
            vocalization: '\u05d4\u05d5\u05dc\u05da',
            translation:
              '(\u043e\u043d) \u0438\u0434\u0435\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
            transcription: '\u043e\u043b\u042d\u0445',
            enTranslation: 'walk',
            infinitive: {
              word: '\u05dc\u05dc\u05db\u05ea',
              vocalization: '\u05dc\u05dc\u05db\u05ea',
              translation:
                '\u0418\u0434\u0442\u0438 \u043f\u0435\u0448\u043a\u043e\u043c',
              transcription: '\u043b\u0430\u043b\u0415\u0445\u0435\u0442',
            },
            present: [
              {
                word: '\u05d4\u05d5\u05dc\u05da',
                vocalization: '\u05d4\u05d5\u05dc\u05da',
                translation:
                  '\u0438\u0434\u0435\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u042d\u0445',
              },
              {
                word: '\u05d4\u05d5\u05dc\u05db\u05d4',
                vocalization: '\u05d4\u05d5\u05dc\u05db\u05d4',
                translation:
                  '\u0438\u0434\u0435\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u042d\u0445\u0435\u0442',
              },
              {
                word: '\u05d4\u05d5\u05da\u05db\u05d9\u05dd',
                vocalization: '\u05d4\u05d5\u05dc\u05db\u05d9\u05dd',
                translation:
                  '\u0438\u0434\u0443\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u0445\u0418\u043c',
              },
              {
                word: '\u05d4\u05d5\u05dc\u05db\u05d5\u05ea',
                vocalization: '\u05d4\u05d5\u05dc\u05db\u05d5\u05ea',
                translation:
                  '\u0438\u0434\u0443\u0442 \u043f\u0435\u0448\u043a\u043e\u043c',
                transcription: 'h\u043e\u043b\u0445\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d1\u05d0',
            vocalization: '\u05d1\u05d0',
            translation:
              '(\u043e\u043d) \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442',
            enTranslation: 'come',
            transcription: '\u0431\u0410',
            infinitive: {
              word: '\u05dc\u05d1\u05d5\u05d0',
              vocalization: '\u05dc\u05d1\u05d5\u05d0',
              translation:
                '\u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c',
              transcription: '\u043b\u0430\u0432\u041e',
            },
            present: [
              {
                word: '\u05d1\u05d0',
                vocalization: '\u05d1\u05d0',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442',
                transcription: '\u0431\u0410',
              },
              {
                word: '\u05d1\u05d0\u05d4',
                vocalization: '\u05d1\u05d0\u05d4',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442',
                transcription: '\u0431\u0410\u0430',
              },
              {
                word: '\u05d1\u05d0\u05d9\u05dd',
                vocalization: '\u05d1\u05d0\u05d9\u05dd',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442',
                transcription: '\u0431\u0430\u0418\u043c',
              },
              {
                word: '\u05d1\u05d0\u05d5\u05ea',
                vocalization: '\u05d1\u05d0\u05d5\u05ea',
                translation: '\u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442',
                transcription: '\u0431\u0430\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e2\u05d5\u05e0\u05d4',
            vocalization: '\u05e2\u05d5\u05e0\u05d4',
            translation:
              '(\u043e\u043d) \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442',
            enTranslation: 'unswer',
            transcription: '\u043e\u043d\u042d',
            infinitive: {
              word: '\u05dc\u05e2\u05e0\u05d5\u05ea',
              vocalization: '\u05dc\u05e2\u05e0\u05d5\u05ea',
              translation: '\u041e\u0442\u0432\u0435\u0447\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0430\u043d\u041e\u0442',
            },
            present: [
              {
                word: '\u05e2\u05d5\u05e0\u05d4',
                vocalization: '\u05e2\u05d5\u05e0\u05d4',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442',
                transcription: '\u043e\u043d\u042d',
              },
              {
                word: '\u05e2\u05d5\u05e0\u05d4',
                vocalization: '\u05e2\u05d5\u05e0\u05d4',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442',
                transcription: '\u043e\u043d\u0410',
              },
              {
                word: '\u05e2\u05d5\u05e0\u05d9\u05dd',
                vocalization: '\u05e2\u05d5\u05e0\u05d9\u05dd',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442',
                transcription: '\u043e\u043d\u0418\u043c',
              },
              {
                word: '\u05e2\u05d5\u05e0\u05d5\u05ea',
                vocalization: '\u05e2\u05d5\u05e0\u05d5\u05ea',
                translation: '\u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442',
                transcription: '\u043e\u043d\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e7\u05e9\u05d9\u05d1',
            vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1',
            translation:
              '(\u043e\u043d) \u0441\u043b\u0443\u0448\u0430\u0435\u0442',
            enTranslation: 'listen',
            transcription: '\u043c\u0430\u043a\u0448\u0418\u0432',
            infinitive: {
              word: '\u05dc\u05d4\u05e7\u05e9\u05d9\u05d1',
              vocalization: '\u05dc\u05d4\u05e7\u05e9\u05d9\u05d1',
              translation: '\u0421\u043b\u0443\u0448\u0430\u0442\u044c',
              transcription: '\u043b\u0435h\u0430\u043a\u0448\u0438\u0432',
            },
            present: [
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1',
                translation: '\u0441\u043b\u0443\u0448\u0430\u0435\u0442',
                transcription: '\u043c\u0430\u043a\u0448\u0418\u0432',
              },
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d4',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d4',
                translation: '\u0441\u043b\u0443\u0448\u0430\u0435\u0442',
                transcription: '\u043c\u0430\u043a\u0448\u0438\u0432\u0410',
              },
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d9\u05dd',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d9\u05dd',
                translation: '\u0441\u043b\u0443\u0448\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0430\u043a\u0448\u0438\u0432\u0418\u043c',
              },
              {
                word: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d5\u05ea',
                vocalization: '\u05de\u05e7\u05e9\u05d9\u05d1\u05d5\u05ea',
                translation: '\u0441\u043b\u0443\u0448\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0430\u043a\u0448\u0438\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d8\u05d9\u05d9\u05dc',
            vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc',
            translation:
              '(\u043e\u043d) \u0433\u0443\u043b\u044f\u0435\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442',
            enTranslation: 'travel',
            transcription: '\u043c\u0438\u0442\u0430\u0439\u042d\u043b',
            infinitive: {
              word: '\u05dc\u05d8\u05d9\u05dc',
              vocalization: '\u05dc\u05d8\u05d9\u05dc',
              translation:
                '\u0413\u0443\u043b\u044f\u0442\u044c/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u0442\u0430\u0439\u0415\u043b\u044c',
            },
            present: [
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc',
                translation:
                  '\u0433\u0443\u043b\u044f\u0435\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u043c\u0438\u0442\u0430\u0439\u042d\u043b',
              },
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc\u05ea',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc\u05ea',
                translation:
                  '\u0433\u0443\u043b\u044f\u0435\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription:
                  '\u043c\u0438\u0442\u0430\u0439\u042d\u043b\u0435\u0442',
              },
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d9\u05dd',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d9\u05dd',
                translation:
                  '\u0433\u0443\u043b\u044f\u044e\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0438\u0442\u0430\u0439\u043b\u0418\u043c',
              },
              {
                word: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d5\u05ea',
                vocalization: '\u05de\u05d8\u05d9\u05d9\u05dc\u05d5\u05ea',
                translation:
                  '\u0433\u0443\u043b\u044f\u044e\u0442/\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0438\u0442\u0430\u0439\u043b\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05d8\u05e4\u05dc',
            vocalization: '\u05de\u05d8\u05e4\u05dc',
            translation:
              '(\u043e\u043d) \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442, \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u0441\u044f',
            enTranslation: 'care',
            transcription: '\u043c\u044d\u0442\u0430\u043f\u042d\u043b',
            infinitive: {
              word: '\u05dc\u05d8\u05e4\u05dc',
              vocalization: '\u05dc\u05d8\u05e4\u05dc',
              translation:
                '\u0423\u0445\u0430\u0436\u0438\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u0442\u0430\u043f\u0415\u043b\u044c',
            },
            present: [
              {
                word: '\u05de\u05d8\u05e4\u05dc',
                vocalization: '\u05de\u05d8\u05e4\u05dc',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442',
                transcription: '\u043c\u044d\u0442\u0430\u043f\u0415\u043b',
              },
              {
                word: '\u05de\u05d8\u05e4\u05dc\u05ea',
                vocalization: '\u05de\u05d8\u05e4\u05dc\u05ea',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0435\u0442',
                transcription:
                  '\u043c\u0435\u0442\u0430\u043f\u0415\u043b\u0435\u0442',
              },
              {
                word: '\u05de\u05d8\u05e4\u05dc\u05d9\u05dd',
                vocalization: '\u05de\u05d8\u05e4\u05dc\u05d9\u05dd',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0442\u0430\u043f\u043b\u0418\u043c',
              },
              {
                word: '\u05de\u05d8\u05e4\u05dc\u05d5\u05ea',
                vocalization: '\u05de\u05d8\u05e4\u05dc\u05d5\u05ea',
                translation:
                  '\u0443\u0445\u0430\u0436\u0438\u0432\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0442\u0430\u043f\u043b\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e0\u05e9\u05d0\u05e8',
            vocalization: '\u05e0\u05e9\u05d0\u05e8',
            translation:
              '(\u043e\u043d) \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f',
            enTranslation: 'stay',
            transcription: '\u043d\u0438\u0448\u0410\u0440',
            infinitive: {
              word: '\u05dc\u05d4\u05d9\u05e9\u05d0\u05e8',
              vocalization: '\u05dc\u05d4\u05d9\u05e9\u05d0\u05e8',
              translation:
                '\u041e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f',
              transcription: '\u041b\u0435h\u0438\u0448\u0430\u042d\u0440',
            },
            present: [
              {
                word: '\u05e0\u05e9\u05d0\u05e8',
                vocalization: '\u05e0\u05e9\u05d0\u05e8',
                translation: '\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u0410\u0440',
              },
              {
                word: '\u05e0\u05e9\u05d0\u05e8\u05ea',
                vocalization: '\u05e0\u05e9\u05d0\u05e8\u05ea',
                translation: '\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u042d\u0440\u0435\u0442',
              },
              {
                word: '\u05e0\u05e9\u05d0\u05e8\u05d9\u05dd',
                vocalization: '\u05e0\u05e9\u05d0\u05e8\u05d9\u05dd',
                translation: '\u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u0430\u0440\u0418\u043c',
              },
              {
                word: '\u05e0\u05e9\u05d0\u05e8\u05d5\u05ea',
                vocalization: '\u05e0\u05e9\u05d0\u05e8\u05d5\u05ea',
                translation: '\u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f',
                transcription: '\u043d\u0438\u0448\u0430\u0440\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d7\u05d5\u05e9\u05d1',
            vocalization: '\u05d7\u05d5\u05b9\u05e9\u05c1\u05b5\u05d1',
            translation: '(\u043e\u043d) \u0434\u0443\u043c\u0430\u0435\u0442',
            enTranslation: 'think',
            transcription: '\u0445\u043e\u0448\u0415\u0432',
            infinitive: {
              word: '\u05dc\u05d7\u05e9\u05df\u05d1',
              vocalization: '\u05dc\u05d7\u05e9\u05df\u05d1',
              translation: '\u0414\u0443\u043c\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0445\u0448\u041e\u0432',
            },
            present: [
              {
                word: '\u05d7\u05d5\u05e9\u05d1',
                vocalization: '\u05d7\u05d5\u05b9\u05e9\u05c1\u05b5\u05d1',
                translation: '\u0434\u0443\u043c\u0430\u0435\u0442',
                transcription: '\u0445\u043e\u0448\u0415\u0432',
              },
              {
                word: '\u05d7\u05d5\u05e9\u05d1\u05ea',
                vocalization: '\u05d7\u05d5\u05e9\u05d1\u05ea',
                translation: '\u0434\u0443\u043c\u0430\u0435\u0442',
                transcription: '\u0445\u043e\u0448\u0415\u0432\u0435\u0442',
              },
              {
                word: '\u05d7\u05d5\u05e9\u05d1\u05d9\u05dd',
                vocalization: '\u05d7\u05d5\u05e9\u05d1\u05d9\u05dd',
                translation: '\u0434\u0443\u043c\u0430\u044e\u0442',
                transcription: '\u0445\u043e\u0448\u0432\u0418\u043c',
              },
              {
                word: '\u05d7\u05d5\u05e9\u05d1\u05d5\u05ea',
                vocalization: '\u05d7\u05d5\u05e9\u05d1\u05d5\u05ea',
                translation: '\u0434\u0443\u043c\u0430\u044e\u0442',
                transcription: '\u0445\u043e\u0448\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e0\u05d5\u05e1\u05e2',
            vocalization: '\u05e0\u05d5\u05b9\u05e1\u05b5\u05e2\u05b7',
            translation: '(\u043e\u043d) \u0435\u0434\u0435\u0442',
            enTranslation: 'ride',
            transcription: '\u043d\u043e\u0441\u042d\u0430',
            infinitive: {
              word: '\u05dc\u05e0\u05e1\u05d5\u05e2',
              vocalization: '\u05dc\u05e0\u05e1\u05d5\u05e2',
              translation: '\u0415\u0445\u0430\u0442\u044c',
              transcription: '\u043b\u0438\u043d\u0441\u041e\u0430',
            },
            present: [
              {
                word: '\u05e0\u05d5\u05e1\u05e2',
                vocalization: '\u05e0\u05d5\u05b9\u05e1\u05b5\u05e2\u05b7',
                translation: '\u0435\u0434\u0435\u0442',
                transcription: '\u043d\u043e\u0441\u042d\u0430',
              },
              {
                word: '\u05e0\u05d5\u05e1\u05e2\u05ea',
                vocalization: '\u05e0\u05d5\u05e1\u05e2\u05ea',
                translation: '\u0435\u0434\u0435\u0442',
                transcription: '\u043d\u043e\u0441\u0430\u0410\u0442',
              },
              {
                word: '\u05e0\u05d5\u05e1\u05e2\u05d9\u05dd',
                vocalization: '\u05e0\u05d5\u05e1\u05e2\u05d9\u05dd',
                translation: '\u0435\u0434\u0443\u0442',
                transcription: '\u043d\u043e\u0441\u044a\u0418\u043c',
              },
              {
                word: '\u05e0\u05d5\u05e1\u05e2\u05d5\u05ea',
                vocalization: '\u05e0\u05d5\u05e1\u05e2\u05d5\u05ea',
                translation: '\u0435\u0434\u0443\u0442',
                transcription: '\u043d\u043e\u0441\u044a\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e7\u05d5\u05e0\u05d4',
            vocalization: '\u05e7\u05d5\u05e0\u05d4',
            translation:
              '(\u043e\u043d) \u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442',
            enTranslation: 'buy',
            transcription: '\u043a\u043e\u043d\u042d',
            infinitive: {
              word: '\u05dc\u05e7\u05e0\u05d5\u05ea',
              vocalization: '\u05dc\u05e7\u05e0\u05d5\u05ea',
              translation: '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u044c',
              transcription: '\u043b\u0438\u043a\u043d\u041e\u0442',
            },
            present: [
              {
                word: '\u05e7\u05d5\u05e0\u05d4',
                vocalization: '\u05e7\u05d5\u05e0\u05d4',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u043d\u042d',
              },
              {
                word: '\u05e7\u05d5\u05e0\u05d4',
                vocalization: '\u05e7\u05d5\u05e0\u05d4',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442',
                transcription: '\u043a\u043e\u043d\u0410',
              },
              {
                word: '\u05e7\u05d5\u05e0\u05d9\u05dd',
                vocalization: '\u05e7\u05d5\u05e0\u05d9\u05dd',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u043d\u0418\u043c',
              },
              {
                word: '\u05e7\u05d5\u05e0\u05d5\u05ea',
                vocalization: '\u05e7\u05d5\u05e0\u05d5\u05ea',
                translation: '\u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442',
                transcription: '\u043a\u043e\u043d\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e8\u05d5\u05d0\u05d4',
            vocalization: '\u05e8\u05d5\u05d0\u05d4',
            translation: '(\u043e\u043d) \u0432\u0438\u0434\u0438\u0442',
            enTranslation: 'see',
            transcription: '\u0440\u043e\u042d',
            infinitive: {
              word: '\u05dc\u05e8\u05d0\u05d5\u05ea',
              vocalization: '\u05dc\u05e8\u05d0\u05d5\u05ea',
              translation: '\u0412\u0438\u0434\u0435\u0442\u044c',
              transcription: '\u043b\u0438\u0440\u044a\u041e\u0442',
            },
            present: [
              {
                word: '\u05e8\u05d5\u05d0\u05d4',
                vocalization: '\u05e8\u05d5\u05d0\u05d4',
                translation: '\u0432\u0438\u0434\u0438\u0442',
                transcription: '\u0440\u043e\u042d',
              },
              {
                word: '\u05e8\u05d5\u05d0\u05d4',
                vocalization: '\u05e8\u05d5\u05d0\u05d4',
                translation: '\u0432\u0438\u0434\u0438\u0442',
                transcription: '\u0440\u043e\u0410',
              },
              {
                word: '\u05e8\u05d5\u05d0\u05d9\u05dd',
                vocalization: '\u05e8\u05d5\u05d0\u05d9\u05dd',
                translation: '\u0432\u0438\u0434\u044f\u0442',
                transcription: '\u0440\u043e\u0418\u043c',
              },
              {
                word: '\u05e8\u05d5\u05d0\u05d5\u05ea',
                vocalization: '\u05e8\u05d5\u05d0\u05d5\u05ea',
                translation: '\u0432\u0438\u0434\u044f\u0442',
                transcription: '\u0440\u043e\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e2\u05d5\u05e9\u05d4',
            vocalization: '\u05e2\u05d5\u05e9\u05d4',
            translation: '(\u043e\u043d) \u0434\u0435\u043b\u0430\u0435\u0442',
            enTranslation: 'do',
            transcription: '\u043e\u0441\u042d',
            infinitive: {
              word: '\u05dc\u05e2\u05e9\u05d5\u05ea',
              vocalization: '\u05dc\u05e2\u05e9\u05d5\u05ea',
              translation: '\u0414\u0435\u043b\u0430\u0442\u044c',
              transcription: '\u043b\u0430\u0430\u0441\u041e\u0442',
            },
            present: [
              {
                word: '\u05e2\u05d5\u05e9\u05d4',
                vocalization: '\u05e2\u05d5\u05e9\u05d4',
                translation: '\u0434\u0435\u043b\u0430\u0435\u0442',
                transcription: '\u043e\u0441\u042d',
              },
              {
                word: '\u05e2\u05d5\u05e9\u05d4',
                vocalization: '\u05e2\u05d5\u05e9\u05d4',
                translation: '\u0434\u0435\u043b\u0430\u0435\u0442',
                transcription: '\u043e\u0441\u0410',
              },
              {
                word: '\u05e2\u05d5\u05e9\u05d9\u05dd',
                vocalization: '\u05e2\u05d5\u05e9\u05d9\u05dd',
                translation: '\u0434\u0435\u043b\u0430\u044e\u0442',
                transcription: '\u043e\u0441\u0418\u043c',
              },
              {
                word: '\u05e2\u05d5\u05e9\u05d5\u05ea',
                vocalization: '\u05e2\u05d5\u05e9\u05d5\u05ea',
                translation: '\u0434\u0435\u043b\u0430\u044e\u0442',
                transcription: '\u043e\u0441\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d0\u05d5\u05db\u05dc',
            vocalization: '\u05d0\u05d5\u05db\u05dc',
            translation: '(\u043e\u043d) \u0435\u0441\u0442',
            enTranslation: 'eat',
            transcription: '\u043e\u0445\u042d\u043b\u044c',
            infinitive: {
              word: '\u05dc\u05d0\u05db\u05d5\u05dc',
              vocalization: '\u05dc\u05d0\u05db\u05d5\u05dc',
              translation: '\u0415\u0441\u0442\u044c',
              transcription: '\u043b\u044d\u044d\u0445\u041e\u043b\u044c',
            },
            present: [
              {
                word: '\u05d0\u05d5\u05db\u05dc',
                vocalization: '\u05d0\u05d5\u05db\u05dc',
                translation: '\u0435\u0441\u0442',
                transcription: '\u043e\u0445\u042d\u043b\u044c',
              },
              {
                word: '\u05d0\u05d5\u05db\u05dc\u05ea',
                vocalization: '\u05d0\u05d5\u05db\u05dc\u05ea',
                translation: '\u0435\u0441\u0442',
                transcription: '\u043e\u0445\u042d\u043b\u0435\u0442',
              },
              {
                word: '\u05d0\u05d5\u05db\u05dc\u05d9\u05dd',
                vocalization: '\u05d0\u05d5\u05db\u05dc\u05d9\u05dd',
                translation: '\u0435\u0434\u044f\u0442',
                transcription: '\u043e\u0445\u043b\u0418\u043c',
              },
              {
                word: '\u05d0\u05d5\u05db\u05dc\u05d5\u05ea',
                vocalization: '\u05d0\u05d5\u05db\u05dc\u05d5\u05ea',
                translation: '\u0435\u0434\u044f\u0442',
                transcription: '\u043e\u0445\u043b\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e9\u05d5\u05ea\u05d4',
            vocalization: '\u05e9\u05d5\u05ea\u05d4',
            translation: '(\u043e\u043d) \u043f\u044c\u0435\u0442',
            enTranslation: 'drink',
            transcription: '\u0448\u043e\u0442\u042d',
            infinitive: {
              word: '\u05dc\u05e9\u05ea\u05d5\u05ea',
              vocalization: '\u05dc\u05e9\u05ea\u05d5\u05ea',
              translation: '\u041f\u0438\u0442\u044c',
              transcription: '\u043b\u0438\u0448\u0442\u041e\u0442',
            },
            present: [
              {
                word: '\u05e9\u05d5\u05ea\u05d4',
                vocalization: '\u05e9\u05d5\u05ea\u05d4',
                translation: '\u043f\u044c\u0435\u0442',
                transcription: '\u0448\u043e\u0442\u042d',
              },
              {
                word: '\u05e9\u05d5\u05ea\u05d4',
                vocalization: '\u05e9\u05d5\u05ea\u05d4',
                translation: '\u043f\u044c\u0435\u0442',
                transcription: '\u0448\u043e\u0442\u0410',
              },
              {
                word: '\u05e9\u05d5\u05ea\u05d9\u05dd',
                vocalization: '\u05e9\u05d5\u05ea\u05d9\u05dd',
                translation: '\u043f\u044c\u044e\u0442',
                transcription: '\u0448\u043e\u0442\u0418\u043c',
              },
              {
                word: '\u05e9\u05d5\u05ea\u05d5\u05ea',
                vocalization: '\u05e9\u05d5\u05ea\u05d5\u05ea',
                translation: '\u043f\u044c\u044e\u0442',
                transcription: '\u0448\u043e\u0442\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d9\u05d5\u05e9\u05d1',
            vocalization: '\u05d9\u05d5\u05e9\u05d1',
            translation: '(\u043e\u043d) \u0441\u0438\u0434\u0438\u0442',
            enTranslation: 'sit',
            transcription: '\u0439\u043e\u0448\u0415\u0432',
            infinitive: {
              word: '\u05dc\u05e9\u05d1\u05ea',
              vocalization: '\u05dc\u05e9\u05d1\u05ea',
              translation: '\u0421\u0438\u0434\u0435\u0442\u044c',
              transcription: '\u043b\u0430\u0448\u042d\u0432\u0435\u0434',
            },
            present: [
              {
                word: '\u05d9\u05d5\u05e9\u05d1',
                vocalization: '\u05d9\u05d5\u05e9\u05d1',
                translation: '\u0441\u0438\u0434\u0438\u0442',
                transcription: '\u0439\u043e\u0448\u0415\u0432',
              },
              {
                word: '\u05d9\u05d5\u05e9\u05d1\u05ea',
                vocalization: '\u05d9\u05d5\u05e9\u05d1\u05ea',
                translation: '\u0441\u0438\u0434\u0438\u0442',
                transcription: '\u0439\u043e\u0448\u0415\u0432\u0435\u0434',
              },
              {
                word: '\u05d9\u05d5\u05e9\u05d1\u05d9\u05dd',
                vocalization: '\u05d9\u05d5\u05e9\u05d1\u05d9\u05dd',
                translation: '\u0441\u0438\u0434\u044f\u0442',
                transcription: '\u0439\u043e\u0448\u0432\u0418\u043c',
              },
              {
                word: '\u05d9\u05d5\u05e9\u05d1\u05d5\u05ea',
                vocalization: '\u05d9\u05d5\u05e9\u05d1\u05d5\u05ea',
                translation: '\u0441\u0438\u0434\u044f\u0442',
                transcription: '\u0439\u043e\u0448\u0432\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05d7\u05d9',
            vocalization: '\u05d7\u05d9',
            translation: '(\u043e\u043d) \u0436\u0438\u0432\u0435\u0442',
            enTranslation: 'alive',
            transcription: '\u0445\u0410\u0439',
            infinitive: {
              word: '\u05dc\u05d7\u05d9\u05d5\u05ea',
              vocalization: '\u05dc\u05d7\u05d9\u05d5\u05ea',
              translation: '\u0416\u0438\u0442\u044c',
              transcription: '\u043b\u0438\u0445\u0439\u041e\u0442',
            },
            present: [
              {
                word: '\u05d7\u05d9',
                vocalization: '\u05d7\u05d9',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0445\u0410\u0439',
              },
              {
                word: '\u05d7\u05d9\u05d4',
                vocalization: '\u05d7\u05d9\u05d4',
                translation: '\u0436\u0438\u0432\u0435\u0442',
                transcription: '\u0445\u0430\u042f',
              },
              {
                word: '\u05d7\u05d9\u05d9\u05dd',
                vocalization: '\u05d7\u05d9\u05d9\u05dd',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0445\u0430\u0439\u0418\u043c',
              },
              {
                word: '\u05d7\u05d9\u05d5\u05ea',
                vocalization: '\u05d7\u05d9\u05d5\u05ea',
                translation: '\u0436\u0438\u0432\u0443\u0442',
                transcription: '\u0445\u0430\u0439\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e9\u05d7\u05e7',
            vocalization: '\u05de\u05e9\u05d7\u05e7',
            translation: '(\u043e\u043d) \u0438\u0433\u0440\u0430\u0435\u0442',
            enTranslation: 'play',
            transcription: '\u043c\u0435\u0441\u0430\u0445\u0415\u043a',
            infinitive: {
              word: '\u05dc\u05e9\u05d7\u05e7',
              vocalization: '\u05dc\u05e9\u05d7\u05e7',
              translation: '\u0418\u0433\u0440\u0430\u0442\u044c',
              transcription: '\u043b\u0435\u0441\u0430\u0445\u0415\u043a',
            },
            present: [
              {
                word: '\u05de\u05e9\u05d7\u05e7',
                vocalization: '\u05de\u05e9\u05d7\u05e7',
                translation: '\u0438\u0433\u0440\u0430\u0435\u0442',
                transcription: '\u043c\u0435\u0441\u0430\u0445\u0415\u043a',
              },
              {
                word: '\u05de\u05e9\u05d7\u05e7\u05ea',
                vocalization: '\u05de\u05e9\u05d7\u05e7\u05ea',
                translation: '\u0438\u0433\u0440\u0430\u0435\u0442',
                transcription:
                  '\u043c\u0435\u0441\u0430\u0445\u0415\u043a\u0435\u0442',
              },
              {
                word: '\u05de\u05e9\u05d7\u05e7\u05d9\u05dd',
                vocalization: '\u05de\u05e9\u05d7\u05e7\u05d9\u05dd',
                translation: '\u0438\u0433\u0440\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0441\u0430\u0445\u0430\u043a\u0418\u043c',
              },
              {
                word: '\u05de\u05e9\u05d7\u05e7\u05d5\u05ea',
                vocalization: '\u05de\u05e9\u05d7\u05e7\u05d5\u05ea',
                translation: '\u0438\u0433\u0440\u0430\u044e\u0442',
                transcription:
                  '\u043c\u0435\u0441\u0430\u0445\u0430\u043a\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05de\u05e8\u05d2\u05d9\u05e9',
            vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9',
            translation:
              '(\u043e\u043d) \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442',
            enTranslation: 'feel',
            transcription: '\u043c\u0430\u0440\u0433\u0418\u0448',
            infinitive: {
              word: '\u05dc\u05d4\u05e8\u05d2\u05d9\u05e9',
              vocalization: '\u05dc\u05d4\u05e8\u05d2\u05d9\u05e9',
              translation:
                '\u0427\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c',
              transcription: '\u043b\u0435h\u0430\u0440\u0433\u0418\u0448',
            },
            present: [
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u043c\u0430\u0440\u0433\u0418\u0448',
              },
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d4',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d4',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442',
                transcription: '\u043c\u0430\u0440\u0433\u0438\u0448\u0410',
              },
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d9\u05dd',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d9\u05dd',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0430\u0440\u0433\u0438\u0448\u0418\u043c',
              },
              {
                word: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d5\u05ea',
                vocalization: '\u05de\u05e8\u05d2\u05d9\u05e9\u05d5\u05ea',
                translation:
                  '\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e\u0442',
                transcription:
                  '\u043c\u0430\u0440\u0433\u0438\u0448\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
          {
            word: '\u05e8\u05d5\u05e6\u05d4',
            vocalization: '\u05e8\u05d5\u05e6\u05d4',
            translation: '(\u043e\u043d) \u0445\u043e\u0447\u0435\u0442',
            enTranslation: 'want',
            transcription: '\u0440\u043e\u0446\u042d',
            infinitive: {
              word: '\u05dc\u05e8\u05e6\u05d5\u05ea',
              vocalization: '\u05dc\u05e8\u05e6\u05d5\u05ea',
              translation: '\u0425\u043e\u0442\u0435\u0442\u044c',
              transcription: '\u043b\u0438\u0440\u0446\u041e\u0442',
            },
            present: [
              {
                word: '\u05e8\u05d5\u05e6\u05d4',
                vocalization: '\u05e8\u05d5\u05e6\u05d4',
                translation: '\u0445\u043e\u0447\u0435\u0442',
                transcription: '\u0440\u043e\u0446\u042d',
              },
              {
                word: '\u05e8\u05d5\u05e6\u05d4',
                vocalization: '\u05e8\u05d5\u05e6\u05d4',
                translation: '\u0445\u043e\u0447\u0435\u0442',
                transcription: '\u0440\u043e\u0446\u0410',
              },
              {
                word: '\u05e8\u05d5\u05e6\u05d9\u05dd',
                vocalization: '\u05e8\u05d5\u05e6\u05d9\u05dd',
                translation: '\u0445\u043e\u0442\u044f\u0442',
                transcription: '\u0440\u043e\u0446\u0418\u043c',
              },
              {
                word: '\u05e8\u05d5\u05e6\u05d5\u05ea',
                vocalization: '\u05e8\u05d5\u05e6\u05d5\u05ea',
                translation: '\u0445\u043e\u0442\u044f\u0442',
                transcription: '\u0440\u043e\u0446\u041e\u0442',
              },
            ],
            ruTopic: ['\u0413\u043b\u0430\u0433\u043e\u043b\u044b'],
            enTopic: ['Verbs'],
          },
        ];
      function wt(n) {
        return { type: ct, item: n };
      }
      function yt() {
        return { type: st };
      }
      function gt(n) {
        return { type: ut, item: n };
      }
      function bt() {
        return { type: pt };
      }
      var Tt = e(184);
      var zt = function () {
          var n = Qn(),
            t = x(),
            e = h(function (n) {
              return n.currentDeckReducer;
            }).currentDeck;
          return (0, Tt.jsx)('header', {
            className: 'header',
            children: (0, Tt.jsxs)('div', {
              className: 'header__content',
              children: [
                (0, Tt.jsx)('h2', {
                  className: 'header__title',
                  children:
                    '(\u041d\u0435)\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0416\u0435\u043d\u0435\u0447\u043a\u0438',
                }),
                (0, Tt.jsx)('img', {
                  src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAQ7ElEQVR4nO1dB5gT1Rb+F33vUZbdpXdBFBQREZCqSBesWBBFBUVEVIoC0kSKSlNQAcVCtSAqFhBEEEVAQEU2MytNsAMiKmXbDCoo533/3SyEkElmNtkku875vvOhm5nk3nvm9P/eAVxyySWXXHLJJX8aA6DiKX91KSZUAsCfAHq56x8fdCWAIwDeiPVAXMqhqQCeBbAfQBHv31yyoNEALs7n1dkG4CIAXwNo6EoiOO0BMC3Ci1TEK4ARAFYB2Ov9GzXlewDTAVwNoKQrnJOpLoDDALZHcGHGATgAwPSaKfqPRB9BUUOGAdgB4CiAtQDKuILJoQcAzALwO4BqEVqUJgAmA9ABpANYBOAWnwfgOQDfAvgVwHwA3QGc5gokh5YB6ALgTQB35MOilPcKIwtAMoC3AcwAcAGABFcIJ9N/AWQCKA2gt/dpdUyy/+uSYnoaiZl2vRh6TzH1fmLowxTn/HfPypXKp13VseWQhISEQwAquYIITK0AfOn97+peExL0qRVZeJqYehMxtOFiaivE0PaIqUsonjxhoDRuVFfq1a0l3nuW5whMa8zv/DcLKAlAZ6+z/ckb8ubSTgDrAYwC0CzXrotIEcn2tBNTf1lMPcOOAPxZ//wN4VcNGtA9wOdaupjaPMlOa8vfQiGnBG+OMRbABq8tXwlgCIAGfhpRHEAnAFMAfJWQkJBev17t7U9NGpz+/daljoXgy8cMTcqXKy0fLHo2+LWGtlsMbZRkbC6FQkpNveGneAXSAcB/gt0g2Zsr/Lhj2fSpk4f8UbFCGfVkn1u7RlgCIW9NfVuOZqbavF7LElObJNlpDAoKHRUF0A7ARACpADIALAHQH0C53IuSkoo1vqJji5WNGpz3d1LJEnJFx0vkqUmDZcumt8IWRp7Z0Azla2T16SjEVBbATQCWe30JjmSmNitTOvno8ME9ZfWKWfJX+pe2F0377HWZ9NgA6dOri9x3d1d5aEgveWL8AzLz2VGy8NUn5LNPXpYDe9aEKRxNYwCAQk71AXwjpna/tuH1I7VrVXe0SMbvn8kN17aTM2tUkcEDusvz00bKjKdHyPix/WTIA7dL757XS5fr2kuTi86XlOSSUq5sKbn6ilZKWF+seUX+yfY41Bb9qJj62ELr+LP2ri5bKiXpzx+2va8WqW+fmxwtUI9brlJsV5v2frdS3po/We7ve4ucf97ZUqVyeel3z81KI50JR1sqGVuZOxUeksOe6mJqO27pernMmjFaOrRtJovffNr2oqT/8ql66qkleTVDO9MWy8RHB8iFF5wjZ9Wsqh6K/btX271/uxxOPQOFgSTLU0eFl6Yu8158RK65spWUTCwhGfvW2V7MH7cvkxrVK4fpF07wl5/Ol57dO0uplCSldYzIbNz3i2R7WIIpuCTZel0x9QO5k/r52w+lSJEi0qJZfcd5RelSyfLT1x9ETCjkQ3vXqgCB4fb1ndupgCHEPQckSzsPBZHE/KqqGPou/0mdd25NGT3ibseLN3nCQGnbqon8cXBjRIVCNvd/LtMmD5WqVSrIVZdfKp4NC6yvN7SfaYJRkEgyN5ahzwg0ofcWTpW8ZOJ/Z3nk1puuUAKd+8JYVR6h5kRSMH8e2ijPTX1IKlcqJ927XSm7diy3unZ7gXH0IpIghv5epJ9iydWU8QOVgy9erKgUL15UOWn6g1dmj5N9P3wckd/I/m2D0uKyZVKEuZKFv1vGuSLeyVsGzxdh7ExbrOz90renKe3gwtG88Km+8foOys90bN9CXp0zLqyIzDd07nX7tVKhfBmZ+sQQpUEnXXM4bRDimcRMayqGfiSvC5D123pZ9MZTlp+PeaiPysytPj984At54+VJyg9Qi5h3RCIQYDmHSWb1MyrJSzMfVeZTfabm6mEvP/4op3eh6eFMfMG8iWohj0/Yj4cN6ikTHulv67tovmhuypROViZt85cLlUAbXlhHmToOmeE3eyYMxWmiVn3wohKq1Xeu/3ietLy4odStc5Z6cHJ8mOaJyx6LmPrAcJ/Ent07q4X6fPUrAT9fvniG8hlWArNKKu+5q4vyOax/8btzzRl9Q9oXb8q7rz8pIx68U4XjiYnFlYDmzx2vNDbQdy579xk1DgYYLN/s3rliMOKJWEIXU88MVyDVqlZU5uax0fdZXkPTwZxh3UdzbWfazZrUU6bGzrWZv65XAQLHQZ90b+8bLRNHlmHou0qlJB1LSiwxB0DzuADmiak9Ea4wvtYXyRnVKiotuPSShpbX0bGOG9NX6tU9W04//TRl4pif0JRtWvfaKaHwjrRFqiCZlxCZTn3syHukUsWycu3VbZQ2WV3X7cZOhBdtBvAzgGcAtIkJuoXxeE6DJ2+CoK1nVHRZu+Zy1x3XqSSNZoMm5JPlM0+NbExdNZ5Yj3pnwRQ5+PMaZUIG9r9NNbZYRZ4+Zdjx+yikpo3rhfWw0K8wymJ+ct01ba00JtPbeawNYDiATV6408woIDV9BGJoo51OkOEqS+iswtIssKzOcvp+rwnasOoleXhYb7WQdLydOrRQ0VPu/SuXPi8XN78w4HfTR9AHsIDJ/6cfYD7x64/h5ygUzJMTB6n2cMDgwtAf9lseZvQD/bAE+SgMAhK8hUMnzEVic+nss6qpGJ8ZOG18+i+fqs+/2rhQ9Tlat7xIaQv/fXnWY8fvn/3cGJUfBPsN3zL9o6PuU37kt59WhS0UMh8cam8AgeyKaf9EsrX24U6OlVx2+7jofXp1UU8hW7o0QTRFgRI8agHNk/2eua58Aau7na9qLS9MH+mo2uyIs/U2sRNIDlQnIhPZ5nlHldhpji5p0SDk9TRzXFxWkO3+BjXw9ZcmSbeunZRmUjCRF4o2NzbCkNWn5xU3ZcVVq1RQIe0jD98b8tojGZuOJ34339hR3n9nuvqbk6iOSSGbVhEWSHpMEkVVJonw03X7rVdLQkKCcupOnnrWsujk6WzZst2907JKe0q4Sk2JPNIlBuUUMbQRwSb64jMPq1Bx49pXbU9k/tzxkpyU6Mg3+DL79blaw+TSzvdMmThIBRURFYihD42+QIiXDTAYliEYZt5x2zXS/96b5ZxaNaRVy0ZqsUJNJGPfOgVMCHdB6FdY9WXCyMw72LXMY8Lt1wfgZdEXiKHvtTIBvhktER6M3Yn6sMp084OPGZo8eH8PleuEcvxOQRehNUTbHV1hcEuAoR3zHwgzZBbyAg3y7demKGERIxUtoYipK7NZ88yqqpdidQ2jLWK6IiiQYyJbE6MnELU/49SBsBBHB2s1UNap6HjZxo2mUOY8P0aVPRhaW1UOaGbDBXmfLBT9wmgK5IZAgxg59K6QAAbWllhEZKIWCrC24r0ZKgxuUP9cVUZhdk5NC1TfCsVvvvK4EopVRMXKAHObCD4I10VPIDk7l04qUxB4wAIhI5xQ0Q3rSnT0bS5tbAkkmDZ5qCogsmRCQAOzc/Ye2rdpqrSM/uHbzUsiJhSiWXIBFJHREK1H9ARievrn/jDrQ/Xr1VbodS5em1aNbcF8qB3ERHFxWe31/Szz1/VKsFbC+m7LUhXe8l5qjd28g0xAtpVQtmvvqlI7tTACQukbPYEY2kO5P8zwlpVb33I6nSgho3YGzsiLGTMbPQe8qPXcVqmdMJlVYQqP/9o1ZblCYVvX/zNqI8cfNoLF0EbERCCBStt8ghnm2s0puJA0QVUql5clb01VvW2aM7uT5+LR19Dk2I3iWNOiUGygFQuAQHxMFvsZv+/65JQBsYTOMPfDJc/ZnsTaD+eoBhO7cykpJR1XZOkjCBNi3mPnegIVaPY+ev+F/BBK35g4dUYmzz41POCguHmGE2Znz+5E/ji4UXULixX9n7Rt3cRx65Wwn0YN6qiCI7uPoa6nRlFTXps3IdIa0iMmYS9jey46HWKggdF5MsxlR9DJhNavmieJJYop4AP74k7upVAJBW3e9AJVGgl1PedAzBXxwwUz7PVLDInSYPcvkOkiM+Hi5wS5Odksk7Fvneos0k+xCOgE/kPNGjrwDuVX7PRM9nyzQmkWNZ6o+IKVGMrWRP/SyajhvdVmfasiHYXFruDll13seMLfb10q7Vo3UdvVnJbKuTGn1tlnyC/ffxTyWvZTCKajthBmVGBKJ0oohOX7PZEEul3ZqaVlYsi/czM/tYWRmJNJHjM01erl3kE2sJw0o9iEoqbY7akTO8zggNl7nloBhr4rqsKwKr9zkZiBN29aP6h5YXRj5XMkBNP8ECx3wfm1VBnG7n3UYGpYMKhooBI+k14rJGWcld95/sipCVfZMqWUBnS94bI8N5rEBvO3mFUPuK+brV4GNYyOnj7CiR9jXsSghPfa3m5t6EOiLxAeCuNn52lOaONZ2yI2iiVtJ6ZFHDL9EsNb7hO0cz3HwoQzGILeKrjgrmGaMbYYQu8E9jSKFdo9PXcQPIWB8H/f7Jv4WDZ/7ISe0eIDe9YoJ88Ws9N7GR6zxEON4f2BzbJ2KGZoeHWqjo9AaD58B8cBs87F2lA+ZcOSF2ZewypCXiOpT1fOUUh5bktgQdXPCsyOiTCUQHjEkXcgxLuyFhXInhPwRqHw31gLQ3x6LRxvOEVEPmRsB1Bj+ECqUs9hrVXsBOIHJSWM5+47bwg4eD5Fjo+3MPOXGT7zSQ/Xz6WuXyA8FCElueQ/CQkJs7znQMZIKDxvyqcVylJ6sDZuPPE/2R7Vx2GlORLft83zzgTvUbU7vNwj+gI5lJrsi2BkwsdohEjCWC+42GBWDdiZZBgd5ndlSrqe4nd2WMeoC0QJxdQe9x0cwXH5WNaWSDObZByvFQjCHmuPIV6IJ7H543wZwTCSIeIj1gsuNpgdToL6rPYVhhDGIR6WgHginoPlP1CCEOqcc6YKh51UaiVGzP48E808CORexBt5E0UtkI1mpZZJYu6GnHjlPw5uVCV4ZuMO7kuNy23RJHUuboCDA1jTeqDfrWr/Rx4KdRJNJgaZpnbNitmhrze0v2JSJnFCYmgPBivUcbLsOcRbTiI+TGHQyQdCpfgxz7IvEIfPLA7WmSPEh6C6SO35k3xgolLYPuZ4A1+jLS0Qh8+c2Cqtb7eaLE0YcVTcMRVWZ87MX2aDikdxMOH1E8ZWv5wj/klMvYoY+k/BJkz8FREfRDBG+uwriRBzIyr3mRyv0fEs+YJ6/iKPw/M94i8QEwbKLcvcwJkeh1EYfR0PNGDN6+DetQd4hiQK/iGYpx7158vsnTBXqV2ruh1HGnWm9vbrc3N20aL//RHAuSjoJKanspja5lATf3XOONV1jDhoLXzeJoe3VPO+hOa3QvFOEuXoDW1JqMlv2fSW6p3Q6ceFX2HEeLIDr1Jo3tajQmKWWFRCFbzNeuklDVVP3i5KJB8EcTTnYP4CEtqGndHzJLYQZYxuXTspOKgVIjIfOTXuM/B86jb2CBaFHTM0Zbp4romTIzTyzurtO/fHbW0qGiRZWjkx9fHBTqSbPGGgqoNFdFPmyZwhpjZOslL5ag2XlGDS9RSeN2UVIj/z5DCFuXUKQQ3hJ3aJoY9k19OVgpXGCF8KprfJgRidwH3l7idnu9UOcDqIWTokpjZHsvXWhfbdIPnbY/FcxLNDxNQ/4BPNk9x4OoMtBD1R6Dkat4zwTrWN4t/sH/KDRNJK1KxRZX6limW3GL9vuJNbx3xeLNlXDO12bpYRI62BSCrfBOdSFKgIgKXet0G7FCeU7H05ZddYD8SlE8SXVe7zvpTYpTihxwEsiPUgXDpBxbymq73P31yKMd0E4N1YD8Klk8nNtl1yySWXXHLJJZdcQmD6P15v5EsE7XueAAAAAElFTkSuQmCC',
                  alt: '\u0418\u043a\u043e\u043d\u043a\u0430',
                  className: null !== e ? 'header__icon1' : 'header__icon',
                  onClick: function () {
                    t(yt()), n('/');
                  },
                }),
              ],
            }),
          });
        },
        kt = e.p + 'static/media/github.f4fd581b1c3f48bcfae2.png';
      var St = function () {
          return (0, Tt.jsx)('footer', {
            className: 'footer',
            children: (0, Tt.jsxs)('ul', {
              className: 'footer-wrap',
              children: [
                (0, Tt.jsx)('li', {
                  className: 'footer__link',
                  children: (0, Tt.jsxs)('a', {
                    href: 'https://github.com/krokodila888',
                    className: 'footer__link1',
                    target: '_blank',
                    children: [
                      (0, Tt.jsx)('img', {
                        className: 'footer__social-icon',
                        src: kt,
                      }),
                      '\u041c\u043e\u0439 \u0413\u0438\u0442\u0445\u0430\u0431',
                    ],
                  }),
                }),
                (0, Tt.jsx)('li', {
                  className: 'footer__link',
                  children: (0, Tt.jsxs)('a', {
                    href: 'https://t.me/e_kurakina888',
                    className: 'footer__link1',
                    target: '_blank',
                    children: [
                      (0, Tt.jsx)('img', {
                        className: 'footer__social-icon',
                        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG30lEQVR4nO1YaVAURxQej9KyYlLGY6d7QfBAEK+oEDQK09wqWliFguIR7wuCgiaiiRZ4EGFnMDHeFY+yQlGlMd4msRKNqDFqNCrRxDOaVaZBI+7MYjTl0ale3NnZ3dnlUiEpvqr3Z2Ze9/def/1e9zBMPepRj3rU4/8CADh/FnJLAEDHWYBKAeTMLOROA8AlMUx8I6YuwtsbtYAQpbIA/QIgIq6MBdxOhmEaMHUFEKLOAKAVAHJl7ojbBaFHI2uVdJcuXZroIEpkAXdMO8voAQtQHgBcnE4X3KF16xAIIFql+uZgrRD39Az3sGgbctiFPM5CiKa0atXvdUdflkXtVN/df5W8G7AsF8ZCbjuA3GONbP8DAJcPYWh/d4PM2V3QXhXAw1fCnC69pXpoZ/sWAGiBThfOavkSQhoIRXIwj6U1PJbuZpy9rvh6+8Y84bE5/KUHwLIhyQ7En1H9AhA6jGFQYy2fT27cbyGI0mxelK8KWCZWS/v2pDJOj7CJhMfSI+G25Psi+TqVNr0+zO+53iXLJgScvytnHpu78VhaJ4hymZq41cav36EEEDp+oeUZj+W8GjFu2TLoDRZyM1nAXaLNRqfnYp2/smRas25vI6QRL8pxvCgd0iKttth5nykBxGWuf/5culUt4m08kU957bZk1iYRwOVXxt8ik2JpFi/KN7KuFpORhi0k+8ZdtwEEj5yrzDN5y77nKyD9XRXeDXR6FAkgtxdA9FRjU/4FIRfiboCcovu9BVHeJGDpISXw3o4C0qnncItlXRHdBuDfZ5Qy19yC89bnpRWy9vEZ2BQA7l0AUaFmZwToig5ys1g26jUt/4wLpIlQbErkRflHKxma9ejkZQTqQ4lfQDxZcOqKW/KGW/eIh1eEZT7oEUayb5avFi9K51wSb9MGNWchWsQCdE+D+FO6EjrIRbnS96fFZpbHcjqPJaOaTPJXh4nPW8Ms43TtN4ZkFt5wS57a/OMXlblpwNbnPJa2aZJn2dA+AKLrGsQlqn26B1wFLoimAAFL660ysWUdk8hpS2ylEI0niy8aKyQvYJlMzz+g+L0zLE0dwGIN8mFdaUWxJ85dozKhVUeL9IorpGkuNserZaK2pC8PKVmn1it6SoWaF1QWn7VR8Y2Zk2t7V2Qa7UTm+SYt35gQ3QEgZJqrprP8ThnksZTJY+mO1sTlWV9st4qBg5PJx9dKKk1ewDKJmGobY+zKrbZ3oilAIwBbadR5BPfQlEl5i98uiNJjV5MmbTtEfHrE2ZHvG5daYbkUNKz3gKnKGDP3HLNu4GerSkqaO0uIZt1WYcao3xlKygAvyrvdTUalETFlkVO1Ck6cS3KM96pMXsAyCRo60zKGvm0kWXq5yH0TYyG31mHykyxEKUPmrX7bsaI42oyt3ztl3dr6c4yl1SIvYJksPH3V0olTdhao5CN9pxkAhKg1C9AZpwqkD7VsvoTszeTDn36zmyD9yHlLhrX6RNT0pcRw21Rt8oIrE+WVjCvQagMAygEQya6ude06DyHduXGaGVfIz8iiWn3x5DE1czJTEby8gt+kVYgF6IC+bXil7qtW6xw0okayESqyYnMEUxVknLu2auKG3SRk9HzSoUusHdm2HaJJ+ORMuxMjPXy9CKJzfzhLYmYLJO2bE3bPc40PPKoUQK6RNFNXoEW//knSjxSShWeuKRpPLzinBEArRur+4zUOwC8woVyyfkPU+pfpjY2pKqiToVge6qrjUguISVKC8GwfTcat3V5t8osvGpWxvDoOsO0nUT7B1BS8WOptKJJSBSwdEUTpqXXSj05dJh27DbWTWL+EOZU6tAkOlrL7qN3xw/qcF+WNNQ7ALhhs1vGiPFzA0hIBS2tn7ju6xrvTIKM6CG/fwWTC57uqFMCo3DzFPzopSyUhaTbzsuHp2bcZC7nlQB9KL/IKkf4jPiCZhTcrFUDUjCzFLzE3T3luKDJFM68K3n6xYb49hz2y6yF+Q8jEjXsqDKA7N87pDFStClRTTF3+BQybmGGktynH8xGtZoIG+UUXjJYbm7WiLfvjbuWvkS8DGYQ0HLMif7VfYMIzx44+adNepwDiMtcp3wTFptg2MJaOMrWJ2V+f6hU+ORNbs6smmbLrCFl6qYhM2ryPeLaLVt5N2mSTG/1Tx9Q26GokLNuc6xsQb7caQMN6hE6wOwzy2Fy7v9bVSN1/MjBy+lLs4R2lSZ4eFO3/WEgPc42mlkxdQgYhjd8/eDp7UBr/xL9PIvHyGUi6BY8lMWm886VflDYwdRXLsbkrj+WfXZVUepmiDZOpy8ggpKGh2DSKx9LvDuQPG0pMHZn/EnLuSJ3oz4Ocuw/0tc2lHkwl8C+LZWVbft63UQAAAABJRU5ErkJggg==',
                      }),
                      '(\u043f\u0438\u0448\u0438\u0442\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445)',
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        xt = e.p + 'static/media/photo1.e95f1542237162de4ce5.jpg';
      var Et = function () {
        var n = x(),
          t = Qn();
        function e(e) {
          n(wt(e)), t('/topics/'.concat(e.enTopic));
        }
        return (
          h(function (n) {
            return n.currentDeckReducer;
          }).currentDeck,
          (0, Tt.jsxs)(Tt.Fragment, {
            children: [
              (0, Tt.jsx)('section', {
                className: 'aboutMe__content',
                id: 'AboutMe',
                children: (0, Tt.jsxs)('div', {
                  className: 'aboutMe__text-block',
                  children: [
                    (0, Tt.jsx)('div', {
                      className: 'aboutMe__column',
                      children: (0, Tt.jsxs)('div', {
                        className: 'aboutMe__column1',
                        children: [
                          (0, Tt.jsxs)('p', {
                            className: 'aboutMe__status-text',
                            children: [
                              '!\u05e9\u05dc\u05d5\u05dd',
                              (0, Tt.jsx)('br', {}),
                              '\u042f \u0416\u0435\u043d\u044f, \u0438 \u044f \u0443\u0447\u0443 \u0438\u0432\u0440\u0438\u0442.',
                            ],
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'aboutMe__text',
                            children:
                              '\u0410 \u0435\u0449\u0435 \u044f \u0443\u0447\u0443 JavaScript \u0438 \u0445\u043e\u0447\u0443, \u0447\u0442\u043e\u0431\u044b \u043e\u0434\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0435 (\u0438 \u0431\u043e\u043d\u0443\u0441\u043e\u043c - \u0447\u0442\u043e\u0431\u044b \u043e\u0434\u043d\u0430\u0436\u0434\u044b \u043c\u0435\u043d\u044f \u0432\u0437\u044f\u043b\u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u0432 \u0430\u0439\u0442\u0438). \u0411\u0443\u0434\u0435\u0442 \u0437\u0434\u043e\u0440\u043e\u0432\u043e, \u0435\u0441\u043b\u0438 \u044d\u0442\u0430 \u0448\u0442\u0443\u043a\u0430 \u0435\u0449\u0435 \u043a\u043e\u043c\u0443-\u043d\u0438\u0431\u0443\u0434\u044c \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f.',
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'aboutMe__text',
                            children:
                              '\u041f\u043e\u043a\u0430 \u0441\u043b\u043e\u0432 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u0443\u0447\u0435\u0431\u043d\u0438\u043a\u0443 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445. \u0421 \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f)',
                          }),
                        ],
                      }),
                    }),
                    (0, Tt.jsx)('div', {
                      className: 'aboutMe__column',
                      children: (0, Tt.jsx)('img', {
                        src: xt,
                        alt: '\u0424\u043e\u0442\u043e \u0416\u0435\u043d\u0435\u0447\u043a\u0438, \u0443\u0436\u0430\u0441\u043d\u043e \u0441\u0438\u043c\u043f\u0430\u0442\u0438\u0447\u043d\u043e\u0435',
                        className: 'aboutMe__photo',
                      }),
                    }),
                  ],
                }),
              }),
              (0, Tt.jsx)('section', {
                className: 'decks__main-content',
                id: 'Main-decks',
                children: (0, Tt.jsxs)('div', {
                  className: 'decks__content-wrap',
                  children: [
                    (0, Tt.jsxs)('div', {
                      className: 'decks__item',
                      onClick: function () {
                        e({ ruTopic: '\u0412\u0441\u0435', enTopic: 'All' });
                      },
                      children: [
                        (0, Tt.jsx)('p', {
                          className: 'decks__main-item-text',
                          children:
                            '\u0412\u0441\u0435 \u0441\u043b\u043e\u0432\u0430',
                        }),
                        (0, Tt.jsx)('p', {
                          className: 'decks__grey-item-text',
                          children:
                            '\u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c',
                        }),
                      ],
                    }),
                    (0, Tt.jsxs)('div', {
                      className: 'decks__middle-item',
                      onClick: function () {
                        e({
                          ruTopic: '\u0413\u043b\u0430\u0433\u043e\u043b\u044b',
                          enTopic: 'Verbs',
                        });
                      },
                      children: [
                        (0, Tt.jsx)('p', {
                          className: 'decks__main-item-text',
                          children:
                            '\u0413\u043b\u0430\u0433\u043e\u043b\u044b',
                        }),
                        (0, Tt.jsx)('p', {
                          className: 'decks__grey-item-text',
                          children:
                            '\u0438 \u0438\u0445 \u0444\u043e\u0440\u043c\u044b',
                        }),
                      ],
                    }),
                    (0, Tt.jsxs)('div', {
                      className: 'decks__item',
                      onClick: function () {
                        e({
                          ruTopic: '\u0427\u0438\u0441\u043b\u0430',
                          enTopic: 'Numbers',
                        });
                      },
                      children: [
                        (0, Tt.jsx)('p', {
                          className: 'decks__main-item-text',
                          children: '\u0427\u0438\u0441\u043b\u0430',
                        }),
                        (0, Tt.jsx)('p', {
                          className: 'decks__grey-item-text',
                          children:
                            '\u0438 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u043a \u043d\u0438\u043c',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Tt.jsxs)('section', {
                className: 'decks__content',
                id: 'Decks',
                children: [
                  (0, Tt.jsx)('p', {
                    className: 'aboutMe__title-text',
                    children:
                      '\u0427\u0430\u0441\u0442\u0438 \u0440\u0435\u0447\u0438',
                  }),
                  (0, Tt.jsx)('div', {
                    className: 'decks__content-wrap',
                    children: ft.map(function (n, t) {
                      return (0, Tt.jsx)(
                        'div',
                        {
                          className: 'decks__item',
                          onClick: function () {
                            e(n);
                          },
                          children: (0, Tt.jsx)('p', {
                            className: 'decks__item-text',
                            children: n.ruTopic,
                          }),
                        },
                        t
                      );
                    }),
                  }),
                  (0, Tt.jsx)('p', {
                    className: 'aboutMe__title-text',
                    children: '\u0422\u0435\u043c\u044b',
                  }),
                  (0, Tt.jsx)('div', {
                    className: 'decks__content-wrap',
                    children: vt.map(function (n, t) {
                      return (0, Tt.jsx)(
                        'div',
                        {
                          className: 'decks__item',
                          onClick: function () {
                            e(n);
                          },
                          children: (0, Tt.jsx)('p', {
                            className: 'decks__item-text',
                            children: n.ruTopic,
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var _t = function () {
          return (0, Tt.jsxs)(Tt.Fragment, {
            children: [
              (0, Tt.jsx)(zt, {}),
              (0, Tt.jsx)('main', {
                className: 'main__content',
                children: (0, Tt.jsx)(Et, {}),
              }),
              (0, Tt.jsx)(St, {}),
            ],
          });
        },
        Ct = e.p + 'static/media/arrow2.6fde811e2df671bc63b5.png';
      var Nt = function () {
        var n = Qn();
        return (0, Tt.jsxs)(Tt.Fragment, {
          children: [
            (0, Tt.jsx)(zt, {}),
            (0, Tt.jsxs)('section', {
              className: 'pageNotFound',
              children: [
                (0, Tt.jsx)('h3', {
                  className: 'pageNotFound__title',
                  children: '404',
                }),
                (0, Tt.jsx)('p', {
                  className: 'pageNotFound__text',
                  children:
                    '\u0422\u0443\u0442 \u043f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442.',
                }),
                (0, Tt.jsxs)('div', {
                  className: 'deckItem__arrow-container',
                  onClick: function () {
                    n('/');
                  },
                  children: [
                    (0, Tt.jsx)('img', {
                      src: Ct,
                      alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                      className: 'deckItem__arrow',
                    }),
                    (0, Tt.jsx)('p', {
                      className: 'pageNotFound__text',
                      children:
                        '\u0412\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e.',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function Ot(n, t, e) {
        return (
          (t = A(t)) in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function Pt(n, t) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function jt(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pt(Object(e), !0).forEach(function (t) {
                Ot(n, t, e[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
              : Pt(Object(e)).forEach(function (t) {
                  Object.defineProperty(
                    n,
                    t,
                    Object.getOwnPropertyDescriptor(e, t)
                  );
                });
        }
        return n;
      }
      var Lt = e.p + 'static/media/repeat.28ca11397e13f616df0e39e118af462a.svg';
      var At = function (t) {
          var e = t.words,
            r = t.handleCloseModesClick,
            o = (x(), Q((0, n.useState)(!0), 2)),
            i = o[0],
            a = o[1],
            l = Q((0, n.useState)(!1), 2),
            c = l[0],
            s = l[1],
            u = Q((0, n.useState)(!1), 2),
            p = u[0],
            d = u[1],
            f = Q((0, n.useState)(null), 2),
            v = f[0],
            h = f[1],
            m = Q((0, n.useState)({ word: '' }), 2),
            w = m[0],
            y = m[1],
            g = Q((0, n.useState)([]), 2),
            b = g[0],
            T = g[1],
            z = Q((0, n.useState)([]), 2),
            k = z[0],
            S = z[1],
            E = Q((0, n.useState)(!1), 2),
            _ = E[0],
            C = E[1],
            N = document.getElementById('cardsHolderRepeatingInput');
          function O() {
            C(!0);
          }
          return (
            (0, n.useEffect)(
              function () {
                if (e && 0 !== e.length) {
                  var n = e;
                  n.forEach(function (n) {
                    return (n.number = Math.floor(10 * Math.random()) + 1);
                  }),
                    n.sort(function (n, t) {
                      return n.number - t.number;
                    }),
                    S(n);
                }
              },
              [e]
            ),
            (0, n.useEffect)(
              function () {
                e &&
                  0 !== e.length &&
                  k &&
                  k.length === e.length &&
                  (a(!0), h(k[0]));
              },
              [k]
            ),
            (0, n.useEffect)(
              function () {
                console.log(k);
              },
              [k]
            ),
            (0, n.useEffect)(
              function () {
                N &&
                  v.word === w.word &&
                  (d(!0), N.classList.add('cardsHolder__input_active')),
                  N &&
                    v.word !== w.word &&
                    p &&
                    (d(!1), N.classList.remove('cardsHolder__input_active'));
              },
              [w]
            ),
            (0, Tt.jsx)(Tt.Fragment, {
              children: (0, Tt.jsxs)('section', {
                className: 'cardsHolder__content',
                id: 'cardsHolder',
                children: [
                  i &&
                    (0, Tt.jsxs)('div', {
                      className: 'cardsHolder__form',
                      children: [
                        (0, Tt.jsx)('div', {
                          children: (function () {
                            if (v && null !== v)
                              return (0, Tt.jsxs)(Tt.Fragment, {
                                children: [
                                  (0, Tt.jsxs)('div', {
                                    className: 'cardsHolder__title-raw',
                                    children: [
                                      (0, Tt.jsx)('p', {
                                        className: 'cardsHolder__title',
                                        children: v.translation,
                                      }),
                                      (0, Tt.jsx)('p', {
                                        className: 'cardsHolder__hint',
                                        onClick: O,
                                        children:
                                          ((n = v),
                                          _
                                            ? ''.concat(n.transcription)
                                            : '\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430'),
                                      }),
                                    ],
                                  }),
                                  c &&
                                    (0, Tt.jsxs)(Tt.Fragment, {
                                      children: [
                                        (0, Tt.jsx)('p', {
                                          className: 'cardsHolder__title',
                                          children: v.word,
                                        }),
                                        v &&
                                          null !== v &&
                                          '\u041f\u0440\u0430\u0432\u0434\u0430 \u0432\u0441\u0435.' !==
                                            v.word &&
                                          (0, Tt.jsx)('p', {
                                            children:
                                              '\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e: \u0442\u0430\u043a \u043e\u043d \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u0441\u044f',
                                          }),
                                      ],
                                    }),
                                ],
                              });
                            var n;
                          })(),
                        }),
                        (0, Tt.jsx)('input', {
                          placeholder:
                            '\u041c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u0441\u043b\u043e\u0432\u0430',
                          value: w.word,
                          id: 'cardsHolderRepeatingInput',
                          type: 'text',
                          name: 'word',
                          onChange: function (n) {
                            y(
                              jt(
                                jt({}, w),
                                {},
                                Ot({}, n.target.name, n.target.value)
                              )
                            );
                          },
                          required: !0,
                          className: 'cardsHolder__input',
                          autoComplete: 'off',
                          autoCorrect: 'off',
                          autoCapitalize: 'off',
                          spellCheck: 'false',
                        }),
                        (0, Tt.jsxs)('div', {
                          className: 'cardsHolder__button-block',
                          children: [
                            (0, Tt.jsx)('button', {
                              className: 'cardsHolder__button',
                              onClick: function () {
                                s(!0);
                              },
                              children:
                                '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u043e',
                            }),
                            (0, Tt.jsx)('button', {
                              className: 'cardsHolder__button',
                              onClick: function () {
                                T([].concat(P(b), [v])),
                                  s(!1),
                                  d(!1),
                                  C(!1),
                                  y(jt(jt({}, w), {}, { word: '' })),
                                  N.classList.remove(
                                    'cardsHolder__input_active'
                                  ),
                                  k.length > 1
                                    ? (h(k[1]), S(k.slice(1)))
                                    : h({
                                        word: '\u041f\u0440\u0430\u0432\u0434\u0430 \u0432\u0441\u0435.',
                                        translation:
                                          '\u0412\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u043b\u0438 \u0432\u0441\u0435!',
                                        transcription:
                                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430',
                                      });
                              },
                              children:
                                '\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f',
                            }),
                          ],
                        }),
                      ],
                    }),
                  v &&
                    null !== v &&
                    '\u041f\u0440\u0430\u0432\u0434\u0430 \u0432\u0441\u0435.' ===
                      v.word &&
                    (0, Tt.jsxs)('div', {
                      className: 'cardsHolder__arrow-container',
                      onClick: function () {
                        s(!1), d(!1), S(e), C(!1);
                      },
                      children: [
                        (0, Tt.jsx)('img', {
                          src: Lt,
                          alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                          className: 'cardsHolder__arrow1',
                        }),
                        (0, Tt.jsx)('p', {
                          className: 'deckItem__text',
                          children:
                            '\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0441\u043d\u043e\u0432\u0430',
                        }),
                      ],
                    }),
                  (0, Tt.jsxs)('div', {
                    className: 'cardsHolder__arrow-container',
                    onClick: function () {
                      C(!1),
                        a(!1),
                        s(!1),
                        d(!1),
                        y(jt(jt({}, w), {}, { word: '' })),
                        r();
                    },
                    children: [
                      (0, Tt.jsx)('img', {
                        src: Ct,
                        alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                        className: 'deckItem__arrow',
                      }),
                      (0, Tt.jsx)('p', {
                        className: 'deckItem__text',
                        children:
                          '\u041d\u0430\u0437\u0430\u0434 \u043a \u0442\u0435\u043c\u0435',
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Rt = e.p + 'static/media/around.45cb0ac2222a0b4d6ec3.png';
      var It = function (t) {
          var e = t.item,
            r = t.cardsAreVisible,
            o = h(function (n) {
              return n.currentDeckReducer;
            }).currentDeck,
            i = Qn(),
            a = x(),
            l = Q((0, n.useState)(!1), 2),
            c = l[0],
            s = l[1],
            u = Q((0, n.useState)(!1), 2),
            p = u[0],
            d = u[1];
          function f() {
            d(!p);
          }
          return (0, Tt.jsxs)('div', {
            className: 'wordCard',
            children: [
              !p &&
                (0, Tt.jsxs)(Tt.Fragment, {
                  children: [
                    r &&
                      (0, Tt.jsx)('p', {
                        className: 'word',
                        children: e.translation,
                      }),
                    !r &&
                      (0, Tt.jsxs)(Tt.Fragment, {
                        children: [
                          (0, Tt.jsx)('p', {
                            className: 'word',
                            children: e.vocalization,
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'translation',
                            children: e.translation,
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'translation',
                            children: e.transcription,
                          }),
                        ],
                      }),
                    r &&
                      (0, Tt.jsxs)(Tt.Fragment, {
                        children: [
                          (0, Tt.jsx)('p', {
                            className: 'translation1 translation2',
                            onClick: function () {
                              s(!c);
                            },
                            children: c
                              ? ''.concat(e.transcription)
                              : '\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430',
                          }),
                          (0, Tt.jsx)('img', {
                            src: Rt,
                            alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0440\u043e\u0442\u0430',
                            className: 'wordCard__img',
                            onClick: f,
                          }),
                        ],
                      }),
                  ],
                }),
              p &&
                (0, Tt.jsxs)(Tt.Fragment, {
                  children: [
                    (0, Tt.jsx)('p', {
                      className: 'word',
                      children: e.vocalization,
                    }),
                    (0, Tt.jsx)('p', {
                      className: 'translation1',
                      children: e.transcription,
                    }),
                    (0, Tt.jsx)('img', {
                      src: Rt,
                      alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0440\u043e\u0442\u0430',
                      className: 'wordCard__img',
                      onClick: f,
                    }),
                  ],
                }),
              e &&
                e.ruTopic.includes(
                  '\u0413\u043b\u0430\u0433\u043e\u043b\u044b'
                ) &&
                (0, Tt.jsx)('p', {
                  className: 'text',
                  onClick: function () {
                    o &&
                      (a(gt(e)),
                      i(
                        '/topics/'
                          .concat(o.enTopic, '/')
                          .concat(e.enTranslation)
                      ));
                  },
                  children:
                    'c\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u043e\u0440\u043c\u044b',
                }),
            ],
          });
        },
        Ft = e.p + 'static/media/magn.91bddf17f77eb6e84788.png';
      var Dt = function () {
        var t = Qn(),
          e = x(),
          r = Q((0, n.useState)([]), 2),
          o = r[0],
          i = r[1],
          a = Q((0, n.useState)([]), 2),
          l = a[0],
          c = a[1],
          s = Q((0, n.useState)(!0), 2),
          u = s[0],
          p = s[1],
          d = Q((0, n.useState)(!1), 2),
          f = d[0],
          v = d[1],
          m = Q((0, n.useState)(!1), 2),
          w = m[0],
          y = m[1],
          g = Q((0, n.useState)(''), 2),
          b = g[0],
          T = g[1],
          z = h(function (n) {
            return n.currentDeckReducer;
          }).currentDeck;
        function k() {
          p(!0), v(!1), y(!1);
        }
        return (
          (0, n.useEffect)(
            function () {
              c(
                '' !== b
                  ? o.filter(function (n) {
                      return n.ruTopic.includes(
                        '\u0413\u043b\u0430\u0433\u043e\u043b\u044b'
                      )
                        ? n.ruTopic.includes(
                            '\u0413\u043b\u0430\u0433\u043e\u043b\u044b'
                          )
                          ? n.word.toLowerCase().includes(b.toLowerCase()) ||
                            n.vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.translation
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.transcription
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.infinitive.translation
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.infinitive.word
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.infinitive.vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.infinitive.transcription
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[0].vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[1].vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[2].vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[3].vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[0].word
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[1].word
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[2].word
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[3].word
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[0].transcription
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[1].transcription
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[2].transcription
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[3].transcription
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[0].translation
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[1].translation
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[2].translation
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.present[3].translation
                              .toLowerCase()
                              .includes(b.toLowerCase())
                          : void 0
                        : n.word.toLowerCase().includes(b.toLowerCase()) ||
                            n.vocalization
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.translation
                              .toLowerCase()
                              .includes(b.toLowerCase()) ||
                            n.transcription
                              .toLowerCase()
                              .includes(b.toLowerCase());
                    })
                  : o
              );
            },
            [o, b]
          ),
          (0, n.useEffect)(function () {
            T('');
          }, []),
          (0, n.useEffect)(
            function () {
              var n;
              z &&
                null !== z &&
                ((n = ht.filter(function (n) {
                  return n.ruTopic.includes(z.ruTopic);
                })),
                i(n)),
                z && null !== z && '\u0412\u0441\u0435' === z.ruTopic && i(ht);
            },
            [z]
          ),
          (0, n.useEffect)(
            function () {
              c(o);
            },
            [o]
          ),
          (0, Tt.jsxs)(Tt.Fragment, {
            children: [
              ' ',
              z && null !== z && void 0 !== z
                ? (0, Tt.jsxs)(Tt.Fragment, {
                    children: [
                      (0, Tt.jsx)(zt, {}),
                      (0, Tt.jsx)('main', {
                        className: 'main__content1',
                        children: (0, Tt.jsxs)('section', {
                          className: 'deckItem__content2',
                          children: [
                            (0, Tt.jsx)('div', {
                              className: 'deckItem__title-container',
                              children:
                                z &&
                                null !== z &&
                                (0, Tt.jsxs)(Tt.Fragment, {
                                  children: [
                                    (0, Tt.jsxs)('h1', {
                                      className: 'deckItem__title',
                                      children: [
                                        '\u0421\u043b\u043e\u0432\u0430 \u043f\u043e \u0442\u0435\u043c\u0435: ',
                                        z.ruTopic,
                                      ],
                                    }),
                                    (0, Tt.jsxs)('div', {
                                      className: 'deckItem__title-container1',
                                      onClick: function () {
                                        e(yt()), t('/');
                                      },
                                      children: [
                                        (0, Tt.jsx)('img', {
                                          src: Ct,
                                          alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                                          className: 'deckItem__arrow1',
                                        }),
                                        (0, Tt.jsx)('p', {
                                          className: 'deckItem__text1',
                                          children:
                                            '\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                            u &&
                              !f &&
                              !w &&
                              (0, Tt.jsx)('form', {
                                className: 'searchForm__form',
                                children: (0, Tt.jsxs)('div', {
                                  className: 'searchForm__input-container',
                                  children: [
                                    (0, Tt.jsx)('input', {
                                      className: 'searchForm__input',
                                      type: 'name',
                                      name: 'search',
                                      id: 'search',
                                      placeholder:
                                        '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e',
                                      required: !0,
                                      onChange: function (n) {
                                        return T(n.target.value);
                                      },
                                    }),
                                    (0, Tt.jsx)('img', {
                                      className: 'searchForm__img',
                                      src: Ft,
                                      alt: '\u041b\u0443\u043f\u0430',
                                    }),
                                  ],
                                }),
                              }),
                            u &&
                              null !== z &&
                              0 !== o.length &&
                              0 !== l &&
                              (0, Tt.jsx)('div', {
                                className: 'deckItem__words',
                                children: l.map(function (n, t) {
                                  return (0, Tt.jsx)(
                                    It,
                                    { item: n, cardsAreVisible: f },
                                    t
                                  );
                                }),
                              }),
                            !u &&
                              w &&
                              (0, Tt.jsx)(At, {
                                words: o,
                                handleCloseModesClick: k,
                              }),
                            u &&
                              !f &&
                              (0, Tt.jsxs)('div', {
                                className: 'decks__button-container',
                                children: [
                                  (0, Tt.jsx)('button', {
                                    className: 'deckItem__train-button',
                                    onClick: function () {
                                      v(!0);
                                    },
                                    children:
                                      '\u0423\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438',
                                  }),
                                  (0, Tt.jsx)('button', {
                                    className: 'deckItem__train-button',
                                    onClick: function () {
                                      p(!1), y(!0);
                                    },
                                    children:
                                      '\u041f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u0430',
                                  }),
                                  u &&
                                    !f &&
                                    !w &&
                                    '\u0427\u0438\u0441\u043b\u0430' ===
                                      z.ruTopic &&
                                    (0, Tt.jsx)('button', {
                                      className: 'deckItem__train-button',
                                      onClick: function () {
                                        e(yt()), t('/numbers');
                                      },
                                      children:
                                        '\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u0430',
                                    }),
                                ],
                              }),
                            !w &&
                              f &&
                              (0, Tt.jsxs)('div', {
                                className: 'deckItem__arrow-container',
                                onClick: k,
                                children: [
                                  (0, Tt.jsx)('img', {
                                    src: Ct,
                                    alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                                    className: 'deckItem__arrow1',
                                  }),
                                  (0, Tt.jsx)('p', {
                                    className: 'deckItem__text1',
                                    children:
                                      '\u041d\u0430\u0437\u0430\u0434 \u043a \u0442\u0435\u043c\u0435',
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      (0, Tt.jsx)(St, {}),
                    ],
                  })
                : (0, Tt.jsx)(Nt, {}),
            ],
          })
        );
      };
      var Mt = function () {
        var t = Qn(),
          e = x(),
          r = Q((0, n.useState)([]), 2),
          o = (r[0], r[1], Q((0, n.useState)(!0), 2)),
          i = (o[0], o[1], Q((0, n.useState)(!1), 2)),
          a = (i[0], i[1]),
          l = Q((0, n.useState)(!1), 2),
          c =
            (l[0],
            l[1],
            h(function (n) {
              return n.currentDeckReducer;
            }).currentDeck),
          s = h(function (n) {
            return n.currentDeckReducer;
          }).currentWord;
        return (0, Tt.jsxs)(Tt.Fragment, {
          children: [
            (0, Tt.jsx)(zt, {}),
            (0, Tt.jsx)('main', {
              className: 'main__content1',
              children: (0, Tt.jsxs)('section', {
                className: 'wordItem__content',
                children: [
                  (0, Tt.jsxs)('div', {
                    className: 'wordItem__title-container',
                    children: [
                      (0, Tt.jsxs)('div', {
                        className: 'wordItem__titleTextContainer',
                        children: [
                          (0, Tt.jsx)('h1', {
                            className: 'wordItem__title',
                            children:
                              '\u0424\u043e\u0440\u043c\u044b \u0433\u043b\u0430\u0433\u043e\u043b\u0430 ',
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'wordItem__title1',
                            children: s.infinitive.vocalization,
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'wordItem__text-grey',
                            children: s.infinitive.transcription,
                          }),
                        ],
                      }),
                      (0, Tt.jsxs)('div', {
                        className: 'wordItem__title-container1',
                        onClick: function () {
                          e(yt()), e(bt()), t('/');
                        },
                        children: [
                          (0, Tt.jsx)('img', {
                            src: Ct,
                            alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                            className: 'deckItem__arrow',
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'deckItem__text',
                            children:
                              '\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Tt.jsxs)('div', {
                    className: 'wordItem__forms-container',
                    children: [
                      (0, Tt.jsxs)('div', {
                        className: 'wordItem__form-container',
                        children: [
                          (0, Tt.jsxs)('p', {
                            className: 'wordItem__word',
                            children: [
                              '\u05d4\u05d5 ',
                              s.present[0].vocalization,
                            ],
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'wordItem__transcription',
                            children: s.present[0].transcription,
                          }),
                          (0, Tt.jsxs)('p', {
                            children: [
                              '(\u043e\u043d ',
                              s.present[0].translation,
                              ')',
                            ],
                          }),
                        ],
                      }),
                      (0, Tt.jsxs)('div', {
                        className: 'wordItem__form-container',
                        children: [
                          (0, Tt.jsxs)('p', {
                            className: 'wordItem__word',
                            children: [
                              '\u05d4\u05d9 ',
                              s.present[1].vocalization,
                            ],
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'wordItem__transcription',
                            children: s.present[1].transcription,
                          }),
                          (0, Tt.jsxs)('p', {
                            children: [
                              '(\u043e\u043d\u0430 ',
                              s.present[1].translation,
                              ')',
                            ],
                          }),
                        ],
                      }),
                      (0, Tt.jsxs)('div', {
                        className: 'wordItem__form-container',
                        children: [
                          (0, Tt.jsxs)('p', {
                            className: 'wordItem__word',
                            children: [
                              '\u05d4\u05dd ',
                              s.present[2].vocalization,
                            ],
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'wordItem__transcription',
                            children: s.present[2].transcription,
                          }),
                          (0, Tt.jsxs)('p', {
                            children: [
                              '(\u043e\u043d\u0438 ',
                              s.present[2].translation,
                              ')',
                            ],
                          }),
                        ],
                      }),
                      (0, Tt.jsxs)('div', {
                        className: 'wordItem__form-container',
                        children: [
                          (0, Tt.jsxs)('p', {
                            className: 'wordItem__word',
                            children: [
                              '\u05d4\u05df ',
                              s.present[3].vocalization,
                            ],
                          }),
                          (0, Tt.jsx)('p', {
                            className: 'wordItem__transcription',
                            children: s.present[3].transcription,
                          }),
                          (0, Tt.jsxs)('p', {
                            children: [
                              '(\u043e\u043d\u0438 ',
                              s.present[3].translation,
                              ')',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Tt.jsxs)('div', {
                    className: 'deckItem__arrow-container',
                    onClick: function () {
                      console.log(document.referrer),
                        a(!0),
                        e(bt()),
                        t('/topics/'.concat(c.enTopic));
                    },
                    children: [
                      (0, Tt.jsx)('img', {
                        src: Ct,
                        alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                        className: 'deckItem__arrow',
                      }),
                      (0, Tt.jsx)('p', {
                        className: 'deckItem__text',
                        children:
                          '\u041d\u0430\u0437\u0430\u0434 \u043a \u0442\u0435\u043c\u0435',
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, Tt.jsx)(St, {}),
          ],
        });
      };
      var Vt = function () {
        var t = Qn(),
          e = x(),
          r = Q((0, n.useState)(null), 2),
          o = r[0],
          i = r[1],
          a = Q((0, n.useState)(!1), 2),
          l = a[0],
          c = a[1],
          s = Q((0, n.useState)(!1), 2),
          u = s[0],
          p = s[1],
          d = Q((0, n.useState)(!1), 2),
          f = d[0],
          v = d[1],
          h = ht.filter(function (n) {
            return n.ruTopic.includes('\u0427\u0438\u0441\u043b\u0430');
          }),
          m = Q((0, n.useState)({ word: '' }), 2),
          w = m[0],
          y = m[1],
          g = document.getElementById('cardsHolderRepeatingNumInput');
        function b() {
          var n,
            t,
            e =
              Math.floor(100 * Math.random()) + Math.floor(10 * Math.random());
          if (e < 21 && null !== h)
            (n = h.filter(function (n) {
              return n.num === e;
            })[0].word),
              (t = h.filter(function (n) {
                return n.num === e;
              })[0].transcription);
          else if (e > 20 && e < 101 && e % 10 === 0)
            (n = h.filter(function (n) {
              return n.num === e;
            })[0].word),
              (t = h.filter(function (n) {
                return n.num === e;
              })[0].transcription);
          else if (e > 20 && e < 110 && 100 !== e) {
            var r, o, a, l;
            e > 20 && e < 100 && ((r = String(e)[0]), (o = 10 * Number(r))),
              e > 99 && (o = 100),
              (a = h.filter(function (n) {
                return n.num === o;
              })[0].word),
              (l = h.filter(function (n) {
                return n.num === o;
              })[0].transcription);
            var c,
              s = e % 10;
            1 === s &&
              ((c = ' \u05d5\u05d0\u05d7\u05ea'),
              (t = ''.concat(l, ' \u0432\u044d \u0430\u0445\u0410\u0442'))),
              2 === s &&
                ((c = ' \u05d5\u05e9\u05ea\u05d9\u05d9\u05dd'),
                (t = ''.concat(l, ' \u0443 \u0448\u0442\u0410\u0439\u043c'))),
              3 === s &&
                ((c = ' \u05df\u05e9\u05dc\u05d5\u05e9'),
                (t = ''.concat(
                  l,
                  ' \u0432\u044d \u0448\u0430\u043b\u041e\u0448'
                ))),
              4 === s &&
                ((c = ' \u05d5\u05d0\u05e8\u05d1\u05e2'),
                (t = ''.concat(l, ' \u0432\u044d \u0430\u0440\u0431\u0410'))),
              5 === s &&
                ((c = ' \u05d5\u05d7\u05de\u05e9'),
                (t = ''.concat(
                  l,
                  ' \u0432\u044d \u0445\u0430\u043c\u042d\u0448'
                ))),
              6 === s &&
                ((c = ' \u05d5\u05e9\u05e9'),
                (t = ''.concat(l, ' \u0432\u0430 \u0448\u0435\u0448'))),
              7 === s &&
                ((c = ' \u05d5\u05e9\u05d1\u05e2'),
                (t = ''.concat(l, ' \u0432\u0430 \u0448\u042d\u0432\u0430'))),
              8 === s &&
                ((c = ' \u05d5\u05e9\u05de\u05d5\u05e0\u05d4'),
                (t = ''.concat(l, ' \u0443 \u0448\u043c\u041e\u043d\u044d'))),
              9 === s &&
                ((c = ' \u05d5\u05ea\u05e9\u05e2'),
                (t = ''.concat(l, ' \u0432\u0430 \u0442\u042d\u0448\u0430'))),
              (n = ''.concat(a).concat(c));
          }
          i({ num: e, meaning: n, transcription: t });
        }
        function T() {
          v(!0);
        }
        return (
          (0, n.useEffect)(function () {
            b();
          }, []),
          (0, n.useEffect)(
            function () {
              g &&
                o.meaning === w.word &&
                (p(!0), g.classList.add('cardsHolder__input_active')),
                g &&
                  o.meaning !== w.word &&
                  u &&
                  (p(!1), g.classList.remove('cardsHolder__input_active'));
            },
            [w]
          ),
          (0, Tt.jsxs)(Tt.Fragment, {
            children: [
              (0, Tt.jsx)(zt, {}),
              (0, Tt.jsx)('main', {
                className: 'main__content1',
                children: (0, Tt.jsxs)('section', {
                  className: 'deckItem__content',
                  children: [
                    (0, Tt.jsxs)('div', {
                      className: 'deckItem__title-container1',
                      children: [
                        (0, Tt.jsx)('h1', {
                          className: 'numbers__title',
                          children:
                            '\u0417\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u043c \u0447\u0438\u0441\u043b\u0430',
                        }),
                        (0, Tt.jsxs)('div', {
                          className: 'deckItem__title-container1',
                          onClick: function () {
                            e(yt()), t('/');
                          },
                          children: [
                            (0, Tt.jsx)('img', {
                              src: Ct,
                              alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                              className: 'deckItem__arrow',
                            }),
                            (0, Tt.jsx)('p', {
                              className: 'deckItem__text',
                              children:
                                '\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Tt.jsxs)('div', {
                      className: 'cardsHolder__form',
                      children: [
                        (0, Tt.jsx)('div', {
                          children: (function () {
                            if (o && null !== o)
                              return (0, Tt.jsxs)(Tt.Fragment, {
                                children: [
                                  (0, Tt.jsxs)('div', {
                                    className: 'cardsHolder__title-raw',
                                    children: [
                                      (0, Tt.jsx)('p', {
                                        className: 'cardsHolder__title',
                                        children: o.num,
                                      }),
                                      (0, Tt.jsx)('p', {
                                        className: 'cardsHolder__hint',
                                        onClick: T,
                                        children: f
                                          ? ''.concat(o.transcription)
                                          : '\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430',
                                      }),
                                    ],
                                  }),
                                  l &&
                                    (0, Tt.jsxs)(Tt.Fragment, {
                                      children: [
                                        (0, Tt.jsx)('p', {
                                          className: 'cardsHolder__title',
                                          children: o.meaning,
                                        }),
                                        o &&
                                          null !== o &&
                                          (0, Tt.jsx)('p', {
                                            children:
                                              '\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e: \u0442\u0430\u043a \u043e\u043d \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u0441\u044f',
                                          }),
                                      ],
                                    }),
                                ],
                              });
                          })(),
                        }),
                        (0, Tt.jsx)('input', {
                          placeholder:
                            '\u041c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u0441\u043b\u043e\u0432\u0430',
                          value: w.word,
                          id: 'cardsHolderRepeatingNumInput',
                          type: 'text',
                          name: 'word',
                          onChange: function (n) {
                            y(
                              jt(
                                jt({}, w),
                                {},
                                Ot({}, n.target.name, n.target.value)
                              )
                            );
                          },
                          required: !0,
                          className: 'cardsHolder__input',
                          autoComplete: 'off',
                          autoCorrect: 'off',
                          autoCapitalize: 'off',
                          spellCheck: 'false',
                        }),
                        (0, Tt.jsxs)('div', {
                          className: 'cardsHolder__button-block',
                          children: [
                            (0, Tt.jsx)('button', {
                              className: 'cardsHolder__button',
                              onClick: function () {
                                c(!0);
                              },
                              children:
                                '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442',
                            }),
                            (0, Tt.jsx)('button', {
                              className: 'cardsHolder__button',
                              onClick: function () {
                                c(!1),
                                  p(!1),
                                  v(!1),
                                  y(jt(jt({}, w), {}, { word: '' })),
                                  g.classList.remove(
                                    'cardsHolder__input_active'
                                  ),
                                  b();
                              },
                              children:
                                '\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Tt.jsxs)('div', {
                      className: 'deckItem__arrow-container',
                      onClick: function () {
                        c(!1),
                          p(!1),
                          v(!1),
                          y(jt(jt({}, w), {}, { word: '' })),
                          g.classList.remove('cardsHolder__input_active'),
                          e(
                            wt({
                              ruTopic: '\u0427\u0438\u0441\u043b\u0430',
                              enTopic: 'Numbers',
                            })
                          ),
                          t('/topics/Numbers');
                      },
                      children: [
                        (0, Tt.jsx)('img', {
                          src: Ct,
                          alt: '\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u043d\u0430\u0437\u0430\u0434',
                          className: 'deckItem__arrow',
                        }),
                        (0, Tt.jsx)('p', {
                          className: 'deckItem__text',
                          children:
                            '\u041d\u0430\u0437\u0430\u0434 \u043a \u0442\u0435\u043c\u0435',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Tt.jsx)(St, {}),
            ],
          })
        );
      };
      var Ut = function () {
        var t = h(function (n) {
            return n.currentDeckReducer;
          }).currentDeck,
          e = h(function (n) {
            return n.currentDeckReducer;
          }).currentWord,
          r = x(),
          o = Qn();
        return (
          (0, n.useEffect)(function () {
            var n,
              t,
              e = window.location.pathname.slice(8).indexOf('/');
            -1 !== e
              ? ((n = dt.filter(function (n) {
                  return n.enTopic === window.location.pathname.substr(8, e);
                })),
                (t = mt.filter(function (n) {
                  return (
                    n.enTranslation === window.location.pathname.slice(9 + e)
                  );
                })))
              : (n = dt.filter(function (n) {
                  return n.enTopic === window.location.pathname.slice(8);
                })),
              void 0 !== n && n && r(wt(n[0])),
              void 0 !== t && t && r(gt(t[0])),
              n &&
                t &&
                0 !== n.length &&
                0 === t.length &&
                o('/topics/'.concat(n[0].enTopic)),
              ((n || t) && 0 !== n.length) || o('/');
          }, []),
          (0, Tt.jsx)(Tt.Fragment, {
            children: (0, Tt.jsx)('div', {
              className: 'page',
              children: (0, Tt.jsxs)(et, {
                children: [
                  (0, Tt.jsx)(nt, {
                    exact: !0,
                    path: '/',
                    element: (0, Tt.jsx)(_t, {}),
                  }),
                  (0, Tt.jsx)(nt, { path: '*', element: (0, Tt.jsx)(Nt, {}) }),
                  (0, Tt.jsx)(nt, {
                    path: '/numbers',
                    element: (0, Tt.jsx)(Vt, {}),
                  }),
                  null !== t &&
                    (0, Tt.jsx)(nt, {
                      path: '/topics/:deckItem',
                      element: (0, Tt.jsx)(Dt, {}),
                    }),
                  null !== e &&
                    (0, Tt.jsx)(nt, {
                      path: '/topics/:deckItem/:wordItem',
                      element: (0, Tt.jsx)(Mt, {}),
                    }),
                ],
              }),
            }),
          })
        );
      };
      function Wt(n) {
        return function (t) {
          var e = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (o) {
              return 'function' === typeof o ? o(e, r, n) : t(o);
            };
          };
        };
      }
      var Bt = Wt();
      Bt.withExtraArgument = Wt;
      var Ht = Bt;
      function Qt(n) {
        return (
          'Minified Redux error #' +
          n +
          '; visit https://redux.js.org/Errors?code=' +
          n +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      var Kt =
          ('function' === typeof Symbol && Symbol.observable) || '@@observable',
        Xt = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        Zt = {
          INIT: '@@redux/INIT' + Xt(),
          REPLACE: '@@redux/REPLACE' + Xt(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + Xt();
          },
        };
      function qt(n) {
        if ('object' !== typeof n || null === n) return !1;
        for (var t = n; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(n) === t;
      }
      function Jt(n, t, e) {
        var r;
        if (
          ('function' === typeof t && 'function' === typeof e) ||
          ('function' === typeof e && 'function' === typeof arguments[3])
        )
          throw new Error(Qt(0));
        if (
          ('function' === typeof t &&
            'undefined' === typeof e &&
            ((e = t), (t = void 0)),
          'undefined' !== typeof e)
        ) {
          if ('function' !== typeof e) throw new Error(Qt(1));
          return e(Jt)(n, t);
        }
        if ('function' !== typeof n) throw new Error(Qt(2));
        var o = n,
          i = t,
          a = [],
          l = a,
          c = !1;
        function s() {
          l === a && (l = a.slice());
        }
        function u() {
          if (c) throw new Error(Qt(3));
          return i;
        }
        function p(n) {
          if ('function' !== typeof n) throw new Error(Qt(4));
          if (c) throw new Error(Qt(5));
          var t = !0;
          return (
            s(),
            l.push(n),
            function () {
              if (t) {
                if (c) throw new Error(Qt(6));
                (t = !1), s();
                var e = l.indexOf(n);
                l.splice(e, 1), (a = null);
              }
            }
          );
        }
        function d(n) {
          if (!qt(n)) throw new Error(Qt(7));
          if ('undefined' === typeof n.type) throw new Error(Qt(8));
          if (c) throw new Error(Qt(9));
          try {
            (c = !0), (i = o(i, n));
          } finally {
            c = !1;
          }
          for (var t = (a = l), e = 0; e < t.length; e++) {
            (0, t[e])();
          }
          return n;
        }
        function f(n) {
          if ('function' !== typeof n) throw new Error(Qt(10));
          (o = n), d({ type: Zt.REPLACE });
        }
        function v() {
          var n,
            t = p;
          return (
            ((n = {
              subscribe: function (n) {
                if ('object' !== typeof n || null === n)
                  throw new Error(Qt(11));
                function e() {
                  n.next && n.next(u());
                }
                return e(), { unsubscribe: t(e) };
              },
            })[Kt] = function () {
              return this;
            }),
            n
          );
        }
        return (
          d({ type: Zt.INIT }),
          ((r = { dispatch: d, subscribe: p, getState: u, replaceReducer: f })[
            Kt
          ] = v),
          r
        );
      }
      function Gt() {
        for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
          t[e] = arguments[e];
        return 0 === t.length
          ? function (n) {
              return n;
            }
          : 1 === t.length
            ? t[0]
            : t.reduce(function (n, t) {
                return function () {
                  return n(t.apply(void 0, arguments));
                };
              });
      }
      var Yt = { cards: [] },
        $t = { currentDeck: null, currentWord: null },
        ne = (function (n) {
          for (var t = Object.keys(n), e = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            0, 'function' === typeof n[o] && (e[o] = n[o]);
          }
          var i,
            a = Object.keys(e);
          try {
            !(function (n) {
              Object.keys(n).forEach(function (t) {
                var e = n[t];
                if ('undefined' === typeof e(void 0, { type: Zt.INIT }))
                  throw new Error(Qt(12));
                if (
                  'undefined' ===
                  typeof e(void 0, { type: Zt.PROBE_UNKNOWN_ACTION() })
                )
                  throw new Error(Qt(13));
              });
            })(e);
          } catch (l) {
            i = l;
          }
          return function (n, t) {
            if ((void 0 === n && (n = {}), i)) throw i;
            for (var r = !1, o = {}, l = 0; l < a.length; l++) {
              var c = a[l],
                s = e[c],
                u = n[c],
                p = s(u, t);
              if ('undefined' === typeof p) {
                t && t.type;
                throw new Error(Qt(14));
              }
              (o[c] = p), (r = r || p !== u);
            }
            return (r = r || a.length !== Object.keys(n).length) ? o : n;
          };
        })({
          cardsReducer: function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Yt,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case at:
                var e = P(n.cards),
                  r = t.item;
                return (
                  (r.ID = n.cards.length + 1),
                  jt(jt({}, n), {}, { cards: [].concat(P(e), [r]) })
                );
              case it:
                return jt(
                  jt({}, n),
                  {},
                  {
                    cards: n.cards.filter(function (n) {
                      return n.ID !== t.removedItem.ID;
                    }),
                  }
                );
              case lt:
                return jt(
                  jt({}, n),
                  {},
                  {
                    cards: n.cards.map(function (n) {
                      return n.ID !== t.editedItem.ID ? n : t.editedItem;
                    }),
                  }
                );
              default:
                return n;
            }
          },
          currentDeckReducer: function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : $t,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ct:
                return jt(
                  jt({}, n),
                  {},
                  { currentDeck: t.item, currentWord: null }
                );
              case ut:
                return jt(jt({}, n), {}, { currentWord: t.item });
              case pt:
                return jt(jt({}, n), {}, { currentWord: null });
              case st:
                return $t;
              default:
                return n;
            }
          },
        });
      function te(t) {
        var e,
          r = t.basename,
          o = t.children,
          i = t.window,
          a = n.useRef();
        null == a.current &&
          (a.current =
            (void 0 === (e = { window: i, v5Compat: !0 }) && (e = {}),
            rn(
              function (n, t) {
                var e = n.location;
                return $(
                  '',
                  { pathname: e.pathname, search: e.search, hash: e.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default'
                );
              },
              function (n, t) {
                return 'string' === typeof t ? t : nn(t);
              },
              null,
              e
            )));
        var l = a.current,
          c = Q(n.useState({ action: l.action, location: l.location }), 2),
          s = c[0],
          u = c[1];
        return (
          n.useLayoutEffect(
            function () {
              return l.listen(u);
            },
            [l]
          ),
          n.createElement(tt, {
            basename: r,
            children: o,
            location: s.location,
            navigationType: s.action,
            navigator: l,
          })
        );
      }
      var ee, re;
      (function (n) {
        (n.UseScrollRestoration = 'useScrollRestoration'),
          (n.UseSubmitImpl = 'useSubmitImpl'),
          (n.UseFetcher = 'useFetcher');
      })(ee || (ee = {})),
        (function (n) {
          (n.UseFetchers = 'useFetchers'),
            (n.UseScrollRestoration = 'useScrollRestoration');
        })(re || (re = {}));
      var oe =
          ('object' === typeof window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
          Gt,
        ie = r.createRoot(document.getElementById('root')),
        ae = Jt(
          ne,
          oe(
            (function () {
              for (
                var n = arguments.length, t = new Array(n), e = 0;
                e < n;
                e++
              )
                t[e] = arguments[e];
              return function (n) {
                return function () {
                  var e = n.apply(void 0, arguments),
                    r = function () {
                      throw new Error(Qt(15));
                    },
                    o = {
                      getState: e.getState,
                      dispatch: function () {
                        return r.apply(void 0, arguments);
                      },
                    },
                    i = t.map(function (n) {
                      return n(o);
                    });
                  return (
                    (r = Gt.apply(void 0, i)(e.dispatch)),
                    jt(jt({}, e), {}, { dispatch: r })
                  );
                };
              };
            })(Ht)
          )
        );
      ie.render(
        (0, Tt.jsx)(n.StrictMode, {
          children: (0, Tt.jsx)(g, {
            store: ae,
            children: (0, Tt.jsx)(te, { children: (0, Tt.jsx)(Ut, {}) }),
          }),
        })
      ),
        _();
    })();
})();
//# sourceMappingURL=main.c4ee1ea0.js.map
