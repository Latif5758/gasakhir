require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('root', require('./components/root.vue').default);
Vue.component('tengah', require('./components/tengah.vue').default);
Vue.component('bawah', require('./components/bawah.vue').default);
Vue.component('chome', require('./components/chome.vue').default);
Vue.component('cinfo', require('./components/cinfo.vue').default);
Vue.component('cbookmark', require('./components/cbookmark.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
