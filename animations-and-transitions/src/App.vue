<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <hr>
                <button class="btn btn-primary" v-on:click="show = !show">Show Alert</button>
                <br><br>
                <transition v-bind:name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition v-bind:name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" v-on:click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition v-on:before-enter="beforeEnter" v-on:enter="enter"
                    v-on:after-enter="afterEnter" v-on:enter-cancelled="enterCancelled"
                    v-on:before-leave="beforeLeave" v-on:leave="leave"
                    v-on:after-leave="afterLeave" v-on:leave-cancelled="leaveCancelled"
                    v-bind:css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen"
                        v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                    v-on:click="selectedComponent === 'app-success-alert' ?
                    selectedComponent = 'app-danger-alert' :
                    selectedComponent = 'app-success-alert'">Toggle Component</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component v-bind:is="selectedComponent">
                    </component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import SuccessAlert from './SuccessAlert.vue';
    import DangerAlert from './DangerAlert.vue';

    export default {
        components: {
            'app-success-alert': SuccessAlert,
            'app-danger-alert': DangerAlert,
        },

        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
            };
        },

        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },

            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = this.elementWidth + round * 10 + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },

            afterEnter(el) {
                console.log('afterEnter');
            },

            enterCancelled(el) {
                console.log('enterCancelled');
            },

            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },

            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = this.elementWidth - round * 10 + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },

            afterLeave(el) {
                console.log('afterLeave');
            },

            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
        },
    };
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leava {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
