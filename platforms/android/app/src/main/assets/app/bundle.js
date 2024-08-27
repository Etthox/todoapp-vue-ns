"use strict";
(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./src/app.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app.css");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Home.vue");
// Added by app-css-loader




const app = (0,nativescript_vue__WEBPACK_IMPORTED_MODULE_1__.createApp)(_components_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_3__.createPinia)();
app.use(pinia);
app.start();


if (true) {
    let hash = __webpack_require__.h();
    let hmrBootEmittedSymbol = Symbol.for('HMRBootEmitted');
    let originalLiveSyncSymbol = Symbol.for('OriginalLiveSync');
    let hmrRuntimeLastLiveSyncSymbol = Symbol.for('HMRRuntimeLastLiveSync');
    const logVerbose = (title, ...info) => {
        if (false) {}
    };
    const setStatus = (hash, status, message, ...info) => {
        // format is important - CLI expects this exact format
        console.log(`[HMR][${hash}] ${status} | ${message}`);
        if (info === null || info === void 0 ? void 0 : info.length) {
            logVerbose('Additional Info', info);
        }
        // return true if operation was successful
        return status === 'success';
    };
    const applyOptions = {
        ignoreUnaccepted: false,
        ignoreDeclined: false,
        ignoreErrored: false,
        onDeclined(info) {
            setStatus(hash, 'failure', 'A module has been declined.', info);
        },
        onUnaccepted(info) {
            setStatus(hash, 'failure', 'A module has not been accepted.', info);
        },
        onAccepted(info) {
            // console.log('accepted', info)
            logVerbose('Module Accepted', info);
        },
        onDisposed(info) {
            // console.log('disposed', info)
            logVerbose('Module Disposed', info);
        },
        onErrored(info) {
            setStatus(hash, 'failure', 'A module has errored.', info);
        },
    };
    const checkAndApply = async () => {
        hash = __webpack_require__.h();
        const modules = await module.hot.check().catch((error) => {
            return setStatus(hash, 'failure', 'Failed to check.', error.message || error.stack);
        });
        if (!modules) {
            logVerbose('No modules to apply.');
            return false;
        }
        const appliedModules = await module.hot
            .apply(applyOptions)
            .catch((error) => {
            return setStatus(hash, 'failure', 'Failed to apply.', error.message || error.stack);
        });
        if (!appliedModules) {
            logVerbose('No modules applied.');
            return false;
        }
        return setStatus(hash, 'success', 'Successfully applied update.');
    };
    const requireExists = (path) => {
        try {
            global['require'](path);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    const hasUpdate = () => {
        return [
            `~/bundle.${__webpack_require__.h()}.hot-update.json`,
            `~/runtime.${__webpack_require__.h()}.hot-update.json`,
        ].some((path) => requireExists(path));
    };
    if (global.__onLiveSync !== global[hmrRuntimeLastLiveSyncSymbol]) {
        // we store the original liveSync here in case this code runs again
        // which happens when you module.hot.accept() the main file
        global[originalLiveSyncSymbol] = global.__onLiveSync;
    }
    global[hmrRuntimeLastLiveSyncSymbol] = async function () {
        logVerbose('LiveSync');
        if (!hasUpdate()) {
            return false;
        }
        if (!(await checkAndApply())) {
            return false;
        }
        await global[originalLiveSyncSymbol]();
    };
    global.__onLiveSync = global[hmrRuntimeLastLiveSyncSymbol];
    if (!global[hmrBootEmittedSymbol]) {
        global[hmrBootEmittedSymbol] = true;
        setStatus(hash, 'boot', 'HMR Enabled - waiting for changes...');
    }
}


/***/ }),

