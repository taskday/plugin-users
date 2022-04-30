var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const useField = window["Components"].useField;
const VAvatar$1 = window["Components"].VAvatar;
const VDropdown$1 = window["Components"].VDropdown;
const VDropdownButton = window["Components"].VDropdownButton;
const VDropdownItems = window["Components"].VDropdownItems;
const VDropdownItem$1 = window["Components"].VDropdownItem;
const defineComponent$1 = window["Vue"].defineComponent;
const computed = window["Vue"].computed;
const _sfc_main$1 = defineComponent$1({
  components: {
    VAvatar: VAvatar$1,
    VDropdown: VDropdown$1,
    VDropdownButton,
    VDropdownItems,
    VDropdownItem: VDropdownItem$1
  },
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup({ page }) {
    const { state, onChange } = useField();
    const users = computed(() => {
      var _a;
      return (_a = page.props.global.users) != null ? _a : [];
    });
    const assegnees = computed(() => {
      return users.value.filter((user) => {
        return `${state.value}`.split(",").includes(`${user.id}`);
      });
    });
    const addUser = (user) => {
      if (state.value.split(",").includes(`${user.id}`)) {
        state.value = state.value.split(",").filter((id) => id !== `${user.id}`).join(",").trim(",");
      } else {
        state.value = `${state.value},${user.id}`;
      }
      onChange();
    };
    return { addUser, users, assegnees };
  }
});
const _renderList$1 = window["Vue"].renderList;
const _Fragment$1 = window["Vue"].Fragment;
const _openBlock$1 = window["Vue"].openBlock;
const _createElementBlock$1 = window["Vue"].createElementBlock;
const _resolveComponent$1 = window["Vue"].resolveComponent;
const _createBlock$1 = window["Vue"].createBlock;
const _createElementVNode$1 = window["Vue"].createElementVNode;
const _withCtx$1 = window["Vue"].withCtx;
const _createVNode$1 = window["Vue"].createVNode;
const _toDisplayString$1 = window["Vue"].toDisplayString;
const _withModifiers = window["Vue"].withModifiers;
const _normalizeClass = window["Vue"].normalizeClass;
const _hoisted_1$1 = { class: "flex items-center justify-start" };
const _hoisted_2$1 = { class: "flex flex-shrink-0 -space-x-1" };
const _hoisted_3$1 = /* @__PURE__ */ _createElementVNode$1("div", { class: "h-7 w-7 focus:outline-none ring-2 ring-white dark:ring-gray-800 dark:bg-gray-700 inline-flex items-center justify-center bg-gray-300 rounded-full" }, [
  /* @__PURE__ */ _createElementVNode$1("svg", {
    class: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ _createElementVNode$1("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
    })
  ])
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VAvatar = _resolveComponent$1("VAvatar");
  const _component_VDropdownButton = _resolveComponent$1("VDropdownButton");
  const _component_VDropdownItem = _resolveComponent$1("VDropdownItem");
  const _component_VDropdownItems = _resolveComponent$1("VDropdownItems");
  const _component_VDropdown = _resolveComponent$1("VDropdown");
  return _openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, [
    _createElementVNode$1("div", _hoisted_2$1, [
      (_openBlock$1(true), _createElementBlock$1(_Fragment$1, null, _renderList$1(_ctx.assegnees, (user) => {
        return _openBlock$1(), _createBlock$1(_component_VAvatar, {
          key: user.id,
          user
        }, null, 8, ["user"]);
      }), 128))
    ]),
    _createElementVNode$1("div", null, [
      _createVNode$1(_component_VDropdown, { width: "64" }, {
        default: _withCtx$1(() => [
          _createVNode$1(_component_VDropdownButton, null, {
            default: _withCtx$1(() => [
              _hoisted_3$1
            ]),
            _: 1
          }),
          _createVNode$1(_component_VDropdownItems, null, {
            default: _withCtx$1(() => [
              (_openBlock$1(true), _createElementBlock$1(_Fragment$1, null, _renderList$1(_ctx.users, (user) => {
                return _openBlock$1(), _createBlock$1(_component_VDropdownItem, {
                  key: user.id,
                  onClick: _withModifiers(() => _ctx.addUser(user), ["prevent"]),
                  class: _normalizeClass([{
                    "font-semibold": _ctx.assegnees.map((u) => u.id).includes(user.id)
                  }, "w-full block whitespace-nowrap truncate"])
                }, {
                  default: _withCtx$1(() => [
                    _createElementVNode$1("span", null, _toDisplayString$1(user.name), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
var UsersField = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const targetMap = new WeakMap();
let trackOpBit = 1;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!isTracking()) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = createDep());
  }
  trackEffects(dep);
}
function isTracking() {
  return shouldTrack && activeEffect !== void 0;
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow && !isReadonly(value)) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (isTracking()) {
    ref2 = toRaw(ref2);
    if (!ref2.dep) {
      ref2.dep = createDep();
    }
    {
      trackEffects(ref2.dep);
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, _shallow) {
    this._shallow = _shallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = _shallow ? value : toRaw(value);
    this._value = _shallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this._shallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
Promise.resolve();
const defineComponent = window["Vue"].defineComponent;
const VDropdown = window["Components"].VDropdown;
const VDropdownItem = window["Components"].VDropdownItem;
const VAvatar = window["Components"].VAvatar;
const _sfc_main = defineComponent({
  components: {
    VDropdown,
    VDropdownItem,
    VAvatar
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    filter: {
      type: Object,
      required: true
    },
    onUpdate: {
      type: Function,
      required: true
    },
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    ref(props.filter);
    return {};
  }
});
const _renderList = window["Vue"].renderList;
const _Fragment = window["Vue"].Fragment;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const _resolveComponent = window["Vue"].resolveComponent;
const _createBlock = window["Vue"].createBlock;
const _createElementVNode = window["Vue"].createElementVNode;
const _createVNode = window["Vue"].createVNode;
const _toDisplayString = window["Vue"].toDisplayString;
const _withCtx = window["Vue"].withCtx;
const _hoisted_1 = { class: "flex items-center justify-start" };
const _hoisted_2 = { class: "flex flex-shrink-0 -space-x-1" };
const _hoisted_3 = /* @__PURE__ */ _createElementVNode("button", {
  "aria-haspopup": "listbox",
  "aria-expanded": "true",
  "aria-labelledby": "listbox-label",
  type: "button",
  class: "h-7 w-7 focus:outline-none ring-2 ring-white dark:ring-gray-800 dark:bg-gray-700 inline-flex items-center justify-center bg-gray-300 rounded-full"
}, [
  /* @__PURE__ */ _createElementVNode("svg", {
    class: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ _createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
    })
  ])
], -1);
const _hoisted_4 = { class: "p-1" };
const _hoisted_5 = { class: "flex items-center space-x-2" };
const _hoisted_6 = { class: "whitespace-nowrap truncate" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_base_avatar = _resolveComponent("base-avatar");
  const _component_VDropdownItem = _resolveComponent("VDropdownItem");
  const _component_VDropdown = _resolveComponent("VDropdown");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.assegneesRef, (user) => {
        return _openBlock(), _createBlock(_component_base_avatar, {
          key: user.id,
          user
        }, null, 8, ["user"]);
      }), 128))
    ]),
    _createElementVNode("div", null, [
      _createVNode(_component_VDropdown, { width: "64" }, {
        trigger: _withCtx(() => [
          _hoisted_3
        ]),
        default: _withCtx(() => [
          _createElementVNode("div", _hoisted_4, [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.usersRef, (user) => {
              return _openBlock(), _createBlock(_component_VDropdownItem, {
                onClick: () => _ctx.addUser(user),
                role: "option",
                key: user.id,
                selected: _ctx.assegneesRef.map((u) => u.id).includes(user.id)
              }, {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_5, [
                    _createVNode(_component_base_avatar, { user }, null, 8, ["user"]),
                    _createElementVNode("span", _hoisted_6, _toDisplayString(user.name), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["onClick", "selected"]);
            }), 128))
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
var UsersFilter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
document.addEventListener("taskday:init", () => {
  Taskday.register("users", {
    field: UsersField,
    filter: UsersFilter
  });
});
