<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary"
                    v-on:click="loadedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success"
                    v-on:click="loadedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger"
                    v-on:click="loadedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component v-bind:is="loadedComponent" v-bind:loaded="loadedComponent">
                    <p slot="content">This is the Content</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
        },

        data() {
            return {
                loadedComponent: 'appBlue',
            };
        },
    }
</script>

<style>
</style>
