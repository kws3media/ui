import comps from "./script/components.json" assert { type: "json" };

console.log(comps);

const components = {};

components.metadata = comps.meta;

let modules = {};

Array.isArray(comps.modules) &&
  comps.modules.forEach((comp) => {
    modules[comp.name] = comp;
  });

components.modules = modules;
// const components = {
//   metadata: {
//     package: {
//       name: "@kws3-ui",
//       version: "2.0.1",
//       path: "@kws3/ui",
//     },
//     version: "1.0.0",
//     exports: 71,
//   },
//   modules: {
//     Message: {
//       path: "helpers/Message.svelte",
//       exportType: "default",
//     },
//     Divider: {
//       path: "helpers/Divider.svelte",
//       exportType: "default",
//     },

//     Toggle: {
//       path: "controls/Toggle.svelte",
//       exportType: "default",
//     },

//     Popover: {
//       path: "helpers/Popover.svelte",
//       exportType: "default",
//     },
//     Icon: {
//       path: "helpers/Icon.svelte",
//       exportType: "default",
//     },
//     Modal: {
//       path: "helpers/Modal.svelte",
//       exportType: "default",
//     },
//     CardModal: {
//       path: "helpers/CardModal.svelte",
//       exportType: "default",
//     },
//     Panel: {
//       path: "helpers/Panel.svelte",
//       exportType: "default",
//     },
//     Notification: {
//       path: "helpers/Notification.svelte",
//       exportType: "default",
//     },
//     Loader: {
//       path: "helpers/Loader.svelte",
//       exportType: "default",
//     },
//     ActionSheet: {
//       path: "helpers/ActionSheet.svelte",
//       exportType: "default",
//     },
//     Skeleton: {
//       path: "helpers/Skeleton.svelte",
//       exportType: "default",
//     },
//     Timeline: {
//       path: "helpers/Timeline/Timeline.svelte",
//       exportType: "default",
//     },
//     TimelineItem: {
//       path: "helpers/Timeline/TimelineItem.svelte",
//       exportType: "default",
//     },
//     TimelineHeader: {
//       path: "helpers/Timeline/TimelineHeader.svelte",
//       exportType: "default",
//     },
//     Nl2br: {
//       path: "helpers/Nl2br.svelte",
//       exportType: "default",
//     },
//     ClipboardCopier: {
//       path: "helpers/ClipboardCopier.svelte",
//       exportType: "default",
//     },
//     ScrollableList: {
//       path: "helpers/ScrollableList.svelte",
//       exportType: "default",
//     },

//     FloatingUIOutput: {
//       path: "helpers/FloatingUI/FloatingUIOutput.svelte",
//       exportType: "default",
//     },
//     Floatie: {
//       path: "helpers/FloatingUI/Floatie.svelte",
//       exportType: "default",
//     },
//     Portal: {
//       path: "svelte-portal",
//       exportType: "default",
//       externalPackage: true,
//     },
//     ConfirmButton: {
//       path: "buttons/ConfirmButton.svelte",
//       exportType: "default",
//     },
//     DeleteButton: {
//       path: "buttons/DeleteButton.svelte",
//       exportType: "default",
//     },
//     SubmitButton: {
//       path: "buttons/SubmitButton.svelte",
//       exportType: "default",
//     },
//     ProcessButton: {
//       path: "buttons/ProcessButton.svelte",
//       exportType: "default",
//     },
//     Checkbox: {
//       path: "controls/Checkbox.svelte",
//       exportType: "default",
//     },
//     FileUpload: {
//       path: "controls/FileUpload.svelte",
//       exportType: "default",
//     },
//     NumberInput: {
//       path: "controls/NumberInput.svelte",
//       exportType: "default",
//     },
//     Radio: {
//       path: "controls/Radio.svelte",
//       exportType: "default",
//     },
//     ToggleButtons: {
//       path: "controls/ToggleButtons.svelte",
//       exportType: "default",
//     },
//     ToggleControl: {
//       path: "controls/ToggleControl.svelte",
//       exportType: "default",
//     },
//     RangeSlider: {
//       path: "controls/RangeSlider.svelte",
//       exportType: "default",
//     },
//     Transition: {
//       path: "transitions/Transition.svelte",
//       exportType: "default",
//     },
//     SlidingPane: {
//       path: "sliding-panes/SlidingPane.svelte",
//       exportType: "default",
//     },
//     SlidingPaneSet: {
//       path: "sliding-panes/SlidingPaneSet.svelte",
//       exportType: "default",
//     },
//     AutoComplete: {
//       path: "forms/AutoComplete.svelte",
//       exportType: "default",
//     },
//     SearchableSelect: {
//       path: "forms/select/SearchableSelect.svelte",
//       exportType: "default",
//     },

