import { clickOutside } from "./click.js";

const VueDirective = (Vue) => {
    Vue.directive("clickOutSide", clickOutside)
}

export default VueDirective

