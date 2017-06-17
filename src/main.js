import Vue from 'vue';
import Widget from './widget'

Vue.config.productionTip = false;

new Vue({
    el: '.sc-status-widget',
    components: { Widget },
});
