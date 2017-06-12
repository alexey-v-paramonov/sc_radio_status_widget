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
            trackMetadata: '',
            showProgress: false,
            playbackTime: '',
            totalTrackTime: '',
        };
    },
    mounted: () => {
    },
    beforeDestroy: () => {
        clearInterval(this.timerHandle);
    },
    methods: {
        updateProgress() {
            
            if (this.lastTrack && this.lastTrack.ts && this.lastTrack.length) {
                this.showProgress = true;
                var timeFromStart = (+ new Date()) - this.lastTrack.ts;
                if (timeFromStart > this.lastTrack.length) {
                    timeFromStart = this.lastTrack.length;
                }
                this.playbackTime = this.formatTime(timeFromStart / 1000);
                this.totalTrackTime = this.formatTime(this.lastTrack.length / 1000);
                this.playingProgress = (timeFromStart / this.lastTrack.length) * 100;
            }
            else{
                this.showProgress = false;
            }

        },
        formatTime(sec) {
            var pad = function (n) {
                return (n < 10 ? "0" + n : n);
            };
            sec = parseInt(sec);
            var h = Math.floor(sec / 3600),
                m = Math.floor((sec / 3600) % 1 * 60),
                s = sec % 60;
            if (h > 0) {
                return pad(h) + ":" + pad(m) + ":" + pad(s);
            }
            else {
                return pad(m) + ":" + pad(s);
            }
        },
        refreshTrackdata() {
            axios.get(`${this.apiBase}/history?limit=1&offset=0&server=1`)
                .then(response => {
                    console.log("Response: ", response);
                    if (response.data && response.data.results && response.data.results.length) {
                        this.lastTrack = response.data.results[0];
                        this.loaded = true;
                        this.trackImage = this.lastTrack.img_url;
                        this.trackMetadata = this.lastTrack.metadata;
                    }
                })
                .catch(e => {
                    console.log("Error:", e);
                });
            // 
        }
    },
    created() {

        this.refreshTrackdata();
        setInterval(() => {
            this.refreshTrackdata();
        }, 5 * 1000);

        this.updateProgress();
        this.timerHandle = setInterval(() => {
            this.updateProgress();
        }, 1000);

    },
    template: '#statusComponent'
});

new Vue({
    el: '#app'
});