/***/ "./src/app.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".ml-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".h-6"],"declarations":[{"type":"declaration","property":"height","value":"24"}]},{"type":"rule","selectors":[".w-6"],"declarations":[{"type":"declaration","property":"width","value":"24"}]},{"type":"rule","selectors":[".flex-1"],"declarations":[{"type":"declaration","property":"flex","value":"1 1 0%"}]},{"type":"rule","selectors":[".flex-row"],"declarations":[{"type":"declaration","property":"flex-direction","value":"row"}]},{"type":"rule","selectors":[".space-x-2 > * + *"],"declarations":[{"type":"declaration","property":"--tw-space-x-reverse","value":"0"},{"type":"declaration","property":"margin-right","value":"calc(8 * var(--tw-space-x-reverse))"},{"type":"declaration","property":"margin-left","value":"calc(8 * calc(1 - var(--tw-space-x-reverse)))"}]},{"type":"rule","selectors":[".space-y-4 > * + *"],"declarations":[{"type":"declaration","property":"--tw-space-y-reverse","value":"0"},{"type":"declaration","property":"margin-top","value":"calc(16 * calc(1 - var(--tw-space-y-reverse)))"},{"type":"declaration","property":"margin-bottom","value":"calc(16 * var(--tw-space-y-reverse))"}]},{"type":"rule","selectors":[".rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".rounded-md"],"declarations":[{"type":"declaration","property":"border-radius","value":"6"}]},{"type":"rule","selectors":[".border"],"declarations":[{"type":"declaration","property":"border-width","value":"1px"}]},{"type":"rule","selectors":[".border-gray-300"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(209 213 219 / var(--tw-border-opacity))"}]},{"type":"rule","selectors":[".bg-blue-400"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(96 165 250 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".bg-blue-800"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(30 64 175 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".bg-gray-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 244 246 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-black"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(0 0 0 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".text-gray-500"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(107 114 128 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".shadow"],"declarations":[{"type":"declaration","property":"box-shadow","value":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#65adf1"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "C:\\Users\\renan\\vueapp\\src\\app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("C:\\Users\\renan\\vueapp\\src\\app.css")
	})
}

/***/ }),

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/nativescript-vue/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=script&lang=ts&setup=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var _services_taskService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/services/taskService.ts");



// Pegando o store
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'Home',
    setup(__props, { expose: __expose }) {
        __expose();
        const taskStore = (0,_services_taskService__WEBPACK_IMPORTED_MODULE_1__.useTaskStore)();
        // Estado reativo para o título da nova tarefa
        const newTaskTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        // Computed para a lista de tarefas
        const tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => taskStore.tasks);
        // Função para adicionar uma nova tarefa
        function handleAddTask() {
            taskStore.addTask(newTaskTitle.value);
            newTaskTitle.value = ''; // Limpa o campo de input
        }
        // Função para alternar o estado de conclusão de uma tarefas
        function handleToggleTaskCompletion(task) {
            taskStore.toggleTaskCompletion(task, !task.completed);
        }
        // Função para deletar uma tarefa
        function handleDeleteTask(task) {
            taskStore.deleteTask(task);
        }
        const __returned__ = { taskStore, newTaskTitle, tasks, handleAddTask, handleToggleTaskCompletion, handleDeleteTask };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/nativescript-vue/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/nativescript-vue/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=template&id=8dc7cce2&ts=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ActionBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActionBar");
    const _component_TextField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextField");
    const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
    const _component_StackLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StackLayout");
    const _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");
    const _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");
    const _component_Image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Image");
    const _component_GridLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GridLayout");
    const _component_ScrollView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollView");
    const _component_Page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Page");
    const _component_Frame = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Frame");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Frame, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Page, { class: "bg-gray-100" }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ActionBar, {
                        title: "Todo App",
                        class: "bg-blue-800 text-white"
                    }),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollView, null, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { class: "p-4 space-y-4" }, {
                                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input e botão para criar nova tarefa "),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { class: "flex flex-row space-x-2 bg-white p-4 shadow rounded-md" }, {
                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TextField, {
                                                modelValue: $setup.newTaskTitle,
                                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.newTaskTitle) = $event)),
                                                hint: "Digite a tarefa...",
                                                class: "flex-1 p-2 border border-gray-300 rounded"
                                            }, null, 8 /* PROPS */, ["modelValue"]),
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
                                                text: "Criar",
                                                onTap: $setup.handleAddTask,
                                                class: "bg-blue-400 text-white p-2 rounded"
                                            })
                                        ]),
                                        _: 1 /* STABLE */
                                    }),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Lista de tarefas "),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StackLayout, { class: "space-y-4" }, {
                                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tasks, (task, index) => {
                                                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GridLayout, {
                                                    key: index,
                                                    columns: "*, auto, auto",
                                                    class: "p-4 bg-white rounded-md shadow"
                                                }, {
                                                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Título da tarefa "),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
                                                            text: task.title,
                                                            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([task.completed ? 'line-through text-gray-500' : 'text-black', "task-title"]),
                                                            col: "0"
                                                        }, null, 8 /* PROPS */, ["text", "class"]),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Switch para completar tarefa "),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
                                                            checked: task.completed,
                                                            onCheckedChange: () => $setup.handleToggleTaskCompletion(task),
                                                            col: "1"
                                                        }, null, 8 /* PROPS */, ["checked", "onCheckedChange"]),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Ícone de lixo "),
                                                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Image, {
                                                            src: "~/assets/closed-trash.png",
                                                            class: "w-6 h-6 ml-4",
                                                            onTap: () => $setup.handleDeleteTask(task),
                                                            col: "2"
                                                        }, null, 8 /* PROPS */, ["onTap"])
                                                    ]),
                                                    _: 2 /* DYNAMIC */
                                                }, 1024 /* DYNAMIC_SLOTS */));
                                            }), 128 /* KEYED_FRAGMENT */))
                                        ]),
                                        _: 1 /* STABLE */
                                    })
                                ]),
                                _: 1 /* STABLE */
                            })
                        ]),
                        _: 1 /* STABLE */
                    })
                ]),
                _: 1 /* STABLE */
            })
        ]),
        _: 1 /* STABLE */
    }));
}


