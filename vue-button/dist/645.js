"use strict";
(self["webpackChunkvue_button"] = self["webpackChunkvue_button"] || []).push([[645],{

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(963);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=template&id=4d5775a4&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-4d5775a4"),n=n(),(0,runtime_core_esm_bundler/* popScopeId */.Cn)(),n)
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h1", null, "Button app", -1 /* HOISTED */))

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueButton = (0,runtime_core_esm_bundler/* resolveComponent */.up)("VueButton")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [
    _hoisted_1,
    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_VueButton)
  ]))
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(262);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&lang=js


/* harmony default export */ const Appvue_type_script_lang_js = ({
  components: {
    VueButton: (0,runtime_core_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 595).then(__webpack_require__.bind(__webpack_require__, 595))),
  },
  setup() {
    const count = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
});

;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/App.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-4d5775a4"]])

/* harmony default export */ const App = (__exports__);
;// CONCATENATED MODULE: ./src/main.ts


const app = (0,runtime_dom_esm_bundler/* createApp */.ri)(App);
app.mount('#app');

/***/ })

}]);
//# sourceMappingURL=645.js.map