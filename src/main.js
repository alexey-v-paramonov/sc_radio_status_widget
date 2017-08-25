import Vue from 'vue';
import StreamStatusWidget from './widget'

Vue.config.productionTip = false;
new Vue({
    el: '.sc-status-widget',
    components: { StreamStatusWidget },
});