/***/ }),

/***/ "./src/services/taskService.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   useTaskStore: () => (/* binding */ useTaskStore)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/utils/native-helper.android.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-vue/dist/index.js");
// stores/taskStore.ts



class Task {
    title;
    completed;
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }
}
const useTaskStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('taskStore', () => {
    const tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    function addTask(title) {
        if (title.trim() !== '') {
            const newTask = new Task(title.trim());
            tasks.value.push(newTask);
        }
        else {
            console.log('O título da tarefa não pode estar vazio.');
        }
    }
    function toggleTaskCompletion(task, completed) {
        task.completed = completed;
    }
    function deleteTask(task) {
        const index = tasks.value.indexOf(task);
        if (index > -1) {
            tasks.value.splice(index, 1);
            showToast(`Task ${task.title} excluída`);
        }
        else {
            console.error('Task não encontrada para exclusão');
        }
    }
    function showToast(message) {
        const context = _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.android.getApplicationContext();
        if (context) {
            const toast = android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_LONG);
            toast.show();
        }
        else {
            console.error("Contexto da aplicação não encontrado.");
        }
    }
    return {
        tasks,
        addTask,
        toggleTaskCompletion,
        deleteTask,
    };
});


/***/ }),

/***/ "./src/components/Home.vue":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_8dc7cce2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/Home.vue?vue&type=template&id=8dc7cce2&ts=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Home.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_nativescript_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/nativescript-vue/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_nativescript_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_8dc7cce2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/Home.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "8dc7cce2"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('8dc7cce2', __exports__)) {
    api.reload('8dc7cce2', __exports__)
  }
  
  module.hot.accept("./src/components/Home.vue?vue&type=template&id=8dc7cce2&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Home_vue_vue_type_template_id_8dc7cce2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/Home.vue?vue&type=template&id=8dc7cce2&ts=true");
(() => {
    api.rerender('8dc7cce2', _Home_vue_vue_type_template_id_8dc7cce2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/Home.vue?vue&type=script&lang=ts&setup=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_3_use_0_node_modules_nativescript_vue_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_3_use_0_node_modules_nativescript_vue_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/nativescript-vue/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=script&lang=ts&setup=true");
 

/***/ }),

/***/ "./src/components/Home.vue?vue&type=template&id=8dc7cce2&ts=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_3_use_0_node_modules_nativescript_vue_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_nativescript_vue_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_8dc7cce2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_nativescript_webpack_dist_loaders_nativescript_worker_loader_index_js_node_modules_ts_loader_index_js_clonedRuleSet_3_use_0_node_modules_nativescript_vue_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_nativescript_vue_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_8dc7cce2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/webpack/dist/loaders/nativescript-worker-loader/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/nativescript-vue/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/nativescript-vue/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=template&id=8dc7cce2&ts=true");


