<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" v-bind:server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './server.vue';

    export default {
        components: {
            'app-server': Server,
        },

        data() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unkown'},
                    {id: 4, status: 'Normal'},
                ],
            };
        },
    };
</script>

<style>
</style>