//     MultiSelect: {
//       path: "forms/select/MultiSelect.svelte",
//       exportType: "default",
//     },
//     MaskedInput: {
//       path: "forms/MaskedInput.svelte",
//       exportType: "default",
//     },
//     Colorpicker: {
//       path: "forms/colorpicker/Colorpicker.svelte",
//       exportType: "default",
//     },
//     Datepicker: {
//       path: "forms/Datepicker.svelte",
//       exportType: "default",
//     },
//     Timepicker: {
//       path: "forms/Timepicker.svelte",
//       exportType: "default",
//     },
//     SearchInput: {
//       path: "forms/SearchInput.svelte",
//       exportType: "default",
//     },

//     PasswordValidator: {
//       path: "forms/PasswordValidator/PasswordValidator.svelte",
//       exportType: "default",
//     },

//     GridView: {
//       path: "datagrid/GridView/GridView.svelte",
//       exportType: "default",
//     },
//     TileView: {
//       path: "datagrid/TileView/TileView.svelte",
//       exportType: "default",
//     },
//     DataSearch: {
//       path: "datagrid/DataSearch/DataSearch.svelte",
//       exportType: "default",
//     },
//     Pagination: {
//       path: "datagrid/Pagination/Pagination.svelte",
//       exportType: "default",
//     },
//     DataSort: {
//       path: "datagrid/DataSort/DataSort.svelte",
//       exportType: "default",
//     },

//     Chart: {
//       path: "charts/Chart.svelte",
//       exportType: "default",
//     },
//     DonutChart: {
//       path: "charts/DonutChart.svelte",
//       exportType: "default",
//     },
//     PieChart: {
//       path: "charts/PieChart.svelte",
//       exportType: "default",
//     },
//     MixedChart: {
//       path: "charts/MixedChart.svelte",
//       exportType: "default",
//     },
//     BarChart: {
//       path: "charts/BarChart.svelte",
//       exportType: "default",
//     },
//     LineChart: {
//       path: "charts/LineChart.svelte",
//       exportType: "default",
//     },
//     AreaChart: {
//       path: "charts/AreaChart.svelte",
//       exportType: "default",
//     },
//     RadialChart: {
//       path: "charts/RadialChart.svelte",
//       exportType: "default",
//     },
//     activateTooltips: {
//       path: "helpers/Tooltips.js",
//       exportType: "named",
//     },
//     tooltip: {
//       path: "helpers/Tooltips.js",
//       exportType: "named",
//     },
//     popover: {
//       path: "helpers/Tooltips.js",
//       exportType: "named",
//     },
//     alert: {
//       path: "helpers/Dialog/index.js",
//       exportType: "named",
//     },
//     confirm: {
//       path: "helpers/Dialog/index.js",
//       exportType: "named",
//     },
//     prompt: {
//       path: "helpers/Dialog/index.js",
//       exportType: "named",
//     },
//     Dialog: {
//       path: "helpers/Dialog/index.js",
//       exportType: "named",
//     },
//     Notifications: {
//       path: "helpers/FloatingUI/index.js",
//       exportType: "named",
//     },
//     Toasts: {
//       path: "helpers/FloatingUI/index.js",
//       exportType: "named",
//     },
//     Snackbars: {
//       path: "helpers/FloatingUI/index.js",
//       exportType: "named",
//     },
//     FloatiesStore: {
//       path: "helpers/FloatingUI/index.js",
//       exportType: "named",
//     },
//     DatepickerAction: {
//       path: "forms/actions.js",
//       exportType: "named",
//     },
//     TimepickerAction: {
//       path: "forms/actions.js",
//       exportType: "named",
//     },
//     portal: {
//       path: "svelte-portal",
//       exportType: "named",
//       externalPackage: true,
//     },
//   },
// };

console.log(components);
export default components;
