var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const useField = window["Components"].useField;
const VAvatar = window["Components"].VAvatar;
const VDropdown = window["Components"].VDropdown;
const VDropdownButton = window["Components"].VDropdownButton;
const VDropdownItems = window["Components"].VDropdownItems;
const VDropdownItem = window["Components"].VDropdownItem;
const VIcon = window["Components"].VIcon;
const defineComponent$1 = window["Vue"].defineComponent;
const computed$1 = window["Vue"].computed;
const _sfc_main$2 = defineComponent$1({
  components: {
    VAvatar,
    VDropdown,
    VDropdownButton,
    VDropdownItems,
    VDropdownItem,
    VIcon
  },
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup({ page }) {
    const { state, onChange } = useField();
    const users = computed$1(() => {
      var _a;
      return (_a = page.props.global.users) != null ? _a : [];
    });
    const assegnees = computed$1(() => {
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
const _renderList = window["Vue"].renderList;
const _Fragment = window["Vue"].Fragment;
const _openBlock$2 = window["Vue"].openBlock;
const _createElementBlock$1 = window["Vue"].createElementBlock;
const _resolveComponent$1 = window["Vue"].resolveComponent;
const _createBlock$1 = window["Vue"].createBlock;
const _createElementVNode = window["Vue"].createElementVNode;
const _createVNode = window["Vue"].createVNode;
const _withCtx = window["Vue"].withCtx;
const _toDisplayString$1 = window["Vue"].toDisplayString;
const _withModifiers = window["Vue"].withModifiers;
const _normalizeClass = window["Vue"].normalizeClass;
const _hoisted_1 = { class: "flex items-center justify-start" };
const _hoisted_2 = { class: "flex flex-shrink-0 -space-x-1" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VAvatar = _resolveComponent$1("VAvatar");
  const _component_VIcon = _resolveComponent$1("VIcon");
  const _component_VDropdownButton = _resolveComponent$1("VDropdownButton");
  const _component_VDropdownItem = _resolveComponent$1("VDropdownItem");
  const _component_VDropdownItems = _resolveComponent$1("VDropdownItems");
  const _component_VDropdown = _resolveComponent$1("VDropdown");
  return _openBlock$2(), _createElementBlock$1("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      (_openBlock$2(true), _createElementBlock$1(_Fragment, null, _renderList(_ctx.assegnees, (user) => {
        return _openBlock$2(), _createBlock$1(_component_VAvatar, {
          key: user.id,
          user
        }, null, 8, ["user"]);
      }), 128))
    ]),
    _createElementVNode("div", null, [
      _createVNode(_component_VDropdown, { width: "64" }, {
        default: _withCtx(() => [
          _createVNode(_component_VDropdownButton, { class: "rounded-full p-0 h-8 w-8 flex items-center justify-center" }, {
            default: _withCtx(() => [
              _createVNode(_component_VIcon, { name: "plus" })
            ]),
            _: 1
          }),
          _createVNode(_component_VDropdownItems, null, {
            default: _withCtx(() => [
              (_openBlock$2(true), _createElementBlock$1(_Fragment, null, _renderList(_ctx.users, (user) => {
                return _openBlock$2(), _createBlock$1(_component_VDropdownItem, {
                  key: user.id,
                  onClick: _withModifiers(() => _ctx.addUser(user), ["prevent"]),
                  class: _normalizeClass([{
                    "font-semibold": _ctx.assegnees.map((u) => u.id).includes(user.id)
                  }, "w-full block whitespace-nowrap truncate"])
                }, {
                  default: _withCtx(() => [
                    _createElementVNode("span", null, _toDisplayString$1(user.name), 1)
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
var EditField = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _toDisplayString = window["Vue"].toDisplayString;
const _openBlock$1 = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const computed = window["Vue"].computed;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent({
  props: {
    value: null,
    page: null
  },
  setup(__props) {
    const props = __props;
    const assignees = computed(() => {
      return props.page.props.global.users.filter((user) => {
        return `${props.value}`.split(",").includes(`${user.id}`);
      });
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("span", null, _toDisplayString(_unref(assignees).map((a) => a.name).join(", ")), 1);
    };
  }
});
const defineComponent = window["Vue"].defineComponent;
const _sfc_main = defineComponent({
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: false
    },
    page: {
      type: Object,
      required: false
    }
  },
  components: {
    ViewField: _sfc_main$1,
    EditField
  }
});
const _resolveComponent = window["Vue"].resolveComponent;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ViewField = _resolveComponent("ViewField");
  const _component_EditField = _resolveComponent("EditField");
  return _ctx.readonly ? (_openBlock(), _createBlock(_component_ViewField, {
    key: 0,
    value: _ctx.value,
    page: _ctx.page
  }, null, 8, ["value", "page"])) : (_openBlock(), _createBlock(_component_EditField, {
    key: 1,
    page: _ctx.page
  }, null, 8, ["page"]));
}
var UsersField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
document.addEventListener("taskday:init", () => {
  Taskday.register("users", {
    field: UsersField
  });
});
