import Utupress from "./utupress.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("utupress", Utupress);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

Utupress.install = install;

export default Utupress;