<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" v-bind:key="index"
            v-bind:stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            'app-stock': Stock,
        },

        computed: {
            stocks() {
                return this.$store.getters.stocks;
            },
        },
    };
</script>
