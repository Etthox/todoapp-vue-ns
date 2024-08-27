"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

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


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmE3NTMxODM2ODNkNTNkMDk3MDA5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUNzQ3JCO0FBQ3lCO0FBRTdELGtCQUFrQjtBRG5DbEIsOEVBQTRCLG9EQUFnQixDQUFDO0lBQzNDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDbkMsUUFBUSxFQUFFLENBQUM7UUNpQ2IsTUFBTSxTQUFTLEdBQUcsbUVBQVksRUFBRSxDQUFDO1FBRWpDLDhDQUE4QztRQUM5QyxNQUFNLFlBQVksR0FBRyx3Q0FBRyxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXJDLG1DQUFtQztRQUNuQyxNQUFNLEtBQUssR0FBRyw2Q0FBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5Qyx3Q0FBd0M7UUFDeEMsU0FBUyxhQUFhO1lBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMseUJBQXlCO1FBQ3RELENBQUM7UUFFRCw0REFBNEQ7UUFDNUQsU0FBUywwQkFBMEIsQ0FBQyxJQUFVO1lBQzVDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELGlDQUFpQztRQUNqQyxTQUFTLGdCQUFnQixDQUFDLElBQVU7WUFDbEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDO1FEN0JELE1BQU0sWUFBWSxHQUFHLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLDBCQUEwQixFQUFFLGdCQUFnQixFQUFFO1FBQ3BILE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLGlC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Q0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7d0REcEN4RCx5RkFBcUM7d0RBQ3JDLGlEQUFvRzs0REFBM0YsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTOzREQUFHLGVBQWEsUUFBUSxpQ0FBMEIsQ0FBQyxJQUFJOzREQUFHLEdBQUcsRUFBQyxHQUFHO3lEQ3lDbEYsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO3dERHZDckUsMEVBQXNCO3dEQUN0QixpREFBMEc7NERBQW5HLEdBQUcsRUFBQywyQkFBMkI7NERBQUMsS0FBSyxFQUFDLGNBQWM7NERBQUUsS0FBRyxRQUFRLHVCQUFnQixDQUFDLElBQUk7NERBQUcsR0FBRyxFQUFDLEdBQUc7eURDNkN4RixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7cURBQ25DLENBQUM7b0REekU1QjtpREMyRXlCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7NENBQy9CLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3lDQUMvQixDQUFDO3dDRDdFdEI7cUNDK0VtQixDQUFDO2lDQUNILENBQUM7Z0NEaEZsQjs2QkNrRmUsQ0FBQzt5QkFDSCxDQUFDO3dCRG5GZDtxQkNxRlcsQ0FBQztpQkFDSCxDQUFDO2dCRHRGVjthQ3dGTyxDQUFDO1NBQ0gsQ0FBQztRRHpGTjtLQzJGRyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/OTE0MSIsIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT8xZDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBUYXNrLCB1c2VUYXNrU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlcy90YXNrU2VydmljZSc7XG5cbi8vIFBlZ2FuZG8gbyBzdG9yZVxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ0hvbWUnLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCB0YXNrU3RvcmUgPSB1c2VUYXNrU3RvcmUoKTtcblxuLy8gRXN0YWRvIHJlYXRpdm8gcGFyYSBvIHTDrXR1bG8gZGEgbm92YSB0YXJlZmFcbmNvbnN0IG5ld1Rhc2tUaXRsZSA9IHJlZjxzdHJpbmc+KCcnKTtcblxuLy8gQ29tcHV0ZWQgcGFyYSBhIGxpc3RhIGRlIHRhcmVmYXNcbmNvbnN0IHRhc2tzID0gY29tcHV0ZWQoKCkgPT4gdGFza1N0b3JlLnRhc2tzKTtcblxuLy8gRnVuw6fDo28gcGFyYSBhZGljaW9uYXIgdW1hIG5vdmEgdGFyZWZhXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKCkge1xuICAgIHRhc2tTdG9yZS5hZGRUYXNrKG5ld1Rhc2tUaXRsZS52YWx1ZSk7XG4gICAgbmV3VGFza1RpdGxlLnZhbHVlID0gJyc7IC8vIExpbXBhIG8gY2FtcG8gZGUgaW5wdXRcbn1cblxuLy8gRnVuw6fDo28gcGFyYSBhbHRlcm5hciBvIGVzdGFkbyBkZSBjb25jbHVzw6NvIGRlIHVtYSB0YXJlZmFzXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVUYXNrQ29tcGxldGlvbih0YXNrOiBUYXNrKSB7XG4gIHRhc2tTdG9yZS50b2dnbGVUYXNrQ29tcGxldGlvbih0YXNrLCAhdGFzay5jb21wbGV0ZWQpO1xufVxuXG4vLyBGdW7Dp8OjbyBwYXJhIGRlbGV0YXIgdW1hIHRhcmVmYVxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlVGFzayh0YXNrOiBUYXNrKSB7XG4gIHRhc2tTdG9yZS5kZWxldGVUYXNrKHRhc2spO1xufVxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHRhc2tTdG9yZSwgbmV3VGFza1RpdGxlLCB0YXNrcywgaGFuZGxlQWRkVGFzaywgaGFuZGxlVG9nZ2xlVGFza0NvbXBsZXRpb24sIGhhbmRsZURlbGV0ZVRhc2sgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICA8RnJhbWU+XG4gICAgPFBhZ2UgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIlRvZG8gQXBwXCIgY2xhc3M9XCJiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlXCIgLz5cblxuICAgICAgPFNjcm9sbFZpZXc+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cInAtNCBzcGFjZS15LTRcIj5cbiAgICAgICAgICA8IS0tIElucHV0IGUgYm90w6NvIHBhcmEgY3JpYXIgbm92YSB0YXJlZmEgLS0+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTIgYmctd2hpdGUgcC00IHNoYWRvdyByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICB2LW1vZGVsPVwibmV3VGFza1RpdGxlXCIgXG4gICAgICAgICAgICAgIGhpbnQ9XCJEaWdpdGUgYSB0YXJlZmEuLi5cIiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LTEgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ3JpYXJcIiBAdGFwPVwiaGFuZGxlQWRkVGFza1wiIGNsYXNzPVwiYmctYmx1ZS00MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiIC8+XG4gICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgIDwhLS0gTGlzdGEgZGUgdGFyZWZhcyAtLT5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHYtZm9yPVwiKHRhc2ssIGluZGV4KSBpbiB0YXNrc1wiIDprZXk9XCJpbmRleFwiIGNvbHVtbnM9XCIqLCBhdXRvLCBhdXRvXCIgY2xhc3M9XCJwLTQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgPCEtLSBUw610dWxvIGRhIHRhcmVmYSAtLT5cbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGFzay50aXRsZVwiIDpjbGFzcz1cInRhc2suY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCB0ZXh0LWdyYXktNTAwJyA6ICd0ZXh0LWJsYWNrJ1wiIGNsYXNzPVwidGFzay10aXRsZVwiIGNvbD1cIjBcIiAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPCEtLSBTd2l0Y2ggcGFyYSBjb21wbGV0YXIgdGFyZWZhIC0tPlxuICAgICAgICAgICAgICA8U3dpdGNoIDpjaGVja2VkPVwidGFzay5jb21wbGV0ZWRcIiBAY2hlY2tlZENoYW5nZT1cIigpID0+IGhhbmRsZVRvZ2dsZVRhc2tDb21wbGV0aW9uKHRhc2spXCIgY29sPVwiMVwiIC8+XG5cbiAgICAgICAgICAgICAgPCEtLSDDjWNvbmUgZGUgbGl4byAtLT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL2Nsb3NlZC10cmFzaC5wbmdcIiBjbGFzcz1cInctNiBoLTYgbWwtNFwiIEB0YXA9XCIoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2spXCIgY29sPVwiMlwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG4gIDwvRnJhbWU+IFxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBUYXNrLCB1c2VUYXNrU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlcy90YXNrU2VydmljZSc7XG5cbi8vIFBlZ2FuZG8gbyBzdG9yZVxuY29uc3QgdGFza1N0b3JlID0gdXNlVGFza1N0b3JlKCk7XG5cbi8vIEVzdGFkbyByZWF0aXZvIHBhcmEgbyB0w610dWxvIGRhIG5vdmEgdGFyZWZhXG5jb25zdCBuZXdUYXNrVGl0bGUgPSByZWY8c3RyaW5nPignJyk7XG5cbi8vIENvbXB1dGVkIHBhcmEgYSBsaXN0YSBkZSB0YXJlZmFzXG5jb25zdCB0YXNrcyA9IGNvbXB1dGVkKCgpID0+IHRhc2tTdG9yZS50YXNrcyk7XG5cbi8vIEZ1bsOnw6NvIHBhcmEgYWRpY2lvbmFyIHVtYSBub3ZhIHRhcmVmYVxuZnVuY3Rpb24gaGFuZGxlQWRkVGFzaygpIHtcbiAgICB0YXNrU3RvcmUuYWRkVGFzayhuZXdUYXNrVGl0bGUudmFsdWUpO1xuICAgIG5ld1Rhc2tUaXRsZS52YWx1ZSA9ICcnOyAvLyBMaW1wYSBvIGNhbXBvIGRlIGlucHV0XG59XG5cbi8vIEZ1bsOnw6NvIHBhcmEgYWx0ZXJuYXIgbyBlc3RhZG8gZGUgY29uY2x1c8OjbyBkZSB1bWEgdGFyZWZhc1xuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlVGFza0NvbXBsZXRpb24odGFzazogVGFzaykge1xuICB0YXNrU3RvcmUudG9nZ2xlVGFza0NvbXBsZXRpb24odGFzaywgIXRhc2suY29tcGxldGVkKTtcbn1cblxuLy8gRnVuw6fDo28gcGFyYSBkZWxldGFyIHVtYSB0YXJlZmFcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRhc2sodGFzazogVGFzaykge1xuICB0YXNrU3RvcmUuZGVsZXRlVGFzayh0YXNrKTtcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVzb2x2ZUNvbXBvbmVudCBhcyBfcmVzb2x2ZUNvbXBvbmVudCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICBjb25zdCBfY29tcG9uZW50X0FjdGlvbkJhciA9IF9yZXNvbHZlQ29tcG9uZW50KFwiQWN0aW9uQmFyXCIpIVxuICBjb25zdCBfY29tcG9uZW50X1RleHRGaWVsZCA9IF9yZXNvbHZlQ29tcG9uZW50KFwiVGV4dEZpZWxkXCIpIVxuICBjb25zdCBfY29tcG9uZW50X0J1dHRvbiA9IF9yZXNvbHZlQ29tcG9uZW50KFwiQnV0dG9uXCIpIVxuICBjb25zdCBfY29tcG9uZW50X1N0YWNrTGF5b3V0ID0gX3Jlc29sdmVDb21wb25lbnQoXCJTdGFja0xheW91dFwiKSFcbiAgY29uc3QgX2NvbXBvbmVudF9MYWJlbCA9IF9yZXNvbHZlQ29tcG9uZW50KFwiTGFiZWxcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfU3dpdGNoID0gX3Jlc29sdmVDb21wb25lbnQoXCJTd2l0Y2hcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfSW1hZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkltYWdlXCIpIVxuICBjb25zdCBfY29tcG9uZW50X0dyaWRMYXlvdXQgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkdyaWRMYXlvdXRcIikhXG4gIGNvbnN0IF9jb21wb25lbnRfU2Nyb2xsVmlldyA9IF9yZXNvbHZlQ29tcG9uZW50KFwiU2Nyb2xsVmlld1wiKSFcbiAgY29uc3QgX2NvbXBvbmVudF9QYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJQYWdlXCIpIVxuICBjb25zdCBfY29tcG9uZW50X0ZyYW1lID0gX3Jlc29sdmVDb21wb25lbnQoXCJGcmFtZVwiKSFcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9jb21wb25lbnRfRnJhbWUsIG51bGwsIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9QYWdlLCB7IGNsYXNzOiBcImJnLWdyYXktMTAwXCIgfSwge1xuICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfQWN0aW9uQmFyLCB7XG4gICAgICAgICAgICB0aXRsZTogXCJUb2RvIEFwcFwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiYmctYmx1ZS04MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfU2Nyb2xsVmlldywgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9TdGFja0xheW91dCwgeyBjbGFzczogXCJwLTQgc3BhY2UteS00XCIgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgSW5wdXQgZSBib3TDo28gcGFyYSBjcmlhciBub3ZhIHRhcmVmYSBcIiksXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9TdGFja0xheW91dCwgeyBjbGFzczogXCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtMiBiZy13aGl0ZSBwLTQgc2hhZG93IHJvdW5kZWQtbWRcIiB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9UZXh0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5uZXdUYXNrVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgoJHNldHVwLm5ld1Rhc2tUaXRsZSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRGlnaXRlIGEgdGFyZWZhLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJmbGV4LTEgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNyaWFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRhcDogJHNldHVwLmhhbmRsZUFkZFRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBMaXN0YSBkZSB0YXJlZmFzIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1N0YWNrTGF5b3V0LCB7IGNsYXNzOiBcInNwYWNlLXktNFwiIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLnRhc2tzLCAodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9HcmlkTGF5b3V0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKiwgYXV0bywgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwLTQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBUw610dWxvIGRhIHRhcmVmYSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfTGFiZWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFt0YXNrLmNvbXBsZXRlZCA/ICdsaW5lLXRocm91Z2ggdGV4dC1ncmF5LTUwMCcgOiAndGV4dC1ibGFjaycsIFwidGFzay10aXRsZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGV4dFwiLCBcImNsYXNzXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIFN3aXRjaCBwYXJhIGNvbXBsZXRhciB0YXJlZmEgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1N3aXRjaCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogdGFzay5jb21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U6ICgpID0+ICRzZXR1cC5oYW5kbGVUb2dnbGVUYXNrQ29tcGxldGlvbih0YXNrKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJjaGVja2VkXCIsIFwib25DaGVja2VkQ2hhbmdlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIMONY29uZSBkZSBsaXhvIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9JbWFnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2Nsb3NlZC10cmFzaC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInctNiBoLTYgbWwtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYXA6ICgpID0+ICRzZXR1cC5oYW5kbGVEZWxldGVUYXNrKHRhc2spLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9uVGFwXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXzogMiAvKiBEWU5BTUlDICovXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDI0IC8qIERZTkFNSUNfU0xPVFMgKi8pKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgIH0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9