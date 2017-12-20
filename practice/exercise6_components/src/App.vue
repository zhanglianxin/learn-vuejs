<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <!-- servers -->
            <app-servers></app-servers>
            <!-- server details -->
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import ServerDetails from './ServerDetails.vue';
    import Servers from './Servers.vue';

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-server-details': ServerDetails,
            'app-servers': Servers,
        },
    };
</script>

<style>
</style>
