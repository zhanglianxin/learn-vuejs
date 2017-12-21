<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Server {{ server.id }} selected, Status: {{ server.status }}</p>
        <p v-else>Please select a Server</p>
        <hr>
        <button v-on:click="resetStatus">Change to Normal</button>
    </div>
</template>

<script>
    import {serverBus} from '../../main.js';

    export default {
        data() {
            return {
                server: null,
            };
        },

        methods: {
            resetStatus() {
                this.server.status = 'Normal';
            },
        },

        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        },
    };
</script>

<style>
</style>
