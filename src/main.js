import Vue from 'vue';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.component('radio-status-widget', {
    props: [
        'apiBase'
    ],
    data: () => {
        return {
            loaded: false,
            trackImage: '',
            trackMetadata: ''
        };
    },
    methods: {
        refreshTrackdata() {
            axios.get(`${this.apiBase}/history?limit=1&offset=0&server=1`)
                .then(response => {
                    console.log("Response: ", response);
                    if(response.data && response.data.results && response.data.results.length){
                        const lastTrack = response.data.results[0];
                        this.loaded = true;
                        this.trackImage = lastTrack.img_url;
                        this.trackMetadata = lastTrack.metadata;
                    }
                })
                .catch(e => {
                    console.log("Error:", e);
                });
        }
    },
    created() {
        this.refreshTrackdata();
        setInterval(()=>{
            this.refreshTrackdata();
        }, 5*1000);
    },
    template: '#statusComponent'
});

new Vue({
    el: '#app'
});
