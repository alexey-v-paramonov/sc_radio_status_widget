<template>
    <div class="track_st_widget text-centered" v-bind:style="styleObject">
        <div v-if="loaded">
            <img v-bind:src="trackImage" v-bind:style="coverStyle"/>
            <div class="track_st_track-meta" v-bind:style="metaStyle">{{trackMetadata}}</div>
            <div class="track_st_vote-row" id="track_st_vote-row" v-if="showVote && canVote">
                <div class="track_st_vote-td">
                    <div class="track_st_vote-button" v-on:click="voteUp" v-bind:style="voteBtnStyle">
                        <span v-if="trackLikes || trackDislikes" v-bind:style="voteResultPos">{{translations[lang].likes}}: {{trackLikes}}</span>
                        <svg v-else version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 478.2 478.2" style="enable-background:new 0 0 478.2 478.2;" xml:space="preserve">
                            <g>
                                <path d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
                            		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
                            		c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
                            		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
                            		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
                            		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
                            		c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
                            		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
                            		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
                            		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
                            		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
                            		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
                            		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
                            		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
                            		C444.875,295.3,440.675,304.4,431.975,313.4z" />
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="track_st_vote-td">
                    <div class="track_st_vote-button" v-on:click="voteDown" v-bind:style="voteBtnStyle">
                        <span v-if="trackLikes || trackDislikes" v-bind:style="voteResultNeg">{{translations[lang].dislikes}}: {{trackDislikes}}</span>
                        <svg v-else version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 478.174 478.174" style="enable-background:new 0 0 478.174 478.174;" xml:space="preserve">
                            <g>
                                <path d="M457.525,153.074c1.9-5.1,3.7-12,4.2-20c0.7-14.1-2.8-33.9-22.7-51.9c1.3-9.2,1.3-23.8-6.8-38.3
                    		c-10.7-19.2-31.6-32.2-62.2-38.7c-20.5-4.4-47.4-5.3-80-2.8c-65.7-1.3-129.7,6.8-133.3,7.3l-23.5,2.8c-6.8-4.8-15.1-7.6-24-7.6h-61
                    		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c7.2,0,13.9-1.8,19.8-5c4.2,9.2,10.4,19.7,19.6,29.4
                    		c0.5,0.5,1,1,1.6,1.4c31.4,24.1,68.4,110.9,81.5,146.3c-1.3,11-2.6,34.8,8.4,47.7c4.9,5.7,11.7,8.8,19.3,8.8
                    		c7.7,0,34.3-1.8,50.9-24.7c15.7-21.8,16.6-54.4,2.6-97c-11.8-35.8-12.9-51.7-12.5-58.1c5.4,1.2,10.7,2.3,15.8,3.2h0.1
                    		c0.9,0.2,22.9,5.1,49.2,6.3c37.4,1.8,64.5-4.7,80.3-19.2c21.8-19.9,19.2-45.3,12.7-61.5c5.6-7.3,12.4-19.2,13-34.4
                    		C471.925,178.974,467.325,165.674,457.525,153.074z M109.225,222.674h-61c-8.1,0-14.6-6.6-14.6-14.6v-162.5
                    		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5C123.825,216.174,117.325,222.674,109.225,222.674z M430.925,232.374
                    		c0,0.1,3.5,5.6,4.7,13.1c1.5,9.3-1.1,17-8.1,23.4c-19.1,17.4-74.1,13.4-104.8,6.6c-0.4-0.1-0.8-0.2-1.3-0.3
                    		c-5.5-1-11.4-2.2-17.4-3.5c-6.4-2.3-15.2-2-21.8,3.9c-13.3,11.8-11.8,38.6,4.9,89.5c11,33.4,11.4,58.6,1.2,72.7
                    		c-8.6,11.9-22.8,13.4-28.2,13.5c-2.4-4-3.1-17.7-1.3-29c0.3-2.2,0.1-4.5-0.6-6.7c-1.9-5.1-45.8-125.3-90.7-160.9
                    		c-11.7-12.7-16.8-27.6-18.6-34.3c1.2-3.9,1.9-8.1,1.9-12.4v-162.4c0-3-0.3-6-0.9-8.8l10.1-1.2h0.1c0.6-0.1,65.7-8.5,130-7.1
                    		c0.4,0,0.9,0,1.4,0c30.3-2.4,54.8-1.7,72.9,2.2c22.4,4.8,37.2,13.2,44,25.1c7.1,12.3,3.2,25,2.9,26.2c-2.1,5.6-0.2,11.7,4.6,15.3
                    		c29.6,22.2,16,48.1,14.2,51.3c-3.3,5.2-2.5,11.8,1.8,16.3c8.6,9,12.8,18,12.5,26.8c-0.4,13.1-10.5,22.9-11.2,23.5
                    		C428.225,219.474,427.325,226.774,430.925,232.374z" />
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="track_st_progress-wrap track_st_progress" id="trackProgressWrap" v-if="showProgress" v-bind:style="pbStyle">
                <div class="track_st_progress-bar track_st_progress" v-bind:style="pbbStyle"></div>
                <div class="track_st_progress-text" v-bind:style="pbtStyle">{{playbackTime}}/{{totalTrackTime}}</div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: [
        'apiBase', 'serverId', 'lang',
        'bgcolor', 'bgimage', 'bgopacity',
        'meta_font_size','meta_font_style','meta_font_color','meta_opacity',
        'progress_bar_color', 'progress_bar_bg_color', 'progress_bar_height', 'progress_opacity', 'progress_font_color', 'progress_font_opacity',
        'track_image_default', 'track_image_size',
        'vote_buttons_color', 'vote_show',
        'vote_results_font_color_neg', 'vote_results_font_color_pos', 'vote_results_font_size',
        ],
    data: () => {
        return {
            translations: {
                en: {
                    already_voted: "You have already voted for this track",
                    likes: "Likes",
                    dislikes: "Dislikes",
                },
                ru: {
                    already_voted: "Вы уже голосовали за этот трэк",
                    likes: "За",
                    dislikes: "Против",
                },
                fr:{
                    already_voted: "Vous avez déjà voté pour ce titre",
                    likes: "J'Aime",
                    dislikes: "J'Aime pas",
                }
            },
            loaded: true,
            trackImage: '',
            trackImageFailover: '',
            trackMetadata: '',
            showProgress: false,
            playbackTime: '',
            pbbStyle: {
                left: '0px',
            },
            voteResultNeg: {
                color: null,
                'font-size': '12px',
                'line-height': '50px',
            },
            voteResultPos: {
                color: null,
                'font-size': '12px',
                'line-height': '50px',
            },
            totalTrackTime: '',
            // Voting
            canVote: false,
            trackLikes: 0,
            trackDislikes: 0,
            voteRowHeight: 50,
            styleObject: {
            }
        };
    },
    mounted() {
        window.sc_vueTrackWidget = this;
    },
    beforeDestroy: () => {
        this.stop();
    },
    methods: {
        stop: function() {
            clearInterval(this.timerHandle);
            clearInterval(this.refreshTrackHandle);
        },
        hexToRgb: function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },
        vote: function(up) {
            this.voteRowHeight = document.getElementById('track_st_vote-row').clientHeight;

            if (this.lastTrack && this.lastTrack.all_music_id) {
                let url = `${this.apiBase}/music/${this.lastTrack.all_music_id}/`;
                url += up ? 'like/' : 'dislike/';
                axios.post(url)
                    .then(response => {
                        if (response.data) {
                            this.trackLikes = response.data.up;
                            this.trackDislikes = response.data.down;
                        }
                    })
                    .catch(e => {
                        if (e.response.data && e.response.data.result === "already_voted") {
                            alert(this.translations[this.lang].already_voted);
                        }
                    });
            }
        },
        voteUp: function() {
            this.vote(true);
        },
        voteDown: function() {
            this.vote(false);
        },
        updateProgress() {
            if (this.lastTrack && this.lastTrack.ts && this.lastTrack.length) {
                this.showProgress = true;
                let timeFromStart = (+ new Date()) - this.lastTrack.ts;
                if(timeFromStart < 0){
                    timeFromStart = 0;
                }
                if (timeFromStart > this.lastTrack.length) {
                    timeFromStart = this.lastTrack.length;
                }
                this.playbackTime = this.formatTime(timeFromStart / 1000);
                this.totalTrackTime = this.formatTime(this.lastTrack.length / 1000);
                this.playingProgress = (timeFromStart / this.lastTrack.length) * 100;
                if (this.playingProgress >= 100) {
                    this.refreshTrackdata();
                }
            }
            else {
                this.showProgress = false;
            }

            // Update UI
            let progressWrap = document.getElementById('trackProgressWrap');
            if (!progressWrap) {
                return;
            }
            let progressWidth = progressWrap.offsetWidth;
            let barWidth = 100 - this.playingProgress;
            let pixWidth = progressWidth * (barWidth / 100.);

            this.trackProgress = progressWidth - pixWidth;
            this.pbbStyle.left = `${this.trackProgress}px`;

        },
        formatTime(sec) {
            sec = Math.abs(sec);
            let pad = function(n) {
                return (n < 10 ? "0" + n : n);
            };
            sec = parseInt(sec);
            let h = Math.floor(sec / 3600),
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
            axios.get(`${this.apiBase}/history/?limit=1&offset=0&server=${(this.serverId || 1)}`)
                .then(response => {
                    if (response.data && response.data.results && response.data.results.length) {
                        this.lastTrack = response.data.results[0];
                        this.loaded = true;
                        this.trackImage = (this.lastTrack.img_medium_url || this.lastTrack.img_url || this.trackImageFailover);

                        // Track changed
                        if (this.trackMetadata != this.lastTrack.metadata) {
                            this.trackMetadata = this.lastTrack.metadata;
                            this.trackLikes = this.trackDislikes = 0;
                        }
                        this.canVote = this.lastTrack.all_music_id;
                    }
                })
                .catch(e => {
                    this.loaded = false;
                    this.canVote = false;
                });
            //
        }
    },
    created: function() {
        // Create styles
        let rgbBg = this.hexToRgb(this.bgcolor);
        this.styleObject = {
            'background-color': `rgba(${rgbBg.r}, ${rgbBg.g}, ${rgbBg.b}, ${this.bgopacity})`
        };
        if (this.bgimage) {
            this.styleObject['background'] = `url('${this.bgimage}') no-repeat center center`;
            this.styleObject['-webkit-background-size'] = "cover";
            this.styleObject['-moz-background-size'] = "cover";
            this.styleObject['-o-background-size'] = "cover";
            this.styleObject['background-size'] = "cover";
        }

        // Metadata styling
        let rgbMeta = this.hexToRgb(this.meta_font_color);
        this.metaStyle = {
            'font-size': `${this.meta_font_size}px`,
            'color': `rgba(${rgbMeta.r}, ${rgbMeta.g}, ${rgbMeta.b}, ${this.meta_opacity})`,
            'font-style': this.meta_font_style,
        }

        // Progress bar styling
        let rgbPb = this.hexToRgb(this.progress_bar_color);
        let rgbPbBg = this.hexToRgb(this.progress_bar_bg_color);
        let rgbPbFnt = this.hexToRgb(this.progress_font_color);
        this.metaStyle = {
            'font-size': `${this.meta_font_size}px`,
            'color': `rgba(${rgbMeta.r}, ${rgbMeta.g}, ${rgbMeta.b}, ${this.meta_opacity})`,
            'font-style': this.meta_font_style,
        }
        this.pbStyle = {
            'background': `rgba(${rgbPb.r}, ${rgbPb.g}, ${rgbPb.b}, ${this.progress_opacity})`,
            'height': `${this.progress_bar_height}px`,
        }
        this.pbbStyle = {
            'height': `${this.progress_bar_height}px`,
            'background': `rgb(${rgbPbBg.r}, ${rgbPbBg.g}, ${rgbPbBg.b})`,
        }
        this.pbtStyle = {
            'color': `rgba(${rgbPbFnt.r}, ${rgbPbFnt.g}, ${rgbPbFnt.b}, ${this.progress_font_opacity})`,
        }

        // Current track
        this.coverStyle = {
            width: `${this.track_image_size}%`
        }
        this.trackImageFailover = this.track_image_default;

        // Vote buttons style
        let rgbVoteBtn = this.hexToRgb(this.vote_buttons_color);
        this.voteBtnStyle = {
            fill: `rgb(${rgbVoteBtn.r}, ${rgbVoteBtn.g}, ${rgbVoteBtn.b})`
        }

        // Vote buttons styling
        let rgbVoteNeg = this.hexToRgb(this.vote_results_font_color_neg);
        let rgbVotePos = this.hexToRgb(this.vote_results_font_color_pos);

        this.voteResultNeg = {
            'color': `rgb(${rgbVoteNeg.r}, ${rgbVoteNeg.g}, ${rgbVoteNeg.b})`,
            'font-size': `${this.vote_results_font_size}px`,
            'line-height': this.voteRowHeight + 'px',
        }

        this.voteResultPos = {
            'color': `rgb(${rgbVotePos.r}, ${rgbVotePos.g}, ${rgbVotePos.b})`,
            'font-size': `${this.vote_results_font_size}px`,
            'line-height': this.voteRowHeight + 'px',
        }
        this.showVote = this.vote_show === 'true';

        this.refreshTrackdata();
        this.refreshTrackHandle = setInterval(() => {
            this.refreshTrackdata();
        }, 15 * 1000);

        this.updateProgress();
        this.timerHandle = setInterval(() => {
            this.updateProgress();
        }, 1000);
    },

}
</script>

<style scoped>
.track_st_widget {
    font-size: 14px;
    border: 1px solid #000;
    padding: 10px;
}

.track_st_vote-row {
    display: table;
    width: 100%;
}

.track_st_vote-td {
    width: 50%;
    text-align: center;
    display: table-cell
}

.track_st_vote-button svg {
    width: 25%;
    padding-top: 5px;
    padding-bottom: 5px;
}

.track_st_progress {
    width: 100%;
    /* custom */
}

.track_st_progress-bar {
    background: #ddd;
    /* custom */
    left: 0px;
    top: 0;
    z-index: 100;
    position: absolute;
    -webkit-transition: left 0.5s;
    -moz-transition: left 0.5s;
    -o-transition: left 0.5s;
    transition: left 0.5s;
}

.track_st_progress-text {
    z-index: 101;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.track_st_progress-wrap {
    margin: 0px 0;
    overflow: hidden;
    position: relative;
    text-align: center;
}

.text-centered {
    text-align: center;
}

.track_st_track-meta {
    padding: 10px;
}

</style>