/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./src/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQztRQUMzQyxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLE9BQWU7UUFDaEMsTUFBTSxPQUFPLEdBQUcsdURBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxLQUFLO1FBQ0wsT0FBTztRQUNQLG9CQUFvQjtRQUNwQixVQUFVO0tBQ1gsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6RHNFO0FBQ1A7QUFDTDs7QUFFN0QsQ0FBOEc7QUFDOUcsaUNBQWlDLHVIQUFlLENBQUMsb0ZBQU0sYUFBYSxtRkFBTTtBQUMxRTtBQUNBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQSxFQUFFLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUJBQWlCLENBQUMsaUVBQWtELEVBQUU7QUFBQTtBQUN4RSw2QkFBNkIsbUZBQU07QUFDbkMsR0FBRzs7QUFFSDs7O0FBR0EsaUVBQWU7Ozs7Ozs7Ozs7OztBQ3RCZ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9jb21wb25lbnRzL0hvbWUudnVlPzkxNDEiLCJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/MWQ3OSIsIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvc2VydmljZXMvdGFza1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YzUyOSIsIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT8wODkxIiwid2VicGFjazovL3Z1ZWFwcC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQgeyBjcmVhdGVQaW5pYSB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lLnZ1ZSc7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChIb21lKTtcbmNvbnN0IHBpbmlhID0gY3JlYXRlUGluaWEoKTtcblxuYXBwLnVzZShwaW5pYSk7XG5hcHAuc3RhcnQoKTsiLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIipcIixcIjo6YmVmb3JlXCIsXCI6OmFmdGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIjo6YmFja2Ryb3BcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1sLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgtNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnctNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmxleC0xXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZmxleFwiLFwidmFsdWVcIjpcIjEgMSAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mbGV4LXJvd1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZsZXgtZGlyZWN0aW9uXCIsXCJ2YWx1ZVwiOlwicm93XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNwYWNlLXgtMiA+ICogKyAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zcGFjZS14LXJldmVyc2VcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiY2FsYyg4ICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcImNhbGMoOCAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zcGFjZS15LTQgPiAqICsgKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc3BhY2UteS1yZXZlcnNlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCJjYWxjKDE2ICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcImNhbGMoMTYgKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucm91bmRlZC1tZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItZ3JheS0zMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmx1ZS00MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYig5NiAxNjUgMjUwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtODAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzAgNjQgMTc1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyYXktMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjQzIDI0NCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2hhZG93XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm94LXNoYWRvd1wiLFwidmFsdWVcIjpcInZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdylcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzY1YWRmMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiQzpcXFxcVXNlcnNcXFxccmVuYW5cXFxcdnVlYXBwXFxcXHNyY1xcXFxhcHAuY3NzXCIpXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcblx0XHRjb25zdCB7IHJlbW92ZVRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblx0XHRyZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTKFwiQzpcXFxcVXNlcnNcXFxccmVuYW5cXFxcdnVlYXBwXFxcXHNyY1xcXFxhcHAuY3NzXCIpXG5cdH0pXG59IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFRhc2ssIHVzZVRhc2tTdG9yZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Rhc2tTZXJ2aWNlJztcblxuLy8gUGVnYW5kbyBvIHN0b3JlXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnSG9tZScsXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHRhc2tTdG9yZSA9IHVzZVRhc2tTdG9yZSgpO1xuXG4vLyBFc3RhZG8gcmVhdGl2byBwYXJhIG8gdMOtdHVsbyBkYSBub3ZhIHRhcmVmYVxuY29uc3QgbmV3VGFza1RpdGxlID0gcmVmPHN0cmluZz4oJycpO1xuXG4vLyBDb21wdXRlZCBwYXJhIGEgbGlzdGEgZGUgdGFyZWZhc1xuY29uc3QgdGFza3MgPSBjb21wdXRlZCgoKSA9PiB0YXNrU3RvcmUudGFza3MpO1xuXG4vLyBGdW7Dp8OjbyBwYXJhIGFkaWNpb25hciB1bWEgbm92YSB0YXJlZmFcbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soKSB7XG4gICAgdGFza1N0b3JlLmFkZFRhc2sobmV3VGFza1RpdGxlLnZhbHVlKTtcbiAgICBuZXdUYXNrVGl0bGUudmFsdWUgPSAnJzsgLy8gTGltcGEgbyBjYW1wbyBkZSBpbnB1dFxufVxuXG4vLyBGdW7Dp8OjbyBwYXJhIGFsdGVybmFyIG8gZXN0YWRvIGRlIGNvbmNsdXPDo28gZGUgdW1hIHRhcmVmYXNcbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2s6IFRhc2spIHtcbiAgdGFza1N0b3JlLnRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2ssICF0YXNrLmNvbXBsZXRlZCk7XG59XG5cbi8vIEZ1bsOnw6NvIHBhcmEgZGVsZXRhciB1bWEgdGFyZWZhXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUYXNrKHRhc2s6IFRhc2spIHtcbiAgdGFza1N0b3JlLmRlbGV0ZVRhc2sodGFzayk7XG59XG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgdGFza1N0b3JlLCBuZXdUYXNrVGl0bGUsIHRhc2tzLCBoYW5kbGVBZGRUYXNrLCBoYW5kbGVUb2dnbGVUYXNrQ29tcGxldGlvbiwgaGFuZGxlRGVsZXRlVGFzayB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gIDxGcmFtZT5cbiAgICA8UGFnZSBjbGFzcz1cImJnLWdyYXktMTAwXCI+XG4gICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiVG9kbyBBcHBcIiBjbGFzcz1cImJnLWJsdWUtODAwIHRleHQtd2hpdGVcIiAvPlxuXG4gICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwicC00IHNwYWNlLXktNFwiPlxuICAgICAgICAgIDwhLS0gSW5wdXQgZSBib3TDo28gcGFyYSBjcmlhciBub3ZhIHRhcmVmYSAtLT5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtMiBiZy13aGl0ZSBwLTQgc2hhZG93IHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJuZXdUYXNrVGl0bGVcIiBcbiAgICAgICAgICAgICAgaGludD1cIkRpZ2l0ZSBhIHRhcmVmYS4uLlwiIFxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtMSBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDcmlhclwiIEB0YXA9XCJoYW5kbGVBZGRUYXNrXCIgY2xhc3M9XCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkXCIgLz5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgPCEtLSBMaXN0YSBkZSB0YXJlZmFzIC0tPlxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgdi1mb3I9XCIodGFzaywgaW5kZXgpIGluIHRhc2tzXCIgOmtleT1cImluZGV4XCIgY29sdW1ucz1cIiosIGF1dG8sIGF1dG9cIiBjbGFzcz1cInAtNCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvd1wiPlxuICAgICAgICAgICAgICA8IS0tIFTDrXR1bG8gZGEgdGFyZWZhIC0tPlxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0YXNrLnRpdGxlXCIgOmNsYXNzPVwidGFzay5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoIHRleHQtZ3JheS01MDAnIDogJ3RleHQtYmxhY2snXCIgY2xhc3M9XCJ0YXNrLXRpdGxlXCIgY29sPVwiMFwiIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8IS0tIFN3aXRjaCBwYXJhIGNvbXBsZXRhciB0YXJlZmEgLS0+XG4gICAgICAgICAgICAgIDxTd2l0Y2ggOmNoZWNrZWQ9XCJ0YXNrLmNvbXBsZXRlZFwiIEBjaGVja2VkQ2hhbmdlPVwiKCkgPT4gaGFuZGxlVG9nZ2xlVGFza0NvbXBsZXRpb24odGFzaylcIiBjb2w9XCIxXCIgLz5cblxuICAgICAgICAgICAgICA8IS0tIMONY29uZSBkZSBsaXhvIC0tPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvY2xvc2VkLXRyYXNoLnBuZ1wiIGNsYXNzPVwidy02IGgtNiBtbC00XCIgQHRhcD1cIigpID0+IGhhbmRsZURlbGV0ZVRhc2sodGFzaylcIiBjb2w9XCIyXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbiAgPC9GcmFtZT4gXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFRhc2ssIHVzZVRhc2tTdG9yZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Rhc2tTZXJ2aWNlJztcblxuLy8gUGVnYW5kbyBvIHN0b3JlXG5jb25zdCB0YXNrU3RvcmUgPSB1c2VUYXNrU3RvcmUoKTtcblxuLy8gRXN0YWRvIHJlYXRpdm8gcGFyYSBvIHTDrXR1bG8gZGEgbm92YSB0YXJlZmFcbmNvbnN0IG5ld1Rhc2tUaXRsZSA9IHJlZjxzdHJpbmc+KCcnKTtcblxuLy8gQ29tcHV0ZWQgcGFyYSBhIGxpc3RhIGRlIHRhcmVmYXNcbmNvbnN0IHRhc2tzID0gY29tcHV0ZWQoKCkgPT4gdGFza1N0b3JlLnRhc2tzKTtcblxuLy8gRnVuw6fDo28gcGFyYSBhZGljaW9uYXIgdW1hIG5vdmEgdGFyZWZhXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKCkge1xuICAgIHRhc2tTdG9yZS5hZGRUYXNrKG5ld1Rhc2tUaXRsZS52YWx1ZSk7XG4gICAgbmV3VGFza1RpdGxlLnZhbHVlID0gJyc7IC8vIExpbXBhIG8gY2FtcG8gZGUgaW5wdXRcbn1cblxuLy8gRnVuw6fDo28gcGFyYSBhbHRlcm5hciBvIGVzdGFkbyBkZSBjb25jbHVzw6NvIGRlIHVtYSB0YXJlZmFzXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVUYXNrQ29tcGxldGlvbih0YXNrOiBUYXNrKSB7XG4gIHRhc2tTdG9yZS50b2dnbGVUYXNrQ29tcGxldGlvbih0YXNrLCAhdGFzay5jb21wbGV0ZWQpO1xufVxuXG4vLyBGdW7Dp8OjbyBwYXJhIGRlbGV0YXIgdW1hIHRhcmVmYVxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlVGFzayh0YXNrOiBUYXNrKSB7XG4gIHRhc2tTdG9yZS5kZWxldGVUYXNrKHRhc2spO1xufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZXNvbHZlQ29tcG9uZW50IGFzIF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIGNvbnN0IF9jb21wb25lbnRfQWN0aW9uQmFyID0gX3Jlc29sdmVDb21wb25lbnQoXCJBY3Rpb25CYXJcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfVGV4dEZpZWxkID0gX3Jlc29sdmVDb21wb25lbnQoXCJUZXh0RmllbGRcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfQnV0dG9uID0gX3Jlc29sdmVDb21wb25lbnQoXCJCdXR0b25cIikhXG4gIGNvbnN0IF9jb21wb25lbnRfU3RhY2tMYXlvdXQgPSBfcmVzb2x2ZUNvbXBvbmVudChcIlN0YWNrTGF5b3V0XCIpIVxuICBjb25zdCBfY29tcG9uZW50X0xhYmVsID0gX3Jlc29sdmVDb21wb25lbnQoXCJMYWJlbFwiKSFcbiAgY29uc3QgX2NvbXBvbmVudF9Td2l0Y2ggPSBfcmVzb2x2ZUNvbXBvbmVudChcIlN3aXRjaFwiKSFcbiAgY29uc3QgX2NvbXBvbmVudF9JbWFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiSW1hZ2VcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfR3JpZExheW91dCA9IF9yZXNvbHZlQ29tcG9uZW50KFwiR3JpZExheW91dFwiKSFcbiAgY29uc3QgX2NvbXBvbmVudF9TY3JvbGxWaWV3ID0gX3Jlc29sdmVDb21wb25lbnQoXCJTY3JvbGxWaWV3XCIpIVxuICBjb25zdCBfY29tcG9uZW50X1BhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIlBhZ2VcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfRnJhbWUgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkZyYW1lXCIpIVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9GcmFtZSwgbnVsbCwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1BhZ2UsIHsgY2xhc3M6IFwiYmctZ3JheS0xMDBcIiB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9BY3Rpb25CYXIsIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRvZG8gQXBwXCIsXG4gICAgICAgICAgICBjbGFzczogXCJiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9TY3JvbGxWaWV3LCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1N0YWNrTGF5b3V0LCB7IGNsYXNzOiBcInAtNCBzcGFjZS15LTRcIiB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBJbnB1dCBlIGJvdMOjbyBwYXJhIGNyaWFyIG5vdmEgdGFyZWZhIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1N0YWNrTGF5b3V0LCB7IGNsYXNzOiBcImZsZXggZmxleC1yb3cgc3BhY2UteC0yIGJnLXdoaXRlIHAtNCBzaGFkb3cgcm91bmRlZC1tZFwiIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1RleHRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLm5ld1Rhc2tUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCgkc2V0dXAubmV3VGFza1RpdGxlKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJEaWdpdGUgYSB0YXJlZmEuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImZsZXgtMSBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9CdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ3JpYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFwOiAkc2V0dXAuaGFuZGxlQWRkVGFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImJnLWJsdWUtNDAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIExpc3RhIGRlIHRhcmVmYXMgXCIpLFxuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfU3RhY2tMYXlvdXQsIHsgY2xhc3M6IFwic3BhY2UteS00XCIgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAudGFza3MsICh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0dyaWRMYXlvdXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIqLCBhdXRvLCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInAtNCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIFTDrXR1bG8gZGEgdGFyZWZhIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9MYWJlbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGFzay50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW3Rhc2suY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCB0ZXh0LWdyYXktNTAwJyA6ICd0ZXh0LWJsYWNrJywgXCJ0YXNrLXRpdGxlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0ZXh0XCIsIFwiY2xhc3NcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgU3dpdGNoIHBhcmEgY29tcGxldGFyIHRhcmVmYSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfU3dpdGNoLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB0YXNrLmNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZTogKCkgPT4gJHNldHVwLmhhbmRsZVRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2spLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImNoZWNrZWRcIiwgXCJvbkNoZWNrZWRDaGFuZ2VcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgw41jb25lIGRlIGxpeG8gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X0ltYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvY2xvc2VkLXRyYXNoLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidy02IGgtNiBtbC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhcDogKCkgPT4gJHNldHVwLmhhbmRsZURlbGV0ZVRhc2sodGFzayksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib25UYXBcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMjQgLyogRFlOQU1JQ19TTE9UUyAqLykpXG4gICAgICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCIvLyBzdG9yZXMvdGFza1N0b3JlLnRzXHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcclxuaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdwaW5pYSc7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUYXNrU3RvcmUgPSBkZWZpbmVTdG9yZSgndGFza1N0b3JlJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tzID0gcmVmPFRhc2tbXT4oW10pO1xyXG5cclxuICBmdW5jdGlvbiBhZGRUYXNrKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aXRsZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZS50cmltKCkpO1xyXG4gICAgICB0YXNrcy52YWx1ZS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ08gdMOtdHVsbyBkYSB0YXJlZmEgbsOjbyBwb2RlIGVzdGFyIHZhemlvLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRpb24odGFzazogVGFzaywgY29tcGxldGVkOiBib29sZWFuKSB7XHJcbiAgICB0YXNrLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzazogVGFzaykge1xyXG4gICAgY29uc3QgaW5kZXggPSB0YXNrcy52YWx1ZS5pbmRleE9mKHRhc2spO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGFza3MudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgc2hvd1RvYXN0KGBUYXNrICR7dGFzay50aXRsZX0gZXhjbHXDrWRhYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUYXNrIG7Do28gZW5jb250cmFkYSBwYXJhIGV4Y2x1c8OjbycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1RvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IFV0aWxzLmFuZHJvaWQuZ2V0QXBwbGljYXRpb25Db250ZXh0KCk7XHJcbiAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICBjb25zdCB0b2FzdCA9IGFuZHJvaWQud2lkZ2V0LlRvYXN0Lm1ha2VUZXh0KGNvbnRleHQsIG1lc3NhZ2UsIGFuZHJvaWQud2lkZ2V0LlRvYXN0LkxFTkdUSF9MT05HKTtcclxuICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNvbnRleHRvIGRhIGFwbGljYcOnw6NvIG7Do28gZW5jb250cmFkby5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdGFza3MsXHJcbiAgICBhZGRUYXNrLFxyXG4gICAgdG9nZ2xlVGFza0NvbXBsZXRpb24sXHJcbiAgICBkZWxldGVUYXNrLFxyXG4gIH07XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZGM3Y2NlMiZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmc2V0dXA9dHJ1ZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZzZXR1cD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL0hvbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjhkYzdjY2UyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnOGRjN2NjZTInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc4ZGM3Y2NlMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGRjN2NjZTImdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc4ZGM3Y2NlMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svZGlzdC9sb2FkZXJzL25hdGl2ZXNjcmlwdC13b3JrZXItbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMy51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZzZXR1cD10cnVlXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svZGlzdC9sb2FkZXJzL25hdGl2ZXNjcmlwdC13b3JrZXItbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMy51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZzZXR1cD10cnVlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=